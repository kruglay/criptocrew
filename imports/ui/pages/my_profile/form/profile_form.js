import './profile_form.html'

Template.profile_form.events({
  'submit .profile-form'(e, t) {
    e.preventDefault()
    if (t.data.onSubmit) {
      const data = $(e.currentTarget).serializeObject()
      t.data.onSubmit(data)
    }
  }
})

Template.profile_form.helpers({
})
