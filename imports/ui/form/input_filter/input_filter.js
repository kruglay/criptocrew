import './input_filter.html'

Template.input_filter.onCreated(function () {
})

Template.input_filter.onRendered(function () {
})

Template.input_filter.helpers({})

Template.input_filter.events({
  'keyup .js-filter-input'(e, t) {
    const data = t.data
    const value = $(e.target).val().toLowerCase()

    t.$(`.js-dropdown-menu`).show()

    const filtered = t.$('.js-value').filter(function() {
      const show = $(this).text().toLowerCase().indexOf(value) > -1
      $(this).toggle(show)
      return show
    })

    if(filtered.length === 0) {
      t.$('.js-dropdown-menu').hide()
    }
  },

  'blur .js-filter-input'(e, t) {
    t.$('.js-dropdown-menu').hide()
  },

  'mousedown .js-dropdown-menu li'(e, t) {
    console.log('mousedown .js-dropdown-menu li')
    const value = $(e.target).text()
    t.$('.js-filter-input').val(value)
    t.$('.js-filter-input').trigger('blur')
  },

  'click .js-button'(e, t) {
    e.preventDefault()
    t.$('.js-dropdown-menu').show()
  },

  'blur .js-button'(e, t) {
    e.preventDefault()
    t.$('.js-dropdown-menu').hide()
  }
})
