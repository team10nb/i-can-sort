const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let mainWindow

function createWindow () {
mainWindow = new BrowserWindow({
    width: 1050,
    height: 700,
    resizable: false,
    maximizable: false,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      preload: path.join(__dirname, 'preload.js')
    },
  })

mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

mainWindow.removeMenu();

mainWindow.setTitle("iCanSort");

mainWindow.on('closed', function () {
    mainWindow = null
  })

mainWindow.on('page-title-updated', (evt) => {
  evt.preventDefault();
});
}


app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

app.whenReady().then(() => {
  protocol.interceptFileProtocol('file', (req, callback) => {
    const url = req.url.substr(8);
    callback(slash(decodeURI(url)));
  }, (error) => {
    if (error) {
      console.error('Failed to register protocol');
    }
  });
})
