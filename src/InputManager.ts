export const Keys = {
	w: 87,
	a: 65,
	s: 83,
	d: 68,
}

interface KeyCache {
	[key: number]: boolean;
}

class InputManager {

	// a hash used to determine if a key is pressed
	private pressed: KeyCache = {}

	constructor() {
	}

	isDown(key: number) {
		return this.pressed[key] ? true : false
	}

	idUp(key: number) {
		return !this.isDown(key)
	}

	keyDown = (event: KeyboardEvent) => {
		this.pressed[event.keyCode] = true
	}

	keyUp = (event: KeyboardEvent) => {
		this.pressed[event.keyCode] = false
	}
}

const instance = new InputManager()

// add listeners to the key up/down events on the window.
window.addEventListener('keydown', instance.keyDown)
window.addEventListener('keyup', instance.keyUp)

export default instance
