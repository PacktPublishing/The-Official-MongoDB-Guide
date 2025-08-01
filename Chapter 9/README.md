# Chapter 9: Atlas Search & Vector Search

This folder contains code snippets, configuration examples, and reference material for Chapter 9 of "Mastering MongoDB 8.0." The chapter focuses on MongoDB Atlas Search and Vector Search, providing hands-on examples and practical workflows for developers and administrators.

## Key Topics

- **Atlas Search Overview**: Full-text search, search indexes, analyzers, field mapping (dynamic/static), compound operators, facets, and advanced features (fuzzy search, autocomplete, synonym mapping, pagination)
- **Atlas Vector Search**: Semantic search, vector embeddings, dense vs. sparse vectors, similarity matching, hybrid search, RAG, and AI agents
- **Search Nodes**: Dedicated infrastructure for search workloads, scaling, and performance optimization
- **Practical Examples**: Creating search indexes, running search queries, using $search and $searchMeta, faceted search, and vector search queries
- **Embedding Generation**: Using Voyage AI and other models to generate vector embeddings for semantic search

## Snippet Files (in order of appearance)

Below is a sorted, linked list of code and configuration snippet files referenced or included in this chapter:
### Python Scripts

- [`data.py`](./data.py) — Example for generating vector embeddings
- [`index.py`](./index.py) — Creating search and vector indexes
- [`search.py`](./search.py) — Running Atlas Search and Vector Search queries

### JavaScript (MongoDB Shell/Aggregation)

- [`create_plot_index.js`](./create_plot_index.js)
- [`create_directors_index.js`](./create_directors_index.js)
- [`create_static_index.js`](./create_static_index.js)
- [`create_dynamic_index.js`](./create_dynamic_index.js)
- [`create_mixed_index.js`](./create_mixed_index.js)
- [`create_genres_faceted_index.js`](./create_genres_faceted_index.js)
- [`compound_operator_query.js`](./compound_operator_query.js)
- [`search_query.js`](./search_query.js)
- [`search_query_limit_project.js`](./search_query_limit_project.js)
- [`search_meta_query.js`](./search_meta_query.js)
- [`faceted_search_query.js`](./faceted_search_query.js)
- [`vector_example.js`](./vector_example.js)

### Shell Scripts

- [`setup_venv_mac.sh`](./setup_venv_mac.sh)
- [`setup_venv_windows.sh`](./setup_venv_windows.sh)
- [`install_voyageai.sh`](./install_voyageai.sh)
- [`install_pymongo.sh`](./install_pymongo.sh)

### BSON/JSON/Other Examples

- [`movie_document.bson`](./movie_document.bson)
- [`search_result_example.bson`](./search_result_example.bson)
- [`search_result_scored_example.bson`](./search_result_scored_example.bson)
- [`search_meta_count_example.bson`](./search_meta_count_example.bson)
- [`faceted_search_result_example.bson`](./faceted_search_result_example.bson)
- [`vector_search_exact_example.bson`](./vector_search_exact_example.bson)
- [`vector_search_results_example.txt`](./vector_search_results_example.txt)
- [`compound_operator_query_example.json`](./compound_operator_query_example.json)

Other illustrative code blocks and configuration examples are included in the chapter text.

Refer to each file for the corresponding code or configuration snippet as described in the chapter. For further details, consult the official MongoDB documentation linked below.

## Notes on Code Snippets in Chapter 9

This folder contains a collection of MongoDB Atlas Search and Vector Search code snippets and configuration examples for Chapter 9. These files support learning and reference for cloud database search, semantic search, AI-powered applications, and analytics integration.

### How to Read These Files

- **File Types:**
  - `.py` files: Python scripts for data processing, embedding generation, and search queries
  - `.js` files: MongoDB Shell or aggregation pipeline examples
  - Other formats: Example API payloads, CLI output, or illustrative configuration

- **Non-Runnable Snippets:**
  - Some files (especially those with placeholder syntax, ellipses (`...`), or incomplete code) are for illustration only. They demonstrate concepts, configuration, or output structure. Use these as templates or references when designing your own queries or tool configurations.

- **Runnable Code:**
  - Most `.py` files are complete examples and can be run as-is in a suitable test environment. Some scripts assume the existence of certain resources—review and adapt as needed for your setup.

## Best Practices

- Review code before running in a production environment.
- Use these examples as learning aids or starting points for your own MongoDB Atlas projects.
- Refer to the chapter or official documentation for context on each snippet.

## Additional Resources

- [MongoDB Atlas Documentation](https://www.mongodb.com/docs/atlas/)
- [Atlas Search Documentation](https://www.mongodb.com/docs/atlas/atlas-search/)
- [Atlas Vector Search Documentation](https://www.mongodb.com/docs/atlas/atlas-vector-search/)
- [Voyage AI Documentation](https://docs.voyageai.com/docs/introduction)
