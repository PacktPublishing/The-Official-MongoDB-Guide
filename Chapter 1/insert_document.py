from pymongo import MongoClient
# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['mydatabase'] # Specify the database name
collection = db['mycollection'] # Specify the collection name
# Create a document to be inserted
document = {
   'name': 'Chinazom',
   'email': 'chinazom@example.com'
}
# Insert the document into the collection
result = collection.insert_one(document)
# Check if the insertion was successful
if result.acknowledged:
    print('Document inserted successfully.')
    print('Inserted document ID:', result.inserted_id)
else:
    print('Failed to insert document.')
