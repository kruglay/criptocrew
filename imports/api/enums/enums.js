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
