import {Class, Enum} from 'meteor/jagi:astronomy'
import {searchStatus} from '/imports/api/enums/enums'
import {Personal} from '/imports/api/classes/personal'
import {Specialization} from '/imports/api/classes/specialization'
import {Experience} from '/imports/api/classes/experience'
import {Profile} from '/imports/api/classes/profile'


//todo add validations
const collection = Meteor.users

const Education = Class.create({
  name: 'Education',
  fields: {
    location: {
      type: String,
      optional: true
    },
    name: String,
    faculty: {
      type: String,
      optional: true
    },
    startDate: Date,
    endDate: {
      type: Date,
    },
    additional: {
      type: String,
      optional: true,
    }
  }
})

const Contacts = Class.create({
  name: 'Contacts',
  fields: {
    telephone: {
      type: [String],
      optional: true,
    },
    emails: {
      type: [String],
      optional: true,
    },
    webUrls: {
      type: [String],
      optional: true,
    },
  }
})



const User = Class.create({
  name: "User",
  collection,
  behaviors: {
    timestamp: {
      hasCreatedField: true,
      createdFieldName: 'createdAt',
      hasUpdatedField: true,
      updatedFieldName: 'updatedAt'
    }
  },
  fields: {
    createdAt: Date,
    updatedAt: Date,
    role: {
      type: String,
      default: 'user',
    },

    profile: {
      type: Profile,
      default: () => new Profile()
    }

  },

  meteorMethods: {
    add(data) {
      const userId = Accounts.createUser({email: data.email, password: data.password, profile: {}})
      return userId
    },
  },

  helpers: {
    getName() {
      return this.profile.name ? this.profile.name
        : this.username ? this.username : this.emails[0].address
    }
  }
})

if(Meteor.isServer) {
  User.extend({
    meteorMethods: {
      patch(data, options) {
        const doc = data.data,
          field = data.field
        //save experiences
        if(data.experience) {
          if(options.newInstance) {
            this.profile.experiences.push(data.experience)
          } else {
            const index = this.profile.experiences.findIndex(el => el._id === data.experience._id)
            this.profile.experiences[index] = data.experience
          }
          return this.save()
        }

        if(field) {
          this.set(field, doc, options)
        } else {
          this.set(doc, options)
        }
        return this.save()
      }
    }
  })
}




export {User}