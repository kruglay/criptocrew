//personal.profile.city
import {cities} from '/imports/api/enums/enums'

export function addFieldToObject(object = {}, {key, value}) {
  console.log(key, value, object)
  const segments = key.split('.'),
    segmentsAmount = segments.length-1
  let deep = 0
  function addSegment(segment, nestedObject) {
    deep += 1
    if(deep > segmentsAmount) {
      nestedObject[segment] = value
    } else {
      if(nestedObject[segment]) {
        addSegment(segments[deep], nestedObject[segment])
      } else {
        nestedObject[segment] = {}
        addSegment(segments[deep], nestedObject[segment])
      }
    }
  }

  addSegment(segments[deep], object)
}

export function getValue(sets, value) {
  if (sets) {
    return sets.some(el => el.name === value.name)
  }
  return false
}


export function checkboxHandleChange(name, reactiveVar, instances) {
  return () => e => {
    let newDivisions
    if(e.target.checked) {
      if(reactiveVar.get().findIndex(el => el.name === name) > -1){
        newDivisions = reactiveVar.get()
      } else {
        newDivisions = reactiveVar.get().concat(
          instances.filter(el => el.name === name)
        )
      }
    } else {
      newDivisions = reactiveVar.get().filter(el => el.name !== name)
    }
    console.log(newDivisions)
    reactiveVar.set(newDivisions)
  }
}

export const divisions = () => ([
  {
    name: 'backEnd',
    title: 'Бэкенд',

  },
  {
    name: 'frontEnd',
    title: 'Фронтенд',

  },
  {
    name: 'app',
    title: 'Приложения',

  },
  {
    name: 'engineer',
    title: 'Разработка ПО',

  },
  {
    name: 'testing',
    title: 'Тестирование',

  },
  {
    name: 'administration',
    title: 'Администрирование',

  },
  {
    name: 'design',
    title: 'Дизайн',

  },
  {
    name: 'management',
    title: 'Менеджмент',

  },
  {
    name: 'marketing',
    title: 'Маркетинг',

  },
  {
    name: 'analitics',
    title: 'Аналитика',

  },
  {
    name: 'sales',
    title: 'Продажи',

  },
  {
    name: 'content',
    title: 'Контент',

  },
  {
    name: 'support',
    title: 'Поддержка',

  },
  {
    name: 'recruitment',
    title: 'Кадры',

  },
  {
    name: 'office',
    title: 'Офис',

  },
  {
    name: 'telecome',
    title: 'Телеком',

  },
  {
    name: 'other',
    title: 'Другое',

  }
])

export const additionals = () => ([
  {
    name: 'readyToMove',
    title: 'Готов к переезду',
  }, {
    name: 'readyToRemote',
    title: 'Готов к удаленной работе',
  }
])

export function getCityOptions(value) {
  const identifiers = cities.getIdentifiers(),
    options = []
  identifiers.forEach((el, i) => {
    const option = {
      textValue: el,
      value: i,
    }
    if(value ? value === i : i === 0) {
      option.selected = '1'
    }
    options.push(option)
  })
  return options
}

export function getPeriod(instance, formatDate) {
  const begin = moment(instance.startDate).format(formatDate),
    end = instance.stillWorking ? 'по настоящее время' : moment(instance.endDate).format(formatDate)
  return `${begin} - ${end}`
}

export function saveCollectionArray(field, instance, options) {
  if(options.newInstance) {
    this.profile[field].push(instance)
  } else {
    const index = this.profile[field].findIndex(el => el._id === instance._id)
    this.profile[field][index] = instance
  }
  return this.save()
}

export const skills = [
  'React.js', 'Node.js', 'Git', 'Redux', 'Meteor.js',
  'Ruby on Rails', 'SQL', 'CSS', 'HTML', 'JavaScript'
]