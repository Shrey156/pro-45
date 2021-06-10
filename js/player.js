class Player {
    constructor(){
this.index = null;
this.name = null;
this.distance=0;
    }
    getPlayerCount(){
      var getPlayerCountRef = database.ref('playerCount');
      getPlayerCountRef.on("value",(data)=>{
          playerCount = data.val();
      })
    }

    updateCount(data){
        database.ref('/').update({
            playerCount:data
        })
    }

    updatePlayerName(){
       var playerIndex = "players/player"+this.index;
       database.ref(playerIndex).set({
          name:this.name ,
          distance:this.distance
       })
    }
}