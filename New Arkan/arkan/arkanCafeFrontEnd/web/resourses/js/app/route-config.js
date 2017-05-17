angular.module('arkanCafe').
//  config(['$locationProvider' ,'$routeProvider','USER_ROLES',
        config(['$locationProvider', '$routeProvider', "$stateProvider", "$urlRouterProvider",
            function config($locationProvider, $routeProvider, $stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise("/home");
                $stateProvider
                        .state('home', {
                            url: "/home",
                            views: {
                                "viewA": {templateUrl: 'resourses/pagesView/waiter/home/home.html', controller: 'homeController'}
//                                ,
//                                "viewB": {template: " bbbbbbbbbbbbbbbbbbbb "}
                            }
                        }).state('show_menu', {
                    url: "/order",
                    views: {
                        "viewA": {templateUrl: 'resourses/pagesView/waiter/order/order.html', controller: 'orderContoller'}
//                                ,
//                                "viewB": {template: " bbbbbbbbbbbbbbbbbbbb "}
                    }
                }).state('order_table_drinks', {
                    url: '/order/drinks/:tableName/:tableId',
                    views: {
                        "viewA": {templateUrl: 'resourses/pagesView/waiter/order/order.html', controller: 'orderContoller'},
                        "viewB": {templateUrl: " resourses/pagesView/waiter/drinks.html ", controller: 'orderContoller'}
                    }
                }).state('order_table_shesha', {
                    url: '/order/shesha/:tableName/:tableId',
                    views: {
                        "viewA": {templateUrl: 'resourses/pagesView/waiter/order/order.html', controller: 'orderContoller'},
                        "viewB": {templateUrl: " resourses/pagesView/waiter/shesha.html ", controller: 'orderContoller'}
                    }
                }).state('order_table_games', {
                    url: '/order/games',
                    views: {
                        "viewA": {templateUrl: 'resourses/pagesView/waiter/order/order.html', controller: 'orderContoller'},
                        "viewB": {templateUrl: " resourses/pagesView/waiter/games.html ", controller: 'orderContoller'}
                    }
                });
                $urlRouterProvider.otherwise('/home');
                $locationProvider.html5Mode({enable: true, requiredBase: true});



//      $locationProvider.hashPrefix('!');
//                $routeProvider.
//                        when('/home', {
//                            controller: 'homeController',
//                            templateUrl: 'resourses/pagesView/waiter/home/home.html'
//                        })
//                        .when('/order', {
//                            controller: 'orderContoller',
//                            templateUrl: 'resourses/pagesView/waiter/order/order.html'
//
//                        })
//                        .when('/order/:tableName/:tableId', {
//                            controller: 'orderContoller',
//                            templateUrl: 'resourses/pagesView/waiter/order/order.html'
//
//                        })
//                        .
//                        when('/', {
//                            redirectTo: '/login'
//                        })
//                        .otherwise({redirectTo: '/login'});
            }
        ]);
//        .run(['$rootScope', '$location', '$cookieStore', '$http','AuthenticationService',
//            function ($rootScope, $location, $cookieStore, $http,AuthenticationService) {
//                // keep user logged in after page refresh
//                $rootScope.globals = $cookieStore.get('globals') || {};
//                if ($rootScope.globals.currentUser) {
//                    $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
//                  //  $rootScope.rooooot ;
//                   
//                }
//
//                $rootScope.$on('$locationChangeStart', function (event, next, current) {
//                    // redirect to login page if not logged in
//                    if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
//                        $location.path('/login');
//                    }
//                    else if ($location.path() === '/login'){
//                        AuthenticationService.ClearCredentials();
//                    }
//                     if ($location.path() !== '/login'){
//                       $rootScope.rooooot = false;
//                    }
//                });
//            }]);



