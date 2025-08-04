db.planets.createIndex({ "name": 1, "_id": "hashed" })
sh.shardCollection("sample_guides.planets", {"name": 1, "_id": "hashed" })
