const hasLoadedComponent = (eventFunc) => ({
    init: function () {
     this.el.sceneEl.addEventListener("loaded", () => eventFunc())
   }
 })
 
 export { hasLoadedComponent }