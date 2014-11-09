'use strict';

/**
 * @ngdoc function
 * @name lifeMonitorDoctorApp.factory:PatientsFactory
 * @description
 * # PatientsFactory
 * Factory of Patients informations
 */
app.factory('Patients', ['$q', '$resource', function($q, $resource){
	var Factory = {

		allPatients : null,

		// Return all patients
		getPatients : function(){
			// Initiate the promise
			var deferred = $q.defer();

			if(Factory.allPatients !== null)
			{
				deferred.resolve(Factory.allPatients);
			} 
			else
			{
				var Resource = $resource('http://demo9892644.mockable.io/patients');
					
				Resource.query(
					{}, 
					function(patients){
		    			// Success
						Factory.allPatients = patients ;
						deferred.resolve(Factory.allPatients);
					},
					function(){
						// Error in request
						deferred.reject('Error in call getPatients method : no data');
					}
				);			
			}

			// Return promise
			return deferred.promise;
		},

		// Return 1 patient
		getPatient : function(id){
			var d = $q.defer();

			var patient = $resource('http://demo9892644.mockable.io/patients/:id', {id:'@id'});
					
			patient.get({id:id},
				function(patient){
					// Success
					d.resolve(patient);
				},
				function(){
					// Error in request
					d.reject('Error in call getPatient method : no data');
				}
			);
			return d.promise;
		},

		getMedicalRecord : function(patientId) {
			var d = $q.defer();

			var file = $resource('http://demo9892644.mockable.io/patients/:id/file', {id:'@id'});
					
			file.get({id:patientId},
				function(medicalRecord){
					// Success
					d.resolve(medicalRecord);
				}
			);

			return d.promise;
		} 
	};

	return Factory;
}]);