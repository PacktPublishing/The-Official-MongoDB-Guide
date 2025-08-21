library = client.resources.library

book = {
  'isbn': '301',
  'name': 'Python and MongoDB',
  'meta': {'version': 'MongoDB 8.0'},
  'price': 60  
}

insert_result = library.insert_one(book)
print(insert_result)
