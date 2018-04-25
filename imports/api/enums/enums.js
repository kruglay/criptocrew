import {Enum} from 'meteor/jagi:astronomy'

export const sex = Enum.create({
  name: 'sex',
  identifiers: ["MALE", "FEMALE"]
})

export const cities = Enum.create({
  name: 'city',
  identifiers: ['Moscow', 'St.Petersburg']
})

export const searchStatus = Enum.create({
  name: 'searchStatus',
  identifiers: ['ищу работу', 'открыт к предложениям', 'не ищу работу']
})

export const currency = Enum.create({
  name: 'currency',
  identifiers: ['руб.', 'eur.', 'usd.']
})

export const companySize = Enum.create({
  name: 'companySize',
  identifiers: ['1', '2 - 10', '11 - 100', '101 - 1000', '1001 - 10000', '10001 - 100000']
})

export const industries = Enum.create({
  name: 'industries',
  identifiers: [
    'IT, интернет, связь, телеком',
    'Банки, инвестиции, лизинг',
    'Искусство, культура, развлечения',
    'Консалтинг',
    'Маркетинг, реклама, PR',
    'Медицина, фармацевтика'
  ]
})