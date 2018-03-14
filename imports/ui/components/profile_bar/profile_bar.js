import './profile_bar.html'
import { profiles } from '/imports/api/profiles/collections/profiles.js'

Template.profile_bar.events({
  'click .logout' (e, t) {
    e.preventDefault()
    Meteor.logout()
  }
})

Template.profile_bar.helpers({
  username () {
    const profile = profiles.findOne({
      _user: Meteor.userId()
    })
    if (profile) {
      return profile.name
    }

    return Meteor.user().emails[0].address
  }
})
