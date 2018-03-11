const Proto = {
	
	_modal: new ReactiveVar(null),
	
	_screen: new ReactiveVar({
		name: 'home',
		effect: 'none',
		_id: null
	}),
	
	_screenData: new ReactiveDict({
	
	}),
	
	_previousScreen: new ReactiveVar(null),
	
	screenData(name) {
		return this._screenData.get(name)
	},
	
	check(template, param, pattern) {
		if (!Match.test(param, pattern)) {
			
			console.error(
				template.view.name,
				template.data
			)
			
			throw new Meteor.Error(
				'see console',
				'Template check error'
			)
			
		}
	},
	
	defaultHandler(cb) {
		return (err, res) => {
			if (err) {
				alert(err)
			} else {
				console.log('ok', res)
			}
			!cb || cb(err, res)
		}
	}
	
}

export {Proto}
