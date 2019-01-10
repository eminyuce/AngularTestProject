app.service('NgService', function ($http) {

    this.GetAuthorList = function () {
        var request = $http({
            method: "Get",
            url: "/Home/AuthorsList"
        });
        return request;
    }
});