import './my_profile.html'
import './form/profile_form.js'
import { Handlers } from '/imports/ui/utils/handlers.js'
import {User} from "/imports/api/users"

Template.my_profile.helpers({
  profile () {
    return User.findOne(Meteor.userId()) && User.findOne(Meteor.userId()).profile
  },

  onSubmit () {
    return (data) => {
      const user = User.findOne(Meteor.userId())
      if(user) {
        user.patch(data, Handlers.default())
      }
    }
  }
})
