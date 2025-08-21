db.companies.find( {
  "meta.employees": { $gte: 20 },
  "name": "Company_45"
} ).sort( { "revenue": -1 } )
