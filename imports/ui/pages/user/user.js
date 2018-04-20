import './user.html'
import '/imports/ui/components/user_info/user_info'
import '/imports/ui/pages/profile/contacts/contact_info/contact_info'
import '/imports/ui/components/no_user_info/no_user_info'

import {User} from '/imports/api/users'

Template.user.onCreated(function () {
  this.user = new ReactiveVar()
  this.autorun(() => {
     this.user.set(User.findOne(FlowRouter.getParam('userId')))
  })
})

Template.user.onRendered(function () {
})

Template.user.helpers({
  skills() {
    const user = Template.instance().user.get()
    if(user) {
      const skills = user.profile.specialization.skills
      return skills && skills.join(', ')
    }
    return ''
  },

  experiences() {
    const user = Template.instance().user.get()
    if(user) {
      return user.profile.experiences
    }
  },

  educations() {
    const user = Template.instance().user.get()
    if(user) {
      return user.profile.educations
    }
  },

  contacts() {
    const user = Template.instance().user.get()
    if(user) {
      return user.profile.contacts
    }
  },

  isEdit(){
    const user = Template.instance().user.get()
    return user && (user._id === Meteor.userId()) ? true : false
  }
})

Template.user.events({})