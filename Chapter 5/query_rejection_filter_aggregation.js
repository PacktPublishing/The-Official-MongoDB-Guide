db.aggregate([
  { $querySettings: { showDebugQueryShape: true } },
  { $match: { "settings.reject": true } }
])
