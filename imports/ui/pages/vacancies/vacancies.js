import './vacancies.html'
import { vacancies } from '/imports/api/vacancies/collections/vacancies.js'
import '/imports/ui/components/respond_button/respond_button.js'

Template.header.events({
  'click .create-company' (e, t) {
    const title = prompt('Enter company name')
    if (!title) {
      return
    }
    e.preventDefault()
    Meteor.call(
      'companies.insert',
      { title },
      Handlers.default()
    )
  },
  'click .publish-vacancy' (e, t) {
  }
})

Template.vacancies.helpers({
  vacancies() {
    return vacancies.find()
  }
})
