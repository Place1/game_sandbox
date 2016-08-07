const Keys = {
	w: 87,
	a: 65,
	s: 83,
	d: 68,
}

class InputManager {

	constructor() {
		this.pressed = {} // a hash used to determine if a key is pressed
	}

	isDown(key) {
		return this.pressed[key] ? true : false
	}

	idUp(key) {
		return !this.isDown(key)
	}

	keyDown = event => {
		this.pressed[event.keyCode] = true
	}

	keyUp = event => {
		this.pressed[event.keyCode] = false
	}
}

const instance = new InputManager()

// add listeners to the key up/down events on the window.
window.addEventListener('keydown', instance.keyDown)
window.addEventListener('keyup', instance.keyUp)

module.exports = instance
module.exports.Keys = Keys
