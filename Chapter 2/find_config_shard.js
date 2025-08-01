db.adminCommand({ 
   listShards: 1
})[ "shards" ].find( element => element._id === "config") 
