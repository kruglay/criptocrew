import './home.html'

Template.home.onCreated(function () {
  console.log('create.home')
})

Template.home.onRendered(function () {
  console.log('render.home')
})

Template.home.helpers({})

Template.home.events({})