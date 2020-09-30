function clickObject(game,progress,increment,step){
   //Todo trocar por uma caixa de mensagem
    alert(step["msg"]);
    step["obj"].on('pointerdown', function() {
        if(progress<step["goal"]){
             progress +=increment;
            //TODO exibir barra de progress noo lugar de console.log
            console.log("Progress: " +progress );
             if(progress == step["goal"]){
                return progress;
            }
        }
    });
}

function movements(game){
    let cursors = game.input.keyboard.createCursorKeys();
    
    /*go*/
    if(cursors.left.isDown){
      game.player.setVelocityX(-100);
      game.player.anims.play('goLeft', true);
    }else if(cursors.right.isDown){
      game.player.setVelocityX(100);
      game.player.anims.play('goRight', true);
    }else if(cursors.up.isDown){
      game.player.setVelocityY(-100);
      game.player.anims.play('goUp', true);
    }else if(cursors.down.isDown){
      game.player.setVelocityY(100);
      game.player.anims.play('goDown');
    }else{
      game.player.setVelocityX(0);
      game.player.setVelocityY(0);
      game.player.anims.play('stopped');
    }
}