angular.module('arkanCafe').service('homeService', function (webServiceUrl, $http) {
    var _this = this;
    var orderWebServicePath = "order/";
    var cafeTableWebServicePath = "table/";
    this.getAllFinishedOrder = function (onSuccess, onError) {
        var webServiceMethodPath = "getAllFinishedOrder";
        $http({method: 'get', url: webServiceUrl + orderWebServicePath + webServiceMethodPath,
            headers: {'Content-Type': 'application/json'}})
                .success(onSuccess).error(onError)

    }
    this.getAllTables = function (onSuccess, onError) {
        var webServiceMethodPath = "getAllTables";
        $http({method: 'get', url: webServiceUrl + cafeTableWebServicePath + webServiceMethodPath,
            headers: {'Content-Type': 'application/json'}})
                .success(onSuccess).error(onError)

    }
    this.serveOrder = function (onSuccess, onError, order) {
        var webServiceMethodPath = "serveOrder";
        $http({method: 'post', url: webServiceUrl + orderWebServicePath + webServiceMethodPath,
            data: order, headers: {'Content-Type': 'application/json'}})
                .success(onSuccess).error(onError)

    }

});

