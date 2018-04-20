import './default_layout.html'
import '/imports/ui/components/sidebar/sidebar'
import "/imports/ui/components/header/header"
import "/imports/ui/components/aside_data/aside_data"
import "/imports/ui/components/pfofile_badge/pfofile_badge"
import "/imports/ui/components/aside_messages/aside_messages"

Template.default_layout.onCreated(function() {
  this.subscribe('users')
})

// import './default_layout.less'
