var app = angular.module("myapp", ["firebase"]);
function controllerTareas($scope, $firebase){
    var refTareas= new Firebase('https://espaya.firebaseio.com/tareas');
    $scope.archivadas=[];
    $scope.tareas= $firebase(refTareas);
    /*$scope.tareas=[
        {texto: "mi  primer tarea :)", hecho:true, prioridad: 9, asignador: "yo"},
        {texto: "mi  segunda tarea :)", hecho:false, prioridad: 5, asignador: "yo"}
    ]*/
    $scope.archivar=function(){
        $scope.archivadas=[];
        angular.forEach($scope.tareas,function(i){
            if(i.hecho) $scope.archivadas.push(i);
        });
    }
    $scope.agregarTarea= function(){
        $scope.tareas.$add({texto: $scope.textoNuevaTarea,
                            hecho: false,
                            prioridad: $scope.prioridadNuevaTarea,
                            asignador: $scope.asignadorNuevaTarea
                           });
        $scope.textoNuevaTarea='';
        $scope.prioridadNuevaTarea=0;
        $scope.asignadorNuevaTarea='';
    };
    
    $scope.total=function(){
        return $scope.tareas.$getIndex().length;
    }
    $scope.resueltas=function(){
        var res=0;
        angular.forEach($scope.tareas, function(i){
            res+=i.hecho? 1:0;
        });
        return res;
    };
    $scope.ordenSeleccionado='prioridad';
  $scope.ordenarPor = function(orden) {
    $scope.ordenSeleccionado = orden;
  };
    
    $scope.actualizar= function(){
        
    }
    
    /*$scope.archivadorVacio=function(){
        if($scope.archivadas.length==0) $("#archivadas").fadeOut() ;
    };*/
}