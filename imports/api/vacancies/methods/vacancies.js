import { vacancies } from '/imports/api/vacancies/collections/vacancies.js'
import { companies } from '/imports/api/companies/collections/companies.js'

const schema = {
  insert: {
    createdAt: Date,
    updatedAt: Date,
    _user: String,
    _company: String,
    title: String
  }
}

Meteor.methods({
  'vacancies.insert' (doc) {
    doc.createdAt = new Date()
    doc.updatedAt = new Date()
    doc._user = Meteor.userId()

    const company = companies.findOne({_id: doc._company})
    if (!company) {
      throw new Meteor.Error(
        'vacancies.insert',
        `Company ${doc._company} does not exists`
      )
    }
    if (company._user !== doc._user) {
      throw new Meteor.Error(
        'vacancies.insert',
        `Company ${doc._company} does not belongs not you`
      )
    }

    check(doc, schema.insert)
    return vacancies.insert(doc)
  },

  'vacancies.patch'(_id, patch) {
    patch.updatedAt = new Date()
    const existingDoc = vacancies.findOne({
      _id,
      _user: Meteor.userId()
    })

    if (!existingDoc) {
      throw new Meteor.Error(
        'vacancies.patch',
        `There is no ${_id} vacancy`
      )
    }

    vacancies.update(_id, {$set: patch})
  },

  'vacancies.remove'(_id) {
    const existingDoc = vacancies.findOne({
      _id,
      _user: Meteor.userId()
    })

    if (!existingDoc) {
      throw new Meteor.Error(
        'vacancies.remove',
        `There is no ${_id} vacancy`
      )
    }
    if (Meteor.userId() !== existingDoc._user) {
      throw new Meteor.Error(
        'vacancies.insert',
        `Vacancy ${existingDoc._company} does not belongs not you`
      )
    }

    vacancies.remove(_id)
  },

  'vacancies.respond' (vacancy_id) {
    doc.createdAt = new Date()
    doc.updatedAt = new Date()
    doc._user = Meteor.userId()
    check(doc, schema.insert)
    return vacancies.insert(doc)
  }
})
