db.movies.createSearchIndex(  
    "plotReleasedIndex",  
     {  
        "mappings": {  
          "dynamic": false,  
           "fields": {  
              "plot": {  
                 "type": "string"  
              },  
              "released": {  
                 "type": "embeddedDocument",  
                 "dynamic": true  
              }  
           }  
        }  
     }  
  )
