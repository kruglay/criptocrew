import './vacancy.html'
import { vacancies } from '/imports/api/vacancies/collections/vacancies.js'
import { resumes } from '/imports/api/resumes/collections/resumes.js'
import '/imports/ui/components/select/select.js'

Template.vacancy.events({
})

Template.vacancy.helpers({
  vacancy() {
    return vacancies.findOne({_id: FlowRouter.getParam('vacancyId')})
  },

  myResumes () {
    return resumes.find({_user: Meteor.userId()})
  }
})
