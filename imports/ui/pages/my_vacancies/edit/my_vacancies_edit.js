import { Handlers } from '/imports/ui/utils/handlers.js'
import './my_vacancies_edit.html'
import {Vacanсy} from "/imports/api/vacancies"
import {Company} from "/imports/api/companies"

// todo that:
// Template.my_vacancies_edit.onCreated(() => {
//   this.vacancy = vacancies.findOne({_id: FlowRouter.getParam('id')})
//   if (!this.vacancy) {
//     FlowRouter.go('/notFound')
//   }
// })

Template.my_vacancies_edit.events({
  'submit .vacancy-form'(e) {
    e.preventDefault()
    const vacancy = Vacanсy.findOne(FlowRouter.getParam('id')),
      data = {
        title: e.target.title.value,
        description: e.target.description.value,
        _company: e.target._company.value
      }

    if(vacancy) {
      vacancy.patch(data, Handlers.default())
    }
  }
})


Template.my_vacancies_edit.helpers({
  myCompanies: () => Company.find({_user: Meteor.userId()}),

  vacancy() {
    // todo get from inCreated
    // console.log(vacancies.findOne({_id: FlowRouter.getParam('id')}))
    return Vacanсy.findOne(FlowRouter.getParam('id'))
  }
})
