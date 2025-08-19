db.companies
  .find({name: 'Company_456'})
  .explain('executionStats')
