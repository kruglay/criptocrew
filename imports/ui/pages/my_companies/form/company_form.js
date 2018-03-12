import './company_form.html'

Template.company_form.onCreated(function () {
  // upload
  this.data.name = 'attach'
  this.fileUrl = new ReactiveVar('')
  this.uploadMessage = new ReactiveVar('')
})

Template.company_form.events({
  'change input[type="file"]'(e, t) {
    storage2(e.currentTarget.files[0], (err, res) => {
      if (err) {
        this.uploadMessage.set('Error wile uploading')
        return
      }
      const url = storage2.serverUrl + '/uploads/' + res.storageId
      t.fileUrl.set(url)
      t.uploadMessage.set('Attached image')
    })
  },

  'submit .company-form'(e, t) {
    e.preventDefault()
    if (t.data.onSubmit) {
      const data = $(e.currentTarget).serializeObject()
      const imageUrl = t.fileUrl.get()
      if (imageUrl) {
        data.imageUrl = imageUrl
      }
      t.data.onSubmit(data)
    }
  }
})

Template.company_form.helpers({
  title() {
    return Template.instance().data.title
  },

  fileUrl() {
    return Template.instance().fileUrl.get() || ''
  },

  uploadMessage() {
    return Template.instance().uploadMessage.get()
  }
})