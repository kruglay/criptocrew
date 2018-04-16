import './additionals.html'
import {getValue, additionals, checkboxHandleChange} from '/imports/ui/utils/utils'

Template.additionals.onCreated(function () {
})

Template.additionals.onRendered(function () {
})

Template.additionals.helpers({
  additionals() {
    return additionals()
  },
  getAdditionalValue(additional) {
    const profileAdditionals = Template.currentData().profileAdditionals
    return getValue(profileAdditionals, additional)
  },

  handleChange(name) {
    return checkboxHandleChange(name, Template.currentData().profileAdditionals, additionals())
  }
})

Template.additionals.events({})