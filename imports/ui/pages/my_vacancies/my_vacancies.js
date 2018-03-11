import './my_vacancies.html'
import { vacancies } from '/imports/api/vacancies/collections/vacancies.js'
import { Handlers } from '/imports/ui/utils/handlers.js'

Template.my_vacancies.events({

  'click .delete': (e) => {
    e.preventDefault()
    console.log('delete ' + e.currentTarget.dataset.id)
    Meteor.call(
      'vacancies.remove',
      e.currentTarget.dataset.id,
      Handlers.default()
    )
  }
})

Template.my_vacancies.helpers({
  vacancies() {
    return vacancies.find({_user: Meteor.userId()})
  }
})
