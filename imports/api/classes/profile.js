import {Class} from 'meteor/jagi:astronomy'

import {Personal} from '/imports/api/classes/personal'
import {Experience} from '/imports/api/classes/experience'
import {Specialization} from '/imports/api/classes/specialization'


export const Profile = Class.create({
  name: 'Profile',
  fields: {
    personal: {
      type: Personal,
      optional: true,
      default: new Personal()
    },

    specialization: {
      type: Specialization,
      optional: true,
      // default: new Specialization()
    },

    experiences: {
      type: [Experience],
      optional: true,
      default: () => []
    },

    educations: {
      type: [String],
      optional: true,
      default: () => []
    },

    contacts: {
      // type: Contacts,
      type: String,
      optional: true,
      default: ''
    },
  }
})