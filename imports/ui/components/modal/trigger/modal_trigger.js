import './modal_trigger.html'
import './modal_trigger.less'

import {Proto} from '/proto/client/proto.import.js'

Template.modal_trigger.onCreated(function () {
	Proto.check(this, this.data.name, String)
	//Proto.check(this, this.data.data, Match.Optional(Object))
})

Template.modal_trigger.onRendered(function () {

})

Template.modal_trigger.helpers({

})

Template.modal_trigger.events({
	'click'(e, t) {
		e.preventDefault()
		Proto._modal.set({
			name: t.data.name,
			data: t.data.data
		})
	}
})
