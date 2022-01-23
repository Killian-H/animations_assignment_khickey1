class meatboy {
	constructor(game) {
		this.game = game;
		this.spritesheet = ASSET_MANAGER.getAsset("./sprites/meat_boy.png");


		this.animation = new Animator(this.spritesheet, 98, 21, 53, 51, 8, 0.09, 27, true);
		
		this.crawling = new Animator(this.spritesheet, 415, 127, 58, 28, 7, 0.08, 23, true);

		this.state = 0; // 0 = idle, 1 = walking, 2 = idle crawl, 3 = crawling, 4 = perilous, 5 = jumping
		this.x = 0;
		this.y = 720;
		this.speed = 220;
		this.scale = 1.5;

		//this.animations = [];
		//this.loadAnimations();
	};

	//loadAnimations() {
	//	for (var i = 0; i < 6; i++) {
	//		this.animations.push([]);
 //       }
	//};

	update() {
		this.x += this.speed * this.game.clockTick;
		if (this.x >= 1280) {
			this.x = 0;
        }
	};

	draw(ctx) {
		this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y / 2, this.scale);

		this.crawling.drawFrame(this.game.clockTick, ctx, this.x, this.y / 3, this.scale);
	};
};

