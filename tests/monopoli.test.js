const expect = require('chai').expect;
const chai = require('chai');
const assertArrays = require('chai-arrays');
chai.use(assertArrays);
const TestMonopoli = require('../src/monopoli');



describe('TestMonopoli', () => {

it('roundTest should returns true if all rounds dont contain an error', () => { 
  
  const initialPosition = 0;
  const mario = { name : "Mario" , index : 0 , position : initialPosition , balance : 1000,lastRoll : 0 ,predentCell:0};
  const anna =  { name : "Anna" , index : 1 , position : initialPosition, balance : 1000, lastRoll : 0 ,predentCell:0};
  const carlo =  { name : "Carlo" , index : 2 , position : initialPosition, balance : 1000,lastRoll : 0 ,predentCell:0};
  
  let players = TestMonopoli.randomlyStart([mario,anna,carlo]);

  let rounds = [] ;
  console.log('PLAYERS');
  console.log(players);
  console.log('GAME');
  
  for( let i = 0 ; i < 40 ; i++){// simula 20 turni
    for( let j = 0 ; j <= players.length ; j++){
      if( i % players.length === j ){
        rounds.push(TestMonopoli.round(players[j],0));
      }
    }  
 
  console.log(rounds[i]);

}
  
  for(let i = 0; i < rounds.length ; i++){
    expect(rounds[i]).to.not.have.property( 'error', 'Parameter not valid' ); ;
  }
  
});

it('doubleRollTest should returns true if result is an object', () => { 
  const result = TestMonopoli.doubleRoll();
  expect(result).to.be.a('object');
  
});

it('RandomlyStart should returns true if the array^s length is 5', () => { 
  console.log("first relase");
  const poolPLayers = [{name : "Mario" , position : 0,index:1,balance:0},{name : "Aldo" , position : 0,index:0,balance:0},{name : "Anna" , position : 0,index:2,balance:0},{name : "Clara" , position : 0,index:3,balance:0},{name : "Ugo" , position : 0,index:4,balance:0}];
  const result = TestMonopoli.randomlyStart(poolPLayers);
  
  expect(result).to.be.ofSize(5);
  
  
});

it('RandomlyStartTest should returns true if the error is "Parameter not valid"', () => { 
  let poolPLayers = 
  [
    {name : 6 , position : 0,index:1},
    {name : 3, position : 0,index:0},
    {name : "Anna" , position : 0,index:2},
    {name : "Clara" , position : 0,index:3},
    {name : "Ugo" , position : 0,index:4}];
  const result = TestMonopoli.randomlyStart(poolPLayers);
  expect(result).to.have.property( 'error', 'Parameter not valid' );
 
  
});

it('RandomlyStartTest should returns true if the error is "Parameter not valid"', () => { 
  const poolPLayers = [];
  const result = TestMonopoli.randomlyStart(poolPLayers);
  expect(result).to.have.property( 'error', 'Parameter not valid' );
  
});

it('RandomlyStartTest should returns true if the error is "Parameter not valid"', () => { 
  const poolPLayers = 'Mario';
  const result = TestMonopoli.randomlyStart(poolPLayers);
  expect(result).to.have.property( 'error', 'Parameter not valid' );
});

it('RandomlyStartTest should returns true if the error is "Parameter not valid"', () => { 
  const poolPLayers = 4;
  const result = TestMonopoli.randomlyStart(poolPLayers);
  expect(result).to.have.property( 'error', 'Parameter not valid' ); 
});

it('positioningTest should returns true if the result is 7', () => { 
  const initialPosition = 4;
  const result = TestMonopoli.positioning( initialPosition , 3 );
  expect(result).equal(7);
});

it('positioningTest should returns true if the error is "Parameter not valid"', () => { 
  const initialPosition = "xxxx";
  const result = TestMonopoli.positioning( initialPosition , 3 );
  expect(result). to.have.property( 'error', 'Parameter not valid' );
});

it('positioningTest should returns true if the error is "Parameter not valid"', () => { 
  const initialPosition = 2;
  const result = TestMonopoli.positioning( initialPosition , {});
  expect(result).to.have.property( 'error', 'Parameter not valid' );
  
});

it('positioningTest should returns true if the result is a number', () => { 
  const initialPosition = 0;
  const result = TestMonopoli.positioning( initialPosition , TestMonopoli.doubleRoll().value );
  expect(result).to.be.a('number');
  
});

it('roundTest should returns true if error is Parameter is not valid', () => { 
  
  const initialPosition = 0;
  const mario = { name : "Mario" , index : 0 , position : initialPosition , balance : 0};
  const anna =  { name : "Anna" , index : 1 , position : initialPosition, balance : 0};
  const carlo =  { name : "Carlo" , index : 2 , position : initialPosition, balance : 0};
  const ciro =  { name : "Ciro" , index : 3 , position : initialPosition, balance : 0};
  const paolo =  { name : "paolo" , index : 4 , position : initialPosition, balance : 0};
  const cidddro =  { name : "cidddro" , index : 5 , position : initialPosition, balance : 0};
  const edde =  { name : "edde" , index : 6 , position : initialPosition, balance : 0};
  
  const players = TestMonopoli.randomlyStart([mario,anna,carlo,ciro,paolo,cidddro,edde]);//un giocatore di tropoo

    expect(players).to.have.property( 'error', 'Parameter not valid' );
  
});

it('roundTest should returns true if all rounds dont contain an error', () => { 
  
  const initialPosition = 0;
  const mario = { name : "Mario" , index : 0 , position : initialPosition , balance : 1000,lastRoll : 0 ,predentCell:0};
  const anna =  { name : "Anna" , index : 1 , position : initialPosition, balance : 1000, lastRoll : 0 ,predentCell:0};
  const carlo =  { name : "Carlo" , index : 2 , position : initialPosition, balance : 1000,lastRoll : 0 ,predentCell:0};
  
  let players = TestMonopoli.randomlyStart([mario,anna,carlo]);

  let rounds = [] ;
  // console.log('PLAYERS');
  // console.log(players);
  // console.log('GAME');
  
  for( let i = 0 ; i < 50 ; i++){// simula 20 turni
    for( let j = 0 ; j <= players.length ; j++){
      if( i % players.length === j ){
        rounds.push(TestMonopoli.round(players[j],0));
      }
    }  
 
 // console.log(rounds[i]);

}
  
  for(let i = 0; i < rounds.length ; i++){
    expect(rounds[i]).to.not.have.property( 'error', 'Parameter not valid' ); ;
  }
  
});

//second relase

it('isGoTest should returns true if a player pass or lands from "GO" cell', () => { 
  console.log('second relase')
    const mario = { name : "Mario" , index : 0 , position : 35 , balance:0};
    const result = TestMonopoli.isGo(35 , 1);
    expect(result).equal( true );
  
});

it('isGoTest should returns true if a player does not pass from "GO" cell', () => { 
  const mario = { name : "Mario" , index : 0 , position : 35 , balance:0};
  const result = TestMonopoli.isGo(20 ,30);
  expect(result).equal( false );

});

it('isIncomeTaxTest should returns true if a player lands to "Income Tax" cell', () => { 
  
  const result = TestMonopoli.isIncomeTax({ name : "Mario" , index : 0 , position : 4 , balance : 1300});
  expect(result).to.have.property( 'message', true ); 

});

it('isIncomeTaxTest should returns true if a player lands to "Income Tax" cell and pay 200', () => { 
  
  const result = TestMonopoli.isIncomeTax({ name : "Mario" , index : 0 , position : 4 , balance : 1300});
  expect(result).to.have.property( 'content', 1100 ); 
  expect(result).to.have.property( 'message', true );
});

it('isIncomeTaxTest should returns true if a player lands to "Income Tax" cell and pay 20%', () => { 
  
  const result = TestMonopoli.isIncomeTax({ name : "Mario" , index : 0 , position : 4 , balance : 500});
  expect(result).to.have.property( 'content', 400 ); 
  expect(result).to.have.property( 'message', true );
});

it('isIncomeTaxTest should returns true if a player does not lands to "Income Tax" cell', () => { 
  
  const result = TestMonopoli.isIncomeTax({ name : "Mario" , index : 0 , position : 5 , balance : 1300});
  expect(result).to.have.property( 'message', false ); 
  expect(result).to.have.property( 'content', 1300 ); 
});

it('isGoToJailTest should returns true if a player lands to "GoToJail" cell', () => { 
  
  const result = TestMonopoli.isGoToJail({ name : "Mario" , index : 0 , position : 30 , balance : 1300});
  expect(result).to.have.property( 'message', true ); 
  expect(result).to.have.property( 'content', 10 );  
 
});

//optional
it('isEqualDiceTest should returns true if a player rolls equal dice^s value', () => { 
  console.log("optional");
  const result = TestMonopoli.isEqualDice(1,1);
  expect(result).equal(true); 
    
 
});

it('isEqualDiceTest should returns true if a player rolls not equal dice^s value', () => { 
  
  const result = TestMonopoli.isEqualDice(1,3);
  expect(result).equal(false);    
 
});

it('isEqualDiceTest should returns true if returns an error', () => { 
  const result = TestMonopoli.isEqualDice('a',3);
  expect(result).to.have.property( 'error', 'Parameter not valid' );     
});

it('updatePlayerTest should returns true if result is an object', () => { 
  const result = TestMonopoli.updatePlayer(7,{ name : "Mario" , index : 0 , position : 7 , balance : 1300});
  expect(result).to.be.a('object');  
 
});
it('updatePlayerTest should returns true if returns an error', () => { 
  const result = TestMonopoli.updatePlayer("a",{ name : "Mario" , index : 0 , position : 7 , balance : 1300});
  expect(result).to.have.property( 'error', 'Parameter not valid' );  
 
});

it('isValidPLayerTest should returns true if player is correct', () => { 
  const result = TestMonopoli.isValidPLayer({ name : "Mario" , index : 0 , position : 7 , balance : 1300});
  expect(result).equal(true);  
 
});

})

