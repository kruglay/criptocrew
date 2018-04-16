import './skills.html'
import {skills} from '/imports/ui/utils/utils'
import {MAX_AMOUNT_OF_SKILLS} from '/imports/ui/utils/consts'

// todo доработать выбор скилов

Template.skills.onCreated(function () {
  this.skills = new ReactiveVar(
    skills.sort((a, b) => {
      if (b > a) {
        return -1
      } else if (a > b) {
        return 1
      } else {
        return 0
      }
    })
  )

})

Template.skills.onRendered(function () {
})

Template.skills.helpers({
  profileSkills() {
    return Template.currentData().profileSkills
  },

  skills() {
    return Template.instance().skills.get()
  },

  getSkillsParams() {
    const skills = Template.instance().skills.get(),
     options = []
    skills.forEach((skill, i) => {
      let option = {}
      option.id = skill
      option.text = skill
      if(Template.currentData().profileSkills && Template.currentData().profileSkills.includes(skill)) {
        option.selected = true
      }
      options.push(option)
    })
    return {
      data: options,
    }
  },

  getParams() {
    return {tags: true}
  }

})

Template.skills.events({

})
