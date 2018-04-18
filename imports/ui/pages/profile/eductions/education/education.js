import './education.html'
import {EXPERIENCE_DATE_FORMAT} from '/imports/ui/utils/consts'
import {getCityOptions} from '/imports/ui/utils/utils'
import {Handlers} from '/imports/ui/utils/handlers'
import {Education} from '/imports/api/classes/education'

Template.education.onCreated(function () {
  this.education = new ReactiveVar()
  this.autorun(() => {
    const educationId = FlowRouter.getParam('educationId')
    this.user = User.findOne(Meteor.userId())
    this.education.set(
      this.user && educationId && this.user.profile.educations.find(el => el._id === educationId)
    )
  })
})

Template.education.onRendered(function () {
  this.$('.datetimepicker').datetimepicker({
    locale: 'ru',
    format: EXPERIENCE_DATE_FORMAT
  })
})

Template.education.helpers({
  education() {
    return Template.instance().education.get()
  },

  getCityOptions(city) {
    return getCityOptions(city)
  }
})

Template.education.events({
  'change .js-still-studying'(e, t){
    t.$('.js-end-date input').prop('disabled', e.target.checked)
    t.$('.js-end-date input').val('')
  },

  'submit .js-form-education'(e, t) {
    e.preventDefault()
    const data = $(e.target).serializeObject(),
      user = User.findOne(Meteor.userId())

    let _id = FlowRouter.getParam('educationId'),
      newInstance = false

    if(!_id) {
      _id = new Meteor.Collection.ObjectID()._str
      newInstance = true
    }
    data._id = _id

    const education = new Education(data, {cast: true})
    if(user) {
      user.callMethod(
        'patch',
        {
          field: 'profile',
          education
        },
        {newInstance},
        Handlers.default(err => {
          if(!err) FlowRouter.go('profile.educations')
        })
      )
    }

  }
})