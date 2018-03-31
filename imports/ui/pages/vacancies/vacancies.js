import './vacancies.html'
import '/imports/ui/components/respond_button/respond_button.js'
import {Vacanсy} from "/imports/api/vacancies"

Template.vacancies.helpers({
  vacancies() {
    return Vacanсy.find()
  }
})
