angular.module('arkanCafe').controller('homeController', function ($scope, homeService, $location, $state) {

    $scope.tables = [];
    $scope.finishedOrders = [];
    $scope.goToOrder = function (table) {
//        $state.go("/order/drinks/" + table.tableName + '/' + table.tableId);
        $state.go("order_table_drinks", {tableId: table.tableId, orderId: table.lastOrder?table.lastOrder.orderId:0}, {notify: true, reload: false});
    };
    var getAllFinishedOrderOnSuccess = function (data, status, headers, config) {
        $scope.finishedOrders = data;

    }
    var getAllTablesOnSuccess = function (data, status, headers, config) {
        $scope.tables = data;

    }
    var onError = function (data, status, headers, config) {
        console.log(data);
    };
    var serveOrderOnSuccess = function (data, status, headers, config) {
        console.log(data);
    }
    //___________________________________________________________ function for page functionality
    $scope.serveOrder = function (order) {
        homeService.serveOrder(serveOrderOnSuccess, onError, order)
    }

    //_________________________________________________________ service to run on page start
    homeService.getAllFinishedOrder(getAllFinishedOrderOnSuccess, onError);
    homeService.getAllTables(getAllTablesOnSuccess, onError);


});


