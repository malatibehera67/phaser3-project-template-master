class Example1 extends Phaser.Scene {
    constructor() {
        super({key: 'Example1'})
    }

    preload() {
        this.load.image("logo", logoImg);
    }

    create() {
        const logo = this.add.image(400, 150, "logo");

        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
    }

}