
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {
	
	constructor() {
		super("Level");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	create() {
		
		// bg_clouds
		const bg_clouds = this.add.image(0, 0, "bg-clouds");
		bg_clouds.setOrigin(0, 0);
		
		// bg_trees
		const bg_trees = this.add.image(0, 0, "bg-trees");
		bg_trees.setOrigin(0, 0);
		
		// leaves
		this.add.image(181, 174, "atlas-props", "leaves");
		
		// branch_03
		this.add.image(-9, 194, "atlas-props", "branch-03");
		
		// acorn_1
		const acorn_1 = this.add.sprite(38, 91, "atlas", "acorn-1");
		
		// ant_1
		const ant_1 = this.add.sprite(112, 91, "atlas", "ant-1");
		
		// player_crouch_1
		const player_crouch_1 = this.add.sprite(42, 39, "atlas", "player-crouch-1");
		
		// gator_1
		const gator_1 = this.add.sprite(108, 48, "atlas", "gator-1");
		
		// acorn_1 (components)
		const acorn_1StartAnimation = new StartAnimation(acorn_1);
		acorn_1StartAnimation.animationKey = "acorn";
		
		// ant_1 (components)
		const ant_1StartAnimation = new StartAnimation(ant_1);
		ant_1StartAnimation.animationKey = "ant";
		
		// player_crouch_1 (components)
		const player_crouch_1StartAnimation = new StartAnimation(player_crouch_1);
		player_crouch_1StartAnimation.animationKey = "player-crouch";
		
		// gator_1 (components)
		const gator_1StartAnimation = new StartAnimation(gator_1);
		gator_1StartAnimation.animationKey = "gator";
	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
