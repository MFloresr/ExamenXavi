var app = angular.module('appLearn',[]);
app.controller('ProductesController',function($scope,ProducteService) {
        ProducteService.fetch()
        .success(function(productes){
            $scope.productes = productes;
        })
        .error(function(e){
            console.log(e);
        });

        $scope.afegirProducte = function() {
            if ($scope.Codi ||$scope.Nom ||$scope.Seccio||$scope.Preu){
                ProducteService.create({
                    Codi: $scope.Codi,
                    Nom: $scope.Nom,
                    Seccio: $scope.Seccio,
                    Preu: $scope.Preu
                    
                }).success(function(producte) {
                    $scope.productes.unshift(producte);
                    $scope.producteBody = null;
                });
            }
        };
});
        
app.service("ProducteService", function($http) {
    this.fetch = function() {
        return $http.get("/api/productes");
    };
    this.create = function(producte) {
        return $http.post("/api/productes", producte);
    };
    this.delete = function(Codi) {
        return $http.delete("/app/productes/"+Codi);
    };
    this.update = function(producte) {
        return $http.put(producte);
    };
});