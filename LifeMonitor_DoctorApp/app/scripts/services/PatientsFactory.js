'use strict';

/**
 * @ngdoc function
 * @name lifeMonitorDoctorApp.factory:PatientsFactory
 * @description
 * # PatientsFactory
 * Factory of Patients informations
 */
app.factory('Patients', ['$resource', function($resource){
	var Patients = $resource('http://doritosjenkins.cloudapp.net:8000/patients/all');

			/* VIA $http

			allPatients : null,

			getPatients : function(){
				// initialise une promesse : asynchrone
				var deferred = $q.defer();
				if(factory.allPatients !== null){
					//Deja chargé
					deferred.resolve(factory.allPatients);
				} else {
					// Requête http get
					$http({ method: 'GET', url: 'http://doritosjenkins.cloudapp.net:8000/patients/all'})
					//$http.get('http://doritosjenkins.cloudapp.net:8000/patients/all')
						.success(function(data){
							// OK
							factory.allPatients = data ;
							deferred.resolve(factory.allPatients);
						})
						.error(function(){
							// Erreur
							deferred.reject('Error in call getPatients method : no data');
						});
				}

				// retourne la promesse
				return deferred.promise;
			}

			*/
	return Patients;
}]);