db.inventory.aggregate( [
  {
    $set: {
      price: {
        $convert: {
          input: "$price",
          to: "string",  
        }
      }
    }
  }
] )
