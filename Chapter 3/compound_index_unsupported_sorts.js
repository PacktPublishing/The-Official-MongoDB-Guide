db.companies.find().sort({ "name": 1,"ticker": -1 })
db.companies.find().sort({ "name": -1,"ticker": 1 })
