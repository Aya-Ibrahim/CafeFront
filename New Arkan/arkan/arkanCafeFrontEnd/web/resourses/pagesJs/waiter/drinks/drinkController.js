angular.module('arkanCafe').controller('drinkController', function ($scope, drinkService, $location, $state) {
    //_______________________________________________ method to be identified for drinks div  ____________________//
    $scope.order = {};
    $scope.order.orderlines = [];
    //_______________________ to be replace with the web service wich will get all lookups data ________//
    var drinkServiceObject = {"serviceId": 1};
    //___________________________________________________________________________________________//
    var getAllDrinksSuccess = function (data, status, headers, config) {
        if (data !== null && data.length > 0) {
            angular.forEach(data, function (value, key) {
                $scope.order.orderlines[key] = {};
                $scope.order.orderlines[key].item = value;
                $scope.order.orderlines[key].status = "";
                $scope.order.orderlines[key].quantity = 0;
                $scope.order.orderlines[key].orderlineAdditions = [];
            });
        }
    };

    $scope.addItemToOrderLine = function (index) {
        $scope.order.orderlines[index].quantity += 1;
//        $scope.order.orderlines[index].expanded = true;
        var OrderlineAddition = {};
        OrderlineAddition.quantity = 2;
        $scope.order.orderlines[index].orderlineAdditions.push(OrderlineAddition);
    };
    $scope.subItemFromOrderLine = function (index) {

        if ($scope.order.orderlines[index].quantity - 1 >= 0) {
            $scope.order.orderlines[index].quantity -= 1;

            $scope.order.orderlines[index].orderlineAdditions.splice($scope.order.orderlines[index].orderlineAdditions.length - 1, 1);
        }
        if ($scope.order.orderlines[index].quantity === 0)
            $scope.order.orderlines[index].expanded = false;

    };
    $scope.increaseSuguerQuantity = function (orderlineAdditionIndex, additionIndex) {
        $scope.order.orderlines[orderlineAdditionIndex].orderlineAdditions[additionIndex].quantity += 1;
    };
    $scope.decreaseSuguerQuantity = function (orderlineAdditionIndex, additionIndex) {
        if ($scope.order.orderlines[orderlineAdditionIndex].orderlineAdditions[additionIndex].quantity - 1 >= 0)
            $scope.order.orderlines[orderlineAdditionIndex].orderlineAdditions[additionIndex].quantity -= 1;
    };

    //____________________________________________________________________________________________//

    //_______________________________________________ method to be identified for shesha div  ________//

    $scope.sheshaOrder = {};
    $scope.sheshaOrder.orderlines = [];

    //_______________________ to be replace with the web service wich will get all lookups data 
    var sheshaServiceObject = {"serviceId": 2};


    var getAllSheshaSuccess = function (data, status, headers, config) {
        if (data !== null && data.length > 0) {
            angular.forEach(data, function (value, key) {
                $scope.sheshaOrder.orderlines[key] = {};
                $scope.sheshaOrder.orderlines[key].item = value;
                $scope.sheshaOrder.orderlines[key].status = "";
                $scope.sheshaOrder.orderlines[key].quantity = 0;

            });
        }
    };
    var getAllDrinksError = function (data, status, headers, config) {
        console.log(data);
    };
    $scope.addMoreShesha = function (index) {
        $scope.sheshaOrder.orderlines[index].quantity += 1;
    };
    $scope.removeOneShesha = function (index) {
        if ($scope.sheshaOrder.orderlines[index].quantity - 1 >= 0) {
            $scope.sheshaOrder.orderlines[index].quantity -= 1;
        }
    };

    //____________________________________________________________________________________________//


    //_______________________________________________ method to be identified for game div  ________//

    $scope.gameOrder = {};
    $scope.gameOrder.gameLines = [];


    var getAllGamesSuccess = function (data, status, headers, config) {
        if (data !== null && data.length > 0) {
            angular.forEach(data, function (value, key) {
                $scope.gameOrder.gameLines[key] = {};
                $scope.gameOrder.gameLines[key].game = value;
                $scope.gameOrder.gameLines[key].price = 0;
                $scope.gameOrder.gameLines[key].date;
                $scope.gameOrder.gameLines[key].startDate = null;
                $scope.gameOrder.gameLines[key].endDate = null;

            });
        }
        $scope.setTimeDateForNow = function (index, whichDate) {
            obj = new Date().toLocaleString();
            if (whichDate === 'start') {
                $scope.gameOrder.gameLines[index].startDate = new Date().toLocaleString();
            } else {
                $scope.gameOrder.gameLines[index].endDate = new Date().toLocaleString();
            }
        };
    };

    //____________________________________________________________________________________________//


//_______________________________________________________________ for game date picker __________//

    $scope.endDateBeforeRender = endDateBeforeRender
    $scope.endDateOnSetTime = endDateOnSetTime
    $scope.startDateBeforeRender = startDateBeforeRender
    $scope.startDateOnSetTime = startDateOnSetTime

    function startDateOnSetTime() {
        $scope.$broadcast('start-date-changed');
    }

    function endDateOnSetTime() {
        $scope.$broadcast('end-date-changed');
    }

    function startDateBeforeRender($dates, index) {
        if ($scope.gameOrder.gameLines[index].endDate) {
            var activeDate = moment($scope.gameOrder.gameLines[index].endDate);

            $dates.filter(function (date) {
                return date.localDateValue() >= activeDate.valueOf()
            }).forEach(function (date) {
                date.selectable = false;
            })
        }
    }

    function endDateBeforeRender($view, $dates, T, Y, U, index) {
        if ($scope.gameOrder.gameLines[index].startDate) {
            var activeDate = moment($scope.gameOrder.gameLines[index].startDate).subtract(1, $view).add(1, 'minute');

            $dates.filter(function (date) {
                return date.localDateValue() <= activeDate.valueOf()
            }).forEach(function (date) {
                date.selectable = false;
            })
        }
    }
    //____________________________________________________________________________________________//

    //_______________________________________________ commen method  ________//

    var getAllDrinksError = function (data, status, headers, config) {
        console.log(data);
    };
    $scope.showAllItems = function () {
        $scope.Drink_sheSha_Order = {};
        $scope.Drink_sheSha_Order.Drink_sheSha_OrderLines = [];
        $scope.Drink_sheSha_Order.gameLines = [];
        $scope.Drink_sheSha_Order.Drink_sheSha_OrderLines = $scope.order.orderlines.concat($scope.sheshaOrder.orderlines);
        $scope.Drink_sheSha_Order.gameLines = $scope.gameOrder.gameLines;

    };
    $scope.showSheshaDiv = function () {
        $scope.showDrinks = false;
        $scope.showGame = false;
        $scope.showShesha = true;
        if ($scope.sheshaOrder.orderlines < 1)
            drinkService.getAllDrinks(getAllSheshaSuccess, getAllDrinksError, sheshaServiceObject);
    };
    $scope.showDrinksDiv = function () {
        $scope.showShesha = false;
        $scope.showGame = false;
        $scope.showDrinks = true;
        if ($scope.order.orderlines < 1)
            drinkService.getAllDrinks(getAllDrinksSuccess, getAllDrinksError, drinkServiceObject);
    };
    $scope.showGameDiv = function () {
        $scope.showDrinks = false;
        $scope.showShesha = false;
        $scope.showGame = true;
         if ($scope.gameOrder.gameLines < 1)
        drinkService.getAllGames(getAllGamesSuccess, getAllDrinksError)
    };


    //____________________________________________________________________________________________//

    //__________________________________________________ method to be called when loading the page

//    if ($state.current.name === "order_table_shesha") {
//        $scope.showSheshaDiv();
//        drinkService.getAllDrinks(getAllSheshaSuccess, getAllDrinksError, sheshaServiceObject);
//    } else if ($state.current.name === "order_table_drinks") {
    $scope.showDrinksDiv();
    drinkService.getAllDrinks(getAllDrinksSuccess, getAllDrinksError, drinkServiceObject);
//    }

    //____________________________________________________________________________________________//

});


