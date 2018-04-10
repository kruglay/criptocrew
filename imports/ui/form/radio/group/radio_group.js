import './radio_group.html'

Template.radio_group.onRendered(function () {
  const data = Template.currentData()
  this.$('[type="radio"]').filter(`[value=${data.value || data.defaultValue}]`).parent().addClass('active')
})
