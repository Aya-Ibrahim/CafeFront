angular.module('arkanCafe').controller('drinkController', function ($scope, drinkService, $location, $state, $stateParams) {
    //_______________________________________________ method to be identified for drinks div  ____________________//
    $scope.order = {};
    $scope.order.orderlines = [];
    $scope.order.gameLines = [];
    $scope.tableId = $stateParams.tableId;
    $scope.orderId = $stateParams.orderId;
    //_______________________ to be replace with the web service wich will get all lookups data ________//
    var drinkServiceObject = {"serviceId": 1};
    //________________________________________________________________________________ get this table order //
    var getTableLastOrderSuccess = function (data, status, headers, config) {
        console.log(data);
        if (data !== null) {

            $scope.order.orderId = data.orderId;
            $scope.order.cafeTable = data.cafeTable;
            $scope.order.status = data.status;

            angular.forEach(data.orderlines, function (value, key) {
                var found = false;
                angular.forEach($scope.order.orderlines, function (value2, key2) {
                    if (value.item.itemId === value2.item.itemId) {
                        $scope.order.orderlines[key2].orderlineId = value.orderlineId;
                        $scope.order.orderlines[key2].status = value.status;
                        $scope.order.orderlines[key2].quantity = value.quantity;
                        $scope.order.orderlines[key2].orderlineAdditions = value.orderlineAdditions;
                        found = true;
                    }
                });
                if (!found) {
                    angular.forEach($scope.sheshaOrder.orderlines, function (value3, key3) {
                        if (value.item.itemId === value3.item.itemId) {
                            $scope.sheshaOrder.orderlines[key3].orderlineId = value.orderlineId;
                            $scope.sheshaOrder.orderlines[key3].status = value.status;
                            $scope.sheshaOrder.orderlines[key3].quantity = value.quantity;
                            $scope.sheshaOrder.orderlines[key3].orderlineAdditions = value.orderlineAdditions;

                        }
                    });
                }
            });

            angular.forEach(data.gameLines, function (value, key) {
                angular.forEach($scope.order.gameLines, function (value4, key4) {
                    if (value.game.gameId === value4.game.gameId) {
                        $scope.order.gameLines[key4].gameLineId = value.gameLineId;
                        $scope.order.gameLines[key4].game = value.game;
                        $scope.order.gameLines[key4].price = value.price;
                        $scope.order.gameLines[key4].period = value.period;
                        $scope.order.gameLines[key4].startDate = value.startDate;
                        $scope.order.gameLines[key4].endDate = value.endDate;


                    }
                });
            });


//            $scope.order.gameLines = data.gameLines;
        }
    };
    var getallMenu = function () {
        drinkService.getAllGames(getAllGamesSuccess, getAllDrinksError);
        drinkService.getAllItems(getAllDrinksSuccess, getAllDrinksError, drinkServiceObject);
        drinkService.getAllItems(getAllSheshaSuccess, getAllDrinksError, sheshaServiceObject);
        if ($scope.orderId && $scope.orderId > 0) {
            var order = {};
            order.orderId = $scope.orderId;
            order.cafeTable = {};
            order.cafeTable.tableId = $scope.orderId;
            drinkService.getTableLastOrder(getTableLastOrderSuccess, getAllDrinksError, order);
        }
    };

    //___________________________________________________________________________________________//
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
    $scope.increaseSuguerQuantity = function (orderlineAdditionIndex, additionIndex, itemHasAddition) {

        $scope.order.orderlines[orderlineAdditionIndex].orderlineAdditions[additionIndex].quantity += 1;
        if (!$scope.order.orderlines[orderlineAdditionIndex].orderlineAdditions[additionIndex].itemHasAddition) {
            $scope.order.orderlines[orderlineAdditionIndex].orderlineAdditions[additionIndex].itemHasAddition = itemHasAddition;
        }


    };
    $scope.decreaseSuguerQuantity = function (orderlineAdditionIndex, additionIndex, itemHasAddition) {
        if ($scope.order.orderlines[orderlineAdditionIndex].orderlineAdditions[additionIndex].quantity - 1 >= 0)
            $scope.order.orderlines[orderlineAdditionIndex].orderlineAdditions[additionIndex].quantity -= 1;
        if (!$scope.order.orderlines[orderlineAdditionIndex].orderlineAdditions[additionIndex].itemHasAddition) {
            $scope.order.orderlines[orderlineAdditionIndex].orderlineAdditions[additionIndex].itemHasAddition = itemHasAddition;
        }
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

//    $scope.gameOrder = {};
//    $scope.gameOrder.gameLines = [];


    var getAllGamesSuccess = function (data, status, headers, config) {
        if (data !== null && data.length > 0) {
            angular.forEach(data, function (value, key) {
                $scope.order.gameLines[key] = {};
                $scope.order.gameLines[key].game = value;
                $scope.order.gameLines[key].price = 0;
                $scope.order.gameLines[key].period;
                $scope.order.gameLines[key].startDate = null;
                $scope.order.gameLines[key].endDate = null;

            });
        }
        $scope.setTimeDateForNow = function (index, whichDate) {
            obj = new Date().toLocaleString();
            if (whichDate === 'start') {
                $scope.order.gameLines[index].startDate = new Date().toLocaleString();
            } else {
                $scope.order.gameLines[index].endDate = new Date().toLocaleString();
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
        if ($scope.order.gameLines[index].endDate) {
            var activeDate = moment($scope.order.gameLines[index].endDate);

            $dates.filter(function (date) {
                return date.localDateValue() >= activeDate.valueOf()
            }).forEach(function (date) {
                date.selectable = false;
            })
        }
    }

    function endDateBeforeRender($view, $dates, T, Y, U, index) {
        if ($scope.order.gameLines[index].startDate) {
            var activeDate = moment($scope.order.gameLines[index].startDate).subtract(1, $view).add(1, 'minute');

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
        $scope.Drink_sheSha_Order.gameLines = $scope.order.gameLines;
    };
    $scope.showSheshaDiv = function () {
        $scope.showDrinks = false;
        $scope.showGame = false;
        $scope.showShesha = true;
        if ($scope.sheshaOrder.orderlines < 1)
            drinkService.getAllItems(getAllSheshaSuccess, getAllDrinksError, sheshaServiceObject);
    };
    $scope.showDrinksDiv = function () {
        $scope.showShesha = false;
        $scope.showGame = false;
        $scope.showDrinks = true;
        if ($scope.order.orderlines < 1)
            drinkService.getAllItems(getAllDrinksSuccess, getAllDrinksError, drinkServiceObject);
    };
    $scope.showGameDiv = function () {
        $scope.showDrinks = false;
        $scope.showShesha = false;
        $scope.showGame = true;
        if ($scope.order.gameLines < 1)
            drinkService.getAllGames(getAllGamesSuccess, getAllDrinksError);
    };

    $scope.saveOrder = function () {
        $scope.OrderToSend = {};
        $scope.OrderToSend.gameLines = [];
        $scope.OrderToSend.orderlines = [];
        if ($scope.order.orderId) {
            $scope.OrderToSend.orderId = $scope.order.orderId;
        }
        $scope.OrderToSend.gameLines = $scope.order.gameLines;
        $scope.OrderToSend.orderlines = $scope.order.orderlines.concat($scope.sheshaOrder.orderlines);
        console.log($scope.OrderToSend);
    };


    //____________________________________________________________________________________________//

    //__________________________________________________ method to be called when loading the page

//    if ($state.current.name === "order_table_shesha") {
//        $scope.showSheshaDiv();
//        drinkService.getAllItems(getAllSheshaSuccess, getAllDrinksError, sheshaServiceObject);
//    } else if ($state.current.name === "order_table_drinks") {
    $scope.showDrinksDiv();
    getallMenu();



    //____________________________________________________________________________________________//

});


