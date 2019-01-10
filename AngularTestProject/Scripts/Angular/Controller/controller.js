app.controller('AuthorsController', function ($scope, AuthorsService) {

    $scope.authorList = [];

    $scope.GetAuthorList = function () {
        var promisePost = AuthorsService.GetAuthorList();
        promisePost.then(function (pl) {
            // var obj = JSON.parse(pl.data);
            $scope.authorList = pl.data;
        },

    function (errorPl) {
        console.log("Authors list fetching error : " + errorPl.data);
    });

    }
});

/* Drivers controller */
app.controller('DriversController', function ($scope, ergastAPIservice) {
      $scope.nameFilter = null;
      $scope.driversList = [];
      $scope.season = 0;
      $scope.searchFilter = function (driver) {
          var re = new RegExp($scope.nameFilter, 'i');
          return !$scope.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName);
      };

      var promisePost = ergastAPIservice.getDrivers();
      promisePost.then(function (response) {
          console.log(response);
          $scope.driversList = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        }, function (errorPl) {
          console.log("Countries list fetching error : " + errorPl.data);
        });

   
  });

  /* Driver controller */
app.controller('DriverController', function ($scope, $routeParams, ergastAPIservice) {
      $scope.id = $routeParams.id;
      $scope.races = [];
      $scope.driver = null;

      console.log("id:" + $scope.id);


      var promisePost = ergastAPIservice.getDriverDetails($scope.id);
      promisePost.then(function (response) {
          console.log(response);
          $scope.driver = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
      }, function (errorPl) {
          console.log("Countries list fetching error : " + errorPl.data);
      });

    
      var promisePost2 = ergastAPIservice.getDriverRaces($scope.id);
      promisePost2.then(function (response) {
          console.log(response);
          $scope.races = response.data.MRData.RaceTable.Races;
      }, function (errorPl) {
          console.log("Races list fetching error : " + errorPl.data);
      });

     
  });