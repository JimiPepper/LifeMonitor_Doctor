'use strict';

/**
 * @ngdoc function
 * @name lifeMonitorDoctorApp.controller:medicalRecordCtrl
 * @description
 * # medicalRecordCtrl
 * Controller of the lifeMonitorDoctorApp
 */
app.controller('medicalRecordCtrl', ['$scope', 'Prescriptions', function ($scope, Prescriptions) {
	// Allergies
	var allergies = $scope.patient.medical_file.allergies;

	// illnesses
	var illnesses = $scope.patient.medical_file.illnesses;

	// Prescriptions
	var prescriptions = [ 
		{ 
			"date" : "2014-10-31T00:00:00+0100",
	    	"doctor" : { 
	    		"id" : 2,
	        	"name" : "Dr Jekyll"
	    	},
	    	"id" : 2,
	    	"medical_file" : { 
	    		"allergies" : [ 
	    			{ 
	    				"id" : 2,
	              		"name" : "Noix"
	            	} 
	            ],
	        	"id" : 2,
	        	"illnesses" : [ 
	        		{ 
	        			"id" : 2,
	              		"name" : "Grippe"
	            	} 
	            ]
	      	}
	  	} 
	];

	$scope.loadPrescriptions = function() {
		var prescriptions = Prescriptions.query({}, function(prescriptions){
	    		// Success
				$scope.prescriptions = prescriptions;
			},
			function(){
				// Error in request
				alert('Error in resource Prescriptions : no data');
			}
		);
	};
	$scope.loadPrescriptions();

	// Build medical record
	$scope.medicalRecord = [];

	$scope.buildMedicalRecord = function(){
		allergies.forEach(function (allergie) {
			$scope.medicalRecord.push({
                type: 'allergie',
                name: allergie.name,
                date: { to: null , from: null},
                doctor: null
            });
		});
		illnesses.forEach(function (illnesse) {
			$scope.medicalRecord.push({
                type: 'illnesse',
                name: illnesse.name,
                date: { to: null , from: null},
                doctor: null
            });
		});
		prescriptions.forEach(function (prescription) {
			$scope.medicalRecord.push({
                type: 'prescription',
                name: prescription.id,
                date: { to: prescription.date , from: null},
                doctor: prescription.doctor.name
            });
		});
	};
	$scope.buildMedicalRecord();

	// Sort informations
	$scope.predicate = '-date.to';
	$scope.reverse = false ;

	// Pagination
	$scope.itemsPerPage = 1;
  	$scope.currentPage = 0;

  	$scope.prevPage = function() {
    	if ($scope.currentPage > 0) {
      		$scope.currentPage--;
    	}
  	};

  	$scope.prevPageDisabled = function() {
    	return $scope.currentPage === 0 ? "disabled" : "";
  	};

  	$scope.pageCount = function() {
    	return Math.ceil($scope.medicalRecord.length/$scope.itemsPerPage)-1;
  	};

  	$scope.nextPage = function() {
    	if ($scope.currentPage < $scope.pageCount()) {
      		$scope.currentPage++;
    	}
  	};

 	 $scope.nextPageDisabled = function() {
    	return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
  	};

  	$scope.range = function() {
	    var rangeSize = 5;
	    var ret = [];
	    var start;

	    start = $scope.currentPage;
	    if ( start + rangeSize > $scope.pageCount() ) {
	    	var rangmin = start- ($scope.pageCount()+1 - start) ;
	    	if( rangmin < 0){
	    		rangmin = 0 ;
	    	}
	    	for (var i=rangmin; i<=$scope.pageCount(); i++) {
	      		ret.push(i);
	    	}
	    } else {
		    for (var j=start; j<start+rangeSize; j++) {
		      ret.push(j);
		    }
		}
	    return ret;
	};

	$scope.setPage = function(n) {
    	$scope.currentPage = n;
  	};
}]);