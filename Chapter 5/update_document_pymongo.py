update_result = library.update_one(
  { "name": "Advanced MongoDB Techniques"},
  { "$set": { "price": 75 } }
)

print(update_result.raw_result)

updated_document = library.find_one(
  {"name": "Advanced MongoDB Techniques"}
)

print(updated_document)
