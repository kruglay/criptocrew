import { Handlers } from '/imports/ui/utils/handlers.js'
import './my_vacancies_edit.html'
import { vacancies } from '/imports/api/vacancies/collections/vacancies.js'
import { companies } from '/imports/api/companies/collections/companies.js'

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
    Meteor.call(
      'vacancies.patch',
      FlowRouter.getParam('id'),
      {
        title: e.target.title.value,
        description: e.target.description.value,
        _company: e.target._company.value
      },
      Handlers.default()
    )
  }
})


Template.my_vacancies_edit.helpers({
  myCompanies: () => companies.find({_user: Meteor.userId()}),

  vacancy() {
    // todo get from inCreated
    // console.log(vacancies.findOne({_id: FlowRouter.getParam('id')}))
    return vacancies.findOne({_id: FlowRouter.getParam('id')})
  }
})
