import './header.html'
import '/imports/ui/components/profile_bar/profile_bar'
import { Handlers } from '/imports/ui/utils/handlers.js'

Template.header.events({
  'click .create-company' (e, t) {
    const title = prompt('Enter company name')
    if (!title) {
      return
    }
    e.preventDefault()
    Meteor.call(
      'companies.insert',
      { title },
      Handlers.default()
    )
  }
})
