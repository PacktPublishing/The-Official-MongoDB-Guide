db.movies.aggregate([  
    {  
      "$searchMeta": {  
        "index": "genresFacetedIndex",  
        "facet": {  
          "operator": {  
            "range": {  
                "path": "released",  
                "gte": ISODate("2000-01-01T00:00:00.000Z"),  
                "lte": ISODate("2000-01-31T00:00:00.000Z")  
              },  
            },  
          "facets": {  
            "genresFacet": {  
              "type": "string",  
              "path": "genres"  
            }  
          }  
        }  
      }  
    }  
  ])
