import './my_resumes.html'
import { resumes } from '/imports/api/resumes/collections/resumes.js'
import { profiles } from '/imports/api/profiles/collections/profiles.js'
import { Handlers } from '/imports/ui/utils/handlers.js'

Template.my_resumes.events({
  'click .delete': (e) => {
    e.preventDefault()
    Meteor.call(
      'resumes.remove',
      e.currentTarget.dataset.id,
      Handlers.default()
    )
  },

  'click .makePublic': (e) => {
    e.preventDefault()
    Meteor.call(
      'resumes.makePublic',
      e.currentTarget.dataset.id,
      Handlers.default()
    )
  }
})

Template.my_resumes.helpers({
  canCreate () {
    return !!profiles.findOne({
      _user: Meteor.userId()
    })
  },

  resumes () {
    return resumes.find({ _user: Meteor.userId() })
  }
})
