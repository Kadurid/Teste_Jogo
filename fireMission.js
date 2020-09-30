//TODO problema na execução:funções não esperam o término das outras. ver async e wait 

function FireMission(game){
    this.game = game;
    this.tree = game.treeFireMission; 
    this.campfire = game.physics.add.sprite(config.width / 2, config.height / 2, 'elements').setImmovable().setInteractive();
    this.goal = 100;
    this.incrementProgress = 5;
    this.progress = 0;
    this.steps = {
        "collectingMaterial":{"goal":this.goal/2,"msg":"UMMMMMMMMMM....essa árvore parece ótima, vamos começar por aqui, clique sobre ela para coletar os galhos e as folhas mais secas","obj":this.tree},
        "buildCampfire":{"goal":this.goal,"msg":"clique nos galhos. colocar explicacao",
        "obj":this.campfire},
    };
    
    this.campfire.setActive(false).setVisible(false);

    collectingMaterial(this);
    buildCampfire(this);
    

}

function collectingMaterial(mission){
    clickObject(mission.game,mission.progress,mission.incrementProgress,mission.steps["collectingMaterial"]);
}

function buildCampfire(mission){
        //TODO mudar para tercera galho,colcar vários
        //TDO fazer galhoo aparecer suavemete 

        this.campfire.setActive(true).setVisible(true);
        mission.game.physics.add.collider(mission.campfire, mission.game.player);

        //TODO corrigir Movimentos
        mission.game.player.body.velocity.x += 3000;
        clickObject(mission.game,mission.progress,mission.incrementProgress,mission.steps["buildCampfire"]);
        if(mission.progress == 100)mission.campfire.setTexture('elements',15);
}