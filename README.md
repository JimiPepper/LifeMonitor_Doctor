LifeMonitor_DoctorApp
=======================


- Installation de node.js
---------------------------

wget http://nodejs.org/dist/v0.10.4/node-v0.10.4-linux-x64.tar.gz
tar -zxvf node-v0.10.4-linux-x64.tar.gz
sudo mv node-v0.10.4-linux-x64 /opt/node-v0.10.4
sudo ln -s node-v0.10.4/ node
sudo ln -s /opt/node/bin/node /usr/bin/node
sudo ln -s /opt/node/bin/npm /usr/bin/npm

//ou

apt-get install nodejs-legacy

> Afin de verifier l'installation de node.js : node --version && npm --version


- Installation package npm
===============================

	- Installation de Yo: générateur de projet
	-------------------------------------------

	> sudo npm install --global yo

	- Installation de Bower: gestionnaire de dépendances
	-------------------------------------------------------

	>  sudo npm install -g bower

	> bower install jquery
	> bower install angular-ui-router --save

	bower install <package> => bower.json
	bower list 									          // liste les librairies existantes
	bower search angular-ui-sortable			// recherche un package
	bower install --save <nomPackage>

	- Installation de Grunt: Lancement des tests, build ..
	-------------------------------------------------------

	> sudo npm install -g grunt-cli


	- Configuration grunt:
	-----------------------

	sudo npm install grunt-autoprefixer
	sudo npm install grunt-contrib-connect
	sudo npm install grunt-contrib-htmlmin
	sudo npm install grunt-contrib-imagemin
	sudo npm install grunt-contrib-jshint
	sudo npm install grunt-contrib-uglify
	sudo npm install grunt-contrib-watch
	sudo npm install grunt-google-cdn
	sudo npm install grunt-newer
	sudo npm install grunt-svgmin
	sudo npm install grunt-ng-annotate

- Construction de l'architecture de l'application:
---------------------------------------------------

> sudo yo
suivre instruction ...


- Lancer appli :
-------------------

grunt serve

- Lancer les tests:
---------------------

Test en karma
grunt test
