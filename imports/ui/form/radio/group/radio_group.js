import './radio_group.html'

Template.radio_group.onRendered(function () {
  this.autorun(() => {
    const data = Template.currentData()
    this.$('[type="radio"]').filter(`[value=${data.value || data.defaultValue}]`).prop('checked', true)
  })
})
