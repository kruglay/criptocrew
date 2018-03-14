import './my_profile.html'
import './form/profile_form.js'
import { profiles } from '/imports/api/profiles/collections/profiles.js'
import { Handlers } from '/imports/ui/utils/handlers.js'

Template.my_profile.helpers({
  profile () {
    return profiles.findOne({_user: Meteor.userId()})
  },

  onSubmit () {
    return (data) => {
      Meteor.call(
        'profiles.update',
        data,
        Handlers.default()
      )
    }
  }
})
