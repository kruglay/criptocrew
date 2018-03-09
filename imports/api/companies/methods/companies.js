import { companies } from '/imports/api/companies/collections/companies.js'

const schema = {
  insert: {
    createdAt: Date,
    updatedAt: Date,
    _user: String,
    title: String
  }
}

Meteor.methods({
  'companies.insert' (doc) {
    doc.createdAt = new Date()
    doc.updatedAt = new Date()
    doc._user = Meteor.userId()
    check(doc, schema.insert)
    return companies.insert(doc)
  }
})
