# ShamPay v35.3 — Final Navigation Fix

- Aligned `index.html`, `sw.js` and `app.js` service-worker registration to v35.3.
- Reserved 176px plus iPhone safe area at the end of `#content`, so the last cards can scroll above the fixed navigation.
- Fixed glass bar at the bottom of the viewport with a 64px height and `z-index: 1000`.
- Preserved the liquid lens and the existing screens.

Testing: source checks pass; verify actual Safari and standalone iPhone scrolling visually before release. DEMO only.
