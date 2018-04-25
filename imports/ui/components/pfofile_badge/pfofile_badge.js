import "./pfofile_badge.html"
import '/imports/ui/components/uploader/uploader'

Template.pfofile_badge.onCreated(function(){

})

Template.pfofile_badge.onRendered(function(){
})

Template.pfofile_badge.helpers({
  userName() {
    const user = User.findOne(Meteor.userId())
    return user && user.getName()
  }
})

Template.pfofile_badge.events({
  'click .js-exit'(e, t) {
    e.preventDefault()
    Meteor.logout(err => {
      if(!err) {
        FlowRouter.redirect('/')
      }
    })
  }
})