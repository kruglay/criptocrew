console.log('auth.js')
import './auth.html'
// import {Handlers} from '/imports/ui/utils/handlers'
import {User} from '/imports/api/users/users'
// import {Company} from '/imports/api/companies'

Template.auth.onCreated(function () {
  this.passwordsAreEqual = new ReactiveVar(true)
})

Template.auth.onRendered(function () {
})

Template.auth.helpers({
  isRegister() {
    return this.state() === 'signUp'
  },

  show() {
    return Template.instance().passwordsAreEqual.get() ? 'no-display' : ''
  }
})

Template.auth.events({
  'keyup .js-password'(e, t) {
    t.passwordsAreEqual.set(e.target.value === $('.js-confirm-password').val())
  },

  'keyup .js-password-confirm'(e, t) {
    t.passwordsAreEqual.set(e.target.value === $('.js-password').val())
  },

  'click .js-auth-submit'(e, t) {
    e.preventDefault()
    if(t.passwordsAreEqual) {
      const data = $('.js-form-auth').serializeObject()
       // user = new User()
      // user.add(data, Handlers.default())
    }
  }
})
