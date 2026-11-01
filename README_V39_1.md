# ShamPay v39.1 — Account lookup hotfix

- Normalizes both entered and stored Syrian phone numbers for login, signup duplicate checks, recovery and recipient verification.
- Supports Arabic-Indic and Persian digits in phone/PIN input normalization.
- Does not delete, reset, migrate or rewrite stored accounts, balances, transactions, or PIN hashes.
- Cache and asset version bumped to v39.1.

QA: test login/logout on same Safari tab, reload, and verification between two locally stored demo accounts. Existing accounts missing from Safari localStorage cannot be recovered by this patch.
