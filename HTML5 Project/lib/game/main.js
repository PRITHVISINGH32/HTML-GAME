ig.module(
    'game.main'
)
.requires(
    'impact.game',
    'game.entities.player',
    'game.entities.zombie',
    'game.levels.dorm1'
)
.defines(function(){
    MyGame = ig.Game.extend({
        gravity: 300,

        init: function() {
            ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
            ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
            ig.input.bind(ig.KEY.X, 'jump');
            ig.input.bind(ig.KEY.C, 'shoot');
            ig.input.bind(ig.KEY.TAB, 'switch');
            this.loadLevel(LevelDorm1);
        },
        update: function() { this.parent(); },
        draw: function() { this.parent(); }
    });
    ig.main('#canvas', MyGame, 60, 320, 240, 2);
});
