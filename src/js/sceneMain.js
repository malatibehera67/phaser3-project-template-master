// class Scene extends Phaser.Scene {
//     constructor() {
//         super('SceneMain');
//     }
//     preload() {
//         this.load.image("key", "images/face.jpg");
//     }
//     create() {
//         // console.log("Ready!");
//         let face = this.add.image(0, 0, "key");
//     }
//     update() {}
// }
// import greenSpriteImg from "src/assets/assets_game_play asset/green.png";
// import greenSpriteImg from "/src/images/face.jpg";

class SceneMain extends Phaser.Scene {

    constructor() {
        super('SceneMain');
    }

    preload() {
        this.load.image("key", "src/assets/assets_game_play asset/green.png");
        //  this.load.image("key", "src/images/Ketupat Sliced [Blue].gif");
        // this.load.atlas('gems', 'assets/tests/columns/gems.png', 'src/images/Ketupat Sliced [Orange].json');
        // this.load.spritesheet('ship', 'src/images/Ketupat Sliced [Orange].json', {frameWidth: 90, frameHeight: 111});
        // this.load.spritesheet('ship', 'src/images/explosion.png', {frameWidth: 16, frameHeight: 16});

    }

    create() {
        // var img = new Image();
        // img.src = "src/images/Ketupat Sliced [Blue].gif";
        // img.className = "custom_div"
        // this.add.dom(200, 300, img);


        // const button = document.createElement('div');
        // button.className = "custom_div";
        // button.innerText = "Click Me";
        // this.add.dom(200, 300, button);

        // var bodymovinDiv = document.querySelector('.bodymovin');
        // this.animation = bodymovinDiv.loadAnimation({
        //     container: document.getElementById("game"), // Required
        //     path: "src/images/Ketupat Sliced [Orange].json", // Required
        //     renderer: "canvas", // Required
        //     loop: true, // Optional
        //     autoplay: true, // Optional
        //     name: "Hello World", // Name for future reference. Optional.
        // });

        // this.ship1 = this.add.sprite(50, 50, "ship");
        // this.anims.create({
        //     key: 'ship1_anim',
        //     frames: this.anims.generateFrameNumbers("ship"),
        //     frameRate: 3,
        //     repeat: 0
        // });
        // this.ship1.play("ship1_anim");


        // var frameNames = this.textures.get('char').getFrameNames();
        // this.anims.create({
        //     key: 'walk',
        //     frames: [
        //         {key: 'char', frame: 1},
        //         {key: 'char', frame: 2},
        //     ],
        //     frameRate: 8,
        //     repeat: -1
        // });
        // this.anims.play('walk');
        // this.add.sprite(400, 200, 'gems').play('diamond');
        this.face = this.add.image(0, 0, "key").setOrigin(0);
        this.face.displayWidth = game.config.width * 0;
        this.face.displayHeight = game.config.height * 0;
        this.tweens.add({
            targets: this.face,
            duration: 3000,
            scaleX: '+=1',
            scaleY: '+=1',
            ease: 'Sine.easeInOut',
            delay: 0,
            paused: false,
            repeat: 0
        });

        this.face.setInteractive().on('pointerdown', function () {
            console.log("image clicked")
            var img = new Image();
            img.src = "src/images/Ketupat Sliced [Blue].gif";
            img.className = "custom_div"
            const height = this.face.displayHeight;
            const width = this.face.displayWidth;
            const x = this.face.x + height / 2;
            const y = this.face.y + width / 2;
            img.height = height;
            img.width = width;
            this.add.dom(x, y, img);
        }, this);

    }

    update() {}
    customFunctions() {}
}