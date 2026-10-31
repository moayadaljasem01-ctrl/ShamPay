# ShamPay QA — focused repair round (2026-10-31)

## Implemented
- Robust startup fallback and clear boot error message; corrupt account records filtered.
- Chromium smoke test: startup/login render and navigation to signup passed, no page exceptions.
- Optional shake-to-open-QR (disabled by default, iOS motion permission requested from a user gesture, throttled).
- Camera scan remains BarcodeDetector-dependent, with manual payload input and image selection when the browser supports decoding; stop camera when app is hidden.
- Service worker registration on HTTPS, offline cache with fallback, versioned cache, 192/512 PNG PWA icons and Apple touch icon.
- Guard localStorage write failures and notify users.

## Verified
- JavaScript syntax via node --check.
- Chromium UI smoke test using page.set_content plus app.js injection: ready flag true; login visible; signup navigation visible; zero page errors.
- ZIP integrity.

## Not verified / cannot claim passed
- Real iPhone Safari QR decoding (BarcodeDetector not universally supported). There is no bundled cross-browser JS QR decoder; manual payload entry is the supported fallback.
- iPhone accelerometer shake detection and permission, actual camera capture.
- HTTPS-hosted PWA installation, offline cold start and service worker updates on real device.
- Real-world root cause of the *previously published* blank screen; old GitHub Pages build differs from this ZIP.
- Financial-grade security (out of scope: local-only DEMO with no backend), comprehensive stress and multi-tab concurrency testing.

## Release status
**QA preview only; not 100% validated.** Do not claim iPhone/PWA tests passed. No GitHub deployment performed.
