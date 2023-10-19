class GuessingGame {
	constructor() {
		let min = 0;
		let max = 0;
		let prev = 0;
	}

	setRange(min, max) {
		this.min = min;
		this.max = max;
	}

	guess() {
		return (this.prev = Math.ceil((this.min + this.max) / 2));
	}

	lower() {
		this.max = this.prev;
	}

	greater() {
		this.min = this.prev;
	}
}

module.exports = GuessingGame;
