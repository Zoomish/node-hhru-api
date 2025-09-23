# Security Policy

## Supported Versions

We actively maintain the latest release of **`node-hhru-api`**. Security updates will only be provided for the most recent version.
Older versions will not receive security fixes unless explicitly stated.

| Version  | Supported |
| -------- | --------- |
| Latest   | ✅         |
| < Latest | ❌         |

## Reporting a Vulnerability

If you discover a security vulnerability, please help us keep the ecosystem safe by reporting it responsibly:

+**Please open a public GitHub issue.**
## Scope

This project is designed to provide a **Node.js client for the [hh.ru API](https://api.hh.ru/)**.
As the project evolves, new endpoints will be supported, including but not limited to:

* Authorization & token refresh
* User data
* Employer & vacancies
* Resumes
* Other hh.ru API methods

All API request wrappers added in the future will follow the same security review process.

## Security Best Practices

* Always use the latest version of the library.
* Do not expose your `client_secret` or `access_token` in public repositories or logs.
* Use environment variables for sensitive credentials.
* Rotate tokens regularly.
* When implementing authentication flows, always use **HTTPS** and secure redirect URIs.

## Coordinated Disclosure

We strongly encourage **coordinated disclosure**. If a vulnerability is confirmed, we will:

* Publish a security advisory on GitHub.
* Release a patched version as quickly as possible.
* Credit the reporter (unless anonymity is requested).

---
