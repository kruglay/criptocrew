import './select.html'

Template.select.onCreated(function () {
})

Template.select.onRendered(function () {
  if(this.data.turnOnSelect2) {
    this.$(`.${this.data.class}`).select2(this.data.params || {})
  }
})

Template.select.helpers({})

Template.select.events({})