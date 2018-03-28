import './vacancies.html'
import { vacancies } from '/imports/api/vacancies/collections/vacancies.js'
import '/imports/ui/components/respond_button/respond_button.js'

Template.vacancies.helpers({
  vacancies() {
    return vacancies.find()
  }
})
