import {Class} from 'meteor/jagi:astronomy'
import {cities} from '/imports/api/enums/enums'
import {EXPERIENCE_DATE_FORMAT} from '/imports/ui/utils/consts'

export const Education = Class.create({
  name: 'Education',
  fields: {
    _id: String,
    location: {
      type: cities,
      optional: true,
      cast(value) {
        return Number(value)
      }
    },
    name: String,
    faculty: {
      type: String,
      optional: true
    },
    startDate: {
      type: Date,
      cast(value) {
        if(!(value instanceof Date)){
          return moment(value, EXPERIENCE_DATE_FORMAT).toDate()
        }
        return value
      }
    },
    endDate: {
      type: Date,
      optional: true,
      cast(value) {
        if(!(value instanceof Date)){
          return moment(value, EXPERIENCE_DATE_FORMAT).toDate()
        }
        return value
      }
    },
    stillStudying: {
      type: Boolean,
      default: false
    },
    additional: {
      type: String,
      optional: true,
    }
  }
})