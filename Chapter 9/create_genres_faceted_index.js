db.movies.createSearchIndex(
    "genresFacetedIndex",
    {
      "mappings": {
        "dynamic": false,
        "fields": {
          "genres": {
            "type": "stringFacet"
          },
          "released": {
            "type": "date"
          }
        }
      }
    }
  )
