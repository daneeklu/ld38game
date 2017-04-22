        
var startupState = (function () {

    function preload () {
        game.load.image('coolgame', 'img/coolgame.png');
    }

    function create () {
    	//"game" or "menu"
        game.state.start('menu');
    }

    return {
        preload: preload,
        create: create
    };
})();
