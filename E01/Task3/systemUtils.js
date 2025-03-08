function formatSystemInfo(uptime, totalMemory) {
  return JSON.stringify({
    uptime: uptime + ' seconds',
    totalMemory: totalMemory + ' MB'
  });
}

module.exports = { formatSystemInfo };