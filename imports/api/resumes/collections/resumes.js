const resumes = new Mongo.Collection('resumes')
import { profiles } from '/imports/api/profiles/collections/profiles.js'

resumes.helpers({
  profile () {
    return profiles.findOne({ _user: this._user })
  }
})

export { resumes }
