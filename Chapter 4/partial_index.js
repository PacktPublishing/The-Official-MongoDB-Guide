db.companies.createIndex(
  {
    "meta.employees": 1,
    "name": 1
  },
  {
    partialFilterExpression: {
      "meta.employees": { $gt: 50 }
    }
  }
)
