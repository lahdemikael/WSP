const os = require('os');

function getSystemInfo() {
  return {
    uptime: `${os.uptime()} seconds`,
    totalMemory: `${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`,
    platform: os.platform(),
    architecture: os.arch(),
  };
}

console.log("System Information:", getSystemInfo());