import './education_item.html'
import {EXPERIENCE_DATE_FORMAT} from '/imports/ui/utils/consts'
import {getPeriod} from '/imports/ui/utils/utils'
import {Handlers} from '/imports/ui/utils/handlers'

Template.education_item.onCreated(function () {
})

Template.education_item.onRendered(function () {
})

Template.education_item.helpers({
  getEducationPeriod() {
    const education = Template.currentData().education
    return getPeriod(education, EXPERIENCE_DATE_FORMAT)
  }
})

Template.education_item.events({
  'click .js-remove'(e, t) {
    e.preventDefault()
    const user = User.findOne(Meteor.userId())
    user.callMethod(
      'deleteElementOfArray',
      t.data.education._id,
      'educations',
      Handlers.default()
    )
  }
})