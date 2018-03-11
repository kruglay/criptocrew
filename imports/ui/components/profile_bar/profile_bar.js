import './profile_bar.html'

Template.profile_bar.events({
  'click .logout' (e, t) {
    e.preventDefault()
    Meteor.logout()
  }
})

Template.profile_bar.helpers({
  username () {
    return Meteor.user().emails[0].address
  }
})
