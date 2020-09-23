function preload() {
    //fundos
    this.load.image('backgroundmap','assets/Mapas/MapaGrama.png');
    
    //elementos
    this.load.image('tree','assets/tree01.png');

    //personagem
    //TODO arrumar tamanho da imagem
    this.load.spritesheet('player','assets/personagem/personagem.png', { frameWidth:46, frameHeight:48 })
    
}

function create() {
     /*fundo*/
    this.add.image(250,200,'backgroundmap').setScale(2.0,2.0);
   
    /*personagem*/
    var player = this.physics.add.sprite(config.width / 2, config.height / 2, 'player');
    /*colisões*/
    player.setCollideWorldBounds(true);
    
    /*Movimentos do personagem*/
    this.anims.create({
      key: 'stopped',
      frames: [{key:"player",frame:5}],
      framerate:20,
    });
    /*go*/
    this.anims.create({
      key:'goLeft',
      frames: this.anims.generateFrameNumbers('player',{start:3,end:4}),
      framerate:10,
      repeat: -1,
    });

    this.anims.create({
      key:'goRight',
      frames: this.anims.generateFrameNumbers('player',{start:1,end:2}),
      framerate:10,
      repeat: -1,
    });

    this.anims.create({
      key:'goUp',
      frames: this.anims.generateFrameNumbers('player',{start:0,end:0}),
      framerate:10,
      repeat: -1,
    });

    this.anims.create({
      key:'goDown',
      frames: this.anims.generateFrameNumbers('player',{start:5,end:5}),
      framerate:10,
      repeat: 1,
    });
      
    /*others objetos*/
    var tree = this.physics.add.staticGroup();
    tree.create(100,100,'tree');
    /*colisões*/
    this.physics.add.collider(tree, player)
    this.player = player;
    
}

function update() {
    let cursors = this.input.keyboard.createCursorKeys();
    var player = this.player;

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
}

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
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);