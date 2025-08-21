db.users.aggregate([
  { $sort: { age: -1 } },
  { $limit: 3 }
])
