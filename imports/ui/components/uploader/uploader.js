import './uploader.html'
import './uploader.less'

import '/imports/ui/components/thumbnail/thumbnail.js'

Template.uploader.onCreated(function() {
	check(this.data.name, String)
	this.currentValue = new ReactiveVar()
	this.autorun(() => {
		this.currentValue.set(Template.currentData().value)
	})
})

Template.uploader.onRendered(function() {
	this.$file = this.$('input[type="file"]')
	
	if (this.currentValue.get()) {
		this.$('input[type="hidden"]').change()
	}
	
})

Template.uploader.helpers({
	
	currentValue() {
		const empty = this.empty || '/svg/icons/empty.svg'
		return Template.instance().currentValue.get() || empty
	}
	
})

Template.uploader.events({
	
	'click .js-uploader-action'(e, t) {
		e.preventDefault()
		t.$file.click()
	},
	
	'change input[type="file"]'(e, t) {
		storage2(e.currentTarget.files[0], (err, res) => {
			const url = storage2.serverUrl + '/uploads/' + res.storageId
			t.currentValue.set(url)
			const preview = {
				url: url,
				width: 500
			}
			console.log(err, preview, 'value set')
		})
		
	},
	
	'change input[type="hidden"]'(e, t) {
		t.currentValue.set(e.currentTarget.value)
	}

})
