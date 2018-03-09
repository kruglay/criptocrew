import './publish_vacancy.html'
import { Handlers } from '/imports/ui/utils/handlers.js'

Template.publish_vacancy.events({
  'submit .publish-vacancy-form'(e) {
    e.preventDefault()
    const target = e.target
    const title = target.title.value

    Meteor.call(
      'vacancies.insert',
      { title },
      Handlers.default()
    )

    target.title.value = ''
  }
})