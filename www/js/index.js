//$('#reposHome').bind('pageinit', function(event) {
    //loadRepos();
//});

//function loadRepos() {
    //$.ajax("https://api.github.com/legacy/repos/search/javascript").done(function(data) {
        //var i, repo;
        //$.each(data.repositories, function (i, repo) {
            //$("#allRepos").append("<li><a href='https://github.com/" + repo.username + "/" + repo.name + "'>"
            //+ "<h4>" + repo.name + "</h4>"
            //+ "<p>" + repo.username + "</p></a></li>");
        //});
        //$('#allRepos').listview('refresh');
    //});
//};

$('body').bind('pageinit', function(event){
    onDeviceReady();
});

    // device APIs are available
    //
function onDeviceReady() {
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
}

function onFileSystemSuccess(fileSystem) {
    console.log(fileSystem.name);
    console.log(fileSystem.root.name);
}

function fail(error) {
    console.log(error.code);
}
