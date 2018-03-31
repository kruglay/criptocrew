import {User} from "/imports/api/users/users"

if(Meteor.isServer) {
  Meteor.publish("users", function() {
    return User.find()
  })
}