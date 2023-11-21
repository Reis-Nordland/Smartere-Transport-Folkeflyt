export const configureDracoComponent = (dracoPath) => ({
    init: function() {
        this.el.setAttribute('gltf-model', `dracoDecoderPath: ${dracoPath}`)
    }
  })