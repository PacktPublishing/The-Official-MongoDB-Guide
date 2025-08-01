db.companies.createIndex(
  { "created": 1 },
  { expireAfterSeconds: 86400 }
)
