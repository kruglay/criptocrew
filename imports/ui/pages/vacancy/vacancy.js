import './vacancy.html'
import '/imports/ui/components/select/select.js'
import {Resume} from "/imports/api/resumes"
import {Vacanсy} from "/imports/api/vacancies"

Template.vacancy.events({
})

Template.vacancy.helpers({
  vacancy() {
    return Vacanсy.findOne(FlowRouter.getParam('vacancyId'))
  },

  myResumes () {
    return Resume.find({_user: Meteor.userId()})
  }
})
