# Notes on Code Snippets in Chapter 2

This folder contains a collection of MongoDB code snippets, BSON document examples, and shell scripts for Chapter 2. These files are intended to support learning and reference for MongoDB sharding, configuration, and operational commands.

## How to Read These Files

- **File Types:**
  - `.js` files: Contain MongoDB Shell commands or JavaScript code. Most are runnable directly in the MongoDB Shell or a compatible environment.
  - `.bson` files: Contain example BSON documents, excerpts, or schema patterns. These are not runnable scripts, but illustrate document structure, data types, or configuration patterns in MongoDB.


- **Non-Runnable Snippets:**
  - Some files (especially `.bson` or those with partial documents) are for illustration only, showing command structure, configuration, or document patterns. These may include placeholder values or comments to indicate example data.
  - Use these as templates or references for your own MongoDB operations or schema designs.


- **Runnable Code:**
  - Most `.js` files are complete commands or scripts and can be run as-is, provided you have a suitable MongoDB environment.
  - Some scripts assume the existence of certain clusters, collections, or configurations. Review the code and adapt as needed for your setup.

## Best Practices

- Always review code before running it in a production environment.
- Use the examples as learning aids or starting points for your own MongoDB projects.
- Refer to the chapter or section in the documentation for context on each snippet.

## Snippet Files (in order of appearance)

1. [`background_compaction_command.js`](./background_compaction_command.js)
2. [`clear_jumbo_flag_bounds.js`](./clear_jumbo_flag_bounds.js)
3. [`clear_jumbo_flag_find.js`](./clear_jumbo_flag_find.js)
4. [`compaction_command.js`](./compaction_command.js)
5. [`compound_hashed_index_and_shard.js`](./compound_hashed_index_and_shard.js)
6. [`config_shard_output.bson`](./config_shard_output.bson)
7. [`confirm_unsharded_collection.js`](./confirm_unsharded_collection.js)
8. [`convert_to_config_shard.js`](./convert_to_config_shard.js)
9. [`convert_to_dedicated_config_server.js`](./convert_to_dedicated_config_server.js)
10. [`delayed_member_config.js`](./delayed_member_config.js)
11. [`find_config_shard.js`](./find_config_shard.js)
12. [`find_operations_shard_key.js`](./find_operations_shard_key.js)
13. [`hidden_member_config.js`](./hidden_member_config.js)
14. [`list_shards.js`](./list_shards.js)
15. [`mirrored_reads_disable.js`](./mirrored_reads_disable.js)
16. [`refine_shard_key.js`](./refine_shard_key.js)
17. [`reshard_storage_requirement.js`](./reshard_storage_requirement.js)
18. [`resize_oplog_command.js`](./resize_oplog_command.js)
