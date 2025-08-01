import key_param
import pymongo
from pymongo.mongo_client import MongoClient
from pymongo.operations import SearchIndexModel

mongodb_client = MongoClient(key_param.mdb_uri)

#  Database name
DB_NAME = "sample_mflix"
# Name of the collection with full documents- used for summarization
FULL_COLLECTION_NAME = "movies"

db = mongodb_client[DB_NAME]
full_collection = db[FULL_COLLECTION_NAME]
search_index_model = SearchIndexModel(
  definition={
    "fields": [
      {
        "type": "vector",
        "similarity": "cosine"
      },
      {
        "type": "filter",
        "path": "year"
      }
    ]
  },
  name="vector_plot_index",
  type="vectorSearch"
)

full_collection.create_search_index(search_index_model)
print("Index created successfully")
