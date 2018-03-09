import './my_companies.html'
import { companies } from '/imports/api/companies/collections/companies.js'

Template.my_companies.helpers({
  companies() {
    return companies.find({_user: Meteor.userId()})
  }
})
