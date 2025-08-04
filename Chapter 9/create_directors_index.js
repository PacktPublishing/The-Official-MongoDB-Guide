db.movies.createSearchIndex(
  "directorsIndex",
  {
    "mappings": {
      "dynamic": false,
      "fields": {  
        "directors": [
          {
            "type": "string"
          },
          {  
            "type": "objectId"  
          }  
        ]
      }  
    }  
  }  
)
