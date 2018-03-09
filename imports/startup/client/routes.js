import { FlowRouter } from 'meteor/kadira:flow-router'
import { BlazeLayout } from 'meteor/kadira:blaze-layout'
import '/imports/ui/layouts/default/default_layout'

FlowRouter.route('/', {
  action() {
    BlazeLayout.render('default_layout')
  }
})

FlowRouter.route('/my-companies', {
  action() {
    BlazeLayout.render('default_layout', {
      page: 'my_companies'
    })
  }
})

FlowRouter.route('/publish-vacancy', {
  action() {
    BlazeLayout.render('default_layout', {
      page: 'publish_vacancy'
    })
  }
})

FlowRouter.route('/my-vacancies', {
  action() {
    BlazeLayout.render('default_layout', {
      page: 'my_vacancies'
    })
  }
})

FlowRouter.route('/vacancies', {
  action() {
    BlazeLayout.render('default_layout', {
      page: 'vacancies'
    })
  }
})
