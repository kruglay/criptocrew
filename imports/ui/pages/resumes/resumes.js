import './resumes.html'
import { resumes } from '/imports/api/resumes/collections/resumes.js'

Template.resumes.helpers({
  resumes() {
    return resumes.find({isPublic: true})
  }
})
