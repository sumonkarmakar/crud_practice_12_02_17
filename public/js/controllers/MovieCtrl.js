console.log('MoviesController loading');
angular.module('MovieCtrl',[]).controller('MoviesController',function($scope,$http){	
	$scope.addMovie=function()
	{
		console.log("Title"+$scope.title);
		console.log("Year"+$scope.year);
		$http.get('http://www.omdbapi.com/?t='+$scope.title+'&y='+$scope.year+'&plot=short&r=json')
		.success(function(response){
			console.log("Result-----------");
			console.log(response);
			$http.post('/movie/addMovie',response).then(function(){
				console.log("done");
			});
		});
	}

	
});