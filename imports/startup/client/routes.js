import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '/imports/ui/layouts/default/default_layout'
import '/imports/ui/pages/auth'
import '/imports/ui/pages/profile'
import '/imports/ui/pages/user/user'
import '/imports/ui/pages/users/users'
import '/imports/ui/pages/private_settings/private_settings'



FlowRouter.notFound = {
  action: function() {
    BlazeLayout.render('default_layout', {
      page: 'not_found'
    })
  }
}

FlowRouter.route('/users', {
  name: 'users',
  action() {
    BlazeLayout.render('default_layout', {page: 'users'})
  }
})

FlowRouter.route('/users/:userId', {
  name: 'user',
  action() {
    console.log('/users/:userId')
    BlazeLayout.render('default_layout', {page: 'user'})
  }
})

FlowRouter.route('/settings', {
  name: 'settings',
  action() {
    BlazeLayout.render('default_layout', {page: 'private_settings'})
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

profileRoutes.route('/experiences', {
  name: 'profile.experiences',
  action() {
    BlazeLayout.render('default_layout', {page: 'experiences'})
  }
})

profileRoutes.route('/experiences/new', {
  name: 'profile.experiences.new',
  action(params) {
    BlazeLayout.render('default_layout', {page: 'experience'})
  }
})

profileRoutes.route('/experiences/:experienceId', {
  name: 'profile.experiences.id',
  action(params) {
    // console.log('experienceId', params)
    BlazeLayout.render('default_layout', {page: 'experience'})
  }
})

profileRoutes.route('/contacts', {
  name: 'profile.contacts',
  action() {
    BlazeLayout.render('default_layout', {page: 'contacts'})
  }
})

profileRoutes.route('/educations', {
  name: 'profile.educations',
  action() {
    BlazeLayout.render('default_layout', {page: 'educations'})
  }
})

profileRoutes.route('/educations/new', {
  name: 'profile.educations.new',
  action() {
    BlazeLayout.render('default_layout', {page: 'education'})
  }
})

profileRoutes.route('/educations/:educationId', {
  name: 'profile.educations.id',
  action() {
    BlazeLayout.render('default_layout', {page: 'education'})
  }
})


// AccountsTemplates.configureRoute('signIn')
AccountsTemplates.configureRoute('changePwd')