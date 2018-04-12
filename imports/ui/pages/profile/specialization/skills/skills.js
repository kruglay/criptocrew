import './skills.html'
import {skills} from '/imports/ui/utils/utils'
import {MAX_AMOUNT_OF_SKILLS} from '/imports/ui/utils/consts'

// todo доработать выбор скилов

Template.skills.onCreated(function () {
  this.disabled = new ReactiveVar(false)
  this.skills = new ReactiveVar(skills)
  this.autorun(() => {
    console.log('autorun')
    const profileSkills = this.data.profileSkills.get()
    if(profileSkills.length > 0) {
      console.log('autorun in if')
      this.skills.set(
        skills
          .filter(el => !profileSkills.includes(el))
          .sort((a, b) => {
            if(b > a) {
              return -1
            } else if(a > b) {
              return 1
            } else {
              return 0
            }
          })
      )
    }
    if(profileSkills.length === MAX_AMOUNT_OF_SKILLS) {
      this.disabled.set(true)
    } else {
      this.disabled.set(false)
    }
  })
})

Template.skills.onRendered(function () {
})

Template.skills.helpers({
  profileSkills() {
    return Template.currentData().profileSkills.get()
  },

  getKey(skill) {
    const profileSkills = Template.currentData().profileSkills.get()
    const index = profileSkills.findIndex(el => el === skill)
    return index > -1 ? `key${index}` : `key${profileSkills.length}`
  },

  skills() {
    return Template.instance().skills.get()
  },

  disabled() {
    return Template.instance().disabled.get() ? 'disabled' : ''
  }
})

Template.skills.events({
  'click .js-add-skill'(e, t) {
    e.preventDefault()
    const profileSkills = t.data.profileSkills.get()
    t.data.profileSkills.set(profileSkills.concat(''))
    t.disabled.set(true)
  },

  'blur .js-filter-input'(e, t) {
    console.log('blur .js-filter-input',e, t.skills.get())
    const input = e.target,
      index = getIndex(input.classList),
      profileSkills = t.data.profileSkills.get(),
      skills =t.skills.get()

    if(skills.includes(input.value)){
      if(profileSkills[index] !== input.value) {
        profileSkills[index] = input.value
        t.data.profileSkills.set(profileSkills)
      } else {
        t.skills.set(
          skills
            .filter(el => el !== input.value)
            .sort((a, b) => {
              if(b > a) {
                return -1
              } else if(a > b) {
                return 1
              } else {
                return 0
              }
            })
        )
      }
    } else {
      input.value = ''
    }

  },

  'focus .js-filter-input'(e, t) {
    const input = e.target,
      index = getIndex(input.classList)
      if(input.value !== '') {
      t.skills.set(
        t.skills.get().concat(input.value)
          .sort((a, b) => {
            if(b > a) {
              return -1
            } else if(a > b) {
              return 1
            } else {
              return 0
            }
          })
      )
    }
    console.log('focus .js-filter-input',e, t.skills.get())
  },

  'click .js-button-remove'(e, t) {
    e.preventDefault()
    const button = e.target,
      index = getIndex(button.classList),
      profileSkills = t.data.profileSkills.get()

    profileSkills.splice(index, 1)
    t.data.profileSkills.set(profileSkills)
  },
})

function getIndex(classList){
  let index = 0
  classList.forEach(el => {
    if(el.includes('key')) {
      index = Number(el.replace('key', ''))
    }
  })
  return index
}