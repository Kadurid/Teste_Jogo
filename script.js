function preload() {
    this.load.image('backgroundmap','assets/MapaGrama.png');
    this.load.image('tree','assets/tree01.png');

  //=========================
    //pré carregamento
    this.load.image('player', 'assets/frente.png');
    
}

function create() {
     /*fundo*/
    this.add.image(250,200,'backgroundmap').setScale(2.0,2.0);

  //=============================================
    /*controles*/
    this.w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
    this.a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
    this.s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
    this.d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
   
    /*personagem*/
    const player = this.player = this.physics.add.image(config.width / 2, config.height / 2, 'player').setScale(1.0, 1.0);
    this.player.setCollideWorldBounds(true);
    /*objetos*/
    var tree = this.physics.add.staticGroup();
    tree.create(100,100,'tree');
    /*colisao*/
    this.physics.add.collider(tree, player)

    
}

function update() {
    let cursors = this.input.keyboard.createCursorKeys();
    if ((cursors.left.isDown || this.a.isDown) || (cursors.right.isDown || this.d.isDown)) this.player.setVelocityX(cursors.left.isDown || this.a.isDown ? -160 : 160);
    else this.player.setVelocityX(0);
    if ((cursors.up.isDown || this.w.isDown) || (cursors.down.isDown || this.s.isDown)) this.player.setVelocityY(cursors.up.isDown || this.w.isDown ? -160 : 160);
    else this.player.setVelocityY(0);
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