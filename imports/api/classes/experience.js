import {Class} from 'meteor/jagi:astronomy'
import {EXPERIENCE_DATE_FORMAT} from '/imports/ui/utils/consts'
import {cities} from '/imports/api/enums/enums'

export const Experience = Class.create({
  name: 'Experience',
  fields: {
    _id: String,
    companyName: String,
    position: String,
    location: {
      type: cities,
      optional: true,
      cast(value) {
        return Number(value)
      }
    },
    startDate: {
      type: Date,
      cast(value) {
        return moment(value, EXPERIENCE_DATE_FORMAT).toDate()
      }
    },
    endDate: {
      type: Date,
      optional: true,
      cast(value) {
        return moment(value, EXPERIENCE_DATE_FORMAT).toDate()
      }
    },
    responsibilities: {
      type: String,
      optional: true,
    },
    stillWorking: {
      type: Boolean,
      optional: true
    }
  },

  events: {
    beforeSave(e) {
      const doc = e.currentTarget
      console.log('beforeSave(e)', doc)
      if(!doc._id){
        doc._id = new Meteor.Collection.ObjectID()
      }
    },
  }
})