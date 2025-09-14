const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

function createWindow() {
    const { width: screenWidth } = screen.getPrimaryDisplay().workAreaSize;
  const winWidth = 340;
  const winHeight = 340;
  const margin = 10; 

  const win = new BrowserWindow({
    width: 340,
    height: 340,
    x: screenWidth - winWidth - margin,
    y: margin,
    frame: false,
    resizable: false,
    skipTaskbar: true,
    hasShadow: false,
    transparent: true,
    icon: path.join(__dirname, 'assets', 'sun.ico'),
    webPreferences: {
      nodeIntegration: true, 
      contextIsolation: false
    }
  });

  win.loadFile('weather-widget.html'); 
;
}


app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
