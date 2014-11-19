# LifeMonitor_DoctorApp


## Installation de node.js
```bash
wget http://nodejs.org/dist/v0.10.4/node-v0.10.4-linux-x64.tar.gz
tar -zxvf node-v0.10.4-linux-x64.tar.gz
sudo mv node-v0.10.4-linux-x64 /opt/node-v0.10.4
sudo ln -s node-v0.10.4/ node
sudo ln -s /opt/node/bin/node /usr/bin/node
sudo ln -s /opt/node/bin/npm /usr/bin/npm
```
ou
```
apt-get install nodejs-legacy
```
Afin de verifier l'installation de node.js :
```bash
node --version && npm --version
```

## Installations avec npm
### Installation de Bower: gestionnaire de dépendances

```bash
sudo npm install -g bower
bower install jquery
bower install angular-ui-router --save
```

### Installation de Grunt
```bash
sudo npm install -g grunt-cli
```

### Installation des dépendances de grunt
*ATTENTION* : Les dépendances du projet font près de 200 Mo.
```bash
npm install
```

## Lancer appli :

```bash
grunt serve
```

## Lancer les tests:

```bash
grunt test
```