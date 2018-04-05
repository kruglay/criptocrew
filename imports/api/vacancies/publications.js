import {Vacancy} from "/imports/api/vacancies"

if(Meteor.isServer) {
  Meteor.publish("vacancies", function() {
    return Vacancy.find()
  })
}