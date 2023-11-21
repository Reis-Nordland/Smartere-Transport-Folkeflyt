(function (modules) {
    const installedModules = {}; function __webpack_require__(moduleId) {
      if (installedModules[moduleId]) {
        return installedModules[moduleId].exports
      } const module = installedModules[moduleId] = {i: moduleId, l: false, exports: {}}; modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); module.l = true; return module.exports
    }__webpack_require__.m = modules; __webpack_require__.c = installedModules; __webpack_require__.i = function (value) {
      return value
    }; __webpack_require__.d = function (exports, name, getter) {
      if (!__webpack_require__.o(exports, name)) {
        Object.defineProperty(exports, name, {configurable: false, enumerable: true, get: getter})
      }
    }; __webpack_require__.n = function (module) {
      const getter = module && module.__esModule ? function getDefault() {
        return module.default
      } : function getModuleExports() {
        return module
      }; __webpack_require__.d(getter, 'a', getter); return getter
    }; __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property)
    }; __webpack_require__.p = ''; return __webpack_require__(__webpack_require__.s = 1)
  }([function (module, exports) {
    THREE.OrbitControls = function (object, domElement) {
      this.object = object; this.domElement = domElement !== undefined ? domElement : document; this.enabled = true; this.target = new THREE.Vector3(); this.minDistance = 0; this.maxDistance = Infinity; this.minZoom = 0; this.maxZoom = Infinity; this.minPolarAngle = 0; this.maxPolarAngle = Math.PI; this.minAzimuthAngle = -Infinity; this.maxAzimuthAngle = Infinity; this.enableDamping = false; this.dampingFactor = 0.25; this.enableZoom = true; this.zoomSpeed = 1; this.enableRotate = true; this.rotateSpeed = 1; this.enablePan = true; this.keyPanSpeed = 7; this.autoRotate = false; this.autoRotateSpeed = 2; this.enableKeys = true; this.keys = {LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40}; this.mouseButtons = {ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT}; this.target0 = this.target.clone(); this.position0 = this.object.position.clone(); this.zoom0 = this.object.zoom; this.getPolarAngle = function () {
        return spherical.phi
      }; this.getAzimuthalAngle = function () {
        return spherical.theta
      }; this.saveState = function () {
        scope.target0.copy(scope.target); scope.position0.copy(scope.object.position); scope.zoom0 = scope.object.zoom
      }; this.reset = function () {
        scope.target.copy(scope.target0); scope.object.position.copy(scope.position0); scope.object.zoom = scope.zoom0; scope.object.updateProjectionMatrix(); scope.dispatchEvent(changeEvent); scope.update(); state = STATE.NONE
      }; this.update = (function () {
        const offset = new THREE.Vector3(); const quat = (new THREE.Quaternion()).setFromUnitVectors(object.up, new THREE.Vector3(0, 1, 0)); const quatInverse = quat.clone().inverse(); const lastPosition = new THREE.Vector3(); const lastQuaternion = new THREE.Quaternion(); return function update() {
          const {position} = scope.object; offset.copy(position).sub(scope.target); offset.applyQuaternion(quat); spherical.setFromVector3(offset); if (scope.autoRotate && state === STATE.NONE) {
            rotateLeft(getAutoRotationAngle())
          }spherical.theta += sphericalDelta.theta; spherical.phi += sphericalDelta.phi; spherical.theta = Math.max(scope.minAzimuthAngle, Math.min(scope.maxAzimuthAngle, spherical.theta)); spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi)); spherical.makeSafe(); spherical.radius *= scale; spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius)); scope.target.add(panOffset); offset.setFromSpherical(spherical); offset.applyQuaternion(quatInverse); position.copy(scope.target).add(offset); scope.object.lookAt(scope.target); if (scope.enableDamping === true) {
            sphericalDelta.theta *= 1 - scope.dampingFactor; sphericalDelta.phi *= 1 - scope.dampingFactor
          } else {
            sphericalDelta.set(0, 0, 0)
          }scale = 1; panOffset.set(0, 0, 0); if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {
            scope.dispatchEvent(changeEvent); lastPosition.copy(scope.object.position); lastQuaternion.copy(scope.object.quaternion); zoomChanged = false; return true
          } return false
        }
      }()); this.dispose = function () {
        scope.domElement.removeEventListener('contextmenu', onContextMenu, false); scope.domElement.removeEventListener('mousedown', onMouseDown, false); scope.domElement.removeEventListener('wheel', onMouseWheel, false); scope.domElement.removeEventListener('touchstart', onTouchStart, false); scope.domElement.removeEventListener('touchend', onTouchEnd, false); scope.domElement.removeEventListener('touchmove', onTouchMove, false); document.removeEventListener('mousemove', onMouseMove, false); document.removeEventListener('mouseup', onMouseUp, false); window.removeEventListener('keydown', onKeyDown, false)
      }; var scope = this; var changeEvent = {type: 'change'}; const startEvent = {type: 'start'}; const endEvent = {type: 'end'}; var STATE = {NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5}; var state = STATE.NONE; var EPS = 1e-6; var spherical = new THREE.Spherical(); var sphericalDelta = new THREE.Spherical(); var scale = 1; var panOffset = new THREE.Vector3(); var zoomChanged = false; const rotateStart = new THREE.Vector2(); const rotateEnd = new THREE.Vector2(); const rotateDelta = new THREE.Vector2(); const panStart = new THREE.Vector2(); const panEnd = new THREE.Vector2(); const panDelta = new THREE.Vector2(); const dollyStart = new THREE.Vector2(); const dollyEnd = new THREE.Vector2(); const dollyDelta = new THREE.Vector2(); function getAutoRotationAngle() {
        return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed
      } function getZoomScale() {
        return Math.pow(0.95, scope.zoomSpeed)
      } function rotateLeft(angle) {
        sphericalDelta.theta -= angle
      } function rotateUp(angle) {
        sphericalDelta.phi -= angle
      } const panLeft = (function () {
        const v = new THREE.Vector3(); return function panLeft(distance, objectMatrix) {
          v.setFromMatrixColumn(objectMatrix, 0); v.multiplyScalar(-distance); panOffset.add(v)
        }
      }()); const panUp = (function () {
        const v = new THREE.Vector3(); return function panUp(distance, objectMatrix) {
          v.setFromMatrixColumn(objectMatrix, 1); v.multiplyScalar(distance); panOffset.add(v)
        }
      }()); const pan = (function () {
        const offset = new THREE.Vector3(); return function pan(deltaX, deltaY) {
          const element = scope.domElement === document ? scope.domElement.body : scope.domElement; if (scope.object.isPerspectiveCamera) {
            const {position} = scope.object; offset.copy(position).sub(scope.target); let targetDistance = offset.length(); targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180); panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix); panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix)
          } else if (scope.object.isOrthographicCamera) {
            panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix); panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix)
          } else {
            console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.'); scope.enablePan = false
          }
        }
      }()); function dollyIn(dollyScale) {
        if (scope.object.isPerspectiveCamera) {
          scale /= dollyScale
        } else if (scope.object.isOrthographicCamera) {
          scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom * dollyScale)); scope.object.updateProjectionMatrix(); zoomChanged = true
        } else {
          console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.'); scope.enableZoom = false
        }
      } function dollyOut(dollyScale) {
        if (scope.object.isPerspectiveCamera) {
          scale *= dollyScale
        } else if (scope.object.isOrthographicCamera) {
          scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / dollyScale)); scope.object.updateProjectionMatrix(); zoomChanged = true
        } else {
          console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.'); scope.enableZoom = false
        }
      } function handleMouseDownRotate(event) {
        rotateStart.set(event.clientX, event.clientY)
      } function handleMouseDownDolly(event) {
        dollyStart.set(event.clientX, event.clientY)
      } function handleMouseDownPan(event) {
        panStart.set(event.clientX, event.clientY)
      } function handleMouseMoveRotate(event) {
        rotateEnd.set(event.clientX, event.clientY); rotateDelta.subVectors(rotateEnd, rotateStart); const element = scope.domElement === document ? scope.domElement.body : scope.domElement; rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed); rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed); rotateStart.copy(rotateEnd); scope.update()
      } function handleMouseMoveDolly(event) {
        dollyEnd.set(event.clientX, event.clientY); dollyDelta.subVectors(dollyEnd, dollyStart); if (dollyDelta.y > 0) {
          dollyIn(getZoomScale())
        } else if (dollyDelta.y < 0) {
          dollyOut(getZoomScale())
        }dollyStart.copy(dollyEnd); scope.update()
      } function handleMouseMovePan(event) {
        panEnd.set(event.clientX, event.clientY); panDelta.subVectors(panEnd, panStart); pan(panDelta.x, panDelta.y); panStart.copy(panEnd); scope.update()
      } function handleMouseUp(event) {} function handleMouseWheel(event) {
        if (event.deltaY < 0) {
          dollyOut(getZoomScale())
        } else if (event.deltaY > 0) {
          dollyIn(getZoomScale())
        }scope.update()
      } function handleKeyDown(event) {
        switch (event.keyCode) {
          case scope.keys.UP: pan(0, scope.keyPanSpeed); scope.update(); break; case scope.keys.BOTTOM: pan(0, -scope.keyPanSpeed); scope.update(); break; case scope.keys.LEFT: pan(scope.keyPanSpeed, 0); scope.update(); break; case scope.keys.RIGHT: pan(-scope.keyPanSpeed, 0); scope.update(); break
        }
      } function handleTouchStartRotate(event) {
        rotateStart.set(event.touches[0].pageX, event.touches[0].pageY)
      } function handleTouchStartDolly(event) {
        const dx = event.touches[0].pageX - event.touches[1].pageX; const dy = event.touches[0].pageY - event.touches[1].pageY; const distance = Math.sqrt(dx * dx + dy * dy); dollyStart.set(0, distance)
      } function handleTouchStartPan(event) {
        panStart.set(event.touches[0].pageX, event.touches[0].pageY)
      } function handleTouchMoveRotate(event) {
        rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY); rotateDelta.subVectors(rotateEnd, rotateStart); const element = scope.domElement === document ? scope.domElement.body : scope.domElement; rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed); rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed); rotateStart.copy(rotateEnd); scope.update()
      } function handleTouchMoveDolly(event) {
        const dx = event.touches[0].pageX - event.touches[1].pageX; const dy = event.touches[0].pageY - event.touches[1].pageY; const distance = Math.sqrt(dx * dx + dy * dy); dollyEnd.set(0, distance); dollyDelta.subVectors(dollyEnd, dollyStart); if (dollyDelta.y > 0) {
          dollyOut(getZoomScale())
        } else if (dollyDelta.y < 0) {
          dollyIn(getZoomScale())
        }dollyStart.copy(dollyEnd); scope.update()
      } function handleTouchMovePan(event) {
        panEnd.set(event.touches[0].pageX, event.touches[0].pageY); panDelta.subVectors(panEnd, panStart); pan(panDelta.x, panDelta.y); panStart.copy(panEnd); scope.update()
      } function handleTouchEnd(event) {} function onMouseDown(event) {
        if (scope.enabled === false) return; event.preventDefault(); switch (event.button) {
          case scope.mouseButtons.ORBIT: if (scope.enableRotate === false) return; handleMouseDownRotate(event); state = STATE.ROTATE; break; case scope.mouseButtons.ZOOM: if (scope.enableZoom === false) return; handleMouseDownDolly(event); state = STATE.DOLLY; break; case scope.mouseButtons.PAN: if (scope.enablePan === false) return; handleMouseDownPan(event); state = STATE.PAN; break
        } if (state !== STATE.NONE) {
          document.addEventListener('mousemove', onMouseMove, false); document.addEventListener('mouseup', onMouseUp, false); scope.dispatchEvent(startEvent)
        }
      } function onMouseMove(event) {
        if (scope.enabled === false) return; event.preventDefault(); switch (state) {
          case STATE.ROTATE: if (scope.enableRotate === false) return; handleMouseMoveRotate(event); break; case STATE.DOLLY: if (scope.enableZoom === false) return; handleMouseMoveDolly(event); break; case STATE.PAN: if (scope.enablePan === false) return; handleMouseMovePan(event); break
        }
      } function onMouseUp(event) {
        if (scope.enabled === false) return; handleMouseUp(event); document.removeEventListener('mousemove', onMouseMove, false); document.removeEventListener('mouseup', onMouseUp, false); scope.dispatchEvent(endEvent); state = STATE.NONE
      } function onMouseWheel(event) {
        if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE && state !== STATE.ROTATE) return; event.preventDefault(); scope.dispatchEvent(startEvent); handleMouseWheel(event); scope.dispatchEvent(endEvent)
      } function onKeyDown(event) {
        if (scope.enabled === false || scope.enableKeys === false || scope.enablePan === false) return; handleKeyDown(event)
      } function onTouchStart(event) {
        if (scope.enabled === false) return; switch (event.touches.length) {
          case 1: if (scope.enablePan === false) return; handleTouchStartPan(event); state = STATE.TOUCH_PAN; break; case 2: if (scope.enableZoom === false) return; handleTouchStartDolly(event); state = STATE.TOUCH_DOLLY; break; default: state = STATE.NONE
        } if (state !== STATE.NONE) {
          scope.dispatchEvent(startEvent)
        }
      } function onTouchMove(event) {
        if (scope.enabled === false) return; event.preventDefault(); switch (event.touches.length) {
          case 1: if (scope.enablePan === false) return; if (state !== STATE.TOUCH_PAN) return; handleTouchMovePan(event); break; case 2: if (scope.enableZoom === false) return; if (state !== STATE.TOUCH_DOLLY) return; handleTouchMoveDolly(event); break; default: state = STATE.NONE
        }
      } function onTouchEnd(event) {
        if (scope.enabled === false) return; handleTouchEnd(event); scope.dispatchEvent(endEvent); state = STATE.NONE
      } function onContextMenu(event) {
        if (scope.enabled === false) return; event.preventDefault()
      }scope.domElement.addEventListener('contextmenu', onContextMenu, false); scope.domElement.addEventListener('mousedown', onMouseDown, false); scope.domElement.addEventListener('wheel', onMouseWheel, false); scope.domElement.addEventListener('touchstart', onTouchStart, false); scope.domElement.addEventListener('touchend', onTouchEnd, false); scope.domElement.addEventListener('touchmove', onTouchMove, false); window.addEventListener('keydown', onKeyDown, false); this.update()
    }; THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype); THREE.OrbitControls.prototype.constructor = THREE.OrbitControls; Object.defineProperties(THREE.OrbitControls.prototype, {
      center: {
        get() {
          console.warn('THREE.OrbitControls: .center has been renamed to .target'); return this.target
        },
      },
      noZoom: {
        get() {
          console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.'); return !this.enableZoom
        },
        set(value) {
          console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.'); this.enableZoom = !value
        },
      },
      noRotate: {
        get() {
          console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.'); return !this.enableRotate
        },
        set(value) {
          console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.'); this.enableRotate = !value
        },
      },
      noPan: {
        get() {
          console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.'); return !this.enablePan
        },
        set(value) {
          console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.'); this.enablePan = !value
        },
      },
      noKeys: {
        get() {
          console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.'); return !this.enableKeys
        },
        set(value) {
          console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.'); this.enableKeys = !value
        },
      },
      staticMoving: {
        get() {
          console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.'); return !this.enableDamping
        },
        set(value) {
          console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.'); this.enableDamping = !value
        },
      },
      dynamicDampingFactor: {
        get() {
          console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.'); return this.dampingFactor
        },
        set(value) {
          console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.'); this.dampingFactor = value
        },
      },
    })
  }, function (module, exports, __webpack_require__) {
    __webpack_require__(0); const {bind} = AFRAME.utils; AFRAME.registerComponent('orbit-controls', {
      dependencies: ['camera'],
      schema: {autoRotate: {type: 'boolean'}, autoRotateSpeed: {default: 2}, dampingFactor: {default: 0.1}, enabled: {default: true}, enableDamping: {default: true}, enableKeys: {default: true}, enablePan: {default: true}, enableRotate: {default: true}, enableZoom: {default: true}, initialPosition: {type: 'vec3'}, keyPanSpeed: {default: 7}, minAzimuthAngle: {type: 'number', default: -Infinity}, maxAzimuthAngle: {type: 'number', default: Infinity}, maxDistance: {default: 1e3}, maxPolarAngle: {default: AFRAME.utils.device.isMobile() ? 90 : 120}, minDistance: {default: 1}, minPolarAngle: {default: 0}, minZoom: {default: 0}, panSpeed: {default: 1}, rotateSpeed: {default: 0.05}, screenSpacePanning: {default: false}, target: {type: 'vec3'}, zoomSpeed: {default: 0.5}},
      init() {
        const {el} = this; let oldPosition; oldPosition = new THREE.Vector3(); this.bindMethods(); el.sceneEl.addEventListener('enter-vr', this.onEnterVR); el.sceneEl.addEventListener('exit-vr', this.onExitVR); document.body.style.cursor = 'grab'; document.addEventListener('mousedown', () => {
          document.body.style.cursor = 'grabbing'
        }); document.addEventListener('mouseup', () => {
          document.body.style.cursor = 'grab'
        }); this.target = new THREE.Vector3(); el.getObject3D('camera').position.copy(this.data.initialPosition)
      },
      pause() {
        this.controls.dispose()
      },
      play() {
        const {el} = this; this.controls = new THREE.OrbitControls(el.getObject3D('camera'), el.sceneEl.renderer.domElement); this.update()
      },
      onEnterVR() {
        const {el} = this; if (!AFRAME.utils.device.checkHeadsetConnected() && !AFRAME.utils.device.isMobile()) {
          return
        } this.controls.enabled = false; if (el.hasAttribute('look-controls')) {
          el.setAttribute('look-controls', 'enabled', true); oldPosition.copy(el.getObject3D('camera').position); el.getObject3D('camera').position.set(0, 0, 0)
        }
      },
      onExitVR() {
        const {el} = this; if (!AFRAME.utils.device.checkHeadsetConnected() && !AFRAME.utils.device.isMobile()) {
          return
        } this.controls.enabled = true; el.getObject3D('camera').position.copy(oldPosition); if (el.hasAttribute('look-controls')) {
          el.setAttribute('look-controls', 'enabled', false)
        }
      },
      bindMethods() {
        this.onEnterVR = bind(this.onEnterVR, this); this.onExitVR = bind(this.onExitVR, this)
      },
      update(oldData) {
        const {controls} = this; const {data} = this; if (!controls) {
          return
        }controls.target = this.target.copy(data.target); controls.autoRotate = data.autoRotate; controls.autoRotateSpeed = data.autoRotateSpeed; controls.dampingFactor = data.dampingFactor; controls.enabled = data.enabled; controls.enableDamping = data.enableDamping; controls.enableKeys = data.enableKeys; controls.enablePan = data.enablePan; controls.enableRotate = data.enableRotate; controls.enableZoom = data.enableZoom; controls.keyPanSpeed = data.keyPanSpeed; controls.maxPolarAngle = THREE.Math.degToRad(data.maxPolarAngle); controls.maxAzimuthAngle = THREE.Math.degToRad(data.maxAzimuthAngle); controls.maxDistance = data.maxDistance; controls.minDistance = data.minDistance; controls.minPolarAngle = THREE.Math.degToRad(data.minPolarAngle); controls.minAzimuthAngle = THREE.Math.degToRad(data.minAzimuthAngle); controls.minZoom = data.minZoom; controls.panSpeed = data.panSpeed; controls.rotateSpeed = data.rotateSpeed; controls.screenSpacePanning = data.screenSpacePanning; controls.zoomSpeed = data.zoomSpeed
      },
      tick() {
        const {controls} = this; const {data} = this; if (!data.enabled) {
          return
        } if (controls.enabled && (controls.enableDamping || controls.autoRotate)) {
          this.controls.update()
        }
      },
      remove() {
        this.controls.reset(); this.controls.dispose(); this.el.sceneEl.removeEventListener('enter-vr', this.onEnterVR); this.el.sceneEl.removeEventListener('exit-vr', this.onExitVR)
      },
    })
  }]))