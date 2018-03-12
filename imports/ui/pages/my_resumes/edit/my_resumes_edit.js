import './my_resumes_edit.html'
import { Handlers } from '/imports/ui/utils/handlers.js'
import { resumes } from '/imports/api/resumes/collections/resumes.js'
import '../form/resume_form.js'

Template.my_resumes_edit.helpers({
  submitTitle() {
    return TAPi18n.__('update')
  },

  resume() {
    return resumes.findOne({_id: FlowRouter.getParam('id')})
  },

  onSubmit() {
    return (data) => {
      Meteor.call(
        'resumes.patch',
        FlowRouter.getParam('id'),
        data,
        Handlers.default()
      )
    }
  }
})
