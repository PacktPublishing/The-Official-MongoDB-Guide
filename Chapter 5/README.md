# Chapter 5: Security

This chapter covers essential MongoDB security concepts, including authentication, authorization, encryption, and deployment hardening. The code and configuration snippets provided here illustrate practical implementations and best practices for securing your MongoDB environment.

## Key Considerations

- **Authentication**: Use robust mechanisms such as SCRAM, X.509, and OIDC for verifying user and application identities. Avoid storing credentials in MongoDB when possible.
- **Authorization**: Apply role-based access control (RBAC) to manage user permissions efficiently. Prefer custom roles for granular access and always follow the principle of least privilege.
- **Encryption**: Protect data at rest, in transit, and in use. Use AES-256 for disk encryption, TLS for network encryption, and field-level or queryable encryption for sensitive data.
- **External Identity Providers**: Integrate with OIDC for modern, token-based authentication and single sign-on. Configure your MongoDB deployment to use trusted identity providers.
- **Network Hardening**: Use firewalls, VPNs, and disable IP forwarding to minimize attack surfaces. Regularly audit and update your security configurations.
- **Key Management**: Store master and data keys securely, preferably using an external key management service. Always have a recovery plan for lost keys.
- **Performance**: Be aware that encryption and security mechanisms may impact performance. Test and monitor your deployment to balance security and efficiency.

## Snippet Files (in order of appearance)

1. [`create_custom_role.js`](./create_custom_role.js)
2. [`generate_master_key.js`](./generate_master_key.js)
3. [`encryption_schema.js`](./encryption_schema.js)
4. [`create_encrypted_collection.js`](./create_encrypted_collection.js)
5. [`insert_encrypted_documents.js`](./insert_encrypted_documents.js)
6. [`range_query_encrypted_data.js`](./range_query_encrypted_data.js)
7. [`range_query_results_example.bson`](./range_query_results_example.bson)
8. [`redact_tags_document_example.bson`](./redact_tags_document_example.bson)
9. [`redact_pipeline_example.js`](./redact_pipeline_example.js)
10. [`redacted_document_example.bson`](./redacted_document_example.bson)
11. [`oidc_setParameter_example.conf`](./oidc_setParameter_example.conf)
12. [`oidc_create_role_example.js`](./oidc_create_role_example.js)

Refer to each file for the corresponding code or configuration snippet as described in the chapter. For further details, consult the official MongoDB documentation linked throughout the chapter.
