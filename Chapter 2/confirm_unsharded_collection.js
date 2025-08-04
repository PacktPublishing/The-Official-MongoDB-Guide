db.aggregate([
   { $shardedDataDistribution: {}},
   { $match: { "ns": "clients.us_users" }}
])
