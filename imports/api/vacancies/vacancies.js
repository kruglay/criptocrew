import {Class} from 'meteor/jagi:astronomy'

const collection = new Mongo.Collection("vacancies")

const Vacanсy = Class.create({
  name: "Vacanсy",
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
    _company: String,
    title: String,
    description: String,
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

export {Vacanсy}