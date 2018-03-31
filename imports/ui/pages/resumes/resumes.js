import './resumes.html'
import {Resume} from "/imports/api/resumes"

Template.resumes.helpers({
  resumes() {
    return Resume.find({isPublic: true})
  }
})
