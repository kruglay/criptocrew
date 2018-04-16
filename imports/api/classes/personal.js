import {Class} from 'meteor/jagi:astronomy'
import {cities, sex} from '/imports/api/enums/enums'

const Personal = Class.create({
  name: 'Personal',
  fields: {
    firstName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },
    middleName: {
      type: String,
      default: ""
    },
    sex: {
      type: sex,
      default: sex.MALE
    },
    dateOfBirth: {
      type: Date,
      optional: true,
    },
    city: {
      type: cities,
      optional: true,
      cast(value) {
        return Number(value)
      }
    },
    about: {
      type: String,
      optional: true
    },
    webUrl: {
      type: String,
      optional: true
    },
    avatar: {
      type: String,
      optional: true
    }
  },
  helpers: {

  },

  events: {
    beforeSave(e) {
      console.log('beforeSave(e)', e.target, e.currentTarget)
    }
  }

})

Personal.castValues = data => {
  const castData = {}
  Object.keys(data).forEach(k => {
    switch(k) {
      case 'dateOfBirth':
        castData[k] = moment(data[k], 'L').toDate()
        break
      case 'city':
      case 'sex':
        castData[k] = Number(data[k])
        break
      default:
        castData[k] = data[k]
    }
  })
  return castData
}

export {Personal}