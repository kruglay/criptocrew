import './resume_form.html'

Template.resume_form.events({
  'submit .resume-form'(e, t) {
    e.preventDefault()
    if (t.data.onSubmit) {
      const data = $(e.currentTarget).serializeObject()
      t.data.onSubmit(data)
    }
  }
})

Template.resume_form.helpers({
  title() {
    return Template.instance().data.title
  },

  url() {
    return Template.instance().data.url
  }
})