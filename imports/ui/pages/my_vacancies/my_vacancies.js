import './my_vacancies.html'
import { Handlers } from '/imports/ui/utils/handlers.js'
import {Vacanсy} from "/imports/api/vacancies"

Template.my_vacancies.events({
  'click .delete': (e) => {
    e.preventDefault()
    const vacancy = Vacanсy.findOne(e.currentTarget.dataset.id)
    if(vacancy) {
      vacancy.delete(Handlers.default())
    }
  }
})

Template.my_vacancies.helpers({
  vacancies() {
    return Vacanсy.find({_user: Meteor.userId()})
  }
})
