import './personal.html'
import {cities} from '/imports/api/enums/enums'
import {User} from '/imports/api/users/index'
import {Handlers} from '/imports/ui/utils/handlers'
import {Personal} from '/imports/api/classes/personal'
import {getCityOptions} from '/imports/ui/utils/utils'

Template.personal.onCreated(function () {
})

Template.personal.onRendered(function () {

})

Template.personal.helpers({
  getCityOptions(city) {
    return getCityOptions(city)
  }
})

Template.personal.events({
  'click .js-submit'(e, t) {
    e.preventDefault()
    const data = t.$('.js-form-personal').serializeObject(),
      personal = new Personal(Personal.castValues(data)),
      user = User.findOne(Meteor.userId())

    user.callMethod(
      'patch',
      {field: 'profile', data: {personal}},
      Handlers.default((err, res) => {
        if (!err) FlowRouter.go(`/users/${Meteor.userId()}`)
      })
    )
  }
})