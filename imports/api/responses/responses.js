import {Class} from 'meteor/jagi:astronomy'

const collection = new Mongo.Collection("responses")

const Response = Class.create({
  name: "Response",
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
  }
})

export {Response}