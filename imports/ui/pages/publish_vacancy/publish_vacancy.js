import './publish_vacancy.html'
import { Handlers } from '/imports/ui/utils/handlers.js'
import '/imports/ui/components/select/select.js'
import { companies } from '/imports/api/companies/companies.js'

Template.publish_vacancy.events({
  'submit .vacancy-form'(e) {
    e.preventDefault()
    const target = e.target
    const title = target.title.value

    Meteor.call(
      'vacancies.insert',
      {
        title,
        _company: target._company.value
      },
      Handlers.default()
    )

    target.title.value = ''
  }
})

Template.publish_vacancy.helpers({
  myCompanies: () => companies.find({_user: Meteor.userId()})
})
