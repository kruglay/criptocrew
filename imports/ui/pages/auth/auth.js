import './auth.html'
import {Handlers} from '/imports/ui/utils/handlers'
import {User} from '/imports/api/users'

Template.auth.onCreated(function () {
  this.passwordsAreEqual = new ReactiveVar(true)
  this._state = new ReactiveVar(this.state())
})

Template.auth.onRendered(function () {
  this.autorun(() => {
    console.log(this.state())
    this._state.set(this.state())
  })
})

Template.auth.helpers({
  signUp() {
    return this._state.get() === 'signUp'
  },

  show() {
    return this._state.get() === 'signIn' || Template.instance().passwordsAreEqual.get() ? 'no-display' : ''
  },

  submitValue() {
    return this._state.get() === 'signUp' ? 'Зарегистрироваться' : 'Войти'
  }

})

Template.auth.events({
  'keyup .js-password'(e, t) {
    t.passwordsAreEqual.set(e.target.value === $('.js-confirm-password').val())
  },

  'keyup .js-confirm-password'(e, t) {
    t.passwordsAreEqual.set(e.target.value === $('.js-password').val())
  },

  'click .js-auth-submit'(e, t) {
    e.preventDefault()
    const data = $('.js-form-auth').serializeObject()
    if(this._state.get() === 'signUp') {
      if(t.passwordsAreEqual) {
        const user = new User()
        user.add(data, Handlers.default((err, res) => {
          if(!err) {
            Meteor.loginWithPassword(data.email, data.password, Handlers.default((err, res) => {
              if (!err) FlowRouter.go('/')
            }))

          }
        }))
      }
    }else if(this._state.get() === 'signIn') {
      Meteor.loginWithPassword(data.email, data.password, Handlers.default((err, res) => {
        if (!err) FlowRouter.go('/')
      }))
    }
  }
})
