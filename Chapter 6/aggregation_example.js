const pipeline = [
 // Stage 1: Match customers with purchases greater than 0.00
 {
  "$match": {
   "totalPurchases": { "$gt": 0.00 }
  }
 },  
 // Stage 2: Group by customerId and calculate the average purchase amount  
 {
  "$group": {
   "_id": "$customerId",
   "averagePurchaseAmount": { "$avg": "$totalPurchases" }
  }
 }
];

// Execute the aggregation pipeline  
return customersCollection.aggregate(pipeline).toArray()  
 .then(customers => {
   console.log(`Successfully calculated average purchase amount for ${customers.length} customers.`)  
  for(const customer of customers) {
   console.log(`customer: ${customer._id}`)
   console.log(`average purchase amount: ${customer.averagePurchaseAmount}`)
  }
  return customers
 })
