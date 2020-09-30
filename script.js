/**
 * modularizar:colocar uma mesma funcao de coletar mareial para todas missoes
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

function preload() {
    //fundos
    this.load.image('backgroundmap','assets/Mapas/MapaGrama.png');
    
    //elementos
    this.load.image('tree','assets/tree01.png');
    this.load.spritesheet('elements',"assets/itens/resources_basic.png",{ frameWidth:24, frameHeight:24 });

    //personagem
    //TODO arrumar tamanho da imagem
    this.load.spritesheet('player','assets/personagem/personagem.png', { frameWidth:46, frameHeight:48 })
    
}

function create() {
    /*add images */
     /*fundo*/
    this.add.image(250,200,'backgroundmap').setScale(2.0,2.0);
    var player = this.physics.add.sprite(config.width / 2, config.height / 2, 'player');

    player.setCollideWorldBounds(true); /*colisões*/
    
    /*Movimentos do personagem*/
    //TODO dany aterar sprite
    this.anims.create({
      key: 'stopped',
      frames: [{key:"player",frame:1}],
      framerate:20,
    });
    /*go*/
    this.anims.create({
      key:'goLeft',
      frames: this.anims.generateFrameNumbers('player',{start:3,end:5}),
      framerate:10,
      repeat: -1,
    });

    this.anims.create({
      key:'goRight',
      frames: this.anims.generateFrameNumbers('player',{start:6,end:8}),
      framerate:10,
      repeat: -1,
    });

    this.anims.create({
      key:'goUp',
      frames: this.anims.generateFrameNumbers('player',{start:9,end:11}),
      framerate:10,
      repeat: -1,
    });

    this.anims.create({
      key:'goDown',
      frames: this.anims.generateFrameNumbers('player',{start:0,end:2}),
      framerate:10,
      repeat: 1,
    });
    /*others objetos*/
    //TODO para repetir o objteo,veja: https://phaser.io/tutorials/making-your-first-phaser-3-game-portuguese/part8
    var tree = this.physics.add.staticGroup();
    tree.create(100,100,'tree');

    //essa árvore tem propriedades fisicas,pois pertence a missão do fogo
    var treeFireMission = this.physics.add.sprite(100, 200, 'tree').setImmovable();
    treeFireMission.setInteractive();
    this.treeFireMission = treeFireMission;

    /*colisões*/
    //TODO ver um jeito de adicionar várias colisões de ma só vez
    this.physics.add.collider(tree, player);
    this.physics.add.collider(treeFireMission, player);
    this.player = player;
    
}

function update() {
    let cursors = this.input.keyboard.createCursorKeys();
    var player = this.player;
    var treeFireMission = this.treeFireMission;

    /*go*/
    if(cursors.left.isDown){
      player.setVelocityX(-100);
      player.anims.play('goLeft', true);
    }else if(cursors.right.isDown){
      player.setVelocityX(100);
      player.anims.play('goRight', true);
    }else if(cursors.up.isDown){
      player.setVelocityY(-100);
      player.anims.play('goUp', true);
    }else if(cursors.down.isDown){
      player.setVelocityY(100);
      player.anims.play('goDown');
    }else{
      player.setVelocityX(0);
      player.setVelocityY(0);
      player.anims.play('stopped');
    }

    if (player.body.touching.left && treeFireMission.body.touching){
        FireMission(this);
    }
}

