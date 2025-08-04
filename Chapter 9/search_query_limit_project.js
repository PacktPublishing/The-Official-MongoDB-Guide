db.movies.aggregate([
  {
    "$search": {
      "index": "plotIndex",
      "text": {
        "query": "space", 
        "path": "plot"
      }
    }
  },
  { "$limit": 3 },
  {
    "$project": {
      "_id": 0,
      "title": 1,
      "plot": 1,
      "score": { "$meta": "searchScore" }
    }
  }
])
