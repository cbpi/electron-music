import { app, BrowserWindow, Tray, Menu, ipcMain } from 'electron' // eslint-disable-line
import '../renderer/store'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path') /* eslint no-underscore-dangle: 0 */
    .join(__dirname, '/static')
    .replace(/\\/g, '\\\\') // eslint-disable-line
}

let mainWindow
let loginWindow
const winURL = process.env.NODE_ENV === 'development' ? 'http://localhost:9080' : `file://${__dirname}/index.html`
const loginURL = process.env.NODE_ENV === 'development' ? 'http://localhost:9080/#/login' : `file://${__dirname}/index.html#/login`

function createTray() {
  // 配置小图标 macOS在顶部，window在托盘
  let tray = null
  const menubarPic = process.platform === 'darwin' ? `${__static}/music-os.png` : `${__static}/music-win.png`
  tray = new Tray(menubarPic) // 指定图片的路径
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio' },
    { label: 'Item2', type: 'radio' },
    { label: 'Item3', type: 'radio', checked: true },
    { label: '退出登录', type: 'radio' }
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
}
function createLoginWindow() {
  //  登录窗口
  loginWindow = new BrowserWindow({
    height: 600,
    frame: false,
    useContentSize: true,
    width: 300,
    parent: mainWindow
  })
  loginWindow.loadURL(loginURL)

  loginWindow.on('closed', () => {
    loginWindow = null
  })
}

function closedLoginWindow() {
  loginWindow.close()
}

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 563,
    // frame: false,
    useContentSize: true,
    width: 1000
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
  createTray()
  ipcMain.on('login', createLoginWindow)
  ipcMain.on('closedLogin', closedLoginWindow)
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
