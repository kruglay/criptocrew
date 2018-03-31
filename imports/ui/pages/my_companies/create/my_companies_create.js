import './my_companies_create.html'
import { companies } from '/imports/api/companies/companies.js'
import '../form/company_form.js'

Template.my_companies_create.helpers({
  submitTitle() {
    return TAPi18n.__('create')
  },

  onSubmit() {
    return (data) => {
      Meteor.call(
        'companies.insert',
        data,
        (error, result) => {
          if (!error) {
            FlowRouter.go('/my/companies')
          }
        }
      )
    }
  }
})
