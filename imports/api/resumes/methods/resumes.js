import { resumes } from '/imports/api/resumes/collections/resumes.js'

const schema = {
  insert: {
    createdAt: Date,
    updatedAt: Date,
    _user: String,
    isPublic: Boolean,
    title: String,
    url: String
  }
}

Meteor.methods({
  'resumes.insert' (doc) {
    doc.createdAt = new Date()
    doc.updatedAt = new Date()
    doc._user = Meteor.userId()

    const existing = resumes.findOne({_user: Meteor.userId()})
    doc.isPublic = !existing

    check(doc, schema.insert)
    return resumes.insert(doc)
  },

  'resumes.patch'(_id, patch) {
    patch.updatedAt = new Date()
    const existingDoc = resumes.findOne({
      _id,
      _user: Meteor.userId()
    })

    if (!existingDoc) {
      throw new Meteor.Error(
        'resumes.patch',
        `There is no ${_id} resumes`
      )
    }

    resumes.update(_id, {$set: patch})
  },

  'resumes.remove'(_id) {
    const existingDoc = resumes.findOne({
      _id,
      _user: Meteor.userId()
    })

    if (!existingDoc) {
      throw new Meteor.Error(
        'resumes.remove',
        `There is no ${_id} resumes`
      )
    }
    if (Meteor.userId() !== existingDoc._user) {
      throw new Meteor.Error(
        'resumes.remove',
        `Resume does not belongs not you`
      )
    }

    resumes.remove(_id)
  },

  'resumes.makePublic' (_id) {
    const existingDoc = resumes.findOne({
      _id,
      _user: Meteor.userId()
    })

    if (!existingDoc) {
      throw new Meteor.Error(
        'resumes.makePublic',
        `There is no ${_id} resumes`
      )
    }
    if (Meteor.userId() !== existingDoc._user) {
      throw new Meteor.Error(
        'resumes.makePublic',
        `Resume does not belongs not you`
      )
    }

    resumes.update({_user: Meteor.userId()}, {$set: {isPublic: false}}, {multi: true})
    resumes.update(_id, {$set: {isPublic: true}})
  }

})
