import './contact_item.html'

Template.contact_item.onCreated(function () {
})

Template.contact_item.onRendered(function () {
})

Template.contact_item.helpers({})

Template.contact_item.events({
  'click .js-button-remove'(e, t) {
    e.preventDefault()
    if(t.data.onClick) {
      t.data.onClick(e, t)
    } else {
      t.$(`.form-group`).remove()
    }
  }
})