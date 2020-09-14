import Phaser from "phaser";
import bgImg from "./assets/assets_landing _screen_home/background.png";
import frameImg from "./assets/assets_landing _screen_home/frame.png";
import ovalImg from "./assets/assets_landing _screen_home/oval.png";
import characterImg from "./assets/assets_landing _screen_home/character.png";
import plantImg from "./assets/assets_landing _screen_home/plant.png";
import logoImg from "./assets/assets_landing _screen_home/logo_bagi_2_ketupat.png";
import buttonHowToPlayImg from "./assets/assets_landing _screen_home/button_t_c.png";
import buttonPrizeListImg from "./assets/assets_landing _screen_home/button_prize_list.png";
import buttonPlayGameImg from "./assets/assets_landing _screen_home/button_play_game.png";
import blueSpriteImg from "./assets/assets_game_play asset/blue.png";
import greenSpriteImg from "./assets/assets_game_play asset/green.png";
import orangeSpriteImg from "./assets/assets_game_play asset/orange.png";
import buttonBackImg from "./assets/assets_game_play asset/back.png";
import pathImg from "./assets/assets_congratulation_screen_vouchers/path.png";
import flashImg from "./assets/assets_congratulation_screen_vouchers/flash.png";
import blinkBlinkImg from "./assets/assets_congratulation_screen_vouchers/blink_blink.png";
import voucherImg from "./assets/assets_congratulation_screen_vouchers/voucher.png";
import SceneMain from "./js/sceneMain";

var scaleDir = 'x';
class Align {
  static setScale(obj) {
    let scalex = game.config.width / obj.width;
    let scaley = game.config.height / obj.height;
    if (scalex > scaleY) {
      scaleDir = 'y'
    } else {
      scaleDir = 'x'
    }
  }
  static scaleToGameW(obj, per) {
    obj.displayWidth = game.config.width * per;
    // obj.displayHeight = game.config.height * per;
    // obj.scaleY = obj.scaleX;
  }
  static scaleToGameH(obj, per) {
    obj.displayHeight = game.config.height * per;
    // obj.scaleY = obj.scaleX;
  }
  static scaleToGameWH(obj, per) {
    obj.displayWidth = game.config.width * per;
    obj.displayHeight = game.config.height * per;
    // obj.scaleY = obj.scaleX;
  }
  static centerH(obj) {
    obj.x = game.config.width / 2 - obj.displayWidth / 2;
  }
  static centerV(obj) {
    obj.y = game.config.height / 2 - obj.displayHeight / 2;
  }
}
class LandingPage extends Phaser.Scene {
  constructor() {
    super({key: 'LandingPage'})
  }

  preload() {
    this.load.image("bg", bgImg);
    this.load.image("frame", frameImg);
    this.load.image("oval", ovalImg);
    this.load.image("character", characterImg);
    this.load.image("plant", plantImg);
    this.load.image("logo", logoImg);
    this.load.image("howToPlay", buttonHowToPlayImg);
    this.load.image("buttonPrizeList", buttonPrizeListImg);
    this.load.image("buttonPlayGame", buttonPlayGameImg);
  }

  create() {
    let image = this.add.image(0, 0, 'bg').setOrigin(0)
    let scaleY = window.innerHeight / image.height
    Align.scaleToGameWH(image, 1);

    let frame = this.add.image(0, 0, 'frame').setOrigin(0)
    Align.scaleToGameWH(frame, 1);

    let oval = this.add.image(0, game.config.height, 'oval').setOrigin(0, 1)
    // oval.setScale(scaleY).setScrollFactor(0)
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

    buttonPlayGame.setInteractive().on('pointerdown', function () {
      //Let's start another scene with start
      this.scene.scene.start('PlayPage');
    });

  }


  // resize(gameSize, baseSize, displaySize, resolution) {
  //   var width = gameSize.width;
  //   var height = gameSize.height;
  //   this.cameras.resize(width, height);
  //   this.bg.setSize(width, height);
  // }
}

class PlayPage extends Phaser.Scene {
  constructor() {
    super({key: 'PlayPage'})
  }

  preload() {
    this.load.scenePlugin({
      key: 'rexuiplugin',
      url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
      sceneKey: 'rexUI'
    });
    this.load.image("bg", bgImg);
    this.load.image("frame", frameImg);
    this.load.image("oval", ovalImg);
    this.load.image("character", characterImg);
    this.load.image("plant", plantImg);
    this.load.image("blueSprite", blueSpriteImg);
    this.load.image("greenSprite", greenSpriteImg);
    this.load.image("orangeSprite", orangeSpriteImg);
    this.load.image("buttonBack", buttonBackImg);
    this.load.image("path", pathImg);
    this.load.image("flash", flashImg);
    this.load.image("blinkBlink", blinkBlinkImg);
    this.load.image("voucher", voucherImg);
  }

  create() {

    this.makeAlignGrid(11, 11);
    this.aGrid.showNumbers();

    let image = this.add.image(0, 0, 'bg').setOrigin(0)
    let scaleY = window.innerHeight / image.height
    Align.scaleToGameWH(image, 1);

    let frame = this.add.image(0, 0, 'frame').setOrigin(0)
    Align.scaleToGameWH(frame, 1);

    let oval = this.add.image(0, game.config.height, 'oval').setOrigin(0, 1)
    oval.setScale(scaleY).setScrollFactor(0)
    Align.scaleToGameW(oval, 1);

    // let image = this.add.image(0, 0, 'bg').setOrigin(0)
    // let scaleY = window.innerHeight / image.height
    // image.setScale(scaleY).setScrollFactor(0)

    // let frame = this.add.image(0, 0, 'frame').setOrigin(0)
    // frame.setScale(scaleY).setScrollFactor(0)

    // let oval = this.add.image(0, game.config.height, 'oval').setOrigin(0, 1)
    // oval.setScale(scaleY).setScrollFactor(0)

    let character = this.add.image(game.config.width / 2, game.config.height, 'character').setOrigin(.5, 1)
    character.setScale(scaleY).setScrollFactor(0)

    let plant = this.add.image(game.config.width, game.config.height, 'plant').setOrigin(1, 1)
    plant.setScale(scaleY).setScrollFactor(0)

    // let blueSprite = this.add.sprite(0, 0, 'blueSprite').setOrigin(0, 0)
    // let greenSprite = this.add.sprite(0, 0, 'greenSprite').setOrigin(0, 0)
    // let orangeSprite = this.add.sprite(0, 0, 'orangeSprite').setOrigin(0, 0)
    // var spriteGroup = this.add.group(config);


    var spriteGroup = this.add.group([
      {key: 'blueSprite', frame: 0, repeat: 2, setXY: {x: 0, y: 0, stepX: 230}, setScale: {x: 2}},
      {key: 'orangeSprite', frame: 0, repeat: 2, setXY: {x: 0, y: 280, stepX: 230}, setScale: {x: 2}},
      {key: 'greenSprite', frame: 0, repeat: 2, setXY: {x: 0, y: 280 + 280, stepX: 230}, setScale: {x: 2}}
    ]);
    // setScale: {x: 2, y: 2, stepY: 0.1}
    // Phaser.Actions.IncX(spriteGroup.getChildren(), 500);
    // Phaser.Actions.IncX(spriteGroup.getChildren(), 500);
    Phaser.Actions.IncX(spriteGroup.getChildren(), (game.config.width / 6) * 1.6);
    Phaser.Actions.IncY(spriteGroup.getChildren(), (game.config.height / 3) * 1);

    let buttonBack = this.add.image(0, 0, 'buttonBack').setOrigin(0)
    buttonBack.setScale(scaleY).setScrollFactor(0)

    // this.add.text(0, 0, "Reveal your blessing inside a ketupat, go slice one to find out!", {
    //   fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
    //   maxLines: 2,
    //   fontSize: '30px',
    //   backgroundColor: '#66ffffff',
    //   color: '#205480',
    // });

    // var graphics = this.add.graphics();
    // graphics.lineStyle(4, 0x00ff00, 1); //#66ffffff
    // graphics.fillStyle(0xff0000, 0.8);
    // graphics.strokeEllipse(400, 300, 200, 128);

    var style = {
      font: 'bold 25pt Arial', fill: '#205480', align: 'center', wordWrap: true, maxLines: 2,
      backgroundColor: '#66ffffff',
      lineSpacing: 2,
      wordWrap: {
        width: (game.config.width / 3) * 1.3
      },
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      }
    };

    var text = this.add.text(game.config.width / 2, 350, "Reveal your blessing inside a ketupat, go slice one to find out!", style).setOrigin(.5);
    text.setLineSpacing(25);

    buttonBack.setInteractive().on('pointerdown', function () {
      this.scene.scene.start('LandingPage');
    });

    // spriteGroup.shiftPosition(0.5, 0.5);
    // Phaser.Actions.ShiftPosition(spriteGroup.getChildren(), x, y, direction, output);
    // Phaser.Actions.SetOrigin(spriteGroup.getChildren(), game.config.width / 2);
    // stepX, stepY, index, direction);

    // Phaser.Actions.IncX(gameObjects, value, step, index, direction);


    // spriteGroup.align(5, 3, 160, 160, Phaser.CENTER);
    // spriteGroup.


    // Phaser.Actions.Shuffle(spriteGroup.getChildren());

    // var spriteGroup = this.add.group(game.config.width / 2, game.config.height / 2).setOrigin(0.5, 0.5);
    // spriteGroup.create(230, 200, 'blueSprite');
    // spriteGroup.create(330, 200, 'greenSprite');
    // spriteGroup.create(430, 200, 'orangeSprite');
    // Phaser.Actions.IncX(spriteGroup.getChildren(), 500);
    // spriteGroup = Phaser.Actions.Shuffle(spriteGroup.children);
    // console.log(" spriteGroup ", spriteGroup);


    // Phaser.Actions.IncX(spriteGroup.getChildren(), 500);


    var scene = this,
      dialog = undefined;

    this.input.on('pointerdown', function (pointer) {
      var x = pointer.x,
        y = pointer.y;

      if (dialog === undefined) {
        dialog = createDialog(scaleY, this, x, y, function (color) {
          this.add.circle(x, y, 20, color);
          this.print.text = 'Add object at (' + x + ',' + y + ')';
          dialog.scaleDownDestroy(100);
          dialog = undefined;
        });
        this.print.text = 'Click (' + x + ',' + y + ')';
      } else if (!dialog.isInTouching(pointer)) {
        dialog.scaleDownDestroy(100);
        dialog = undefined;
      }
    }, this);

    // var emptyTiles = foregroundLayer.filterTiles(function (tile) {
    //   return tile.index === -1;
    // });

    // this.spriteGroup.getChildren.iterate(function (child) {
    //   var randomTile = Phaser.Utils.Array.GetRandom(emptyTiles);

    //   console.log(randomTile);

    //   child.setPosition(randomTile.pixelX, randomTile.pixelY);
    //   child.setOrigin(0, 0);

    //   console.log('shiny star', star.x, star.y);
    // });



    // Phaser.Actions.Shuffle(spriteGroup.getChildren());
    // Phaser.Actions.Shuffle(spriteGroup.getChildren());

    //  Assign their new depth based on their position within the Group

    // var children = spriteGroup.getChildren();

    // for (var i = 0; i < children.length; i++) {
    //   children[i].setDepth(i);
    // }

    // spriteGroup.incXY(200, 200);
    // Phaser.Actions.Shuffle(spriteGroup.getChildren());
    // this.input.on('pointerdown', function (pointer) {
    //   //  Shuffle the children
    //   Phaser.Actions.Shuffle(spriteGroup.getChildren());
    //   //  Assign their new depth based on their position within the Group
    //   var children = spriteGroup.getChildren();
    //   for (var i = 0; i < children.length; i++) {
    //     children[i].setDepth(i);
    //   }

    // }, this);


    // let spriteGroup = this.physics.add.group();
    // let spriteGroup = game.config.add.spriteGroup();

    // spriteGroup.add(blueSprite);
    // spriteGroup.add(greenSprite);
    // spriteGroup.add(orangeSprite);
    // spriteGroup.setXY(0, 0, 20, 20);
    // blueSprite.setScale(scaleY).setScrollFactor(0)

  }
}

let createDialog = function (scaleY, scene, x, y, onClick) {
  var dialog = scene.rexUI.add.dialog({
    x: x,
    y: y,
    title: scene.rexUI.add.label({
      background: scene.rexUI.add.roundRectangle(0, 0, 100, 100, 20, 0xf57f17),
      path: scene.add.image(game.config.width / 2, game.config.height / 2, 'path').setOrigin(0.5, 0.5).setScale(scaleY).setScrollFactor(0),
      flash: scene.add.image(game.config.width / 2, game.config.height / 2, 'flash').setOrigin(0.5, 0.5).setScale(scaleY).setScrollFactor(0),
      blinkBlink: scene.add.image(game.config.width / 2, game.config.height / 2, 'blinkBlink').setOrigin(0.5, 0.5).setScale(scaleY).setScrollFactor(0),
      voucher: scene.add.image(game.config.width / 2, game.config.height / 2, 'voucher').setOrigin(0.5, 0.5).setScale(scaleY).setScrollFactor(0),
      text: scene.add.text(game.config.width / 2, game.config.height / 2, 'What a blessing!', {
        fontSize: '20px'
      }),
      // background: scene.rexUI.add.roundRectangle(0, 0, 100, 40, 20, 0xbc5100),
      // text: scene.add.text(game.config.width / 2, game.config.height / 2, 'Pick a color', {
      //   fontSize: '20px'
      // }),
      // space: {
      //   left: 15,
      //   right: 15,
      //   top: 10,
      //   bottom: 10
      // }
    }),
    // this.load.image("flash", flashImg);
    // this.load.image("blinkBlink", blinkBlinkImg);
    // this.load.image("voucher", voucherImg);
    // path.setScale(scaleY).setScrollFactor(0)
    // plant.setScale(scaleY).setScrollFactor(0)

    // scene.add.image

    // actions: [
    //   scene.rexUI.add.roundRectangle(0, 0, 0, 0, 20, 0xe91e63),
    //   scene.rexUI.add.roundRectangle(0, 0, 0, 0, 20, 0x673ab7),
    //   scene.rexUI.add.roundRectangle(0, 0, 0, 0, 20, 0x2196f3),
    //   scene.rexUI.add.roundRectangle(0, 0, 0, 0, 20, 0x00bcd4),
    //   scene.rexUI.add.roundRectangle(0, 0, 0, 0, 20, 0x4caf50),
    //   scene.rexUI.add.roundRectangle(0, 0, 0, 0, 20, 0xcddc39),
    // ],

    // actionsAlign: 'left',

    // space: {
    //   title: 10,
    //   action: 5,

    //   left: 10,
    //   right: 10,
    //   top: 10,
    //   bottom: 10,
    // }
  })
    .layout()
    .pushIntoBounds()
    //.drawBounds(this.add.graphics(), 0xff0000)
    .popUp(500);

  dialog
    .on('button.click', function (button, groupName, index) {
      onClick(button.fillColor);
    })
    .on('button.over', function (button, groupName, index) {
      button.setStrokeStyle(2, 0xffffff);
    })
    .on('button.out', function (button, groupName, index) {
      button.setStrokeStyle();
    });

  return dialog;
}

const config = {
  type: Phaser.AUTO,
  scale: {
    parent: "phaser-example",
    mode: Phaser.DOM.FIT,
    autoCenter: Phaser.DOM.CENTER_BOTH,
    width: window.innerWidth,
    height: window.innerHeight
  },
  // scene: [LandingPage, PlayPage]
  // scene: [PlayPage]
  scene: [SceneMain]
};

const game = new Phaser.Game(config);

