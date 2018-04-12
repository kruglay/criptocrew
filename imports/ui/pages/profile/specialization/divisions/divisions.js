import './divisions.html'
import {getValue, divisions, checkboxHandleChange} from '/imports/ui/utils/utils'

Template.divisions.onCreated(function () {
})

Template.divisions.onRendered(function () {
})

Template.divisions.helpers({
  getDivisionValue(division) {
    const profileDivisions = Template.currentData().profileDivisions.get()
    return getValue(profileDivisions, division)
  },


  divisions() {
    return divisions()
  },

  handleChange(name) {
    return checkboxHandleChange(name, Template.currentData().profileDivisions, divisions())
  }
})

Template.divisions.events({})