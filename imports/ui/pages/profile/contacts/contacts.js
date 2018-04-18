import './contacts.html'
import '/imports/ui/components/contact_item/contact_item'
import {Contacts} from '/imports/api/classes/contacts'
import {User} from '/imports/api/users'
import {Handlers} from '/imports/ui/utils/handlers'

Template.contacts.onCreated(function () {
  this.handleClick = className => {
    return () => (e, t) => {
      if(this.$(`.${className}`).length > 1) {
        t.$(`.form-group`).remove()
      }
    }
  }
})

Template.contacts.onRendered(function () {

})

Template.contacts.helpers({
  handleClick(className){
    const handleClick = Template.instance().handleClick(className)
    return handleClick
  }
})

Template.contacts.events({
  'click .js-add-phone'(e, t) {
    e.preventDefault()
    $(e.target).before(() => {
      return Blaze.renderWithData(
        Template.contact_item,
        {
          class:'phone-item',
          label:'Телефон:',
          name:'phones',
          onClick: t.handleClick('phone-item')()
        },
        e.target.parentNode,
        e.target
      )
    })
  },

  'click .js-add-webUrl'(e, t) {
    e.preventDefault()
    $(e.target).before(() => {
      return Blaze.renderWithData(
        Template.contact_item,
        {
          class:'web-url-item',
          label:'Страница в интернете:',
          name:'webUrls',
          onClick: t.handleClick('web-url-item')(),
        },
        e.target.parentNode,
        e.target
      )
    })
  },

  'click .js-add-email'(e, t) {
    e.preventDefault()
    $(e.target).before(() => {
      return Blaze.renderWithData(
        Template.contact_item,
        {
          class: 'email-item',
          label: 'email:',
          name: 'emails',
          onClick: t.handleClick('email-item')()
        },
        e.target.parentNode,
        e.target
      )
    })
  },

  'submit .js-form-contacts'(e, t) {
    e.preventDefault()
    const data = $(e.target).serializeObject()
    Object.keys(data).forEach(key => {
      data[key] = Array.isArray(data[key]) ? data[key] : [data[key]]
      data[key] = data[key].filter(el => el !== '')
    })
    const contacts = new Contacts(data),
    user = User.findOne(Meteor.userId())
    if(user) {
      user.callMethod(
        'patch',
        {
          field: 'profile',
          data: {contacts}
        },
        Handlers.default(err => {
          if(!err) FlowRouter.go(`user`, {_userId: Meteor.userId()})
        })
      )
    }
  },

  'click .phone-item'(e, t) {
    console.log('click .phone-item')
  }

})