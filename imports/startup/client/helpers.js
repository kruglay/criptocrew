Template.registerHelper('getDate', function(date = new Date(), formatDate) {
  const newDate = moment(date).format(formatDate)
  return newDate
})