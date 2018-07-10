describe('Main', function(){

  //hooks do Mocha

  //roda uma vez antes do bloco
  before(function(){
    console.log('before');
  });

  //roda uma vez depois do bloco
  after(function(){
    console.log('after');
  });

  //roda todas as vezes, antes de cada bloco
  beforeEach(function(){
    console.log('beforeEach');
  });

  //roda todas as vezes, depois de cada bloco
  afterEach(function(){
    console.log('afterEach');
  });

  it('teste 1', function(){

  });

  it('teste 2', function(){

  });

});

/*
  Execução do teste: 
  Main
before
beforeEach
    √ teste 1
afterEach
beforeEach
    √ teste 2
afterEach
after
*/
