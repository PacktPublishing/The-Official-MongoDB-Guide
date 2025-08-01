db.movies.aggregate([
    {
      "$search": {
        "index": "plotIndex",
        "text": {
          "query": "space",
          "path": "plot"
        }
      }
    }
  ])
