import './my_resumes_create.html'
import { resumes } from '/imports/api/resumes/collections/resumes.js'
import '../form/resume_form.js'

Template.my_resumes_create.helpers({
  submitTitle() {
    return TAPi18n.__('create')
  },

  onSubmit() {
    return (data) => {
      console.log(data)
      Meteor.call(
        'resumes.insert',
        data,
        (error, result) => {
          if (!error) {
            FlowRouter.go('/my/resumes')
          }
        }
      )
    }
  }
})
