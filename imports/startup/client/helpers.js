import {cities} from '/imports/api/enums/enums'

Template.registerHelper('getDate', function(date = new Date(), formatDate) {
  const newDate = moment(date).format(formatDate)
  return newDate
})

Template.registerHelper('location', locationNumber => {
  return cities.getIdentifier(locationNumber)
})