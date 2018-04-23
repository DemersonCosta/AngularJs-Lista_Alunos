
angular.module("meuModulo").
controller("indexCTL",function ($scope){//criando o crontroller
    $scope.titulo = " Desenvolvendo com Angular JS";//criando uma variavel e atribuindo o valor 
    $scope.Alunos = [//cria um array de alunos no garço $scope
        {nome: "Camila",email:"Camila@hotmail.com",nota1:20, nota2:30, nota3:50},
        {nome: "Pedro",email:"Pedro@hotmail.com",nota1:30, nota2:10, nota3:90},
        {nome: "Kênia",email:"Kenia@hotmail.com",nota1:70, nota2:70, nota3:70},
        {nome: "João",email:"João@hotmail.com",nota1:80, nota2:90, nota3:50},
        {nome: "Victor",email:"Victor@hotmail.com",nota1:40, nota2:50, nota3:60}
        
        ];

        //função que recebe funçao media apliacansse ela dentro do escopo
        var int = function(){
            $scope.Alunos.forEach(function(aluno){
                aluno.media = media(aluno);
            }); 
            limparform();
        
        };
        //funcção para contar media             
        var media = function(aluno){//criar uma variavel com uma função dentro chamando o objeto aluno
            var media = (parseFloat(aluno.nota1) + parseFloat(aluno.nota2) + parseFloat(aluno.nota3))/3;
            return media.toFixed(2);//tofixed pra não ficar muitas casas decimais
        };

       /* var cont = 0
        $scope.media = function(aluno){//criar uma variavel com uma função dentro chamando o objeto aluno
            console.log(cont++);
            var media = (aluno.nota1 + aluno.nota2 + aluno.nota2)/3;
            return media.toFixed(2);//tofixed pra não ficar muitas casas decimais
        }*/

        $scope.abreAddAluno = function(aluno){
            $('#modal1').modal('open');
            limparform();
            $scope.editando = false;
        };
        $scope.addAluno = function(aluno){
            aluno.media = media(aluno);
            $scope.Alunos.push(aluno);
            $('#modal1').modal('close');
            delete $scope.aluno;
        };
       
        $scope.editando = false;
        var alunoEditar;
        $scope.editarAluno = function(aluno){
            $('#modal1').modal('open');
            $scope.editando = true;
            angular.copy(aluno, $scope.aluno);
            alunoEditar = aluno;
        };
        

        $scope.SalvarAluno = function(aluno){
            alunoEditar.nome = aluno.nome;
            alunoEditar.email = aluno.email;
            alunoEditar.nota1 = aluno.nota1;
            alunoEditar.nota2 = aluno.nota2;
            alunoEditar.nota3 = aluno.nota3;
            alunoEditar.media = media(aluno);
            $('#modal1').modal('close');
        };

       $scope.deletarAluno = function(aluno){

           for(var index in $scope.Alunos){
               var aux = $scope.Alunos[index];
               if(aluno === aux){
                $scope.Alunos.splice(index,1);
               }
           }
        };

       var limparform = function(){
            $scope.aluno = {nome:" ",email:" ",nota1:" ",nota2:" ",nota3:" "};
        };

    int();

});