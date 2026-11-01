# ShamPay v39 — verified scope

Local-only fictional wallet. No real banking, remote payment, biometric authentication or encrypted financial ledger.

## Added
- Stale-while-revalidate app-shell cache, offline cached fallback, new cache version.
- Online/offline network badge (effective network type where available).
- Privacy overlay on page backgrounding (browser lifecycle best effort).
- CSV export of current account's demo history with spreadsheet formula escaping.
- Clear app cache without removing local accounts, preferences or history.
- Searchable recent recipients from demo transfers, with copy action.
- Ambient night dimming option, optional sound confirmation, haptic best effort.
- Tabular numeric styles, spring-like transitions, reduced-motion support.
- Pending filter chip (existing records are completed; no queue implemented).

## Not implemented / cannot claim
- WebAuthn / Face ID, encrypted IndexedDB, cryptographic ledger, server-backed validation.
- Reliable iOS background sync, real transfer execution, 5-second undo or transaction queue.
- Torch toggle and guaranteed iPhone haptics, account switching across identities.
- Production-grade security or real financial processing.

## QA checklist
1. Sign in and confirm existing local balance and history are retained.
2. Tap small settings gear near lower-left, export CSV, check records.
3. Search recent recipients after a demo transfer.
4. Turn off network, reload after first online visit, confirm offline shell.
5. Clear cache, reconnect and reload; no account deletion.
6. Background and foreground on iPhone; check privacy overlay dismisses.
7. Test Arabic/English, dark/light, screen reader and reduced-motion.
