import { companies } from '/imports/api/companies/collections/companies.js'

const schema = {
  insert: {
    createdAt: Date,
    updatedAt: Date,
    _user: String,
    title: String,
    imageUrl: Match.Optional(String)
  }
}

Meteor.methods({
  'companies.insert' (doc) {
    doc.createdAt = new Date()
    doc.updatedAt = new Date()
    doc._user = Meteor.userId()
    check(doc, schema.insert)
    return companies.insert(doc)
  },

  'companies.patch'(_id, patch) {
    patch.updatedAt = new Date()
    const existingDoc = companies.findOne({
      _id,
      _user: Meteor.userId()
    })

    if (!existingDoc) {
      throw new Meteor.Error(
        'companies.patch',
        `There is no ${_id} company`
      )
    }

    companies.update(_id, {$set: patch})
  },

  'companies.remove'(_id) {
    const existingDoc = companies.findOne({
      _id,
      _user: Meteor.userId()
    })

    if (!existingDoc) {
      throw new Meteor.Error(
        'companies.remove',
        `There is no ${_id} company`
      )
    }
    if (Meteor.userId() !== existingDoc._user) {
      throw new Meteor.Error(
        'companies.remove',
        `Company does not belongs not you`
      )
    }

    companies.remove(_id)
  },

})
