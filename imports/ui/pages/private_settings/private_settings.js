import './private_settings.html'
import {Handlers} from '/imports/ui/utils/handlers'
import {User} from '/imports/api/users'

Template.private_settings.onCreated(function () {
})

Template.private_settings.onRendered(function () {
})

Template.private_settings.helpers({})

Template.private_settings.events({
  'submit .js-form-settings'(e, t) {
    e.preventDefault()
    const data = $(e.target).serializeObject(),
      user = User.findOne(Meteor.userId())
    data.agent = data.agent ? true : false
    user.callMethod('patch',
      {data},
      Handlers.default(err => {
        if (!err) {
          FlowRouter.go('/')
        }
      })
    )
  }
})