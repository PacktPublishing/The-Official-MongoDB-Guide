db.companies.createIndex( { i: 1, revenue: 1 } )

db.companies.find( {
  i: { $gte: 30 }
} ).sort( { revenue: 1 } )
