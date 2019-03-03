app.controller('AuthorsController', function ($scope, AuthorsService, myConfig) {

    $scope.authorList = [];
    $scope.appName = myConfig.applicationName;
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
app.controller('DateController', function ($scope) {
    var today = new Date();
    $scope.CurrentDate = today.toLocaleString();
});
app.controller('AngularDirectiveController', function ($scope) {
    $scope.isChecked = function () {
        $scope.testHide = $scope.testHideChecked;
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
app.controller('FormSampleController', function ($scope, $timeout, $q, $http, registrationService, myConfig) {

    $scope.reset = reset;
    $scope.submit = submit;

    reset();

    function submit(model) {
        console.log(model);

        registrationService.submit(model).$promise
            .then(function (response) {
                alert('success');
            },
            function (response) {
                alert('error');
            });
    }

    function reset() {
        $scope.model = {};
    }

});

app.controller('LabController', [
    '$scope', '$timeout', '$q', '$http', 'LabAPIservice', 'myConfig',
    function ($scope, $timeout, $q, $http, LabAPIservice, myConfig) {

        $scope.model = {
            number: 0,
            result: 'Ready',
        };
        $scope.checkOddNumber = checkOddNumber;
        $scope.appName = myConfig.applicationName;



        $scope.getRepos = function (search) {
            var promisePost = LabAPIservice.getRepos();
            promisePost.then(function (response) {
                console.log(search);
                $scope.model.detail = null;
                $scope.model.repos = response.data.filter(function (item) {
                    if (item.language !== null) {
                        return item.language.toLowerCase() === search;
                    }
                    return false;
                });

            }, function (errorPl) {
                console.log("Countries list fetching error : " + errorPl.data);
            });
        }

        $scope.loadDetail = function (name) {
            var promisePost = LabAPIservice.loadDetail(name);
            promisePost.then(function (response) {
                $scope.model.detail = response.data;
            }, function (response) {
                $scope.model.detail = { error: true, message: 'Error: ' + response.data.message };
            });
        };




        function checkOddNumber(input) {
            $scope.model.result = 'Working...';
            checkOddNumberHandler(input).then(function (result) {
                $scope.model.result = 'Success: ' + result;
            }, function (result) {
                $scope.model.result = 'Error: ' + result;
            })
        }
        function checkOddNumberHandler(input) {
            var defer = $q.defer();

            $timeout(function () {
                if (isNumberOdd(input)) {
                    defer.resolve('Yes, an odd number');
                } else {
                    defer.reject('Not an odd number');
                }
            }, 1000);

            return defer.promise;
        }
        function isNumberOdd(input) {
            return !isNaN(input) && input % 2 === 1;
        }
    }
]);


app.controller('LabGithubController', [
    '$scope', '$timeout', '$q', '$http', 'gitHub', 'myConfig',
function ($scope, $timeout, $q, $http, gitHub, myConfig) {

    $scope.model = {
        number: 0,
        result: 'Ready',
    };
    $scope.checkOddNumber = checkOddNumber;
    $scope.appName = myConfig.applicationName;
    $scope.getRepos = function getRepos(search) {
        $scope.model.repos = gitHub.getAll();
    }

    $scope.loadDetail = function loadDetail(name) {
        $scope.model.detail = null;
        $scope.model.detail = gitHub.getDetail({ id: name });
    }



    function checkOddNumber(input) {
        $scope.model.result = 'Working...';
        checkOddNumberHandler(input).then(function (result) {
            $scope.model.result = 'Success: ' + result;
        }, function (result) {
            $scope.model.result = 'Error: ' + result;
        })
    }
    function checkOddNumberHandler(input) {
        var defer = $q.defer();

        $timeout(function () {
            if (isNumberOdd(input)) {
                defer.resolve('Yes, an odd number');
            } else {
                defer.reject('Not an odd number');
            }
        }, 1000);

        return defer.promise;
    }
    function isNumberOdd(input) {
        return !isNaN(input) && input % 2 === 1;
    }
}
]);

app.controller('StudentController', function ($scope) {
    $scope.Mahesh = {};
    $scope.Mahesh.name = "Mahesh Parashar";
    $scope.Mahesh.rollno = 1;

    $scope.Piyush = {};
    $scope.Piyush.name = "Piyush Parashar";
    $scope.Piyush.rollno = 2;
});