import {Class} from 'meteor/jagi:astronomy'
import {searchStatus, currency} from '/imports/api/enums/enums'

const Specialization = Class.create({
  name: 'Specialization',
  fields: {
    searchStatus: {
      type: searchStatus,
      default: searchStatus.getIdentifier(2),
      cast(value) {
        return Number(value)
      }
    },
    personalSpecialization: {
      type: String,
      optional: true,

    },
    additionals: {
      type:[Object],
      name: {
        type: String,
        immutable: true
      },
      title: {
        type: String,
        immutable: true
      },
    },
    divisions: {
      type:[Object],
      name: {
        type: String,
        immutable: true
      },
      title: {
        type: String,
        immutable: true
      },
    },
    salary: {
      type: Number,
      optional: true,
    },
    currency: {
      type: currency,
      default: 0,
      cast(value) {
        return Number(value)
      }
    },
    skills: {
      type: [String],
      default: []
    }
  }
})

export {Specialization}