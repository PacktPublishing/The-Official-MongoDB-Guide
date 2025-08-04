db.movies.createSearchIndex(
  "plotIndex",
   {
      "mappings": {
         "fields": {
            "plot": {
               "type": "string"
            }
         }
      }
   }
)
