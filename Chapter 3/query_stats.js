db.getSiblingDB("admin").aggregate( [
   {
      $queryStats: { }
   }
] )
