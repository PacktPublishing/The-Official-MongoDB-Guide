db.library.updateOne(  
  { },
  [
    { $set: { price: { $multiply: ["$price", 0.75] } } }
  ],
  { sort: { price: 1 } }
)
