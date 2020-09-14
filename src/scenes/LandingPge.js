class LandingPage extends Phaser.Scene {
    constructor() {
        super({key: 'LandingPage'})
    }

    preload() {
        this.load.image("bg", "src/assets/assets_landing _screen_home/background.png");
        this.load.image("frame", "src/assets/assets_landing _screen_home/frame.png");
        this.load.image("oval", "src/assets/assets_landing _screen_home/oval.png");
        this.load.image("character", "src/assets/assets_landing _screen_home/character.png");
        this.load.image("plant", "src/assets/assets_landing _screen_home/plant.png");
        this.load.image("logo", "src/assets/assets_landing _screen_home/logo_bagi_2_ketupat.png");
        this.load.image("howToPlay", "src/assets/assets_landing _screen_home/button_t_c.png");
        this.load.image("buttonPrizeList", "src/assets/assets_landing _screen_home/button_prize_list.png");
        this.load.image("buttonPlayGame", "src/assets/assets_landing _screen_home/button_play_game.png");
    }

    create() {
        let image = this.add.image(0, 0, 'bg').setOrigin(0)
        let scaleY = window.innerHeight / image.height
        Align.scaleToGameWH(image, 1);

        let frame = this.add.image(0, 0, 'frame').setOrigin(0)
        Align.scaleToGameWH(frame, 1);

        let oval = this.add.image(0, game.config.height, 'oval').setOrigin(0, 1)
        Align.scaleToGameW(oval, 1);


        let character = this.add.image(game.config.width / 2, game.config.height, 'character').setOrigin(.5, 1)
        character.setScale(scaleY).setScrollFactor(0)

        let plant = this.add.image(game.config.width, game.config.height, 'plant').setOrigin(1, 1)
        plant.setScale(scaleY).setScrollFactor(0)

        let logo = this.add.image(game.config.width / 2, (game.config.height / 5) * 1.4, 'logo').setOrigin(.5, .5)
        logo.setScale(scaleY).setScrollFactor(0)

        let howToPlay = this.add.image(game.config.width / 2, (game.config.height / 15) * 10.4, 'howToPlay').setOrigin(.5, .5)
        howToPlay.setScale(scaleY).setScrollFactor(0)

        let buttonPrizeList = this.add.image(game.config.width / 2, (game.config.height / 15) * 9.3, 'buttonPrizeList').setOrigin(.5, .5)
        buttonPrizeList.setScale(scaleY).setScrollFactor(0)

        let buttonPlayGame = this.add.image(game.config.width / 2, (game.config.height / 15) * 8, 'buttonPlayGame').setOrigin(.5, .5)
        buttonPlayGame.setScale(scaleY).setScrollFactor(0)

        this.msg1 = this.add.text(8 * this.game.config.width / 10, (game.config.height / 14) * 5.5, 'Get prizes inside a ketupat, open one to start! Play every day at these hours (WIB time):', {
            font: "35px Arial", fill: "#000000", align: 'center', lineSpacing: 10,
            wordWrap: {width: 8 * this.game.config.width / 10, useAdvancedWrap: true}
        })

        // Align.scaleToGameW(this.msg1, .8);
        Align.centerH(this.msg1)

        buttonPlayGame.setInteractive().on('pointerdown', function () {
            this.scene.scene.start('PlayPage');
        });

    }
}