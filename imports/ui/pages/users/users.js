import './users.html'
import '/imports/ui/components/user_badge/user_badge'
import {User} from '/imports/api/users'

Template.users.onCreated(function () {
})

Template.users.onRendered(function () {
})

Template.users.helpers({
  users() {
    return User.find({agent: {$ne: true}}).fetch()
  }
})

Template.users.events({})