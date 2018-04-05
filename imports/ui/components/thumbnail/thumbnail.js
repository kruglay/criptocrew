import './thumbnail.html'
import './thumbnail.less'

const defaultImage = '/svg/icons/empty.svg'
const defaultSize = 200
const THUMBNAIL_STATES = {
  IDLE: 'idle',
  BUSY: 'busy'
}

const promises = {}
const images = []

Template.thumbnail.onCreated(function() {
  
  this.url = new ReactiveVar()
  this.state = new ReactiveVar()
  this.previewUrl = new ReactiveVar()
  
  this.autorun(() => {
    this.url.set(Template.currentData().url || defaultImage)
    this.state.set(Template.currentData().state || THUMBNAIL_STATES.IDLE)
  })
  
  this.autorun(() => {
    let url = this.url.get()
 
    const preview = {
      width: Template.currentData().width || defaultSize,
      url
    }
    
    const previewUrl = url.indexOf('.svg') === -1
      ? storage2.previewUrl(preview)
      : url
    
    let promise = promises[previewUrl]
    
    if (promise) {
      promise.then(() => {
        this.state.set(THUMBNAIL_STATES.IDLE)
        this.previewUrl.set(previewUrl)
      })
      return
    }
  
    this.state.set(THUMBNAIL_STATES.BUSY)
    
    const img = new Image
    images.push(img)
    
    promise = new Promise((resolve, reject) => {
      img.onload = () => {
        resolve()
      }
      img.src = previewUrl
    })
    
    promise.then(() => {
      this.state.set(THUMBNAIL_STATES.IDLE)
      this.previewUrl.set(previewUrl)
    })
    
    promises[previewUrl] = promise
    
  })
  
})

Template.thumbnail.helpers({
  state() {
    return Template.instance().state.get()
  },
	previewUrl() {
    return Template.instance().previewUrl.get()
	}
})
