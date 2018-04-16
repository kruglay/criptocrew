import './select.html'

Template.select.onCreated(function () {
})

Template.select.onRendered(function () {
  this.autorun(() => {
    const params = Template.currentData().params
    if(this.data.turnOnSelect2) {
      this.$(`.${this.data.class}`).select2(params || {})
    }
  })
})

Template.select.helpers({})

Template.select.events({})