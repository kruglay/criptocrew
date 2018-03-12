import { FlowRouter } from 'meteor/kadira:flow-router'
import { BlazeLayout } from 'meteor/kadira:blaze-layout'
import '/imports/ui/layouts/default/default_layout'

FlowRouter.notFound = {
  action: function() {
    BlazeLayout.render('default_layout', {
      page: 'not_found'
    })
  }
}

FlowRouter.route('/', {
  action () {
    BlazeLayout.render('default_layout', { page: 'home' })
  }
})

FlowRouter.route('/vacancies', {
  action () {
    BlazeLayout.render('default_layout', { page: 'vacancies' })
  }
})

FlowRouter.route('/vacancies', {
  action () {
    BlazeLayout.render('default_layout', { page: 'vacancies' })
  }
})

FlowRouter.route('/vacancies/:vacancyId', {
  action () {
    BlazeLayout.render('default_layout', { page: 'vacancy' })
  }
})

FlowRouter.route('/resumes', {
  action () {
    BlazeLayout.render('default_layout', { page: 'resumes' })
  }
})


const myRoutes = FlowRouter.group({
  prefix: '/my',
  name: 'my',
  triggersEnter: [(context, redirect) => {
    if (!Meteor.userId()) {
      return redirect('/')
    }
  }]
})

myRoutes.route('/vacancies', {
  action () {
    BlazeLayout.render('default_layout', { page: 'my_vacancies' })
  }
})

myRoutes.route('/vacancies/:id', {
  action () {
    BlazeLayout.render('default_layout', { page: 'my_vacancies_edit' })
  }
})

myRoutes.route('/publish-vacancy', {
  action () {
    BlazeLayout.render('default_layout', { page: 'publish_vacancy' })
  }
})

myRoutes.route('/companies', {
  action () {
    BlazeLayout.render('default_layout', { page: 'my_companies' })
  }
})

myRoutes.route('/companies/new', {
  action () {
    BlazeLayout.render('default_layout', { page: 'my_companies_create' })
  }
})

myRoutes.route('/companies/:id', {
  action () {
    BlazeLayout.render('default_layout', { page: 'my_companies_edit' })
  }
})

myRoutes.route('/resumes', {
  action () {
    BlazeLayout.render('default_layout', { page: 'my_resumes' })
  }
})

myRoutes.route('/resumes/new', {
  action () {
    BlazeLayout.render('default_layout', { page: 'my_resumes_create' })
  }
})

myRoutes.route('/resumes/:id', {
  action () {
    BlazeLayout.render('default_layout', { page: 'my_resumes_edit' })
  }
})

AccountsTemplates.configureRoute('signIn')
AccountsTemplates.configureRoute('changePwd')