import './respond_button.html'

import {Handlers} from '/imports/ui/utils/handlers.js'

Template.respond_button.events({
  'click .respond'(e, t) {
    e.preventDefault()
    Meteor.call(
      'responses.insert',
      {},
      Handlers.default()
    )
  }
})
