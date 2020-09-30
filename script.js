/**
 * modularizar:colocar uma mesma funcao de coletar mareial para todas missoes: DANY okay
 * criar Mapa
 * criar inimigos e vida
 * */

const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 400,
    backgroundColor: '#fff',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);
//const fireMission = new FireMission(game);

function update() {
    var player = this.player;
    var treeFireMission = this.treeFireMission;

    movements(this);

    if (player.body.touching.left && treeFireMission.body.touching){
        FireMission(this);
    }
}

