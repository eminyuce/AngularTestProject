app.controller('NgController', function ($scope, NgService) {

    $scope.authorList = [];

    $scope.GetAuthorList = function () {
        var promisePost = NgService.GetAuthorList();
        promisePost.then(function (pl) {
            // var obj = JSON.parse(pl.data);
            $scope.authorList = pl.data;
        },

    function (errorPl) {
        console.log("Countries list fetching error : " + errorPl.data);
    });

    }
});