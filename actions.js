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