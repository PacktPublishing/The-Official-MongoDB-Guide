db.movies.aggregate([
    {
      "$searchMeta": {
        "index": "plotIndex",
        "text": {
          "query": "space",
          "path": "plot"
        },
        "count": {
          "type": "total"
        }
      }
    }
  ])
