import './educations.html'
import './education/education'
import './education_item/education_item'
import {User} from '/imports/api/users'

Template.educations.onCreated(function () {
})

Template.educations.onRendered(function () {
})

Template.educations.helpers({
  educations() {
    const user = User.findOne(Meteor.userId())
    if(user) {
      return user.profile.educations
    }
  }
})

Template.educations.events({})