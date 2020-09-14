var pendulum;
var direction;
var count;
class PlayPage extends Phaser.Scene {

    constructor() {
        super({key: 'PlayPage'})
    }

    preload() {
        this.load.image("bg", "src/assets/assets_landing _screen_home/background.png");
        this.load.image("frame", "src/assets/assets_landing _screen_home/frame.png");
        this.load.image("oval", "src/assets/assets_landing _screen_home/oval.png");
        this.load.image("character", "src/assets/assets_landing _screen_home/character.png");
        this.load.image("plant", "src/assets/assets_landing _screen_home/plant.png");
        this.load.image("blueSprite", "src/assets/assets_game_play asset/blue.png");
        this.load.image("greenSprite", "src/assets/assets_game_play asset/green.png");
        this.load.image("orangeSprite", "src/assets/assets_game_play asset/orange.png");
        this.load.image("buttonBack", "src/assets/assets_game_play asset/back.png");
        this.load.image("path", "src/assets/assets_congratulation_screen_vouchers/path.png");
        this.load.image("flash", "src/assets/assets_congratulation_screen_vouchers/flash.png");
        this.load.image("blinkBlink", "src/assets/assets_congratulation_screen_vouchers/blink_blink.png");
        this.load.image("voucher", "src/assets/assets_congratulation_screen_vouchers/voucher.png");
        this.load.image("seePrize", "src/assets/assets_congratulation_screen_vouchers/button_lihat_voucher.png");
        this.load.audio('playMusic', [
            'src/assets/assets_game_play asset/gamePlayScreen(loop).mp3'
        ]);
    }

    animateFirst() {
        this.spriteArrIndex++;
        if (this.spriteArrIndex < this.spriteArr.length) {
            let sprite = this.spriteArr[this.spriteArrIndex];
            let pos = this.arr[this.spriteArrIndex];
            this.aGrid.placeAtIndex(pos, sprite);
            sprite.displayWidth = game.config.width * 0;
            sprite.displayHeight = game.config.height * 0;
            this.tweens.add({
                targets: sprite,
                duration: 200,
                scaleX: this.scale,
                scaleY: this.scale,
                ease: 'Sine.easeInOut',
                delay: 0,
                paused: false,
                repeat: 0
            });
            sprite.setInteractive().on('pointerdown', function () {
                count = 0;
                console.log("clicked ", sprite);
                this.click(sprite);
            }, this);
        }
        setTimeout(() => {
            this.animateFirst();
        }, 205);
    }

    addMenuButtons() {
        this.buttonBack = this.add.image(0, 0, 'buttonBack').setOrigin(0)
        this.buttonBack.setScale(2).setScrollFactor(0)
        this.buttonBack.setInteractive().on('pointerdown', function () {
            if (this.music) {
                this.music.stop();
            }
            this.scene.scene.start('LandingPage');
        });
    }

    openPrizeGroup() {

        this.path = this.add.image(game.config.width / 2, game.config.height / 2, 'path').setOrigin(0.5, 0.5);
        this.prizeGroupScaleX = Align.scaleToGameW(this.path, .92);
        this.prizeGroupScaleY = Align.scaleToGameH(this.path, .8);
        this.flash = this.add.image(game.config.width / 2, game.config.height / 2, 'flash').setOrigin(0.5, 0.5);
        this.blinkBlink = this.add.image(game.config.width / 2, game.config.height / 2, 'blinkBlink').setOrigin(0.5, 0.5);
        this.voucher = this.add.image(game.config.width / 2, game.config.height / 2, 'voucher').setOrigin(0.5, 0.5)
        this.seePrize = this.add.image(game.config.width / 2, game.config.height / 2, 'seePrize').setOrigin(0.5, 0.5)
        this.aGrid.placeAtIndex(514, this.seePrize);
        this.prizeGroup = this.add.group();
        this.prizeGroup.add(this.path);
        this.prizeGroup.add(this.flash);
        this.prizeGroup.add(this.blinkBlink);
        this.prizeGroup.add(this.voucher);
        this.prizeGroup.add(this.seePrize);

        var style = {font: "30px Arial", fill: "#000000", lineSpacing: 10, };
        this.congText = this.add.text(0, this.game.config.height / 7, 'What a blessing!', style);
        this.prizeGroup.add(this.congText);
        this.congSubText = this.add.text(0, this.game.config.height / 5, 'Congrats, you&apos;ve won this prize:', {
            font: "20px Arial", fill: "#000000", align: 'center', lineSpacing: 10,
            wordWrap: {width: 300, useAdvancedWrap: true}
        });

        this.prizePrice = this.add.text(0, 0, 'Voucher Rp 500.00', {
            font: "20px Arial", fill: "#000000", align: 'center', lineSpacing: 10,
            wordWrap: {width: 300, useAdvancedWrap: true}
        })
        this.prizeGroup.add(this.prizePrice);
        this.aGrid.placeAtIndex(434, this.prizePrice);

        this.prizeSubPrice = this.add.text(0, 0, 'for minimum transaction of Rp100.000.', {
            font: "15px Arial", fill: "grey", align: 'center', lineSpacing: 10,
            wordWrap: {width: 350, useAdvancedWrap: true}
        })
        this.prizeGroup.add(this.prizeSubPrice);
        this.aGrid.placeAtIndex(454, this.prizeSubPrice);

        this.prizeGroup.add(this.congSubText);
        this.prizeGroup.children.iterate((child) => {
            child.displayHeight = 0;
            child.displayWidth = 0;
        });

        this.prizeGroup.children.iterate((child) => {
            child.displayHeight = 0;
            child.displayWidth = 0;
        });
        this.prizeGroup.children.iterate((child) => {
            this.tweens.add({
                targets: child,
                duration: 500,
                scaleX: this.prizeGroupScaleX,
                scaleY: this.prizeGroupScaleY,
                ease: 'Sine.easeInOut',
                delay: 0,
                paused: false,
                repeat: 0
                // onComplete: function ()
            });
        });

        setTimeout(() => {
            Align.centerH(this.congText);
            Align.centerH(this.congSubText);
            Align.centerH(this.prizePrice);
            Align.centerH(this.prizeSubPrice);
        }, 505);

    }

    click(sprite) {
        count++;
        if (count > 5) {
            /*  var img = new Image();
              img.src = "src/assets/assets_game_play asset/green.png";
              img.className = "custom_div"
              this.ele = this.add.dom(sprite.x - sprite.displayWidth, sprite.y - sprite.displayHeight, img);*/

            setTimeout(() => {
                // this.ele.setVisible(false);
                this.graphics = this.add.graphics();
                var color = 0x000000;
                var alpha = .8;
                this.graphics.fillStyle(color, alpha);
                this.graphics.fillRect(0, 0, this.game.config.width, this.game.config.height);
                this.graphics.setBlendMode(Phaser.BlendModes.MULTIPLY);
                this.addMenuButtons();
                this.lottie.setVisible(false);
                this.openPrizeGroup();
                this.music.stop();
                this.music.pause();
            }, 100);
            return
        }
        console.log("clicked inside click function ", sprite);
        var angle = sprite.angle.toFixed(0);
        console.log("angle ", angle);
        var updatedAngle = 0;
        if (count == 5) {
            updatedAngle = 0
        } else if (angle == 0) {
            updatedAngle = 45
        } else if (angle > 0 && angle <= 45) {
            updatedAngle = -45
        } else if (angle < 0 && angle >= -45) {
            updatedAngle = 45
        }
        this.tweens.add({
            targets: sprite,
            angle: updatedAngle,
            duration: 500,
            repeat: 0
        });
        setTimeout(() => {
            this.click(sprite);
        }, 510);
    }

    create() {
        var gridConfig = {
            'scene': this,
            'cols': 21,
            'rows': 31
        }

        this.aGrid = new AlignGrid(gridConfig);
        let image = this.add.image(0, 0, 'bg').setOrigin(0)
        Align.setScale(image);
        Align.scaleToGameWH(image, 1);

        this.music = this.sound.add('playMusic');
        this.music.setLoop(true);
        this.music.play();

        let frame = this.add.image(0, 0, 'frame').setOrigin(0)
        Align.scaleToGameWH(frame, 1);

        let oval = this.add.image(0, game.config.height, 'oval').setOrigin(0, 1)
        Align.scaleToGameW(oval, 1);
        Align.scaleToGameH(oval, .2);

        this.plant = this.add.image(game.config.width, game.config.height, 'plant').setOrigin(1, 1)
        Align.scaleToGameWParallel(this.plant, .3);

        this.addMenuButtons();

        // this.msgBg = this.add.graphics();
        // this.msgBg.fillStyle(0x000000, 1);
        // this.msgBg.fillRoundedRect(52, 52, 300, 100, 52);
        // this.aGrid.placeAtIndex(114, this.msgBg);
        // Align.centerH(this.msgBg);

        // this.msgBg = this.add.graphics();
        // this.msgBg.fillStyle(0xffff00, 1);
        //  32px radius on the corners
        // this.msgBg.fillRoundedRect(0, 0, 300, 100, 52);
        // this.msgBg.setOrigin(0.5, 0.5);
        // this.aGrid.placeAtIndex(114, this.msgBg);
        // Align.centerH(this.msgBg);

        this.gameMsg = this.add.text(0, 0, 'Reveal your blessing inside a ketupat, go slice one to find out!', {
            font: "35px Arial", fill: "#000000", align: 'center',
            backgroundColor: '#7bddff',
            padding: {top: 20, bottom: 20, left: 15, right: 15},
            wordWrap: {width: (1.7 * this.game.config.width) / 3, useAdvancedWrap: true}
        })
        this.aGrid.placeAtIndex(114, this.gameMsg);
        Align.centerH(this.gameMsg);



        this.arr = [220, 424, 436, 430, 325, 331, 319, 226, 214];
        this.arr = Align.shuffle(this.arr);
        this.spriteArr = [];

        this.greenSprite = this.add.image(0, 0, 'greenSprite');
        Align.scaleToGameWParallel(this.greenSprite, .19);
        this.spriteArr.push(this.greenSprite);

        this.greenSprite1 = this.add.image(0, 0, 'greenSprite');
        Align.scaleToGameWParallel(this.greenSprite1, .19);
        this.spriteArr.push(this.greenSprite1);

        this.greenSprite2 = this.add.image(0, 0, 'greenSprite');
        Align.scaleToGameWParallel(this.greenSprite2, .19);
        this.spriteArr.push(this.greenSprite2);

        this.blueSprite = this.add.image(0, 0, 'blueSprite');
        Align.scaleToGameWParallel(this.blueSprite, .19);
        this.spriteArr.push(this.blueSprite);

        this.blueSprite1 = this.add.image(0, 0, 'blueSprite');
        Align.scaleToGameWParallel(this.blueSprite1, .19);
        this.spriteArr.push(this.blueSprite1);

        this.blueSprite2 = this.add.image(0, 0, 'blueSprite');
        Align.scaleToGameWParallel(this.blueSprite2, .19);
        this.spriteArr.push(this.blueSprite2);

        this.orangeSprite = this.add.image(0, 0, 'orangeSprite');
        Align.scaleToGameWParallel(this.orangeSprite, .19);
        this.spriteArr.push(this.orangeSprite);


        this.orangeSprite1 = this.add.image(0, 0, 'orangeSprite');
        Align.scaleToGameWParallel(this.orangeSprite1, .19);
        this.spriteArr.push(this.orangeSprite1);

        this.orangeSprite2 = this.add.image(0, 0, 'orangeSprite');
        this.scale = Align.scaleToGameWParallel(this.orangeSprite2, .19);
        this.spriteArr.push(this.orangeSprite2);

        let div = document.createElement('div');
        div.id = 'lottie'
        this.lottie = this.add.dom(0, 0, div);
        this.animation = bodymovin.loadAnimation({
            container: document.getElementById("lottie"), // Required
            path: "src/assets/assets_game_play asset/Happiness Bag with Peci - Drum Animation.json", // Required
            renderer: "svg", // Required
            loop: true, // Optional
            autoplay: true, // Optional
            name: "Hello World", // Name for future reference. Optional.
        });

        pendulum = this.orangeSprite2;
        direction = "left";
        this.spriteArrIndex = -1;
        this.animateFirst();

    }
}
