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

query = "A movie about a life altering event that changes the protagonist's life forever."
query_embedding = vo.embed(query, model="voyage-3-lite", input_type="query").embeddings[0]

pipeline = [
    {
        '$vectorSearch': {
            'index': 'vector_plot_index',
            'path': 'plot_embedding',
            'queryVector': query_embedding,
            'numCandidates': 100,  
            'limit': 10,  
            'filter': {  
                'year': {  
                    '$lt': 1960  
                }  
            },  
        }  
    },  
    {  
      '$project': {  
          'title': 1,  
          'plot': 1,  
          'year': 1,  
          'score': {  
              '$meta': 'vectorSearchScore'  
          }  
      }  
    }  
]

results = full_collection.aggregate(pipeline)
for result in results:
    print(f"Title: {result['title']}, Year: {result['year']}, Score: {result['score']}")
    print(f"Plot: {result['plot']}")