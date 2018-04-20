import './routes'
import '/imports/ui/form'
import './helpers'

import {Personal} from '/imports/api/classes/personal'
import {Experience} from '/imports/api/classes/experience'
import {Specialization} from '/imports/api/classes/specialization'
import {User} from '/imports/api/users'

Meteor.startup(() => {

})

window.Personal = Personal
window.User = User
