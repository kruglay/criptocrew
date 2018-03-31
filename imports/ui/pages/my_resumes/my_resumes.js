import './my_resumes.html'
import { Handlers } from '/imports/ui/utils/handlers.js'
import {Resume} from "/imports/api/resumes"

Template.my_resumes.events({
  'click .delete': (e) => {
    e.preventDefault()
    Meteor.call(
      'resumes.remove',
      e.currentTarget.dataset.id,
      Handlers.default()
    )
  },

  'click .makePublic': (e) => {
    e.preventDefault()
    Meteor.call(
      'resumes.makePublic',
      e.currentTarget.dataset.id,
      Handlers.default()
    )
  }
})

Template.my_resumes.helpers({
  resumes () {
    return Resume.find({ _user: Meteor.userId() })
  }
})
