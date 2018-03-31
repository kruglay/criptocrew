import {Resume} from "/imports/api/resumes/resumes"

if(Meteor.isServer) {
  Meteor.publish("resumes", function() {
    return Resume.find()
  })
}