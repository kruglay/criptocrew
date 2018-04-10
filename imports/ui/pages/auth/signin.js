import './signin.html'
import {Handlers} from '/imports/ui/utils/handlers'
import {User} from '/imports/api/users'

Template.signin.onCreated(function () {
})

Template.signin.onRendered(function () {

})

Template.signin.helpers({})

Template.signin.events({

  'click .js-signin-submit'(e, t) {
    e.preventDefault()
    const data = $('.js-form-signin').serializeObject()
    Meteor.loginWithPassword(data.email, data.password, Handlers.default((err, res) => {
        if (!err) FlowRouter.go('/')
      })
    )
  }
})
