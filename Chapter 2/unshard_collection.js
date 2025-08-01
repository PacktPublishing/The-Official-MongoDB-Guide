db.adminCommand ({
   unshardCollection: "clients.us_users",
   toShard: "shard1"
})
