import { responses } from '/imports/api/responses/collections/responses.js'

const schema = {
  insert: {
    createdAt: Date,
    updatedAt: Date,
    _user: String
  }
}

Meteor.methods({
  'responses.insert' (doc) {
    doc.createdAt = new Date()
    doc.updatedAt = new Date()
    doc._user = Meteor.userId()
    check(doc, schema.insert)
    return responses.insert(doc)
  }
})
