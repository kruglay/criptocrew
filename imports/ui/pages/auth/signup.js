import './signup.html'
import {Handlers} from '/imports/ui/utils/handlers'
import {User} from '/imports/api/users'

Template.signup.onCreated(function () {
  this.passwordsAreEqual = new ReactiveVar(true)
})

Template.signup.onRendered(function () {
})

Template.signup.helpers({
  showPasswordNotification() {
    const template = Template.instance()
    return Template.instance().passwordsAreEqual.get() ? 'no-display' : ''
  },

})

Template.signup.events({
  'keyup .js-password'(e, t) {
    t.passwordsAreEqual.set(e.target.value === $('.js-confirm-password').val())
  },

  'keyup .js-confirm-password'(e, t) {
    t.passwordsAreEqual.set(e.target.value === $('.js-password').val())
  },

  'click .js-signup-submit'(e, t) {
    e.preventDefault()
    const data = $('.js-form-signup').serializeObject()
    if (t.passwordsAreEqual) {
      const user = new User()
      user.add(data, Handlers.default((err, res) => {
          if (!err) {
            Meteor.loginWithPassword(data.email, data.password, Handlers.default((err, res) => {
              if (!err) FlowRouter.go('/')
            }))

          }
        })
      )
    }
  }
})
