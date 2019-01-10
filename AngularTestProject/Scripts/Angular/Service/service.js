app.service('AuthorsService', function ($http) {

    this.GetAuthorList = function () {
        var request = $http({
            method: "Get",
            url: "/Ajax/AuthorsList"
        });
        return request;
    }
});

app.service('ergastAPIservice', function ($http) {
      var ergastAPI = {};

      ergastAPI.getDrivers = function () {
          return $http.jsonp('http://ergast.com/api/f1/2013/driverStandings.json', { jsonpCallbackParam: 'callback' })
          
      }

      ergastAPI.getDriverDetails = function (id) {
          return $http.jsonp('http://ergast.com/api/f1/2013/drivers/' + id+ '/driverStandings.json', { jsonpCallbackParam: 'callback' })

      }

      ergastAPI.getDriverRaces = function (id) {
          return $http.jsonp('http://ergast.com/api/f1/2013/drivers/' + id + '/results.json', { jsonpCallbackParam: 'callback' })
      }

      return ergastAPI;
  });
