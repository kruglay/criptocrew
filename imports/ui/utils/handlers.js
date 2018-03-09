const Handlers = {
	default(cb) {
		return (err, res) => {
			if (err) {
				alert(err)
			} else {
				console.log('ok', res)
			}
			!cb || cb(err, res)
		}
	},
	redirectOnSuccess(url) {
		const def = this.default()
		return (err, res) => {
			def(err, res)
			err || FlowRouter.go(url)
		}
	}
}

export {Handlers}
