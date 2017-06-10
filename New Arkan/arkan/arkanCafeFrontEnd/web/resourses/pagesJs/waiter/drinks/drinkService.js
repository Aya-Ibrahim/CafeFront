angular.module('arkanCafe').service('drinkService', function (webServiceUrl, $http) {

    var _this = this;
    var orderWebServicePath = "order/";
    var itemWebServicePath = "item/";
    var gameWebServicePath = "game/";
    this.getAllItems = function (onSuccess, onError, drinkService) {
        var webServiceMethodPath = "getAllItems";
        $http({method: 'post', url: webServiceUrl + itemWebServicePath + webServiceMethodPath, data: drinkService,
            headers: {'Content-Type': 'application/json'}})
                .success(onSuccess).error(onError);
    };
    this.getAllGames = function (onSuccess, onError) {
        var webServiceMethodPath = "getAllGames";
        $http({method: 'post', url: webServiceUrl + gameWebServicePath + webServiceMethodPath,
            headers: {'Content-Type': 'application/json'}})
                .success(onSuccess).error(onError);
    };
    this.getTableLastOrder = function (onSuccess, onError, order) {
        var webServiceMethodPath = "getTableLastOrder";
        $http({method: 'post', url: webServiceUrl + orderWebServicePath + webServiceMethodPath, data: order,
            headers: {'Content-Type': 'application/json'}})
                .success(onSuccess).error(onError);
    };
});

