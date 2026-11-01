# ShamPay v35.2 — Bottom Navigation Scroll Clearance

- Fixed the glass navigation to the viewport bottom (left/right 0, centered by auto margins, z-index 1000).
- Added 156px + iOS safe-area bottom padding directly to #content, so last service cards can scroll fully above the bar.
- Removed reliance on #app-only padding; preserves the v35.1 glass lens and icon mappings.
- Updated HTML cache-busting and service-worker references to v35.2.
- DEMO application; verify in Safari and installed PWA on iPhone.
