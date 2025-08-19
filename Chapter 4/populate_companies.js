use test

for (i = 0; i < 1000; i++) {
  db.companies.insertOne({
    "i": i,
    "name": "Company_" + i,
    "ticker": "CMPY_" + i,
    "revenue": Math.floor(Math.random() * 1000000),
    "created": new Date(),
    "meta": {
      "employees": Math.floor(Math.random() * 100),
      "acquisitions": Math.floor(Math.random() * 5)
    },
    "info": "Lorem ipsum dolor sit amet"
  })
}
