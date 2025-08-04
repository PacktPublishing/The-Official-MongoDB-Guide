db.adminCommand({
   refineCollectionShardKey: "test.orders",
   key: { customer_id: 1, order_id: 1}
})
