'use strict';

/**
 * @ngdoc function
 * @name lifeMonitorDoctorApp.controller:patientsCtrl
 * @description
 * # patientsCtrl
 * Controller of the lifeMonitorDoctorApp
 */
app.controller('patientsCtrl', ['$scope', 'Patients', function ($scope, Patients) {

	// Request result
	$scope.patients = 
	    [ 
		    { 
		    	"id" : 1,
		    	"medical_file" : { 
		      		"allergies" : [ 
		        		{ 
		        			"id" : 1,
		          			"name" : "Noix"
		        		} 
		      		],
		      		"id" : 1,
		      		"illnesses" : [ 
		        		{ 
		        			"id" : 1,
		          			"name" : "Grippe"
		        		} 
		      		]
		    	},
	    		"name" : "Terry Gilliam"
		  	},
		  	{ 
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
			    },
			    "name" : "John Doe"
			}
	  	];
  

	$scope.loadPatients = function() {
		var patients = Patients.query({}, function(patients){
	    		// Success
				$scope.patients = patients;
			},
			function(){
				// Error in request
				alert('Error in resource Patients : no data');
			}
		);
	};

	$scope.loadPatients();
}]);
