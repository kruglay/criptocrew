import './checkbox.html'
import './checkbox.css'

Template.checkbox.onRendered(function () {
  this.autorun(() => {
    if (Template.currentData().value === true) {
      this.$('input').prop('checked', true)
    } else {
      this.$('input').prop('checked', false)
    }
  })
})
