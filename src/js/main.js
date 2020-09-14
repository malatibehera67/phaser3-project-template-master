var game;
window.onload = function () {
    const config = {
        type: Phaser.AUTO,
        dom: {
            createContainer: true
        },
        width: window.innerWidth,
        height: window.innerHeight,
        parent: 'phaser-game',
        // scene: [SceneMain]
        scene: [LandingPage, PlayPage]
    };
    game = new Phaser.Game(config);
}