import './my_resumes_create.html'
import { resumes } from '/imports/api/resumes/resumes.js'
import '../form/resume_form.js'
import {Resume} from "/imports/api/resumes"

Template.my_resumes_create.helpers({
  submitTitle() {
    return TAPi18n.__('create')
  },

  onSubmit() {
    return (data) => {
      console.log(data)
      const resume = new Resume()
      resume.add(data, (error, result) => {
        if (!error) {
          FlowRouter.go('/my/resumes')
        }
      })
    }
  }
})
