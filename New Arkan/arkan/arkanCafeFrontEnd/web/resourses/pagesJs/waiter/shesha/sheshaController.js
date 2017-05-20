angular.module('arkanCafe').controller('sheshaController', function ($scope, drinkService, $location, $state) {
    //_______________________________________________ method to be identified ____________________//
    $scope.sheshaOrder = {};
    $scope.sheshaOrder.orderlines = [];

    //_______________________ to be replace with the web service wich will get all lookups data 
    var drinkServiceObject = {"serviceId": 2};
    //___________________________________________________________________________________________//


    var getAllSheshaSuccess = function (data, status, headers, config) {
        if (data !== null && data.length > 0) {
            angular.forEach(data, function (value, key) {
                $scope.sheshaOrder.orderlines[key] = {};
                $scope.sheshaOrder.orderlines[key].item = value;
                $scope.sheshaOrder.orderlines[key].status = "";
                $scope.sheshaOrder.orderlines[key].quantity = 0;
//                $scope.sheshaOrder.orderlines[key].orderlineAdditions = [];
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



    //__________________________________________________ method to be called when loading the page
    drinkService.getAllDrinks(getAllSheshaSuccess, getAllDrinksError, drinkServiceObject);
    //____________________________________________________________________________________________//

    console.log($state.current.name);
});


