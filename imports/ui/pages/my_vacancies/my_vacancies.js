import './my_vacancies.html'
import { vacancies } from '/imports/api/vacancies/collections/vacancies.js'

Template.my_vacancies.helpers({
  vacancies() {
    return vacancies.find({_user: Meteor.userId()})
  }
})
