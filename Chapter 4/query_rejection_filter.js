db.adminCommand({
   setQuerySettings: {
      find: "users",
      filter: {
         age: { $gt: 24 }
      },
      sort: {
         age: 1
      },
      $db: "test"
   },
   settings: {
      reject: true
   }
})
