const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/meat_boy.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.addEntity(new meatboy(gameEngine));
	//ctx.fillStyle = "Red";
	//ctx.strokeStyle = "Red";

	//ctx.fillRect(100, 110, 100, 100);

	//ctx.beginPath();
	//ctx.arc(50, 50, 25, 0, 2 * Math.PI);
	//ctx.fill();
	//cts.stroke();
	// ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);

	gameEngine.init(ctx);

	gameEngine.start();
});
