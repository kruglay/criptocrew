import './experience_item.html'
import {cities} from '/imports/api/enums/enums'
import {EXPERIENCE_DATE_FORMAT} from '/imports/ui/utils/consts'
import {Handlers} from '/imports/ui/utils/handlers'

Template.experience_item.onCreated(function () {
})

Template.experience_item.onRendered(function () {
})

Template.experience_item.helpers({
  getWorkPeriod() {
    const experience = Template.currentData().experience,
      begin = moment(experience.startDate).format(EXPERIENCE_DATE_FORMAT),
      end = experience.stillWorking ? 'по настоящее время' : moment(experience.endDate).format(EXPERIENCE_DATE_FORMAT)
    return `${begin} - ${end}`
  },

  location() {
    return cities.getIdentifier(Template.currentData().experience.location)
  },
})

Template.experience_item.events({
  'click .js-remove'(e, t) {
    e.preventDefault()
    const user = User.findOne(Meteor.userId())
    user.callMethod('deleteExperience', t.data.experience._id, Handlers.default())
  }
})