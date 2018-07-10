describe('Main', function () {
  let arr;

  //hooks do Mocha

  //roda uma vez antes do bloco
  before(function () {
    //Exemplos de aplicação para esse hook:
    //*Iniciar uma conexão no banco
    //*criar um conjunto de dados
  });

  //roda uma vez depois do bloco
  after(function () {
    //* fechar uma conexão de dados
    //* apagar esse conjunto de dados
  });

  //roda todas as vezes, antes de cada bloco
  beforeEach(function () {
    arr = [1, 2, 3];
  });

  //roda todas as vezes, depois de cada bloco
  afterEach(function () {

  });

  it('should have a size of 4 when push another value to the array', function () {
    arr.push(4);
    console.log(arr.length); //4
  });

  it('should have a value of 2 when pop a value from the array', function () {
    arr.pop();
    console.log(arr.length);
  });

  it('should remove value 3 when use pop in the array', function () {
    console.log(arr);
    console.log(arr.pop());
    console.log(arr.pop() === 3);
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
