import './select.html'
import './select.less'

Template.select.onRendered(function () {
  this.autorun(() => {
    this.$('select').val(Template.currentData().value)
  })
})

Template.select.helpers({
  selected: (value, optionValue) => {
    if (optionValue === value){
      return 'selected'
    }
  }
})
