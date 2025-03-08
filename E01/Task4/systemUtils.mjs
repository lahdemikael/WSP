function formatSystemInfo(uptime, totalMemory) {
    return JSON.stringify({
      uptime: uptime + ' seconds',
      totalMemory: totalMemory + ' MB'
    });
  }
  
  export { formatSystemInfo };