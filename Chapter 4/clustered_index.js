db.createCollection("events", {
  clusteredIndex: {
    key: { _id: 1 },
    unique: true
  }
})
