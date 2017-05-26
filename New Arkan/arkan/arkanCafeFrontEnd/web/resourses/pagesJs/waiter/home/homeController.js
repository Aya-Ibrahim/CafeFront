angular.module('arkanCafe').controller('homeController', function ($scope, homeService, $location, $state) {

    $scope.tables = [
        {tableId: 1, tableName: 1, state: true},
        {tableId: 2, tableName: 12, state: false},
        {tableId: 3, tableName: 14, state: true}
    ];
    $scope.finishedOrders = [];
    $scope.goToOrder = function (table) {

//        $state.go("/order/drinks/" + table.tableName + '/' + table.tableId);
        $state.go("order_table_drinks", {tableName: table.tableName, tableId: table.tableId}, {notify: true, reload: false});
    };
    var getAllFinishedOrderOnSuccess = function (data, status, headers, config) {
        $scope.finishedOrders = data;

    }
    var onError = function (data, status, headers, config) {
        console.log(data);
    };
    homeService.getAllFinishedOrder(getAllFinishedOrderOnSuccess, onError);

});


