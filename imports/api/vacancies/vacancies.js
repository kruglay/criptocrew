// import {Class} from 'meteor/jagi:astronomy'
;import { Class } from 'meteor/jagi:astronomy';
// const Class = require('meteor/jagi:astronomy').Class

const collection = new Mongo.Collection("vacancies")

const Vacancy = Class.create({
  name: "Vacancy",
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

export {Vacancy}