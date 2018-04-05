import "./pfofile_badge.html"
import '/imports/ui/components/uploader/uploader'

Template.pfofile_badge.onCreated(function(){})

Template.pfofile_badge.onRendered(function(){})

Template.pfofile_badge.helpers({})

Template.pfofile_badge.events({
  'click js-exit'() {
    Meteor.logout()
  }
})