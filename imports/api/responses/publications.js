import {Response} from "/imports/api/responses/responses"

if(Meteor.isServer) {
  Meteor.publish("responses", function() {
    return Response.find()
  })
}