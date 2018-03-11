import './modal.html'
import './modal.less'

import {Proto} from '/proto/client/proto.import.js'

Template.modal.onCreated(function () {
	this.state = new ReactiveVar('inactive')
	this.autorun(() => {
		const state = Proto._modal.get()
		  ? 'active'
		  : 'inactive'
		this.state.set(state)
	})
})

Template.modal.onRendered(function () {

})

Template.modal.helpers({
	modal() {
		return Proto._modal.get() || {}
	},
	
	modalTemplate() {
		const modalTemplate = Proto._modal.get()
			? `modals_${Proto._modal.get().name}`
			: ''
		console.log('Template.modal', modalTemplate)
		return modalTemplate
	},
	
	modalData() {
		return Proto._modal.get() ? Proto._modal.get().data : ''
	},
	
	state() {
		return Template.instance().state.get()
	}
	
})

Template.modal.events({
	
	'click .js-modal'(e, t) {
		//e.preventDefault()
		t.state.set('inactive')
	},
	
	'click .js-prevent'(e, t) {
		e.stopPropagation()
	},
	
})
