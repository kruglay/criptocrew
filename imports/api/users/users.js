import {Class, Enum} from 'meteor/jagi:astronomy'

import {Profile} from '/imports/api/classes/profile'
import {saveCollectionArray} from '/imports/ui/utils/utils'


//todo add validations
const collection = Meteor.users

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

    agent: {
      type: Boolean,
      default: false
    },

    emails: {
      type: [Object],
      default() {
        return []
      }
    },

    username: {
      type: String,
      optional: true
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
      return this.profile.personal && this.profile.personal.firstName ? `${this.profile.personal.firstName} ${this.profile.personal.lastName}`
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
          return saveCollectionArray.call(this, 'experiences', data.experience, options)
        }
        if(data.education) {
          return saveCollectionArray.call(this, 'educations', data.education, options)
        }

        if(field) {
          this.set(field, doc, {...options, merge: true})
        } else {
          this.set(doc, {...options, merge: true})
        }
        return this.save()
      },

      deleteElementOfArray(_id, field) {
        const index = this.profile[field].findIndex(el => el._id === _id)
        this.profile[field].splice(index, 1)
        return this.save()
      }
    }
  })
}

export {User}