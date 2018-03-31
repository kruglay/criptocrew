import {Vacanсy} from "/imports/api/vacancies/vacancies"

if(Meteor.isServer) {
  Meteor.publish("vacancies", function() {
    return Vacanсy.find()
  })
}