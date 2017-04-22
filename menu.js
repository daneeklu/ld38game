
var menuState = (function () {

    function create () {

        sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'coolgame');
        sprite.anchor.setTo(0.5, 0.5);
        game.input.onDown.add(mouseDown, this);
    }

    function mouseDown(obj, evt) {
        game.state.start('game');
    }

    return {
        create: create
    };
})();
