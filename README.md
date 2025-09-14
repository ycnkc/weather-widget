# Weather Widget

A minimal desktop weather widget built with Electron. <br> **All of the icons, images, and assets were made by me.**
- Supports Day/Night mode  
- Displays temperature and a short weather description  
- Changes icon and background based on the current weather

<p align="flex-start">
  <img src="assets/screenshot1.png" alt="Widget Day Mode" width="340">
  <img src="assets/screenshot2.png" alt="Widget Night Mode" width="340">
</p>

> Currently, this widget fetches weather data **only for Istanbul**.

## Installation & Running

### Requirements

- [Node.js](https://nodejs.org/) (v18+ recommended)  
- npm comes with Node.js  

### Steps

1. Clone the repository:  

```bash
git clone https://github.com/yourusername/weather-widget.git
cd weather-widget
npm install
npm start
 ``` 


### Packaging (Optional)
```bash
npx electron-packager . WeatherWidget --platform=win32 --arch=x64 --icon=assets/sun.ico --overwrite
``` 
  
