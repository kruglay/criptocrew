import {Class} from 'meteor/jagi:astronomy'

import {Personal} from '/imports/api/classes/personal'
import {Experience} from '/imports/api/classes/experience'
import {Specialization} from '/imports/api/classes/specialization'
import {Contacts} from '/imports/api/classes/contacts'
import {Education} from '/imports/api/classes/education'

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
      type: [Education],
      optional: true,
      default: () => []
    },

    contacts: {
      type: Contacts,
      optional: true,
      default: new Contacts()
    },
  },

  helpers: {
    lastJob() {
      return this.experiences.sort((a, b) => b.startDate - a.startDate)[0]
    },

    mainEducation() {
      return this.educations.sort((a, b) => b.startDate - a.startDate)[0]
    }
  }
})