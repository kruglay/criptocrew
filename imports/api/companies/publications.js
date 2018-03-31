import {Company} from "/imports/api/companies/companies"

if(Meteor.isServer) {
  Meteor.publish("companies", function() {
    return Company.find()
  })
}
