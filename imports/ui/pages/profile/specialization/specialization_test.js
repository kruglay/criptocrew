import './specialization_test.html'
import './divisions/divisions'
import './additionals/additionals'
import './skills/skills'

import {searchStatus, currency} from '/imports/api/enums/enums'
import {User} from '/imports/api/users'
import {Specialization} from '/imports/api/classes/specialization'
import {Handlers} from '/imports/ui/utils/handlers'


Template.specialization_test.onCreated(function () {
  // console.log('specialization_test')
  this.profileSkills = new ReactiveVar([])
  this.autorun(() => {

  })
  // this.profileDivisions = new ReactiveVar([])
  // this.profileAdditionals = new ReactiveVar([])
  //
  // this.autorun(() => {
  //   const user = User.findOne(Meteor.userId())
  //   this.specialization = user ? user.profile.specialization || {} : {}
  //
  //   const specializationSkills = this.specialization.skills,
  //     specializationDivisions = this.specialization.divisions,
  //     specializationAdditionals = this.specialization.additionals
  //
  //   const profileSkills = this.profileSkills.get(),
  //     profileDivisions = this.profileDivisions.get(),
  //     profileAdditionals = this.profileAdditionals.get()
  //
  //   if(profileSkills.length === 0 && specializationSkills) {
  //     this.profileSkills.set(specializationSkills)
  //   }
  //
  //   if(profileAdditionals.length === 0 && specializationAdditionals) {
  //     this.profileAdditionals.set(specializationAdditionals)
  //   }
  //
  //   if(profileDivisions.length === 0 && specializationDivisions) {
  //     this.profileDivisions.set(specializationDivisions)
  //   }
  // })
})

Template.specialization_test.onRendered(function () {
})

Template.specialization_test.helpers({
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
    return Template.instance().profileSkills.get()[0]
  },



})

Template.specialization_test.events({
  'click .js-submit'(e, t) {
    e.preventDefault()
    const formData = t.$('.js-form-specialization').serializeObject()
    // formData.additionals = t.profileAdditionals.get()
    // formData.divisions = t.profileDivisions.get()
    formData.skills = [formData.skills]

    const specialization = new Specialization()
    specialization.set(formData, {cast: true})

    const user = User.findOne(Meteor.userId())

    user.callMethod(
      'patch',
      {
        data: {specialization},
        field: 'profile'
      },
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

