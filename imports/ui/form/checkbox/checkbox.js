import './checkbox.html'
import './checkbox.css'

Template.checkbox.onCreated(function () {
  if(Template.currentData().onChange) {
    this.onChange = Template.currentData().onChange
  }
})

Template.checkbox.onRendered(function () {
  this.autorun(() => {
    if (Template.currentData().value === true) {
      this.$('input').prop('checked', true)
    } else {
      this.$('input').prop('checked', false)
    }
  })
})

Template.checkbox.events({
  'change .js-checkbox'(e, t) {
    const onChange = Template.instance().onChange
    if(onChange) onChange(e)
  }
})
