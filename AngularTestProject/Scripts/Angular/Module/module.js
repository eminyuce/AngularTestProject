/// <reference path="D:\Projects\TestProjects\AngularTestProject\AngularTestProject\Views/Shared/AngularPartials/AuthorList.cshtml" />
/// <reference path="D:\Projects\TestProjects\AngularTestProject\AngularTestProject\Views/Shared/AngularPartials/AuthorList.cshtml" />
var app;
(function () {
    app = angular.module("ANG", ['ngRoute'])
})();
 
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode({
    //    enabled: true 
    //});
    $locationProvider.html5Mode(true).hashPrefix('!')
    $routeProvider.
      when("/", {
          templateUrl: "/home/partial/AuthorList",
          controller: "AuthorsController"
      }).
      when("/home/drivers", {
             templateUrl: "/home/partial/DriversList",
             controller: "DriversController"
         }).
      when("/home/driver/:id", {
          templateUrl: "/home/partial/DriverDetail",
          controller: "DriverController"
      }).
      otherwise({ redirectTo: '/' });
}]);

app.run(function ($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (e, current, pre) {
        var fullRoute = current.$$route.originalPath,
            routeParams = current.params,
            resolvedRoute;

        console.log(fullRoute);
        console.log(routeParams);

        resolvedRoute = fullRoute.replace(/:id/, routeParams.id);
        console.log(resolvedRoute);
    });
});

app.config(function($sceDelegateProvider) {  
    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain. **.
        'http://ergast.com/**'
    ]);
});