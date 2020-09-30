/**
 * TODO modularizar:colocar uma mesma funcao de coletar mareial para todas missoes: DANY +-okay
 * TODO inventario o que o cara já conquistou e o que ele perdeu/
 * TODO criar Mapa
 * TODO  vida: https://www.paulotrentin.com.br/category/programacao/criando-jogos-com-html5-e-phaser
 * TODO criar inimigos
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

function update() {

    const fireMission = new FireMission(this);
    var player = this.player;
    var treeFireMission = this.treeFireMission;
    var campFireMission = this.campfire;

    movements(this);
    
    //TODO verificar async e await
    if (player.body.touching.left && treeFireMission.body.touching){
        fireMission.collectingMaterial(); 
    }
    /*if ((fireMission.progress>=50 && fireMission.progress<100)  &&(player.body.touching.left && treeFireMission.body.touching)){
        fireMission.buildCampfire();
    }*/
   
}
