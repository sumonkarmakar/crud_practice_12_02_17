
console.log("TheatreController Loading");
angular.module('TheatreCtrl',[]).controller('TheatreController',function($scope,$http){
    console.log("Entered TheatreController");
	// calling refresh function
	var refresh = function(){
		console.log('refresh()');
		$http.get('/theatre/getTheatre').success(function(response){
			console.log("Read Successfull");
			$scope.theatreList = response;
			console.log($scope.theatreList);		
		});
	};
	refresh();

	// delete theatre
	$scope.deleteTheatre = function(theatre){
		console.log("Reached delete");
		$http.delete('/theatre/deleteTheatre/' + theatre._id).success(function(response){
			console.log(response);
		});
		refresh();
	};
	
	// add thetre
	$scope.addTheatre = function() {
        var theatre={theatreName:$scope.theatreName};
        console.log('theatre added Successfully');
         $http.post('theatre/addTheatre/',theatre)
            .then(function(response) {
                console.log(response);
                console.log("CREATE IS SUCCESSFUL");
                refresh();
        });
    };

   /* // delete thetre
    $scope.deleteTheatre = function(theatre){
    	console.log("Reached delete");
    	$http.delete('/theatre/deleteTheatre' + theatre._id).success(function(response){
    		console.log(response);
    		refresh();
    	});
    };
*/
});