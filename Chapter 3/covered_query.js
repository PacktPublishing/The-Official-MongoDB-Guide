db.companies.find(
  {
    i: 30,
    name: "Company_30"
  },  
  { name: 1, _id: 0 }
).explain("executionStats")
