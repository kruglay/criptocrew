import { vacancies } from '/imports/api/vacancies/collections/vacancies.js'

const schema = {
  insert: {
    createdAt: Date,
    updatedAt: Date,
    _user: String,
    title: String
  }
}

Meteor.methods({
  'vacancies.insert' (doc) {
    doc.createdAt = new Date()
    doc.updatedAt = new Date()
    doc._user = Meteor.userId()
    check(doc, schema.insert)
    return vacancies.insert(doc)
  },

  'vacancies.respond' (vacancy_id) {
    doc.createdAt = new Date()
    doc.updatedAt = new Date()
    doc._user = Meteor.userId()
    check(doc, schema.insert)
    return vacancies.insert(doc)
  }
})
