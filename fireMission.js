function FireMission(game){
    this.game = game;
    this.tree = game.treeFireMission; 
    this.goal = 100;
    this.incrementProgress = 5;
    this.progress = 0;
    this.steps = {
        "collectingMaterial":{"goal":this.goal/2,"msg":"UMMMMMMMMMM....essa árvore parece ótima, vamos começar por aqui, clique sobre ela para coletar os galhos e as folhas mais secas","obj":this.tree},
        "buildCampfire":{"goal":this.goal,"msg":"clique nos galhos. colocar explicacao"},
    };

    this.progress = collectingMaterial(game,progress,incrementProgress,steps["collectingMaterial"]).then((result) => this.progress);
    //this.progress = 90;
    console.log(this.progress);
   /* function buildCampfire(){
        //TODO mudar para tercera galho,colcar vários
        //TDO fazer galhoo aparecer suavemete 
        var campfire = game.physics.add.sprite(config.width / 2, config.height / 2, 'elements').setImmovable().setInteractive();

        game.physics.add.collider(campfire, game.player);
        this.steps["buildCampfire"]["obj"] = campfire;
        //TODO corrigir Movimentos
        game.player.body.velocity.x += 3000;
        alert(this.steps["buildCampfire"][1]);
    
        //TODO usar a funcao de cima
        campfire.on('pointerdown', function() {
            if(progress<steps["buildCampfire"][0]){
                progress +=incrementProgress;
                //TODO exibir barra de progress noo lugar de console.log
                console.log("fogueira" +" "+progress );
                if(progress == steps["buildCampfire"][0]){
                    //TODO colocaf isso na outra funcao
                    alert("sucess");
                    //TODO criar um sprite que tenha tudo da fogueira (colocar varias fases)
                    campfire.setTexture('elements',15);
                }
            }
        });
   }*/

}

//module.exports = FireMission;