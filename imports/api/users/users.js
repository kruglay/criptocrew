import {Class, Enum} from 'meteor/jagi:astronomy'
console.log('users.js')

const collection = Meteor.users

const sex = Enum.create({
  name: 'sex',
  identifiers: ["MALE", "FEMALE"]
})

const cities = Enum.create({
  name: 'city',
  identifiers: ['Moscow', 'St.Petersburg']
})

const searchStatus = Enum.create({
  name: 'searchStatus',
  identifiers: ['ищу работу', 'открыт к предложениям', 'не ищу работу']
})

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
      personal: {
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
          name: String,
          type: sex,
          default: sex.MALE
        },
        dateOfBirth: {
          type: Date,
          optional: true,
        },
        city: {
          type: cities,
          optional: true
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

      specialization: {
        type: {
          searchStatus: {
            type: searchStatus,
            default: searchStatus.getIdentifier(2)
          },
          personalSpecialization: {
            type: String,
            optional: true
          },
          additional: {
            type:
              [{
                name: {
                  type: String,
                  immutable: true
                },
                title: {
                  type: String,
                  immutable: true
                },
                value: Boolean
              }],
            default: defaultAdditional,
            immutable: true,
          },
          divisions: {
            type:
              [{
                name: {
                  type: String,
                  immutable: true
                },
                title: {
                  type: String,
                  immutable: true
                },
                value: Boolean
              }],
            default: defaultDivisions,
            immutable: true,
          },
          skills: [String]
        },
        optional: true
      },

      experiences: {
        type: [{
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
        }],
        optional: true
      },

      educations: {
        type: [{
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
        }],
        optional: true
      },

      contacts: {
        type: {
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
        },
        optional: true
      }
    }

  },

  meteorMethods: {
    add(data) {
      return Accounts.createUser({email: data.email, password: data.password})
    },

    patch(data) {
      this.set(data)
      return this.save()
    }
  },

  helpers: {
    getName() {
      return this.profile.name ? this.profile.name
        : this.username ? this.username : this.emails[0].address
    }
  }
})

export {User}