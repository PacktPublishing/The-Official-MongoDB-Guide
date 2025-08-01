
# Chapter 8: MongoDB Atlas

This chapter explores MongoDB Atlas, its features, and practical workflows for developers and administrators. The code, configuration, and command-line examples provided here illustrate how to manage Atlas resources, automate operations, and secure deployments using best practices.

## Key Topics

- **Atlas Overview**: Organizations, Projects, Clusters, and new features in MongoDB 8.0
- **Atlas UI**: Data Explorer, Atlas Search, dashboards, Performance Advisor
- **Atlas CLI**: Installation, resource management, user and role management, local development
- **Programmatic Access & Automation**: Atlas Admin API, Kubernetes Operator, Terraform Provider, AWS CloudFormation
- **Authentication & Authorization**: Workforce and workload users, SSO, federated identity, API keys, Service Accounts, x.509 certificates, RBAC, built-in and custom roles
- **BI Connector & Data Federation**: Power BI integration, DirectQuery, Atlas SQL Interface

## Snippet Files (in order of appearance)

1. [`atlas_cli_install.sh`](./atlas_cli_install.sh) — Atlas CLI installation
2. [`atlas_users_invite.sh`](./atlas_users_invite.sh) — Invite Atlas user with roles
3. [`atlas_update_org_roles.sh`](./atlas_update_org_roles.sh) — Update organization roles
4. [`atlas_dbusers_create.sh`](./atlas_dbusers_create.sh) — Create database user
5. [`atlas_customDbRoles_create.sh`](./atlas_customDbRoles_create.sh) — Create custom database role
6. [`atlas_k8s_operator.yaml`](./atlas_k8s_operator.yaml) — Example Kubernetes Operator resource definition
7. [`atlas_bi_connector.conf`](./atlas_bi_connector.conf) — BI Connector configuration

Refer to each file for the corresponding code or configuration snippet as described in the chapter. For further details, consult the official MongoDB documentation linked throughout the chapter.

# Notes on Code Snippets in Chapter 8

This folder contains a collection of MongoDB Atlas code snippets and configuration examples for Chapter 8. These files support learning and reference for cloud database management, automation, authentication, authorization, and analytics integration.

## How to Read These Files

- **File Types:**
  - `.sh` files: Shell commands for Atlas CLI or API usage
  - `.yaml` files: Kubernetes Operator resource definitions
  - `.conf` files: Configuration examples for BI Connector and other integrations
  - Other formats: Example API payloads, CLI output, or illustrative configuration

- **Non-Runnable Snippets:**
  - Some files (especially those with placeholder syntax, ellipses (`...`), or incomplete code) are for illustration only. They demonstrate concepts, configuration, or output structure. Use these as templates or references when designing your own queries or tool configurations.

- **Runnable Code:**
  - Most `.sh` files are complete examples and can be run as-is in a suitable test environment. Some scripts assume the existence of certain resources—review and adapt as needed for your setup.

## Best Practices

- Review code before running in a production environment.
- Use these examples as learning aids or starting points for your own MongoDB Atlas projects.
- Refer to the chapter or official documentation for context on each snippet.

## Additional Resources

- [MongoDB Atlas Documentation](https://www.mongodb.com/docs/atlas/)
- [Atlas CLI Documentation](https://www.mongodb.com/docs/atlas/cli/current/)
- [Atlas Admin API](https://www.mongodb.com/docs/atlas/api/atlas-admin-api/)
- [Atlas Kubernetes Operator](https://www.mongodb.com/docs/atlas/operator/v2.7/ak8so-quick-start/)
- [Atlas BI Connector](https://www.mongodb.com/docs/atlas/bi-connector/)
