class BrownBear extends Phaser.Physics.Arcade.Sprite {
  
  constructor(scene,x,y,texture,frame){

    super(scene, x,y, texture, frame);

    this.anims.play("brown-run-down");
  }

  preUpdate(){
    super.preUpdate();
    
    const speed = 50;
    this.direction = 1;
    
    switch(this.direction){
      case (this.direction == 1):
          this.setVelocity(0, -speed);
          this.anims.play("brown-run-up",true);
          break;
      case(this.direction == 2):
          this.setVelocity(0,speed);
          this.anims.play("brown-run-down",true);
          break;
      case(this.direction == 3):
          this.setVelocity(-speed,0);
          this.anims.play("brown-run-left",true);
          break;
      case(this.direction == 4):
          this.setVelocity(speed,0);
          this.anims.play("brown-run-right",true);
          break;
    }


  }
}