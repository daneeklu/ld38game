
var gameState = (function () {

    // A graphical group containing meteor indicators. Is this necessary?
    var warnGroup1;

    function create () {

    	warnGroup1 = game.add.group();
    	warnGroup1.x = 400;
    	warnGroup1.y = 300;

        var graphics = game.add.graphics(400, 300);

        var textStyle = {
        	font: '50px Arial',
        	fill: '#ffffff'
        };

        var text1 = game.add.text(0, -100, "testing", textStyle, warnGroup1);

        graphics.beginFill(0x00aa00);
		graphics.drawCircle(0, 0, 100);
		graphics.endFill();

        game.input.onDown.add(mouseDown, this);
    }

    function mouseDown(obj, evt) {
    	var mouse = game.input.mousePointer;

        var newSprite = game.add.sprite(mouse.x, mouse.y , 'coolgame', undefined);
        newSprite.anchor.setTo(0.5, 0.5);
        warnGroup1.rotation += 3.14 / 8;
    }

    return {
        create: create
    };

})();

var game = new Phaser.Game(800, 600, Phaser.AUTO, '');

game.state.add('startup', startupState);
game.state.add('menu', menuState);
game.state.add('game', gameState);

game.state.start('startup');
