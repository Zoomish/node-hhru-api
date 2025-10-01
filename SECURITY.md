# Security Policy

## Supported Versions

We actively maintain the latest version of this package.
Only the most recent **major and minor releases** will receive security updates.

| Version | Supported         |
| ------- | ----------------- |
| 0.x     | ✅ Latest release |
| < 0.x   | ❌ Not supported  |

> ⚠️ As the project evolves towards covering **all hh.ru API endpoints**, we will expand the surface area of supported features. Please always upgrade to the newest release.

---

## Reporting a Vulnerability

If you discover a security vulnerability in this package, **please open a public GitHub issue**.
We will investigate and respond. Critical issues will be prioritized.

---

## Security Best Practices

When using this package in your applications:

- Always provide a **valid `HH-User-Agent`** string that includes your app name and a contact email. HeadHunter rejects requests with invalid or blacklisted user agents.
- Do not hardcode client secrets, tokens, or refresh tokens. Use environment variables or secret managers.
- Rotate tokens regularly using the `refreshUserToken` method.
- Ensure TLS/HTTPS is always used (the package defaults to `https://api.hh.ru`).
- Restrict who can access your CI/CD logs if they contain API tokens.
- Validate all inputs if you pass user data to API calls (e.g., when creating or updating resumes).

---

## Responsible Disclosure

We kindly ask researchers and users to practice **responsible disclosure**:

1. Report vulnerabilities privately first.
2. Allow maintainers to release a fix before publicizing the issue.
3. Credit will be given in release notes if desired.

---
