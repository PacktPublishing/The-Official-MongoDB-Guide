import os
import requests
import key_param
from pymongo import MongoClient
import voyageai

vo = voyageai.Client(api_key=key_param.voyage_api_key)

mongodb_client = MongoClient(key_param.mdb_uri)

#  Database name
DB_NAME = "sample_mflix"
# Name of the collection with full documents- used for summarization
FULL_COLLECTION_NAME = "movies"
db = mongodb_client[DB_NAME]
full_collection = db[FULL_COLLECTION_NAME]

chunked_docs = full_collection.find({}, {"plot": 1})

for doc in chunked_docs:
    embedding = vo.embed(doc["plot"], model="voyage-3-lite", input_type="document").embeddings[0]
    print(doc["plot"])
    print(embedding)
    full_collection.update_one({"_id": doc["_id"]}, {"$set": {"plot_embedding": embedding}})
