import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '/imports/ui/layouts/default/default_layout'
import '/imports/ui/pages/auth'
import '/imports/ui/pages/profile'
import '/imports/ui/pages/user/user'

FlowRouter.notFound = {
  action: function() {
    BlazeLayout.render('default_layout', {
      page: 'not_found'
    })
  }
}

// FlowRouter.route('/users', {
//   name: 'users',
//   action() {
//     BlazeLayout.render('default_layout', {page: 'users'})
//   }
// })

FlowRouter.route('/users/:_userId', {
  name: 'user',
  action() {
    console.log('/users/:_userId')
    BlazeLayout.render('default_layout', {page: 'user'})
  }
})

FlowRouter.route('/', {
  name: 'index',
  action () {
    console.log('index')
    BlazeLayout.render('default_layout', { page: 'home' })
  }
})

// FlowRouter.route('/')


FlowRouter.route('/vacancies', {
  action () {
    BlazeLayout.render('default_layout', { page: 'jobs' })
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

const authRoutes = FlowRouter.group({
  prefix: '/auth',
  name: 'auth',
  triggersEnter: [function(context, redirect) {
    console.log('auth')
    if(Meteor.userId()) {
      FlowRouter.redirect('/')
    }
  }]
});

authRoutes.route('/sign-in', {
  name: 'auth.signin',
  action() {
    console.log('auth.signin')
    BlazeLayout.render('default_layout', {page: 'signin'})
  }
})

authRoutes.route('/sign-up', {
  name: 'auth.signup',
  action() {
    console.log('auth.signup')
    BlazeLayout.render('default_layout', {page: 'signup'})
  }
})

const profileRoutes = FlowRouter.group({
  prefix: '/profile',
  name: 'profile',
  triggersEnter: [function(context, redirect) {
    console.log('running group profile');
  }]
})

profileRoutes.route('/personal', {
  name: 'profile.personal',
  action() {
    BlazeLayout.render('default_layout', {page: 'personal'})
  }
})

profileRoutes.route('/specialization', {
  name: 'profile.specialization',
  action() {
    BlazeLayout.render('default_layout', {page: 'specialization'})
  }
})




// AccountsTemplates.configureRoute('signIn')
AccountsTemplates.configureRoute('changePwd')