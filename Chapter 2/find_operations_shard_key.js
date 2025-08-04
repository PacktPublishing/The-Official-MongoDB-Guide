db.user.find({ _id: 1 })
db.user.find({ _id: 1, "email": "packt@packt.com" })
db.user.find({ _id: 1, "email": "packt@packt.com", "country": "UK" })
