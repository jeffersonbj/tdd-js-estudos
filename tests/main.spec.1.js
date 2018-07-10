/*
  Reporters/> 
    npm test -- --reporter=nyan
    npm test -- --reporter=dot
    npm test -- --reporter=doc

  Opções:
    npm test -- --bail (irá parar o processamento no primeiro, irá encerrar o fluxo de testes )
*/

//describe: descreve os testes de um certo método, de um arquivo..
describe('Main', function(){
  describe('Method A', function(){
    context('Case 1', function(){
      // é o que vai rodar
      it.skip('should happen blabla', function(){ // com SKIP ele vai pular esse trecho e seguir com o resto dos testes
        //espera que aconteça
        //entra de dados/método soma(2,2)
        //espera retornar RETORNO: (4) => true | (3) => false => broken test
        throw new Error('erro 1');
      });
    });

    context('Case 2', function(){    
    //context.only('Case 2', function(){//com o only executará apenas esse trecho de teste
      it('should happen blabla', function(){
        //espera que aconteça
        //entra de dados/método soma(2,2)
        //espera retornar RETORNO: (4) => true | (3) => false => broken test
        throw new Error('erro 2');
      });

      it('should happen mimimi', function(){
        //espera que aconteça
        //entra de dados/método soma(2,2)
        //espera retornar RETORNO: (4) => true | (3) => false => broken test
      });
    });
  });  

  describe('Method B', function(){

  });
});
