db.adminCommand({
  setQuerySettings: {  
    find: "users",  
    filter: {age: {$gt: 23 }},  
    sort: {age: 1},  
    $db: "test"
  },
  settings: {
    indexHints: {
      ns: {db: "test", coll: "users"},
      allowedIndexes: ["age_1"]
    },
    queryFramework: "classic",
    comment: "Index hint for age_1 index to improve performance"
  }
})
