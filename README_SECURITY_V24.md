# ShamPay v24 — DEMO session and lock

- Optional remember-me (off by default). On first upgrade from v23, legacy persistent login is cleared without deleting demo accounts.
- Without remember-me, sign-in persists on reload in the same tab via sessionStorage; closing the tab ends the login.
- With remember-me, sign-in persists on this browser/device via localStorage.
- Auto-lock: immediately on background or after 1, 5 (default), 15 minutes. Unlock requires demo PIN.
- Settings > Security center: toggle remember-me, set auto-lock, lock now.
- Logout clears the remembered login; demo accounts and transaction history are retained.
- No Face ID/Touch ID is claimed. Real passkeys require server-side challenge verification and a secure backend.
- All data and authentication are client-side DEMO only; do not use real secrets or funds.
