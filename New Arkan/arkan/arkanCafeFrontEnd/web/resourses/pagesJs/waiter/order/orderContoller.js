angular.module('arkanCafe').controller('orderContoller', function ($scope, orderService, $routeParams,$stateParams) {

    $scope.table = {};
    $scope.table.tableName = $stateParams.tableName;
    $scope.table.tableId = $stateParams.tableId;
    
    
});



