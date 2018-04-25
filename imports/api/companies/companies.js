import {Class} from 'meteor/jagi:astronomy'
import {cities, industries, companySize} from '/imports/api/enums/enums'

const collection = new Mongo.Collection('companies')

const Company = Class.create({
  name: "Company",
  collection,
  fields: {
    name: String,
    _user: String,
    imageUrl: {
      type: String,
      optional: true
    },
    backgroundImage: {
      type: String,
      optional: true
    },
    createdAt: Date,
    updatedAt: Date,
    webUrl: {
      type: String,
      optional: true
    },
    size: {
      type:companySize,
      default: 0
    },
    about: {
      type: String,
      optional: true
    },

    location: {
      type: cities,
      optional: true
    },
    address: {
      type: String,
      optional: true
    },
    industry: {
      type: industries,
      optional: true
    }

  },

  behaviors: {
    timestamp: {
      hasCreatedField: true,
      createdFieldName: 'createdAt',
      hasUpdatedField: true,
      updatedFieldName: 'updatedAt'
    }
  },

  meteorMethods: {
    add(data) {
      this.set(data)
      return this.save()
    },

    patch(data) {
      const invocation = DDP._CurrentInvocation.get()
      if(this._user === invocation.userID) {
        throw new Meteor.Error("Company.patch", "You don't have a permission to change a company")
      }
      this.set(data)
      return this.save()
    },

    delete() {
      const invocation = DDP._CurrentInvocation.get()
      if(this._user === invocation.userID) {
        throw new Meteor.Error("Company.delete", "You don't have a permission to delete a company")
      }
      this.remove()
    }
  }
})

export {Company}
