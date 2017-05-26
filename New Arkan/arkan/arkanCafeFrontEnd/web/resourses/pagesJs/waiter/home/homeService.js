angular.module('arkanCafe').service('homeService', function (webServiceUrl, $http) {
    var _this = this;
    var orderWebServicePath = "order/";
    this.getAllFinishedOrder = function (onSuccess, onError) {
        var webServiceMethodPath = "getAllFinishedOrder";
        $http({method: 'get', url: webServiceUrl + orderWebServicePath + webServiceMethodPath,
            headers: {'Content-Type': 'application/json'}})
                .success(onSuccess).error(onError)

    }

});

