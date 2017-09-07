  //first relase
module.exports = {
  
  doubleRoll(){
       let dado1 = Math.floor((Math.random() * 6) + 1) ;
       let dado2 = Math.floor((Math.random() * 6) + 1) ;
        if( dado1 === dado2 ){
            return { value : dado1 + dado2 , message:"Doppio turno" , content : { first : dado1 , second : dado2 } }
        }else{
            return { value : dado1 + dado2 , message:"Fermati" , content : { first : dado1 , second : dado2 } }
        }
  },
  isValidPLayer(player){
    if(typeof player.index === 'number' &&  typeof player.position === 'number' &&  typeof player.name === 'string' && typeof player.balance === 'number'  ){
      return true
    }else{
        return false
    }
  },


  randomlyStart( players ){
     if(typeof players === 'object' && players.length >= 2 && players.length <= 6){//+ di 2 players e - di 7
         let wrong = false;
        for(let i = 0; i < players.length;i++){
            if( typeof players[i].index === 'number' &&  typeof players[i].position === 'number' &&  typeof players[i].name === 'string' && typeof players[i].balance === 'number' ){
                wrong = false;
            }else{
                wrong = true;
                return { error : "Parameter not valid" }
            }
        }
        if(!wrong){
            for ( let i = players.length - 1 ; i > 0 ; i-- ) {
                    let j = Math.floor(Math.random() * (i + 1));
                    let temp = players[i];
                    players[i] = players[j];
                    players[j] = temp;
            };
            for( let i = 0 ; i < players.length ; i++ ){
                players[i].index = i ;
            }
                return players
            }
        }else{
             return { error : "Parameter not valid" }
        }
},
  positioning( initialPosition , roll ){
      if( typeof initialPosition === 'number' && typeof roll === 'number' ){
          return initialPosition + roll >= 40 ? initialPosition + roll - 40  : initialPosition + roll     
    }else{
        return { error : 'Parameter not valid' }
    }
  },
  round(player,consecutive){
    if(typeof player.index === 'number' &&  typeof player.position === 'number' &&  typeof player.name === 'string' && typeof player.balance === 'number'  && typeof consecutive === 'number' && consecutive < 3 && consecutive >= 0){
        player.predentCell = player.position;
        let rollObject = this.doubleRoll();
        player.lastRoll = rollObject.value;
        let position =  this.positioning( player.position , player.lastRoll ) ;
        if(this.isEqualDice(rollObject.content.first,rollObject.content.second)){
        switch(consecutive){
            case 0: 
                this.updatePlayer(position,player);
                this.round(player,1)
            break;
            case 1:
                this.updatePlayer(position,player);
                this.round(player,2)
            break;
            case 2:
                this.updatePlayer(30,player);
            break;
        }
        }else{
            this.updatePlayer(position,player);
        }
        

        return player
    }else{
        return  { error : player.error }
    }
    },

    //second relase

    isGo( posStart , posEnd ){
        if( typeof posStart === 'number' && typeof posEnd === 'number'  ) {
             return posStart > posEnd ? true : false
        }else{
            return { error : 'Parameter not valid' }
        }
    },
    isIncomeTax(player){
        if(typeof player.index === 'number' &&  typeof player.position === 'number' &&  typeof player.name === 'string' && typeof player.balance === 'number' ){
            if( player.position === 4 ){
                 player.balance =  (player.balance * 0.2 ) > 200 ? player.balance - 200 : player.balance-player.balance * 0.2 ;
                 player.incomeTax = true
                 return { message: true , content:player.balance}
             }else{
                 player.incomeTax = false
                 return { message: false , content:player.balance}
            }
        }else{
            return { error : 'Parameter not valid' }
        }
    },
    isGoToJail(player){
        if(typeof player.index === 'number' &&  typeof player.position === 'number' &&  typeof player.name === 'string' && typeof player.balance === 'number' ){
            if( player.position === 30 ){
                player.position = 10;
                player.jail = true
                 return { message: true , content :  player.position} 
            }else{
                player.jail = false
                return { message: false , content :  player.position} 
            }
        }else{
            return { error : 'Parameter not valid' }
        }
    },
    //Optional
    isEqualDice(d1,d2){
        if(typeof d1 === 'number' && typeof d2 === 'number'){
        return d1 === d2 ? true : false ;}
        else{
            return { error:'Parameter not valid'}
        }
    },
    updatePlayer( position , player){
       if(typeof position === 'number' && typeof player.index === 'number' &&  typeof player.position === 'number' &&  typeof player.name === 'string' && typeof player.balance === 'number' ){
        player.balance = this.isGo( player.position , position) ? player.balance + 200 : player.balance;
        player.position = position;
        this.isIncomeTax(player);
        this.isGoToJail(player);
        return player}
        else{
            return { error:'Parameter not valid'}
        }

    },
    

  

}


  
