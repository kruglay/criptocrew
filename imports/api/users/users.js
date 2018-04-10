import {Class, Enum} from 'meteor/jagi:astronomy'
import {searchStatus} from '/imports/api/enums/enums'
import {Personal} from '/imports/api/classes/personal'


//todo add validations
const collection = Meteor.users

const defaultDivisions = () => ([
  {
    name: 'readyToMove',
    title: 'Готов к переезду',
    value: false
  }, {
    name: 'readyToRemote',
    title: 'Готов к удаленной работе',
    value: false
  }
])

const defaultAdditional = () => ([
  {
    name: 'backEnd',
    title: 'Бэкенд',
    value: false
  },
  {
    name: 'frontEnd',
    title: 'Фронтенд',
    value: false
  },
  {
    name: 'app',
    title: 'Приложения',
    value: false
  },
  {
    name: 'engineer',
    title: 'Разработка ПО',
    value: false
  },
  {
    name: 'testing',
    title: 'Тестирование',
    value: false
  },
  {
    name: 'administration',
    title: 'Администрирование',
    value: false
  },
  {
    name: 'design',
    title: 'Дизайн',
    value: false
  },
  {
    name: 'management',
    title: 'Менеджмент',
    value: false
  },
  {
    name: 'marketing',
    title: 'Маркетинг',
    value: false
  },
  {
    name: 'analitics',
    title: 'Аналитика',
    value: false
  },
  {
    name: 'sales',
    title: 'Продажи',
    value: false
  },
  {
    name: 'content',
    title: 'Контент',
    value: false
  },
  {
    name: 'support',
    title: 'Поддержка',
    value: false
  },
  {
    name: 'recruitment',
    title: 'Кадры',
    value: false
  },
  {
    name: 'office',
    title: 'Офис',
    value: false
  },
  {
    name: 'telecome',
    title: 'Телеком',
    value: false
  },
  {
    name: 'other',
    title: 'Другое',
    value: false
  }
])

const Specialization = Class.create({
  name: 'Specialization',
  fields: {
    searchStatus: {
      type: searchStatus,
      default: searchStatus.getIdentifier(2)
    },
    personalSpecialization: {
      type: String,
      optional: true
    },
    additional: {
      type:[Object],
      name: {
        type: String,
        immutable: true
      },
      title: {
        type: String,
        immutable: true
      },
      value: Boolean,
      default: defaultAdditional,
      immutable: true,
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
      value: Boolean,
      default: defaultDivisions,
      immutable: true,
    },
    skills: [String]
  }
})

const Experience = Class.create({
  name: 'Experience',
  fields: {
    companyName: String,
    position: String,
    location: {
      type: String,
      optional: true,
    },
    startDate: Date,
    endDate: {
      type: Date,
      default: () => new Date()
    },
    responsibilities: {
      type: String,
      optional: true,
    }
  }
})

const Education = Class.create({
  name: 'Education',
  fields: {
    location: {
      type: String,
      optional: true
    },
    name: String,
    faculty: {
      type: String,
      optional: true
    },
    startDate: Date,
    endDate: {
      type: Date,
      default: () => new Date()
    },
    additional: {
      type: String,
      optional: true,
    }
  }
})

const Contacts = Class.create({
  name: 'Contacts',
  fields: {
    telephone: {
      type: [String],
      optional: true,
    },
    emails: {
      type: [String],
      optional: true,
    },
    webUrls: {
      type: [String],
      optional: true,
    },
  }
})

const User = Class.create({
  name: "User",
  collection,
  behaviors: {
    timestamp: {
      hasCreatedField: true,
      createdFieldName: 'createdAt',
      hasUpdatedField: true,
      updatedFieldName: 'updatedAt'
    }
  },
  fields: {
    createdAt: Date,
    updatedAt: Date,
    role: {
      type: String,
      default: 'user',
    },

    profile: {
      type: Object,
      personal: {
        type: Personal,
        optional: true,
      },

      specialization: {
        type: Specialization,
        optional: true
      },

      experiences: {
        type: [Experience],
        optional: true
      },

      educations: {
        type: [Education],
        optional: true
      },

      contacts: {
        type: Contacts,
        optional: true
      },

      default: {}
    }

  },

  meteorMethods: {
    add(data) {
      const userId = Accounts.createUser({email: data.email, password: data.password, profile: {}})
      return userId
    },
  },

  helpers: {
    getName() {
      return this.profile.name ? this.profile.name
        : this.username ? this.username : this.emails[0].address
    }
  }
})

if(Meteor.isServer) {
  User.extend({
    meteorMethods: {
      patch(data, options) {
        const doc = data.data,
          field = data.field

        if(field) {
          this.set(field, doc, options)
        } else {
          this.set(doc, options)
        }
        return this.save()
      }
    }
  })
}




export {User}