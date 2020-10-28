function fireMission(player,tree){
    //TODO exibir mensagem na tela falando que o user achou uma árvore perfeita e instruir o usuário a clicar na tela até que seja coletado lenha
    var progressFireMission = 0;
    alert("Clique a árvore repetidas vezes para obter galhos e folhas secas para fazer fogo");
    tree.on('pointerdown', function() {
        if(progressFireMission<100){
             progressFireMission +=10;
            //TODO exibir barra de progress noo lugar de console.log
            console.log("Progresso em obter lenha:"+progressFireMission);
        }
    });
}

//module.exports = {fireMission};