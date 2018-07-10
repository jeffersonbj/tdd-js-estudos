describe('Main', function(){

  //hooks do Mocha

  //roda uma vez antes do bloco
  before(function(){
    
  });

  //roda uma vez depois do bloco
  after(function(){

  });

  //roda todas as vezes, antes de cada bloco
  beforeEach(function(){

  });

  //roda todas as vezes, depois de cada bloco
  afterEach(function(){

  });

  it('should have a size of 4 when push another value to the array', function(){
    let arr = [1,2,3];
    arr.push(4);
    console.log(arr.length); //4
  });

  it('should have a value of 2 when pop a value from the array', function(){
    let arr = [1,2,3];
    arr.pop();
    console.log(arr.length);
  });

  it('should remove value 3 when use pop in the array', function(){
    let arr = [1,2,3];    
    console.log(arr.pop() === true);
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
