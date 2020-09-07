
// You can write more code here

/* START OF COMPILED CODE */

class StartAnimation {
	
	constructor(gameObject) {
		gameObject["__StartAnimation"] = this;
		
		/** @type {Phaser.GameObjects.Sprite} */
		this.gameObject = gameObject;
		/** @type {string} */
		this.animationKey = "";
		
		/* START-USER-CTR-CODE */
		
		this.gameObject.scene.events.once("update", () => {

			this.gameObject.play(this.animationKey);
		});

		/* END-USER-CTR-CODE */
	}
	
	/** @returns {StartAnimation} */
	static getComponent(gameObject) {
		return gameObject["__StartAnimation"];
	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
