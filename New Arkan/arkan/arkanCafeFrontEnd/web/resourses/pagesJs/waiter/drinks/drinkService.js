angular.module('arkanCafe').service('drinkService', function (webServiceUrl, $http) {

    var _this = this;
    var itemWebServicePath = "item/";
    var gameWebServicePath = "game/";
    this.getAllDrinks = function (onSuccess, onError,drinkService) {
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
});

