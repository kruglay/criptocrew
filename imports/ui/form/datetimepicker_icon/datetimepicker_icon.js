import './datetimepicker_icon.html'

Template.datetimepicker_icon.onCreated(function () {
})

Template.datetimepicker_icon.onRendered(function () {
  const template = this
  template.$('.js-datetimepicker').datetimepicker({
    locale: 'ru',
    format: template.data.formatDate
  })

})

Template.datetimepicker_icon.helpers({
  icon(){
    return Template.instance().icon ? Template.instance().icon : 'glyphicon-calendar'
  }
})

Template.datetimepicker_icon.events({})