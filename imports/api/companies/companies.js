import {Class} from 'meteor/jagi:astronomy'

const collection = new Mongo.Collection('companies')

const Company = Class.create({
  name: "Company",
  collection,
  fields: {
    title: String,
    _user: String,
    imageUrl: {
      type: String,
      optional: true
    },
    createdAt: Date,
    updatedAt: Date,
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
