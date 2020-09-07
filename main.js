
window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 160,
		height: 208,
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		render: {
			pixelArt: true
		},
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		}
	});
	
	game.scene.add("Boot", Boot, true);

});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/asset-pack.json");
	}

	create() {
		
		this.scene.start("Level");
	}

}