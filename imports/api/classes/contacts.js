import {Class} from 'meteor/jagi:astronomy'

export const Contacts = Class.create({
  name: 'Contacts',
  fields: {
    phones: {
      type: [String],
      optional: true,
    },
    emails: {
      type: [String],
      optional: true,
    },
    webUrls: {
      type: [String],
      optional: true,
    },
  }
})



