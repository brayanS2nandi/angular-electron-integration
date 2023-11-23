const {app, BrowserWindow} = require('electron');
const url = require('node:url');
const path = require('node:path'); 

let win;

function onReady() {
    win = new BrowserWindow({width: 800, height: 600});
    win.loadURL(url.format({      
		pathname: path.join(
			__dirname,
			'dist/angular-electron-integration/browser/index.html'),       
		protocol: 'file:',      
	}))   
}

app.on('ready', onReady);