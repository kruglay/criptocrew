import {Class} from 'meteor/jagi:astronomy'
import {searchStatus, currency} from '/imports/api/enums/enums'

const Specialization = Class.create({
  name: 'Specialization',
  fields: {
    searchStatus: {
      type: searchStatus,
      default: 1,
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
      },
      title: {
        type: String,
      },
      optional: true,
    },
    divisions: {
      type:[Object],
      name: {
        type: String,
      },
      title: {
        type: String,
      },
      optional: true,
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
      optional: true,
      default: () => []
    }
  }
})

// const Specialization = Class.create({
//   name: 'Specialization',
//   fields: {
//     skills: {
//       type: [String],
//       optional: true,
//       // default: () => []
//     }
//   }
// })

export {Specialization}