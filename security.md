---
label: Security
icon: shield
order: 300
---

The following are recommendations for better site security. This list will grow and change over time and is not meant to be comprehensive.

---

### Always enforce strong passwords

Always enforce strong passwords. By default, some frameworks like WordPress do not enforce strong passwords. In those cases, make sure to use a plugin or custom solution to enforce a strong password policy. Entermedia recommends using randomly generated passwords from a password manager application.

### Use multi-factor authentication for administrator accounts

Use multi-factor (MFA) or Two factor (2FA) for admin level accounts. Multi-factor can prevent an attacker when a password is exposed. We do not recommend SMS based authentication methods due to increased risk from sim hijacking and social engineering.

### X-Frame-Options set to SAMEORIGIN

By default, always set the `X-Frame-Options` header to `SAMEORIGIN`. This can help protect against clickjacking attacks.
