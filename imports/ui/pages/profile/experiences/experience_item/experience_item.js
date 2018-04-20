import './experience_item.html'
import {cities} from '/imports/api/enums/enums'
import {EXPERIENCE_DATE_FORMAT} from '/imports/ui/utils/consts'
import {Handlers} from '/imports/ui/utils/handlers'
import {getPeriod} from '/imports/ui/utils/utils'

Template.experience_item.onCreated(function () {
})

Template.experience_item.onRendered(function () {
})

Template.experience_item.helpers({
  getWorkPeriod() {
    const experience = Template.currentData().experience
    return getPeriod(experience, EXPERIENCE_DATE_FORMAT)
  },

  isEdit() {
    const _owner = Template.currentData()._owner
    if(_owner === Meteor.userId() && Template.currentData().edit) {
      return true
    }
    return false
  }
})

Template.experience_item.events({
  'click .js-remove'(e, t) {
    e.preventDefault()
    const user = User.findOne(Meteor.userId())
    user.callMethod(
      'deleteElementOfArray',
      t.data.experience._id,
      'experiences',
      Handlers.default()
    )
  }
})