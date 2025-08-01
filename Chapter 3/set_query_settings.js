db.adminCommand( {
  setQuerySettings: {
    find: "companies",
    filter: {
      i: { $gte: 30 }
    },
    sort: {
      revenue: 1
    },
    $db: "test"
   },
   settings: {
    indexHints: {
       ns: { db: "test", coll: "companies" },
       allowedIndexes: [ "i_1_revenue_1" ]
    },
    queryFramework: "classic",
    comment: "Index hint for i_1_revenue_1 index to improve query performance"
   }
} )
