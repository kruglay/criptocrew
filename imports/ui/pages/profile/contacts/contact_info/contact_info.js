import './contact_info.html'
import {User} from '/imports/api/users'

Template.contact_info.onCreated(function () {
  this.user = new ReactiveVar()
  this.autorun(() => {
    this.user = User.findOne(FlowRouter.getParam('userId'))
  })
})

Template.contact_info.onRendered(function () {
})

Template.contact_info.helpers({
  phones() {
    const contacts = Template.currentData().contacts
    if(contacts){
      return contacts.phones.join(', ')
    }
  },

  emails() {
    const contacts = Template.currentData().contacts
    if(contacts){
      return contacts.emails.join(', ')
    }
  },

  webUrls() {
    const contacts = Template.currentData().contacts
    if(contacts){
      return contacts.webUrls.join(', ')
    }
  }
})

Template.contact_info.events({})