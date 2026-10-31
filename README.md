# ShamPay Premium — demo candidate

Static offline-capable PWA for GitHub Pages. This is **not** a real wallet or secure financial service. No real SMS, ID verification, payments, cards or NFC are implemented. Use fictitious identities only. Demo PIN hashes and account data reside in browser localStorage and are not secure against local device access.

## Included
Account registration (4 steps), 6-digit demo PIN, 4-digit signup OTP, simulated KYC, account recovery, multi-account demo transfers with recipient lookup, 6-digit transfer OTP, receipts, QR generation, camera scan when BarcodeDetector is supported, QR payload fallback, favorites, payment requests, bill payment simulation, Tap simulation (no NFC), notifications, balance masking, freeze per account, security activity, language/theme, insights and offline cache.

## Deployment
Upload the **contents** of this folder to the repository root and enable GitHub Pages from the main branch root. Do not upload the parent folder. Service worker cache version is shampay-final-candidate-1.

## Limits
All data is browser-local; accounts on different devices cannot transfer to each other. Camera scanning depends on browser support and HTTPS. This candidate has JavaScript syntax checks, but has not been tested on the user's iPhone or subjected to a full end-to-end browser QA. Do not publish as a real financial product.
