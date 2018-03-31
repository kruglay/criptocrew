import {Class, Enum} from 'meteor/jagi:astronomy'

const collection = Meteor.users

const sex = Enum.create({
  name: 'sex',
  identifiers: ["MALE", "FEMALE"]
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
    profile: {
      name: {
        type: String,
        default: "",
      },
      sex: {
        name: String,
        type: sex,
        default: sex.MALE
      },
      dateOfBirth: {
        type: Date,
        optional: true,
      },
    }
  },

  meteorMethods: {
    add(data) {
      this.set(data)
      return this.save()
    },

    patch(data) {
      this.set(data)
      return this.save()
    }
  },

  helpers: {
    getName() {
      return this.profile.name ? this.profile.name
        : this.username ? this.username : this.emails[0].address
    }
  }
})

export {User}