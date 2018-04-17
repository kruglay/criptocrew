import './specialization.html'
import './divisions/divisions'
import './additionals/additionals'
import './skills/skills'

import {searchStatus, currency} from '/imports/api/enums/enums'
import {User} from '/imports/api/users'
import {Specialization} from '/imports/api/classes/specialization'
import {Handlers} from '/imports/ui/utils/handlers'


Template.specialization.onCreated(function () {
  this.profileDivisions = new ReactiveVar([])
  this.profileAdditionals = new ReactiveVar([])
})

Template.specialization.onRendered(function () {
  if(this.subscriptionsReady()) {
    const user = User.findOne(Meteor.userId())
    this.specialization = user ? user.profile.specialization || {} : {}

    const specializationDivisions = this.specialization.divisions,
      specializationAdditionals = this.specialization.additionals

    if(specializationAdditionals) {
      this.profileAdditionals.set(specializationAdditionals)
    }

    if(specializationDivisions) {
      this.profileDivisions.set(specializationDivisions)
    }

  }
})

Template.specialization.helpers({
  getStatusOptions(value) {
    return getOptionsFromEnums(searchStatus, value)
  },

  getCurrencyOptions(value) {
    return getOptionsFromEnums(currency, value)
  },

  profileAdditionals() {
    return Template.instance().profileAdditionals
  },

  profileDivisions() {
    return Template.instance().profileDivisions
  },

  profileSkills() {
    return Template.instance().profileSkills
  },


})

Template.specialization.events({
  'click .js-submit'(e, t) {
    e.preventDefault()
    const formData = t.$('.js-form-specialization').serializeObject()
    formData.additionals = t.profileAdditionals.get()
    formData.divisions = t.profileDivisions.get()
    // formData.skills = t.profileSkills.get()
    // formData.additionals = Array.isArray(formData.additionals) ? formData.additionals : [formData.additionals]
    // formData.divisions = Array.isArray(formData.divisions) ? formData.divisions : [formData.divisions]
    formData.skills = Array.isArray(formData.skills) ? formData.skills : [formData.skills]

    const specialization = new Specialization()
    specialization.set(formData, {cast: true})

    const user = User.findOne(Meteor.userId())

    user.callMethod(
      'patch',
      {
        data: {specialization},
        field: 'profile'
      },
      {merge: true},
      Handlers.default((err, res) => {
        if (!err) FlowRouter.go(`/users/${Meteor.userId()}`)
      })
    )
  }
})

function getOptionsFromEnums(sets, value) {
  const identifiers = sets.getIdentifiers(),
    options = []
  identifiers.forEach((el, i) => {
    const option = {
      value: i,
      textValue: el,
    }
    if(value ? i === value : i === 0) {
      option.selected = '1'
    }
    options.push(option)
  })
  return options
}

