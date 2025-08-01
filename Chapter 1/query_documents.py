from pymongo import MongoClient
# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['mydatabase'] # Specify the database name
collection = db['mycollection'] # Specify the collection name
# Retrieve documents based on specific conditions
query = {
  'age': {'$lte': 25}, # Retrieve documents where age is less than or equal to 25
}
documents = collection.find(query)
# Iterate over the retrieved documents
for document in documents:
    print(document)
