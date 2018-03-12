import './my_companies.html'
import { companies } from '/imports/api/companies/collections/companies.js'
import { Handlers } from '/imports/ui/utils/handlers.js'

Template.my_companies.events({
  'click .delete': (e) => {
    e.preventDefault()
    Meteor.call(
      'companies.remove',
      e.currentTarget.dataset.id,
      Handlers.default()
    )
  }
})

Template.my_companies.helpers({
  companies() {
    return companies.find({_user: Meteor.userId()})
  }
})
