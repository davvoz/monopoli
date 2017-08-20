const expect = require('chai').expect;
const TestMonopoli = require('../src/monopoli');
describe('TestMonopoli', () => {
  
  it('CreatePlayerTest should returns true if parameters are valid', () => {
     const result = TestMonopoli.createPlayer('mario', 30);
     expect(result).to.have.property('name','mario' );
     expect(result).to.have.property('age', 30);
     expect(result).to.have.property('asset', 20000);
     expect(result).to.have.property('position', 0);
     expect(result).to.have.property('state', 'in gioco'); 
  });

  it('CreatePlayerTest should returns true if a parameter(name) is not valid', () => {
    const result = TestMonopoli.createPlayer( 30 , 30);
    expect(result).to.have.property('message','Parameters are not valid' );
 });

 it('CreatePlayerTest should returns true if a parameter(eta) is not valid', () => {
  const result = TestMonopoli.createPlayer( 'mario' , '30');
  expect(result).to.have.property('message','Parameters are not valid' );
});

it('CreatePlayerTest should returns true if all parameters are not valid', () => {
  const result = TestMonopoli.createPlayer( 30 , '30');
  expect(result).to.have.property('message','Parameters are not valid' );
});

it('ControlAssetTest should returns true if result is "in bancarotta"', () => { 
  const result = TestMonopoli.budgetControl ( {name:'mario', age:30 , asset:(-300) , state:'in gioco',position:0} );
  expect(result).to.have.property('message','in bancarotta' );
});

it('ControlAssetTest should returns true if result is "in gioco"', () => { 
  const result = TestMonopoli.budgetControl ( {name:'mario', age:30 , asset:300 , state:'in gioco',position:0} );
  expect(result).to.have.property('message','in gioco' );
});

it('ControlAssetTest should returns true if parameters are wrong', () => { 
  const result = TestMonopoli.budgetControl ( {name:30, age:30 , asset:(-300) , state:'in gioco',position:0} );
  expect(result).to.have.property('message','Parameters are not valid' );
});

it('ControlTipoBoxTest should returns true if result is a string', () => { 
  const result = TestMonopoli.tipoBoxControl (TestMonopoli.dubleRollControl().value);
  expect(result).to.be.a('string');
 // console.log( result);
});

it('DubleRollTest should returns true if result is an object', () => { 
  const result = TestMonopoli.dubleRollControl();
  expect(result).to.be.a('object');
  //console.log( result);
});

it('DealControlTest should returns true if tipo equal aquistabile', () => { 
  const result = TestMonopoli.dealControl(0);
  expect(result).to.have.property('message', 'true' );
  console.log( result);
});
});