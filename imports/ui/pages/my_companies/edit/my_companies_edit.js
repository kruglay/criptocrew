import './my_companies_edit.html'
import { Handlers } from '/imports/ui/utils/handlers.js'
import { companies } from '/imports/api/companies/companies.js'
import '../form/company_form.js'

Template.my_companies_edit.helpers({
  submitTitle() {
    return TAPi18n.__('update')
  },

  company() {
    return companies.findOne({_id: FlowRouter.getParam('id')})
  },

  onSubmit() {
    return (data) => {
      Meteor.call(
        'companies.patch',
        FlowRouter.getParam('id'),
        data,
        Handlers.default()
      )
    }
  }
})
