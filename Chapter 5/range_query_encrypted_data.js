const findResult = await encryptedCollection.find({
  "bill": { $gt: 1000, $lt: 2000 },
});
for await (const doc of findResult) {
  console.log(doc);
}
