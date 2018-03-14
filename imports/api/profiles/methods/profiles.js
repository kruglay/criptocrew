import { profiles } from '/imports/api/profiles/collections/profiles.js'

const schema = {
  update: {
    createdAt: Date,
    updatedAt: Date,
    _user: String,
    name: String,
    sex: String
  }
}

Meteor.methods({
  'profiles.update' (doc) {
    if (!Meteor.userId()) {
      throw new Meteor.Error(
        'profiles.update',
        `Allowed only for authorized users`
      )
    }
    const exists = profiles.findOne({
      _user: Meteor.userId()
    })

    if (!exists) {
      doc.createdAt = new Date()
      doc._user = Meteor.userId()
    } else {
      doc = Object.assign({}, exists, doc)
      delete doc._id
    }

    doc.updatedAt = new Date()

    check(doc, schema.update)

    if (exists) {
      console.log('updating', Meteor.userId(), doc)
      profiles.update({_user: Meteor.userId()}, {$set: doc})
    } else {
      profiles.insert(doc)
    }
  }
})
