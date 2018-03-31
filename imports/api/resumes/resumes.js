import {Class} from 'meteor/jagi:astronomy'
import {User} from "/imports/api/users/index"

const collection = new Mongo.Collection('resumes')

const Resume = Class.create({
  name: "Resume",
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
    _user: String,
    isPublic: Boolean,
    title: String,
    url: String
  },

  meteorMethods: {
    add(data) {
      this.set(data)
      return this.save()
    },

    patch(data) {
      this.set(data)
      return this.save()
    },

    delete() {
      this.remove()
    }
  },

  helpers: {
    user() {
      return User.findOne(this._user).profile
    }
  }
})

export {Resume}
