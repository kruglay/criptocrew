import './my_resumes_edit.html'
import { Handlers } from '/imports/ui/utils/handlers.js'
import { resumes } from '/imports/api/resumes/resumes.js'
import '../form/resume_form.js'
import {Resume} from "/imports/api/resumes"

Template.my_resumes_edit.helpers({
  submitTitle() {
    return TAPi18n.__('update')
  },

  resume() {
    return Resume.findOne(FlowRouter.getParam('id'))
  },

  onSubmit() {
    return (data) => {
      const resume = Resume.findOne(FlowRouter.getParam('id'))
      resume.patch(data, Handlers.default())
    }
  }
})
