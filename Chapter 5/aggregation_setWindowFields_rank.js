db.sales.aggregate( [
   {
      $setWindowFields: {
         partitionBy: "$state",
         sortBy: { quantity: -1 },
         output: {
            rankQuantityForState: {
               $rank: {}
            }
         }
      }
   }
] )
