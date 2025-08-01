db.movies.aggregate([  
  {
    "$search": {
      "index": "plotIndex",
      "compound": {
        "must": [{
          "text": {
            "query": "space",
            "path": "plot"
          }
        }],
        "mustNot": [{
          "text": {
            "query": "aliens",
            "path": "plot"
          }
        }]
      }
    }
  }
])
