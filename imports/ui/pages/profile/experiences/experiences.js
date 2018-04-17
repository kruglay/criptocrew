import './experiences.html'
import './experience/experience'
import './experience_item/experience_item'
import {User} from '/imports/api/users'

Template.experiences.onCreated(function () {
  // this.autorun(() => {
  //   this.user = User.findOne(Meteor.userId())
  // })
})

Template.experiences.onRendered(function () {
})

Template.experiences.helpers({
  experiences() {
    const user = User.findOne(Meteor.userId())
    if(user) {
      return user.profile.experiences
    }
  }
})

Template.experiences.events({})