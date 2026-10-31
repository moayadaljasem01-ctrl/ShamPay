# ShamPay V2 Premium — DEMO

Bilingual Arabic/English progressive web app (PWA) designed for GitHub Pages, including iPhone home-screen support. **Demonstration only**: no real payments, SMS, identity verification, banking, exchange-rate feeds, or agent agreements.

## Install / update

Upload all seven files in this folder to the **root** of the `ShamPay` repository on branch `main`: `index.html`, `style.css`, `app.js`, `manifest.webmanifest`, `icon.svg`, `sw.js`, `README.md`. Replace existing files of the same names. GitHub Pages source must be `main / (root)`. Existing `https://moayadaljasem01-ctrl.github.io/ShamPay/` URL stays the same. Wait for deployment, refresh Safari; if an old version persists, clear site data or remove/re-add the home screen shortcut.

## Demo access

Sign in using +963944000001 and any password of at least 4 characters (not verified, not securely stored). Registration simulates OTP with **123456**, selfie, Syrian ID front/back and funds source **without uploading or storing real documents**. Demo recipients: +963944000002, +963944000003, +963944000004. QR personal and merchant payloads use JSON with demo flag. The QR generator loads via CDN and requires internet the first time; on browsers without `BarcodeDetector`, paste a QR JSON payload manually. iOS Safari may not support BarcodeDetector; scanning is not guaranteed.

## Data / limitations

Demo balances and transactions are stored in browser localStorage, per device/browser; there is no inter-user transfer or server. The user can share receipt text, export CSV, generate receipt PNG via canvas, and use Safari Print > Share > Save to Files for PDF. All receipts are marked DEMO / not proof of payment. Merchant dynamic QR payload expires after 15 minutes for simulation; JSON and Base64 are not encryption and the payload is not signed. No sensitive documents or credentials should be entered.

## Production prerequisites

Licensed financial operations and compliance for Syria; backend, database, authentication, SMS provider, encrypted identity-document storage, human review, privacy notices, consent, audit logs, anti-fraud controls, signed QR tokens, replay protection, payment ledger, reconciliations, exchange-rate providers, and tested Safari-compatible QR scanner. Demo does not constitute a production-ready financial product.
