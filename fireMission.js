//TODO problema na execução:funções não esperam o término das outras. ver async e wait 

class FireMission{
    constructor(game){
        this.game = game;
        this.tree = game.treeFireMission; 
        this.campfire = game.campfire;
        this.goal = 100;
        this.incrementProgress = 5;
        this.progress = 0;
        this.steps = {
            "collectingMaterial":{"goal":this.goal/2,"msg":"UMMMMMMMMMM....essa árvore parece ótima, vamos começar por aqui, clique sobre ela para coletar os galhos e as folhas mais secas","obj":this.tree},
            "buildCampfire":{"goal":this.goal,"msg":"clique nos galhos. colocar explicacao",
            "obj":this.campfire},
        };
    }

    collectingMaterial(){
        this.progress = clickObject(this.game,this.progress,this.incrementProgress,this.steps["collectingMaterial"]);
        if(this.progress == 50)this.buildCampfire();
    }

    buildCampfire(){
            //TODO mudar para tercera galho,colcar vários
            //TDO fazer galhoo aparecer suavemete 

            this.campfire.setActive(true).setVisible(true);
            this.game.physics.add.collider(this.campfire, this.game.player);

            //TODO corrigir Movimentos
            this.game.player.body.velocity.x += 3000;
            this.progress = clickObject(this.game,this.progress,this.incrementProgress,this.steps["buildCampfire"]);
            if(this.progress == 100)this.campfire.setTexture('elements',15);
    }
}


