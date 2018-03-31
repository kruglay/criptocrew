import './profile_bar.html'

Template.profile_bar.events({
  'click .logout' (e, t) {
    e.preventDefault()
    Meteor.logout()
  }
})

Template.profile_bar.helpers({
  username () {
    const user = User.findOne(Meteor.userId())
    if(user) {
      return user.getName()
    }
  }
})
