import './personal.html'
import {cities} from '/imports/api/enums/enums'
import {User} from '/imports/api/users'
import {Handlers} from '/imports/ui/utils/handlers'
import {Personal} from '/imports/api/classes/personal'

Template.personal.onCreated(function () {
})

Template.personal.onRendered(function () {
  const template = Template.instance()
  template.$('.datetimepicker').datetimepicker({
    locale: 'ru',
    format: 'L'
  })
})

Template.personal.helpers({
  cityOptions() {
    const identifiers = cities.getIdentifiers(),
      options = []
    identifiers.forEach((el, i) => {
      const option = {
        textValue: el,
        value: i,
      }
      if(i === 0) {
        option.selected = '1'
      }
      options.push(option)
    })
    return options
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
      {merge: true},
      Handlers.default()
    )
  }
})