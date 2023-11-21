declare var THREE
declare var AFRAME

export const dynamicMarkerScalingComponent = () => ({
  init: function () {
    this.system.registerMe(this.el)
  },

  remove: function () {
    this.system.unregisterMe(this.el)
  },
})

function clamp(value: number, min: number, max: number) {
  if (value > max) {
    return max
  }
  if (value < min) {
    return min
  }
  return value
}

export const dynamicMarkerScalingSystem = () => ({
  init: function () {
    this.entities = []
    this.handleZoom = this.handleZoom.bind(this)
    this.currentTicks = 0
    this.initalScale = 0.4
    this.sceneCameraEntity = document.querySelector('#camera')
    this.initialCameraPosition = new THREE.Vector3()
    this.markerScaleFactor = 1
    this.el.addEventListener('loaded', () => {
      this.sceneCameraEntity
        .getObject3D('camera')
        .getWorldPosition(this.initialCameraPosition)
    })
    this.tick = AFRAME.utils.throttleTick(this.tick, 300, this)
  },

  tick() {
    let newPosition = new THREE.Vector3()
    this.sceneCameraEntity.getObject3D('camera').getWorldPosition(newPosition)
    this.handleZoom(newPosition)
  },

  registerMe: function (el) {
    this.entities.push(el)
    // console.log('Registered: ', this.entities)
  },

  unregisterMe: function (el) {
    var index = this.entities.indexOf(el)
    this.entities.splice(index, 1)
  },

  handleZoom: function (newPosition) {
    const scaleBy =
      clamp(newPosition.y / this.initialCameraPosition.y, 0.1, 2.4) * 0.65
    const newScale = `${scaleBy} ${scaleBy} ${scaleBy}`
    // console.log("new Postion: ", newPosition)
    // console.log('New Scale', newScale)
    this.entities.forEach((marker) => marker.setAttribute('scale', newScale))
  },
})

export const listenCameraPosition = () => ({
  init() {
    this.currentTicks = 0
    this.position = new THREE.Vector3()
  },

  tick() {
    if (this.currentTicks === 100) {
      this.el.getObject3D('camera').getWorldPosition(this.position)
      console.log(this.position)
      this.currentTicks = 0
    }
    this.currentTicks++
  },
})
