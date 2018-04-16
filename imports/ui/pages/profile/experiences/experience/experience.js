import './experience.html'
import {EXPERIENCE_DATE_FORMAT} from '/imports/ui/utils/consts'
import {getCityOptions} from '/imports/ui/utils/utils'
import {Experience} from '/imports/api/classes/experience'
import {Handlers} from '/imports/ui/utils/handlers'

Template.experience.onCreated(function () {
  this.experience = new ReactiveVar()
  this.autorun(() => {
    const experienceId = FlowRouter.getParam('experienceId')
    this.user = User.findOne(Meteor.userId())
    this.experience.set(
      this.user && experienceId && this.user.profile.experiences.find(el => el._id === experienceId)
    )
  })
})

Template.experience.onRendered(function () {
  this.$('.datetimepicker').datetimepicker({
    locale: 'ru',
    format: EXPERIENCE_DATE_FORMAT
  })
})

Template.experience.helpers({
  experience() {
    return Template.instance().experience.get()
  },

  getCityOptions(city) {
    return getCityOptions(city)
  }
})

Template.experience.events({
  'change .js-still-working'(e, t){
    t.$('.js-end-date input').prop('disabled', e.target.checked)
    t.$('.js-end-date input').val('')
  },

  'submit .js-form-experience'(e, t) {
    e.preventDefault()
    const data = $(e.target).serializeObject(),
      user = User.findOne(Meteor.userId())

    let _id = FlowRouter.getParam('experienceId'),
      newInstance = false

    if(!_id) {
      _id = new Meteor.Collection.ObjectID()._str
      newInstance = true
    }
    data._id = _id

    const experience = new Experience(data, {cast: true})
    if(user) {
      user.callMethod(
        'patch',
        {
          field: 'profile',
          experience
        },
        {merge: true, newInstance},
        Handlers.default(err => {
          if(!err) FlowRouter.go('/')
        })
      )
    }

  }
})