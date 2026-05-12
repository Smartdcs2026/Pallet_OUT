/* =====================================================
 * Pallet OUT System
 * File: style.css
 * Mobile Compact Optimized
 * ===================================================== */

/* =========================
   ROOT / RESET
========================= */

:root {
  --bg: #f4f7f6;
  --surface: #ffffff;
  --surface-soft: #f8fafc;
  --text: #0f172a;
  --muted: #64748b;
  --border: #dbe3ea;

  --primary: #0f766e;
  --primary-dark: #115e59;
  --primary-soft: #ccfbf1;

  --danger: #dc2626;
  --danger-soft: #fee2e2;

  --warning: #f59e0b;
  --warning-soft: #fef3c7;

  --success: #16a34a;
  --success-soft: #dcfce7;

  --chep: #005bbb;
  --loscam: #ef7d00;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;

  --shadow-sm: 0 2px 8px rgba(15, 23, 42, 0.07);
  --shadow-md: 0 8px 22px rgba(15, 23, 42, 0.11);

  --font-main: "Noto Sans Thai", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

* {
  box-sizing: border-box;
}

html {
  width: 100%;
  min-height: 100%;
  -webkit-text-size-adjust: 100%;
  scroll-behavior: smooth;
}

body {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  font-family: var(--font-main);
  color: var(--text);
  background:
    radial-gradient(circle at top left, rgba(15, 118, 110, 0.12), transparent 28rem),
    linear-gradient(180deg, #eef7f5 0%, var(--bg) 42%, #eef2f7 100%);
}

button,
input,
textarea,
select {
  font-family: inherit;
}

button {
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.65;
}

img {
  max-width: 100%;
  display: block;
}

.isHidden {
  display: none !important;
}

.appRoot {
  min-height: 100vh;
}

.noscriptBox {
  margin: 12px;
  padding: 12px 14px;
  border-radius: var(--radius-md);
  background: var(--danger-soft);
  color: #7f1d1d;
  font-weight: 800;
  border: 1px solid #fecaca;
}


/* =========================
   BUTTONS
========================= */

.primaryBtn,
.secondaryBtn,
.iconBtn {
  min-height: 40px;
  border-radius: 999px;
  border: 1px solid transparent;
  padding: 9px 14px;
  font-size: 0.92rem;
  font-weight: 800;
  line-height: 1.15;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease,
    background 0.15s ease,
    border-color 0.15s ease;
}

.primaryBtn {
  color: #ffffff;
  background: var(--primary);
  box-shadow: 0 6px 16px rgba(15, 118, 110, 0.2);
}

.primaryBtn:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
}

.secondaryBtn {
  color: var(--primary-dark);
  background: #ffffff;
  border-color: #99f6e4;
}

.secondaryBtn:hover {
  background: var(--primary-soft);
  border-color: #5eead4;
}

.iconBtn {
  min-height: 36px;
  color: var(--primary-dark);
  background: var(--primary-soft);
  border-color: #99f6e4;
  padding-inline: 11px;
}

.smallBtn {
  min-height: 34px;
  padding: 7px 11px;
  font-size: 0.82rem;
}


/* =========================
   LOGIN
========================= */

.loginView {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 18px;
}

.loginCard {
  width: min(100%, 430px);
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(219, 227, 234, 0.9);
  border-radius: 22px;
  box-shadow: var(--shadow-md);
  padding: 20px;
}

.loginBrand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.brandMark,
.brandMiniMark {
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  color: #ffffff;
  background: linear-gradient(135deg, var(--primary), #14b8a6);
  box-shadow: 0 7px 16px rgba(15, 118, 110, 0.22);
  font-weight: 900;
}

.brandMark {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  font-size: 1.45rem;
}

.brandMiniMark {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  font-size: 1.06rem;
}

.loginBrand h1 {
  margin: 0;
  font-size: 1.22rem;
  line-height: 1.22;
  font-weight: 900;
  color: var(--text);
}

.loginBrand p {
  margin: 1px 0 0;
  color: var(--muted);
  font-size: 0.88rem;
  font-weight: 800;
  letter-spacing: 0.03em;
}

.loginInfoBox {
  display: grid;
  gap: 3px;
  padding: 12px;
  background: var(--surface-soft);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  margin-bottom: 14px;
}

.loginInfoBox strong {
  font-size: 0.98rem;
}

.loginInfoBox span {
  color: var(--muted);
  font-size: 0.88rem;
}

.loginForm {
  display: grid;
  gap: 9px;
}

.loginForm label {
  font-weight: 800;
  color: #334155;
}

.passwordWrap {
  display: flex;
  gap: 7px;
}

.passwordWrap input {
  flex: 1;
}

.loginForm input,
.searchBox input,
.dialogInput,
.dialogTextarea {
  width: 100%;
  min-height: 42px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  background: #ffffff;
  color: var(--text);
  padding: 9px 12px;
  font-size: 0.96rem;
  outline: none;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease,
    background 0.15s ease;
}

.loginForm input:focus,
.searchBox input:focus,
.dialogInput:focus,
.dialogTextarea:focus {
  border-color: #2dd4bf;
  box-shadow: 0 0 0 3px rgba(45, 212, 191, 0.16);
}

.loginFootnote {
  margin-top: 14px;
  color: var(--muted);
  font-size: 0.78rem;
  text-align: center;
}


/* =========================
   MAIN LAYOUT
========================= */

.mainView {
  min-height: 100vh;
  padding: 10px;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: min(1180px, 100%);
  margin: 0 auto 10px;
  padding: 10px;
  border: 1px solid rgba(219, 227, 234, 0.9);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(12px);
  box-shadow: var(--shadow-sm);
}

.topbarLeft,
.topbarRight {
  display: flex;
  align-items: center;
  gap: 8px;
}

.topbarLeft {
  min-width: 0;
}

.topbarTitle {
  min-width: 0;
}

.topbarTitle h1 {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.1;
  font-weight: 900;
  white-space: nowrap;
}

.topbarTitle p {
  margin: 1px 0 0;
  color: var(--muted);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.03em;
}

.userBadge {
  display: grid;
  gap: 0;
  min-width: 104px;
  padding: 6px 10px;
  border-radius: 999px;
  background: var(--surface-soft);
  border: 1px solid var(--border);
}

.userBadge .userLabel {
  color: var(--muted);
  font-size: 0.68rem;
  font-weight: 700;
}

.userBadge strong {
  color: var(--text);
  font-size: 0.86rem;
  font-weight: 900;
  line-height: 1.12;
}


/* =========================
   TOOLBAR
========================= */

.toolbar {
  width: min(1180px, 100%);
  margin: 0 auto 10px;
  padding: 10px;
  border: 1px solid rgba(219, 227, 234, 0.9);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: var(--shadow-sm);
}

.toolbarMain {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  align-items: end;
}

.searchBox {
  display: grid;
  gap: 5px;
}

.searchBox label {
  color: #334155;
  font-size: 0.82rem;
  font-weight: 900;
}

.toolbarActions {
  display: flex;
  justify-content: flex-end;
}

.summaryPanel {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  margin-top: 10px;
}

.summaryItem {
  display: grid;
  gap: 2px;
  padding: 9px 10px;
  border-radius: var(--radius-md);
  background: var(--surface-soft);
  border: 1px solid var(--border);
}

.summaryItem span {
  color: var(--muted);
  font-size: 0.74rem;
  font-weight: 800;
}

.summaryItem strong {
  color: var(--text);
  font-size: 1.06rem;
  font-weight: 900;
}


/* =========================
   STATUS / EMPTY
========================= */

.statusBox,
.emptyState {
  width: min(1180px, 100%);
  margin: 0 auto 10px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.94);
  border-radius: 18px;
  box-shadow: var(--shadow-sm);
}

.statusBox {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  min-height: 58px;
  color: var(--muted);
  font-weight: 800;
}

.spinner {
  width: 20px;
  height: 20px;
  border-radius: 999px;
  border: 3px solid #ccfbf1;
  border-top-color: var(--primary);
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.emptyState {
  display: grid;
  place-items: center;
  gap: 7px;
  padding: 22px 14px;
  text-align: center;
}

.emptyIcon {
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  border-radius: 999px;
  background: var(--success-soft);
  color: var(--success);
  font-size: 1.5rem;
  font-weight: 900;
}

.emptyState h2 {
  margin: 0;
  font-size: 1.02rem;
}

.emptyState p {
  max-width: 620px;
  margin: 0;
  color: var(--muted);
  font-size: 0.86rem;
}


/* =========================
   INBOUND LIST / CARDS
========================= */

.contentWrap {
  width: min(1180px, 100%);
  margin: 0 auto;
}

.inboundList {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  padding-bottom: 22px;
}

.inboundCard {
  display: grid;
  gap: 9px;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(219, 227, 234, 0.95);
  border-radius: 18px;
  box-shadow: var(--shadow-sm);
  padding: 12px;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease,
    border-color 0.15s ease;
}

.inboundCard:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
  border-color: #99f6e4;
}

.cardHeader {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
}

.plateText {
  color: var(--text);
  font-size: 1.32rem;
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: 0.01em;
}

.autoIdText {
  margin-top: 2px;
  color: var(--muted);
  font-size: 0.78rem;
  font-weight: 800;
}

.brandBadge {
  flex: 0 0 auto;
  min-width: 68px;
  text-align: center;
  border-radius: 999px;
  padding: 5px 8px;
  color: #ffffff;
  font-size: 0.74rem;
  font-weight: 900;
  letter-spacing: 0.03em;
  line-height: 1.1;
}

.brandLoscam {
  background: var(--loscam);
}

.brandChep {
  background: var(--chep);
}

.cardBody {
  border-top: 1px dashed var(--border);
  border-bottom: 1px dashed var(--border);
  padding: 8px 0;
}

.infoGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px 10px;
}

.infoItem {
  min-width: 0;
  display: grid;
  gap: 1px;
}

.infoItem span {
  color: var(--muted);
  font-size: 0.72rem;
  font-weight: 800;
}

.infoItem strong {
  min-width: 0;
  color: var(--text);
  font-size: 0.86rem;
  font-weight: 900;
  line-height: 1.22;
  overflow-wrap: anywhere;
}

.cardActions {
  display: flex;
  justify-content: flex-end;
}

.cardActions .primaryBtn {
  width: 100%;
  min-height: 38px;
}


/* =========================
   SWEETALERT CUSTOM
========================= */

.swal2-container {
  padding: 8px !important;
}

.swal2-popup {
  font-family: var(--font-main) !important;
  border-radius: 20px !important;
  width: min(860px, calc(100vw - 16px)) !important;
  max-height: calc(100dvh - 16px) !important;
  overflow: hidden !important;
  padding: 14px !important;
}

.swal2-title {
  font-size: 1.15rem !important;
  font-weight: 900 !important;
  color: var(--text) !important;
  padding: 0 6px !important;
}

.swal2-html-container {
  margin: 0.6em 0 0 !important;
  color: var(--text) !important;
  max-height: calc(100dvh - 138px) !important;
  overflow-y: auto !important;
  overflow-x: hidden !important;
  padding: 0 3px 4px !important;
}

.swal2-actions {
  gap: 8px !important;
  margin-top: 10px !important;
}

.swal2-confirm,
.swal2-cancel {
  border-radius: 999px !important;
  padding: 9px 16px !important;
  font-weight: 900 !important;
}

.swal2-confirm {
  background: var(--primary) !important;
}

.swal2-cancel {
  background: #e2e8f0 !important;
  color: #334155 !important;
}

.swal2-validation-message {
  border-radius: var(--radius-md) !important;
  background: var(--danger-soft) !important;
  color: #7f1d1d !important;
  font-weight: 800 !important;
}


/* =========================
   RECORD OUT DIALOG
========================= */

.outDialog {
  display: grid;
  gap: 10px;
  text-align: left;
}

.dialogSection {
  display: grid;
  gap: 10px;
  padding: 12px;
  border-radius: 16px;
  border: 1px solid var(--border);
  background: var(--surface-soft);
}

.dialogSection h3 {
  margin: 0;
  color: var(--primary-dark);
  font-size: 0.96rem;
  font-weight: 900;
}

.dialogInfoGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
}

.dialogInfoItem {
  display: grid;
  gap: 1px;
  min-width: 0;
  padding: 8px 9px;
  border-radius: var(--radius-sm);
  background: #ffffff;
  border: 1px solid #e2e8f0;
}

.dialogInfoItem span {
  color: var(--muted);
  font-size: 0.7rem;
  font-weight: 800;
}

.dialogInfoItem strong {
  color: var(--text);
  font-size: 0.84rem;
  font-weight: 900;
  line-height: 1.2;
  overflow-wrap: anywhere;
}

.fieldGroup {
  display: grid;
  gap: 7px;
}

.fieldGroup label {
  color: #334155;
  font-size: 0.86rem;
  font-weight: 900;
}

.fieldGroup label em {
  color: var(--danger);
  font-style: normal;
}

.helpText {
  color: var(--muted);
  font-size: 0.73rem;
  line-height: 1.28;
}

.dialogTextarea {
  min-height: 72px;
  resize: vertical;
}

.dialogNotice {
  padding: 8px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 800;
  line-height: 1.32;
  border: 1px solid transparent;
}

.dialogNotice-info {
  background: #eff6ff;
  color: #1d4ed8;
  border-color: #bfdbfe;
}

.dialogNotice-success {
  background: var(--success-soft);
  color: #166534;
  border-color: #bbf7d0;
}

.dialogNotice-warning {
  background: var(--warning-soft);
  color: #92400e;
  border-color: #fde68a;
}

.dialogNotice-error {
  background: var(--danger-soft);
  color: #7f1d1d;
  border-color: #fecaca;
}


/* =========================
   BRAND SELECT
========================= */

.brandSelectGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 9px;
}

.brandOption {
  position: relative;
  display: grid;
  grid-template-rows: minmax(96px, auto) auto;
  gap: 6px;
  place-items: center;
  min-height: 142px;
  padding: 9px;
  border: 2px solid var(--border);
  border-radius: 16px;
  background: #ffffff;
  color: var(--text);
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease,
    transform 0.15s ease,
    background 0.15s ease;
}

.brandOption:hover {
  border-color: #5eead4;
  transform: translateY(-1px);
}

.brandOption.isSelected {
  border-color: var(--primary);
  background: #f0fdfa;
  box-shadow: 0 0 0 3px rgba(45, 212, 191, 0.16);
}

.brandOption.isSelected::after {
  content: "เลือกแล้ว";
  position: absolute;
  top: 7px;
  right: 7px;
  padding: 3px 7px;
  border-radius: 999px;
  background: var(--primary);
  color: #ffffff;
  font-size: 0.66rem;
  font-weight: 900;
}

.brandImageBox {
  display: grid;
  place-items: center;
  width: 100%;
  height: 96px;
  border-radius: 13px;
  background: #ffffff;
  border: 1px solid #dbe3ea;
  overflow: hidden;
}

.brandImageBox img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: center;
  padding: 2px;
}

.brandImageBox span {
  color: var(--muted);
  font-weight: 900;
}

.brandOption strong {
  font-size: 0.96rem;
  line-height: 1.05;
  font-weight: 900;
  letter-spacing: 0.03em;
}

.optionMissing {
  grid-column: 1 / -1;
  padding: 10px;
  border-radius: var(--radius-md);
  background: var(--warning-soft);
  color: #92400e;
  font-weight: 800;
  text-align: center;
}


/* =========================
   QTY SELECT
========================= */

.qtySelectGrid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 7px;
}

.qtyChip {
  min-width: 0;
  min-height: 38px;
  padding: 7px 8px;
  border-radius: 999px;
  border: 2px solid var(--border);
  background: #ffffff;
  color: var(--text);
  font-size: 0.86rem;
  font-weight: 900;
  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    box-shadow 0.15s ease,
    transform 0.15s ease;
}

.qtyChip:hover {
  border-color: #5eead4;
  transform: translateY(-1px);
}

.qtyChip.isSelected {
  border-color: var(--primary);
  background: #f0fdfa;
  color: var(--primary-dark);
  box-shadow: 0 0 0 3px rgba(45, 212, 191, 0.16);
}


/* =========================
   EVIDENCE / IMAGE INPUT
========================= */

.hiddenFileInput {
  position: fixed;
  left: -9999px;
  top: -9999px;
  width: 1px;
  height: 1px;
  opacity: 0;
}

.evidenceControl {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
  align-items: center;
}

.evidenceControl .secondaryBtn {
  width: 100%;
  min-height: 40px;
}

.evidenceCount {
  grid-column: 1 / -1;
  display: block;
  padding: 7px 9px;
  border-radius: 11px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  color: var(--muted);
  text-align: center;
  font-size: 0.8rem;
  font-weight: 800;
}

.evidencePreviewGrid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 7px;
}

.evidenceThumb {
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: #e2e8f0;
}

.evidenceThumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.removeEvidenceBtn {
  position: absolute;
  top: 4px;
  right: 4px;
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  border-radius: 999px;
  border: 0;
  background: rgba(220, 38, 38, 0.94);
  color: #ffffff;
  font-size: 1.05rem;
  font-weight: 900;
  line-height: 1;
}


/* =========================
   INLINE CAMERA
========================= */

.inlineCameraPanel {
  display: grid;
  gap: 8px;
  padding: 8px;
  border-radius: 16px;
  border: 1px solid #99f6e4;
  background: #f0fdfa;
}

.inlineCameraVideo {
  display: block;
  width: 100%;
  height: clamp(190px, 38dvh, 430px);
  max-height: 430px;
  border-radius: 14px;
  background: #020617;
  object-fit: contain;
  border: 1px solid #dbe3ea;
}

.inlineCameraCanvas {
  display: none;
}

.inlineCameraActions {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
}

.inlineCameraActions button {
  width: 100%;
}


/* =========================
   SUCCESS SUMMARY
========================= */

.successSummary {
  display: grid;
  gap: 7px;
  max-width: 460px;
  margin: 0 auto;
  text-align: left;
}

.successSummary div {
  display: grid;
  grid-template-columns: 108px 1fr;
  gap: 7px;
  padding: 8px 9px;
  border-radius: var(--radius-sm);
  background: var(--surface-soft);
  border: 1px solid var(--border);
}

.successSummary span {
  color: var(--muted);
  font-weight: 800;
  font-size: 0.78rem;
}

.successSummary strong {
  color: var(--text);
  font-weight: 900;
  font-size: 0.84rem;
  overflow-wrap: anywhere;
}


/* =========================
   RESPONSIVE TABLET
========================= */

@media (max-width: 900px) {
  .inboundList {
    grid-template-columns: 1fr;
  }

  .toolbarMain {
    grid-template-columns: 1fr;
  }

  .toolbarActions {
    justify-content: stretch;
  }

  .toolbarActions .secondaryBtn {
    width: 100%;
  }
}


/* =========================
   RESPONSIVE MOBILE
========================= */

@media (max-width: 640px) {
  body {
    background:
      radial-gradient(circle at top left, rgba(15, 118, 110, 0.1), transparent 20rem),
      linear-gradient(180deg, #eef7f5 0%, var(--bg) 48%, #eef2f7 100%);
  }

  .mainView {
    padding: 6px;
  }

  .loginView {
    padding: 10px;
  }

  .loginCard {
    padding: 15px;
    border-radius: 18px;
  }

  .loginBrand {
    gap: 9px;
    margin-bottom: 12px;
  }

  .brandMark {
    width: 44px;
    height: 44px;
    border-radius: 14px;
    font-size: 1.22rem;
  }

  .loginBrand h1 {
    font-size: 1.02rem;
  }

  .loginBrand p {
    font-size: 0.76rem;
  }

  .loginInfoBox {
    padding: 10px;
    margin-bottom: 11px;
  }

  .loginInfoBox span {
    font-size: 0.8rem;
  }

  .passwordWrap {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 6px;
  }

  .loginForm input,
  .searchBox input,
  .dialogInput,
  .dialogTextarea {
    min-height: 39px;
    padding: 8px 10px;
    font-size: 0.9rem;
  }

  .topbar {
    gap: 6px;
    border-radius: 16px;
    padding: 8px;
    margin-bottom: 7px;
  }

  .brandMiniMark {
    width: 34px;
    height: 34px;
    border-radius: 11px;
    font-size: 0.96rem;
  }

  .topbarTitle h1 {
    font-size: 0.92rem;
  }

  .topbarTitle p {
    font-size: 0.68rem;
  }

  .topbarRight {
    gap: 5px;
    flex-shrink: 0;
  }

  .userBadge {
    min-width: 76px;
    max-width: 92px;
    padding: 5px 7px;
  }

  .userBadge .userLabel {
    font-size: 0.62rem;
  }

  .userBadge strong {
    font-size: 0.76rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .smallBtn {
    min-height: 31px;
    padding: 6px 8px;
    font-size: 0.72rem;
  }

  .toolbar {
    border-radius: 16px;
    padding: 8px;
    margin-bottom: 7px;
  }

  .toolbarMain {
    gap: 7px;
  }

  .searchBox {
    gap: 4px;
  }

  .searchBox label {
    font-size: 0.76rem;
  }

  .summaryPanel {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 6px;
    margin-top: 7px;
  }

  .summaryItem {
    padding: 7px 8px;
  }

  .summaryItem span {
    font-size: 0.68rem;
  }

  .summaryItem strong {
    font-size: 0.94rem;
  }

  .statusBox {
    min-height: 48px;
    border-radius: 15px;
    margin-bottom: 7px;
  }

  .inboundList {
    gap: 7px;
    padding-bottom: 16px;
  }

  .inboundCard {
    border-radius: 15px;
    padding: 9px;
    gap: 7px;
  }

  .plateText {
    font-size: 1.08rem;
  }

  .autoIdText {
    font-size: 0.7rem;
  }

  .brandBadge {
    min-width: 58px;
    padding: 4px 7px;
    font-size: 0.66rem;
  }

  .cardBody {
    padding: 7px 0;
  }

  .infoGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 6px 8px;
  }

  .infoItem span {
    font-size: 0.66rem;
  }

  .infoItem strong {
    font-size: 0.78rem;
    line-height: 1.15;
  }

  .cardActions .primaryBtn {
    min-height: 36px;
    font-size: 0.86rem;
  }

  .swal2-container {
    padding: 5px !important;
  }

  .swal2-popup {
    width: calc(100vw - 10px) !important;
    max-height: calc(100dvh - 10px) !important;
    border-radius: 16px !important;
    padding: 9px !important;
  }

  .swal2-title {
    font-size: 1rem !important;
    padding: 0 4px !important;
  }

  .swal2-html-container {
    margin-top: 0.45em !important;
    max-height: calc(100dvh - 118px) !important;
    padding-inline: 0 !important;
  }

  .swal2-actions {
    margin-top: 8px !important;
    gap: 6px !important;
  }

  .swal2-confirm,
  .swal2-cancel {
    padding: 8px 14px !important;
    font-size: 0.9rem !important;
  }

  .outDialog {
    gap: 8px;
  }

  .dialogSection {
    padding: 8px;
    border-radius: 14px;
    gap: 8px;
  }

  .dialogSection h3 {
    font-size: 0.9rem;
  }

  .dialogInfoGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 6px;
  }

  .dialogInfoItem {
    padding: 6px 7px;
    border-radius: 9px;
  }

  .dialogInfoItem span {
    font-size: 0.64rem;
  }

  .dialogInfoItem strong {
    font-size: 0.76rem;
    line-height: 1.15;
  }

  .fieldGroup {
    gap: 6px;
  }

  .fieldGroup label {
    font-size: 0.8rem;
  }

  .helpText {
    font-size: 0.67rem;
    line-height: 1.22;
  }

  .dialogNotice {
    padding: 7px 8px;
    font-size: 0.74rem;
    border-radius: 10px;
  }

  .brandSelectGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 7px;
  }

  .brandOption {
    min-height: 116px;
    grid-template-rows: 76px auto;
    padding: 7px;
    border-radius: 13px;
  }

  .brandImageBox {
    height: 76px;
    border-radius: 10px;
  }

  .brandImageBox img {
    padding: 1px;
  }

  .brandOption strong {
    font-size: 0.84rem;
  }

  .brandOption.isSelected::after {
    top: 5px;
    right: 5px;
    font-size: 0.58rem;
    padding: 2px 6px;
  }

  .qtySelectGrid {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 6px;
  }

  .qtyChip {
    min-height: 34px;
    padding: 6px 4px;
    font-size: 0.78rem;
  }

  .evidenceControl {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 6px;
  }

  .evidenceControl .secondaryBtn {
    min-height: 38px;
    font-size: 0.82rem;
    padding: 7px 8px;
  }

  .evidenceCount {
    grid-column: 1 / -1;
    padding: 6px 8px;
    font-size: 0.73rem;
    border-radius: 9px;
  }

  .evidencePreviewGrid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 5px;
  }

  .evidenceThumb {
    border-radius: 9px;
  }

  .removeEvidenceBtn {
    width: 23px;
    height: 23px;
    top: 3px;
    right: 3px;
    font-size: 0.96rem;
  }

  .inlineCameraPanel {
    padding: 7px;
    gap: 7px;
    border-radius: 13px;
  }

  .inlineCameraVideo {
    height: clamp(160px, 32dvh, 330px);
    max-height: 330px;
    border-radius: 11px;
  }

  .inlineCameraActions {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 6px;
  }

  .inlineCameraActions button {
    min-height: 36px;
    font-size: 0.82rem;
  }

  .successSummary {
    gap: 6px;
  }

  .successSummary div {
    grid-template-columns: 92px 1fr;
    gap: 6px;
    padding: 7px 8px;
  }

  .successSummary span {
    font-size: 0.72rem;
  }

  .successSummary strong {
    font-size: 0.78rem;
  }
}


/* =========================
   RESPONSIVE SMALL MOBILE
========================= */

@media (max-width: 420px) {
  .mainView {
    padding: 5px;
  }

  .topbar {
    padding: 7px;
  }

  .brandMiniMark {
    width: 31px;
    height: 31px;
    border-radius: 10px;
    font-size: 0.88rem;
  }

  .topbarTitle h1 {
    font-size: 0.86rem;
  }

  .topbarTitle p {
    font-size: 0.63rem;
  }

  .userBadge {
    min-width: 68px;
    max-width: 82px;
    padding: 4px 6px;
  }

  .userBadge .userLabel {
    font-size: 0.58rem;
  }

  .userBadge strong {
    font-size: 0.7rem;
  }

  .smallBtn {
    min-height: 30px;
    padding-inline: 7px;
    font-size: 0.68rem;
  }

  .toolbar {
    padding: 7px;
  }

  .summaryPanel {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .inboundCard {
    padding: 8px;
    gap: 6px;
  }

  .plateText {
    font-size: 1rem;
  }

  .brandBadge {
    min-width: 52px;
    font-size: 0.61rem;
    padding: 4px 6px;
  }

  .infoGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 7px;
  }

  .infoItem span {
    font-size: 0.62rem;
  }

  .infoItem strong {
    font-size: 0.72rem;
  }

  .dialogInfoGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .brandSelectGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .brandOption {
    min-height: 104px;
    grid-template-rows: 66px auto;
    padding: 6px;
  }

  .brandImageBox {
    height: 66px;
  }

  .brandOption strong {
    font-size: 0.78rem;
  }

  .qtySelectGrid {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .qtyChip {
    min-height: 32px;
    font-size: 0.72rem;
  }

  .evidenceControl {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .evidencePreviewGrid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .inlineCameraVideo {
    height: clamp(145px, 30dvh, 285px);
    max-height: 285px;
  }

  .swal2-actions {
    flex-direction: row !important;
    width: 100% !important;
  }

  .swal2-confirm,
  .swal2-cancel {
    width: auto !important;
    min-width: 112px !important;
  }
}
หลังวางแล้วให้เปลี่ยน cache ใน index.html เป็น:

<link rel="stylesheet" href="./style.css?v=9">
<script src="./app.js?v=8" defer></script>
ถ้าต้องการให้ “ภาพพาเลทจริง” แสดงใน badge ของแต่ละรายการแทนคำว่า LOSCAM/CHEP ต้องแก้ app.js เพิ่มให้ card มี <img> หรือ background-image ตาม Brand image URL ก่อนครับ CSS อย่างเดียวทำไม่ได้แบบดึงจากชีทอัตโนมัติ.


9b51f721-7820-46b7-a602-467e7aeddf39.png
ย่อภาพให้เล็กพาเลทแต่ละยี่ห้อและแสดงผลให้ครบ 

คิดเป็นเวลาสองสามวินาที
ได้ครับ จุดนี้แก้ด้วย CSS ได้ โดยให้ กล่องรูปพาเลทเตี้ยลง และบังคับให้รูปใช้ object-fit: contain พร้อมลด padding เพื่อให้เห็นภาพครบ ไม่ถูกตัดแบบในภาพ

ให้แก้เฉพาะ CSS ส่วนนี้ใน style.css เท่านั้น จากไฟล์ตอนนี้มีส่วน .brandSelectGrid, .brandOption, .brandImageBox, .brandImageBox img อยู่แล้ว ให้แทนที่เฉพาะช่วง BRAND SELECT ทั้งชุดเดิมด้วยชุดนี้ได้เลย 


/* =========================
   BRAND SELECT - COMPACT FULL IMAGE
========================= */

.brandSelectGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
}

.brandOption {
  position: relative;
  display: grid;
  grid-template-rows: 78px auto;
  gap: 5px;
  place-items: center;
  min-height: 112px;
  padding: 7px;
  border: 2px solid var(--border);
  border-radius: 14px;
  background: #ffffff;
  color: var(--text);
  overflow: hidden;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease,
    transform 0.15s ease,
    background 0.15s ease;
}

.brandOption:hover {
  border-color: #5eead4;
  transform: translateY(-1px);
}

.brandOption.isSelected {
  border-color: var(--primary);
  background: #f0fdfa;
  box-shadow: 0 0 0 3px rgba(45, 212, 191, 0.16);
}

.brandOption.isSelected::after {
  content: "เลือกแล้ว";
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 2;
  padding: 2px 6px;
  border-radius: 999px;
  background: var(--primary);
  color: #ffffff;
  font-size: 0.58rem;
  font-weight: 900;
}

.brandImageBox {
  display: grid;
  place-items: center;
  width: 100%;
  height: 78px;
  border-radius: 10px;
  background: #ffffff;
  border: 1px solid #dbe3ea;
  overflow: hidden;
}

.brandImageBox img {
  display: block;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: center center;
  padding: 0;
}

.brandImageBox span {
  color: var(--muted);
  font-weight: 900;
}

.brandOption strong {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 0.84rem;
  line-height: 1;
  font-weight: 900;
  letter-spacing: 0.02em;
}

.optionMissing {
  grid-column: 1 / -1;
  padding: 10px;
  border-radius: var(--radius-md);
  background: var(--warning-soft);
  color: #92400e;
  font-weight: 800;
  text-align: center;
}
แล้วให้แทนที่ส่วน mobile ของ Brand เดิมใน @media (max-width: 640px) และ @media (max-width: 420px) ด้วยชุดนี้

@media (max-width: 640px) {
  .brandSelectGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 6px;
  }

  .brandOption {
    grid-template-rows: 62px auto;
    min-height: 92px;
    padding: 6px;
    border-radius: 12px;
  }

  .brandImageBox {
    height: 62px;
    border-radius: 9px;
  }

  .brandImageBox img {
    object-fit: contain;
    object-position: center center;
    padding: 0;
  }

  .brandOption strong {
    font-size: 0.76rem;
  }

  .brandOption.isSelected::after {
    top: 4px;
    right: 4px;
    font-size: 0.52rem;
    padding: 2px 5px;
  }
}

@media (max-width: 420px) {
  .brandSelectGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 6px;
  }

  .brandOption {
    grid-template-rows: 56px auto;
    min-height: 84px;
    padding: 5px;
    border-radius: 11px;
  }

  .brandImageBox {
    height: 56px;
    border-radius: 8px;
  }

  .brandImageBox img {
    object-fit: contain;
    object-position: center center;
    padding: 0;
  }

  .brandOption strong {
    font-size: 0.72rem;
  }
}
หลังแก้แล้วเปลี่ยน version ใน index.html ด้วย เพราะตอนนี้เรียก style.css?v=8 อยู่ 


<link rel="stylesheet" href="./style.css?v=10">
<script src="./app.js?v=8" defer></script>
ผลที่ได้คือรูป LOSCAM / CHEP จะถูกย่อให้อยู่ในกรอบเล็กลงและเห็นครบทั้งภาพมากขึ้น โดยไม่ตัดหัว/ท้ายภาพครับ



ข้อความที่วาง (1)(259).txt
เอกสาร

ข้อความที่วาง (2)(49).txt
เอกสาร

ข้อความที่วาง (3)(21).txt
เอกสาร
ทำยังไงก็ได้ให้ภาพพาเลทแสดงผลครบถ้วน 

คิดเป็นเวลา 17s
ได้ครับ ปัญหานี้แก้ให้จบได้โดย ไม่พยายามบีบภาพลงในกล่องเตี้ย ๆ อีกแล้ว แต่เปลี่ยนวิธีแสดงภาพพาเลทเป็นแบบ พื้นที่ภาพกว้าง + ไม่ครอบตัด + เห็นครบทั้งไฟล์ภาพ เพราะตอนนี้ app.js แสดงภาพ Brand ด้วย <img src="..."> ใน .brandImageBox อยู่แล้ว จึงแก้ที่ CSS ได้โดยตรง 

 และ index.html โหลด style.css?v=10 อยู่ ต้องเพิ่ม version หลังแก้เพื่อกัน cache 


ให้เอา CSS ชุดนี้ไปวาง ท้ายไฟล์ style.css เพื่อ override ของเดิมทั้งหมด เฉพาะส่วนภาพพาเลท:

/* =====================================================
   FORCE BRAND PALLET IMAGE TO SHOW COMPLETE
   วางท้ายไฟล์ style.css เท่านั้น
===================================================== */

/* กล่องรวม Brand ให้ใช้พื้นที่เต็ม */
.brandSelectGrid {
  display: grid !important;
  grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  gap: 10px !important;
  width: 100% !important;
}

/* ปุ่ม Brand ต้องไม่ตัดภาพ */
.brandOption {
  display: grid !important;
  grid-template-rows: auto auto !important;
  align-items: center !important;
  justify-items: center !important;

  min-height: 178px !important;
  height: auto !important;
  padding: 8px !important;

  border-radius: 16px !important;
  overflow: visible !important;
}

/* กล่องรูปต้องสูงพอ และห้าม crop */
.brandImageBox {
  width: 100% !important;
  height: 138px !important;

  display: flex !important;
  align-items: center !important;
  justify-content: center !important;

  background: #ffffff !important;
  border: 1px solid #dbe3ea !important;
  border-radius: 13px !important;

  overflow: visible !important;
}

/* จุดสำคัญ: บังคับรูปให้แสดงครบทั้งภาพ */
.brandImageBox img {
  display: block !important;

  width: auto !important;
  height: auto !important;

  max-width: 100% !important;
  max-height: 132px !important;

  object-fit: contain !important;
  object-position: center center !important;

  padding: 0 !important;
  margin: auto !important;

  transform: none !important;
}

/* ชื่อยี่ห้อ */
.brandOption strong {
  display: block !important;
  width: 100% !important;
  margin-top: 4px !important;

  text-align: center !important;
  font-size: 0.9rem !important;
  line-height: 1.05 !important;
  font-weight: 900 !important;
}

/* ป้ายเลือกแล้ว */
.brandOption.isSelected::after {
  top: 6px !important;
  right: 6px !important;
  z-index: 5 !important;
}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 640px) {
  .brandSelectGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 8px !important;
  }

  .brandOption {
    min-height: 146px !important;
    padding: 6px !important;
    border-radius: 14px !important;
  }

  .brandImageBox {
    height: 108px !important;
    border-radius: 11px !important;
    overflow: visible !important;
  }

  .brandImageBox img {
    width: auto !important;
    height: auto !important;
    max-width: 100% !important;
    max-height: 104px !important;
    object-fit: contain !important;
    object-position: center center !important;
  }

  .brandOption strong {
    font-size: 0.82rem !important;
    margin-top: 3px !important;
  }
}


/* =====================================================
   SMALL MOBILE
===================================================== */

@media (max-width: 420px) {
  .brandSelectGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 6px !important;
  }

  .brandOption {
    min-height: 128px !important;
    padding: 5px !important;
    border-radius: 12px !important;
  }

  .brandImageBox {
    height: 92px !important;
    border-radius: 10px !important;
    overflow: visible !important;
  }

  .brandImageBox img {
    width: auto !important;
    height: auto !important;
    max-width: 100% !important;
    max-height: 88px !important;
    object-fit: contain !important;
    object-position: center center !important;
  }

  .brandOption strong {
    font-size: 0.76rem !important;
  }
}
จากนั้นแก้ใน index.html จากเดิม:

<link rel="stylesheet" href="./style.css?v=10">
<script src="./app.js?v=10" defer></script>
เป็น:

<link rel="stylesheet" href="./style.css?v=11">
<script src="./app.js?v=10" defer></script>
ถ้าทำแล้วยังเห็นพาเลทอยู่แค่บางส่วน แปลว่า ไฟล์รูปต้นฉบับใน Google Drive มีพื้นที่ว่างสีขาวเยอะมาก หรือรูปพาเลทอยู่ชิดขอบล่างของภาพเอง ไม่ใช่ CSS แล้ว วิธีแก้ถาวรคือเปลี่ยนรูปในชีท Brand ให้เป็นภาพที่ crop เฉพาะตัวพาเลทพอดี ไม่มีพื้นที่ว่างรอบภาพมากเกินไป เพราะตอนนี้ CSS จะสั่งให้แสดง “ครบทั้งไฟล์ภาพ” แล้ว ไม่ตัด ไม่ครอบ ไม่ซูมครับ.


4f676883-0d2e-40e3-b572-a58b7cfd98cc.png
เห็นประมาณนี้ แก้ไขมาอีก

คิดเป็นเวลา 34s
ปัญหาในภาพล่าสุดไม่ใช่แค่ CSS แล้วครับ เพราะ app.js ปัจจุบันยังสร้างรูปพาเลทเป็น <img> อยู่ใน .brandImageBox 

 ถ้าภาพต้นฉบับมีพื้นที่ขาวเยอะหรือสัดส่วนแปลก การบีบด้วย CSS อย่างเดียวจะยังได้ผลไม่คงที่ในทุกจอ

วิธีที่จบกว่าคือ เปลี่ยนการแสดงรูป Brand เป็น background-image แบบ contain แล้วซ่อน <img> สำรองไว้ เผื่อโหลดรูปไม่ได้ วิธีนี้จะบังคับให้ภาพพาเลทแสดงครบทั้งภาพ ไม่ถูกตัด และควบคุมขนาดได้แน่นอนกว่า

1) แก้ app.js เฉพาะฟังก์ชัน buildBrandOptionsHtml()
ให้หา function buildBrandOptionsHtml() แล้วแทนที่ทั้งฟังก์ชันด้วยชุดนี้:

function buildBrandOptionsHtml() {
  const brands = state.options.brands || [];

  if (!brands.length) {
    return `<div class="optionMissing">ไม่พบตัวเลือก Brand ในชีท Brand</div>`;
  }

  return brands.map((b) => {
    const brand = escapeHtml(b.brand || "");
    const imageUrl = escapeAttr(b.imageUrl || "");

    return `
      <button type="button" class="brandOption" data-brand="${brand}">
        <div
          class="brandImageBox"
          style="${imageUrl ? `--brand-img: url('${imageUrl}');` : ""}"
        >
          ${
            imageUrl
              ? `<img class="brandFallbackImg" src="${imageUrl}" alt="${brand}" loading="lazy">`
              : `<span>${brand}</span>`
          }
        </div>
        <strong>${brand}</strong>
      </button>
    `;
  }).join("");
}
2) เพิ่ม CSS ชุดนี้ไว้ท้าย style.css
วางท้ายไฟล์เลย เพื่อ override ของเดิมทั้งหมด:

/* =====================================================
   BRAND IMAGE FINAL FIX - SHOW FULL PALLET IMAGE
   วางท้ายไฟล์ style.css
===================================================== */

.brandSelectGrid {
  display: grid !important;
  grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  gap: 10px !important;
  width: 100% !important;
}

.brandOption {
  position: relative !important;
  display: grid !important;
  grid-template-rows: auto auto !important;
  align-items: center !important;
  justify-items: center !important;
  gap: 6px !important;

  min-height: 150px !important;
  height: auto !important;
  padding: 8px !important;

  border-radius: 16px !important;
  overflow: visible !important;
}

.brandImageBox {
  width: 100% !important;
  height: 110px !important;

  display: block !important;
  position: relative !important;

  background-color: #ffffff !important;
  background-image: var(--brand-img) !important;
  background-repeat: no-repeat !important;
  background-position: center center !important;
  background-size: contain !important;

  border: 1px solid #dbe3ea !important;
  border-radius: 13px !important;
  overflow: hidden !important;
}

/* ซ่อน img จริง เพื่อให้ background-size: contain เป็นตัวควบคุมภาพ */
.brandImageBox .brandFallbackImg {
  width: 100% !important;
  height: 100% !important;
  object-fit: contain !important;
  object-position: center center !important;
  opacity: 0 !important;
  pointer-events: none !important;
}

.brandOption strong {
  display: block !important;
  width: 100% !important;
  text-align: center !important;
  font-size: 0.88rem !important;
  line-height: 1 !important;
  font-weight: 900 !important;
  margin: 0 !important;
}

.brandOption.isSelected::after {
  top: 6px !important;
  right: 6px !important;
  z-index: 5 !important;
}


/* มือถือ */
@media (max-width: 640px) {
  .brandSelectGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 8px !important;
  }

  .brandOption {
    min-height: 126px !important;
    padding: 6px !important;
    gap: 5px !important;
    border-radius: 14px !important;
  }

  .brandImageBox {
    height: 90px !important;
    border-radius: 11px !important;
    background-size: contain !important;
    background-position: center center !important;
  }

  .brandOption strong {
    font-size: 0.78rem !important;
  }
}


/* มือถือจอเล็ก */
@media (max-width: 420px) {
  .brandOption {
    min-height: 116px !important;
    padding: 5px !important;
  }

  .brandImageBox {
    height: 82px !important;
    background-size: contain !important;
  }

  .brandOption strong {
    font-size: 0.72rem !important;
  }
}
3) แก้ version ใน index.html
ตอนนี้ไฟล์คุณเรียก style.css?v=10 และ app.js?v=10 อยู่ 

 ให้เปลี่ยนเป็น:

<link rel="stylesheet" href="./style.css?v=12">
<script src="./app.js?v=11" defer></script>
ผลหลังแก้:

- ภาพพาเลทจะแสดงแบบ background-size: contain
- ไม่ถูก crop
- ไม่โดน label บัง
- คุมขนาดบน Desktop / Tablet / มือถือได้แน่นอนกว่าเดิม
ถ้ายังมีพื้นที่ขาวมาก แปลว่าไฟล์รูปต้นฉบับใน Google Drive มีขอบขาวเยอะอยู่ในตัวภาพเอง แต่ตัวพาเลทจะไม่ถูกตัดแล้วครับ.



ข้อความที่วาง (1)(260).txt
เอกสาร

ข้อความที่วาง (2)(51).txt
เอกสาร

ข้อความที่วาง (3)(22).txt
เอกสาร

Pasted code (4)(15).js
JavaScript
ตอนนี้ใช้โค้ดชุดนี้ และต้องการเพิ่มช่องกรอกเอกสาร TCR ให้อยู่ต่อจากช่องของECD(แถวเดียวกัน) และในส่วนของกล้อง ต้องเปิดได้ในโทรศัพท์แอนดรอย และไอโฟน  และในส่วนของSweetalert "บันทึกพาเลทออก"ต้องการให้มีปุ่มกดขนาดเล็กสีเขียว  ชื่อจัดการข้อมูล ที่เมื่อกดแล้วให้คลี่ปุ่มย่อยมาให้เลือก คือ 1. ปุ่มกดลบข้อมูลนี้ โดยเมื่อกดแล้วให้ถามยืนยันอีกครั้ง เมื่อกดยืนยันแล้ว ให้นำข้อมูลนี้ออกจากฟอ์ม ออกจากกาแสดงผล(หากมีวิธีที่ดีกว่านี้ แนะนำด้วย)2.ปุ่มกดแก้ไขข้อมูล โดยเมื่อกดแล้วให้เปิดปฏิทิน ให้เลือก เดือน และ วัน ที่ต้องการแก้ไข และให้ระบบไปตรวจสอบข้อมูล รถรับพาเลทที่มีการบันทึกออกแล้วในid:1wmPZx6NGPfrM6GD2NDNd7Kfk1XCrA6pPDyE8yBxSYic  มาแสดงเป็นแถวข้อมูลย้อนกลับที่สามารถแก้ไขได้ในทุกๆจุด ยกเว้นวันที่เวลาขาออก และในแถวให้แสดงลักษณะให้ทราบด้วยว่า ใครแก้ไขอะไร ในวันที่เวลาใด  อธิบายแนวทางมาก่อนครับ

คิดเป็นเวลา 11s
เข้าใจครับ รอบนี้ยังไม่เขียนโค้ดก่อน ผมสรุปแนวทางให้ชัดเจนก่อนว่าเราควรปรับระบบชุดปัจจุบันอย่างไร

จากโค้ดที่ใช้อยู่ตอนนี้ ระบบมี index.html ที่แยก cameraInput และ uploadInput แล้ว รวมถึงตั้งค่า MAX_IMAGES, IMAGE_MAX_WIDTH, IMAGE_QUALITY ผ่าน APP_CONFIG ไว้แล้ว 

 ส่วน app.js ตอนนี้มีช่อง หมายเลขเอกสาร ECD ใน SweetAlert แล้ว และมีระบบเลือกยี่ห้อ, จำนวน, รูปหลักฐาน, เปิดกล้อง/เลือกรูปจากเครื่องอยู่ในฟอร์มบันทึกขาออก 

 ฝั่ง Code.gs ตอนนี้ OUT_HEADERS มี หมายเลขเอกสาร ECD แล้ว แต่ยังไม่มี TCR, ยังไม่มีสถานะลบ/แก้ไข, และยังไม่มี audit log สำหรับเก็บว่าใครแก้อะไรเมื่อไร 


1. เพิ่มช่อง “เอกสาร TCR” ต่อจาก ECD แถวเดียวกัน
แนวทางที่ถูกต้องคือเพิ่ม field ใหม่ชื่อ:

หมายเลขเอกสาร TCR
ให้แสดงอยู่แถวเดียวกับ:

หมายเลขเอกสาร ECD
ใน SweetAlert จะออกแบบเป็น 2 คอลัมน์:

[ หมายเลขเอกสาร ECD ] [ หมายเลขเอกสาร TCR ]
กฎการกรอกควรใช้แบบเดียวกับ ECD เพื่อให้ข้อมูลสะอาด:

A-Z, a-z, 0-9 เท่านั้น
ห้ามเว้นวรรค
ห้ามอักขระพิเศษ
ฝั่งบันทึกต้องเพิ่มคอลัมน์ใน Sheet1 ต่อจาก หมายเลขเอกสาร ECD:

หมายเลขเอกสาร TCR
และใน payload ที่ส่งจากหน้าเว็บไป Apps Script จะเพิ่ม:

{
  "ecdName": "ECD001",
  "tcrNo": "TCR001"
}
2. เรื่องกล้อง Android / iPhone
ตอนนี้ระบบมี 2 แนวทางพร้อมกันอยู่แล้ว:

1. getUserMedia() = เปิดกล้องสดในหน้าเว็บ
2. input capture="environment" = fallback เปิดกล้อง/เลือกภาพตามระบบของมือถือ
แนวทางที่ถูกต้องสำหรับให้รองรับทั้ง Android และ iPhone คือใช้แบบผสม:

Android Chrome
ควรใช้ navigator.mediaDevices.getUserMedia() ก่อน เพื่อเปิดกล้องสดใน SweetAlert ได้เลย

iPhone Safari
รองรับ getUserMedia() ได้ แต่ต้องมีเงื่อนไขสำคัญ:

- เว็บต้องเป็น HTTPS
- video ต้องมี playsinline
- ต้องเกิดจาก user gesture เช่น กดปุ่ม “เปิดกล้อง”
- ถ้า Safari ไม่อนุญาต ต้อง fallback ไป input capture
LINE Browser / Facebook Browser
บางครั้ง getUserMedia() ใช้ไม่ได้ หรือเปิดกล้องแล้วแปลก วิธีปลอดภัยคือ:

ถ้าเปิดกล้องสดไม่ได้ → ใช้ cameraInput.click()
ดังนั้นแนวทางที่ดีคือไม่ลบ fallback เดิม แต่ปรับฟังก์ชันให้ฉลาดขึ้น:

กด “เปิดกล้อง”
→ ลองเปิดกล้องสดก่อน
→ ถ้าสำเร็จ แสดง video ในฟอร์ม
→ ถ้าไม่สำเร็จ เปิด input capture ให้มือถือเลือกถ่ายภาพแทน
จุดนี้ถือเป็นแนวทางที่ดีที่สุดแล้ว เพราะไม่มีวิธีใดบังคับให้ทุก browser เปิดกล้องแบบเดียวกันได้ 100%

3. ปุ่ม “จัดการข้อมูล” ใน SweetAlert บันทึกพาเลทออก
ต้องเพิ่มปุ่มเล็กสีเขียวใน SweetAlert ด้านบนของฟอร์ม เช่นใกล้หัวข้อ “ข้อมูลขาออก”

[ จัดการข้อมูล ]
เมื่อกดแล้วให้คลี่ปุ่มย่อยออกมา:

[ ลบข้อมูลนี้ ]
[ แก้ไขข้อมูล ]
การแสดงผลควรเป็นแบบ compact ไม่กินพื้นที่:

จัดการข้อมูล ▼
  - ลบข้อมูลนี้
  - แก้ไขข้อมูล
4. ปุ่ม “ลบข้อมูลนี้” ควรทำแบบ Soft Delete ไม่ควรลบแถวจริง
ผมแนะนำว่า ห้ามลบแถวจริงออกจาก Google Sheet ทันที เพราะจะตรวจสอบย้อนหลังไม่ได้ และเสี่ยงข้อมูลหาย

แนวทางที่ดีกว่าคือทำเป็น Soft Delete:

ใน Sheet1 เพิ่มคอลัมน์:
สถานะรายการ
ลบโดย
ลบเมื่อ
เหตุผลการลบ
เช่น:

สถานะรายการ = ACTIVE
ถ้ากดลบ:

สถานะรายการ = DELETED
ลบโดย = ชื่อผู้ใช้งานที่ Login
ลบเมื่อ = dd/MM/yyyy HH:mm:ss
เหตุผลการลบ = ข้อความที่กรอกใน popup
ผลบนหน้าเว็บ
หลังลบสำเร็จ:

- แถวนี้จะหายจากการแสดงผล
- แต่ข้อมูลยังอยู่ใน Sheet1
- ตรวจสอบย้อนหลังได้
ต้องถามยืนยันก่อนลบ
เมื่อกด “ลบข้อมูลนี้”:

ยืนยันการลบข้อมูลนี้?
ทะเบียนรถ: xxx
Auto ID: xxx
พขร.: xxx

[ยืนยันลบ] [ยกเลิก]
ถ้าให้ดีควรมีช่องกรอกเหตุผลการลบสั้น ๆ ด้วย

5. ปุ่ม “แก้ไขข้อมูล”
ความต้องการนี้มี 2 ส่วนใหญ่:

1. เลือกวันที่/เดือนย้อนหลัง
2. ดึงรายการที่เคยบันทึกขาออกแล้วมาแสดงให้แก้ไข
แนวทางที่ควรทำ:

เมื่อกด “แก้ไขข้อมูล”
เปิด SweetAlert ใหม่หรือ panel ภายใน popup:

เลือกเดือน
เลือกวันที่
[ค้นหารายการที่บันทึกออกแล้ว]
หลังเลือกวัน ให้ระบบไปค้นใน Sheet1 ของ Spreadsheet:

1wmPZx6NGPfrM6GD2NDNd7Kfk1XCrA6pPDyE8yBxSYic
โดยค้นจากคอลัมน์:

Timestamp ขาออก
เฉพาะวันที่เลือก

แล้วแสดงเป็นรายการ:

ทะเบียนรถ
Auto ID
ชื่อ พขร.
ยี่ห้อพาเลทขาออก
จำนวน
ECD
TCR
ผู้บันทึก
เวลาออก
ปุ่มแก้ไข
6. ข้อมูลใดแก้ไขได้ / ไม่ได้
ตามที่คุณกำหนด:

แก้ไขได้ทุกจุด ยกเว้นวันที่เวลาขาออก
ดังนั้นฟอร์มแก้ไขควรแก้ได้:

ยี่ห้อพาเลทขาออก
จำนวนพาเลทขาออก
หมายเลขเอกสาร ECD
หมายเลขเอกสาร TCR
หมายเหตุ
รูปหลักฐาน
แต่ห้ามแก้:

Timestamp ขาออก
Outbound ID
Auto ID ขาเข้า
Timestamp ขาเข้า
ทะเบียนรถ
ข้อมูล พขร.
Duration
ข้อมูลกลุ่มหลังควรแสดงเป็น read-only เพื่อกันข้อมูลเสีย

7. ประวัติว่า “ใครแก้อะไร เมื่อไร”
ส่วนนี้สำคัญมาก แนะนำให้ทำชีทใหม่ชื่อ:

AuditLog
หัวคอลัมน์:

Timestamp
Action
Outbound ID
Auto ID ขาเข้า
ทะเบียนรถ
Field
Old Value
New Value
Edited By
Note
ตัวอย่าง:

Timestamp           Action   Outbound ID          Field                 Old Value   New Value   Edited By
11/05/2026 22:15:00 EDIT     POUT-20260511-0001   จำนวนพาเลทขาออก     40          50          สมชาย
11/05/2026 22:15:00 EDIT     POUT-20260511-0001   หมายเลขเอกสาร TCR   -           TCR001      สมชาย
11/05/2026 22:18:00 DELETE   POUT-20260511-0001   สถานะรายการ          ACTIVE      DELETED     สมชาย
แบบนี้จะเห็นชัดว่า:

ใครแก้
แก้เมื่อไร
แก้ช่องไหน
ค่าเดิมคืออะไร
ค่าใหม่คืออะไร
ดีกว่าการเขียนทุกอย่างรวมไว้ในช่องเดียว เพราะค้นหาและตรวจสอบย้อนหลังง่ายกว่า

8. ข้อเสนอที่ดีกว่าสำหรับ “นำข้อมูลนี้ออกจากฟอร์ม / การแสดงผล”
ผมแนะนำแยกคำว่า “ลบ” เป็น 2 แบบ:

แบบที่ควรใช้จริง: Soft Delete
ยังอยู่ใน Sheet1
แต่สถานะเป็น DELETED
ไม่แสดงในหน้าค้นหาปกติ
ตรวจสอบย้อนหลังได้
แบบที่ไม่แนะนำ: Delete Row จริง
ลบแถวออกจาก Sheet
เสี่ยงข้อมูลหาย
Audit ยาก
ตรวจสอบย้อนหลังไม่ได้
ดังนั้นในระบบจริงควรใช้:

ลบ = เปลี่ยนสถานะเป็น DELETED
ไม่ใช่ลบแถวจริง

9. ต้องเพิ่ม API อะไรบ้าง
ฝั่ง Apps Script ต้องเพิ่ม action ใหม่:

GET/POST action=outboundByDate
POST action=deleteOutbound
POST action=updateOutbound
และ Worker ต้องเพิ่ม route:

GET  /api/outbound-by-date?date=dd/MM/yyyy
POST /api/delete-outbound
POST /api/update-outbound
/api/outbound-by-date
รับ:

{
  "date": "11/05/2026"
}
คืนรายการที่บันทึกออกแล้วในวันนั้น

/api/delete-outbound
รับ:

{
  "outboundId": "POUT-20260511-0001",
  "deletedBy": "สมชาย",
  "reason": "บันทึกผิดรายการ"
}
/api/update-outbound
รับ:

{
  "outboundId": "POUT-20260511-0001",
  "updatedBy": "สมชาย",
  "brandOut": "CHEP",
  "qtyOut": 50,
  "ecdName": "ECD001",
  "tcrNo": "TCR001",
  "note": "แก้ไขจำนวน",
  "images": []
}
10. ลำดับการลงมือที่ถูกต้อง
ผมแนะนำให้ทำเป็นขั้นตอนนี้ เพื่อไม่ให้ระบบพัง:

ขั้นที่ 1: เพิ่ม TCR ก่อน
แก้:

Code.gs
app.js
เพิ่มคอลัมน์ หมายเลขเอกสาร TCR และแสดงแถวเดียวกับ ECD

ขั้นที่ 2: ปรับกล้องให้รองรับ Android/iPhone มากขึ้น
แก้เฉพาะ:

app.js
ให้ใช้ getUserMedia() + fallback cameraInput

ขั้นที่ 3: เพิ่มระบบ AuditLog
แก้:

Code.gs
สร้างชีท AuditLog และฟังก์ชันเขียน log

ขั้นที่ 4: เพิ่มปุ่มจัดการข้อมูล
แก้:

app.js
style.css
เพิ่มปุ่มจัดการข้อมูลใน SweetAlert และเมนูย่อย

ขั้นที่ 5: เพิ่ม delete แบบ Soft Delete
แก้:

Code.gs
worker.js
app.js
ขั้นที่ 6: เพิ่มค้นหาข้อมูลย้อนหลังเพื่อแก้ไข
แก้:

Code.gs
worker.js
app.js
style.css
สรุปแนวทางที่ผมแนะนำ
ระบบควรออกแบบเป็นแบบนี้:

1. เพิ่มช่อง TCR อยู่แถวเดียวกับ ECD
2. กล้องใช้ getUserMedia ก่อน ถ้าไม่ได้ให้ fallback ไป input capture
3. ปุ่มจัดการข้อมูลเป็นปุ่มเล็กสีเขียวใน SweetAlert
4. ลบข้อมูลใช้ Soft Delete เท่านั้น ไม่ลบแถวจริง
5. แก้ไขข้อมูลย้อนหลังโดยเลือกวันที่ แล้วดึงข้อมูลจาก Sheet1
6. ทุกการแก้ไข/ลบ ต้องบันทึกลง AuditLog
7. ห้ามแก้ Timestamp ขาออก
8. หน้าแสดงผลปกติไม่แสดงรายการที่สถานะ DELETED
ถ้าจะเริ่มเขียนโค้ด รอบถัดไปควรเริ่มจาก แก้ Code.gs ให้รองรับ TCR + AuditLog + Soft Delete columns ก่อน เพราะเป็นฐานข้อมูลหลักของระบบครับ.


เพิ่มเติม การลบหรืแการซ่อนจากการแสดงผลเพื่อบันทึกออกนั้น(Soft delete) นอกจากต้องการให้เกิดขึ้นในฝั่งข้อมูลขาออกแล้วนั้น คือต้องการให้ซ่อนข้อมูลจากชีท ขาเข้า เนื่องจากบางครั้ง คนขับรถกดบันทึกข้อมูลผิด ทั้งๆที่ไม่ได้เข้ามารับพาเลท แต่เงื่อนไขสำคัญคือ ห้ามไปแก้ไข เพิ่มเติมแถวข้อมูลในชีทขาเข้า เนื่องจากมีระบบอื่นใช้งานอยู่โดยอางอิงจากหัวคอลัมน์  ดังนั้น หาทางออกแบบใดดี หรือเมื่อกดลบแล้วให้บันทึกหรือเก็บAuto ID นั้นไว้เพื่อให้ระบบขาออกรู้ว่าAuto IDนี้ ผู้ใช้งานไม่ต้องการนำมาแสดงในฟอร์มขาออก (เป็นแนวคิดผมนะ หากมีวิธีอื่นที่ดีกว่าก็ยินดี) อธิบายมาใหม่ทั้งหมด

คิดเป็นเวลา 30s
ใช่ครับ แนวคิดของคุณถูกทางแล้ว และผมแนะนำให้ใช้แนวทางนี้เป็นมาตรฐานของระบบ:

ห้ามแตะชีทขาเข้า แต่ให้สร้าง “บัญชี Auto ID ที่ถูกซ่อน/ตัดออกจากฟอร์มขาออก” ไว้ในฝั่งระบบขาออกแทน

เพราะ Sheet5 เป็นข้อมูลต้นทางที่มีระบบอื่นใช้งานอยู่ และโค้ดปัจจุบันของระบบขาออกอ่านข้อมูลจาก Sheet5 โดยใช้หัวคอลัมน์ เช่น Auto ID, เหตุผลเข้าพื้นที่, ยี่ห้อพาเลท, Timestamp Out เพื่อสร้างรายการรอบันทึกขาออก 

 ดังนั้นถ้าเราไปเพิ่มคอลัมน์หรือแก้โครงสร้างในชีทขาเข้า จะเสี่ยงกระทบระบบอื่นทันที

แนวทางใหม่ที่ควรใช้
ให้มองข้อมูลขาเข้าเป็น Read-only Source

Sheet5 ขาเข้า = แหล่งข้อมูลต้นทาง ห้ามเพิ่มคอลัมน์ ห้ามลบแถว ห้ามซ่อนแถว
ระบบขาออก = มีสิทธิ์สร้างสถานะเสริมของตัวเอง
ดังนั้นแทนที่จะไปซ่อนแถวใน Sheet5 ให้สร้างชีทใหม่ในไฟล์ขาออก:

InboundSuppress
อยู่ใน Spreadsheet ขาออก:

1wmPZx6NGPfrM6GD2NDNd7Kfk1XCrA6pPDyE8yBxSYic
ชีทนี้ทำหน้าที่เป็น “บัญชีดำ/รายการซ่อน” ของ Auto ID ที่ไม่ต้องการให้แสดงในฟอร์มขาออก

1. โครงสร้างชีท InboundSuppress
แนะนำหัวคอลัมน์:

Timestamp
Auto ID ขาเข้า
ทะเบียนรถ
Timestamp ขาเข้า
ยี่ห้อพาเลทขาเข้า
ชื่อ พขร.
ต้นสังกัด พขร.
เบอร์โทร
สถานะการซ่อน
ซ่อนโดย
เหตุผลการซ่อน
คืนสถานะโดย
คืนสถานะเมื่อ
เหตุผลคืนสถานะ
ตัวอย่างข้อมูล:

Timestamp              Auto ID ขาเข้า    ทะเบียนรถ        สถานะการซ่อน   ซ่อนโดย   เหตุผลการซ่อน
11/05/2026 23:40:00    SK05892485066     705803 ขอนแก่น   HIDDEN          สมชาย    คนขับกดเข้าผิด ไม่ได้มารับพาเลท
เมื่อระบบโหลดรายการขาออก จะทำแบบนี้:

1. อ่านข้อมูลจาก Sheet5 ตามปกติ
2. อ่าน Auto ID จาก InboundSuppress ที่สถานะ = HIDDEN
3. ถ้า Auto ID อยู่ใน InboundSuppress → ไม่แสดงในฟอร์มขาออก
ข้อดีคือ:

ไม่แตะ Sheet5
ไม่กระทบระบบอื่น
ตรวจสอบย้อนหลังได้ว่าใครซ่อน เพราะอะไร
สามารถคืนสถานะกลับมาแสดงได้
2. ความแตกต่างระหว่าง Soft Delete ขาออก กับ Suppress ขาเข้า
ต้องแยกเป็น 2 เรื่องชัดเจน

A) Soft Delete ข้อมูลขาออก
ใช้กับข้อมูลที่ บันทึกขาออกไปแล้ว อยู่ใน Sheet1

เช่น บันทึกพาเลทออกผิดจำนวน หรือเลือกยี่ห้อผิด

วิธีจัดการ:

ไม่ลบแถวจริง
เปลี่ยนสถานะรายการ = DELETED
บันทึกว่าใครลบ / ลบเมื่อไร / เหตุผล
ชีทที่เกี่ยวข้อง:

Sheet1
AuditLog
B) Suppress ข้อมูลขาเข้า
ใช้กับข้อมูลที่ ยังไม่ได้บันทึกขาออก แต่ไม่ควรแสดงในฟอร์ม เช่น:

คนขับกดเข้าพื้นที่ผิด
คนขับไม่ได้มารับพาเลทจริง
ข้อมูลเหตุผลเป็น “รับพาเลท” แต่เป็นรายการผิด
วิธีจัดการ:

ไม่แตะ Sheet5
เพิ่ม Auto ID ลง InboundSuppress
ไม่แสดง Auto ID นี้ในฟอร์มขาออกอีก
ชีทที่เกี่ยวข้อง:

InboundSuppress
AuditLog
3. Flow ปุ่ม “ลบข้อมูลนี้” ควรเปลี่ยนชื่อเป็น “ซ่อนรายการนี้”
เพื่อไม่ให้ผู้ใช้เข้าใจผิด ผมแนะนำให้ใช้คำว่า:

ซ่อนรายการนี้
แทนคำว่า:

ลบข้อมูลนี้
เพราะในกรณีรายการขาเข้าที่ยังไม่ได้บันทึกออก เราไม่ได้ลบข้อมูลจริง และไม่ได้ลบจาก Sheet5

ใน SweetAlert ปุ่มจัดการข้อมูลควรเป็น:

จัดการข้อมูล
  ├─ ซ่อนรายการนี้
  └─ แก้ไขข้อมูลที่บันทึกออกแล้ว
เมื่อกด ซ่อนรายการนี้ ให้ถามยืนยัน:

ยืนยันซ่อนรายการนี้?

Auto ID: SK05892485066
ทะเบียนรถ: 705803 ขอนแก่น
พขร.: นาย วาระกิจ อินทร์แก้ว

รายการนี้จะไม่ถูกแสดงในฟอร์มขาออกอีก
แต่ข้อมูลต้นทางใน Sheet5 จะไม่ถูกแก้ไข

[ยืนยันซ่อน] [ยกเลิก]
จากนั้นให้กรอกเหตุผล:

เหตุผลการซ่อน
เช่น คนขับกดผิด / ไม่ได้รับพาเลท / รายการซ้ำ
เมื่อยืนยันแล้ว:

- บันทึก Auto ID ลง InboundSuppress
- บันทึก AuditLog
- ลบการ์ดนี้ออกจากหน้าจอทันที
- ไม่แตะ Sheet5
4. ถ้าซ่อนผิด ต้องมี “คืนสถานะ”
ควรมีเมนูในระบบจัดการข้อมูลย้อนหลัง:

รายการที่ถูกซ่อน
ให้ค้นหาได้จาก:

วันที่ซ่อน
Auto ID
ทะเบียนรถ
ชื่อ พขร.
แล้วมีปุ่ม:

คืนสถานะ
เมื่อกดคืนสถานะ:

สถานะการซ่อน = RESTORED
คืนสถานะโดย = ผู้ใช้งาน
คืนสถานะเมื่อ = dd/MM/yyyy HH:mm:ss
เหตุผลคืนสถานะ = ซ่อนผิดรายการ
หลังคืนสถานะแล้ว ถ้าใน Sheet5 รายการนั้นยังเข้าเงื่อนไขเดิม:

เหตุผลเข้าพื้นที่ = รับพาเลท
Timestamp Out = ว่าง
ระบบก็จะแสดงกลับมาในฟอร์มขาออกได้อีกครั้ง

5. ต้องแก้ getInboundOpenRows_() อย่างไร
ปัจจุบัน getInboundOpenRows_() อ่านจาก Sheet5 แล้วกรองด้วยเงื่อนไข:

Auto ID ต้องมี
เหตุผลเข้าพื้นที่ = รับพาเลท
ยี่ห้อพาเลท = LOSCAM หรือ CHEP
Timestamp Out ต้องว่าง
ตรงนี้ใน Code.gs มีการอ่านคอลัมน์ Timestamp Out และข้ามแถวที่มีค่าแล้วอยู่แล้ว 


หลังปรับใหม่ต้องเพิ่มเงื่อนไขอีก 1 ชั้น:

const suppressedMap = getActiveSuppressedInboundMap_();

...

if (suppressedMap[autoId]) continue;
ลำดับการกรองใหม่จะเป็น:

1. Auto ID ไม่ว่าง
2. เหตุผลเข้าพื้นที่ = รับพาเลท
3. ยี่ห้อพาเลทถูกต้อง
4. Timestamp Out ว่าง
5. Auto ID ไม่อยู่ใน InboundSuppress ที่สถานะ HIDDEN
6. แล้วกรณีระบบปัจจุบันอัปเดต Timestamp Out ใน Sheet5 ต้องทำอย่างไร
ตอนนี้โค้ด backend ปัจจุบันหลังบันทึกออกจะเรียก updateInboundOutInfo_() เพื่ออัปเดต Timestamp Out และ Duration กลับไปที่ Sheet5 


จุดนี้ต้องตัดสินใจเป็นนโยบายระบบ:

ทางเลือกที่ 1: คงไว้เหมือนเดิม
เมื่อบันทึกออกสำเร็จ → update Timestamp Out / Duration ใน Sheet5
เมื่อแค่ซ่อนรายการผิด → ไม่แตะ Sheet5 แต่บันทึก InboundSuppress
เหมาะถ้าระบบเดิมตั้งใจให้ขาออกช่วยปิดงานในชีทขาเข้าอยู่แล้ว

ทางเลือกที่ 2: ไม่แตะ Sheet5 เลย
เมื่อบันทึกออกสำเร็จ → บันทึกเฉพาะ Sheet1
ไม่ update Timestamp Out / Duration ใน Sheet5
ระบบขาออกต้องรู้เองว่า Auto ID ไหนบันทึกออกแล้วจาก Sheet1
ถ้าเลือกทางนี้ ต้องปรับ getInboundOpenRows_() เพิ่มอีกเงื่อนไข:

ถ้า Auto ID มีรายการขาออก ACTIVE ใน Sheet1 แล้ว → ไม่แสดง
ผมแนะนำ ทางเลือกที่ 2 ในระยะยาว ถ้าคุณต้องการให้ Sheet5 เป็น read-only จริง ๆ และไม่กระทบระบบอื่น

7. แนวทางที่ผมแนะนำที่สุด
ผมแนะนำให้ปรับเป็นแบบนี้:

สำหรับข้อมูลขาเข้า
Sheet5 = Read-only
ห้ามเพิ่มคอลัมน์
ห้ามลบแถว
ห้ามซ่อนแถว
ห้ามแก้ Timestamp Out / Duration ถ้าต้องการกันกระทบระบบอื่นแบบ 100%
สำหรับระบบขาออก
ใช้ 3 ชีทควบคุมสถานะเอง:

Sheet1             = รายการบันทึกพาเลทขาออก
InboundSuppress    = รายการ Auto ID ที่ซ่อนจากฟอร์มขาออก
AuditLog           = ประวัติการแก้ไข/ซ่อน/คืนสถานะ/ลบ
การแสดงรายการรอบันทึกขาออก
ระบบจะอ่าน Sheet5 แล้วตัดออกด้วยข้อมูลจากฝั่งขาออก:

ไม่แสดง ถ้า Auto ID อยู่ใน Sheet1 ที่สถานะ ACTIVE
ไม่แสดง ถ้า Auto ID อยู่ใน InboundSuppress ที่สถานะ HIDDEN
แสดง ถ้าเข้าเงื่อนไข Sheet5 และไม่อยู่ใน 2 กลุ่มด้านบน
แบบนี้ถึงไม่อัปเดต Timestamp Out ใน Sheet5 ระบบขาออกก็ยังรู้ว่าอะไรบันทึกแล้ว อะไรถูกซ่อนแล้ว

8. สถานะที่ควรมีในระบบ
ใน Sheet1
เพิ่มคอลัมน์:

สถานะรายการ
แก้ไขล่าสุดโดย
แก้ไขล่าสุดเมื่อ
ลบโดย
ลบเมื่อ
เหตุผลการลบ
ค่าที่ใช้:

ACTIVE
DELETED
ใน InboundSuppress
ใช้สถานะ:

HIDDEN
RESTORED
ใน AuditLog
ใช้ action:

CREATE_OUTBOUND
EDIT_OUTBOUND
DELETE_OUTBOUND
SUPPRESS_INBOUND
RESTORE_INBOUND
9. ภาพรวม Flow ใหม่ทั้งหมด
รายการเข้ามาผิดและยังไม่ได้บันทึกออก
ผู้ใช้กดรายการในฟอร์ม
กด จัดการข้อมูล
กด ซ่อนรายการนี้
กรอกเหตุผล
ระบบบันทึก Auto ID ลง InboundSuppress
ระบบบันทึก AuditLog
รายการหายจากหน้า
Sheet5 ไม่ถูกแตะ
รายการบันทึกออกแล้ว แต่ต้องการลบ
ผู้ใช้กด จัดการข้อมูล
กด แก้ไขข้อมูลที่บันทึกออกแล้ว
เลือกวันที่
ระบบดึงรายการจาก Sheet1
กดลบรายการ
ระบบเปลี่ยนสถานะใน Sheet1 เป็น DELETED
ระบบบันทึก AuditLog
Sheet5 ไม่ถูกแตะ
รายการบันทึกออกแล้ว แต่ต้องการแก้ไข
ผู้ใช้กด จัดการข้อมูล
กด แก้ไขข้อมูลที่บันทึกออกแล้ว
เลือกวันที่
ระบบแสดงรายการจาก Sheet1
กดแก้ไข
แก้ได้เฉพาะ:
- ยี่ห้อพาเลทขาออก
- จำนวน
- ECD
- TCR
- หมายเหตุ
- รูปหลักฐาน

ห้ามแก้:
- Timestamp ขาออก
- Outbound ID
- Auto ID
- Timestamp ขาเข้า
- ทะเบียนรถ
- ข้อมูล พขร.
10. สรุปคำตอบที่ชัดเจน
แนวคิดของคุณถูกต้องครับ แต่ผมจะปรับชื่อและโครงสร้างให้เป็นมาตรฐานมากขึ้น:

ไม่ใช้คำว่า “ลบจากชีทขาเข้า”
ให้ใช้ “ซ่อน Auto ID จากฟอร์มขาออก”
โดยบันทึก Auto ID นั้นไว้ในชีท InboundSuppress
แล้วให้ getInboundOpenRows_() กรอง Auto ID เหล่านี้ออก
โครงสร้างที่ดีที่สุดคือ:

Sheet5 ขาเข้า = Read-only source
Sheet1 ขาออก = ข้อมูลที่บันทึกออกแล้ว
InboundSuppress = Auto ID ที่ถูกซ่อนจากฟอร์มขาออก
AuditLog = ประวัติทุกการทำงาน
แนวทางนี้ปลอดภัยที่สุด เพราะไม่ไปแตะชีทขาเข้า ไม่กระทบระบบอื่น และยังตรวจสอบย้อนหลังได้ครบว่าใครซ่อนอะไร เมื่อไร เพราะอะไรครับ.


ยืนยันในส่วนของกรณีระบบปัจจุบันอัปเดต Timestamp Out ใน Sheet5 ให้ใชทางเลือกที่1 คงไว้เหมือนเดิม เนื่องจากไม่อยากให้ทำงานซ้ำซ้อน เพราะแต่เดิม พขร.จะต้องบันทึกเวลาออกเอง แบบนี้จะดีไหม

คิดเป็นเวลา 6s
ดีครับ ผมเห็นด้วยให้ใช้ ทางเลือกที่ 1: คงการอัปเดต Timestamp Out / Duration ใน Sheet5 เหมือนเดิม สำหรับระบบนี้เหมาะกว่า เพราะเป้าหมายของคุณคือให้พนักงานฝั่งระบบขาออกเป็นคน “ปิดงานขาออกแทน พขร.” เพื่อลดงานซ้ำซ้อน

จากโค้ดปัจจุบัน backend หลังบันทึกขาออกสำเร็จ มีการเรียก updateInboundOutInfo_(inbound.rowNumber, timestampOutText, duration); เพื่อเติม Timestamp Out และ Duration กลับไปยัง Sheet5 อยู่แล้ว 

 และหน้าเว็บก็ระบุชัดว่า “หลังบันทึกแล้ว พขร.ไม่ต้องสแกนออก” 

 ดังนั้นแนวทางนี้สอดคล้องกับการใช้งานจริงที่สุดครับ

สรุปแนวทางที่ควรยืนยัน
ให้ระบบทำงานแบบนี้:

กรณีบันทึกพาเลทขาออกสำเร็จ
→ บันทึกข้อมูลลง Sheet1
→ อัปโหลดรูปหลักฐาน
→ อัปเดต Timestamp Out / Duration กลับไป Sheet5
→ รายการนั้นจะหายจากฟอร์มขาออกทันที
→ พขร.ไม่ต้องสแกนออกเองอีก
ส่วนกรณีที่ข้อมูลขาเข้าเป็นรายการผิด เช่น คนขับกดเข้าผิด ทั้งที่ไม่ได้มารับพาเลท:

กรณีซ่อนรายการผิด
→ ห้ามแก้ Sheet5
→ ห้ามเติม Timestamp Out
→ บันทึก Auto ID ลงชีท InboundSuppress
→ รายการนั้นจะไม่แสดงในฟอร์มขาออก
→ เก็บประวัติไว้ใน AuditLog
นี่คือจุดแยกที่สำคัญมาก:

กรณี	แตะ Sheet5 หรือไม่	เหตุผล
บันทึกออกจริง	แตะได้	เพื่อปิดงานแทน พขร. และไม่ให้สแกนซ้ำ
ซ่อนรายการผิด	ห้ามแตะ	เพราะไม่ได้ออกจริง และไม่ควรแก้ข้อมูลต้นทาง
แก้ไขข้อมูลขาออกย้อนหลัง	ไม่ควรแตะ Sheet5	เพราะ Timestamp Out เดิมถือเป็นเวลาปิดงานจริงแล้ว
Soft delete ข้อมูลขาออกที่บันทึกแล้ว	โดยหลักไม่ควรแตะ Sheet5 อัตโนมัติ	ให้เก็บประวัติและพิจารณาเป็นกรณี ๆ ไป
ดีไหม?
ดีครับ สำหรับระบบนี้ถือว่าเหมาะกว่า “ไม่แตะ Sheet5 เลย” เพราะถ้าไม่อัปเดต Timestamp Out ใน Sheet5 ระบบจะต้องสร้างตรรกะซ้ำอีกชุดเพื่อรู้ว่า Auto ID ไหนบันทึกออกแล้ว ซึ่งจะยุ่งกว่า และอาจทำให้ฝั่งคนขับหรือระบบเดิมยังเห็นว่ายังไม่ออก

แต่ต้องวางกฎเพิ่ม 3 ข้อเพื่อกันข้อมูลเสีย:

กฎที่ควรใช้
1. บันทึกออกจริงเท่านั้นถึงจะอัปเดต Sheet5
กด “บันทึกขาออก” สำเร็จเท่านั้น ระบบจึงเติม:

Timestamp Out
Duration
ใน Sheet5

2. ซ่อนรายการไม่ต้องแตะ Sheet5
กด “ซ่อนรายการนี้” ต้องบันทึกแค่ในชีทใหม่:

InboundSuppress
โดยเก็บ:

Auto ID
ทะเบียนรถ
ชื่อ พขร.
Timestamp ขาเข้า
ซ่อนโดย
ซ่อนเมื่อ
เหตุผล
สถานะ = HIDDEN
3. แก้ไขย้อนหลังไม่ควรแก้ Timestamp Out
รายการที่เคยบันทึกออกแล้ว ถ้าแก้ไขภายหลัง ให้แก้เฉพาะข้อมูลฝั่งขาออก เช่น:

ยี่ห้อพาเลทขาออก
จำนวน
ECD
TCR
หมายเหตุ
รูปหลักฐาน
แต่ไม่ควรแก้:

Timestamp Out
Duration
Auto ID
Timestamp ขาเข้า
ทะเบียนรถ
ข้อมูล พขร.
และทุกการแก้ไขต้องลง AuditLog

โครงสร้างสุดท้ายที่แนะนำ
ให้ใช้แบบนี้:

Sheet5 ขาเข้า
- ใช้อ่านข้อมูลขาเข้า
- ระบบขาออกเติมเฉพาะ Timestamp Out / Duration เมื่อบันทึกออกจริง
- ไม่ใช้สำหรับซ่อนรายการผิด

Sheet1 ขาออก
- เก็บรายการขาออกจริง
- เพิ่ม ECD / TCR / สถานะรายการ / แก้ไขล่าสุด

InboundSuppress
- เก็บ Auto ID ที่ไม่ต้องการให้แสดงในฟอร์มขาออก
- ใช้กรณีคนขับกดเข้าผิดหรือไม่ได้มารับพาเลทจริง

AuditLog
- เก็บประวัติ CREATE / EDIT / DELETE / SUPPRESS / RESTORE
Flow ที่ควรใช้จริง
1. ระบบโหลดข้อมูลจาก Sheet5
2. กรองเฉพาะ “รับพาเลท”
3. กรองเฉพาะ Timestamp Out ว่าง
4. กรอง Auto ID ที่อยู่ใน InboundSuppress สถานะ HIDDEN ออก
5. แสดงในฟอร์ม
6. ถ้าบันทึกออกจริง → บันทึก Sheet1 + เติม Timestamp Out/Duration ใน Sheet5
7. ถ้าข้อมูลผิด → ซ่อนด้วย InboundSuppress เท่านั้น ไม่แตะ Sheet5
สรุปคือ ใช้ทางเลือกที่ 1 ดีแล้วครับ เพราะลดงานซ้ำซ้อนของ พขร. ได้จริง และยังคุมความปลอดภัยของข้อมูลได้ ถ้าเราแยก “บันทึกออกจริง” กับ “ซ่อนรายการผิด” ออกจากกันให้ชัดเจนแบบนี้.


ต่อรอบถถัดไปมาเลยครับ

คิดเป็นเวลา 31s
ได้ครับ รอบนี้เริ่มจาก Code.gs ฝั่ง Apps Script ก่อน โดยจะเพิ่มฐานรองรับ 4 เรื่องหลัก:

1. เพิ่มช่องเอกสาร TCR
2. เพิ่มชีท InboundSuppress สำหรับซ่อน Auto ID จากฟอร์มขาออก โดยไม่แตะ Sheet5
3. เพิ่มชีท AuditLog สำหรับบันทึกประวัติ
4. คงการอัปเดต Timestamp Out / Duration กลับไป Sheet5 เหมือนเดิมเมื่อบันทึกออกจริง
จากโค้ดปัจจุบัน index.html ใช้ APP_CONFIG.API_BASE ผ่าน Worker และมี input กล้อง/อัปโหลดแยกแล้ว 

 ส่วน Code.gs ปัจจุบันมีการบันทึกลง Sheet1 และอัปเดต Timestamp Out / Duration กลับ Sheet5 แล้ว จึงจะคงพฤติกรรมนี้ไว้ตามที่ยืนยัน 


รอบนี้ให้แก้ Code.gs
1. เพิ่มค่าคงที่และ Header ใหม่
หาโค้ดส่วนนี้:

const OUT_SHEET_NAME = "Sheet1";
const PASS_SHEET_NAME = "Pass";
const BRAND_SHEET_NAME = "Brand";
const PALLET_QTY_SHEET_NAME = "pallet";
เปลี่ยนเป็น:

const OUT_SHEET_NAME = "Sheet1";
const PASS_SHEET_NAME = "Pass";
const BRAND_SHEET_NAME = "Brand";
const PALLET_QTY_SHEET_NAME = "pallet";

const INBOUND_SUPPRESS_SHEET_NAME = "InboundSuppress";
const AUDIT_LOG_SHEET_NAME = "AuditLog";

const STATUS_ACTIVE = "ACTIVE";
const STATUS_DELETED = "DELETED";

const SUPPRESS_STATUS_HIDDEN = "HIDDEN";
const SUPPRESS_STATUS_RESTORED = "RESTORED";
2. แก้ OUT_HEADERS
หา OUT_HEADERS เดิม แล้วแทนที่ทั้งชุดด้วยชุดนี้

const OUT_HEADERS = [
  "Timestamp ขาออก",
  "Outbound ID",
  "Auto ID ขาเข้า",
  "Timestamp ขาเข้า",
  "เหตุผลเข้าพื้นที่",
  "ยี่ห้อพาเลทขาเข้า",
  "ทะเบียนรถ",
  "คำนำหน้า",
  "ชื่อ พขร.",
  "สกุล พขร.",
  "ต้นสังกัด พขร.",
  "เบอร์โทร",
  "ยี่ห้อพาเลทขาออก",
  "จำนวนพาเลทขาออก",
  "หมายเลขเอกสาร ECD",
  "หมายเลขเอกสาร TCR",
  "ผู้บันทึก",
  "ID รูปหลักฐาน",
  "หมายเหตุ",
  "Duration",
  "สถานะรายการ",
  "สถานะการบันทึก",
  "แก้ไขล่าสุดโดย",
  "แก้ไขล่าสุดเมื่อ",
  "ลบโดย",
  "ลบเมื่อ",
  "เหตุผลการลบ"
];

const INBOUND_SUPPRESS_HEADERS = [
  "Timestamp",
  "Auto ID ขาเข้า",
  "ทะเบียนรถ",
  "Timestamp ขาเข้า",
  "ยี่ห้อพาเลทขาเข้า",
  "ชื่อ พขร.",
  "ต้นสังกัด พขร.",
  "เบอร์โทร",
  "สถานะการซ่อน",
  "ซ่อนโดย",
  "เหตุผลการซ่อน",
  "คืนสถานะโดย",
  "คืนสถานะเมื่อ",
  "เหตุผลคืนสถานะ"
];

const AUDIT_LOG_HEADERS = [
  "Timestamp",
  "Action",
  "Target Type",
  "Outbound ID",
  "Auto ID ขาเข้า",
  "ทะเบียนรถ",
  "Field",
  "Old Value",
  "New Value",
  "Action By",
  "Note"
];

const PASS_HEADERS = ["Pass", "NAME"];
const BRAND_HEADERS = ["Brand", "ID"];
const PALLET_QTY_HEADERS = ["Qty"];
หมายเหตุ: ถ้า Sheet1 มีอยู่แล้ว ฟังก์ชัน ensureHeaders_() จะเพิ่มหัวคอลัมน์ที่ขาดให้เอง แต่จะเพิ่มต่อท้าย ไม่ได้แทรกกลางชีท ถ้าต้องการให้ หมายเลขเอกสาร TCR อยู่ติดกับ ECD ในชีทจริง ให้ลากคอลัมน์ใน Google Sheet ไปไว้ตำแหน่งที่ต้องการได้ภายหลัง

3. แก้ doPost(e) เพิ่ม action ใหม่
ใน doPost(e) ให้เพิ่มชุดนี้ก่อนส่วน return json_({ ok:false ... })

    if (action === "suppressInbound") {
      return json_(suppressInbound_(payload));
    }

    if (action === "restoreInbound") {
      return json_(restoreInbound_(payload));
    }
ผลคือ doPost จะรองรับ:

submitOut
suppressInbound
restoreInbound
4. แก้ getInboundOpenRows_() ให้กรอง Auto ID ที่ถูกซ่อน
ในฟังก์ชัน getInboundOpenRows_() ให้หาโค้ดนี้:

  const rows = [];
เปลี่ยนเป็น:

  const suppressedMap = getActiveSuppressedInboundMap_();
  const rows = [];
จากนั้นใน loop ให้หาโค้ดนี้:

    if (!autoId) continue;
    if (reason !== ALLOWED_IN_REASON) continue;
    if (ALLOWED_BRANDS.indexOf(brandIn) === -1) continue;
    if (timestampOut) continue;
เปลี่ยนเป็น:

    if (!autoId) continue;
    if (reason !== ALLOWED_IN_REASON) continue;
    if (ALLOWED_BRANDS.indexOf(brandIn) === -1) continue;
    if (timestampOut) continue;
    if (suppressedMap[autoId]) continue;
ผลคือ Auto ID ที่ถูกซ่อนใน InboundSuppress จะไม่แสดงในฟอร์มขาออก แต่ Sheet5 ไม่ถูกแก้ไข

5. แก้ submitPalletOut_(payload) ให้รับ TCR
ใน submitPalletOut_(payload) ให้หาโค้ดนี้:

    const ecdName = norm_(payload.ecdName).toUpperCase();
    const recordedBy = norm_(payload.recordedBy);
เปลี่ยนเป็น:

    const ecdName = norm_(payload.ecdName).toUpperCase();
    const tcrNo = norm_(payload.tcrNo).toUpperCase();
    const recordedBy = norm_(payload.recordedBy);
แล้วใน validateSubmitPayload_({ ... }) ให้เพิ่ม tcrNo

    validateSubmitPayload_({
      autoId: autoId,
      brandOut: brandOut,
      qtyOut: qtyOut,
      ecdName: ecdName,
      tcrNo: tcrNo,
      recordedBy: recordedBy,
      images: images
    });
ใน appendOutboundRow_({ ... }) ให้เพิ่ม:

      tcrNo: tcrNo,
ตัวอย่างตำแหน่ง:

      brandOut: brandOut,
      qtyOut: qtyOut,
      ecdName: ecdName,
      tcrNo: tcrNo,
      recordedBy: recordedBy,
และเปลี่ยน status เป็นแบบนี้:

      itemStatus: STATUS_ACTIVE,
      status: "บันทึกขาออกสำเร็จ"
6. เพิ่ม AuditLog หลังบันทึกออกสำเร็จ
ใน submitPalletOut_(payload) หลังบรรทัดนี้:

    updateInboundOutInfo_(inbound.rowNumber, timestampOutText, duration);
ให้เพิ่ม:

    appendAuditLog_({
      action: "CREATE_OUTBOUND",
      targetType: "OUTBOUND",
      outboundId: outboundId,
      autoId: autoId,
      plateNo: inbound.plateNo,
      field: "CREATE",
      oldValue: "",
      newValue: "บันทึกขาออกสำเร็จ",
      actionBy: recordedBy,
      note: "บันทึกขาออกและอัปเดต Timestamp Out / Duration กลับไป Sheet5"
    });
7. แก้ response หลังบันทึกสำเร็จให้ส่ง TCR กลับไปด้วย
หา return เดิมใน submitPalletOut_():

return {
  ok: true,
  message: "บันทึกขาออกสำเร็จ",
  outboundId: outboundId,
  autoId: autoId,
  plateNo: inbound.plateNo,
  driverFullName: driverFullName,
  timestampOut: timestampOutText,
  duration: duration,
  imageIds: imageIdsText
};
เปลี่ยนเป็น:

return {
  ok: true,
  message: "บันทึกขาออกสำเร็จ",
  outboundId: outboundId,
  autoId: autoId,
  plateNo: inbound.plateNo,
  driverFullName: driverFullName,
  ecdName: ecdName,
  tcrNo: tcrNo,
  timestampOut: timestampOutText,
  duration: duration,
  imageIds: imageIdsText
};
8. แก้ validateSubmitPayload_(data) ให้ตรวจ TCR
ใน validateSubmitPayload_(data) หลังตรวจ ECD:

if (!data.ecdName) {
  throw new Error("กรุณากรอกหมายเลขเอกสาร ECD");
}

if (!/^[A-Za-z0-9]+$/.test(data.ecdName)) {
  throw new Error("หมายเลขเอกสาร ECD กรอกได้เฉพาะตัวอักษรภาษาอังกฤษและตัวเลขเท่านั้น ห้ามใช้อักขระพิเศษ");
}
ให้เพิ่มต่อท้าย:

if (!data.tcrNo) {
  throw new Error("กรุณากรอกหมายเลขเอกสาร TCR");
}

if (!/^[A-Za-z0-9]+$/.test(data.tcrNo)) {
  throw new Error("หมายเลขเอกสาร TCR กรอกได้เฉพาะตัวอักษรภาษาอังกฤษและตัวเลขเท่านั้น ห้ามใช้อักขระพิเศษ");
}
9. แก้ appendOutboundRow_(data)
ใน appendOutboundRow_(data) ให้เพิ่ม case ใหม่

หา:

      case "หมายเลขเอกสาร ECD":
        return data.ecdName;
ให้เพิ่มต่อท้าย:

      case "หมายเลขเอกสาร TCR":
        return data.tcrNo;
และหา:

      case "สถานะการบันทึก":
        return data.status;
เปลี่ยนเป็น:

      case "สถานะรายการ":
        return data.itemStatus || STATUS_ACTIVE;
      case "สถานะการบันทึก":
        return data.status;
      case "แก้ไขล่าสุดโดย":
        return data.updatedBy || "";
      case "แก้ไขล่าสุดเมื่อ":
        return data.updatedAt || "";
      case "ลบโดย":
        return data.deletedBy || "";
      case "ลบเมื่อ":
        return data.deletedAt || "";
      case "เหตุผลการลบ":
        return data.deleteReason || "";
10. เพิ่มฟังก์ชันใหม่ท้ายไฟล์ Code.gs
ให้นำโค้ดชุดนี้ไปวาง ก่อนส่วน RESPONSE HELPERS หรือก่อนท้ายไฟล์ ได้เลย

/** =========================
 * INBOUND SUPPRESS
 * ========================= */

function getActiveSuppressedInboundMap_() {
  const ss = SpreadsheetApp.openById(OUT_SPREADSHEET_ID);
  const sheet = getOrCreateSheet_(ss, INBOUND_SUPPRESS_SHEET_NAME, INBOUND_SUPPRESS_HEADERS);
  const values = sheet.getDataRange().getValues();

  const map = {};

  if (values.length < 2) return map;

  const headerMap = getHeaderMap_(values[0]);
  const cAutoId = getRequiredCol_(headerMap, "Auto ID ขาเข้า");
  const cStatus = getRequiredCol_(headerMap, "สถานะการซ่อน");

  for (let r = 1; r < values.length; r++) {
    const autoId = norm_(values[r][cAutoId]);
    const status = norm_(values[r][cStatus]).toUpperCase();

    if (!autoId) continue;

    if (status === SUPPRESS_STATUS_HIDDEN) {
      map[autoId] = true;
    }

    if (status === SUPPRESS_STATUS_RESTORED) {
      delete map[autoId];
    }
  }

  return map;
}


function suppressInbound_(payload) {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(30000);

    const autoId = norm_(payload.autoId);
    const suppressedBy = norm_(payload.suppressedBy || payload.recordedBy);
    const reason = norm_(payload.reason);

    if (!autoId) {
      throw new Error("ไม่พบ Auto ID ที่ต้องการซ่อน");
    }

    if (!suppressedBy) {
      throw new Error("ไม่พบชื่อผู้ซ่อนรายการ กรุณาเข้าสู่ระบบใหม่");
    }

    if (!reason) {
      throw new Error("กรุณาระบุเหตุผลการซ่อนรายการ");
    }

    const inbound = findInboundRowByAutoId_(autoId);

    if (!inbound) {
      throw new Error("ไม่พบข้อมูลขาเข้าจาก Auto ID: " + autoId);
    }

    const ss = SpreadsheetApp.openById(OUT_SPREADSHEET_ID);
    const sheet = getOrCreateSheet_(ss, INBOUND_SUPPRESS_SHEET_NAME, INBOUND_SUPPRESS_HEADERS);
    ensureHeaders_(sheet, INBOUND_SUPPRESS_HEADERS);

    const timestamp = nowText_();
    const driverFullName = [
      inbound.prefix,
      inbound.firstName,
      inbound.lastName
    ].filter(Boolean).join(" ");

    const rowObj = {
      "Timestamp": timestamp,
      "Auto ID ขาเข้า": inbound.autoId,
      "ทะเบียนรถ": inbound.plateNo,
      "Timestamp ขาเข้า": inbound.timestampInText,
      "ยี่ห้อพาเลทขาเข้า": inbound.brandIn,
      "ชื่อ พขร.": driverFullName,
      "ต้นสังกัด พขร.": inbound.driverCompany,
      "เบอร์โทร": inbound.phone,
      "สถานะการซ่อน": SUPPRESS_STATUS_HIDDEN,
      "ซ่อนโดย": suppressedBy,
      "เหตุผลการซ่อน": reason,
      "คืนสถานะโดย": "",
      "คืนสถานะเมื่อ": "",
      "เหตุผลคืนสถานะ": ""
    };

    appendObjectRow_(sheet, INBOUND_SUPPRESS_HEADERS, rowObj);

    appendAuditLog_({
      action: "SUPPRESS_INBOUND",
      targetType: "INBOUND",
      outboundId: "",
      autoId: inbound.autoId,
      plateNo: inbound.plateNo,
      field: "สถานะการซ่อน",
      oldValue: "",
      newValue: SUPPRESS_STATUS_HIDDEN,
      actionBy: suppressedBy,
      note: reason
    });

    return {
      ok: true,
      message: "ซ่อนรายการจากฟอร์มขาออกสำเร็จ",
      autoId: inbound.autoId,
      plateNo: inbound.plateNo,
      driverFullName: driverFullName,
      suppressedAt: timestamp,
      suppressedBy: suppressedBy
    };

  } finally {
    try {
      lock.releaseLock();
    } catch (err) {
      // ignore
    }
  }
}


function restoreInbound_(payload) {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(30000);

    const autoId = norm_(payload.autoId);
    const restoredBy = norm_(payload.restoredBy || payload.recordedBy);
    const reason = norm_(payload.reason);

    if (!autoId) {
      throw new Error("ไม่พบ Auto ID ที่ต้องการคืนสถานะ");
    }

    if (!restoredBy) {
      throw new Error("ไม่พบชื่อผู้คืนสถานะ กรุณาเข้าสู่ระบบใหม่");
    }

    if (!reason) {
      throw new Error("กรุณาระบุเหตุผลการคืนสถานะ");
    }

    const ss = SpreadsheetApp.openById(OUT_SPREADSHEET_ID);
    const sheet = getOrCreateSheet_(ss, INBOUND_SUPPRESS_SHEET_NAME, INBOUND_SUPPRESS_HEADERS);
    ensureHeaders_(sheet, INBOUND_SUPPRESS_HEADERS);

    const values = sheet.getDataRange().getValues();

    if (values.length < 2) {
      throw new Error("ยังไม่มีรายการซ่อนให้คืนสถานะ");
    }

    const headerMap = getHeaderMap_(values[0]);
    const cAutoId = getRequiredCol_(headerMap, "Auto ID ขาเข้า");
    const cStatus = getRequiredCol_(headerMap, "สถานะการซ่อน");
    const cRestoreBy = getRequiredCol_(headerMap, "คืนสถานะโดย");
    const cRestoreAt = getRequiredCol_(headerMap, "คืนสถานะเมื่อ");
    const cRestoreReason = getRequiredCol_(headerMap, "เหตุผลคืนสถานะ");

    let targetRow = -1;

    for (let r = values.length - 1; r >= 1; r--) {
      const rowAutoId = norm_(values[r][cAutoId]);
      const status = norm_(values[r][cStatus]).toUpperCase();

      if (rowAutoId === autoId && status === SUPPRESS_STATUS_HIDDEN) {
        targetRow = r + 1;
        break;
      }
    }

    if (targetRow < 0) {
      throw new Error("ไม่พบรายการ HIDDEN ของ Auto ID นี้ หรือรายการถูกคืนสถานะแล้ว");
    }

    const timestamp = nowText_();

    sheet.getRange(targetRow, cStatus + 1).setValue(SUPPRESS_STATUS_RESTORED);
    sheet.getRange(targetRow, cRestoreBy + 1).setValue(restoredBy);
    sheet.getRange(targetRow, cRestoreAt + 1).setValue(timestamp);
    sheet.getRange(targetRow, cRestoreReason + 1).setValue(reason);

    appendAuditLog_({
      action: "RESTORE_INBOUND",
      targetType: "INBOUND",
      outboundId: "",
      autoId: autoId,
      plateNo: "",
      field: "สถานะการซ่อน",
      oldValue: SUPPRESS_STATUS_HIDDEN,
      newValue: SUPPRESS_STATUS_RESTORED,
      actionBy: restoredBy,
      note: reason
    });

    return {
      ok: true,
      message: "คืนสถานะรายการสำเร็จ",
      autoId: autoId,
      restoredAt: timestamp,
      restoredBy: restoredBy
    };

  } finally {
    try {
      lock.releaseLock();
    } catch (err) {
      // ignore
    }
  }
}


/** =========================
 * AUDIT LOG
 * ========================= */

function appendAuditLog_(data) {
  const ss = SpreadsheetApp.openById(OUT_SPREADSHEET_ID);
  const sheet = getOrCreateSheet_(ss, AUDIT_LOG_SHEET_NAME, AUDIT_LOG_HEADERS);
  ensureHeaders_(sheet, AUDIT_LOG_HEADERS);

  const rowObj = {
    "Timestamp": nowText_(),
    "Action": norm_(data.action),
    "Target Type": norm_(data.targetType),
    "Outbound ID": norm_(data.outboundId),
    "Auto ID ขาเข้า": norm_(data.autoId),
    "ทะเบียนรถ": norm_(data.plateNo),
    "Field": norm_(data.field),
    "Old Value": norm_(data.oldValue),
    "New Value": norm_(data.newValue),
    "Action By": norm_(data.actionBy),
    "Note": norm_(data.note)
  };

  appendObjectRow_(sheet, AUDIT_LOG_HEADERS, rowObj);
}


function appendObjectRow_(sheet, headers, obj) {
  ensureHeaders_(sheet, headers);

  const actualHeaders = sheet
    .getRange(1, 1, 1, sheet.getLastColumn())
    .getValues()[0];

  const row = actualHeaders.map(function (h) {
    return obj[h] !== undefined ? obj[h] : "";
  });

  sheet.appendRow(row);
}
11. สรุปผลหลังแก้ Code.gs
หลังแก้ชุดนี้ ระบบจะได้ฐานข้อมูลใหม่ดังนี้:

Sheet1
- เพิ่ม TCR
- เพิ่มสถานะรายการ ACTIVE / DELETED
- พร้อมรองรับแก้ไข/ลบภายหลัง

InboundSuppress
- เก็บ Auto ID ที่ต้องการซ่อนจากฟอร์มขาออก
- ไม่แตะ Sheet5
- ใช้กรณีคนขับกดเข้าผิด / ไม่ได้มารับพาเลทจริง

AuditLog
- เก็บประวัติ CREATE_OUTBOUND
- เก็บประวัติ SUPPRESS_INBOUND
- เก็บประวัติ RESTORE_INBOUND
ส่วนพฤติกรรมสำคัญยังคงเหมือนเดิม:

บันทึกออกจริง
→ บันทึก Sheet1
→ อัปโหลดรูป
→ อัปเดต Timestamp Out / Duration กลับไป Sheet5
รอบถัดไปควรแก้ worker.js ให้รองรับ endpoint ใหม่:

POST /api/suppress-inbound
POST /api/restore-inbound
จากนั้นค่อยแก้ app.js เพิ่มช่อง TCR และปุ่ม “จัดการข้อมูล” ใน SweetAlert ครับ.



Pasted code(60).js
JavaScript
ต่อรอบถัดไปมาเลยครับ 

คิดเป็นเวลา 10s
ได้ครับ รอบนี้แก้ worker.js สำหรับ Cloudflare Worker ให้รองรับ endpoint ใหม่ต่อจาก Code.gs ที่เพิ่มไว้ คือ

POST /api/suppress-inbound
POST /api/restore-inbound
จากไฟล์ Worker ปัจจุบัน ตอนนี้ยังมีเฉพาะ /api/health, /api/login, /api/options, /api/inbound-open, /api/submit-out และยังไม่มี route สำหรับ suppressInbound / restoreInbound 


ให้วาง worker.js ชุดนี้แทนไฟล์เดิมทั้งไฟล์ได้เลย

worker.js
/**
 * Pallet OUT System - Cloudflare Worker
 *
 * ใช้เป็น Proxy ระหว่าง GitHub Frontend กับ Google Apps Script
 *
 * Frontend → Cloudflare Worker → Google Apps Script
 *
 * Endpoints:
 * GET  /api/health
 * POST /api/login
 * GET  /api/options
 * GET  /api/inbound-open
 * POST /api/submit-out
 * POST /api/suppress-inbound
 * POST /api/restore-inbound
 */

/** =========================
 * CONFIG
 * ========================= */

// URL Web App จาก Apps Script Deploy
const GAS_URL = "https://script.google.com/macros/s/AKfycbx6-KNVh_qg3vm8nxh4K9AbIx7XNms_UcxlSbe8COCAfF53XtwIQgCZSLgMuoIo9B3Z/exec";

// ระหว่างทดสอบใช้ "*" ได้
const ALLOWED_ORIGIN = "*";

// timeout สำหรับงานที่มีรูปภาพ / Apps Script ใช้เวลานาน
const REQUEST_TIMEOUT_MS = 240000;


/** =========================
 * MAIN WORKER
 * ========================= */

export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);

      if (request.method === "OPTIONS") {
        return handleOptions();
      }

      if (url.pathname === "/" || url.pathname === "/api") {
        return jsonResponse({
          ok: true,
          service: "pallet-out-worker",
          message: "Pallet OUT Worker is running.",
          endpoints: [
            "GET /api/health",
            "POST /api/login",
            "GET /api/options",
            "GET /api/inbound-open",
            "POST /api/submit-out",
            "POST /api/suppress-inbound",
            "POST /api/restore-inbound"
          ]
        });
      }

      /** =========================
       * GET ROUTES
       * ========================= */

      if (url.pathname === "/api/health" && request.method === "GET") {
        return proxyGetToGas("health");
      }

      if (url.pathname === "/api/options" && request.method === "GET") {
        return proxyGetToGas("options");
      }

      if (url.pathname === "/api/inbound-open" && request.method === "GET") {
        return proxyGetToGas("inboundOpen");
      }

      /** =========================
       * POST ROUTES
       * ========================= */

      if (url.pathname === "/api/login" && request.method === "POST") {
        const body = await readJsonBody(request);

        return proxyPostToGas({
          ...body,
          action: "login"
        });
      }

      if (url.pathname === "/api/submit-out" && request.method === "POST") {
        const body = await readJsonBody(request);

        return proxyPostToGas({
          ...body,
          action: "submitOut"
        });
      }

      if (url.pathname === "/api/suppress-inbound" && request.method === "POST") {
        const body = await readJsonBody(request);

        return proxyPostToGas({
          ...body,
          action: "suppressInbound"
        });
      }

      if (url.pathname === "/api/restore-inbound" && request.method === "POST") {
        const body = await readJsonBody(request);

        return proxyPostToGas({
          ...body,
          action: "restoreInbound"
        });
      }

      return jsonResponse(
        {
          ok: false,
          message: "ไม่พบ endpoint ที่เรียกใช้งาน",
          path: url.pathname,
          method: request.method
        },
        404
      );

    } catch (err) {
      return jsonResponse(
        {
          ok: false,
          message: err && err.message ? err.message : String(err)
        },
        500
      );
    }
  }
};


/** =========================
 * PROXY FUNCTIONS
 * ========================= */

async function proxyGetToGas(action) {
  const targetUrl = new URL(GAS_URL);
  targetUrl.searchParams.set("action", action);

  const res = await fetchWithTimeout(targetUrl.toString(), {
    method: "GET",
    redirect: "follow",
    headers: {
      "Accept": "application/json"
    }
  });

  return normalizeGasResponse(res);
}


async function proxyPostToGas(payload) {
  const res = await fetchWithTimeout(GAS_URL, {
    method: "POST",
    redirect: "follow",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(payload || {})
  });

  return normalizeGasResponse(res);
}


async function normalizeGasResponse(res) {
  const text = await res.text();

  let data;

  try {
    data = JSON.parse(text);
  } catch (err) {
    return jsonResponse(
      {
        ok: false,
        message: "Apps Script ไม่ได้คืนค่าเป็น JSON",
        status: res.status,
        raw: text.slice(0, 1000)
      },
      502
    );
  }

  return jsonResponse(data, res.ok ? 200 : res.status);
}


async function fetchWithTimeout(url, options) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal
    });
  } catch (err) {
    if (err && err.name === "AbortError") {
      throw new Error("เชื่อมต่อ Apps Script เกินเวลาที่กำหนด");
    }

    throw err;
  } finally {
    clearTimeout(timer);
  }
}


/** =========================
 * REQUEST HELPERS
 * ========================= */

async function readJsonBody(request) {
  const text = await request.text();

  if (!text) return {};

  try {
    return JSON.parse(text);
  } catch (err) {
    throw new Error("รูปแบบ JSON ที่ส่งมาไม่ถูกต้อง");
  }
}


/** =========================
 * RESPONSE HELPERS
 * ========================= */

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: jsonHeaders()
  });
}


function handleOptions() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders()
  });
}


function jsonHeaders() {
  return {
    ...corsHeaders(),
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  };
}


function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
    "Access-Control-Max-Age": "86400"
  };
}
วิธีทดสอบ Worker หลัง Deploy
1. ทดสอบหน้า API
เปิด:

https://pallet.somchaibutphon.workers.dev/api
ควรเห็น endpoint ใหม่เพิ่มมา:

POST /api/suppress-inbound
POST /api/restore-inbound
2. ทดสอบ health
เปิด:

https://pallet.somchaibutphon.workers.dev/api/health
ควรได้ JSON จาก Apps Script

3. ทดสอบ suppress-inbound ด้วย DevTools / Postman
ใช้ POST ไปที่:

https://pallet.somchaibutphon.workers.dev/api/suppress-inbound
Body:

{
  "autoId": "AUTO_ID_TEST",
  "suppressedBy": "TEST USER",
  "reason": "ทดสอบซ่อนรายการ"
}
ถ้า Auto ID มีจริงใน Sheet5 และ Code.gs deploy แล้ว ควรได้:

{
  "ok": true,
  "message": "ซ่อนรายการจากฟอร์มขาออกสำเร็จ"
}
จุดสำคัญ
หลังเปลี่ยน Code.gs แล้ว ต้องกด Deploy → Manage deployments → Edit → New version → Deploy ใหม่ก่อน ไม่อย่างนั้น Worker จะยิงไปหา Apps Script เวอร์ชันเก่าที่ไม่มี suppressInbound / restoreInbound

รอบถัดไปควรแก้ app.js เพื่อเพิ่ม:

1. ช่อง TCR ให้อยู่แถวเดียวกับ ECD
2. ส่ง tcrNo ไป /api/submit-out
3. ปุ่ม “จัดการข้อมูล”
4. เมนูย่อย “ซ่อนรายการนี้”
5. เรียก /api/suppress-inbound


ข้อความที่วาง (1)(261).txt
เอกสาร
ต่อรอบถัดไปมาเลยครับ 

คิดเป็นเวลา 8s
ได้ครับ รอบนี้แก้ app.js ให้รองรับ 5 จุดนี้ก่อน:

1. เพิ่มช่อง TCR ต่อจาก ECD แบบแถวเดียวกัน
2. ส่ง tcrNo ไปบันทึกพร้อม submitOut
3. เพิ่มปุ่มเล็ก “จัดการข้อมูล”
4. คลี่ปุ่มย่อย “ซ่อนรายการนี้”
5. กดซ่อนแล้วเรียก /api/suppress-inbound และนำรายการออกจากหน้าจอทันที
จาก app.js ชุดล่าสุดของคุณ ตอนนี้ยังมีเฉพาะช่อง ECD, ยังไม่มี TCR, ยังไม่มีปุ่ม จัดการข้อมูล, และ payload ตอนบันทึกยังส่งแค่ ecdName โดยไม่มี tcrNo 


1. เพิ่ม Regex ของ TCR
หาโค้ดนี้:

const ECD_REGEX = /^[A-Za-z0-9]+$/;
const DEFAULT_PALLET_QTY = [10, 20, 30, 40, 50, 60, 80, 100];
เปลี่ยนเป็น:

const ECD_REGEX = /^[A-Za-z0-9]+$/;
const TCR_REGEX = /^[A-Za-z0-9]+$/;
const DEFAULT_PALLET_QTY = [10, 20, 30, 40, 50, 60, 80, 100];
2. แก้ buildRecordOutDialogHtml(row)
ให้หาในฟังก์ชัน buildRecordOutDialogHtml(row) เฉพาะช่วงนี้:

<section class="dialogSection">
  <h3>ข้อมูลขาออก</h3>

  <div id="dialogNotice" class="dialogNotice isHidden"></div>
เปลี่ยนเป็น:

<section class="dialogSection">
  <div class="dialogSectionHeader">
    <h3>ข้อมูลขาออก</h3>

    <div class="manageWrap">
      <button id="manageDataBtn" type="button" class="manageDataBtn">
        จัดการข้อมูล
      </button>

      <div id="manageMenu" class="manageMenu isHidden">
        <button id="suppressInboundBtn" type="button" class="manageMenuBtn danger">
          ซ่อนรายการนี้
        </button>
      </div>
    </div>
  </div>

  <div id="dialogNotice" class="dialogNotice isHidden"></div>
3. แก้ช่อง ECD ให้มี TCR อยู่แถวเดียวกัน
ใน buildRecordOutDialogHtml(row) ให้หา block เดิมนี้:

<div class="fieldGroup">
  <label for="ecdNameInput">หมายเลขเอกสาร ECD <em>*</em></label>
  <input
    id="ecdNameInput"
    class="dialogInput"
    type="text"
    inputmode="latin"
    autocomplete="off"
    placeholder="เช่น ECD001 หรือ DOC123"
    maxlength="30"
  >
  <div class="helpText">
    หมายเลขเอกสารใช้ได้เฉพาะ A-Z, a-z, 0-9 ห้ามเว้นวรรคและห้ามอักขระพิเศษ
  </div>
</div>
เปลี่ยนเป็น:

<div class="docPairGrid">
  <div class="fieldGroup">
    <label for="ecdNameInput">หมายเลขเอกสาร ECD <em>*</em></label>
    <input
      id="ecdNameInput"
      class="dialogInput"
      type="text"
      inputmode="latin"
      autocomplete="off"
      placeholder="ECD001"
      maxlength="30"
    >
  </div>

  <div class="fieldGroup">
    <label for="tcrNoInput">หมายเลขเอกสาร TCR <em>*</em></label>
    <input
      id="tcrNoInput"
      class="dialogInput"
      type="text"
      inputmode="latin"
      autocomplete="off"
      placeholder="TCR001"
      maxlength="30"
    >
  </div>
</div>

<div class="helpText">
  ECD/TCR ใช้ได้เฉพาะ A-Z, a-z, 0-9 ห้ามเว้นวรรคและห้ามอักขระพิเศษ
</div>
4. แก้ initDialogEvents(row)
4.1 เพิ่มตัวแปรปุ่มจัดการและ TCR
หาโค้ดนี้:

const customQtyInput = $("customQtyInput");
const ecdNameInput = $("ecdNameInput");
const openCameraBtn = $("openCameraBtn");
const captureCameraBtn = $("captureCameraBtn");
const closeCameraBtn = $("closeCameraBtn");
const pickGalleryBtn = $("pickGalleryBtn");
เปลี่ยนเป็น:

const customQtyInput = $("customQtyInput");
const ecdNameInput = $("ecdNameInput");
const tcrNoInput = $("tcrNoInput");

const manageDataBtn = $("manageDataBtn");
const manageMenu = $("manageMenu");
const suppressInboundBtn = $("suppressInboundBtn");

const openCameraBtn = $("openCameraBtn");
const captureCameraBtn = $("captureCameraBtn");
const closeCameraBtn = $("closeCameraBtn");
const pickGalleryBtn = $("pickGalleryBtn");
4.2 เพิ่ม event ของ TCR ต่อจาก ECD
หา block นี้:

if (ecdNameInput) {
  ecdNameInput.addEventListener("input", () => {
    ecdNameInput.value = ecdNameInput.value
      .replace(/[^A-Za-z0-9]/g, "")
      .toUpperCase();

    clearDialogNotice();
  });
}
เพิ่มต่อท้าย:

if (tcrNoInput) {
  tcrNoInput.addEventListener("input", () => {
    tcrNoInput.value = tcrNoInput.value
      .replace(/[^A-Za-z0-9]/g, "")
      .toUpperCase();

    clearDialogNotice();
  });
}
4.3 เพิ่ม event ของปุ่ม “จัดการข้อมูล”
ให้เพิ่มต่อจาก block TCR ได้เลย:

if (manageDataBtn && manageMenu) {
  manageDataBtn.addEventListener("click", () => {
    manageMenu.classList.toggle("isHidden");
  });
}

if (suppressInboundBtn) {
  suppressInboundBtn.addEventListener("click", async () => {
    await handleSuppressInbound(row);
  });
}
5. แก้ collectAndValidateDialogData(row)
5.1 เพิ่มตัวแปร TCR
หาโค้ดนี้:

const customQtyInput = $("customQtyInput");
const ecdNameInput = $("ecdNameInput");
const noteInput = $("noteInput");
เปลี่ยนเป็น:

const customQtyInput = $("customQtyInput");
const ecdNameInput = $("ecdNameInput");
const tcrNoInput = $("tcrNoInput");
const noteInput = $("noteInput");
5.2 เพิ่ม validate TCR
หา block ตรวจ ECD นี้:

const ecdName = String(ecdNameInput ? ecdNameInput.value || "" : "")
  .trim()
  .toUpperCase();

if (!ecdName) {
  throw new Error("กรุณากรอกหมายเลขเอกสาร ECD");
}

if (!ECD_REGEX.test(ecdName)) {
  throw new Error("หมายเลขเอกสาร ECD กรอกได้เฉพาะตัวอักษรภาษาอังกฤษและตัวเลขเท่านั้น");
}
เพิ่มต่อท้าย:

const tcrNo = String(tcrNoInput ? tcrNoInput.value || "" : "")
  .trim()
  .toUpperCase();

if (!tcrNo) {
  throw new Error("กรุณากรอกหมายเลขเอกสาร TCR");
}

if (!TCR_REGEX.test(tcrNo)) {
  throw new Error("หมายเลขเอกสาร TCR กรอกได้เฉพาะตัวอักษรภาษาอังกฤษและตัวเลขเท่านั้น");
}
5.3 เพิ่ม tcrNo ใน return payload
หา return เดิม:

return {
  autoId: row.autoId,
  plateNo: row.plateNo || "",
  driverFullName: row.driverFullName || joinName(row) || "",
  brandOut,
  qtyOut,
  ecdName,
  recordedBy: state.currentUser,
  note: String(noteInput ? noteInput.value || "" : "").trim(),
  images: state.selectedEvidencePayloads
};
เปลี่ยนเป็น:

return {
  autoId: row.autoId,
  plateNo: row.plateNo || "",
  driverFullName: row.driverFullName || joinName(row) || "",
  brandOut,
  qtyOut,
  ecdName,
  tcrNo,
  recordedBy: state.currentUser,
  note: String(noteInput ? noteInput.value || "" : "").trim(),
  images: state.selectedEvidencePayloads
};
6. แก้ SweetAlert บันทึกสำเร็จให้แสดง ECD/TCR
ใน submitOutRecord(payload) ให้หา SweetAlert สำเร็จเดิม แล้วแก้เฉพาะ html เป็นแบบนี้:

html: `
  <div class="successSummary">
    <div><span>Outbound ID</span><strong>${escapeHtml(res.outboundId || "-")}</strong></div>
    <div><span>Auto ID</span><strong>${escapeHtml(res.autoId || "-")}</strong></div>
    <div><span>ทะเบียนรถ</span><strong>${escapeHtml(res.plateNo || payload.plateNo || "-")}</strong></div>
    <div><span>พขร.</span><strong>${escapeHtml(res.driverFullName || payload.driverFullName || "-")}</strong></div>
    <div><span>ECD</span><strong>${escapeHtml(res.ecdName || payload.ecdName || "-")}</strong></div>
    <div><span>TCR</span><strong>${escapeHtml(res.tcrNo || payload.tcrNo || "-")}</strong></div>
    <div><span>เวลาออก</span><strong>${escapeHtml(res.timestampOut || "-")}</strong></div>
    <div><span>Duration</span><strong>${escapeHtml(res.duration || "-")}</strong></div>
  </div>
`,
7. เพิ่มฟังก์ชันซ่อนรายการ handleSuppressInbound(row)
ให้วางฟังก์ชันนี้ ก่อนหัวข้อ SUBMIT หรือก่อนฟังก์ชัน submitOutRecord(payload)

/* =========================
 * MANAGE / SUPPRESS INBOUND
 * ========================= */

async function handleSuppressInbound(row) {
  if (!row || !row.autoId) {
    showDialogNotice("ไม่พบ Auto ID ของรายการนี้", "error");
    return;
  }

  const confirm = await Swal.fire({
    icon: "warning",
    title: "ซ่อนรายการนี้?",
    html: `
      <div class="confirmBox">
        <div><span>Auto ID</span><strong>${escapeHtml(row.autoId || "-")}</strong></div>
        <div><span>ทะเบียนรถ</span><strong>${escapeHtml(row.plateNo || "-")}</strong></div>
        <div><span>พขร.</span><strong>${escapeHtml(row.driverFullName || joinName(row) || "-")}</strong></div>
      </div>

      <div class="confirmNote">
        รายการนี้จะไม่แสดงในฟอร์มขาออกอีก แต่ข้อมูลในชีทขาเข้าจะไม่ถูกแก้ไข
      </div>
    `,
    input: "textarea",
    inputLabel: "เหตุผลการซ่อนรายการ",
    inputPlaceholder: "เช่น คนขับกดเข้าผิด / ไม่ได้มารับพาเลท / รายการซ้ำ",
    inputAttributes: {
      maxlength: 250
    },
    showCancelButton: true,
    confirmButtonText: "ยืนยันซ่อน",
    cancelButtonText: "ยกเลิก",
    reverseButtons: true,
    inputValidator: (value) => {
      if (!String(value || "").trim()) {
        return "กรุณาระบุเหตุผลการซ่อนรายการ";
      }
      return null;
    }
  });

  if (!confirm.isConfirmed) return;

  const reason = String(confirm.value || "").trim();

  try {
    Swal.fire({
      title: "กำลังซ่อนรายการ",
      html: "กรุณารอสักครู่ ระบบกำลังบันทึกข้อมูลการซ่อนรายการ",
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    const res = await apiPost("/api/suppress-inbound", {
      autoId: row.autoId,
      suppressedBy: state.currentUser,
      recordedBy: state.currentUser,
      reason
    }, 60000);

    if (!res.ok) {
      throw new Error(res.message || "ซ่อนรายการไม่สำเร็จ");
    }

    removeInboundRowFromState(row.autoId);

    await Swal.fire({
      icon: "success",
      title: "ซ่อนรายการสำเร็จ",
      html: `
        <div class="successSummary">
          <div><span>Auto ID</span><strong>${escapeHtml(res.autoId || row.autoId || "-")}</strong></div>
          <div><span>ทะเบียนรถ</span><strong>${escapeHtml(res.plateNo || row.plateNo || "-")}</strong></div>
          <div><span>ผู้ซ่อน</span><strong>${escapeHtml(res.suppressedBy || state.currentUser || "-")}</strong></div>
          <div><span>เวลา</span><strong>${escapeHtml(res.suppressedAt || "-")}</strong></div>
        </div>
      `,
      confirmButtonText: "ตกลง"
    });

  } catch (err) {
    await showError(err);
  }
}


function removeInboundRowFromState(autoId) {
  const target = String(autoId || "").trim();

  if (!target) return;

  state.inboundRows = state.inboundRows.filter((r) => String(r.autoId || "").trim() !== target);
  state.filteredRows = state.filteredRows.filter((r) => String(r.autoId || "").trim() !== target);

  renderInboundRows(state.filteredRows);
  updateSummary();
}
8. หมายเหตุสำคัญเรื่อง SweetAlert ซ้อน
การกด ซ่อนรายการนี้ จะเปิด SweetAlert ยืนยันอีกชั้น ดังนั้น SweetAlert ฟอร์มหลักจะถูกแทนที่ชั่วคราว

กรณีนี้ ยอมรับได้ เพราะเป็น action จัดการรายการ ไม่ใช่การถ่ายภาพที่ต้องกลับมาฟอร์มเดิมทันที

หลังซ่อนสำเร็จ รายการจะถูกนำออกจากหน้าจออยู่แล้ว จึงไม่จำเป็นต้องกลับไป popup เดิม

9. รอบถัดไปต้องแก้ CSS เพิ่ม
เพราะตอนนี้เราเพิ่ม class ใหม่:

dialogSectionHeader
manageWrap
manageDataBtn
manageMenu
manageMenuBtn
docPairGrid
confirmBox
confirmNote
รอบถัดไปควรเพิ่ม CSS ให้ปุ่ม “จัดการข้อมูล” เป็นปุ่มเล็กสีเขียว และจัด ECD/TCR ให้อยู่แถวเดียวกันบนมือถือด้วยครับ.



ข้อความที่วาง (1)(262).txt
เอกสาร
ต่อรอบถัดไปมาเลยครับ พร้อมทั้งทำให้Style สะอาด และ เป็นระเบียบมากขึ้น 

คิดเป็นเวลา 6s
ได้ครับ รอบนี้คือ style.css ฉบับจัดระเบียบใหม่ทั้งไฟล์ ให้สะอาดขึ้น ลด CSS ซ้ำซ้อน และเพิ่ม style สำหรับของใหม่ที่เพิ่มใน app.js ได้แก่ TCR, ปุ่ม จัดการข้อมูล, เมนู ซ่อนรายการนี้, และกล่องยืนยันผลต่าง ๆ

จากไฟล์ CSS ล่าสุดที่ส่งมา มีปัญหาหลักคือส่วน Brand image ถูกประกาศซ้ำหลายชุด และมี @media ซ้อนอยู่ใน @media (max-width: 420px) ทำให้ CSS ทับกันเองและควบคุมผลลัพธ์ยากมาก โดยเฉพาะบนมือถือ 


ให้วางแทน style.css เดิมทั้งไฟล์

/* =====================================================
 * Pallet OUT System
 * File: style.css
 * Clean / Compact / Mobile Optimized
 * ===================================================== */

/* =========================
   ROOT / RESET
========================= */

:root {
  --bg: #f4f7f6;
  --surface: #ffffff;
  --surface-soft: #f8fafc;
  --text: #0f172a;
  --muted: #64748b;
  --border: #dbe3ea;

  --primary: #0f766e;
  --primary-dark: #115e59;
  --primary-soft: #ccfbf1;

  --danger: #dc2626;
  --danger-dark: #991b1b;
  --danger-soft: #fee2e2;

  --warning: #f59e0b;
  --warning-soft: #fef3c7;

  --success: #16a34a;
  --success-dark: #166534;
  --success-soft: #dcfce7;

  --info: #2563eb;
  --info-soft: #eff6ff;

  --chep: #005bbb;
  --loscam: #ef7d00;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;

  --shadow-sm: 0 2px 8px rgba(15, 23, 42, 0.07);
  --shadow-md: 0 8px 22px rgba(15, 23, 42, 0.11);

  --font-main: "Noto Sans Thai", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

* {
  box-sizing: border-box;
}

html {
  width: 100%;
  min-height: 100%;
  -webkit-text-size-adjust: 100%;
  scroll-behavior: smooth;
}

body {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  font-family: var(--font-main);
  color: var(--text);
  background:
    radial-gradient(circle at top left, rgba(15, 118, 110, 0.12), transparent 28rem),
    linear-gradient(180deg, #eef7f5 0%, var(--bg) 42%, #eef2f7 100%);
}

button,
input,
textarea,
select {
  font-family: inherit;
}

button {
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.65;
}

img {
  max-width: 100%;
  display: block;
}

.isHidden {
  display: none !important;
}

.appRoot {
  min-height: 100vh;
}

.noscriptBox {
  margin: 12px;
  padding: 12px 14px;
  border-radius: var(--radius-md);
  background: var(--danger-soft);
  color: #7f1d1d;
  font-weight: 800;
  border: 1px solid #fecaca;
}


/* =========================
   BUTTONS
========================= */

.primaryBtn,
.secondaryBtn,
.iconBtn {
  min-height: 40px;
  border-radius: 999px;
  border: 1px solid transparent;
  padding: 9px 14px;
  font-size: 0.92rem;
  font-weight: 800;
  line-height: 1.15;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease,
    background 0.15s ease,
    border-color 0.15s ease;
}

.primaryBtn {
  color: #ffffff;
  background: var(--primary);
  box-shadow: 0 6px 16px rgba(15, 118, 110, 0.2);
}

.primaryBtn:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
}

.secondaryBtn {
  color: var(--primary-dark);
  background: #ffffff;
  border-color: #99f6e4;
}

.secondaryBtn:hover {
  background: var(--primary-soft);
  border-color: #5eead4;
}

.iconBtn {
  min-height: 36px;
  color: var(--primary-dark);
  background: var(--primary-soft);
  border-color: #99f6e4;
  padding-inline: 11px;
}

.smallBtn {
  min-height: 34px;
  padding: 7px 11px;
  font-size: 0.82rem;
}


/* =========================
   LOGIN
========================= */

.loginView {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 18px;
}

.loginCard {
  width: min(100%, 430px);
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(219, 227, 234, 0.9);
  border-radius: 22px;
  box-shadow: var(--shadow-md);
  padding: 20px;
}

.loginBrand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.brandMark,
.brandMiniMark {
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  color: #ffffff;
  background: linear-gradient(135deg, var(--primary), #14b8a6);
  box-shadow: 0 7px 16px rgba(15, 118, 110, 0.22);
  font-weight: 900;
}

.brandMark {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  font-size: 1.45rem;
}

.brandMiniMark {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  font-size: 1.06rem;
}

.loginBrand h1 {
  margin: 0;
  font-size: 1.22rem;
  line-height: 1.22;
  font-weight: 900;
  color: var(--text);
}

.loginBrand p {
  margin: 1px 0 0;
  color: var(--muted);
  font-size: 0.88rem;
  font-weight: 800;
  letter-spacing: 0.03em;
}

.loginInfoBox {
  display: grid;
  gap: 3px;
  padding: 12px;
  background: var(--surface-soft);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  margin-bottom: 14px;
}

.loginInfoBox strong {
  font-size: 0.98rem;
}

.loginInfoBox span {
  color: var(--muted);
  font-size: 0.88rem;
}

.loginForm {
  display: grid;
  gap: 9px;
}

.loginForm label {
  font-weight: 800;
  color: #334155;
}

.passwordWrap {
  display: flex;
  gap: 7px;
}

.passwordWrap input {
  flex: 1;
}

.loginForm input,
.searchBox input,
.dialogInput,
.dialogTextarea {
  width: 100%;
  min-height: 42px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  background: #ffffff;
  color: var(--text);
  padding: 9px 12px;
  font-size: 0.96rem;
  outline: none;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease,
    background 0.15s ease;
}

.loginForm input:focus,
.searchBox input:focus,
.dialogInput:focus,
.dialogTextarea:focus {
  border-color: #2dd4bf;
  box-shadow: 0 0 0 3px rgba(45, 212, 191, 0.16);
}

.loginFootnote {
  margin-top: 14px;
  color: var(--muted);
  font-size: 0.78rem;
  text-align: center;
}


/* =========================
   MAIN LAYOUT
========================= */

.mainView {
  min-height: 100vh;
  padding: 10px;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: min(1180px, 100%);
  margin: 0 auto 10px;
  padding: 10px;
  border: 1px solid rgba(219, 227, 234, 0.9);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(12px);
  box-shadow: var(--shadow-sm);
}

.topbarLeft,
.topbarRight {
  display: flex;
  align-items: center;
  gap: 8px;
}

.topbarLeft,
.topbarTitle {
  min-width: 0;
}

.topbarTitle h1 {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.1;
  font-weight: 900;
  white-space: nowrap;
}

.topbarTitle p {
  margin: 1px 0 0;
  color: var(--muted);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.03em;
}

.userBadge {
  display: grid;
  gap: 0;
  min-width: 104px;
  padding: 6px 10px;
  border-radius: 999px;
  background: var(--surface-soft);
  border: 1px solid var(--border);
}

.userBadge .userLabel {
  color: var(--muted);
  font-size: 0.68rem;
  font-weight: 700;
}

.userBadge strong {
  color: var(--text);
  font-size: 0.86rem;
  font-weight: 900;
  line-height: 1.12;
}


/* =========================
   TOOLBAR
========================= */

.toolbar {
  width: min(1180px, 100%);
  margin: 0 auto 10px;
  padding: 10px;
  border: 1px solid rgba(219, 227, 234, 0.9);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: var(--shadow-sm);
}

.toolbarMain {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  align-items: end;
}

.searchBox {
  display: grid;
  gap: 5px;
}

.searchBox label {
  color: #334155;
  font-size: 0.82rem;
  font-weight: 900;
}

.toolbarActions {
  display: flex;
  justify-content: flex-end;
}

.summaryPanel {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  margin-top: 10px;
}

.summaryItem {
  display: grid;
  gap: 2px;
  padding: 9px 10px;
  border-radius: var(--radius-md);
  background: var(--surface-soft);
  border: 1px solid var(--border);
}

.summaryItem span {
  color: var(--muted);
  font-size: 0.74rem;
  font-weight: 800;
}

.summaryItem strong {
  color: var(--text);
  font-size: 1.06rem;
  font-weight: 900;
}


/* =========================
   STATUS / EMPTY
========================= */

.statusBox,
.emptyState {
  width: min(1180px, 100%);
  margin: 0 auto 10px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.94);
  border-radius: 18px;
  box-shadow: var(--shadow-sm);
}

.statusBox {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  min-height: 58px;
  color: var(--muted);
  font-weight: 800;
}

.spinner {
  width: 20px;
  height: 20px;
  border-radius: 999px;
  border: 3px solid #ccfbf1;
  border-top-color: var(--primary);
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.emptyState {
  display: grid;
  place-items: center;
  gap: 7px;
  padding: 22px 14px;
  text-align: center;
}

.emptyIcon {
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  border-radius: 999px;
  background: var(--success-soft);
  color: var(--success);
  font-size: 1.5rem;
  font-weight: 900;
}

.emptyState h2 {
  margin: 0;
  font-size: 1.02rem;
}

.emptyState p {
  max-width: 620px;
  margin: 0;
  color: var(--muted);
  font-size: 0.86rem;
}


/* =========================
   INBOUND LIST / CARDS
========================= */

.contentWrap {
  width: min(1180px, 100%);
  margin: 0 auto;
}

.inboundList {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  padding-bottom: 22px;
}

.inboundCard {
  display: grid;
  gap: 9px;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(219, 227, 234, 0.95);
  border-radius: 18px;
  box-shadow: var(--shadow-sm);
  padding: 12px;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease,
    border-color 0.15s ease;
}

.inboundCard:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
  border-color: #99f6e4;
}

.cardHeader {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
}

.plateText {
  color: var(--text);
  font-size: 1.32rem;
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: 0.01em;
}

.autoIdText {
  margin-top: 2px;
  color: var(--muted);
  font-size: 0.78rem;
  font-weight: 800;
}

.brandBadge {
  flex: 0 0 auto;
  min-width: 68px;
  text-align: center;
  border-radius: 999px;
  padding: 5px 8px;
  color: #ffffff;
  font-size: 0.74rem;
  font-weight: 900;
  letter-spacing: 0.03em;
  line-height: 1.1;
}

.brandLoscam {
  background: var(--loscam);
}

.brandChep {
  background: var(--chep);
}

.cardBody {
  border-top: 1px dashed var(--border);
  border-bottom: 1px dashed var(--border);
  padding: 8px 0;
}

.infoGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px 10px;
}

.infoItem {
  min-width: 0;
  display: grid;
  gap: 1px;
}

.infoItem span {
  color: var(--muted);
  font-size: 0.72rem;
  font-weight: 800;
}

.infoItem strong {
  min-width: 0;
  color: var(--text);
  font-size: 0.86rem;
  font-weight: 900;
  line-height: 1.22;
  overflow-wrap: anywhere;
}

.cardActions {
  display: flex;
  justify-content: flex-end;
}

.cardActions .primaryBtn {
  width: 100%;
  min-height: 38px;
}


/* =========================
   SWEETALERT
========================= */

.swal2-container {
  padding: 8px !important;
}

.swal2-popup {
  font-family: var(--font-main) !important;
  border-radius: 20px !important;
  width: min(860px, calc(100vw - 16px)) !important;
  max-height: calc(100dvh - 16px) !important;
  overflow: hidden !important;
  padding: 14px !important;
}

.swal2-title {
  font-size: 1.15rem !important;
  font-weight: 900 !important;
  color: var(--text) !important;
  padding: 0 6px !important;
}

.swal2-html-container {
  margin: 0.6em 0 0 !important;
  color: var(--text) !important;
  max-height: calc(100dvh - 138px) !important;
  overflow-y: auto !important;
  overflow-x: hidden !important;
  padding: 0 3px 4px !important;
}

.swal2-actions {
  gap: 8px !important;
  margin-top: 10px !important;
}

.swal2-confirm,
.swal2-cancel {
  border-radius: 999px !important;
  padding: 9px 16px !important;
  font-weight: 900 !important;
}

.swal2-confirm {
  background: var(--primary) !important;
}

.swal2-cancel {
  background: #e2e8f0 !important;
  color: #334155 !important;
}

.swal2-validation-message {
  border-radius: var(--radius-md) !important;
  background: var(--danger-soft) !important;
  color: #7f1d1d !important;
  font-weight: 800 !important;
}


/* =========================
   RECORD OUT DIALOG
========================= */

.outDialog {
  display: grid;
  gap: 10px;
  text-align: left;
}

.dialogSection {
  display: grid;
  gap: 10px;
  padding: 12px;
  border-radius: 16px;
  border: 1px solid var(--border);
  background: var(--surface-soft);
}

.dialogSectionHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.dialogSection h3 {
  margin: 0;
  color: var(--primary-dark);
  font-size: 0.96rem;
  font-weight: 900;
}

.dialogInfoGrid,
.docPairGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
}

.dialogInfoItem {
  display: grid;
  gap: 1px;
  min-width: 0;
  padding: 8px 9px;
  border-radius: var(--radius-sm);
  background: #ffffff;
  border: 1px solid #e2e8f0;
}

.dialogInfoItem span {
  color: var(--muted);
  font-size: 0.7rem;
  font-weight: 800;
}

.dialogInfoItem strong {
  color: var(--text);
  font-size: 0.84rem;
  font-weight: 900;
  line-height: 1.2;
  overflow-wrap: anywhere;
}

.fieldGroup {
  display: grid;
  gap: 7px;
}

.fieldGroup label {
  color: #334155;
  font-size: 0.86rem;
  font-weight: 900;
}

.fieldGroup label em {
  color: var(--danger);
  font-style: normal;
}

.helpText {
  color: var(--muted);
  font-size: 0.73rem;
  line-height: 1.28;
}

.dialogTextarea {
  min-height: 72px;
  resize: vertical;
}


/* =========================
   DIALOG NOTICE / CONFIRM
========================= */

.dialogNotice {
  padding: 8px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 800;
  line-height: 1.32;
  border: 1px solid transparent;
}

.dialogNotice-info {
  background: var(--info-soft);
  color: var(--info);
  border-color: #bfdbfe;
}

.dialogNotice-success {
  background: var(--success-soft);
  color: var(--success-dark);
  border-color: #bbf7d0;
}

.dialogNotice-warning {
  background: var(--warning-soft);
  color: #92400e;
  border-color: #fde68a;
}

.dialogNotice-error {
  background: var(--danger-soft);
  color: #7f1d1d;
  border-color: #fecaca;
}

.confirmBox,
.successSummary {
  display: grid;
  gap: 7px;
  max-width: 460px;
  margin: 0 auto;
  text-align: left;
}

.confirmBox div,
.successSummary div {
  display: grid;
  grid-template-columns: 108px 1fr;
  gap: 7px;
  padding: 8px 9px;
  border-radius: var(--radius-sm);
  background: var(--surface-soft);
  border: 1px solid var(--border);
}

.confirmBox span,
.successSummary span {
  color: var(--muted);
  font-weight: 800;
  font-size: 0.78rem;
}

.confirmBox strong,
.successSummary strong {
  color: var(--text);
  font-weight: 900;
  font-size: 0.84rem;
  overflow-wrap: anywhere;
}

.confirmNote {
  margin-top: 10px;
  padding: 9px 10px;
  border-radius: 12px;
  background: var(--warning-soft);
  border: 1px solid #fde68a;
  color: #92400e;
  font-size: 0.82rem;
  font-weight: 800;
  line-height: 1.35;
  text-align: left;
}


/* =========================
   MANAGE MENU
========================= */

.manageWrap {
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex: 0 0 auto;
}

.manageDataBtn {
  min-height: 30px;
  padding: 5px 10px;
  border-radius: 999px;
  border: 1px solid #86efac;
  background: var(--success);
  color: #ffffff;
  font-size: 0.74rem;
  font-weight: 900;
  line-height: 1;
  box-shadow: 0 4px 10px rgba(22, 163, 74, 0.18);
}

.manageDataBtn:hover {
  background: var(--success-dark);
}

.manageMenu {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  z-index: 20;
  display: grid;
  gap: 6px;
  min-width: 138px;
  padding: 7px;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-md);
}

.manageMenuBtn {
  width: 100%;
  min-height: 32px;
  padding: 7px 10px;
  border-radius: 10px;
  border: 1px solid transparent;
  font-size: 0.78rem;
  font-weight: 900;
  text-align: left;
}

.manageMenuBtn.danger {
  background: var(--danger-soft);
  color: var(--danger-dark);
  border-color: #fecaca;
}

.manageMenuBtn.danger:hover {
  background: #fecaca;
}


/* =========================
   BRAND SELECT
========================= */

.brandSelectGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  width: 100%;
}

.brandOption {
  position: relative;
  display: grid;
  grid-template-rows: auto auto;
  align-items: center;
  justify-items: center;
  gap: 6px;
  min-height: 126px;
  height: auto;
  padding: 7px;
  border: 2px solid var(--border);
  border-radius: 14px;
  background: #ffffff;
  color: var(--text);
  overflow: visible;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease,
    transform 0.15s ease,
    background 0.15s ease;
}

.brandOption:hover {
  border-color: #5eead4;
  transform: translateY(-1px);
}

.brandOption.isSelected {
  border-color: var(--primary);
  background: #f0fdfa;
  box-shadow: 0 0 0 3px rgba(45, 212, 191, 0.16);
}

.brandOption.isSelected::after {
  content: "เลือกแล้ว";
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 5;
  padding: 2px 6px;
  border-radius: 999px;
  background: var(--primary);
  color: #ffffff;
  font-size: 0.58rem;
  font-weight: 900;
}

.brandImageBox {
  width: 100%;
  height: 88px;
  display: block;
  position: relative;
  background-color: #ffffff;
  background-image: var(--brand-img);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  border: 1px solid #dbe3ea;
  border-radius: 11px;
  overflow: hidden;
}

.brandImageBox .brandFallbackImg {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center center;
  opacity: 0;
  pointer-events: none;
}

.brandImageBox span {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  color: var(--muted);
  font-weight: 900;
}

.brandOption strong {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 0.78rem;
  line-height: 1;
  font-weight: 900;
  margin: 0;
}

.optionMissing {
  grid-column: 1 / -1;
  padding: 10px;
  border-radius: var(--radius-md);
  background: var(--warning-soft);
  color: #92400e;
  font-weight: 800;
  text-align: center;
}


/* =========================
   QTY SELECT
========================= */

.qtySelectGrid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 7px;
}

.qtyChip {
  min-width: 0;
  min-height: 38px;
  padding: 7px 8px;
  border-radius: 999px;
  border: 2px solid var(--border);
  background: #ffffff;
  color: var(--text);
  font-size: 0.86rem;
  font-weight: 900;
  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    box-shadow 0.15s ease,
    transform 0.15s ease;
}

.qtyChip:hover {
  border-color: #5eead4;
  transform: translateY(-1px);
}

.qtyChip.isSelected {
  border-color: var(--primary);
  background: #f0fdfa;
  color: var(--primary-dark);
  box-shadow: 0 0 0 3px rgba(45, 212, 191, 0.16);
}


/* =========================
   EVIDENCE / IMAGE INPUT
========================= */

.hiddenFileInput {
  position: fixed;
  left: -9999px;
  top: -9999px;
  width: 1px;
  height: 1px;
  opacity: 0;
}

.evidenceControl {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
  align-items: center;
}

.evidenceControl .secondaryBtn {
  width: 100%;
  min-height: 40px;
}

.evidenceCount {
  grid-column: 1 / -1;
  display: block;
  padding: 7px 9px;
  border-radius: 11px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  color: var(--muted);
  text-align: center;
  font-size: 0.8rem;
  font-weight: 800;
}

.evidencePreviewGrid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 7px;
}

.evidenceThumb {
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: #e2e8f0;
}

.evidenceThumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.removeEvidenceBtn {
  position: absolute;
  top: 4px;
  right: 4px;
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  border-radius: 999px;
  border: 0;
  background: rgba(220, 38, 38, 0.94);
  color: #ffffff;
  font-size: 1.05rem;
  font-weight: 900;
  line-height: 1;
}


/* =========================
   INLINE CAMERA
========================= */

.inlineCameraPanel {
  display: grid;
  gap: 8px;
  padding: 8px;
  border-radius: 16px;
  border: 1px solid #99f6e4;
  background: #f0fdfa;
}

.inlineCameraVideo {
  display: block;
  width: 100%;
  height: clamp(190px, 38dvh, 430px);
  max-height: 430px;
  border-radius: 14px;
  background: #020617;
  object-fit: contain;
  border: 1px solid #dbe3ea;
}

.inlineCameraCanvas {
  display: none;
}

.inlineCameraActions {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
}

.inlineCameraActions button {
  width: 100%;
}


/* =========================
   RESPONSIVE TABLET
========================= */

@media (max-width: 900px) {
  .inboundList {
    grid-template-columns: 1fr;
  }

  .toolbarMain {
    grid-template-columns: 1fr;
  }

  .toolbarActions {
    justify-content: stretch;
  }

  .toolbarActions .secondaryBtn {
    width: 100%;
  }
}


/* =========================
   RESPONSIVE MOBILE
========================= */

@media (max-width: 640px) {
  body {
    background:
      radial-gradient(circle at top left, rgba(15, 118, 110, 0.1), transparent 20rem),
      linear-gradient(180deg, #eef7f5 0%, var(--bg) 48%, #eef2f7 100%);
  }

  .mainView {
    padding: 6px;
  }

  .loginView {
    padding: 10px;
  }

  .loginCard {
    padding: 15px;
    border-radius: 18px;
  }

  .loginBrand {
    gap: 9px;
    margin-bottom: 12px;
  }

  .brandMark {
    width: 44px;
    height: 44px;
    border-radius: 14px;
    font-size: 1.22rem;
  }

  .loginBrand h1 {
    font-size: 1.02rem;
  }

  .loginBrand p {
    font-size: 0.76rem;
  }

  .loginInfoBox {
    padding: 10px;
    margin-bottom: 11px;
  }

  .loginInfoBox span {
    font-size: 0.8rem;
  }

  .passwordWrap {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 6px;
  }

  .loginForm input,
  .searchBox input,
  .dialogInput,
  .dialogTextarea {
    min-height: 39px;
    padding: 8px 10px;
    font-size: 0.9rem;
  }

  .topbar {
    gap: 6px;
    border-radius: 16px;
    padding: 8px;
    margin-bottom: 7px;
  }

  .brandMiniMark {
    width: 34px;
    height: 34px;
    border-radius: 11px;
    font-size: 0.96rem;
  }

  .topbarTitle h1 {
    font-size: 0.92rem;
  }

  .topbarTitle p {
    font-size: 0.68rem;
  }

  .topbarRight {
    gap: 5px;
    flex-shrink: 0;
  }

  .userBadge {
    min-width: 76px;
    max-width: 92px;
    padding: 5px 7px;
  }

  .userBadge .userLabel {
    font-size: 0.62rem;
  }

  .userBadge strong {
    font-size: 0.76rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .smallBtn {
    min-height: 31px;
    padding: 6px 8px;
    font-size: 0.72rem;
  }

  .toolbar {
    border-radius: 16px;
    padding: 8px;
    margin-bottom: 7px;
  }

  .toolbarMain {
    gap: 7px;
  }

  .searchBox {
    gap: 4px;
  }

  .searchBox label {
    font-size: 0.76rem;
  }

  .summaryPanel {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 6px;
    margin-top: 7px;
  }

  .summaryItem {
    padding: 7px 8px;
  }

  .summaryItem span {
    font-size: 0.68rem;
  }

  .summaryItem strong {
    font-size: 0.94rem;
  }

  .statusBox {
    min-height: 48px;
    border-radius: 15px;
    margin-bottom: 7px;
  }

  .inboundList {
    gap: 7px;
    padding-bottom: 16px;
  }

  .inboundCard {
    border-radius: 15px;
    padding: 9px;
    gap: 7px;
  }

  .plateText {
    font-size: 1.08rem;
  }

  .autoIdText {
    font-size: 0.7rem;
  }

  .brandBadge {
    min-width: 58px;
    padding: 4px 7px;
    font-size: 0.66rem;
  }

  .cardBody {
    padding: 7px 0;
  }

  .infoGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 6px 8px;
  }

  .infoItem span {
    font-size: 0.66rem;
  }

  .infoItem strong {
    font-size: 0.78rem;
    line-height: 1.15;
  }

  .cardActions .primaryBtn {
    min-height: 36px;
    font-size: 0.86rem;
  }

  .swal2-container {
    padding: 5px !important;
  }

  .swal2-popup {
    width: calc(100vw - 10px) !important;
    max-height: calc(100dvh - 10px) !important;
    border-radius: 16px !important;
    padding: 9px !important;
  }

  .swal2-title {
    font-size: 1rem !important;
    padding: 0 4px !important;
  }

  .swal2-html-container {
    margin-top: 0.45em !important;
    max-height: calc(100dvh - 118px) !important;
    padding-inline: 0 !important;
  }

  .swal2-actions {
    margin-top: 8px !important;
    gap: 6px !important;
  }

  .swal2-confirm,
  .swal2-cancel {
    padding: 8px 14px !important;
    font-size: 0.9rem !important;
  }

  .outDialog {
    gap: 8px;
  }

  .dialogSection {
    padding: 8px;
    border-radius: 14px;
    gap: 8px;
  }

  .dialogSection h3 {
    font-size: 0.9rem;
  }

  .dialogInfoGrid,
  .docPairGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 6px;
  }

  .dialogInfoItem {
    padding: 6px 7px;
    border-radius: 9px;
  }

  .dialogInfoItem span {
    font-size: 0.64rem;
  }

  .dialogInfoItem strong {
    font-size: 0.76rem;
    line-height: 1.15;
  }

  .fieldGroup {
    gap: 6px;
  }

  .fieldGroup label {
    font-size: 0.8rem;
  }

  .helpText {
    font-size: 0.67rem;
    line-height: 1.22;
  }

  .dialogNotice {
    padding: 7px 8px;
    font-size: 0.74rem;
    border-radius: 10px;
  }

  .manageDataBtn {
    min-height: 28px;
    padding: 5px 8px;
    font-size: 0.68rem;
  }

  .manageMenu {
    min-width: 130px;
  }

  .manageMenuBtn {
    min-height: 30px;
    font-size: 0.72rem;
  }

  .brandSelectGrid {
    gap: 7px;
  }

  .brandOption {
    min-height: 116px;
    padding: 6px;
    border-radius: 13px;
  }

  .brandImageBox {
    height: 82px;
    border-radius: 10px;
  }

  .brandOption strong {
    font-size: 0.74rem;
  }

  .qtySelectGrid {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 6px;
  }

  .qtyChip {
    min-height: 34px;
    padding: 6px 4px;
    font-size: 0.78rem;
  }

  .evidenceControl {
    gap: 6px;
  }

  .evidenceControl .secondaryBtn {
    min-height: 38px;
    font-size: 0.82rem;
    padding: 7px 8px;
  }

  .evidenceCount {
    padding: 6px 8px;
    font-size: 0.73rem;
    border-radius: 9px;
  }

  .evidencePreviewGrid {
    gap: 5px;
  }

  .evidenceThumb {
    border-radius: 9px;
  }

  .removeEvidenceBtn {
    width: 23px;
    height: 23px;
    top: 3px;
    right: 3px;
    font-size: 0.96rem;
  }

  .inlineCameraPanel {
    padding: 7px;
    gap: 7px;
    border-radius: 13px;
  }

  .inlineCameraVideo {
    height: clamp(160px, 32dvh, 330px);
    max-height: 330px;
    border-radius: 11px;
  }

  .inlineCameraActions {
    gap: 6px;
  }

  .inlineCameraActions button {
    min-height: 36px;
    font-size: 0.82rem;
  }

  .confirmBox,
  .successSummary {
    gap: 6px;
  }

  .confirmBox div,
  .successSummary div {
    grid-template-columns: 92px 1fr;
    gap: 6px;
    padding: 7px 8px;
  }

  .confirmBox span,
  .successSummary span {
    font-size: 0.72rem;
  }

  .confirmBox strong,
  .successSummary strong {
    font-size: 0.78rem;
  }

  .confirmNote {
    padding: 8px;
    font-size: 0.74rem;
  }
}


/* =========================
   RESPONSIVE SMALL MOBILE
========================= */

@media (max-width: 420px) {
  .mainView {
    padding: 5px;
  }

  .topbar {
    padding: 7px;
  }

  .brandMiniMark {
    width: 31px;
    height: 31px;
    border-radius: 10px;
    font-size: 0.88rem;
  }

  .topbarTitle h1 {
    font-size: 0.86rem;
  }

  .topbarTitle p {
    font-size: 0.63rem;
  }

  .userBadge {
    min-width: 68px;
    max-width: 82px;
    padding: 4px 6px;
  }

  .userBadge .userLabel {
    font-size: 0.58rem;
  }

  .userBadge strong {
    font-size: 0.7rem;
  }

  .smallBtn {
    min-height: 30px;
    padding-inline: 7px;
    font-size: 0.68rem;
  }

  .toolbar {
    padding: 7px;
  }

  .summaryPanel {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .inboundCard {
    padding: 8px;
    gap: 6px;
  }

  .plateText {
    font-size: 1rem;
  }

  .brandBadge {
    min-width: 52px;
    font-size: 0.61rem;
    padding: 4px 6px;
  }

  .infoGrid,
  .dialogInfoGrid,
  .docPairGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 7px;
  }

  .infoItem span {
    font-size: 0.62rem;
  }

  .infoItem strong {
    font-size: 0.72rem;
  }

  .dialogSectionHeader {
    align-items: flex-start;
  }

  .brandOption {
    min-height: 108px;
    padding: 5px;
    border-radius: 12px;
  }

  .brandImageBox {
    height: 76px;
    border-radius: 10px;
  }

  .brandOption strong {
    font-size: 0.7rem;
  }

  .qtyChip {
    min-height: 32px;
    font-size: 0.72rem;
  }

  .inlineCameraVideo {
    height: clamp(145px, 30dvh, 285px);
    max-height: 285px;
  }

  .swal2-actions {
    flex-direction: row !important;
    width: 100% !important;
  }

  .swal2-confirm,
  .swal2-cancel {
    width: auto !important;
    min-width: 112px !important;
  }
}
หลังวางแล้วให้แก้ version ใน index.html เป็นเลขใหม่ เช่น:

<link rel="stylesheet" href="./style.css?v=13">
<script src="./app.js?v=11" defer></script>
รอบถัดไปควรตรวจ app.js แบบรวมทั้งไฟล์อีกครั้ง เพราะตอนนี้เรามีการเพิ่ม TCR และปุ่มจัดการข้อมูลแล้ว แต่ไฟล์ app.js ที่ส่งมาล่าสุดยังเป็นชุดก่อนเพิ่ม CSS ใหม่ และยังต้องตรวจว่าใส่ handleSuppressInbound() กับ tcrNoInput ครบทุกตำแหน่งแล้วหรือยัง.


36b4db40-4896-4f2f-90ef-30eff9481503.png
CSSปรับออกมาแย่มาก ECDและ TCR อยู่แถวเดียวกัน(สองข้อมูล)แล้วส่วนการแก้ไขอยู่ไหน

คิดเป็นเวลา 8s
ถูกครับ ภาพที่ส่งมามี 2 ปัญหาแยกกัน:

CSS ปุ่มจัดการข้อมูลยังไม่ทำงาน เพราะ CSS ชุดก่อนมีโครงสร้างซ้ำ/ซ้อน @media ผิดตำแหน่ง ทำให้บาง class ถูกทับ และปุ่มเลยออกมาเป็นปุ่ม default แบบในภาพ 


ECD/TCR ยังไม่อยู่แถวเดียวกัน และปุ่มแก้ไขยังไม่ขึ้น เพราะส่วนนี้ไม่ใช่ CSS อย่างเดียว ต้องให้ app.js สร้าง HTML เป็น docPairGrid และต้องเพิ่มปุ่ม แก้ไขข้อมูล ในเมนูด้วย

ให้แก้แบบนี้ก่อนครับ

1. แก้ app.js ตรงปุ่มจัดการข้อมูล
ใน buildRecordOutDialogHtml(row) ให้หา block นี้:

<div class="manageMenu isHidden">
  <button id="suppressInboundBtn" type="button" class="manageMenuBtn danger">
    ซ่อนรายการนี้
  </button>
</div>
หรือถ้ามีแค่ปุ่ม ซ่อนรายการนี้ ธรรมดา ให้เปลี่ยนเป็นชุดนี้:

<div class="manageMenu isHidden" id="manageMenu">
  <button id="suppressInboundBtn" type="button" class="manageMenuBtn danger">
    ซ่อนรายการนี้
  </button>

  <button id="editOutboundBtn" type="button" class="manageMenuBtn edit">
    แก้ไขข้อมูล
  </button>
</div>
และปุ่มหลักต้องเป็นแบบนี้:

<button id="manageDataBtn" type="button" class="manageDataBtn">
  จัดการข้อมูล
</button>
2. แก้ app.js ให้ ECD/TCR อยู่แถวเดียวกัน
ใน buildRecordOutDialogHtml(row) ให้หา block ช่อง ECD เดิม แล้วแทนด้วยชุดนี้:

<div class="docPairGrid">
  <div class="fieldGroup">
    <label for="ecdNameInput">หมายเลขเอกสาร ECD <em>*</em></label>
    <input
      id="ecdNameInput"
      class="dialogInput"
      type="text"
      inputmode="latin"
      autocomplete="off"
      placeholder="ECD001"
      maxlength="30"
    >
  </div>

  <div class="fieldGroup">
    <label for="tcrNoInput">หมายเลขเอกสาร TCR <em>*</em></label>
    <input
      id="tcrNoInput"
      class="dialogInput"
      type="text"
      inputmode="latin"
      autocomplete="off"
      placeholder="TCR001"
      maxlength="30"
    >
  </div>
</div>

<div class="helpText">
  ECD/TCR ใช้ได้เฉพาะ A-Z, a-z, 0-9 ห้ามเว้นวรรคและห้ามอักขระพิเศษ
</div>
ถ้าตรงนี้ยังไม่เปลี่ยน CSS จะจัดแถวไม่ได้ เพราะ HTML ยังไม่มี docPairGrid

3. แก้ initDialogEvents(row) ให้ปุ่มแก้ไขขึ้นก่อน
เพิ่มตัวแปรนี้:

const editOutboundBtn = $("editOutboundBtn");
ต่อจาก:

const suppressInboundBtn = $("suppressInboundBtn");
แล้วเพิ่ม event นี้:

if (editOutboundBtn) {
  editOutboundBtn.addEventListener("click", () => {
    showDialogNotice(
      "ฟังก์ชันแก้ไขข้อมูลจะอยู่ในรอบถัดไป: เลือกเดือน/วันที่ แล้วดึงข้อมูลที่บันทึกออกแล้วมาแก้ไข",
      "info"
    );
  });
}
ตอนนี้ปุ่ม แก้ไขข้อมูล จะแสดงก่อน ส่วนระบบแก้ไขจริงต้องเพิ่ม endpoint เพิ่มใน Code.gs และ worker.js รอบถัดไป

4. ลบ CSS ชุดท้ายไฟล์เดิมที่ซ้ำออกก่อน
ใน style.css ของคุณมี block ซ้ำพวกนี้ท้ายไฟล์หลายชุด:

FORCE BRAND PALLET IMAGE TO SHOW COMPLETE
BRAND IMAGE FINAL FIX
@media (max-width: 640px)
@media (max-width: 420px)
ให้ลบ block ซ้ำท้ายไฟล์พวกนี้ออกทั้งหมดก่อน แล้ววาง CSS ชุดด้านล่างไว้ ท้ายไฟล์เท่านั้น

5. CSS ชุดแก้เฉพาะจุด วางท้ายไฟล์
/* =====================================================
   FIX: DIALOG HEADER / MANAGE MENU / ECD-TCR / BRAND
   วางท้าย style.css เท่านั้น
===================================================== */

/* ---------- Dialog Section Header ---------- */

.dialogSectionHeader {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  gap: 8px !important;
  width: 100% !important;
}

.dialogSectionHeader h3 {
  margin: 0 !important;
  min-width: 0 !important;
  flex: 1 1 auto !important;
}

/* ---------- Manage Button ---------- */

.manageWrap {
  position: relative !important;
  display: flex !important;
  justify-content: flex-end !important;
  flex: 0 0 auto !important;
}

.manageDataBtn {
  min-height: 28px !important;
  padding: 5px 10px !important;
  border-radius: 999px !important;
  border: 1px solid #86efac !important;
  background: #16a34a !important;
  color: #ffffff !important;
  font-size: 0.72rem !important;
  font-weight: 900 !important;
  line-height: 1 !important;
  box-shadow: 0 4px 10px rgba(22, 163, 74, 0.18) !important;
}

.manageDataBtn:hover {
  background: #166534 !important;
}

/* ---------- Manage Dropdown ---------- */

.manageMenu {
  position: absolute !important;
  top: calc(100% + 6px) !important;
  right: 0 !important;
  z-index: 50 !important;

  display: grid !important;
  gap: 6px !important;

  min-width: 138px !important;
  padding: 7px !important;

  border-radius: 12px !important;
  background: #ffffff !important;
  border: 1px solid #dbe3ea !important;
  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.14) !important;
}

.manageMenu.isHidden {
  display: none !important;
}

.manageMenuBtn {
  width: 100% !important;
  min-height: 32px !important;
  padding: 7px 10px !important;

  border-radius: 10px !important;
  border: 1px solid transparent !important;

  font-size: 0.76rem !important;
  font-weight: 900 !important;
  text-align: left !important;
  white-space: nowrap !important;
}

.manageMenuBtn.danger {
  background: #fee2e2 !important;
  color: #991b1b !important;
  border-color: #fecaca !important;
}

.manageMenuBtn.edit {
  background: #dcfce7 !important;
  color: #166534 !important;
  border-color: #bbf7d0 !important;
}

.manageMenuBtn.danger:hover {
  background: #fecaca !important;
}

.manageMenuBtn.edit:hover {
  background: #bbf7d0 !important;
}

/* ---------- ECD / TCR Same Row ---------- */

.docPairGrid {
  display: grid !important;
  grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  gap: 8px !important;
  width: 100% !important;
}

.docPairGrid .fieldGroup {
  min-width: 0 !important;
}

.docPairGrid .dialogInput {
  width: 100% !important;
}

/* ---------- Brand Image Clean ---------- */

.brandSelectGrid {
  display: grid !important;
  grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  gap: 8px !important;
  width: 100% !important;
}

.brandOption {
  position: relative !important;
  display: grid !important;
  grid-template-rows: auto auto !important;
  gap: 6px !important;
  align-items: center !important;
  justify-items: center !important;

  min-height: 118px !important;
  padding: 7px !important;

  border: 2px solid #dbe3ea !important;
  border-radius: 14px !important;
  background: #ffffff !important;
  overflow: visible !important;
}

.brandOption.isSelected {
  border-color: #0f766e !important;
  background: #f0fdfa !important;
  box-shadow: 0 0 0 3px rgba(45, 212, 191, 0.16) !important;
}

.brandOption.isSelected::after {
  content: "เลือกแล้ว" !important;
  position: absolute !important;
  top: 5px !important;
  right: 5px !important;
  z-index: 5 !important;
  padding: 2px 6px !important;
  border-radius: 999px !important;
  background: #0f766e !important;
  color: #ffffff !important;
  font-size: 0.58rem !important;
  font-weight: 900 !important;
}

.brandImageBox {
  width: 100% !important;
  height: 84px !important;

  display: block !important;
  position: relative !important;

  background-color: #ffffff !important;
  background-image: var(--brand-img) !important;
  background-repeat: no-repeat !important;
  background-position: center center !important;
  background-size: contain !important;

  border: 1px solid #dbe3ea !important;
  border-radius: 11px !important;
  overflow: hidden !important;
}

.brandImageBox .brandFallbackImg {
  width: 100% !important;
  height: 100% !important;
  object-fit: contain !important;
  object-position: center center !important;
  opacity: 0 !important;
  pointer-events: none !important;
}

.brandOption strong {
  display: block !important;
  width: 100% !important;
  margin: 0 !important;
  text-align: center !important;
  font-size: 0.76rem !important;
  line-height: 1 !important;
  font-weight: 900 !important;
}

/* ---------- Mobile Compact ---------- */

@media (max-width: 640px) {
  .dialogSectionHeader {
    align-items: flex-start !important;
  }

  .manageDataBtn {
    min-height: 26px !important;
    padding: 5px 8px !important;
    font-size: 0.66rem !important;
  }

  .manageMenu {
    min-width: 126px !important;
    padding: 6px !important;
  }

  .manageMenuBtn {
    min-height: 30px !important;
    padding: 6px 8px !important;
    font-size: 0.7rem !important;
  }

  .docPairGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 6px !important;
  }

  .docPairGrid label {
    font-size: 0.74rem !important;
  }

  .docPairGrid .dialogInput {
    min-height: 36px !important;
    padding: 7px 8px !important;
    font-size: 0.84rem !important;
  }

  .brandSelectGrid {
    gap: 7px !important;
  }

  .brandOption {
    min-height: 108px !important;
    padding: 6px !important;
    border-radius: 12px !important;
  }

  .brandImageBox {
    height: 76px !important;
    border-radius: 10px !important;
  }

  .brandOption strong {
    font-size: 0.7rem !important;
  }
}

@media (max-width: 420px) {
  .docPairGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 5px !important;
  }

  .docPairGrid label {
    font-size: 0.68rem !important;
  }

  .docPairGrid .dialogInput {
    min-height: 34px !important;
    padding: 6px 7px !important;
    font-size: 0.78rem !important;
  }

  .brandOption {
    min-height: 100px !important;
    padding: 5px !important;
  }

  .brandImageBox {
    height: 70px !important;
  }

  .brandOption strong {
    font-size: 0.66rem !important;
  }
}
6. สรุปเรื่อง “ปุ่มแก้ไขอยู่ไหน”
ตอนนี้ที่ยังไม่เห็น เพราะใน app.js ยังต้องเพิ่มปุ่มนี้เข้าไปใน manageMenu:

<button id="editOutboundBtn" type="button" class="manageMenuBtn edit">
  แก้ไขข้อมูล
</button>
และต้องเพิ่ม event:

if (editOutboundBtn) {
  editOutboundBtn.addEventListener("click", () => {
    showDialogNotice(
      "ฟังก์ชันแก้ไขข้อมูลจะอยู่ในรอบถัดไป: เลือกเดือน/วันที่ แล้วดึงข้อมูลที่บันทึกออกแล้วมาแก้ไข",
      "info"
    );
  });
}
ถ้าใส่ครบ เมนูจะเป็นแบบนี้:

จัดการข้อมูล
  - ซ่อนรายการนี้
  - แก้ไขข้อมูล
7. เปลี่ยน version ใน index.html
หลังแก้แล้วเปลี่ยนเป็น:

<link rel="stylesheet" href="./style.css?v=14">
<script src="./app.js?v=12" defer></script>
จุดต่อไปควรทำ app.js แบบรวมทั้งไฟล์ใหม่ เพราะตอนนี้การเพิ่ม TCR, จัดการข้อมูล, ซ่อนรายการนี้, และ แก้ไขข้อมูล ต้องจัดให้ครบในไฟล์เดียว ไม่ควร patch ทีละจุดแล้วครับ.



ข้อความที่วาง (1)(263).txt
เอกสาร
เขียนapp.js ที่ปรับปรุงแล้วมาให้ครบถ้วน 

คิดเป็นเวลา 10s
ตรวจจาก app.js ล่าสุดแล้ว จุดที่ต้องจัดใหม่คือโครงสร้าง HTML ใน SweetAlert ยังไม่เรียบร้อย, ปุ่ม แก้ไขข้อมูล ยังไม่มีในเมนู, ตัวแปร/indent หลายจุดไม่เป็นระเบียบ และระบบ TCR/Suppress ถูกเพิ่มแบบ patch ทำให้เสี่ยงหลุดตำแหน่งง่าย 


ด้านล่างคือ app.js ฉบับปรับปรุงครบทั้งไฟล์ วางแทนไฟล์เดิมได้เลย

/* =====================================================
 * Pallet OUT System - Frontend App
 * File: app.js
 * ใช้กับ index.html + style.css
 * ===================================================== */

(function () {
  "use strict";

  /* =========================
   * CONFIG
   * ========================= */

  const CONFIG = Object.assign(
    {
      API_BASE: "",
      MAX_IMAGES: 4,
      MIN_IMAGES: 1,
      IMAGE_MAX_WIDTH: 1280,
      IMAGE_MAX_HEIGHT: 1280,
      IMAGE_QUALITY: 0.78,
      IMAGE_OUTPUT_TYPE: "image/jpeg",
      DATE_TIME_FORMAT: "dd/MM/yyyy HH:mm:ss"
    },
    window.APP_CONFIG || {}
  );

  const STORAGE_KEY_USER = "PALLET_OUT_CURRENT_USER";
  const STORAGE_KEY_LOGIN_AT = "PALLET_OUT_LOGIN_AT";

  const ECD_REGEX = /^[A-Za-z0-9]+$/;
  const TCR_REGEX = /^[A-Za-z0-9]+$/;
  const DEFAULT_PALLET_QTY = [10, 20, 30, 40, 50, 60, 80, 100];

  const state = {
    currentUser: "",
    options: {
      brands: [],
      palletQty: []
    },
    inboundRows: [],
    filteredRows: [],
    selectedEvidenceFiles: [],
    selectedEvidencePayloads: [],
    selectedBrand: "",
    selectedQty: "",
    isSubmitting: false
  };

  let inlineCameraStream = null;

  /* =========================
   * DOM
   * ========================= */

  const $ = (id) => document.getElementById(id);

  const els = {
    loginView: $("loginView"),
    mainView: $("mainView"),
    loginForm: $("loginForm"),
    passInput: $("passInput"),
    loginBtn: $("loginBtn"),
    togglePassBtn: $("togglePassBtn"),

    currentUserName: $("currentUserName"),
    logoutBtn: $("logoutBtn"),
    refreshBtn: $("refreshBtn"),
    emptyRefreshBtn: $("emptyRefreshBtn"),

    searchInput: $("searchInput"),
    openCountText: $("openCountText"),
    lastUpdatedText: $("lastUpdatedText"),

    statusBox: $("statusBox"),
    statusText: $("statusText"),
    emptyState: $("emptyState"),
    inboundList: $("inboundList"),

    cameraInput: $("cameraInput"),
    uploadInput: $("uploadInput")
  };

  /* =========================
   * INIT
   * ========================= */

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    bindEvents();

    const savedUser = sessionStorage.getItem(STORAGE_KEY_USER) || "";

    if (savedUser) {
      state.currentUser = savedUser;
      showMainView(savedUser);
      loadInitialData();
      return;
    }

    showLoginView();

    const passFromUrl = getPassFromUrl();

    if (passFromUrl && els.passInput) {
      els.passInput.value = passFromUrl;

      setTimeout(() => {
        if (els.loginForm) {
          els.loginForm.requestSubmit();
        }
      }, 300);
    }
  }

  function bindEvents() {
    if (els.loginForm) {
      els.loginForm.addEventListener("submit", handleLoginSubmit);
    }

    if (els.togglePassBtn) {
      els.togglePassBtn.addEventListener("click", togglePassword);
    }

    if (els.logoutBtn) {
      els.logoutBtn.addEventListener("click", handleLogout);
    }

    if (els.refreshBtn) {
      els.refreshBtn.addEventListener("click", () => loadInboundRows(true));
    }

    if (els.emptyRefreshBtn) {
      els.emptyRefreshBtn.addEventListener("click", () => loadInboundRows(true));
    }

    if (els.searchInput) {
      els.searchInput.addEventListener("input", handleSearch);
    }

    if (els.cameraInput) {
      els.cameraInput.addEventListener("change", handleEvidenceInputChange);
    }

    if (els.uploadInput) {
      els.uploadInput.addEventListener("change", handleEvidenceInputChange);
    }
  }

  /* =========================
   * VIEW CONTROL
   * ========================= */

  function showLoginView() {
    if (els.loginView) els.loginView.classList.remove("isHidden");
    if (els.mainView) els.mainView.classList.add("isHidden");

    setTimeout(() => {
      if (els.passInput) els.passInput.focus();
    }, 100);
  }

  function showMainView(name) {
    if (els.loginView) els.loginView.classList.add("isHidden");
    if (els.mainView) els.mainView.classList.remove("isHidden");
    if (els.currentUserName) els.currentUserName.textContent = name || "-";
  }

  function setStatus(show, text) {
    if (!els.statusBox) return;

    if (show) {
      els.statusBox.classList.remove("isHidden");

      if (els.statusText) {
        els.statusText.textContent = text || "กำลังโหลดข้อมูล...";
      }
    } else {
      els.statusBox.classList.add("isHidden");
    }
  }

  function setEmptyState(show) {
    if (!els.emptyState) return;

    if (show) {
      els.emptyState.classList.remove("isHidden");
    } else {
      els.emptyState.classList.add("isHidden");
    }
  }

  function setButtonLoading(button, isLoading, loadingText) {
    if (!button) return;

    if (isLoading) {
      button.dataset.originalText = button.textContent;
      button.disabled = true;
      button.textContent = loadingText || "กำลังทำงาน...";
    } else {
      button.disabled = false;
      button.textContent = button.dataset.originalText || button.textContent;
    }
  }

  /* =========================
   * LOGIN
   * ========================= */

  async function handleLoginSubmit(e) {
    e.preventDefault();

    const pass = String(els.passInput.value || "").trim();

    if (!pass) {
      await Swal.fire({
        icon: "warning",
        title: "กรุณากรอกรหัส",
        text: "ต้องกรอกรหัสผู้ใช้งานก่อนเข้าสู่ระบบ",
        confirmButtonText: "ตกลง"
      });
      return;
    }

    try {
      setButtonLoading(els.loginBtn, true, "กำลังตรวจสอบ...");

      const res = await apiPost("/api/login", { pass });

      if (!res.ok) {
        await Swal.fire({
          icon: "error",
          title: "เข้าสู่ระบบไม่สำเร็จ",
          text: res.message || "รหัสผ่านไม่ถูกต้อง",
          confirmButtonText: "ตกลง"
        });
        return;
      }

      const name = String(res.name || "").trim();

      if (!name) {
        throw new Error("ระบบไม่พบชื่อผู้ใช้งานจากรหัสนี้");
      }

      state.currentUser = name;

      sessionStorage.setItem(STORAGE_KEY_USER, name);
      sessionStorage.setItem(STORAGE_KEY_LOGIN_AT, getNowDisplay());

      els.passInput.value = "";

      showMainView(name);

      await Swal.fire({
        icon: "success",
        title: "เข้าสู่ระบบสำเร็จ",
        text: "ผู้ใช้งาน: " + name,
        timer: 1200,
        showConfirmButton: false
      });

      await loadInitialData();

    } catch (err) {
      await showError(err);
    } finally {
      setButtonLoading(els.loginBtn, false);
    }
  }

  function togglePassword() {
    const input = els.passInput;
    if (!input) return;

    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";
    els.togglePassBtn.textContent = isPassword ? "ซ่อน" : "แสดง";
  }

  async function handleLogout() {
    const result = await Swal.fire({
      icon: "question",
      title: "ออกจากระบบ?",
      text: "ต้องการออกจากระบบใช่หรือไม่",
      showCancelButton: true,
      confirmButtonText: "ออกจากระบบ",
      cancelButtonText: "ยกเลิก",
      reverseButtons: true
    });

    if (!result.isConfirmed) return;

    sessionStorage.removeItem(STORAGE_KEY_USER);
    sessionStorage.removeItem(STORAGE_KEY_LOGIN_AT);

    state.currentUser = "";
    state.inboundRows = [];
    state.filteredRows = [];
    state.options = { brands: [], palletQty: [] };

    stopInlineCamera();
    renderInboundRows([]);
    updateSummary();

    showLoginView();
  }

  /* =========================
   * DATA LOADING
   * ========================= */

  async function loadInitialData() {
    try {
      setStatus(true, "กำลังโหลดตัวเลือกและข้อมูลขาเข้า...");

      await loadOptions();
      await loadInboundRows(false);

    } catch (err) {
      await showError(err);
    } finally {
      setStatus(false);
    }
  }

  async function loadOptions() {
    const res = await apiGet("/api/options");

    if (!res.ok) {
      throw new Error(res.message || "โหลดตัวเลือกไม่สำเร็จ");
    }

    state.options.brands = Array.isArray(res.brands) ? res.brands : [];
    state.options.palletQty = Array.isArray(res.palletQty) ? res.palletQty : [];

    state.options.brands = state.options.brands
      .filter((b) => b && b.brand)
      .map((b) => ({
        brand: String(b.brand || "").trim().toUpperCase(),
        imageId: String(b.imageId || "").trim(),
        imageUrl: String(b.imageUrl || "").trim()
      }));

    state.options.palletQty = state.options.palletQty
      .map((n) => Number(n))
      .filter((n) => Number.isFinite(n) && n > 0)
      .sort((a, b) => a - b);

    if (!state.options.palletQty.length) {
      state.options.palletQty = DEFAULT_PALLET_QTY.slice();
    }
  }

  async function loadInboundRows(showLoading = true) {
    try {
      if (showLoading) {
        setStatus(true, "กำลังโหลดรายการรอบันทึกขาออก...");
      }

      const res = await apiGet("/api/inbound-open");

      if (!res.ok) {
        throw new Error(res.message || "โหลดรายการขาเข้าไม่สำเร็จ");
      }

      state.inboundRows = sortRowsByLatestTimestamp(Array.isArray(res.rows) ? res.rows : []);
      state.filteredRows = state.inboundRows.slice();

      if (els.searchInput) {
        const q = String(els.searchInput.value || "").trim();
        if (q) applySearch(q);
      }

      renderInboundRows(state.filteredRows);
      updateSummary();

    } catch (err) {
      await showError(err);
    } finally {
      if (showLoading) {
        setStatus(false);
      }
    }
  }

  /* =========================
   * SEARCH / SORT
   * ========================= */

  function handleSearch(e) {
    const q = String(e.target.value || "").trim();
    applySearch(q);
    renderInboundRows(state.filteredRows);
    updateSummary();
  }

  function applySearch(query) {
    const q = normalizeForSearch(query);

    if (!q) {
      state.filteredRows = sortRowsByLatestTimestamp(state.inboundRows);
      return;
    }

    state.filteredRows = sortRowsByLatestTimestamp(
      state.inboundRows.filter((row) => {
        const haystack = [
          row.autoId,
          row.timestampIn,
          row.reason,
          row.brandIn,
          row.plateNo,
          row.prefix,
          row.firstName,
          row.lastName,
          row.driverFullName,
          row.driverCompany,
          row.phone
        ]
          .map(normalizeForSearch)
          .join(" ");

        return haystack.includes(q);
      })
    );
  }

  function sortRowsByLatestTimestamp(rows) {
    return Array.from(rows || []).sort((a, b) => {
      const ta = parseDisplayDateTimeToMs(a.timestampIn);
      const tb = parseDisplayDateTimeToMs(b.timestampIn);
      return tb - ta;
    });
  }

  function parseDisplayDateTimeToMs(value) {
    const text = String(value || "").trim();

    if (!text) return 0;

    const m = text.match(
      /^(\d{1,2})\/(\d{1,2})\/(\d{4})\s+(\d{1,2}):(\d{2})(?::(\d{2}))?$/
    );

    if (m) {
      const dd = Number(m[1]);
      const mm = Number(m[2]) - 1;
      const yyyy = Number(m[3]);
      const hh = Number(m[4] || 0);
      const mi = Number(m[5] || 0);
      const ss = Number(m[6] || 0);

      const d = new Date(yyyy, mm, dd, hh, mi, ss);
      return isNaN(d.getTime()) ? 0 : d.getTime();
    }

    const d = new Date(text);
    return isNaN(d.getTime()) ? 0 : d.getTime();
  }

  /* =========================
   * RENDER LIST
   * ========================= */

  function renderInboundRows(rows) {
    if (!els.inboundList) return;

    els.inboundList.innerHTML = "";

    const list = Array.isArray(rows) ? rows : [];

    if (!list.length) {
      setEmptyState(true);
      return;
    }

    setEmptyState(false);

    const fragment = document.createDocumentFragment();

    list.forEach((row) => {
      const card = document.createElement("article");
      card.className = "inboundCard";
      card.dataset.autoId = row.autoId || "";

      const brandClass = String(row.brandIn || "").toUpperCase() === "CHEP"
        ? "brandBadge brandChep"
        : "brandBadge brandLoscam";

      card.innerHTML = `
        <div class="cardHeader">
          <div>
            <div class="plateText">${escapeHtml(row.plateNo || "-")}</div>
            <div class="autoIdText">Auto ID: ${escapeHtml(row.autoId || "-")}</div>
          </div>
          <span class="${brandClass}">${escapeHtml(row.brandIn || "-")}</span>
        </div>

        <div class="cardBody">
          <div class="infoGrid">
            <div class="infoItem">
              <span>พขร.</span>
              <strong>${escapeHtml(row.driverFullName || joinName(row) || "-")}</strong>
            </div>

            <div class="infoItem">
              <span>ต้นสังกัด</span>
              <strong>${escapeHtml(row.driverCompany || "-")}</strong>
            </div>

            <div class="infoItem">
              <span>เวลาเข้า</span>
              <strong>${escapeHtml(row.timestampIn || "-")}</strong>
            </div>

            <div class="infoItem">
              <span>เบอร์โทร</span>
              <strong>${escapeHtml(row.phone || "-")}</strong>
            </div>
          </div>
        </div>

        <div class="cardActions">
          <button class="primaryBtn recordOutBtn" type="button">
            บันทึกขาออก
          </button>
        </div>
      `;

      const btn = card.querySelector(".recordOutBtn");

      if (btn) {
        btn.addEventListener("click", () => openRecordOutDialog(row));
      }

      card.addEventListener("click", (ev) => {
        if (ev.target && ev.target.closest("button")) return;
        openRecordOutDialog(row);
      });

      fragment.appendChild(card);
    });

    els.inboundList.appendChild(fragment);
  }

  function updateSummary() {
    const total = state.filteredRows.length;

    if (els.openCountText) {
      els.openCountText.textContent = String(total);
    }

    if (els.lastUpdatedText) {
      els.lastUpdatedText.textContent = getNowDisplay();
    }
  }

  /* =========================
   * SWEETALERT FORM
   * ========================= */

  async function openRecordOutDialog(row) {
    if (state.isSubmitting) return;

    resetDialogState();

    const html = buildRecordOutDialogHtml(row);

    const result = await Swal.fire({
      title: "บันทึกพาเลทขาออก",
      html,
      width: 860,
      showCancelButton: true,
      confirmButtonText: "บันทึกขาออก",
      cancelButtonText: "ยกเลิก",
      reverseButtons: true,
      focusConfirm: false,
      allowOutsideClick: () => !state.isSubmitting,
      allowEscapeKey: () => !state.isSubmitting,
      didOpen: () => {
        initDialogEvents(row);
      },
      willClose: () => {
        stopInlineCamera();
      },
      preConfirm: async () => {
        try {
          return await collectAndValidateDialogData(row);
        } catch (err) {
          showDialogNotice(err.message || String(err), "error");
          return false;
        }
      }
    });

    if (!result.isConfirmed || !result.value) return;

    await submitOutRecord(result.value);
  }

  function resetDialogState() {
    state.selectedEvidenceFiles = [];
    state.selectedEvidencePayloads = [];
    state.selectedBrand = "";
    state.selectedQty = "";
    state.isSubmitting = false;

    stopInlineCamera();

    if (els.cameraInput) els.cameraInput.value = "";
    if (els.uploadInput) els.uploadInput.value = "";
  }

  function buildRecordOutDialogHtml(row) {
    const brandsHtml = buildBrandOptionsHtml();
    const qtyHtml = buildQtyOptionsHtml();

    return `
      <div class="outDialog">
        <section class="dialogSection">
          <h3>ข้อมูลขาเข้า</h3>

          <div class="dialogInfoGrid">
            ${dialogInfo("Auto ID", row.autoId)}
            ${dialogInfo("เวลาเข้า", row.timestampIn)}
            ${dialogInfo("เหตุผล", row.reason)}
            ${dialogInfo("ยี่ห้อขาเข้า", row.brandIn)}
            ${dialogInfo("ทะเบียนรถ", row.plateNo)}
            ${dialogInfo("พขร.", row.driverFullName || joinName(row))}
            ${dialogInfo("ต้นสังกัด", row.driverCompany)}
            ${dialogInfo("เบอร์โทร", row.phone)}
          </div>
        </section>

        <section class="dialogSection">
          <div class="dialogSectionHeader">
            <h3>ข้อมูลขาออก</h3>

            <div class="manageWrap">
              <button id="manageDataBtn" type="button" class="manageDataBtn">
                จัดการข้อมูล
              </button>

              <div id="manageMenu" class="manageMenu isHidden">
                <button id="suppressInboundBtn" type="button" class="manageMenuBtn danger">
                  ซ่อนรายการนี้
                </button>

                <button id="editOutboundBtn" type="button" class="manageMenuBtn edit">
                  แก้ไขข้อมูล
                </button>
              </div>
            </div>
          </div>

          <div id="dialogNotice" class="dialogNotice isHidden"></div>

          <div class="fieldGroup">
            <label>เลือกยี่ห้อพาเลทขาออก <em>*</em></label>
            <div id="brandSelectGrid" class="brandSelectGrid">
              ${brandsHtml}
            </div>
          </div>

          <div class="fieldGroup">
            <label>จำนวนพาเลทขาออก <em>*</em></label>
            <div id="qtySelectGrid" class="qtySelectGrid">
              ${qtyHtml}
              <button type="button" class="qtyChip" data-qty="custom">อื่นๆ</button>
            </div>

            <input
              id="customQtyInput"
              class="dialogInput isHidden"
              type="number"
              inputmode="numeric"
              min="1"
              step="1"
              placeholder="กรอกจำนวนเอง"
            >
          </div>

          <div class="docPairGrid">
            <div class="fieldGroup">
              <label for="ecdNameInput">หมายเลขเอกสาร ECD <em>*</em></label>
              <input
                id="ecdNameInput"
                class="dialogInput"
                type="text"
                inputmode="latin"
                autocomplete="off"
                placeholder="ECD001"
                maxlength="30"
              >
            </div>

            <div class="fieldGroup">
              <label for="tcrNoInput">หมายเลขเอกสาร TCR <em>*</em></label>
              <input
                id="tcrNoInput"
                class="dialogInput"
                type="text"
                inputmode="latin"
                autocomplete="off"
                placeholder="TCR001"
                maxlength="30"
              >
            </div>
          </div>

          <div class="helpText">
            ECD/TCR ใช้ได้เฉพาะ A-Z, a-z, 0-9 ห้ามเว้นวรรคและห้ามอักขระพิเศษ
          </div>

          <div class="fieldGroup">
            <label>รูปหลักฐาน <em>*</em></label>

            <div class="evidenceControl">
              <button id="openCameraBtn" type="button" class="secondaryBtn">
                เปิดกล้อง
              </button>

              <button id="pickGalleryBtn" type="button" class="secondaryBtn">
                เลือกรูปจากเครื่อง
              </button>

              <span id="evidenceCountText" class="evidenceCount">
                ยังไม่ได้เลือกรูป
              </span>
            </div>

            <div id="inlineCameraPanel" class="inlineCameraPanel isHidden">
              <video
                id="inlineCameraVideo"
                class="inlineCameraVideo"
                autoplay
                playsinline
                muted
              ></video>

              <canvas id="inlineCameraCanvas" class="inlineCameraCanvas"></canvas>

              <div class="inlineCameraActions">
                <button id="captureCameraBtn" type="button" class="primaryBtn">
                  ถ่ายภาพ
                </button>

                <button id="closeCameraBtn" type="button" class="secondaryBtn">
                  ปิดกล้อง
                </button>
              </div>

              <div class="helpText">
                จัดภาพให้ชัดเจน แล้วกด “ถ่ายภาพ” รูปจะถูกเพิ่มในรายการด้านล่าง
              </div>
            </div>

            <div class="helpText">ต้องมีอย่างน้อย 1 รูป และสูงสุด 4 รูป</div>
            <div id="evidencePreviewGrid" class="evidencePreviewGrid"></div>
          </div>

          <div class="fieldGroup">
            <label for="noteInput">หมายเหตุ</label>
            <textarea
              id="noteInput"
              class="dialogTextarea"
              rows="3"
              placeholder="ระบุหมายเหตุเพิ่มเติมถ้ามี"
            ></textarea>
          </div>
        </section>
      </div>
    `;
  }

  function buildBrandOptionsHtml() {
    const brands = state.options.brands || [];

    if (!brands.length) {
      return `<div class="optionMissing">ไม่พบตัวเลือก Brand ในชีท Brand</div>`;
    }

    return brands.map((b) => {
      const brand = escapeHtml(b.brand || "");
      const imageUrl = escapeAttr(b.imageUrl || "");

      return `
        <button type="button" class="brandOption" data-brand="${brand}">
          <div
            class="brandImageBox"
            style="${imageUrl ? `--brand-img: url('${imageUrl}');` : ""}"
          >
            ${
              imageUrl
                ? `<img class="brandFallbackImg" src="${imageUrl}" alt="${brand}" loading="lazy">`
                : `<span>${brand}</span>`
            }
          </div>
          <strong>${brand}</strong>
        </button>
      `;
    }).join("");
  }

  function buildQtyOptionsHtml() {
    let qtyList = state.options.palletQty || [];

    qtyList = qtyList
      .map((qty) => Number(qty))
      .filter((qty) => Number.isFinite(qty) && qty > 0)
      .sort((a, b) => a - b);

    if (!qtyList.length) {
      qtyList = DEFAULT_PALLET_QTY.slice();
    }

    return qtyList.map((qty) => {
      return `<button type="button" class="qtyChip" data-qty="${qty}">${qty}</button>`;
    }).join("");
  }

  function dialogInfo(label, value) {
    return `
      <div class="dialogInfoItem">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(value || "-")}</strong>
      </div>
    `;
  }

  function initDialogEvents(row) {
    const brandButtons = document.querySelectorAll(".brandOption");
    const qtyButtons = document.querySelectorAll(".qtyChip");

    const customQtyInput = $("customQtyInput");
    const ecdNameInput = $("ecdNameInput");
    const tcrNoInput = $("tcrNoInput");

    const manageDataBtn = $("manageDataBtn");
    const manageMenu = $("manageMenu");
    const suppressInboundBtn = $("suppressInboundBtn");
    const editOutboundBtn = $("editOutboundBtn");

    const openCameraBtn = $("openCameraBtn");
    const captureCameraBtn = $("captureCameraBtn");
    const closeCameraBtn = $("closeCameraBtn");
    const pickGalleryBtn = $("pickGalleryBtn");

    brandButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        brandButtons.forEach((b) => b.classList.remove("isSelected"));
        btn.classList.add("isSelected");
        state.selectedBrand = String(btn.dataset.brand || "").trim().toUpperCase();
        clearDialogNotice();
      });
    });

    qtyButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        qtyButtons.forEach((b) => b.classList.remove("isSelected"));
        btn.classList.add("isSelected");

        const qty = String(btn.dataset.qty || "").trim();

        if (qty === "custom") {
          state.selectedQty = "custom";

          if (customQtyInput) {
            customQtyInput.classList.remove("isHidden");
            setTimeout(() => customQtyInput.focus(), 50);
          }
        } else {
          state.selectedQty = qty;

          if (customQtyInput) {
            customQtyInput.classList.add("isHidden");
            customQtyInput.value = "";
          }
        }

        clearDialogNotice();
      });
    });

    if (ecdNameInput) {
      ecdNameInput.addEventListener("input", () => {
        ecdNameInput.value = ecdNameInput.value
          .replace(/[^A-Za-z0-9]/g, "")
          .toUpperCase();

        clearDialogNotice();
      });
    }

    if (tcrNoInput) {
      tcrNoInput.addEventListener("input", () => {
        tcrNoInput.value = tcrNoInput.value
          .replace(/[^A-Za-z0-9]/g, "")
          .toUpperCase();

        clearDialogNotice();
      });
    }

    if (manageDataBtn && manageMenu) {
      manageDataBtn.addEventListener("click", (ev) => {
        ev.stopPropagation();
        manageMenu.classList.toggle("isHidden");
      });
    }

    if (suppressInboundBtn) {
      suppressInboundBtn.addEventListener("click", async () => {
        await handleSuppressInbound(row);
      });
    }

    if (editOutboundBtn) {
      editOutboundBtn.addEventListener("click", () => {
        handleEditOutboundPlaceholder();
      });
    }

    if (openCameraBtn) {
      openCameraBtn.addEventListener("click", async () => {
        await openInlineCamera();
      });
    }

    if (captureCameraBtn) {
      captureCameraBtn.addEventListener("click", async () => {
        await captureInlineCameraImage();
      });
    }

    if (closeCameraBtn) {
      closeCameraBtn.addEventListener("click", () => {
        stopInlineCamera();
      });
    }

    if (pickGalleryBtn) {
      pickGalleryBtn.addEventListener("click", () => {
        if (!els.uploadInput) {
          showDialogNotice("ไม่พบช่องเลือกรูป กรุณาตรวจสอบ index.html ว่ามี input id=\"uploadInput\"", "error");
          return;
        }

        els.uploadInput.value = "";
        els.uploadInput.click();
      });
    }

    updateEvidencePreview();
  }

  async function collectAndValidateDialogData(row) {
    const customQtyInput = $("customQtyInput");
    const ecdNameInput = $("ecdNameInput");
    const tcrNoInput = $("tcrNoInput");
    const noteInput = $("noteInput");

    const brandOut = String(state.selectedBrand || "").trim().toUpperCase();

    if (!brandOut) {
      throw new Error("กรุณาเลือกยี่ห้อพาเลทขาออก");
    }

    let qtyOut = 0;

    if (state.selectedQty === "custom") {
      qtyOut = Number(customQtyInput ? customQtyInput.value || 0 : 0);
    } else {
      qtyOut = Number(state.selectedQty || 0);
    }

    if (!Number.isFinite(qtyOut) || qtyOut <= 0) {
      throw new Error("กรุณาระบุจำนวนพาเลทขาออกเป็นตัวเลขมากกว่า 0");
    }

    qtyOut = Math.floor(qtyOut);

    const ecdName = String(ecdNameInput ? ecdNameInput.value || "" : "")
      .trim()
      .toUpperCase();

    if (!ecdName) {
      throw new Error("กรุณากรอกหมายเลขเอกสาร ECD");
    }

    if (!ECD_REGEX.test(ecdName)) {
      throw new Error("หมายเลขเอกสาร ECD กรอกได้เฉพาะตัวอักษรภาษาอังกฤษและตัวเลขเท่านั้น");
    }

    const tcrNo = String(tcrNoInput ? tcrNoInput.value || "" : "")
      .trim()
      .toUpperCase();

    if (!tcrNo) {
      throw new Error("กรุณากรอกหมายเลขเอกสาร TCR");
    }

    if (!TCR_REGEX.test(tcrNo)) {
      throw new Error("หมายเลขเอกสาร TCR กรอกได้เฉพาะตัวอักษรภาษาอังกฤษและตัวเลขเท่านั้น");
    }

    if (state.selectedEvidenceFiles.length < CONFIG.MIN_IMAGES) {
      throw new Error("กรุณาแนบรูปหลักฐานอย่างน้อย 1 รูป");
    }

    if (state.selectedEvidenceFiles.length > CONFIG.MAX_IMAGES) {
      throw new Error("แนบรูปหลักฐานได้สูงสุด 4 รูปเท่านั้น");
    }

    if (!state.selectedEvidencePayloads.length) {
      showDialogNotice("กำลังเตรียมรูปภาพ กรุณารอสักครู่...", "info");
      state.selectedEvidencePayloads = await compressSelectedImages(state.selectedEvidenceFiles);
    }

    if (state.selectedEvidencePayloads.length < CONFIG.MIN_IMAGES) {
      throw new Error("ไม่สามารถเตรียมข้อมูลรูปภาพได้ กรุณาเลือกรูปใหม่");
    }

    clearDialogNotice();

    return {
      autoId: row.autoId,
      plateNo: row.plateNo || "",
      driverFullName: row.driverFullName || joinName(row) || "",
      brandOut,
      qtyOut,
      ecdName,
      tcrNo,
      recordedBy: state.currentUser,
      note: String(noteInput ? noteInput.value || "" : "").trim(),
      images: state.selectedEvidencePayloads
    };
  }

  /* =========================
   * EVIDENCE IMAGES
   * ========================= */

  async function handleEvidenceInputChange(e) {
    const files = Array.from(e.target.files || []);
    await addEvidenceFiles(files);
  }

  async function addEvidenceFiles(files) {
    const imageFiles = Array.from(files || []).filter((file) => {
      return file && file.type && file.type.indexOf("image/") === 0;
    });

    if (!imageFiles.length) {
      showDialogNotice("กรุณาเลือกเฉพาะไฟล์รูปภาพ", "error");
      return;
    }

    const remaining = CONFIG.MAX_IMAGES - state.selectedEvidenceFiles.length;

    if (remaining <= 0) {
      showDialogNotice("แนบรูปหลักฐานได้สูงสุด " + CONFIG.MAX_IMAGES + " รูปเท่านั้น", "warning");
      return;
    }

    let filesToAdd = imageFiles;

    if (imageFiles.length > remaining) {
      filesToAdd = imageFiles.slice(0, remaining);
      showDialogNotice("ระบบรับเพิ่มได้อีก " + remaining + " รูป รวมสูงสุด " + CONFIG.MAX_IMAGES + " รูป", "warning");
    } else {
      clearDialogNotice();
    }

    state.selectedEvidenceFiles = state.selectedEvidenceFiles.concat(filesToAdd);
    state.selectedEvidencePayloads = [];

    updateEvidencePreview();

    try {
      const countText = $("evidenceCountText");
      if (countText) countText.textContent = "กำลังเตรียมรูปภาพ...";

      state.selectedEvidencePayloads = await compressSelectedImages(state.selectedEvidenceFiles);

      updateEvidencePreview();

    } catch (err) {
      showDialogNotice(err.message || String(err), "error");
    }
  }

  async function openInlineCamera() {
    if (state.selectedEvidenceFiles.length >= CONFIG.MAX_IMAGES) {
      showDialogNotice("แนบรูปหลักฐานได้สูงสุด " + CONFIG.MAX_IMAGES + " รูปเท่านั้น", "warning");
      return;
    }

    const panel = $("inlineCameraPanel");
    const video = $("inlineCameraVideo");

    if (!panel || !video) {
      showDialogNotice("ไม่พบพื้นที่กล้อง กรุณาตรวจสอบ HTML ของฟอร์มรูปหลักฐาน", "error");
      return;
    }

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      showDialogNotice("เบราว์เซอร์ไม่รองรับกล้องสด ระบบจะเปิดกล้อง/เลือกรูปแบบพื้นฐานของเครื่องแทน", "warning");
      openCameraInputFallback();
      return;
    }

    try {
      stopInlineCamera();

      inlineCameraStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: "environment" },
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      });

      video.srcObject = inlineCameraStream;
      panel.classList.remove("isHidden");

      await video.play();

      showDialogNotice("เปิดกล้องแล้ว จัดภาพให้ชัดเจนแล้วกดถ่ายภาพ", "info");

    } catch (err) {
      stopInlineCamera();
      showDialogNotice("เปิดกล้องสดไม่ได้ ระบบจะเปิดเมนูถ่ายภาพ/เลือกรูปแบบพื้นฐานของเครื่องแทน", "warning");
      openCameraInputFallback();
    }
  }

  function openCameraInputFallback() {
    if (!els.cameraInput) return;

    els.cameraInput.value = "";
    els.cameraInput.click();
  }

  async function captureInlineCameraImage() {
    const video = $("inlineCameraVideo");
    const canvas = $("inlineCameraCanvas");

    if (!video || !canvas) {
      showDialogNotice("ไม่พบกล้อง กรุณาเปิดกล้องใหม่อีกครั้ง", "error");
      return;
    }

    if (!inlineCameraStream) {
      showDialogNotice("กรุณากดเปิดกล้องก่อนถ่ายภาพ", "warning");
      return;
    }

    if (state.selectedEvidenceFiles.length >= CONFIG.MAX_IMAGES) {
      showDialogNotice("แนบรูปหลักฐานได้สูงสุด " + CONFIG.MAX_IMAGES + " รูปเท่านั้น", "warning");
      stopInlineCamera();
      return;
    }

    const width = video.videoWidth || 1280;
    const height = video.videoHeight || 720;

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, width, height);

    const mimeType = CONFIG.IMAGE_OUTPUT_TYPE || "image/jpeg";
    const quality = Number(CONFIG.IMAGE_QUALITY || 0.78);
    const dataUrl = canvas.toDataURL(mimeType, quality);

    const file = dataUrlToFile(
      dataUrl,
      "camera_" + getNowDisplay().replace(/[\/:\s]/g, "") + ".jpg"
    );

    await addEvidenceFiles([file]);

    showDialogNotice("ถ่ายภาพแล้ว รูปถูกเพิ่มในรายการด้านล่าง", "success");

    if (state.selectedEvidenceFiles.length >= CONFIG.MAX_IMAGES) {
      stopInlineCamera();
    }
  }

  function stopInlineCamera() {
    if (inlineCameraStream) {
      inlineCameraStream.getTracks().forEach((track) => {
        try {
          track.stop();
        } catch (err) {
          // ignore
        }
      });
    }

    inlineCameraStream = null;

    const video = $("inlineCameraVideo");
    const panel = $("inlineCameraPanel");

    if (video) {
      try {
        video.pause();
        video.srcObject = null;
      } catch (err) {
        // ignore
      }
    }

    if (panel) {
      panel.classList.add("isHidden");
    }
  }

  function updateEvidencePreview() {
    const grid = $("evidencePreviewGrid");
    const countText = $("evidenceCountText");

    if (countText) {
      const count = state.selectedEvidenceFiles.length;
      countText.textContent = count
        ? `เลือกรูปแล้ว ${count}/${CONFIG.MAX_IMAGES} รูป`
        : "ยังไม่ได้เลือกรูป";
    }

    if (!grid) return;

    grid.innerHTML = "";

    state.selectedEvidenceFiles.forEach((file, index) => {
      const url = URL.createObjectURL(file);

      const item = document.createElement("div");
      item.className = "evidenceThumb";
      item.innerHTML = `
        <img src="${url}" alt="รูปหลักฐาน ${index + 1}">
        <button type="button" class="removeEvidenceBtn" data-index="${index}" aria-label="ลบรูป">×</button>
      `;

      const removeBtn = item.querySelector(".removeEvidenceBtn");

      if (removeBtn) {
        removeBtn.addEventListener("click", () => {
          URL.revokeObjectURL(url);
          removeEvidenceAt(index);
        });
      }

      grid.appendChild(item);
    });
  }

  function removeEvidenceAt(index) {
    state.selectedEvidenceFiles.splice(index, 1);
    state.selectedEvidencePayloads = [];
    updateEvidencePreview();

    if (state.selectedEvidenceFiles.length) {
      compressSelectedImages(state.selectedEvidenceFiles)
        .then((payloads) => {
          state.selectedEvidencePayloads = payloads;
          updateEvidencePreview();
        })
        .catch((err) => {
          console.error(err);
          showDialogNotice(err.message || String(err), "error");
        });
    }
  }

  async function compressSelectedImages(files) {
    const list = Array.from(files || []);

    if (list.length > CONFIG.MAX_IMAGES) {
      throw new Error("แนบรูปหลักฐานได้สูงสุด " + CONFIG.MAX_IMAGES + " รูปเท่านั้น");
    }

    const payloads = [];

    for (let i = 0; i < list.length; i++) {
      const file = list[i];
      const payload = await compressImageToPayload(file, i + 1);
      payloads.push(payload);
    }

    return payloads;
  }

  function compressImageToPayload(file, index) {
    return new Promise((resolve, reject) => {
      if (!file || !file.type || file.type.indexOf("image/") !== 0) {
        reject(new Error("พบไฟล์ที่ไม่ใช่รูปภาพ"));
        return;
      }

      const reader = new FileReader();

      reader.onload = () => {
        const img = new Image();

        img.onload = () => {
          try {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            const originalWidth = img.width || 1;
            const originalHeight = img.height || 1;

            const ratio = Math.min(
              CONFIG.IMAGE_MAX_WIDTH / originalWidth,
              CONFIG.IMAGE_MAX_HEIGHT / originalHeight,
              1
            );

            const targetWidth = Math.max(1, Math.round(originalWidth * ratio));
            const targetHeight = Math.max(1, Math.round(originalHeight * ratio));

            canvas.width = targetWidth;
            canvas.height = targetHeight;

            ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

            const mimeType = CONFIG.IMAGE_OUTPUT_TYPE || "image/jpeg";
            const quality = Number(CONFIG.IMAGE_QUALITY || 0.78);

            const dataUrl = canvas.toDataURL(mimeType, quality);
            const base64 = dataUrl.split(",").pop();

            resolve({
              name: buildImageName(file.name, index),
              mimeType,
              data: base64
            });

          } catch (err) {
            reject(err);
          }
        };

        img.onerror = () => {
          reject(new Error("ไม่สามารถอ่านรูปภาพได้"));
        };

        img.src = String(reader.result || "");
      };

      reader.onerror = () => {
        reject(new Error("ไม่สามารถอ่านไฟล์รูปภาพได้"));
      };

      reader.readAsDataURL(file);
    });
  }

  function buildImageName(originalName, index) {
    const safeName = String(originalName || "evidence")
      .replace(/\.[^.]+$/, "")
      .replace(/[^A-Za-z0-9ก-ฮะ-์_-]+/g, "_")
      .slice(0, 40);

    return `evidence_${String(index).padStart(2, "0")}_${safeName}.jpg`;
  }

  function dataUrlToFile(dataUrl, filename) {
    const parts = String(dataUrl || "").split(",");
    const header = parts[0] || "";
    const data = parts[1] || "";

    const mimeMatch = header.match(/data:(.*?);base64/);
    const mimeType = mimeMatch ? mimeMatch[1] : "image/jpeg";

    const binary = atob(data);
    const length = binary.length;
    const bytes = new Uint8Array(length);

    for (let i = 0; i < length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }

    return new File([bytes], filename || "camera.jpg", {
      type: mimeType
    });
  }

  /* =========================
   * MANAGE / SUPPRESS / EDIT
   * ========================= */

  async function handleSuppressInbound(row) {
    if (!row || !row.autoId) {
      showDialogNotice("ไม่พบ Auto ID ของรายการนี้", "error");
      return;
    }

    const confirm = await Swal.fire({
      icon: "warning",
      title: "ซ่อนรายการนี้?",
      html: `
        <div class="confirmBox">
          <div><span>Auto ID</span><strong>${escapeHtml(row.autoId || "-")}</strong></div>
          <div><span>ทะเบียนรถ</span><strong>${escapeHtml(row.plateNo || "-")}</strong></div>
          <div><span>พขร.</span><strong>${escapeHtml(row.driverFullName || joinName(row) || "-")}</strong></div>
        </div>

        <div class="confirmNote">
          รายการนี้จะไม่แสดงในฟอร์มขาออกอีก แต่ข้อมูลในชีทขาเข้าจะไม่ถูกแก้ไข
        </div>
      `,
      input: "textarea",
      inputLabel: "เหตุผลการซ่อนรายการ",
      inputPlaceholder: "เช่น คนขับกดเข้าผิด / ไม่ได้มารับพาเลท / รายการซ้ำ",
      inputAttributes: {
        maxlength: 250
      },
      showCancelButton: true,
      confirmButtonText: "ยืนยันซ่อน",
      cancelButtonText: "ยกเลิก",
      reverseButtons: true,
      inputValidator: (value) => {
        if (!String(value || "").trim()) {
          return "กรุณาระบุเหตุผลการซ่อนรายการ";
        }

        return null;
      }
    });

    if (!confirm.isConfirmed) return;

    const reason = String(confirm.value || "").trim();

    try {
      Swal.fire({
        title: "กำลังซ่อนรายการ",
        html: "กรุณารอสักครู่ ระบบกำลังบันทึกข้อมูลการซ่อนรายการ",
        allowOutsideClick: false,
        allowEscapeKey: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      const res = await apiPost("/api/suppress-inbound", {
        autoId: row.autoId,
        suppressedBy: state.currentUser,
        recordedBy: state.currentUser,
        reason
      }, 60000);

      if (!res.ok) {
        throw new Error(res.message || "ซ่อนรายการไม่สำเร็จ");
      }

      removeInboundRowFromState(row.autoId);

      await Swal.fire({
        icon: "success",
        title: "ซ่อนรายการสำเร็จ",
        html: `
          <div class="successSummary">
            <div><span>Auto ID</span><strong>${escapeHtml(res.autoId || row.autoId || "-")}</strong></div>
            <div><span>ทะเบียนรถ</span><strong>${escapeHtml(res.plateNo || row.plateNo || "-")}</strong></div>
            <div><span>ผู้ซ่อน</span><strong>${escapeHtml(res.suppressedBy || state.currentUser || "-")}</strong></div>
            <div><span>เวลา</span><strong>${escapeHtml(res.suppressedAt || "-")}</strong></div>
          </div>
        `,
        confirmButtonText: "ตกลง"
      });

    } catch (err) {
      await showError(err);
    }
  }

  function handleEditOutboundPlaceholder() {
    showDialogNotice(
      "เมนูแก้ไขข้อมูลพร้อมแล้ว แต่ยังต้องเพิ่ม API ค้นหารายการขาออกย้อนหลังใน Code.gs/Worker ก่อนใช้งานจริง",
      "info"
    );
  }

  function removeInboundRowFromState(autoId) {
    const target = String(autoId || "").trim();

    if (!target) return;

    state.inboundRows = state.inboundRows.filter((r) => String(r.autoId || "").trim() !== target);
    state.filteredRows = state.filteredRows.filter((r) => String(r.autoId || "").trim() !== target);

    renderInboundRows(state.filteredRows);
    updateSummary();
  }

  /* =========================
   * SUBMIT
   * ========================= */

  async function submitOutRecord(payload) {
    try {
      state.isSubmitting = true;

      Swal.fire({
        title: "กำลังบันทึกข้อมูล",
        html: "กำลังอัปโหลดรูปและบันทึกข้อมูลขาออก กรุณารอจนกว่าระบบจะแจ้งผล",
        allowOutsideClick: false,
        allowEscapeKey: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      const res = await apiPost("/api/submit-out", payload, 240000);

      if (!res.ok) {
        throw new Error(res.message || "บันทึกข้อมูลไม่สำเร็จ");
      }

      await Swal.fire({
        icon: "success",
        title: "บันทึกสำเร็จ",
        html: `
          <div class="successSummary">
            <div><span>Outbound ID</span><strong>${escapeHtml(res.outboundId || "-")}</strong></div>
            <div><span>Auto ID</span><strong>${escapeHtml(res.autoId || "-")}</strong></div>
            <div><span>ทะเบียนรถ</span><strong>${escapeHtml(res.plateNo || payload.plateNo || "-")}</strong></div>
            <div><span>พขร.</span><strong>${escapeHtml(res.driverFullName || payload.driverFullName || "-")}</strong></div>
            <div><span>ECD</span><strong>${escapeHtml(res.ecdName || payload.ecdName || "-")}</strong></div>
            <div><span>TCR</span><strong>${escapeHtml(res.tcrNo || payload.tcrNo || "-")}</strong></div>
            <div><span>เวลาออก</span><strong>${escapeHtml(res.timestampOut || "-")}</strong></div>
            <div><span>Duration</span><strong>${escapeHtml(res.duration || "-")}</strong></div>
          </div>
        `,
        confirmButtonText: "ตกลง"
      });

      await loadInboundRows(true);

    } catch (err) {
      await showError(err);
    } finally {
      state.isSubmitting = false;
    }
  }

  /* =========================
   * API
   * ========================= */

  async function apiGet(path, timeoutMs = 60000) {
    const url = buildApiUrl(path);

    const res = await fetchWithTimeout(url, {
      method: "GET",
      headers: {
        "Accept": "application/json"
      },
      cache: "no-store"
    }, timeoutMs);

    return parseApiResponse(res);
  }

  async function apiPost(path, body, timeoutMs = 60000) {
    const url = buildApiUrl(path);

    const res = await fetchWithTimeout(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body || {}),
      cache: "no-store"
    }, timeoutMs);

    return parseApiResponse(res);
  }

  function buildApiUrl(path) {
    const base = String(CONFIG.API_BASE || "").replace(/\/+$/, "");

    if (!base || base.indexOf("YOUR-WORKER") >= 0) {
      throw new Error("ยังไม่ได้ตั้งค่า API_BASE ใน index.html ให้เป็น URL ของ Cloudflare Worker จริง");
    }

    return base + path;
  }

  async function parseApiResponse(res) {
    const text = await res.text();

    let data;

    try {
      data = JSON.parse(text);
    } catch (err) {
      throw new Error("API ไม่ได้คืนค่าเป็น JSON: " + text.slice(0, 300));
    }

    if (!res.ok && data && !data.message) {
      data.message = "เกิดข้อผิดพลาดจาก API";
    }

    return data;
  }

  function fetchWithTimeout(url, options, timeoutMs) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs || 60000);

    return fetch(url, {
      ...options,
      signal: controller.signal
    })
      .catch((err) => {
        if (err && err.name === "AbortError") {
          throw new Error("เชื่อมต่อ API เกินเวลาที่กำหนด กรุณาลองใหม่");
        }

        throw err;
      })
      .finally(() => {
        clearTimeout(timer);
      });
  }

  /* =========================
   * UTILITIES
   * ========================= */

  async function showError(err) {
    console.error(err);

    await Swal.fire({
      icon: "error",
      title: "เกิดข้อผิดพลาด",
      text: err && err.message ? err.message : String(err),
      confirmButtonText: "ตกลง"
    });
  }

  function showDialogNotice(message, type) {
    const box = $("dialogNotice");

    if (!box) {
      console.warn(message);
      return;
    }

    box.className = "dialogNotice";
    box.classList.add("dialogNotice-" + (type || "info"));
    box.textContent = message || "";
    box.classList.remove("isHidden");
  }

  function clearDialogNotice() {
    const box = $("dialogNotice");

    if (!box) return;

    box.textContent = "";
    box.className = "dialogNotice isHidden";
  }

  function getPassFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return String(params.get("pass") || "").trim();
  }

  function getNowDisplay() {
    const d = new Date();

    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    const hh = String(d.getHours()).padStart(2, "0");
    const mi = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");

    return `${dd}/${mm}/${yyyy} ${hh}:${mi}:${ss}`;
  }

  function joinName(row) {
    return [row.prefix, row.firstName, row.lastName]
      .filter(Boolean)
      .join(" ");
  }

  function normalizeForSearch(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function escapeAttr(value) {
    return escapeHtml(value).replace(/`/g, "&#096;");
  }

})();
หลังวางแล้วให้แก้ index.html เป็นเวอร์ชันใหม่:

<link rel="stylesheet" href="./style.css?v=14">
<script src="./app.js?v=13" defer></script>
หมายเหตุสำคัญ: ปุ่ม แก้ไขข้อมูล ตอนนี้แสดงในเมนูแล้ว แต่ยังเป็นข้อความแจ้งเตือนก่อน เพราะระบบแก้ไขย้อนหลังต้องเพิ่ม API ฝั่ง Code.gs และ worker.js เพิ่มเติมก่อนครับ.


ต่อรอบถัดไปมาเลยครับ

คิดเป็นเวลา 13s
ได้ครับ รอบนี้ทำ ฝั่ง Backend ต่อ เพื่อให้ปุ่ม แก้ไขข้อมูล ใช้งานจริงได้ โดยเพิ่ม API สำหรับ:

1. ค้นหารายการที่บันทึกขาออกแล้วตามวันที่
2. Soft delete รายการขาออกที่บันทึกแล้ว
3. แก้ไขข้อมูลขาออกย้อนหลัง
4. บันทึก AuditLog ทุกครั้ง
รอบนี้ให้แก้ Code.gs ก่อน ส่วน worker.js จะต่อรอบถัดไป

1. เพิ่ม doGet action ใหม่
ใน doGet(e) ให้เพิ่ม action นี้:

if (action === "outboundByDate") {
  const dateText = norm_(params.date);
  return json_(getOutboundByDate_(dateText));
}
ตัวอย่างตำแหน่ง:

function doGet(e) {
  try {
    const params = e && e.parameter ? e.parameter : {};
    const action = norm_(params.action);

    if (action === "health") {
      return json_({
        ok: true,
        service: "pallet-out-api",
        timestamp: nowText_()
      });
    }

    if (action === "options") {
      return json_(getOptions_());
    }

    if (action === "inboundOpen") {
      return json_(getInboundOpenRows_());
    }

    if (action === "outboundByDate") {
      const dateText = norm_(params.date);
      return json_(getOutboundByDate_(dateText));
    }

    return json_({
      ok: false,
      message: "ไม่พบ action ที่เรียกใช้งาน: " + action
    });

  } catch (err) {
    return json_({
      ok: false,
      message: err && err.message ? err.message : String(err)
    });
  }
}
2. เพิ่ม doPost action ใหม่
ใน doPost(e) ให้เพิ่ม action นี้:

if (action === "deleteOutbound") {
  return json_(deleteOutbound_(payload));
}

if (action === "updateOutbound") {
  return json_(updateOutbound_(payload));
}
ตัวอย่างตำแหน่ง:

function doPost(e) {
  try {
    const payload = parsePostPayload_(e);
    const action = norm_(payload.action);

    if (action === "login") {
      return json_(login_(payload));
    }

    if (action === "submitOut") {
      return json_(submitPalletOut_(payload));
    }

    if (action === "suppressInbound") {
      return json_(suppressInbound_(payload));
    }

    if (action === "restoreInbound") {
      return json_(restoreInbound_(payload));
    }

    if (action === "deleteOutbound") {
      return json_(deleteOutbound_(payload));
    }

    if (action === "updateOutbound") {
      return json_(updateOutbound_(payload));
    }

    return json_({
      ok: false,
      message: "ไม่พบ action ที่เรียกใช้งาน: " + action
    });

  } catch (err) {
    return json_({
      ok: false,
      message: err && err.message ? err.message : String(err)
    });
  }
}
3. เพิ่มฟังก์ชันค้นหารายการขาออกย้อนหลัง
นำโค้ดนี้ไปวางใน Code.gs

/** =========================
 * OUTBOUND HISTORY / EDIT
 * ========================= */

function getOutboundByDate_(dateText) {
  dateText = norm_(dateText);

  if (!dateText) {
    throw new Error("กรุณาระบุวันที่ที่ต้องการค้นหา");
  }

  const targetDate = normalizeDateOnlyText_(dateText);

  if (!targetDate) {
    throw new Error("รูปแบบวันที่ไม่ถูกต้อง กรุณาใช้ dd/MM/yyyy หรือ yyyy-MM-dd");
  }

  const ss = SpreadsheetApp.openById(OUT_SPREADSHEET_ID);
  const sheet = getOrCreateSheet_(ss, OUT_SHEET_NAME, OUT_HEADERS);
  ensureHeaders_(sheet, OUT_HEADERS);

  const values = sheet.getDataRange().getValues();

  if (values.length < 2) {
    return {
      ok: true,
      date: targetDate,
      rows: []
    };
  }

  const headerMap = getHeaderMap_(values[0]);

  const cTimestampOut = getRequiredCol_(headerMap, "Timestamp ขาออก");
  const cOutboundId = getRequiredCol_(headerMap, "Outbound ID");
  const cAutoId = getRequiredCol_(headerMap, "Auto ID ขาเข้า");
  const cTimestampIn = getRequiredCol_(headerMap, "Timestamp ขาเข้า");
  const cReason = getRequiredCol_(headerMap, "เหตุผลเข้าพื้นที่");
  const cBrandIn = getRequiredCol_(headerMap, "ยี่ห้อพาเลทขาเข้า");
  const cPlateNo = getRequiredCol_(headerMap, "ทะเบียนรถ");
  const cPrefix = getRequiredCol_(headerMap, "คำนำหน้า");
  const cFirstName = getRequiredCol_(headerMap, "ชื่อ พขร.");
  const cLastName = getRequiredCol_(headerMap, "สกุล พขร.");
  const cCompany = getRequiredCol_(headerMap, "ต้นสังกัด พขร.");
  const cPhone = getRequiredCol_(headerMap, "เบอร์โทร");
  const cBrandOut = getRequiredCol_(headerMap, "ยี่ห้อพาเลทขาออก");
  const cQtyOut = getRequiredCol_(headerMap, "จำนวนพาเลทขาออก");
  const cEcd = getRequiredCol_(headerMap, "หมายเลขเอกสาร ECD");
  const cTcr = getRequiredCol_(headerMap, "หมายเลขเอกสาร TCR");
  const cRecordedBy = getRequiredCol_(headerMap, "ผู้บันทึก");
  const cImageIds = getRequiredCol_(headerMap, "ID รูปหลักฐาน");
  const cNote = getRequiredCol_(headerMap, "หมายเหตุ");
  const cDuration = getRequiredCol_(headerMap, "Duration");
  const cItemStatus = getRequiredCol_(headerMap, "สถานะรายการ");
  const cUpdatedBy = getRequiredCol_(headerMap, "แก้ไขล่าสุดโดย");
  const cUpdatedAt = getRequiredCol_(headerMap, "แก้ไขล่าสุดเมื่อ");
  const cDeletedBy = getRequiredCol_(headerMap, "ลบโดย");
  const cDeletedAt = getRequiredCol_(headerMap, "ลบเมื่อ");
  const cDeleteReason = getRequiredCol_(headerMap, "เหตุผลการลบ");

  const rows = [];

  for (let r = 1; r < values.length; r++) {
    const row = values[r];

    const timestampOutText = formatAnyDateTime_(row[cTimestampOut]);
    const rowDate = normalizeDateOnlyText_(timestampOutText);
    const itemStatus = norm_(row[cItemStatus]).toUpperCase() || STATUS_ACTIVE;

    if (rowDate !== targetDate) continue;
    if (itemStatus === STATUS_DELETED) continue;

    const prefix = norm_(row[cPrefix]);
    const firstName = norm_(row[cFirstName]);
    const lastName = norm_(row[cLastName]);

    rows.push({
      rowNumber: r + 1,
      timestampOut: timestampOutText,
      outboundId: norm_(row[cOutboundId]),
      autoId: norm_(row[cAutoId]),
      timestampIn: formatAnyDateTime_(row[cTimestampIn]),
      reason: norm_(row[cReason]),
      brandIn: norm_(row[cBrandIn]),
      plateNo: norm_(row[cPlateNo]),
      prefix: prefix,
      firstName: firstName,
      lastName: lastName,
      driverFullName: [prefix, firstName, lastName].filter(Boolean).join(" "),
      driverCompany: norm_(row[cCompany]),
      phone: norm_(row[cPhone]),
      brandOut: norm_(row[cBrandOut]),
      qtyOut: Number(row[cQtyOut] || 0),
      ecdName: norm_(row[cEcd]),
      tcrNo: norm_(row[cTcr]),
      recordedBy: norm_(row[cRecordedBy]),
      imageIds: norm_(row[cImageIds]),
      note: norm_(row[cNote]),
      duration: norm_(row[cDuration]),
      itemStatus: itemStatus,
      updatedBy: norm_(row[cUpdatedBy]),
      updatedAt: formatAnyDateTime_(row[cUpdatedAt]),
      deletedBy: norm_(row[cDeletedBy]),
      deletedAt: formatAnyDateTime_(row[cDeletedAt]),
      deleteReason: norm_(row[cDeleteReason])
    });
  }

  rows.sort(function (a, b) {
    const ta = parseAnyDate_(a.timestampOut);
    const tb = parseAnyDate_(b.timestampOut);

    const ma = ta && !isNaN(ta.getTime()) ? ta.getTime() : 0;
    const mb = tb && !isNaN(tb.getTime()) ? tb.getTime() : 0;

    return mb - ma;
  });

  return {
    ok: true,
    date: targetDate,
    rows: rows
  };
}
4. เพิ่มฟังก์ชัน Soft Delete รายการขาออก
function deleteOutbound_(payload) {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(30000);

    const outboundId = norm_(payload.outboundId);
    const deletedBy = norm_(payload.deletedBy || payload.recordedBy);
    const reason = norm_(payload.reason);

    if (!outboundId) {
      throw new Error("ไม่พบ Outbound ID ที่ต้องการลบ");
    }

    if (!deletedBy) {
      throw new Error("ไม่พบชื่อผู้ลบรายการ กรุณาเข้าสู่ระบบใหม่");
    }

    if (!reason) {
      throw new Error("กรุณาระบุเหตุผลการลบรายการ");
    }

    const found = findOutboundRowById_(outboundId);

    if (!found) {
      throw new Error("ไม่พบรายการขาออก Outbound ID: " + outboundId);
    }

    const sheet = found.sheet;
    const rowNumber = found.rowNumber;
    const obj = found.obj;
    const headerMap = found.headerMap;

    const oldStatus = norm_(obj["สถานะรายการ"]) || STATUS_ACTIVE;

    if (oldStatus === STATUS_DELETED) {
      throw new Error("รายการนี้ถูกลบไปแล้ว");
    }

    const deletedAt = nowText_();

    setCellByHeader_(sheet, rowNumber, headerMap, "สถานะรายการ", STATUS_DELETED);
    setCellByHeader_(sheet, rowNumber, headerMap, "ลบโดย", deletedBy);
    setCellByHeader_(sheet, rowNumber, headerMap, "ลบเมื่อ", deletedAt);
    setCellByHeader_(sheet, rowNumber, headerMap, "เหตุผลการลบ", reason);
    setCellByHeader_(sheet, rowNumber, headerMap, "แก้ไขล่าสุดโดย", deletedBy);
    setCellByHeader_(sheet, rowNumber, headerMap, "แก้ไขล่าสุดเมื่อ", deletedAt);

    appendAuditLog_({
      action: "DELETE_OUTBOUND",
      targetType: "OUTBOUND",
      outboundId: outboundId,
      autoId: obj["Auto ID ขาเข้า"],
      plateNo: obj["ทะเบียนรถ"],
      field: "สถานะรายการ",
      oldValue: oldStatus,
      newValue: STATUS_DELETED,
      actionBy: deletedBy,
      note: reason
    });

    return {
      ok: true,
      message: "ลบรายการขาออกสำเร็จ",
      outboundId: outboundId,
      autoId: obj["Auto ID ขาเข้า"],
      plateNo: obj["ทะเบียนรถ"],
      deletedBy: deletedBy,
      deletedAt: deletedAt
    };

  } finally {
    try {
      lock.releaseLock();
    } catch (err) {
      // ignore
    }
  }
}
5. เพิ่มฟังก์ชันแก้ไขรายการขาออก
รอบนี้จะให้แก้ข้อมูลหลักก่อน:

- ยี่ห้อพาเลทขาออก
- จำนวน
- ECD
- TCR
- หมายเหตุ
ส่วนรูปหลักฐานให้แยกทำรอบถัดไป เพราะต้องออกแบบว่าจะ “เพิ่มรูปใหม่” หรือ “แทนที่รูปเดิม” เพื่อไม่ให้ลบหลักฐานผิด

function updateOutbound_(payload) {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(30000);

    const outboundId = norm_(payload.outboundId);
    const updatedBy = norm_(payload.updatedBy || payload.recordedBy);

    const brandOut = norm_(payload.brandOut).toUpperCase();
    const qtyOut = Number(payload.qtyOut || 0);
    const ecdName = norm_(payload.ecdName).toUpperCase();
    const tcrNo = norm_(payload.tcrNo).toUpperCase();
    const note = norm_(payload.note);

    if (!outboundId) {
      throw new Error("ไม่พบ Outbound ID ที่ต้องการแก้ไข");
    }

    if (!updatedBy) {
      throw new Error("ไม่พบชื่อผู้แก้ไขรายการ กรุณาเข้าสู่ระบบใหม่");
    }

    if (ALLOWED_BRANDS.indexOf(brandOut) === -1) {
      throw new Error("กรุณาเลือกยี่ห้อพาเลทขาออกให้ถูกต้อง");
    }

    if (!Number.isFinite(qtyOut) || qtyOut <= 0) {
      throw new Error("กรุณาระบุจำนวนพาเลทขาออกเป็นตัวเลขมากกว่า 0");
    }

    if (!ecdName || !/^[A-Za-z0-9]+$/.test(ecdName)) {
      throw new Error("หมายเลขเอกสาร ECD กรอกได้เฉพาะตัวอักษรภาษาอังกฤษและตัวเลขเท่านั้น");
    }

    if (!tcrNo || !/^[A-Za-z0-9]+$/.test(tcrNo)) {
      throw new Error("หมายเลขเอกสาร TCR กรอกได้เฉพาะตัวอักษรภาษาอังกฤษและตัวเลขเท่านั้น");
    }

    const found = findOutboundRowById_(outboundId);

    if (!found) {
      throw new Error("ไม่พบรายการขาออก Outbound ID: " + outboundId);
    }

    const sheet = found.sheet;
    const rowNumber = found.rowNumber;
    const obj = found.obj;
    const headerMap = found.headerMap;

    const itemStatus = norm_(obj["สถานะรายการ"]) || STATUS_ACTIVE;

    if (itemStatus === STATUS_DELETED) {
      throw new Error("รายการนี้ถูกลบแล้ว ไม่สามารถแก้ไขได้");
    }

    const updatedAt = nowText_();

    const changes = [
      {
        header: "ยี่ห้อพาเลทขาออก",
        oldValue: norm_(obj["ยี่ห้อพาเลทขาออก"]),
        newValue: brandOut
      },
      {
        header: "จำนวนพาเลทขาออก",
        oldValue: norm_(obj["จำนวนพาเลทขาออก"]),
        newValue: String(Math.floor(qtyOut))
      },
      {
        header: "หมายเลขเอกสาร ECD",
        oldValue: norm_(obj["หมายเลขเอกสาร ECD"]),
        newValue: ecdName
      },
      {
        header: "หมายเลขเอกสาร TCR",
        oldValue: norm_(obj["หมายเลขเอกสาร TCR"]),
        newValue: tcrNo
      },
      {
        header: "หมายเหตุ",
        oldValue: norm_(obj["หมายเหตุ"]),
        newValue: note
      }
    ];

    changes.forEach(function (change) {
      if (change.oldValue !== change.newValue) {
        setCellByHeader_(sheet, rowNumber, headerMap, change.header, change.newValue);

        appendAuditLog_({
          action: "EDIT_OUTBOUND",
          targetType: "OUTBOUND",
          outboundId: outboundId,
          autoId: obj["Auto ID ขาเข้า"],
          plateNo: obj["ทะเบียนรถ"],
          field: change.header,
          oldValue: change.oldValue,
          newValue: change.newValue,
          actionBy: updatedBy,
          note: "แก้ไขข้อมูลขาออกย้อนหลัง"
        });
      }
    });

    setCellByHeader_(sheet, rowNumber, headerMap, "แก้ไขล่าสุดโดย", updatedBy);
    setCellByHeader_(sheet, rowNumber, headerMap, "แก้ไขล่าสุดเมื่อ", updatedAt);

    return {
      ok: true,
      message: "แก้ไขรายการขาออกสำเร็จ",
      outboundId: outboundId,
      autoId: obj["Auto ID ขาเข้า"],
      plateNo: obj["ทะเบียนรถ"],
      updatedBy: updatedBy,
      updatedAt: updatedAt
    };

  } finally {
    try {
      lock.releaseLock();
    } catch (err) {
      // ignore
    }
  }
}
6. เพิ่ม Helper สำหรับค้นหา/แก้ cell ตามหัวคอลัมน์
function findOutboundRowById_(outboundId) {
  outboundId = norm_(outboundId);

  if (!outboundId) return null;

  const ss = SpreadsheetApp.openById(OUT_SPREADSHEET_ID);
  const sheet = getOrCreateSheet_(ss, OUT_SHEET_NAME, OUT_HEADERS);
  ensureHeaders_(sheet, OUT_HEADERS);

  const values = sheet.getDataRange().getValues();

  if (values.length < 2) return null;

  const headers = values[0];
  const headerMap = getHeaderMap_(headers);
  const cOutboundId = getRequiredCol_(headerMap, "Outbound ID");

  for (let r = 1; r < values.length; r++) {
    const rowOutboundId = norm_(values[r][cOutboundId]);

    if (rowOutboundId === outboundId) {
      return {
        sheet: sheet,
        rowNumber: r + 1,
        values: values[r],
        headerMap: headerMap,
        obj: rowToObject_(headers, values[r])
      };
    }
  }

  return null;
}


function rowToObject_(headers, row) {
  const obj = {};

  headers.forEach(function (header, index) {
    obj[norm_(header)] = row[index];
  });

  return obj;
}


function setCellByHeader_(sheet, rowNumber, headerMap, headerName, value) {
  const col = getRequiredCol_(headerMap, headerName) + 1;
  sheet.getRange(rowNumber, col).setValue(value);
}
7. เพิ่ม Helper แปลงวันที่
ถ้าใน Code.gs ยังไม่มี normalizeDateOnlyText_() และ formatAnyDateTime_() ให้เพิ่มชุดนี้

function normalizeDateOnlyText_(value) {
  const text = norm_(value);

  if (!text) return "";

  let m = text.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);

  if (m) {
    return [
      String(Number(m[1])).padStart(2, "0"),
      String(Number(m[2])).padStart(2, "0"),
      String(Number(m[3]))
    ].join("/");
  }

  m = text.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);

  if (m) {
    return [
      String(Number(m[3])).padStart(2, "0"),
      String(Number(m[2])).padStart(2, "0"),
      String(Number(m[1]))
    ].join("/");
  }

  const d = parseAnyDate_(text);

  if (d && !isNaN(d.getTime())) {
    return Utilities.formatDate(d, TZ, "dd/MM/yyyy");
  }

  return "";
}


function formatAnyDateTime_(value) {
  if (!value) return "";

  if (Object.prototype.toString.call(value) === "[object Date]" && !isNaN(value.getTime())) {
    return Utilities.formatDate(value, TZ, "dd/MM/yyyy HH:mm:ss");
  }

  const d = parseAnyDate_(value);

  if (d && !isNaN(d.getTime())) {
    return Utilities.formatDate(d, TZ, "dd/MM/yyyy HH:mm:ss");
  }

  return norm_(value);
}
8. ผลที่ได้หลังแก้ Code.gs รอบนี้
ระบบ Backend จะรองรับ:

GET  action=outboundByDate&date=dd/MM/yyyy
POST action=deleteOutbound
POST action=updateOutbound
รายการที่ถูกค้นหาจะ:

- ดึงจาก Sheet1
- เฉพาะวันที่เลือก
- ไม่แสดงรายการสถานะ DELETED
- เรียงเวลาขาออกล่าสุดไว้บนสุด
การลบจะเป็น:

- Soft delete
- เปลี่ยนสถานะรายการเป็น DELETED
- ไม่ลบแถวจริง
- ไม่แตะ Sheet5
- บันทึก AuditLog
การแก้ไขจะ:

- แก้เฉพาะข้อมูลขาออก
- ไม่แก้ Timestamp Out
- ไม่แก้ Duration
- ไม่แก้ Sheet5
- บันทึก AuditLog ราย field
รอบถัดไปแก้ worker.js เพิ่ม route:

GET  /api/outbound-by-date?date=dd/MM/yyyy
POST /api/delete-outbound
POST /api/update-outbound


Pasted code(61).js
JavaScript
ก่อนไปรอบถัดไป ขอCode.gs ที่ปรับปรุงแล้วแบบครบถ้วนมาก่อนครับ 

คิดเป็นเวลา 10s
ได้ครับ ด้านล่างคือ Code.gs ฉบับปรับปรุงครบถ้วนทั้งไฟล์ รวมจากโค้ดชุดล่าสุดของคุณ และเพิ่มส่วนที่ขาดให้ครบ ได้แก่ outboundByDate, deleteOutbound, updateOutbound, AuditLog, InboundSuppress, TCR และยังคงการอัปเดต Timestamp Out / Duration กลับไปที่ Sheet5 เหมือนเดิมเมื่อบันทึกออกจริง ตามโค้ดเดิมที่คุณส่งมา 


/*******************************************************
 * Pallet OUT System - LOSCAM / CHEP
 * Backend: Google Apps Script
 *
 * ใช้สำหรับ:
 * - Login จากชีท Pass
 * - ดึง Brand จากชีท Brand
 * - ดึงจำนวนจากชีท pallet
 * - ดึงข้อมูลขาเข้าจาก Sheet5
 * - ซ่อน Auto ID ขาเข้าจากฟอร์มขาออก โดยไม่แก้ Sheet5
 * - บันทึกข้อมูลขาออกลง Sheet1
 * - อัปโหลดภาพหลักฐานเข้า Google Drive
 * - อัปเดต Timestamp Out / Duration กลับไป Sheet5 เมื่อบันทึกออกจริง
 * - ค้นหา / แก้ไข / Soft Delete รายการขาออกย้อนหลัง
 * - บันทึก AuditLog ทุก action สำคัญ
 *******************************************************/


/** =========================
 * CONFIG
 * ========================= */

const TZ = "Asia/Bangkok";

const OUT_SPREADSHEET_ID = "1wmPZx6NGPfrM6GD2NDNd7Kfk1XCrA6pPDyE8yBxSYic";
const OUT_SHEET_NAME = "Sheet1";
const PASS_SHEET_NAME = "Pass";
const BRAND_SHEET_NAME = "Brand";
const PALLET_QTY_SHEET_NAME = "pallet";

const INBOUND_SUPPRESS_SHEET_NAME = "InboundSuppress";
const AUDIT_LOG_SHEET_NAME = "AuditLog";

const STATUS_ACTIVE = "ACTIVE";
const STATUS_DELETED = "DELETED";

const SUPPRESS_STATUS_HIDDEN = "HIDDEN";
const SUPPRESS_STATUS_RESTORED = "RESTORED";

const IN_SPREADSHEET_ID = "1NkCXG5tGA4_0fWiA0gcxM3j_tS8UyXOZXqD9uVdC6Ik";
const IN_SHEET_NAME = "Sheet5";

const EVIDENCE_ROOT_FOLDER_ID = "1u6EUPUjf5TGMUvooLvoa4ntPu2PMjcdr";

const MAX_EVIDENCE_IMAGES = 4;
const MIN_EVIDENCE_IMAGES = 1;

const IMAGE_PUBLIC_BASE = "https://lh5.googleusercontent.com/d/";

const ALLOWED_IN_REASON = "รับพาเลท";
const ALLOWED_BRANDS = ["LOSCAM", "CHEP"];

const OUT_HEADERS = [
  "Timestamp ขาออก",
  "Outbound ID",
  "Auto ID ขาเข้า",
  "Timestamp ขาเข้า",
  "เหตุผลเข้าพื้นที่",
  "ยี่ห้อพาเลทขาเข้า",
  "ทะเบียนรถ",
  "คำนำหน้า",
  "ชื่อ พขร.",
  "สกุล พขร.",
  "ต้นสังกัด พขร.",
  "เบอร์โทร",
  "ยี่ห้อพาเลทขาออก",
  "จำนวนพาเลทขาออก",
  "หมายเลขเอกสาร ECD",
  "หมายเลขเอกสาร TCR",
  "ผู้บันทึก",
  "ID รูปหลักฐาน",
  "หมายเหตุ",
  "Duration",
  "สถานะรายการ",
  "สถานะการบันทึก",
  "แก้ไขล่าสุดโดย",
  "แก้ไขล่าสุดเมื่อ",
  "ลบโดย",
  "ลบเมื่อ",
  "เหตุผลการลบ"
];

const INBOUND_SUPPRESS_HEADERS = [
  "Timestamp",
  "Auto ID ขาเข้า",
  "ทะเบียนรถ",
  "Timestamp ขาเข้า",
  "ยี่ห้อพาเลทขาเข้า",
  "ชื่อ พขร.",
  "ต้นสังกัด พขร.",
  "เบอร์โทร",
  "สถานะการซ่อน",
  "ซ่อนโดย",
  "เหตุผลการซ่อน",
  "คืนสถานะโดย",
  "คืนสถานะเมื่อ",
  "เหตุผลคืนสถานะ"
];

const AUDIT_LOG_HEADERS = [
  "Timestamp",
  "Action",
  "Target Type",
  "Outbound ID",
  "Auto ID ขาเข้า",
  "ทะเบียนรถ",
  "Field",
  "Old Value",
  "New Value",
  "Action By",
  "Note"
];

const PASS_HEADERS = ["Pass", "NAME"];
const BRAND_HEADERS = ["Brand", "ID"];
const PALLET_QTY_HEADERS = ["Qty"];


/** =========================
 * ENTRY POINTS
 * ========================= */

function doGet(e) {
  try {
    const params = e && e.parameter ? e.parameter : {};
    const action = norm_(params.action);

    if (action === "health") {
      return json_({
        ok: true,
        service: "pallet-out-api",
        timestamp: nowText_()
      });
    }

    if (action === "options") {
      return json_(getOptions_());
    }

    if (action === "inboundOpen") {
      return json_(getInboundOpenRows_());
    }

    if (action === "outboundByDate") {
      const dateText = norm_(params.date);
      return json_(getOutboundByDate_(dateText));
    }

    return json_({
      ok: true,
      message: "Pallet OUT API is running.",
      availableActions: [
        "GET ?action=health",
        "GET ?action=options",
        "GET ?action=inboundOpen",
        "GET ?action=outboundByDate&date=dd/MM/yyyy",
        "POST action=login",
        "POST action=submitOut",
        "POST action=suppressInbound",
        "POST action=restoreInbound",
        "POST action=deleteOutbound",
        "POST action=updateOutbound"
      ]
    });

  } catch (err) {
    return jsonError_(err);
  }
}


function doPost(e) {
  try {
    const payload = parsePostPayload_(e);
    const action = norm_(payload.action);

    if (action === "login") {
      return json_(handleLogin_(payload));
    }

    if (action === "options") {
      return json_(getOptions_());
    }

    if (action === "inboundOpen") {
      return json_(getInboundOpenRows_());
    }

    if (action === "submitOut") {
      return json_(submitPalletOut_(payload));
    }

    if (action === "suppressInbound") {
      return json_(suppressInbound_(payload));
    }

    if (action === "restoreInbound") {
      return json_(restoreInbound_(payload));
    }

    if (action === "deleteOutbound") {
      return json_(deleteOutbound_(payload));
    }

    if (action === "updateOutbound") {
      return json_(updateOutbound_(payload));
    }

    return json_({
      ok: false,
      message: "ไม่พบ action ที่ต้องการ",
      action: action || ""
    });

  } catch (err) {
    return jsonError_(err);
  }
}


/** =========================
 * LOGIN
 * ========================= */

function handleLogin_(payload) {
  const pass = norm_(payload.pass);

  if (!pass) {
    throw new Error("กรุณากรอกรหัสผ่าน");
  }

  const ss = SpreadsheetApp.openById(OUT_SPREADSHEET_ID);
  const sheet = getOrCreateSheet_(ss, PASS_SHEET_NAME, PASS_HEADERS);
  const values = sheet.getDataRange().getValues();

  if (values.length < 2) {
    throw new Error("ยังไม่มีข้อมูลรหัสผ่านในชีท Pass");
  }

  const headerMap = getHeaderMap_(values[0]);
  const passCol = getRequiredCol_(headerMap, "Pass");
  const nameCol = getRequiredCol_(headerMap, "NAME");

  for (let r = 1; r < values.length; r++) {
    const rowPass = norm_(values[r][passCol]);

    if (rowPass && rowPass === pass) {
      const name = norm_(values[r][nameCol]);

      if (!name) {
        throw new Error("พบรหัสผ่าน แต่ไม่พบชื่อผู้ใช้งานในคอลัมน์ NAME");
      }

      return {
        ok: true,
        message: "เข้าสู่ระบบสำเร็จ",
        name: name
      };
    }
  }

  return {
    ok: false,
    message: "รหัสผ่านไม่ถูกต้อง"
  };
}


/** =========================
 * OPTIONS
 * ========================= */

function getOptions_() {
  return {
    ok: true,
    brands: getBrandOptions_(),
    palletQty: getPalletQtyOptions_(),
    timestamp: nowText_()
  };
}


function getBrandOptions_() {
  const ss = SpreadsheetApp.openById(OUT_SPREADSHEET_ID);
  const sheet = getOrCreateSheet_(ss, BRAND_SHEET_NAME, BRAND_HEADERS);
  const values = sheet.getDataRange().getValues();

  if (values.length < 2) return [];

  const headerMap = getHeaderMap_(values[0]);
  const brandCol = getRequiredCol_(headerMap, "Brand");
  const idCol = getRequiredCol_(headerMap, "ID");

  const list = [];

  for (let r = 1; r < values.length; r++) {
    const brand = norm_(values[r][brandCol]).toUpperCase();
    const imageId = norm_(values[r][idCol]);

    if (!brand || !imageId) continue;

    list.push({
      brand: brand,
      imageId: imageId,
      imageUrl: IMAGE_PUBLIC_BASE + imageId
    });
  }

  return list;
}


function getPalletQtyOptions_() {
  const ss = SpreadsheetApp.openById(OUT_SPREADSHEET_ID);
  const sheet = getOrCreateSheet_(ss, PALLET_QTY_SHEET_NAME, PALLET_QTY_HEADERS);
  const values = sheet.getDataRange().getValues();

  if (values.length < 2) return [];

  const headerMap = getHeaderMap_(values[0]);
  const qtyCol = getRequiredCol_(headerMap, "Qty");

  const qtyList = [];

  for (let r = 1; r < values.length; r++) {
    const raw = norm_(values[r][qtyCol]);
    if (!raw) continue;

    const n = Number(raw);
    if (!isFinite(n) || n <= 0) continue;

    qtyList.push(n);
  }

  return Array.from(new Set(qtyList)).sort(function (a, b) {
    return a - b;
  });
}


/** =========================
 * INBOUND OPEN ROWS
 * ========================= */

function getInboundOpenRows_() {
  const ss = SpreadsheetApp.openById(IN_SPREADSHEET_ID);
  const sheet = ss.getSheetByName(IN_SHEET_NAME);

  if (!sheet) {
    throw new Error("ไม่พบชีทข้อมูลขาเข้า: " + IN_SHEET_NAME);
  }

  const values = sheet.getDataRange().getValues();

  if (values.length < 2) {
    return {
      ok: true,
      rows: []
    };
  }

  const headers = values[0];
  const headerMap = getHeaderMap_(headers);

  const cAutoId = getRequiredCol_(headerMap, "Auto ID");
  const cTimestamp = getRequiredCol_(headerMap, "Timestamp");
  const cStatus = getOptionalCol_(headerMap, "สถานะ");
  const cReason = getRequiredCol_(headerMap, "เหตุผลเข้าพื้นที่");
  const cBrand = getRequiredCol_(headerMap, "ยี่ห้อพาเลท");
  const cPlate = getRequiredCol_(headerMap, "ทะเบียนรถ");
  const cPrefix = getOptionalCol_(headerMap, "คำนำหน้า");
  const cFirstName = getOptionalCol_(headerMap, "ชื่อ");
  const cLastName = getOptionalCol_(headerMap, "สกุล");
  const cCompany = getOptionalCol_(headerMap, "ต้นสังกัด พขร.");
  const cPhone = getOptionalCol_(headerMap, "เบอร์โทร");
  const cTimestampOut = getRequiredCol_(headerMap, "Timestamp Out");
  const cDuration = getOptionalCol_(headerMap, "Duration");

  const suppressedMap = getActiveSuppressedInboundMap_();
  const rows = [];

  for (let r = 1; r < values.length; r++) {
    const row = values[r];

    const autoId = norm_(row[cAutoId]);
    const reason = norm_(row[cReason]);
    const brandIn = norm_(row[cBrand]).toUpperCase();
    const timestampOut = norm_(row[cTimestampOut]);

    if (!autoId) continue;
    if (reason !== ALLOWED_IN_REASON) continue;
    if (ALLOWED_BRANDS.indexOf(brandIn) === -1) continue;
    if (timestampOut) continue;
    if (suppressedMap[autoId]) continue;

    const item = {
      rowNumber: r + 1,
      autoId: autoId,
      timestampIn: toDisplayDateTime_(row[cTimestamp]),
      status: cStatus >= 0 ? norm_(row[cStatus]) : "",
      reason: reason,
      brandIn: brandIn,
      plateNo: norm_(row[cPlate]),
      prefix: cPrefix >= 0 ? norm_(row[cPrefix]) : "",
      firstName: cFirstName >= 0 ? norm_(row[cFirstName]) : "",
      lastName: cLastName >= 0 ? norm_(row[cLastName]) : "",
      driverCompany: cCompany >= 0 ? norm_(row[cCompany]) : "",
      phone: cPhone >= 0 ? norm_(row[cPhone]) : "",
      timestampOut: "",
      duration: cDuration >= 0 ? norm_(row[cDuration]) : ""
    };

    item.driverFullName = [item.prefix, item.firstName, item.lastName]
      .filter(Boolean)
      .join(" ");

    rows.push(item);
  }

  rows.sort(function (a, b) {
    const da = parseAnyDate_(a.timestampIn);
    const db = parseAnyDate_(b.timestampIn);

    const ta = da && !isNaN(da.getTime()) ? da.getTime() : 0;
    const tb = db && !isNaN(db.getTime()) ? db.getTime() : 0;

    return tb - ta;
  });

  return {
    ok: true,
    rows: rows,
    count: rows.length
  };
}


/** =========================
 * SUBMIT PALLET OUT
 * ========================= */

function submitPalletOut_(payload) {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(30000);

    const autoId = norm_(payload.autoId);
    const brandOut = norm_(payload.brandOut).toUpperCase();
    const qtyOut = Number(payload.qtyOut);
    const ecdName = norm_(payload.ecdName).toUpperCase();
    const tcrNo = norm_(payload.tcrNo).toUpperCase();
    const recordedBy = norm_(payload.recordedBy);
    const note = norm_(payload.note);
    const images = Array.isArray(payload.images) ? payload.images : [];

    validateSubmitPayload_({
      autoId: autoId,
      brandOut: brandOut,
      qtyOut: qtyOut,
      ecdName: ecdName,
      tcrNo: tcrNo,
      recordedBy: recordedBy,
      images: images
    });

    const inbound = findInboundRowByAutoId_(autoId);

    if (!inbound) {
      throw new Error("ไม่พบข้อมูลขาเข้าจาก Auto ID: " + autoId);
    }

    if (norm_(inbound.timestampOut)) {
      throw new Error("รายการนี้ถูกบันทึกขาออกแล้ว ไม่สามารถบันทึกซ้ำได้");
    }

    if (inbound.reason !== ALLOWED_IN_REASON) {
      throw new Error("รายการนี้ไม่ใช่เหตุผลเข้าพื้นที่: รับพาเลท");
    }

    if (ALLOWED_BRANDS.indexOf(inbound.brandIn) === -1) {
      throw new Error("ยี่ห้อพาเลทขาเข้าไม่ใช่ LOSCAM หรือ CHEP");
    }

    const timestampOutDate = new Date();
    const timestampOutText = formatDateTime_(timestampOutDate);
    const timestampInDate = parseAnyDate_(inbound.timestampInRaw);
    const duration = calculateDurationText_(timestampInDate, timestampOutDate);

    const outboundId = generateOutboundId_();

    const imageIds = saveEvidenceImages_({
      outboundId: outboundId,
      autoId: autoId,
      plateNo: inbound.plateNo,
      images: images
    });

    const imageIdsText = imageIds.join("|");

    appendOutboundRow_({
      timestampOut: timestampOutText,
      outboundId: outboundId,
      autoId: autoId,
      timestampIn: inbound.timestampInText,
      reason: inbound.reason,
      brandIn: inbound.brandIn,
      plateNo: inbound.plateNo,
      prefix: inbound.prefix,
      firstName: inbound.firstName,
      lastName: inbound.lastName,
      driverCompany: inbound.driverCompany,
      phone: inbound.phone,
      brandOut: brandOut,
      qtyOut: qtyOut,
      ecdName: ecdName,
      tcrNo: tcrNo,
      recordedBy: recordedBy,
      imageIdsText: imageIdsText,
      note: note,
      duration: duration,
      itemStatus: STATUS_ACTIVE,
      status: "บันทึกขาออกสำเร็จ"
    });

    updateInboundOutInfo_(inbound.rowNumber, timestampOutText, duration);

    appendAuditLog_({
      action: "CREATE_OUTBOUND",
      targetType: "OUTBOUND",
      outboundId: outboundId,
      autoId: autoId,
      plateNo: inbound.plateNo,
      field: "CREATE",
      oldValue: "",
      newValue: "บันทึกขาออกสำเร็จ",
      actionBy: recordedBy,
      note: "บันทึกขาออกและอัปเดต Timestamp Out / Duration กลับไป Sheet5"
    });

    const driverFullName = [
      inbound.prefix,
      inbound.firstName,
      inbound.lastName
    ].filter(Boolean).join(" ");

    return {
      ok: true,
      message: "บันทึกขาออกสำเร็จ",
      outboundId: outboundId,
      autoId: autoId,
      plateNo: inbound.plateNo,
      driverFullName: driverFullName,
      ecdName: ecdName,
      tcrNo: tcrNo,
      timestampOut: timestampOutText,
      duration: duration,
      imageIds: imageIdsText
    };

  } finally {
    try {
      lock.releaseLock();
    } catch (err) {
      // ignore
    }
  }
}


function validateSubmitPayload_(data) {
  if (!data.autoId) {
    throw new Error("ไม่พบ Auto ID ขาเข้า");
  }

  if (!data.recordedBy) {
    throw new Error("ไม่พบชื่อผู้บันทึก กรุณาเข้าสู่ระบบใหม่");
  }

  if (!data.brandOut) {
    throw new Error("กรุณาเลือกยี่ห้อพาเลทขาออก");
  }

  if (ALLOWED_BRANDS.indexOf(data.brandOut) === -1) {
    throw new Error("ยี่ห้อพาเลทขาออกต้องเป็น LOSCAM หรือ CHEP เท่านั้น");
  }

  if (!isFinite(data.qtyOut) || data.qtyOut <= 0) {
    throw new Error("จำนวนพาเลทขาออกต้องเป็นตัวเลขมากกว่า 0");
  }

  if (!data.ecdName) {
    throw new Error("กรุณากรอกหมายเลขเอกสาร ECD");
  }

  if (!/^[A-Za-z0-9]+$/.test(data.ecdName)) {
    throw new Error("หมายเลขเอกสาร ECD กรอกได้เฉพาะตัวอักษรภาษาอังกฤษและตัวเลขเท่านั้น ห้ามใช้อักขระพิเศษ");
  }

  if (!data.tcrNo) {
    throw new Error("กรุณากรอกหมายเลขเอกสาร TCR");
  }

  if (!/^[A-Za-z0-9]+$/.test(data.tcrNo)) {
    throw new Error("หมายเลขเอกสาร TCR กรอกได้เฉพาะตัวอักษรภาษาอังกฤษและตัวเลขเท่านั้น ห้ามใช้อักขระพิเศษ");
  }

  if (!Array.isArray(data.images)) {
    throw new Error("ข้อมูลรูปภาพไม่ถูกต้อง");
  }

  if (data.images.length < MIN_EVIDENCE_IMAGES) {
    throw new Error("กรุณาแนบรูปหลักฐานอย่างน้อย 1 รูป");
  }

  if (data.images.length > MAX_EVIDENCE_IMAGES) {
    throw new Error("แนบรูปหลักฐานได้สูงสุด 4 รูปเท่านั้น");
  }
}


/** =========================
 * OUTBOUND HISTORY / EDIT / DELETE
 * ========================= */

function getOutboundByDate_(dateText) {
  dateText = norm_(dateText);

  if (!dateText) {
    throw new Error("กรุณาระบุวันที่ที่ต้องการค้นหา");
  }

  const targetDate = normalizeDateOnlyText_(dateText);

  if (!targetDate) {
    throw new Error("รูปแบบวันที่ไม่ถูกต้อง กรุณาใช้ dd/MM/yyyy หรือ yyyy-MM-dd");
  }

  const ss = SpreadsheetApp.openById(OUT_SPREADSHEET_ID);
  const sheet = getOrCreateSheet_(ss, OUT_SHEET_NAME, OUT_HEADERS);
  ensureHeaders_(sheet, OUT_HEADERS);

  const values = sheet.getDataRange().getValues();

  if (values.length < 2) {
    return {
      ok: true,
      date: targetDate,
      rows: []
    };
  }

  const headerMap = getHeaderMap_(values[0]);

  const cTimestampOut = getRequiredCol_(headerMap, "Timestamp ขาออก");
  const cOutboundId = getRequiredCol_(headerMap, "Outbound ID");
  const cAutoId = getRequiredCol_(headerMap, "Auto ID ขาเข้า");
  const cTimestampIn = getRequiredCol_(headerMap, "Timestamp ขาเข้า");
  const cReason = getRequiredCol_(headerMap, "เหตุผลเข้าพื้นที่");
  const cBrandIn = getRequiredCol_(headerMap, "ยี่ห้อพาเลทขาเข้า");
  const cPlateNo = getRequiredCol_(headerMap, "ทะเบียนรถ");
  const cPrefix = getRequiredCol_(headerMap, "คำนำหน้า");
  const cFirstName = getRequiredCol_(headerMap, "ชื่อ พขร.");
  const cLastName = getRequiredCol_(headerMap, "สกุล พขร.");
  const cCompany = getRequiredCol_(headerMap, "ต้นสังกัด พขร.");
  const cPhone = getRequiredCol_(headerMap, "เบอร์โทร");
  const cBrandOut = getRequiredCol_(headerMap, "ยี่ห้อพาเลทขาออก");
  const cQtyOut = getRequiredCol_(headerMap, "จำนวนพาเลทขาออก");
  const cEcd = getRequiredCol_(headerMap, "หมายเลขเอกสาร ECD");
  const cTcr = getRequiredCol_(headerMap, "หมายเลขเอกสาร TCR");
  const cRecordedBy = getRequiredCol_(headerMap, "ผู้บันทึก");
  const cImageIds = getRequiredCol_(headerMap, "ID รูปหลักฐาน");
  const cNote = getRequiredCol_(headerMap, "หมายเหตุ");
  const cDuration = getRequiredCol_(headerMap, "Duration");
  const cItemStatus = getRequiredCol_(headerMap, "สถานะรายการ");
  const cUpdatedBy = getRequiredCol_(headerMap, "แก้ไขล่าสุดโดย");
  const cUpdatedAt = getRequiredCol_(headerMap, "แก้ไขล่าสุดเมื่อ");
  const cDeletedBy = getRequiredCol_(headerMap, "ลบโดย");
  const cDeletedAt = getRequiredCol_(headerMap, "ลบเมื่อ");
  const cDeleteReason = getRequiredCol_(headerMap, "เหตุผลการลบ");

  const rows = [];

  for (let r = 1; r < values.length; r++) {
    const row = values[r];

    const timestampOutText = formatAnyDateTime_(row[cTimestampOut]);
    const rowDate = normalizeDateOnlyText_(timestampOutText);
    const itemStatus = norm_(row[cItemStatus]).toUpperCase() || STATUS_ACTIVE;

    if (rowDate !== targetDate) continue;
    if (itemStatus === STATUS_DELETED) continue;

    const prefix = norm_(row[cPrefix]);
    const firstName = norm_(row[cFirstName]);
    const lastName = norm_(row[cLastName]);

    rows.push({
      rowNumber: r + 1,
      timestampOut: timestampOutText,
      outboundId: norm_(row[cOutboundId]),
      autoId: norm_(row[cAutoId]),
      timestampIn: formatAnyDateTime_(row[cTimestampIn]),
      reason: norm_(row[cReason]),
      brandIn: norm_(row[cBrandIn]),
      plateNo: norm_(row[cPlateNo]),
      prefix: prefix,
      firstName: firstName,
      lastName: lastName,
      driverFullName: [prefix, firstName, lastName].filter(Boolean).join(" "),
      driverCompany: norm_(row[cCompany]),
      phone: norm_(row[cPhone]),
      brandOut: norm_(row[cBrandOut]),
      qtyOut: Number(row[cQtyOut] || 0),
      ecdName: norm_(row[cEcd]),
      tcrNo: norm_(row[cTcr]),
      recordedBy: norm_(row[cRecordedBy]),
      imageIds: norm_(row[cImageIds]),
      note: norm_(row[cNote]),
      duration: norm_(row[cDuration]),
      itemStatus: itemStatus,
      updatedBy: norm_(row[cUpdatedBy]),
      updatedAt: formatAnyDateTime_(row[cUpdatedAt]),
      deletedBy: norm_(row[cDeletedBy]),
      deletedAt: formatAnyDateTime_(row[cDeletedAt]),
      deleteReason: norm_(row[cDeleteReason])
    });
  }

  rows.sort(function (a, b) {
    const ta = parseAnyDate_(a.timestampOut);
    const tb = parseAnyDate_(b.timestampOut);

    const ma = ta && !isNaN(ta.getTime()) ? ta.getTime() : 0;
    const mb = tb && !isNaN(tb.getTime()) ? tb.getTime() : 0;

    return mb - ma;
  });

  return {
    ok: true,
    date: targetDate,
    rows: rows
  };
}


function deleteOutbound_(payload) {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(30000);

    const outboundId = norm_(payload.outboundId);
    const deletedBy = norm_(payload.deletedBy || payload.recordedBy);
    const reason = norm_(payload.reason);

    if (!outboundId) {
      throw new Error("ไม่พบ Outbound ID ที่ต้องการลบ");
    }

    if (!deletedBy) {
      throw new Error("ไม่พบชื่อผู้ลบรายการ กรุณาเข้าสู่ระบบใหม่");
    }

    if (!reason) {
      throw new Error("กรุณาระบุเหตุผลการลบรายการ");
    }

    const found = findOutboundRowById_(outboundId);

    if (!found) {
      throw new Error("ไม่พบรายการขาออก Outbound ID: " + outboundId);
    }

    const sheet = found.sheet;
    const rowNumber = found.rowNumber;
    const obj = found.obj;
    const headerMap = found.headerMap;

    const oldStatus = norm_(obj["สถานะรายการ"]) || STATUS_ACTIVE;

    if (oldStatus === STATUS_DELETED) {
      throw new Error("รายการนี้ถูกลบไปแล้ว");
    }

    const deletedAt = nowText_();

    setCellByHeader_(sheet, rowNumber, headerMap, "สถานะรายการ", STATUS_DELETED);
    setCellByHeader_(sheet, rowNumber, headerMap, "ลบโดย", deletedBy);
    setCellByHeader_(sheet, rowNumber, headerMap, "ลบเมื่อ", deletedAt);
    setCellByHeader_(sheet, rowNumber, headerMap, "เหตุผลการลบ", reason);
    setCellByHeader_(sheet, rowNumber, headerMap, "แก้ไขล่าสุดโดย", deletedBy);
    setCellByHeader_(sheet, rowNumber, headerMap, "แก้ไขล่าสุดเมื่อ", deletedAt);

    appendAuditLog_({
      action: "DELETE_OUTBOUND",
      targetType: "OUTBOUND",
      outboundId: outboundId,
      autoId: obj["Auto ID ขาเข้า"],
      plateNo: obj["ทะเบียนรถ"],
      field: "สถานะรายการ",
      oldValue: oldStatus,
      newValue: STATUS_DELETED,
      actionBy: deletedBy,
      note: reason
    });

    return {
      ok: true,
      message: "ลบรายการขาออกสำเร็จ",
      outboundId: outboundId,
      autoId: obj["Auto ID ขาเข้า"],
      plateNo: obj["ทะเบียนรถ"],
      deletedBy: deletedBy,
      deletedAt: deletedAt
    };

  } finally {
    try {
      lock.releaseLock();
    } catch (err) {
      // ignore
    }
  }
}


function updateOutbound_(payload) {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(30000);

    const outboundId = norm_(payload.outboundId);
    const updatedBy = norm_(payload.updatedBy || payload.recordedBy);

    const brandOut = norm_(payload.brandOut).toUpperCase();
    const qtyOut = Number(payload.qtyOut || 0);
    const ecdName = norm_(payload.ecdName).toUpperCase();
    const tcrNo = norm_(payload.tcrNo).toUpperCase();
    const note = norm_(payload.note);

    if (!outboundId) {
      throw new Error("ไม่พบ Outbound ID ที่ต้องการแก้ไข");
    }

    if (!updatedBy) {
      throw new Error("ไม่พบชื่อผู้แก้ไขรายการ กรุณาเข้าสู่ระบบใหม่");
    }

    if (ALLOWED_BRANDS.indexOf(brandOut) === -1) {
      throw new Error("กรุณาเลือกยี่ห้อพาเลทขาออกให้ถูกต้อง");
    }

    if (!Number.isFinite(qtyOut) || qtyOut <= 0) {
      throw new Error("กรุณาระบุจำนวนพาเลทขาออกเป็นตัวเลขมากกว่า 0");
    }

    if (!ecdName || !/^[A-Za-z0-9]+$/.test(ecdName)) {
      throw new Error("หมายเลขเอกสาร ECD กรอกได้เฉพาะตัวอักษรภาษาอังกฤษและตัวเลขเท่านั้น");
    }

    if (!tcrNo || !/^[A-Za-z0-9]+$/.test(tcrNo)) {
      throw new Error("หมายเลขเอกสาร TCR กรอกได้เฉพาะตัวอักษรภาษาอังกฤษและตัวเลขเท่านั้น");
    }

    const found = findOutboundRowById_(outboundId);

    if (!found) {
      throw new Error("ไม่พบรายการขาออก Outbound ID: " + outboundId);
    }

    const sheet = found.sheet;
    const rowNumber = found.rowNumber;
    const obj = found.obj;
    const headerMap = found.headerMap;

    const itemStatus = norm_(obj["สถานะรายการ"]) || STATUS_ACTIVE;

    if (itemStatus === STATUS_DELETED) {
      throw new Error("รายการนี้ถูกลบแล้ว ไม่สามารถแก้ไขได้");
    }

    const updatedAt = nowText_();

    const changes = [
      {
        header: "ยี่ห้อพาเลทขาออก",
        oldValue: norm_(obj["ยี่ห้อพาเลทขาออก"]),
        newValue: brandOut
      },
      {
        header: "จำนวนพาเลทขาออก",
        oldValue: norm_(obj["จำนวนพาเลทขาออก"]),
        newValue: String(Math.floor(qtyOut))
      },
      {
        header: "หมายเลขเอกสาร ECD",
        oldValue: norm_(obj["หมายเลขเอกสาร ECD"]),
        newValue: ecdName
      },
      {
        header: "หมายเลขเอกสาร TCR",
        oldValue: norm_(obj["หมายเลขเอกสาร TCR"]),
        newValue: tcrNo
      },
      {
        header: "หมายเหตุ",
        oldValue: norm_(obj["หมายเหตุ"]),
        newValue: note
      }
    ];

    changes.forEach(function (change) {
      if (change.oldValue !== change.newValue) {
        setCellByHeader_(sheet, rowNumber, headerMap, change.header, change.newValue);

        appendAuditLog_({
          action: "EDIT_OUTBOUND",
          targetType: "OUTBOUND",
          outboundId: outboundId,
          autoId: obj["Auto ID ขาเข้า"],
          plateNo: obj["ทะเบียนรถ"],
          field: change.header,
          oldValue: change.oldValue,
          newValue: change.newValue,
          actionBy: updatedBy,
          note: "แก้ไขข้อมูลขาออกย้อนหลัง"
        });
      }
    });

    setCellByHeader_(sheet, rowNumber, headerMap, "แก้ไขล่าสุดโดย", updatedBy);
    setCellByHeader_(sheet, rowNumber, headerMap, "แก้ไขล่าสุดเมื่อ", updatedAt);

    return {
      ok: true,
      message: "แก้ไขรายการขาออกสำเร็จ",
      outboundId: outboundId,
      autoId: obj["Auto ID ขาเข้า"],
      plateNo: obj["ทะเบียนรถ"],
      updatedBy: updatedBy,
      updatedAt: updatedAt
    };

  } finally {
    try {
      lock.releaseLock();
    } catch (err) {
      // ignore
    }
  }
}


/** =========================
 * FIND / UPDATE INBOUND
 * ========================= */

function findInboundRowByAutoId_(autoId) {
  const ss = SpreadsheetApp.openById(IN_SPREADSHEET_ID);
  const sheet = ss.getSheetByName(IN_SHEET_NAME);

  if (!sheet) {
    throw new Error("ไม่พบชีทข้อมูลขาเข้า: " + IN_SHEET_NAME);
  }

  const values = sheet.getDataRange().getValues();

  if (values.length < 2) return null;

  const headers = values[0];
  const headerMap = getHeaderMap_(headers);

  const cAutoId = getRequiredCol_(headerMap, "Auto ID");
  const cTimestamp = getRequiredCol_(headerMap, "Timestamp");
  const cReason = getRequiredCol_(headerMap, "เหตุผลเข้าพื้นที่");
  const cBrand = getRequiredCol_(headerMap, "ยี่ห้อพาเลท");
  const cPlate = getRequiredCol_(headerMap, "ทะเบียนรถ");
  const cPrefix = getOptionalCol_(headerMap, "คำนำหน้า");
  const cFirstName = getOptionalCol_(headerMap, "ชื่อ");
  const cLastName = getOptionalCol_(headerMap, "สกุล");
  const cCompany = getOptionalCol_(headerMap, "ต้นสังกัด พขร.");
  const cPhone = getOptionalCol_(headerMap, "เบอร์โทร");
  const cTimestampOut = getRequiredCol_(headerMap, "Timestamp Out");
  const cDuration = getOptionalCol_(headerMap, "Duration");

  for (let r = 1; r < values.length; r++) {
    const row = values[r];
    const rowAutoId = norm_(row[cAutoId]);

    if (rowAutoId !== autoId) continue;

    return {
      rowNumber: r + 1,
      autoId: rowAutoId,
      timestampInRaw: row[cTimestamp],
      timestampInText: toDisplayDateTime_(row[cTimestamp]),
      reason: norm_(row[cReason]),
      brandIn: norm_(row[cBrand]).toUpperCase(),
      plateNo: norm_(row[cPlate]),
      prefix: cPrefix >= 0 ? norm_(row[cPrefix]) : "",
      firstName: cFirstName >= 0 ? norm_(row[cFirstName]) : "",
      lastName: cLastName >= 0 ? norm_(row[cLastName]) : "",
      driverCompany: cCompany >= 0 ? norm_(row[cCompany]) : "",
      phone: cPhone >= 0 ? norm_(row[cPhone]) : "",
      timestampOut: norm_(row[cTimestampOut]),
      duration: cDuration >= 0 ? norm_(row[cDuration]) : ""
    };
  }

  return null;
}


function updateInboundOutInfo_(rowNumber, timestampOutText, duration) {
  const ss = SpreadsheetApp.openById(IN_SPREADSHEET_ID);
  const sheet = ss.getSheetByName(IN_SHEET_NAME);

  if (!sheet) {
    throw new Error("ไม่พบชีทข้อมูลขาเข้า: " + IN_SHEET_NAME);
  }

  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const headerMap = getHeaderMap_(headers);

  const cTimestampOut = getRequiredCol_(headerMap, "Timestamp Out") + 1;
  const cDuration = getRequiredCol_(headerMap, "Duration") + 1;

  sheet.getRange(rowNumber, cTimestampOut).setValue(timestampOutText);
  sheet.getRange(rowNumber, cDuration).setValue(duration);
}


/** =========================
 * OUTBOUND SHEET
 * ========================= */

function appendOutboundRow_(data) {
  const ss = SpreadsheetApp.openById(OUT_SPREADSHEET_ID);
  const sheet = getOrCreateSheet_(ss, OUT_SHEET_NAME, OUT_HEADERS);
  ensureHeaders_(sheet, OUT_HEADERS);

  const row = OUT_HEADERS.map(function (h) {
    switch (h) {
      case "Timestamp ขาออก":
        return data.timestampOut;
      case "Outbound ID":
        return data.outboundId;
      case "Auto ID ขาเข้า":
        return data.autoId;
      case "Timestamp ขาเข้า":
        return data.timestampIn;
      case "เหตุผลเข้าพื้นที่":
        return data.reason;
      case "ยี่ห้อพาเลทขาเข้า":
        return data.brandIn;
      case "ทะเบียนรถ":
        return data.plateNo;
      case "คำนำหน้า":
        return data.prefix;
      case "ชื่อ พขร.":
        return data.firstName;
      case "สกุล พขร.":
        return data.lastName;
      case "ต้นสังกัด พขร.":
        return data.driverCompany;
      case "เบอร์โทร":
        return data.phone;
      case "ยี่ห้อพาเลทขาออก":
        return data.brandOut;
      case "จำนวนพาเลทขาออก":
        return data.qtyOut;
      case "หมายเลขเอกสาร ECD":
        return data.ecdName;
      case "หมายเลขเอกสาร TCR":
        return data.tcrNo;
      case "ผู้บันทึก":
        return data.recordedBy;
      case "ID รูปหลักฐาน":
        return data.imageIdsText;
      case "หมายเหตุ":
        return data.note;
      case "Duration":
        return data.duration;
      case "สถานะรายการ":
        return data.itemStatus || STATUS_ACTIVE;
      case "สถานะการบันทึก":
        return data.status;
      case "แก้ไขล่าสุดโดย":
        return data.updatedBy || "";
      case "แก้ไขล่าสุดเมื่อ":
        return data.updatedAt || "";
      case "ลบโดย":
        return data.deletedBy || "";
      case "ลบเมื่อ":
        return data.deletedAt || "";
      case "เหตุผลการลบ":
        return data.deleteReason || "";
      default:
        return "";
    }
  });

  sheet.appendRow(row);
}


function generateOutboundId_() {
  const ss = SpreadsheetApp.openById(OUT_SPREADSHEET_ID);
  const sheet = getOrCreateSheet_(ss, OUT_SHEET_NAME, OUT_HEADERS);
  ensureHeaders_(sheet, OUT_HEADERS);

  const todayKey = Utilities.formatDate(new Date(), TZ, "yyyyMMdd");
  const prefix = "POUT-" + todayKey + "-";

  const lastRow = sheet.getLastRow();

  if (lastRow < 2) {
    return prefix + "0001";
  }

  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const headerMap = getHeaderMap_(headers);
  const outboundCol = getRequiredCol_(headerMap, "Outbound ID") + 1;

  const ids = sheet.getRange(2, outboundCol, lastRow - 1, 1).getValues()
    .map(function (r) {
      return norm_(r[0]);
    })
    .filter(function (id) {
      return id.indexOf(prefix) === 0;
    });

  let maxSeq = 0;

  ids.forEach(function (id) {
    const m = id.match(/-(\d{4,})$/);
    if (m) {
      const n = Number(m[1]);
      if (isFinite(n) && n > maxSeq) maxSeq = n;
    }
  });

  const nextSeq = maxSeq + 1;

  return prefix + String(nextSeq).padStart(4, "0");
}


function findOutboundRowById_(outboundId) {
  outboundId = norm_(outboundId);

  if (!outboundId) return null;

  const ss = SpreadsheetApp.openById(OUT_SPREADSHEET_ID);
  const sheet = getOrCreateSheet_(ss, OUT_SHEET_NAME, OUT_HEADERS);
  ensureHeaders_(sheet, OUT_HEADERS);

  const values = sheet.getDataRange().getValues();

  if (values.length < 2) return null;

  const headers = values[0];
  const headerMap = getHeaderMap_(headers);
  const cOutboundId = getRequiredCol_(headerMap, "Outbound ID");

  for (let r = 1; r < values.length; r++) {
    const rowOutboundId = norm_(values[r][cOutboundId]);

    if (rowOutboundId === outboundId) {
      return {
        sheet: sheet,
        rowNumber: r + 1,
        values: values[r],
        headerMap: headerMap,
        obj: rowToObject_(headers, values[r])
      };
    }
  }

  return null;
}


/** =========================
 * IMAGE UPLOAD
 * ========================= */

function saveEvidenceImages_(params) {
  const outboundId = norm_(params.outboundId);
  const autoId = norm_(params.autoId);
  const plateNo = sanitizeFileName_(params.plateNo || "NO_PLATE");
  const images = Array.isArray(params.images) ? params.images : [];

  const targetFolder = getEvidenceTargetFolder_({
    outboundId: outboundId,
    autoId: autoId,
    plateNo: plateNo
  });

  const fileIds = [];

  images.forEach(function (img, index) {
    const fileIndex = index + 1;
    const blob = imagePayloadToBlob_(img, {
      outboundId: outboundId,
      autoId: autoId,
      plateNo: plateNo,
      fileIndex: fileIndex
    });

    const file = targetFolder.createFile(blob);
    fileIds.push(file.getId());
  });

  return fileIds;
}


function imagePayloadToBlob_(img, meta) {
  if (!img || typeof img !== "object") {
    throw new Error("ข้อมูลรูปภาพไม่ถูกต้อง");
  }

  const mimeType = norm_(img.mimeType) || "image/jpeg";
  let data = String(img.data || "");

  if (!data) {
    throw new Error("พบรูปภาพที่ไม่มีข้อมูลภาพ");
  }

  if (data.indexOf(",") >= 0) {
    data = data.split(",").pop();
  }

  const bytes = Utilities.base64Decode(data);

  const ext = mimeType.indexOf("png") >= 0 ? "png" : "jpg";

  const safeOutbound = sanitizeFileName_(meta.outboundId || "OUT");
  const safeAutoId = sanitizeFileName_(meta.autoId || "AUTOID");
  const safePlate = sanitizeFileName_(meta.plateNo || "PLATE");
  const seq = String(meta.fileIndex || 1).padStart(2, "0");

  const filename = [
    "PALLET_OUT",
    safeOutbound,
    safeAutoId,
    safePlate,
    seq
  ].join("_") + "." + ext;

  return Utilities.newBlob(bytes, mimeType, filename);
}


function getEvidenceTargetFolder_(params) {
  const root = DriveApp.getFolderById(EVIDENCE_ROOT_FOLDER_ID);

  const yyyy = Utilities.formatDate(new Date(), TZ, "yyyy");
  const mm = Utilities.formatDate(new Date(), TZ, "MM");
  const ddmmyyyy = Utilities.formatDate(new Date(), TZ, "dd-MM-yyyy");

  const safeAutoId = sanitizeFileName_(params.autoId || "AUTOID");
  const safePlate = sanitizeFileName_(params.plateNo || "PLATE");
  const safeOutbound = sanitizeFileName_(params.outboundId || "OUT");

  const folderName = [safeOutbound, safeAutoId, safePlate].join("_");

  const yearFolder = getOrCreateSubFolder_(root, yyyy);
  const monthFolder = getOrCreateSubFolder_(yearFolder, mm);
  const dateFolder = getOrCreateSubFolder_(monthFolder, ddmmyyyy);
  const targetFolder = getOrCreateSubFolder_(dateFolder, folderName);

  return targetFolder;
}


function getOrCreateSubFolder_(parent, name) {
  const folders = parent.getFoldersByName(name);

  if (folders.hasNext()) {
    return folders.next();
  }

  return parent.createFolder(name);
}


/** =========================
 * INBOUND SUPPRESS
 * ========================= */

function getActiveSuppressedInboundMap_() {
  const ss = SpreadsheetApp.openById(OUT_SPREADSHEET_ID);
  const sheet = getOrCreateSheet_(ss, INBOUND_SUPPRESS_SHEET_NAME, INBOUND_SUPPRESS_HEADERS);
  const values = sheet.getDataRange().getValues();

  const map = {};

  if (values.length < 2) return map;

  const headerMap = getHeaderMap_(values[0]);
  const cAutoId = getRequiredCol_(headerMap, "Auto ID ขาเข้า");
  const cStatus = getRequiredCol_(headerMap, "สถานะการซ่อน");

  for (let r = 1; r < values.length; r++) {
    const autoId = norm_(values[r][cAutoId]);
    const status = norm_(values[r][cStatus]).toUpperCase();

    if (!autoId) continue;

    if (status === SUPPRESS_STATUS_HIDDEN) {
      map[autoId] = true;
    }

    if (status === SUPPRESS_STATUS_RESTORED) {
      delete map[autoId];
    }
  }

  return map;
}


function suppressInbound_(payload) {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(30000);

    const autoId = norm_(payload.autoId);
    const suppressedBy = norm_(payload.suppressedBy || payload.recordedBy);
    const reason = norm_(payload.reason);

    if (!autoId) {
      throw new Error("ไม่พบ Auto ID ที่ต้องการซ่อน");
    }

    if (!suppressedBy) {
      throw new Error("ไม่พบชื่อผู้ซ่อนรายการ กรุณาเข้าสู่ระบบใหม่");
    }

    if (!reason) {
      throw new Error("กรุณาระบุเหตุผลการซ่อนรายการ");
    }

    const inbound = findInboundRowByAutoId_(autoId);

    if (!inbound) {
      throw new Error("ไม่พบข้อมูลขาเข้าจาก Auto ID: " + autoId);
    }

    const ss = SpreadsheetApp.openById(OUT_SPREADSHEET_ID);
    const sheet = getOrCreateSheet_(ss, INBOUND_SUPPRESS_SHEET_NAME, INBOUND_SUPPRESS_HEADERS);
    ensureHeaders_(sheet, INBOUND_SUPPRESS_HEADERS);

    const timestamp = nowText_();

    const driverFullName = [
      inbound.prefix,
      inbound.firstName,
      inbound.lastName
    ].filter(Boolean).join(" ");

    const rowObj = {
      "Timestamp": timestamp,
      "Auto ID ขาเข้า": inbound.autoId,
      "ทะเบียนรถ": inbound.plateNo,
      "Timestamp ขาเข้า": inbound.timestampInText,
      "ยี่ห้อพาเลทขาเข้า": inbound.brandIn,
      "ชื่อ พขร.": driverFullName,
      "ต้นสังกัด พขร.": inbound.driverCompany,
      "เบอร์โทร": inbound.phone,
      "สถานะการซ่อน": SUPPRESS_STATUS_HIDDEN,
      "ซ่อนโดย": suppressedBy,
      "เหตุผลการซ่อน": reason,
      "คืนสถานะโดย": "",
      "คืนสถานะเมื่อ": "",
      "เหตุผลคืนสถานะ": ""
    };

    appendObjectRow_(sheet, INBOUND_SUPPRESS_HEADERS, rowObj);

    appendAuditLog_({
      action: "SUPPRESS_INBOUND",
      targetType: "INBOUND",
      outboundId: "",
      autoId: inbound.autoId,
      plateNo: inbound.plateNo,
      field: "สถานะการซ่อน",
      oldValue: "",
      newValue: SUPPRESS_STATUS_HIDDEN,
      actionBy: suppressedBy,
      note: reason
    });

    return {
      ok: true,
      message: "ซ่อนรายการจากฟอร์มขาออกสำเร็จ",
      autoId: inbound.autoId,
      plateNo: inbound.plateNo,
      driverFullName: driverFullName,
      suppressedAt: timestamp,
      suppressedBy: suppressedBy
    };

  } finally {
    try {
      lock.releaseLock();
    } catch (err) {
      // ignore
    }
  }
}


function restoreInbound_(payload) {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(30000);

    const autoId = norm_(payload.autoId);
    const restoredBy = norm_(payload.restoredBy || payload.recordedBy);
    const reason = norm_(payload.reason);

    if (!autoId) {
      throw new Error("ไม่พบ Auto ID ที่ต้องการคืนสถานะ");
    }

    if (!restoredBy) {
      throw new Error("ไม่พบชื่อผู้คืนสถานะ กรุณาเข้าสู่ระบบใหม่");
    }

    if (!reason) {
      throw new Error("กรุณาระบุเหตุผลการคืนสถานะ");
    }

    const ss = SpreadsheetApp.openById(OUT_SPREADSHEET_ID);
    const sheet = getOrCreateSheet_(ss, INBOUND_SUPPRESS_SHEET_NAME, INBOUND_SUPPRESS_HEADERS);
    ensureHeaders_(sheet, INBOUND_SUPPRESS_HEADERS);

    const values = sheet.getDataRange().getValues();

    if (values.length < 2) {
      throw new Error("ยังไม่มีรายการซ่อนให้คืนสถานะ");
    }

    const headerMap = getHeaderMap_(values[0]);
    const cAutoId = getRequiredCol_(headerMap, "Auto ID ขาเข้า");
    const cStatus = getRequiredCol_(headerMap, "สถานะการซ่อน");
    const cRestoreBy = getRequiredCol_(headerMap, "คืนสถานะโดย");
    const cRestoreAt = getRequiredCol_(headerMap, "คืนสถานะเมื่อ");
    const cRestoreReason = getRequiredCol_(headerMap, "เหตุผลคืนสถานะ");

    let targetRow = -1;

    for (let r = values.length - 1; r >= 1; r--) {
      const rowAutoId = norm_(values[r][cAutoId]);
      const status = norm_(values[r][cStatus]).toUpperCase();

      if (rowAutoId === autoId && status === SUPPRESS_STATUS_HIDDEN) {
        targetRow = r + 1;
        break;
      }
    }

    if (targetRow < 0) {
      throw new Error("ไม่พบรายการ HIDDEN ของ Auto ID นี้ หรือรายการถูกคืนสถานะแล้ว");
    }

    const timestamp = nowText_();

    sheet.getRange(targetRow, cStatus + 1).setValue(SUPPRESS_STATUS_RESTORED);
    sheet.getRange(targetRow, cRestoreBy + 1).setValue(restoredBy);
    sheet.getRange(targetRow, cRestoreAt + 1).setValue(timestamp);
    sheet.getRange(targetRow, cRestoreReason + 1).setValue(reason);

    appendAuditLog_({
      action: "RESTORE_INBOUND",
      targetType: "INBOUND",
      outboundId: "",
      autoId: autoId,
      plateNo: "",
      field: "สถานะการซ่อน",
      oldValue: SUPPRESS_STATUS_HIDDEN,
      newValue: SUPPRESS_STATUS_RESTORED,
      actionBy: restoredBy,
      note: reason
    });

    return {
      ok: true,
      message: "คืนสถานะรายการสำเร็จ",
      autoId: autoId,
      restoredAt: timestamp,
      restoredBy: restoredBy
    };

  } finally {
    try {
      lock.releaseLock();
    } catch (err) {
      // ignore
    }
  }
}


/** =========================
 * AUDIT LOG
 * ========================= */

function appendAuditLog_(data) {
  const ss = SpreadsheetApp.openById(OUT_SPREADSHEET_ID);
  const sheet = getOrCreateSheet_(ss, AUDIT_LOG_SHEET_NAME, AUDIT_LOG_HEADERS);
  ensureHeaders_(sheet, AUDIT_LOG_HEADERS);

  const rowObj = {
    "Timestamp": nowText_(),
    "Action": norm_(data.action),
    "Target Type": norm_(data.targetType),
    "Outbound ID": norm_(data.outboundId),
    "Auto ID ขาเข้า": norm_(data.autoId),
    "ทะเบียนรถ": norm_(data.plateNo),
    "Field": norm_(data.field),
    "Old Value": norm_(data.oldValue),
    "New Value": norm_(data.newValue),
    "Action By": norm_(data.actionBy),
    "Note": norm_(data.note)
  };

  appendObjectRow_(sheet, AUDIT_LOG_HEADERS, rowObj);
}


/** =========================
 * SHEET HELPERS
 * ========================= */

function getOrCreateSheet_(ss, sheetName, headers) {
  let sheet = ss.getSheetByName(sheetName);

  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
  }

  ensureHeaders_(sheet, headers);

  return sheet;
}


function ensureHeaders_(sheet, expectedHeaders) {
  const lastCol = Math.max(sheet.getLastColumn(), expectedHeaders.length);

  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, expectedHeaders.length).setValues([expectedHeaders]);
    sheet.setFrozenRows(1);
    return;
  }

  const currentHeaders = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
  const currentMap = getHeaderMap_(currentHeaders);

  let changed = false;
  const newHeaders = currentHeaders.slice();

  expectedHeaders.forEach(function (h) {
    if (currentMap[normKey_(h)] === undefined) {
      newHeaders.push(h);
      changed = true;
    }
  });

  if (changed) {
    sheet.getRange(1, 1, 1, newHeaders.length).setValues([newHeaders]);
  }

  sheet.setFrozenRows(1);
}


function getHeaderMap_(headers) {
  const map = {};

  headers.forEach(function (h, i) {
    const key = normKey_(h);
    if (key) map[key] = i;
  });

  return map;
}


function getRequiredCol_(headerMap, headerName) {
  const key = normKey_(headerName);

  if (headerMap[key] === undefined) {
    throw new Error("ไม่พบหัวคอลัมน์: " + headerName);
  }

  return headerMap[key];
}


function getOptionalCol_(headerMap, headerName) {
  const key = normKey_(headerName);

  if (headerMap[key] === undefined) {
    return -1;
  }

  return headerMap[key];
}


function rowToObject_(headers, row) {
  const obj = {};

  headers.forEach(function (header, index) {
    obj[norm_(header)] = row[index];
  });

  return obj;
}


function setCellByHeader_(sheet, rowNumber, headerMap, headerName, value) {
  const col = getRequiredCol_(headerMap, headerName) + 1;
  sheet.getRange(rowNumber, col).setValue(value);
}


function appendObjectRow_(sheet, headers, obj) {
  ensureHeaders_(sheet, headers);

  const actualHeaders = sheet
    .getRange(1, 1, 1, sheet.getLastColumn())
    .getValues()[0];

  const row = actualHeaders.map(function (h) {
    return obj[h] !== undefined ? obj[h] : "";
  });

  sheet.appendRow(row);
}


/** =========================
 * DATE / TIME
 * ========================= */

function nowText_() {
  return formatDateTime_(new Date());
}


function formatDateTime_(date) {
  return Utilities.formatDate(date, TZ, "dd/MM/yyyy HH:mm:ss");
}


function toDisplayDateTime_(value) {
  if (value instanceof Date && !isNaN(value.getTime())) {
    return formatDateTime_(value);
  }

  const text = norm_(value);
  if (!text) return "";

  const parsed = parseAnyDate_(text);
  if (parsed) {
    return formatDateTime_(parsed);
  }

  return text;
}


function formatAnyDateTime_(value) {
  if (!value) return "";

  if (Object.prototype.toString.call(value) === "[object Date]" && !isNaN(value.getTime())) {
    return Utilities.formatDate(value, TZ, "dd/MM/yyyy HH:mm:ss");
  }

  const d = parseAnyDate_(value);

  if (d && !isNaN(d.getTime())) {
    return Utilities.formatDate(d, TZ, "dd/MM/yyyy HH:mm:ss");
  }

  return norm_(value);
}


function normalizeDateOnlyText_(value) {
  const text = norm_(value);

  if (!text) return "";

  let m = text.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);

  if (m) {
    return [
      String(Number(m[1])).padStart(2, "0"),
      String(Number(m[2])).padStart(2, "0"),
      String(Number(m[3]))
    ].join("/");
  }

  m = text.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);

  if (m) {
    return [
      String(Number(m[3])).padStart(2, "0"),
      String(Number(m[2])).padStart(2, "0"),
      String(Number(m[1]))
    ].join("/");
  }

  const d = parseAnyDate_(text);

  if (d && !isNaN(d.getTime())) {
    return Utilities.formatDate(d, TZ, "dd/MM/yyyy");
  }

  return "";
}


function parseAnyDate_(value) {
  if (value instanceof Date && !isNaN(value.getTime())) {
    return value;
  }

  const text = norm_(value);
  if (!text) return null;

  let m = text.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?$/);

  if (m) {
    const dd = Number(m[1]);
    const MM = Number(m[2]) - 1;
    const yyyy = Number(m[3]);
    const hh = Number(m[4] || 0);
    const mi = Number(m[5] || 0);
    const ss = Number(m[6] || 0);
    return new Date(yyyy, MM, dd, hh, mi, ss);
  }

  m = text.match(/^(\d{4})-(\d{1,2})-(\d{1,2})(?:[T\s](\d{1,2}):(\d{2})(?::(\d{2}))?)?/);

  if (m) {
    const yyyy = Number(m[1]);
    const MM = Number(m[2]) - 1;
    const dd = Number(m[3]);
    const hh = Number(m[4] || 0);
    const mi = Number(m[5] || 0);
    const ss = Number(m[6] || 0);
    return new Date(yyyy, MM, dd, hh, mi, ss);
  }

  const d = new Date(text);

  if (!isNaN(d.getTime())) {
    return d;
  }

  return null;
}


function calculateDurationText_(startDate, endDate) {
  if (!(startDate instanceof Date) || isNaN(startDate.getTime())) {
    return "";
  }

  if (!(endDate instanceof Date) || isNaN(endDate.getTime())) {
    return "";
  }

  const diff = Math.max(0, endDate.getTime() - startDate.getTime());
  const totalSeconds = Math.floor(diff / 1000);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [
    String(hours).padStart(2, "0"),
    String(minutes).padStart(2, "0"),
    String(seconds).padStart(2, "0")
  ].join(":");
}


/** =========================
 * RESPONSE HELPERS
 * ========================= */

function parsePostPayload_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    return {};
  }

  const raw = e.postData.contents;

  try {
    return JSON.parse(raw);
  } catch (err) {
    const params = {};

    raw.split("&").forEach(function (part) {
      const pair = part.split("=");

      if (pair.length >= 2) {
        const key = decodeURIComponent(pair[0] || "");
        const val = decodeURIComponent(pair.slice(1).join("=") || "");
        params[key] = val;
      }
    });

    return params;
  }
}


function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}


function jsonError_(err) {
  return json_({
    ok: false,
    message: err && err.message ? err.message : String(err),
    stack: err && err.stack ? String(err.stack) : ""
  });
}


/** =========================
 * TEXT HELPERS
 * ========================= */

function norm_(value) {
  if (value === null || value === undefined) return "";
  return String(value).trim();
}


function normKey_(value) {
  return norm_(value)
    .replace(/\s+/g, " ")
    .toLowerCase();
}


function sanitizeFileName_(value) {
  return norm_(value)
    .replace(/[\\\/:*?"<>|#%{}~&]/g, "_")
    .replace(/\s+/g, "_")
    .replace(/_+/g, "_")
    .substring(0, 80) || "NA";
}
หลังวาง Code.gs นี้แล้วให้ทำตามนี้:

กด Save

ไปที่ Deploy > Manage deployments

กด Edit

เลือก New version

กด Deploy

รอบถัดไปค่อยแก้ worker.js ให้เพิ่ม route:

GET  /api/outbound-by-date?date=dd/MM/yyyy
POST /api/delete-outbound
POST /api/update-outbound

ต่อรอบถัดไปในส่วนของWork.jsมาให้ครบเลยครับ

คิดเป็นเวลา 7s
ได้ครับ ด้านล่างคือ worker.js ฉบับปรับปรุงครบถ้วนทั้งไฟล์ รองรับ endpoint เดิมทั้งหมด และเพิ่มส่วนใหม่สำหรับระบบแก้ไข/ลบย้อนหลัง:

GET  /api/outbound-by-date?date=dd/MM/yyyy
POST /api/delete-outbound
POST /api/update-outbound
ให้วางแทน worker.js เดิมทั้งไฟล์ได้เลย

/**
 * Pallet OUT System - Cloudflare Worker
 *
 * ใช้เป็น Proxy ระหว่าง GitHub Frontend กับ Google Apps Script
 *
 * Frontend → Cloudflare Worker → Google Apps Script
 *
 * Endpoints:
 * GET  /api
 * GET  /api/health
 * POST /api/login
 * GET  /api/options
 * GET  /api/inbound-open
 * GET  /api/outbound-by-date?date=dd/MM/yyyy
 * POST /api/submit-out
 * POST /api/suppress-inbound
 * POST /api/restore-inbound
 * POST /api/delete-outbound
 * POST /api/update-outbound
 */


/** =========================
 * CONFIG
 * ========================= */

// URL Web App จาก Apps Script Deploy
// หลังแก้ Code.gs ทุกครั้ง ต้อง Deploy เป็น New version แล้วใช้ URL เดิมนี้ได้
const GAS_URL = "https://script.google.com/macros/s/AKfycbx6-KNVh_qg3vm8nxh4K9AbIx7XNms_UcxlSbe8COCAfF53XtwIQgCZSLgMuoIo9B3Z/exec";

// ระหว่างทดสอบใช้ "*" ได้
// ถ้าต้องการล็อกเฉพาะ GitHub Pages ภายหลัง ค่อยเปลี่ยนเป็น:
// const ALLOWED_ORIGIN = "https://smartdcs2026.github.io";
const ALLOWED_ORIGIN = "*";

// timeout สำหรับงานที่มีรูปภาพ / Apps Script ใช้เวลานาน
const REQUEST_TIMEOUT_MS = 240000;


/** =========================
 * MAIN WORKER
 * ========================= */

export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);
      const pathname = normalizePath(url.pathname);
      const method = request.method.toUpperCase();

      if (method === "OPTIONS") {
        return handleOptions();
      }

      if (pathname === "/" || pathname === "/api") {
        return jsonResponse({
          ok: true,
          service: "pallet-out-worker",
          message: "Pallet OUT Worker is running.",
          gasUrlReady: Boolean(GAS_URL),
          timestamp: new Date().toISOString(),
          endpoints: [
            "GET /api/health",
            "POST /api/login",
            "GET /api/options",
            "GET /api/inbound-open",
            "GET /api/outbound-by-date?date=dd/MM/yyyy",
            "POST /api/submit-out",
            "POST /api/suppress-inbound",
            "POST /api/restore-inbound",
            "POST /api/delete-outbound",
            "POST /api/update-outbound"
          ]
        });
      }

      /** =========================
       * GET ROUTES
       * ========================= */

      if (pathname === "/api/health" && method === "GET") {
        return proxyGetToGas("health");
      }

      if (pathname === "/api/options" && method === "GET") {
        return proxyGetToGas("options");
      }

      if (pathname === "/api/inbound-open" && method === "GET") {
        return proxyGetToGas("inboundOpen");
      }

      if (pathname === "/api/outbound-by-date" && method === "GET") {
        const date = String(url.searchParams.get("date") || "").trim();

        if (!date) {
          return jsonResponse(
            {
              ok: false,
              message: "กรุณาระบุ date เช่น /api/outbound-by-date?date=12/05/2026"
            },
            400
          );
        }

        return proxyGetToGas("outboundByDate", {
          date
        });
      }


      /** =========================
       * POST ROUTES
       * ========================= */

      if (pathname === "/api/login" && method === "POST") {
        const body = await readJsonBody(request);

        return proxyPostToGas({
          ...body,
          action: "login"
        });
      }

      if (pathname === "/api/submit-out" && method === "POST") {
        const body = await readJsonBody(request);

        return proxyPostToGas({
          ...body,
          action: "submitOut"
        });
      }

      if (pathname === "/api/suppress-inbound" && method === "POST") {
        const body = await readJsonBody(request);

        return proxyPostToGas({
          ...body,
          action: "suppressInbound"
        });
      }

      if (pathname === "/api/restore-inbound" && method === "POST") {
        const body = await readJsonBody(request);

        return proxyPostToGas({
          ...body,
          action: "restoreInbound"
        });
      }

      if (pathname === "/api/delete-outbound" && method === "POST") {
        const body = await readJsonBody(request);

        return proxyPostToGas({
          ...body,
          action: "deleteOutbound"
        });
      }

      if (pathname === "/api/update-outbound" && method === "POST") {
        const body = await readJsonBody(request);

        return proxyPostToGas({
          ...body,
          action: "updateOutbound"
        });
      }


      /** =========================
       * NOT FOUND
       * ========================= */

      return jsonResponse(
        {
          ok: false,
          message: "ไม่พบ endpoint ที่เรียกใช้งาน",
          path: pathname,
          method
        },
        404
      );

    } catch (err) {
      return jsonResponse(
        {
          ok: false,
          message: err && err.message ? err.message : String(err)
        },
        500
      );
    }
  }
};


/** =========================
 * PROXY FUNCTIONS
 * ========================= */

async function proxyGetToGas(action, params = {}) {
  assertGasUrlReady();

  const targetUrl = new URL(GAS_URL);
  targetUrl.searchParams.set("action", action);

  Object.keys(params || {}).forEach((key) => {
    const value = params[key];

    if (value !== undefined && value !== null && String(value).trim() !== "") {
      targetUrl.searchParams.set(key, String(value));
    }
  });

  const res = await fetchWithTimeout(targetUrl.toString(), {
    method: "GET",
    redirect: "follow",
    headers: {
      "Accept": "application/json"
    }
  });

  return normalizeGasResponse(res);
}


async function proxyPostToGas(payload) {
  assertGasUrlReady();

  const res = await fetchWithTimeout(GAS_URL, {
    method: "POST",
    redirect: "follow",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(payload || {})
  });

  return normalizeGasResponse(res);
}


async function normalizeGasResponse(res) {
  const text = await res.text();

  let data;

  try {
    data = JSON.parse(text);
  } catch (err) {
    return jsonResponse(
      {
        ok: false,
        message: "Apps Script ไม่ได้คืนค่าเป็น JSON",
        status: res.status,
        raw: text.slice(0, 1000)
      },
      502
    );
  }

  return jsonResponse(data, res.ok ? 200 : res.status);
}


async function fetchWithTimeout(url, options) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal
    });
  } catch (err) {
    if (err && err.name === "AbortError") {
      throw new Error("เชื่อมต่อ Apps Script เกินเวลาที่กำหนด");
    }

    throw err;
  } finally {
    clearTimeout(timer);
  }
}


/** =========================
 * REQUEST HELPERS
 * ========================= */

async function readJsonBody(request) {
  const text = await request.text();

  if (!text) return {};

  try {
    return JSON.parse(text);
  } catch (err) {
    throw new Error("รูปแบบ JSON ที่ส่งมาไม่ถูกต้อง");
  }
}


function normalizePath(pathname) {
  const path = String(pathname || "/").trim();

  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }

  return path || "/";
}


function assertGasUrlReady() {
  if (!GAS_URL || GAS_URL.includes("YOUR") || !GAS_URL.startsWith("https://script.google.com/")) {
    throw new Error("ยังไม่ได้ตั้งค่า GAS_URL ให้เป็น URL Web App ของ Apps Script");
  }
}


/** =========================
 * RESPONSE HELPERS
 * ========================= */

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: jsonHeaders()
  });
}


function handleOptions() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders()
  });
}


function jsonHeaders() {
  return {
    ...corsHeaders(),
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  };
}


function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
    "Access-Control-Max-Age": "86400"
  };
}
หลังวาง worker.js แล้วให้กด Save and Deploy ใน Cloudflare Worker

ทดสอบเร็ว ๆ ตามนี้:

https://pallet.somchaibutphon.workers.dev/api
ควรเห็น endpoint ใหม่:

GET /api/outbound-by-date?date=dd/MM/yyyy
POST /api/delete-outbound
POST /api/update-outbound
ทดสอบค้นหารายการขาออกย้อนหลัง:

https://pallet.somchaibutphon.workers.dev/api/outbound-by-date?date=12/05/2026
ถ้า Apps Script deploy เป็น New version แล้ว จะได้ JSON ประมาณนี้:

{
  "ok": true,
  "date": "12/05/2026",
  "rows": []
}
รอบถัดไปต้องแก้ app.js ให้ปุ่ม แก้ไขข้อมูล เปิดหน้าค้นหาวันที่ แล้วดึงข้อมูลจาก /api/outbound-by-date มาแสดงเป็นรายการให้เลือกแก้ไข/ลบจริงครับ.



ข้อความที่วาง (1)(264).txt
เอกสาร
ต่อรอบถัดไปมาเลยครับ 

คิดเป็นเวลา 28s
ได้ครับ รอบนี้แก้ app.js ต่อจากไฟล์ล่าสุด เพื่อให้ปุ่ม แก้ไขข้อมูล ใช้งานจริง โดยไฟล์ปัจจุบันยังเป็นเพียง placeholder ที่แจ้งว่า API พร้อมแล้วแต่ยังไม่เปิดหน้าค้นหา/แก้ไขจริง 


ให้แก้ 2 จุดหลักใน app.js

1. แก้ event ปุ่ม แก้ไขข้อมูล
ในฟังก์ชัน initDialogEvents(row) ให้หาโค้ดนี้:

if (editOutboundBtn) {
  editOutboundBtn.addEventListener("click", () => {
    handleEditOutboundPlaceholder();
  });
}
เปลี่ยนเป็น:

if (editOutboundBtn) {
  editOutboundBtn.addEventListener("click", async () => {
    await handleEditOutboundSearch();
  });
}
2. แทนที่ฟังก์ชัน handleEditOutboundPlaceholder()
ให้หาโค้ดเดิมนี้:

function handleEditOutboundPlaceholder() {
  showDialogNotice(
    "เมนูแก้ไขข้อมูลพร้อมแล้ว แต่ยังต้องเพิ่ม API ค้นหารายการขาออกย้อนหลังใน Code.gs/Worker ก่อนใช้งานจริง",
    "info"
  );
}
แล้วลบออก จากนั้นวางโค้ดชุดนี้แทน

async function handleEditOutboundSearch() {
  stopInlineCamera();

  const todayIso = toDateInputValue(new Date());

  const result = await Swal.fire({
    title: "ค้นหารายการขาออกย้อนหลัง",
    html: `
      <div class="editSearchBox">
        <div class="fieldGroup">
          <label for="outboundSearchDate">เลือกวันที่บันทึกขาออก</label>
          <input
            id="outboundSearchDate"
            class="dialogInput"
            type="date"
            value="${escapeAttr(todayIso)}"
          >
        </div>

        <div class="confirmNote">
          ระบบจะค้นหารายการพาเลทขาออกที่บันทึกไว้แล้วในวันที่เลือก เพื่อนำมาแก้ไขหรือลบแบบ Soft Delete
        </div>
      </div>
    `,
    width: 560,
    showCancelButton: true,
    confirmButtonText: "ค้นหารายการ",
    cancelButtonText: "ยกเลิก",
    reverseButtons: true,
    focusConfirm: false,
    preConfirm: () => {
      const input = $("outboundSearchDate");
      const isoDate = String(input ? input.value || "" : "").trim();

      if (!isoDate) {
        Swal.showValidationMessage("กรุณาเลือกวันที่");
        return false;
      }

      const displayDate = isoDateToDisplayDate(isoDate);

      if (!displayDate) {
        Swal.showValidationMessage("รูปแบบวันที่ไม่ถูกต้อง");
        return false;
      }

      return displayDate;
    }
  });

  if (!result.isConfirmed || !result.value) return;

  await openOutboundHistoryDialog(result.value);
}


async function openOutboundHistoryDialog(dateText) {
  try {
    Swal.fire({
      title: "กำลังค้นหารายการ",
      html: "กรุณารอสักครู่ ระบบกำลังดึงข้อมูลขาออกย้อนหลัง",
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    const res = await apiGet(
      "/api/outbound-by-date?date=" + encodeURIComponent(dateText),
      60000
    );

    if (!res.ok) {
      throw new Error(res.message || "ค้นหารายการขาออกย้อนหลังไม่สำเร็จ");
    }

    const rows = Array.isArray(res.rows) ? res.rows : [];

    await Swal.fire({
      title: "รายการขาออกวันที่ " + escapeHtml(res.date || dateText),
      html: buildOutboundHistoryHtml(rows, res.date || dateText),
      width: 900,
      showConfirmButton: false,
      showCloseButton: true,
      didOpen: () => {
        initOutboundHistoryEvents(rows, res.date || dateText);
      }
    });

  } catch (err) {
    await showError(err);
  }
}


function buildOutboundHistoryHtml(rows, dateText) {
  if (!rows.length) {
    return `
      <div class="emptyEditResult">
        <div class="emptyIcon">✓</div>
        <h3>ไม่พบรายการขาออก</h3>
        <p>ไม่พบข้อมูลที่บันทึกขาออกในวันที่ ${escapeHtml(dateText)}</p>

        <button id="searchOutboundAgainBtn" type="button" class="secondaryBtn">
          เลือกวันที่ใหม่
        </button>
      </div>
    `;
  }

  const cards = rows.map((row) => {
    const updatedText = row.updatedBy || row.updatedAt
      ? `
        <div class="editAuditLine">
          แก้ไขล่าสุด: ${escapeHtml(row.updatedBy || "-")}
          ${row.updatedAt ? " / " + escapeHtml(row.updatedAt) : ""}
        </div>
      `
      : `
        <div class="editAuditLine muted">
          ยังไม่มีประวัติการแก้ไข
        </div>
      `;

    return `
      <article class="outboundHistoryCard" data-outbound-id="${escapeAttr(row.outboundId || "")}">
        <div class="outboundHistoryHead">
          <div>
            <div class="plateText">${escapeHtml(row.plateNo || "-")}</div>
            <div class="autoIdText">Outbound ID: ${escapeHtml(row.outboundId || "-")}</div>
            <div class="autoIdText">Auto ID: ${escapeHtml(row.autoId || "-")}</div>
          </div>

          <span class="brandBadge ${String(row.brandOut || "").toUpperCase() === "CHEP" ? "brandChep" : "brandLoscam"}">
            ${escapeHtml(row.brandOut || "-")}
          </span>
        </div>

        <div class="dialogInfoGrid outboundHistoryInfo">
          ${dialogInfo("เวลาออก", row.timestampOut)}
          ${dialogInfo("พขร.", row.driverFullName)}
          ${dialogInfo("จำนวน", row.qtyOut)}
          ${dialogInfo("ECD", row.ecdName)}
          ${dialogInfo("TCR", row.tcrNo)}
          ${dialogInfo("ผู้บันทึก", row.recordedBy)}
        </div>

        ${updatedText}

        <div class="outboundHistoryActions">
          <button
            type="button"
            class="secondaryBtn editOutboundRowBtn"
            data-action="edit"
            data-outbound-id="${escapeAttr(row.outboundId || "")}"
          >
            แก้ไข
          </button>

          <button
            type="button"
            class="secondaryBtn dangerSoftBtn deleteOutboundRowBtn"
            data-action="delete"
            data-outbound-id="${escapeAttr(row.outboundId || "")}"
          >
            ลบรายการนี้
          </button>
        </div>
      </article>
    `;
  }).join("");

  return `
    <div class="outboundHistoryWrap">
      <div class="outboundHistoryToolbar">
        <button id="searchOutboundAgainBtn" type="button" class="secondaryBtn">
          เลือกวันที่ใหม่
        </button>

        <span>พบ ${rows.length} รายการ</span>
      </div>

      <div id="outboundHistoryList" class="outboundHistoryList">
        ${cards}
      </div>
    </div>
  `;
}


function initOutboundHistoryEvents(rows, dateText) {
  const list = $("outboundHistoryList");
  const searchAgainBtn = $("searchOutboundAgainBtn");

  if (searchAgainBtn) {
    searchAgainBtn.addEventListener("click", async () => {
      await handleEditOutboundSearch();
    });
  }

  if (!list) return;

  const rowMap = {};
  rows.forEach((row) => {
    rowMap[String(row.outboundId || "").trim()] = row;
  });

  list.addEventListener("click", async (ev) => {
    const btn = ev.target.closest("button[data-action]");
    if (!btn) return;

    const action = String(btn.dataset.action || "");
    const outboundId = String(btn.dataset.outboundId || "").trim();
    const row = rowMap[outboundId];

    if (!row) {
      await Swal.fire({
        icon: "error",
        title: "ไม่พบข้อมูลรายการ",
        text: "ไม่พบ Outbound ID ที่เลือก",
        confirmButtonText: "ตกลง"
      });
      return;
    }

    if (action === "edit") {
      await openEditOutboundDialog(row, dateText);
      return;
    }

    if (action === "delete") {
      await confirmDeleteOutbound(row, dateText);
    }
  });
}


async function openEditOutboundDialog(row, dateText) {
  const brandOptions = buildBrandSelectOptions(row.brandOut);

  const result = await Swal.fire({
    title: "แก้ไขรายการขาออก",
    html: `
      <div class="editOutboundDialog">
        <section class="dialogSection">
          <h3>ข้อมูลอ้างอิง</h3>

          <div class="dialogInfoGrid">
            ${dialogInfo("Outbound ID", row.outboundId)}
            ${dialogInfo("Auto ID", row.autoId)}
            ${dialogInfo("ทะเบียนรถ", row.plateNo)}
            ${dialogInfo("พขร.", row.driverFullName)}
            ${dialogInfo("เวลาออก", row.timestampOut)}
            ${dialogInfo("Duration", row.duration)}
          </div>

          <div class="confirmNote">
            ข้อมูลเวลาออก, Duration, Auto ID, ทะเบียนรถ และข้อมูล พขร. จะไม่ถูกแก้ไข
          </div>
        </section>

        <section class="dialogSection">
          <h3>ข้อมูลที่แก้ไขได้</h3>

          <div class="docPairGrid">
            <div class="fieldGroup">
              <label for="editBrandOutInput">ยี่ห้อพาเลทขาออก <em>*</em></label>
              <select id="editBrandOutInput" class="dialogInput">
                ${brandOptions}
              </select>
            </div>

            <div class="fieldGroup">
              <label for="editQtyOutInput">จำนวนพาเลทขาออก <em>*</em></label>
              <input
                id="editQtyOutInput"
                class="dialogInput"
                type="number"
                inputmode="numeric"
                min="1"
                step="1"
                value="${escapeAttr(row.qtyOut || "")}"
              >
            </div>
          </div>

          <div class="docPairGrid">
            <div class="fieldGroup">
              <label for="editEcdInput">หมายเลขเอกสาร ECD <em>*</em></label>
              <input
                id="editEcdInput"
                class="dialogInput"
                type="text"
                inputmode="latin"
                maxlength="30"
                value="${escapeAttr(row.ecdName || "")}"
              >
            </div>

            <div class="fieldGroup">
              <label for="editTcrInput">หมายเลขเอกสาร TCR <em>*</em></label>
              <input
                id="editTcrInput"
                class="dialogInput"
                type="text"
                inputmode="latin"
                maxlength="30"
                value="${escapeAttr(row.tcrNo || "")}"
              >
            </div>
          </div>

          <div class="fieldGroup">
            <label for="editNoteInput">หมายเหตุ</label>
            <textarea
              id="editNoteInput"
              class="dialogTextarea"
              rows="3"
            >${escapeHtml(row.note || "")}</textarea>
          </div>

          <div class="helpText">
            รอบนี้แก้ไขเฉพาะข้อมูลตัวอักษร/จำนวนก่อน ส่วนรูปหลักฐานยังคงของเดิม
          </div>
        </section>
      </div>
    `,
    width: 820,
    showCancelButton: true,
    confirmButtonText: "บันทึกการแก้ไข",
    cancelButtonText: "ยกเลิก",
    reverseButtons: true,
    focusConfirm: false,
    didOpen: () => {
      initEditOutboundInputFilters();
    },
    preConfirm: () => {
      return collectEditOutboundPayload(row);
    }
  });

  if (!result.isConfirmed || !result.value) return;

  await submitUpdateOutbound(result.value, dateText);
}


function initEditOutboundInputFilters() {
  const ecd = $("editEcdInput");
  const tcr = $("editTcrInput");

  if (ecd) {
    ecd.addEventListener("input", () => {
      ecd.value = ecd.value.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
    });
  }

  if (tcr) {
    tcr.addEventListener("input", () => {
      tcr.value = tcr.value.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
    });
  }
}


function collectEditOutboundPayload(row) {
  const brandInput = $("editBrandOutInput");
  const qtyInput = $("editQtyOutInput");
  const ecdInput = $("editEcdInput");
  const tcrInput = $("editTcrInput");
  const noteInput = $("editNoteInput");

  const brandOut = String(brandInput ? brandInput.value || "" : "")
    .trim()
    .toUpperCase();

  const qtyOut = Number(qtyInput ? qtyInput.value || 0 : 0);

  const ecdName = String(ecdInput ? ecdInput.value || "" : "")
    .trim()
    .toUpperCase();

  const tcrNo = String(tcrInput ? tcrInput.value || "" : "")
    .trim()
    .toUpperCase();

  const note = String(noteInput ? noteInput.value || "" : "").trim();

  if (!brandOut) {
    Swal.showValidationMessage("กรุณาเลือกยี่ห้อพาเลทขาออก");
    return false;
  }

  if (!Number.isFinite(qtyOut) || qtyOut <= 0) {
    Swal.showValidationMessage("กรุณาระบุจำนวนพาเลทขาออกเป็นตัวเลขมากกว่า 0");
    return false;
  }

  if (!ecdName || !ECD_REGEX.test(ecdName)) {
    Swal.showValidationMessage("ECD ใช้ได้เฉพาะตัวอักษรภาษาอังกฤษและตัวเลขเท่านั้น");
    return false;
  }

  if (!tcrNo || !TCR_REGEX.test(tcrNo)) {
    Swal.showValidationMessage("TCR ใช้ได้เฉพาะตัวอักษรภาษาอังกฤษและตัวเลขเท่านั้น");
    return false;
  }

  return {
    outboundId: row.outboundId,
    brandOut,
    qtyOut: Math.floor(qtyOut),
    ecdName,
    tcrNo,
    note,
    updatedBy: state.currentUser,
    recordedBy: state.currentUser
  };
}


async function submitUpdateOutbound(payload, dateText) {
  try {
    Swal.fire({
      title: "กำลังบันทึกการแก้ไข",
      html: "กรุณารอสักครู่ ระบบกำลังบันทึกข้อมูลและสร้างประวัติการแก้ไข",
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    const res = await apiPost("/api/update-outbound", payload, 60000);

    if (!res.ok) {
      throw new Error(res.message || "แก้ไขรายการไม่สำเร็จ");
    }

    await Swal.fire({
      icon: "success",
      title: "แก้ไขสำเร็จ",
      html: `
        <div class="successSummary">
          <div><span>Outbound ID</span><strong>${escapeHtml(res.outboundId || payload.outboundId || "-")}</strong></div>
          <div><span>ทะเบียนรถ</span><strong>${escapeHtml(res.plateNo || "-")}</strong></div>
          <div><span>ผู้แก้ไข</span><strong>${escapeHtml(res.updatedBy || state.currentUser || "-")}</strong></div>
          <div><span>เวลาแก้ไข</span><strong>${escapeHtml(res.updatedAt || "-")}</strong></div>
        </div>
      `,
      confirmButtonText: "กลับไปดูรายการ"
    });

    await openOutboundHistoryDialog(dateText);

  } catch (err) {
    await showError(err);
  }
}


async function confirmDeleteOutbound(row, dateText) {
  const confirm = await Swal.fire({
    icon: "warning",
    title: "ลบรายการขาออกนี้?",
    html: `
      <div class="confirmBox">
        <div><span>Outbound ID</span><strong>${escapeHtml(row.outboundId || "-")}</strong></div>
        <div><span>ทะเบียนรถ</span><strong>${escapeHtml(row.plateNo || "-")}</strong></div>
        <div><span>พขร.</span><strong>${escapeHtml(row.driverFullName || "-")}</strong></div>
        <div><span>เวลาออก</span><strong>${escapeHtml(row.timestampOut || "-")}</strong></div>
      </div>

      <div class="confirmNote">
        ระบบจะลบแบบ Soft Delete เท่านั้น ข้อมูลจะยังอยู่ใน Sheet1 พร้อมประวัติ AuditLog และจะไม่แก้ไข Sheet5
      </div>
    `,
    input: "textarea",
    inputLabel: "เหตุผลการลบ",
    inputPlaceholder: "เช่น บันทึกผิดรายการ / จำนวนผิดมาก / ยกเลิกเอกสาร",
    inputAttributes: {
      maxlength: 250
    },
    showCancelButton: true,
    confirmButtonText: "ยืนยันลบ",
    cancelButtonText: "ยกเลิก",
    reverseButtons: true,
    inputValidator: (value) => {
      if (!String(value || "").trim()) {
        return "กรุณาระบุเหตุผลการลบ";
      }

      return null;
    }
  });

  if (!confirm.isConfirmed) return;

  const reason = String(confirm.value || "").trim();

  try {
    Swal.fire({
      title: "กำลังลบรายการ",
      html: "กรุณารอสักครู่ ระบบกำลังบันทึกสถานะลบและ AuditLog",
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    const res = await apiPost("/api/delete-outbound", {
      outboundId: row.outboundId,
      deletedBy: state.currentUser,
      recordedBy: state.currentUser,
      reason
    }, 60000);

    if (!res.ok) {
      throw new Error(res.message || "ลบรายการไม่สำเร็จ");
    }

    await Swal.fire({
      icon: "success",
      title: "ลบรายการสำเร็จ",
      html: `
        <div class="successSummary">
          <div><span>Outbound ID</span><strong>${escapeHtml(res.outboundId || row.outboundId || "-")}</strong></div>
          <div><span>ทะเบียนรถ</span><strong>${escapeHtml(res.plateNo || row.plateNo || "-")}</strong></div>
          <div><span>ผู้ลบ</span><strong>${escapeHtml(res.deletedBy || state.currentUser || "-")}</strong></div>
          <div><span>เวลาลบ</span><strong>${escapeHtml(res.deletedAt || "-")}</strong></div>
        </div>
      `,
      confirmButtonText: "กลับไปดูรายการ"
    });

    await openOutboundHistoryDialog(dateText);

  } catch (err) {
    await showError(err);
  }
}


function buildBrandSelectOptions(currentBrand) {
  const current = String(currentBrand || "").trim().toUpperCase();

  let brands = (state.options.brands || [])
    .map((b) => String(b.brand || "").trim().toUpperCase())
    .filter(Boolean);

  brands = Array.from(new Set(brands.concat(["LOSCAM", "CHEP"])));

  return brands.map((brand) => {
    const selected = brand === current ? "selected" : "";
    return `<option value="${escapeAttr(brand)}" ${selected}>${escapeHtml(brand)}</option>`;
  }).join("");
}


function isoDateToDisplayDate(isoDate) {
  const text = String(isoDate || "").trim();
  const m = text.match(/^(\d{4})-(\d{2})-(\d{2})$/);

  if (!m) return "";

  return `${m[3]}/${m[2]}/${m[1]}`;
}


function toDateInputValue(date) {
  const d = date instanceof Date && !isNaN(date.getTime())
    ? date
    : new Date();

  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");

  return `${yyyy}-${mm}-${dd}`;
}
จุดที่โค้ดชุดนี้ทำเพิ่ม
1. ปุ่ม “แก้ไขข้อมูล” จะเปิดหน้าค้นหาตามวันที่จริง
2. ดึงข้อมูลจาก /api/outbound-by-date?date=dd/MM/yyyy
3. แสดงรายการขาออกย้อนหลังเป็นการ์ด
4. กด “แก้ไข” ได้
5. กด “ลบรายการนี้” ได้
6. การแก้ไขส่งไป /api/update-outbound
7. การลบส่งไป /api/delete-outbound
8. หลังแก้ไข/ลบสำเร็จ จะกลับมาโหลดรายการวันเดิมใหม่
รอบนี้ให้แก้เฉพาะ app.js ตาม 2 จุดด้านบนก่อน แล้วเปลี่ยน version ใน index.html เป็น:

<link rel="stylesheet" href="./style.css?v=14">
<script src="./app.js?v=14" defer></script>
รอบถัดไปค่อยเพิ่ม CSS ให้หน้ารายการย้อนหลัง เช่น .outboundHistoryCard, .outboundHistoryActions, .dangerSoftBtn, .editSearchBox ให้แสดงผลสวยและประหยัดพื้นที่บนมือถือครับ.



ข้อความที่วาง (1)(265).txt
เอกสาร
ต่อรอบถัดไปเขียนCSSมาให้ครบเลยครับ  

คิดเป็นเวลา 10s
ได้ครับ ด้านล่างคือ style.css ฉบับเต็ม ปรับจากชุดล่าสุดของคุณ และเพิ่ม CSS สำหรับหน้าค้นหา/แก้ไขข้อมูลย้อนหลังทั้งหมด เช่น outboundHistoryCard, outboundHistoryActions, dangerSoftBtn, editSearchBox, emptyEditResult, editOutboundDialog ให้แสดงผลดีบนมือถือและไม่กินพื้นที่เกินจำเป็น 


ให้วางแทน style.css เดิมทั้งไฟล์ได้เลย

/* =====================================================
 * Pallet OUT System
 * File: style.css
 * Clean / Compact / Mobile Optimized
 * ===================================================== */

/* =========================
   ROOT / RESET
========================= */

:root {
  --bg: #f4f7f6;
  --surface: #ffffff;
  --surface-soft: #f8fafc;
  --text: #0f172a;
  --muted: #64748b;
  --border: #dbe3ea;

  --primary: #0f766e;
  --primary-dark: #115e59;
  --primary-soft: #ccfbf1;

  --danger: #dc2626;
  --danger-dark: #991b1b;
  --danger-soft: #fee2e2;

  --warning: #f59e0b;
  --warning-soft: #fef3c7;

  --success: #16a34a;
  --success-dark: #166534;
  --success-soft: #dcfce7;

  --info: #2563eb;
  --info-soft: #eff6ff;

  --chep: #005bbb;
  --loscam: #ef7d00;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;

  --shadow-sm: 0 2px 8px rgba(15, 23, 42, 0.07);
  --shadow-md: 0 8px 22px rgba(15, 23, 42, 0.11);

  --font-main: "Noto Sans Thai", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

* {
  box-sizing: border-box;
}

html {
  width: 100%;
  min-height: 100%;
  -webkit-text-size-adjust: 100%;
  scroll-behavior: smooth;
}

body {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  font-family: var(--font-main);
  color: var(--text);
  background:
    radial-gradient(circle at top left, rgba(15, 118, 110, 0.12), transparent 28rem),
    linear-gradient(180deg, #eef7f5 0%, var(--bg) 42%, #eef2f7 100%);
}

button,
input,
textarea,
select {
  font-family: inherit;
}

button {
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.65;
}

img {
  max-width: 100%;
  display: block;
}

.isHidden {
  display: none !important;
}

.appRoot {
  min-height: 100vh;
}

.noscriptBox {
  margin: 12px;
  padding: 12px 14px;
  border-radius: var(--radius-md);
  background: var(--danger-soft);
  color: #7f1d1d;
  font-weight: 800;
  border: 1px solid #fecaca;
}


/* =========================
   BUTTONS
========================= */

.primaryBtn,
.secondaryBtn,
.iconBtn {
  min-height: 40px;
  border-radius: 999px;
  border: 1px solid transparent;
  padding: 9px 14px;
  font-size: 0.92rem;
  font-weight: 800;
  line-height: 1.15;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease,
    background 0.15s ease,
    border-color 0.15s ease;
}

.primaryBtn {
  color: #ffffff;
  background: var(--primary);
  box-shadow: 0 6px 16px rgba(15, 118, 110, 0.2);
}

.primaryBtn:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
}

.secondaryBtn {
  color: var(--primary-dark);
  background: #ffffff;
  border-color: #99f6e4;
}

.secondaryBtn:hover {
  background: var(--primary-soft);
  border-color: #5eead4;
}

.iconBtn {
  min-height: 36px;
  color: var(--primary-dark);
  background: var(--primary-soft);
  border-color: #99f6e4;
  padding-inline: 11px;
}

.smallBtn {
  min-height: 34px;
  padding: 7px 11px;
  font-size: 0.82rem;
}

.dangerSoftBtn {
  color: var(--danger-dark) !important;
  background: var(--danger-soft) !important;
  border-color: #fecaca !important;
}

.dangerSoftBtn:hover {
  background: #fecaca !important;
  border-color: #fca5a5 !important;
}


/* =========================
   LOGIN
========================= */

.loginView {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 18px;
}

.loginCard {
  width: min(100%, 430px);
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(219, 227, 234, 0.9);
  border-radius: 22px;
  box-shadow: var(--shadow-md);
  padding: 20px;
}

.loginBrand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.brandMark,
.brandMiniMark {
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  color: #ffffff;
  background: linear-gradient(135deg, var(--primary), #14b8a6);
  box-shadow: 0 7px 16px rgba(15, 118, 110, 0.22);
  font-weight: 900;
}

.brandMark {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  font-size: 1.45rem;
}

.brandMiniMark {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  font-size: 1.06rem;
}

.loginBrand h1 {
  margin: 0;
  font-size: 1.22rem;
  line-height: 1.22;
  font-weight: 900;
  color: var(--text);
}

.loginBrand p {
  margin: 1px 0 0;
  color: var(--muted);
  font-size: 0.88rem;
  font-weight: 800;
  letter-spacing: 0.03em;
}

.loginInfoBox {
  display: grid;
  gap: 3px;
  padding: 12px;
  background: var(--surface-soft);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  margin-bottom: 14px;
}

.loginInfoBox strong {
  font-size: 0.98rem;
}

.loginInfoBox span {
  color: var(--muted);
  font-size: 0.88rem;
}

.loginForm {
  display: grid;
  gap: 9px;
}

.loginForm label {
  font-weight: 800;
  color: #334155;
}

.passwordWrap {
  display: flex;
  gap: 7px;
}

.passwordWrap input {
  flex: 1;
}

.loginForm input,
.searchBox input,
.dialogInput,
.dialogTextarea {
  width: 100%;
  min-height: 42px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  background: #ffffff;
  color: var(--text);
  padding: 9px 12px;
  font-size: 0.96rem;
  outline: none;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease,
    background 0.15s ease;
}

.loginForm input:focus,
.searchBox input:focus,
.dialogInput:focus,
.dialogTextarea:focus {
  border-color: #2dd4bf;
  box-shadow: 0 0 0 3px rgba(45, 212, 191, 0.16);
}

.loginFootnote {
  margin-top: 14px;
  color: var(--muted);
  font-size: 0.78rem;
  text-align: center;
}


/* =========================
   MAIN LAYOUT
========================= */

.mainView {
  min-height: 100vh;
  padding: 10px;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: min(1180px, 100%);
  margin: 0 auto 10px;
  padding: 10px;
  border: 1px solid rgba(219, 227, 234, 0.9);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(12px);
  box-shadow: var(--shadow-sm);
}

.topbarLeft,
.topbarRight {
  display: flex;
  align-items: center;
  gap: 8px;
}

.topbarLeft,
.topbarTitle {
  min-width: 0;
}

.topbarTitle h1 {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.1;
  font-weight: 900;
  white-space: nowrap;
}

.topbarTitle p {
  margin: 1px 0 0;
  color: var(--muted);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.03em;
}

.userBadge {
  display: grid;
  gap: 0;
  min-width: 104px;
  padding: 6px 10px;
  border-radius: 999px;
  background: var(--surface-soft);
  border: 1px solid var(--border);
}

.userBadge .userLabel {
  color: var(--muted);
  font-size: 0.68rem;
  font-weight: 700;
}

.userBadge strong {
  color: var(--text);
  font-size: 0.86rem;
  font-weight: 900;
  line-height: 1.12;
}


/* =========================
   TOOLBAR
========================= */

.toolbar {
  width: min(1180px, 100%);
  margin: 0 auto 10px;
  padding: 10px;
  border: 1px solid rgba(219, 227, 234, 0.9);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: var(--shadow-sm);
}

.toolbarMain {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  align-items: end;
}

.searchBox {
  display: grid;
  gap: 5px;
}

.searchBox label {
  color: #334155;
  font-size: 0.82rem;
  font-weight: 900;
}

.toolbarActions {
  display: flex;
  justify-content: flex-end;
}

.summaryPanel {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  margin-top: 10px;
}

.summaryItem {
  display: grid;
  gap: 2px;
  padding: 9px 10px;
  border-radius: var(--radius-md);
  background: var(--surface-soft);
  border: 1px solid var(--border);
}

.summaryItem span {
  color: var(--muted);
  font-size: 0.74rem;
  font-weight: 800;
}

.summaryItem strong {
  color: var(--text);
  font-size: 1.06rem;
  font-weight: 900;
}


/* =========================
   STATUS / EMPTY
========================= */

.statusBox,
.emptyState {
  width: min(1180px, 100%);
  margin: 0 auto 10px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.94);
  border-radius: 18px;
  box-shadow: var(--shadow-sm);
}

.statusBox {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  min-height: 58px;
  color: var(--muted);
  font-weight: 800;
}

.spinner {
  width: 20px;
  height: 20px;
  border-radius: 999px;
  border: 3px solid #ccfbf1;
  border-top-color: var(--primary);
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.emptyState {
  display: grid;
  place-items: center;
  gap: 7px;
  padding: 22px 14px;
  text-align: center;
}

.emptyIcon {
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  border-radius: 999px;
  background: var(--success-soft);
  color: var(--success);
  font-size: 1.5rem;
  font-weight: 900;
}

.emptyState h2 {
  margin: 0;
  font-size: 1.02rem;
}

.emptyState p {
  max-width: 620px;
  margin: 0;
  color: var(--muted);
  font-size: 0.86rem;
}


/* =========================
   INBOUND LIST / CARDS
========================= */

.contentWrap {
  width: min(1180px, 100%);
  margin: 0 auto;
}

.inboundList {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  padding-bottom: 22px;
}

.inboundCard {
  display: grid;
  gap: 9px;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(219, 227, 234, 0.95);
  border-radius: 18px;
  box-shadow: var(--shadow-sm);
  padding: 12px;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease,
    border-color 0.15s ease;
}

.inboundCard:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
  border-color: #99f6e4;
}

.cardHeader {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
}

.plateText {
  color: var(--text);
  font-size: 1.32rem;
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: 0.01em;
}

.autoIdText {
  margin-top: 2px;
  color: var(--muted);
  font-size: 0.78rem;
  font-weight: 800;
}

.brandBadge {
  flex: 0 0 auto;
  min-width: 68px;
  text-align: center;
  border-radius: 999px;
  padding: 5px 8px;
  color: #ffffff;
  font-size: 0.74rem;
  font-weight: 900;
  letter-spacing: 0.03em;
  line-height: 1.1;
}

.brandLoscam {
  background: var(--loscam);
}

.brandChep {
  background: var(--chep);
}

.cardBody {
  border-top: 1px dashed var(--border);
  border-bottom: 1px dashed var(--border);
  padding: 8px 0;
}

.infoGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px 10px;
}

.infoItem {
  min-width: 0;
  display: grid;
  gap: 1px;
}

.infoItem span {
  color: var(--muted);
  font-size: 0.72rem;
  font-weight: 800;
}

.infoItem strong {
  min-width: 0;
  color: var(--text);
  font-size: 0.86rem;
  font-weight: 900;
  line-height: 1.22;
  overflow-wrap: anywhere;
}

.cardActions {
  display: flex;
  justify-content: flex-end;
}

.cardActions .primaryBtn {
  width: 100%;
  min-height: 38px;
}


/* =========================
   SWEETALERT
========================= */

.swal2-container {
  padding: 8px !important;
}

.swal2-popup {
  font-family: var(--font-main) !important;
  border-radius: 20px !important;
  width: min(860px, calc(100vw - 16px)) !important;
  max-height: calc(100dvh - 16px) !important;
  overflow: hidden !important;
  padding: 14px !important;
}

.swal2-title {
  font-size: 1.15rem !important;
  font-weight: 900 !important;
  color: var(--text) !important;
  padding: 0 6px !important;
}

.swal2-html-container {
  margin: 0.6em 0 0 !important;
  color: var(--text) !important;
  max-height: calc(100dvh - 138px) !important;
  overflow-y: auto !important;
  overflow-x: hidden !important;
  padding: 0 3px 4px !important;
}

.swal2-actions {
  gap: 8px !important;
  margin-top: 10px !important;
}

.swal2-confirm,
.swal2-cancel {
  border-radius: 999px !important;
  padding: 9px 16px !important;
  font-weight: 900 !important;
}

.swal2-confirm {
  background: var(--primary) !important;
}

.swal2-cancel {
  background: #e2e8f0 !important;
  color: #334155 !important;
}

.swal2-validation-message {
  border-radius: var(--radius-md) !important;
  background: var(--danger-soft) !important;
  color: #7f1d1d !important;
  font-weight: 800 !important;
}


/* =========================
   RECORD OUT DIALOG
========================= */

.outDialog,
.editOutboundDialog {
  display: grid;
  gap: 10px;
  text-align: left;
}

.dialogSection {
  display: grid;
  gap: 10px;
  padding: 12px;
  border-radius: 16px;
  border: 1px solid var(--border);
  background: var(--surface-soft);
}

.dialogSectionHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.dialogSection h3 {
  margin: 0;
  color: var(--primary-dark);
  font-size: 0.96rem;
  font-weight: 900;
}

.dialogInfoGrid,
.docPairGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
}

.dialogInfoItem {
  display: grid;
  gap: 1px;
  min-width: 0;
  padding: 8px 9px;
  border-radius: var(--radius-sm);
  background: #ffffff;
  border: 1px solid #e2e8f0;
}

.dialogInfoItem span {
  color: var(--muted);
  font-size: 0.7rem;
  font-weight: 800;
}

.dialogInfoItem strong {
  color: var(--text);
  font-size: 0.84rem;
  font-weight: 900;
  line-height: 1.2;
  overflow-wrap: anywhere;
}

.fieldGroup {
  display: grid;
  gap: 7px;
}

.fieldGroup label {
  color: #334155;
  font-size: 0.86rem;
  font-weight: 900;
}

.fieldGroup label em {
  color: var(--danger);
  font-style: normal;
}

.helpText {
  color: var(--muted);
  font-size: 0.73rem;
  line-height: 1.28;
}

.dialogTextarea {
  min-height: 72px;
  resize: vertical;
}


/* =========================
   DIALOG NOTICE / CONFIRM
========================= */

.dialogNotice {
  padding: 8px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 800;
  line-height: 1.32;
  border: 1px solid transparent;
}

.dialogNotice-info {
  background: var(--info-soft);
  color: var(--info);
  border-color: #bfdbfe;
}

.dialogNotice-success {
  background: var(--success-soft);
  color: var(--success-dark);
  border-color: #bbf7d0;
}

.dialogNotice-warning {
  background: var(--warning-soft);
  color: #92400e;
  border-color: #fde68a;
}

.dialogNotice-error {
  background: var(--danger-soft);
  color: #7f1d1d;
  border-color: #fecaca;
}

.confirmBox,
.successSummary {
  display: grid;
  gap: 7px;
  max-width: 460px;
  margin: 0 auto;
  text-align: left;
}

.confirmBox div,
.successSummary div {
  display: grid;
  grid-template-columns: 108px 1fr;
  gap: 7px;
  padding: 8px 9px;
  border-radius: var(--radius-sm);
  background: var(--surface-soft);
  border: 1px solid var(--border);
}

.confirmBox span,
.successSummary span {
  color: var(--muted);
  font-weight: 800;
  font-size: 0.78rem;
}

.confirmBox strong,
.successSummary strong {
  color: var(--text);
  font-weight: 900;
  font-size: 0.84rem;
  overflow-wrap: anywhere;
}

.confirmNote {
  margin-top: 10px;
  padding: 9px 10px;
  border-radius: 12px;
  background: var(--warning-soft);
  border: 1px solid #fde68a;
  color: #92400e;
  font-size: 0.82rem;
  font-weight: 800;
  line-height: 1.35;
  text-align: left;
}


/* =========================
   MANAGE MENU
========================= */

.manageWrap {
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex: 0 0 auto;
}

.manageDataBtn {
  min-height: 30px;
  padding: 5px 10px;
  border-radius: 999px;
  border: 1px solid #86efac;
  background: var(--success);
  color: #ffffff;
  font-size: 0.74rem;
  font-weight: 900;
  line-height: 1;
  box-shadow: 0 4px 10px rgba(22, 163, 74, 0.18);
}

.manageDataBtn:hover {
  background: var(--success-dark);
}

.manageMenu {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  z-index: 20;
  display: grid;
  gap: 6px;
  min-width: 138px;
  padding: 7px;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-md);
}

.manageMenuBtn {
  width: 100%;
  min-height: 32px;
  padding: 7px 10px;
  border-radius: 10px;
  border: 1px solid transparent;
  font-size: 0.78rem;
  font-weight: 900;
  text-align: left;
}

.manageMenuBtn.danger {
  background: var(--danger-soft);
  color: var(--danger-dark);
  border-color: #fecaca;
}

.manageMenuBtn.danger:hover {
  background: #fecaca;
}

.manageMenuBtn.edit {
  background: var(--success-soft);
  color: var(--success-dark);
  border-color: #bbf7d0;
}

.manageMenuBtn.edit:hover {
  background: #bbf7d0;
}


/* =========================
   BRAND SELECT
========================= */

.brandSelectGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  width: 100%;
}

.brandOption {
  position: relative;
  display: grid;
  grid-template-rows: auto auto;
  align-items: center;
  justify-items: center;
  gap: 6px;
  min-height: 126px;
  height: auto;
  padding: 7px;
  border: 2px solid var(--border);
  border-radius: 14px;
  background: #ffffff;
  color: var(--text);
  overflow: visible;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease,
    transform 0.15s ease,
    background 0.15s ease;
}

.brandOption:hover {
  border-color: #5eead4;
  transform: translateY(-1px);
}

.brandOption.isSelected {
  border-color: var(--primary);
  background: #f0fdfa;
  box-shadow: 0 0 0 3px rgba(45, 212, 191, 0.16);
}

.brandOption.isSelected::after {
  content: "เลือกแล้ว";
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 5;
  padding: 2px 6px;
  border-radius: 999px;
  background: var(--primary);
  color: #ffffff;
  font-size: 0.58rem;
  font-weight: 900;
}

.brandImageBox {
  width: 100%;
  height: 88px;
  display: block;
  position: relative;
  background-color: #ffffff;
  background-image: var(--brand-img);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  border: 1px solid #dbe3ea;
  border-radius: 11px;
  overflow: hidden;
}

.brandImageBox .brandFallbackImg {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center center;
  opacity: 0;
  pointer-events: none;
}

.brandImageBox span {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  color: var(--muted);
  font-weight: 900;
}

.brandOption strong {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 0.78rem;
  line-height: 1;
  font-weight: 900;
  margin: 0;
}

.optionMissing {
  grid-column: 1 / -1;
  padding: 10px;
  border-radius: var(--radius-md);
  background: var(--warning-soft);
  color: #92400e;
  font-weight: 800;
  text-align: center;
}


/* =========================
   QTY SELECT
========================= */

.qtySelectGrid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 7px;
}

.qtyChip {
  min-width: 0;
  min-height: 38px;
  padding: 7px 8px;
  border-radius: 999px;
  border: 2px solid var(--border);
  background: #ffffff;
  color: var(--text);
  font-size: 0.86rem;
  font-weight: 900;
  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    box-shadow 0.15s ease,
    transform 0.15s ease;
}

.qtyChip:hover {
  border-color: #5eead4;
  transform: translateY(-1px);
}

.qtyChip.isSelected {
  border-color: var(--primary);
  background: #f0fdfa;
  color: var(--primary-dark);
  box-shadow: 0 0 0 3px rgba(45, 212, 191, 0.16);
}


/* =========================
   EVIDENCE / IMAGE INPUT
========================= */

.hiddenFileInput {
  position: fixed;
  left: -9999px;
  top: -9999px;
  width: 1px;
  height: 1px;
  opacity: 0;
}

.evidenceControl {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
  align-items: center;
}

.evidenceControl .secondaryBtn {
  width: 100%;
  min-height: 40px;
}

.evidenceCount {
  grid-column: 1 / -1;
  display: block;
  padding: 7px 9px;
  border-radius: 11px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  color: var(--muted);
  text-align: center;
  font-size: 0.8rem;
  font-weight: 800;
}

.evidencePreviewGrid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 7px;
}

.evidenceThumb {
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: #e2e8f0;
}

.evidenceThumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.removeEvidenceBtn {
  position: absolute;
  top: 4px;
  right: 4px;
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  border-radius: 999px;
  border: 0;
  background: rgba(220, 38, 38, 0.94);
  color: #ffffff;
  font-size: 1.05rem;
  font-weight: 900;
  line-height: 1;
}


/* =========================
   INLINE CAMERA
========================= */

.inlineCameraPanel {
  display: grid;
  gap: 8px;
  padding: 8px;
  border-radius: 16px;
  border: 1px solid #99f6e4;
  background: #f0fdfa;
}

.inlineCameraVideo {
  display: block;
  width: 100%;
  height: clamp(190px, 38dvh, 430px);
  max-height: 430px;
  border-radius: 14px;
  background: #020617;
  object-fit: contain;
  border: 1px solid #dbe3ea;
}

.inlineCameraCanvas {
  display: none;
}

.inlineCameraActions {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
}

.inlineCameraActions button {
  width: 100%;
}


/* =========================
   OUTBOUND HISTORY / EDIT
========================= */

.editSearchBox {
  display: grid;
  gap: 12px;
  text-align: left;
}

.emptyEditResult {
  display: grid;
  place-items: center;
  gap: 9px;
  padding: 18px 10px;
  text-align: center;
}

.emptyEditResult h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 900;
  color: var(--text);
}

.emptyEditResult p {
  margin: 0;
  color: var(--muted);
  font-size: 0.86rem;
  font-weight: 700;
}

.outboundHistoryWrap {
  display: grid;
  gap: 10px;
  text-align: left;
}

.outboundHistoryToolbar {
  position: sticky;
  top: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px;
  border-radius: 14px;
  background: rgba(248, 250, 252, 0.96);
  border: 1px solid var(--border);
}

.outboundHistoryToolbar span {
  color: var(--muted);
  font-size: 0.82rem;
  font-weight: 900;
  white-space: nowrap;
}

.outboundHistoryList {
  display: grid;
  gap: 9px;
}

.outboundHistoryCard {
  display: grid;
  gap: 9px;
  padding: 10px;
  border-radius: 16px;
  background: #ffffff;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
}

.outboundHistoryHead {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
}

.outboundHistoryInfo {
  padding-top: 8px;
  border-top: 1px dashed var(--border);
}

.editAuditLine {
  padding: 7px 9px;
  border-radius: 10px;
  background: var(--info-soft);
  border: 1px solid #bfdbfe;
  color: #1d4ed8;
  font-size: 0.76rem;
  font-weight: 800;
  line-height: 1.25;
}

.editAuditLine.muted {
  background: #f8fafc;
  border-color: #e2e8f0;
  color: var(--muted);
}

.outboundHistoryActions {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
}

.outboundHistoryActions button {
  width: 100%;
  min-height: 36px;
  padding: 8px 10px;
  font-size: 0.82rem;
}

.editOutboundDialog .dialogSection {
  background: var(--surface-soft);
}

.editOutboundDialog select.dialogInput {
  appearance: auto;
  -webkit-appearance: auto;
}

.editOutboundDialog .confirmNote {
  margin-top: 0;
}


/* =========================
   RESPONSIVE TABLET
========================= */

@media (max-width: 900px) {
  .inboundList {
    grid-template-columns: 1fr;
  }

  .toolbarMain {
    grid-template-columns: 1fr;
  }

  .toolbarActions {
    justify-content: stretch;
  }

  .toolbarActions .secondaryBtn {
    width: 100%;
  }
}


/* =========================
   RESPONSIVE MOBILE
========================= */

@media (max-width: 640px) {
  body {
    background:
      radial-gradient(circle at top left, rgba(15, 118, 110, 0.1), transparent 20rem),
      linear-gradient(180deg, #eef7f5 0%, var(--bg) 48%, #eef2f7 100%);
  }

  .mainView {
    padding: 6px;
  }

  .loginView {
    padding: 10px;
  }

  .loginCard {
    padding: 15px;
    border-radius: 18px;
  }

  .loginBrand {
    gap: 9px;
    margin-bottom: 12px;
  }

  .brandMark {
    width: 44px;
    height: 44px;
    border-radius: 14px;
    font-size: 1.22rem;
  }

  .loginBrand h1 {
    font-size: 1.02rem;
  }

  .loginBrand p {
    font-size: 0.76rem;
  }

  .loginInfoBox {
    padding: 10px;
    margin-bottom: 11px;
  }

  .loginInfoBox span {
    font-size: 0.8rem;
  }

  .passwordWrap {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 6px;
  }

  .loginForm input,
  .searchBox input,
  .dialogInput,
  .dialogTextarea {
    min-height: 39px;
    padding: 8px 10px;
    font-size: 0.9rem;
  }

  .topbar {
    gap: 6px;
    border-radius: 16px;
    padding: 8px;
    margin-bottom: 7px;
  }

  .brandMiniMark {
    width: 34px;
    height: 34px;
    border-radius: 11px;
    font-size: 0.96rem;
  }

  .topbarTitle h1 {
    font-size: 0.92rem;
  }

  .topbarTitle p {
    font-size: 0.68rem;
  }

  .topbarRight {
    gap: 5px;
    flex-shrink: 0;
  }

  .userBadge {
    min-width: 76px;
    max-width: 92px;
    padding: 5px 7px;
  }

  .userBadge .userLabel {
    font-size: 0.62rem;
  }

  .userBadge strong {
    font-size: 0.76rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .smallBtn {
    min-height: 31px;
    padding: 6px 8px;
    font-size: 0.72rem;
  }

  .toolbar {
    border-radius: 16px;
    padding: 8px;
    margin-bottom: 7px;
  }

  .toolbarMain {
    gap: 7px;
  }

  .searchBox {
    gap: 4px;
  }

  .searchBox label {
    font-size: 0.76rem;
  }

  .summaryPanel {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 6px;
    margin-top: 7px;
  }

  .summaryItem {
    padding: 7px 8px;
  }

  .summaryItem span {
    font-size: 0.68rem;
  }

  .summaryItem strong {
    font-size: 0.94rem;
  }

  .statusBox {
    min-height: 48px;
    border-radius: 15px;
    margin-bottom: 7px;
  }

  .inboundList {
    gap: 7px;
    padding-bottom: 16px;
  }

  .inboundCard {
    border-radius: 15px;
    padding: 9px;
    gap: 7px;
  }

  .plateText {
    font-size: 1.08rem;
  }

  .autoIdText {
    font-size: 0.7rem;
  }

  .brandBadge {
    min-width: 58px;
    padding: 4px 7px;
    font-size: 0.66rem;
  }

  .cardBody {
    padding: 7px 0;
  }

  .infoGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 6px 8px;
  }

  .infoItem span {
    font-size: 0.66rem;
  }

  .infoItem strong {
    font-size: 0.78rem;
    line-height: 1.15;
  }

  .cardActions .primaryBtn {
    min-height: 36px;
    font-size: 0.86rem;
  }

  .swal2-container {
    padding: 5px !important;
  }

  .swal2-popup {
    width: calc(100vw - 10px) !important;
    max-height: calc(100dvh - 10px) !important;
    border-radius: 16px !important;
    padding: 9px !important;
  }

  .swal2-title {
    font-size: 1rem !important;
    padding: 0 4px !important;
  }

  .swal2-html-container {
    margin-top: 0.45em !important;
    max-height: calc(100dvh - 118px) !important;
    padding-inline: 0 !important;
  }

  .swal2-actions {
    margin-top: 8px !important;
    gap: 6px !important;
  }

  .swal2-confirm,
  .swal2-cancel {
    padding: 8px 14px !important;
    font-size: 0.9rem !important;
  }

  .outDialog,
  .editOutboundDialog {
    gap: 8px;
  }

  .dialogSection {
    padding: 8px;
    border-radius: 14px;
    gap: 8px;
  }

  .dialogSection h3 {
    font-size: 0.9rem;
  }

  .dialogInfoGrid,
  .docPairGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 6px;
  }

  .dialogInfoItem {
    padding: 6px 7px;
    border-radius: 9px;
  }

  .dialogInfoItem span {
    font-size: 0.64rem;
  }

  .dialogInfoItem strong {
    font-size: 0.76rem;
    line-height: 1.15;
  }

  .fieldGroup {
    gap: 6px;
  }

  .fieldGroup label {
    font-size: 0.8rem;
  }

  .helpText {
    font-size: 0.67rem;
    line-height: 1.22;
  }

  .dialogNotice {
    padding: 7px 8px;
    font-size: 0.74rem;
    border-radius: 10px;
  }

  .manageDataBtn {
    min-height: 28px;
    padding: 5px 8px;
    font-size: 0.68rem;
  }

  .manageMenu {
    min-width: 130px;
  }

  .manageMenuBtn {
    min-height: 30px;
    font-size: 0.72rem;
  }

  .brandSelectGrid {
    gap: 7px;
  }

  .brandOption {
    min-height: 116px;
    padding: 6px;
    border-radius: 13px;
  }

  .brandImageBox {
    height: 82px;
    border-radius: 10px;
  }

  .brandOption strong {
    font-size: 0.74rem;
  }

  .qtySelectGrid {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 6px;
  }

  .qtyChip {
    min-height: 34px;
    padding: 6px 4px;
    font-size: 0.78rem;
  }

  .evidenceControl {
    gap: 6px;
  }

  .evidenceControl .secondaryBtn {
    min-height: 38px;
    font-size: 0.82rem;
    padding: 7px 8px;
  }

  .evidenceCount {
    padding: 6px 8px;
    font-size: 0.73rem;
    border-radius: 9px;
  }

  .evidencePreviewGrid {
    gap: 5px;
  }

  .evidenceThumb {
    border-radius: 9px;
  }

  .removeEvidenceBtn {
    width: 23px;
    height: 23px;
    top: 3px;
    right: 3px;
    font-size: 0.96rem;
  }

  .inlineCameraPanel {
    padding: 7px;
    gap: 7px;
    border-radius: 13px;
  }

  .inlineCameraVideo {
    height: clamp(160px, 32dvh, 330px);
    max-height: 330px;
    border-radius: 11px;
  }

  .inlineCameraActions {
    gap: 6px;
  }

  .inlineCameraActions button {
    min-height: 36px;
    font-size: 0.82rem;
  }

  .confirmBox,
  .successSummary {
    gap: 6px;
  }

  .confirmBox div,
  .successSummary div {
    grid-template-columns: 92px 1fr;
    gap: 6px;
    padding: 7px 8px;
  }

  .confirmBox span,
  .successSummary span {
    font-size: 0.72rem;
  }

  .confirmBox strong,
  .successSummary strong {
    font-size: 0.78rem;
  }

  .confirmNote {
    padding: 8px;
    font-size: 0.74rem;
  }

  .editSearchBox {
    gap: 9px;
  }

  .outboundHistoryToolbar {
    padding: 7px;
    border-radius: 12px;
  }

  .outboundHistoryToolbar .secondaryBtn {
    min-height: 34px;
    padding: 7px 10px;
    font-size: 0.78rem;
  }

  .outboundHistoryToolbar span {
    font-size: 0.74rem;
  }

  .outboundHistoryList {
    gap: 7px;
  }

  .outboundHistoryCard {
    padding: 8px;
    border-radius: 14px;
    gap: 7px;
  }

  .outboundHistoryInfo {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 7px;
    padding-top: 7px;
  }

  .editAuditLine {
    padding: 6px 7px;
    font-size: 0.68rem;
    border-radius: 9px;
  }

  .outboundHistoryActions {
    gap: 6px;
  }

  .outboundHistoryActions button {
    min-height: 34px;
    padding: 7px 8px;
    font-size: 0.76rem;
  }

  .emptyEditResult {
    padding: 14px 8px;
  }

  .emptyEditResult h3 {
    font-size: 0.92rem;
  }

  .emptyEditResult p {
    font-size: 0.78rem;
  }
}


/* =========================
   RESPONSIVE SMALL MOBILE
========================= */

@media (max-width: 420px) {
  .mainView {
    padding: 5px;
  }

  .topbar {
    padding: 7px;
  }

  .brandMiniMark {
    width: 31px;
    height: 31px;
    border-radius: 10px;
    font-size: 0.88rem;
  }

  .topbarTitle h1 {
    font-size: 0.86rem;
  }

  .topbarTitle p {
    font-size: 0.63rem;
  }

  .userBadge {
    min-width: 68px;
    max-width: 82px;
    padding: 4px 6px;
  }

  .userBadge .userLabel {
    font-size: 0.58rem;
  }

  .userBadge strong {
    font-size: 0.7rem;
  }

  .smallBtn {
    min-height: 30px;
    padding-inline: 7px;
    font-size: 0.68rem;
  }

  .toolbar {
    padding: 7px;
  }

  .summaryPanel {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .inboundCard {
    padding: 8px;
    gap: 6px;
  }

  .plateText {
    font-size: 1rem;
  }

  .brandBadge {
    min-width: 52px;
    font-size: 0.61rem;
    padding: 4px 6px;
  }

  .infoGrid,
  .dialogInfoGrid,
  .docPairGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 7px;
  }

  .infoItem span {
    font-size: 0.62rem;
  }

  .infoItem strong {
    font-size: 0.72rem;
  }

  .dialogSectionHeader {
    align-items: flex-start;
  }

  .brandOption {
    min-height: 108px;
    padding: 5px;
    border-radius: 12px;
  }

  .brandImageBox {
    height: 76px;
    border-radius: 10px;
  }

  .brandOption strong {
    font-size: 0.7rem;
  }

  .qtyChip {
    min-height: 32px;
    font-size: 0.72rem;
  }

  .inlineCameraVideo {
    height: clamp(145px, 30dvh, 285px);
    max-height: 285px;
  }

  .swal2-actions {
    flex-direction: row !important;
    width: 100% !important;
  }

  .swal2-confirm,
  .swal2-cancel {
    width: auto !important;
    min-width: 112px !important;
  }

  .outboundHistoryToolbar {
    gap: 6px;
  }

  .outboundHistoryToolbar .secondaryBtn {
    min-height: 32px;
    padding: 6px 8px;
    font-size: 0.7rem;
  }

  .outboundHistoryToolbar span {
    font-size: 0.68rem;
  }

  .outboundHistoryHead {
    gap: 6px;
  }

  .outboundHistoryCard {
    padding: 7px;
  }

  .outboundHistoryInfo {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .outboundHistoryActions {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .outboundHistoryActions button {
    min-height: 32px;
    padding: 6px 6px;
    font-size: 0.68rem;
  }

  .editAuditLine {
    font-size: 0.64rem;
  }
}
หลังวางแล้วให้แก้ version ใน index.html เป็น:

<link rel="stylesheet" href="./style.css?v=15">
<script src="./app.js?v=14" defer></script>
CSS ชุดนี้เพิ่มส่วนแก้ไขย้อนหลังครบแล้ว โดยเฉพาะปุ่ม แก้ไข / ลบรายการนี้ ในรายการที่ค้นหาตามวันที่ และยังคงบังคับข้อมูลหลายส่วนให้แสดง 2 คอลัมน์บนมือถือเพื่อประหยัดพื้นที่ครับ.



Pasted code(62).js
JavaScript

ข้อความที่วาง (2)(52).txt
เอกสาร

ข้อความที่วาง (3)(23).txt
เอกสาร

ข้อความที่วาง (4)(21).txt
เอกสาร
ย้ายปุ่มการแสดงผล แก้ไขข้อมูลให้ออกมาอยู่หน้าฟอร์ม หากอยู่ในส่วนของ บันทึกพาเลทขาออก อาจใช้งานยากและไม่เหมาะสม ให้ย้ายมาอยู่แถบเดียวกับข้อมูลด้านนของฟอร์มแประหยัดพื้นที่  และตรวจสอบให้เมื่อกดแล้วเปิดปฏิทิน เพื่อเลือกข้อมูลเดือนวันที่ เพื่อเลือกแก้ไขข้อมูล(เพราะอนนี้ไม่สามารถตรวจสอบข้อมูลในวันที่เลือกได้)   

คิดเป็นเวลา 9s
ได้ครับ จุดนี้ควรแก้โครงสร้างใหม่แบบนี้:

ย้ายปุ่ม “แก้ไขข้อมูล” ออกจาก SweetAlert บันทึกพาเลทขาออก

นำปุ่มไปไว้หน้า Main Form ในแถบ Toolbar แถวเดียวกับปุ่ม “โหลดข้อมูลใหม่”

เมื่อกดปุ่มนี้ ให้เปิด SweetAlert เลือกวันที่ด้วย input type="date"

หลังเลือกวันที่ ให้เรียก API:

/api/outbound-by-date?date=dd/MM/yyyy
ตอนนี้ index.html ของคุณมี Toolbar ที่มีเฉพาะปุ่ม โหลดข้อมูลใหม่ อยู่ใน .toolbarActions เท่านั้น 

 และ app.js ปัจจุบันยังผูกปุ่มแก้ไขไว้ใน SweetAlert ผ่าน editOutboundBtn ภายใน buildRecordOutDialogHtml() / initDialogEvents() จึงใช้งานยากจริงตามที่แจ้งมา 


1. แก้ index.html
ให้หาโค้ดส่วนนี้:

<div class="toolbarActions">
  <button id="refreshBtn" class="secondaryBtn" type="button">
    โหลดข้อมูลใหม่
  </button>
</div>
เปลี่ยนเป็น:

<div class="toolbarActions">
  <button id="openEditOutboundBtn" class="primaryBtn toolbarEditBtn" type="button">
    แก้ไขข้อมูล
  </button>

  <button id="refreshBtn" class="secondaryBtn" type="button">
    โหลดข้อมูลใหม่
  </button>
</div>
แล้วเปลี่ยน version ด้านล่างเป็น:

<link rel="stylesheet" href="./style.css?v=16">
<script src="./app.js?v=15" defer></script>
2. แก้ app.js เพิ่มปุ่มหน้า Form
2.1 เพิ่ม element ใน els
หาใน const els = { ... } ส่วนนี้:

refreshBtn: $("refreshBtn"),
emptyRefreshBtn: $("emptyRefreshBtn"),
เปลี่ยนเป็น:

refreshBtn: $("refreshBtn"),
emptyRefreshBtn: $("emptyRefreshBtn"),
openEditOutboundBtn: $("openEditOutboundBtn"),
2.2 เพิ่ม event ให้ปุ่มใหม่
หาใน bindEvents() ส่วนนี้:

if (els.refreshBtn) {
  els.refreshBtn.addEventListener("click", () => loadInboundRows(true));
}
เพิ่มต่อท้ายเป็น:

if (els.openEditOutboundBtn) {
  els.openEditOutboundBtn.addEventListener("click", async () => {
    await handleEditOutboundSearch();
  });
}
3. เอาปุ่ม “แก้ไขข้อมูล” ออกจาก SweetAlert บันทึกขาออก
ใน buildRecordOutDialogHtml(row) ให้หา block นี้:

<button id="editOutboundBtn" type="button" class="manageMenuBtn edit">
  แก้ไขข้อมูล
</button>
ให้ลบออก เหลือแค่:

<div id="manageMenu" class="manageMenu isHidden">
  <button id="suppressInboundBtn" type="button" class="manageMenuBtn danger">
    ซ่อนรายการนี้
  </button>
</div>
4. ลบ event ของ editOutboundBtn ใน SweetAlert
ใน initDialogEvents(row) ให้ลบบรรทัดนี้:

const editOutboundBtn = $("editOutboundBtn");
และลบ block นี้ออก:

if (editOutboundBtn) {
  editOutboundBtn.addEventListener("click", async () => {
    await handleEditOutboundSearch();
  });
}
หลังจากนี้ปุ่มแก้ไขจะไม่อยู่ใน popup บันทึกพาเลทออกอีกแล้ว แต่จะอยู่หน้า Main Form แทน

5. ตรวจฟังก์ชันเปิดปฏิทินให้เลือกวัน
ให้ตรวจว่าใน app.js มีฟังก์ชันนี้อยู่แล้ว ถ้ายังไม่มีหรือไม่ครบ ให้วางชุดนี้แทนของเดิมทั้งหมด:

async function handleEditOutboundSearch() {
  stopInlineCamera();

  const todayIso = toDateInputValue(new Date());

  const result = await Swal.fire({
    title: "ค้นหารายการขาออกย้อนหลัง",
    html: `
      <div class="editSearchBox">
        <div class="fieldGroup">
          <label for="outboundSearchDate">เลือกวันที่บันทึกขาออก</label>
          <input
            id="outboundSearchDate"
            class="dialogInput"
            type="date"
            value="${escapeAttr(todayIso)}"
          >
        </div>

        <div class="confirmNote">
          เลือกวันที่ที่ต้องการตรวจสอบ ระบบจะดึงรายการพาเลทขาออกที่บันทึกไว้แล้วในวันนั้นมาให้แก้ไขหรือลบรายการ
        </div>
      </div>
    `,
    width: 560,
    showCancelButton: true,
    confirmButtonText: "ค้นหารายการ",
    cancelButtonText: "ยกเลิก",
    reverseButtons: true,
    focusConfirm: false,
    preConfirm: () => {
      const input = $("outboundSearchDate");
      const isoDate = String(input ? input.value || "" : "").trim();

      if (!isoDate) {
        Swal.showValidationMessage("กรุณาเลือกวันที่");
        return false;
      }

      const displayDate = isoDateToDisplayDate(isoDate);

      if (!displayDate) {
        Swal.showValidationMessage("รูปแบบวันที่ไม่ถูกต้อง");
        return false;
      }

      return displayDate;
    }
  });

  if (!result.isConfirmed || !result.value) return;

  await openOutboundHistoryDialog(result.value);
}
และตรวจว่า openOutboundHistoryDialog(dateText) ต้องเรียกแบบนี้:

const res = await apiGet(
  "/api/outbound-by-date?date=" + encodeURIComponent(dateText),
  60000
);
ถ้าใช้แบบนี้ วันที่จากปฏิทิน yyyy-MM-dd จะถูกแปลงเป็น dd/MM/yyyy ก่อนส่งไป Worker ถูกต้อง

6. ตรวจ Helper วันที่ ต้องมีครบ
ให้ตรวจว่าท้ายไฟล์ app.js มี 2 ฟังก์ชันนี้:

function isoDateToDisplayDate(isoDate) {
  const text = String(isoDate || "").trim();
  const m = text.match(/^(\d{4})-(\d{2})-(\d{2})$/);

  if (!m) return "";

  return `${m[3]}/${m[2]}/${m[1]}`;
}


function toDateInputValue(date) {
  const d = date instanceof Date && !isNaN(date.getTime())
    ? date
    : new Date();

  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");

  return `${yyyy}-${mm}-${dd}`;
}
7. เพิ่ม CSS ให้ปุ่มอยู่แถบเดียวกันและประหยัดพื้นที่
ให้เพิ่ม CSS นี้ท้ายไฟล์ style.css:

/* =====================================================
   TOOLBAR EDIT BUTTON
   ปุ่มแก้ไขข้อมูลหน้า Main Form
===================================================== */

.toolbarActions {
  display: flex;
  align-items: end;
  justify-content: flex-end;
  gap: 8px;
  flex-wrap: nowrap;
}

.toolbarActions .primaryBtn,
.toolbarActions .secondaryBtn {
  white-space: nowrap;
}

.toolbarEditBtn {
  background: var(--success);
  border-color: #86efac;
  box-shadow: 0 6px 16px rgba(22, 163, 74, 0.18);
}

.toolbarEditBtn:hover {
  background: var(--success-dark);
}


/* มือถือ */
@media (max-width: 640px) {
  .toolbarMain {
    grid-template-columns: 1fr;
  }

  .toolbarActions {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 7px;
    width: 100%;
  }

  .toolbarActions .primaryBtn,
  .toolbarActions .secondaryBtn {
    width: 100%;
    min-height: 38px;
    padding: 8px 9px;
    font-size: 0.82rem;
  }
}


/* มือถือจอเล็ก */
@media (max-width: 420px) {
  .toolbarActions {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 6px;
  }

  .toolbarActions .primaryBtn,
  .toolbarActions .secondaryBtn {
    min-height: 35px;
    padding: 7px 7px;
    font-size: 0.74rem;
  }
}
8. สรุปตำแหน่งใหม่ที่ถูกต้อง
หลังแก้แล้วหน้า Main Form จะเป็นแบบนี้:

[ช่องค้นหารายการ]

[แก้ไขข้อมูล] [โหลดข้อมูลใหม่]

[จำนวนรอบันทึกขาออก] [อัปเดตล่าสุด]
ปุ่ม แก้ไขข้อมูล จะเปิดปฏิทินทันที ไม่ต้องเข้าไปใน SweetAlert บันทึกพาเลทออกก่อนแล้ว ทำให้ใช้งานง่ายกว่าและเหมาะกับงานย้อนหลังมากกว่าครับ.


6b27756c-0986-4864-bf89-5c0360b08f62.png
ไม่สามารถค้นหาข้อมูลในวันที่ในปฏิทินได้ ตามภาพแก้ไขใหม่ด้วย

คิดเป็นเวลา 40s
สาเหตุหลักคือช่องปฏิทินใน Browser แสดงเป็น 12-May-2026 ตามรูปแบบของเครื่อง แต่โค้ดเดิมแปลงแล้วส่งไป API เป็น dd/MM/yyyy ผ่าน URL เช่น 12/05/2026 ซึ่งบางครั้งทำให้ตรวจสอบยาก และถ้า deploy/cache ไม่ตรงจะดูเหมือน “เลือกวันที่แล้วไม่เจอข้อมูล” ทั้งที่ Backend รองรับการค้นหาจาก Timestamp ขาออก อยู่แล้ว 


ให้แก้ใหม่เป็นมาตรฐานกว่า คือ ให้ปฏิทินส่งค่าแบบ ISO yyyy-MM-dd ไป API โดยตรง เช่น 2026-05-12 แล้วให้ Apps Script แปลงเอง เพราะ Code.gs รองรับ yyyy-MM-dd อยู่แล้วจากฟังก์ชัน normalizeDateOnlyText_() และ getOutboundByDate_().

1. แก้ app.js — แทนที่ handleEditOutboundSearch() ทั้งฟังก์ชัน
หา async function handleEditOutboundSearch() แล้วแทนที่ทั้งฟังก์ชันด้วยชุดนี้

async function handleEditOutboundSearch() {
  stopInlineCamera();

  const todayIso = toDateInputValue(new Date());

  const result = await Swal.fire({
    title: "ค้นหารายการขาออกย้อนหลัง",
    html: `
      <div class="editSearchBox">
        <div class="fieldGroup">
          <label for="outboundSearchDate">เลือกวันที่บันทึกขาออก</label>
          <input
            id="outboundSearchDate"
            class="dialogInput"
            type="date"
            value="${escapeAttr(todayIso)}"
          >
        </div>

        <div class="confirmNote">
          เลือกวันที่ที่ต้องการตรวจสอบ ระบบจะค้นหารายการพาเลทขาออกที่บันทึกไว้แล้วในวันนั้น
        </div>
      </div>
    `,
    width: 560,
    showCancelButton: true,
    confirmButtonText: "ค้นหารายการ",
    cancelButtonText: "ยกเลิก",
    reverseButtons: true,
    focusConfirm: false,
    preConfirm: () => {
      const input = $("outboundSearchDate");
      const isoDate = String(input ? input.value || "" : "").trim();

      if (!isoDate) {
        Swal.showValidationMessage("กรุณาเลือกวันที่");
        return false;
      }

      if (!/^\d{4}-\d{2}-\d{2}$/.test(isoDate)) {
        Swal.showValidationMessage("รูปแบบวันที่ไม่ถูกต้อง");
        return false;
      }

      return {
        apiDate: isoDate,
        displayDate: isoDateToDisplayDate(isoDate)
      };
    }
  });

  if (!result.isConfirmed || !result.value) return;

  await openOutboundHistoryDialog(result.value);
}
2. แก้ app.js — แทนที่ openOutboundHistoryDialog() ทั้งฟังก์ชัน
ของเดิมตอนนี้ส่ง dateText ไป /api/outbound-by-date?date=... อยู่แล้ว 

 แต่ให้แก้เป็นส่ง apiDate แบบ yyyy-MM-dd แทน

async function openOutboundHistoryDialog(datePayload) {
  const apiDate = typeof datePayload === "string"
    ? datePayload
    : String(datePayload && datePayload.apiDate ? datePayload.apiDate : "").trim();

  const displayDate = typeof datePayload === "string"
    ? datePayload
    : String(datePayload && datePayload.displayDate ? datePayload.displayDate : "").trim();

  if (!apiDate) {
    await Swal.fire({
      icon: "warning",
      title: "ไม่พบวันที่",
      text: "กรุณาเลือกวันที่ที่ต้องการค้นหาอีกครั้ง",
      confirmButtonText: "ตกลง"
    });
    return;
  }

  try {
    Swal.fire({
      title: "กำลังค้นหารายการ",
      html: `
        <div class="confirmNote">
          กำลังค้นหาข้อมูลวันที่ ${escapeHtml(displayDate || apiDate)}
        </div>
      `,
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    const res = await apiGet(
      "/api/outbound-by-date?date=" + encodeURIComponent(apiDate) + "&_t=" + Date.now(),
      60000
    );

    if (!res.ok) {
      throw new Error(res.message || "ค้นหารายการขาออกย้อนหลังไม่สำเร็จ");
    }

    const rows = Array.isArray(res.rows) ? res.rows : [];
    const resultDate = res.date || displayDate || apiDate;

    await Swal.fire({
      title: "รายการขาออกวันที่ " + escapeHtml(resultDate),
      html: buildOutboundHistoryHtml(rows, resultDate),
      width: 900,
      showConfirmButton: false,
      showCloseButton: true,
      didOpen: () => {
        initOutboundHistoryEvents(rows, resultDate);
      }
    });

  } catch (err) {
    await showError(err);
  }
}
3. แก้ app.js — เพิ่มปุ่มแก้ไขหน้า Main Form ให้เรียกฟังก์ชันนี้จริง
ในไฟล์ index.html ตอนนี้ Toolbar เดิมมีปุ่ม โหลดข้อมูลใหม่ อยู่แล้ว 

 ถ้าเพิ่มปุ่ม openEditOutboundBtn แล้ว ใน app.js ต้องมีครบ 2 จุดนี้

3.1 ใน const els = { ... }
ให้มีบรรทัดนี้:

openEditOutboundBtn: $("openEditOutboundBtn"),
อยู่ใกล้กับ:

refreshBtn: $("refreshBtn"),
emptyRefreshBtn: $("emptyRefreshBtn"),
เป็น:

refreshBtn: $("refreshBtn"),
emptyRefreshBtn: $("emptyRefreshBtn"),
openEditOutboundBtn: $("openEditOutboundBtn"),
3.2 ใน bindEvents()
เพิ่ม:

if (els.openEditOutboundBtn) {
  els.openEditOutboundBtn.addEventListener("click", async () => {
    await handleEditOutboundSearch();
  });
}
วางต่อจากปุ่มโหลดข้อมูลใหม่:

if (els.refreshBtn) {
  els.refreshBtn.addEventListener("click", () => loadInboundRows(true));
}

if (els.openEditOutboundBtn) {
  els.openEditOutboundBtn.addEventListener("click", async () => {
    await handleEditOutboundSearch();
  });
}
4. แก้ initOutboundHistoryEvents() ให้กลับไปค้นวันเดิมได้ถูกต้อง
ในฟังก์ชัน initOutboundHistoryEvents(rows, dateText) ให้แก้เฉพาะตอนเรียกกลับหลังแก้ไข/ลบ เพื่อไม่ให้ dateText ที่เป็น dd/MM/yyyy ถูกเอาไปส่งซ้ำแบบผิด format

หาในฟังก์ชันนี้:

await openEditOutboundDialog(row, dateText);
เปลี่ยนเป็น:

await openEditOutboundDialog(row, {
  apiDate: displayDateToIsoDate(dateText),
  displayDate: dateText
});
และหา:

await confirmDeleteOutbound(row, dateText);
เปลี่ยนเป็น:

await confirmDeleteOutbound(row, {
  apiDate: displayDateToIsoDate(dateText),
  displayDate: dateText
});
5. แก้ submitUpdateOutbound() และ confirmDeleteOutbound() ให้โหลดวันเดิมถูก
หาใน submitUpdateOutbound():

await openOutboundHistoryDialog(dateText);
เปลี่ยนเป็น:

await openOutboundHistoryDialog(datePayload);
และเปลี่ยนชื่อ parameter ฟังก์ชันจาก:

async function submitUpdateOutbound(payload, dateText) {
เป็น:

async function submitUpdateOutbound(payload, datePayload) {
จากนั้นใน confirmDeleteOutbound() หา:

await openOutboundHistoryDialog(dateText);
เปลี่ยนเป็น:

await openOutboundHistoryDialog(datePayload);
และเปลี่ยนชื่อ parameter จาก:

async function confirmDeleteOutbound(row, dateText) {
เป็น:

async function confirmDeleteOutbound(row, datePayload) {
ส่วน openEditOutboundDialog() ให้เปลี่ยน parameter จาก:

async function openEditOutboundDialog(row, dateText) {
เป็น:

async function openEditOutboundDialog(row, datePayload) {
และหา:

await submitUpdateOutbound(result.value, dateText);
เปลี่ยนเป็น:

await submitUpdateOutbound(result.value, datePayload);
6. เพิ่ม Helper แปลงวันที่ท้าย app.js
ตอนนี้มี isoDateToDisplayDate() และ toDateInputValue() อยู่แล้ว 

 ให้เพิ่มฟังก์ชันนี้ต่อท้ายใกล้ ๆ กัน

function displayDateToIsoDate(displayDate) {
  const text = String(displayDate || "").trim();

  const m = text.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);

  if (!m) return text;

  const dd = String(Number(m[1])).padStart(2, "0");
  const mm = String(Number(m[2])).padStart(2, "0");
  const yyyy = String(Number(m[3]));

  return `${yyyy}-${mm}-${dd}`;
}
7. แก้ index.html version
เปลี่ยนเป็น:

<link rel="stylesheet" href="./style.css?v=16">
<script src="./app.js?v=16" defer></script>
8. วิธีทดสอบตรง ๆ
หลังแก้และ Deploy แล้ว ให้ลองเปิด URL นี้ใน Browser โดยตรง:

https://pallet.somchaibutphon.workers.dev/api/outbound-by-date?date=2026-05-12
ถ้ามีข้อมูลวันที่ 12/05/2026 จะต้องได้:

{
  "ok": true,
  "date": "12/05/2026",
  "rows": [...]
}
ถ้าได้ rows: [] แปลว่าใน Sheet1 ไม่มี Timestamp ขาออก ของวันที่นั้น หรือรายการในวันนั้นถูกตั้ง สถานะรายการ = DELETED แล้ว เพราะ Backend จะไม่แสดงรายการที่ถูกลบแบบ Soft Delete.


คิดเป็นเวลา 7s
โดยหลักแล้ว ถ้าใช้ <input type="date"> และอ่านค่าจาก input.value จะไม่มีปัญหาครับ ถึงหน้าจอจะแสดงเป็น 12-May-2026, 12/05/2026, May 12, 2026 หรือรูปแบบอื่นตามภาษา/เครื่อง/เบราว์เซอร์ แต่ค่าที่ JavaScript ได้จาก input.value จะเป็นมาตรฐานเดียวกันคือ:

2026-05-12
ดังนั้นแนวทางที่แก้ล่าสุดคือถูกต้องกว่าเดิม เพราะส่งค่าไป API เป็น yyyy-MM-dd โดยตรง เช่น:

/api/outbound-by-date?date=2026-05-12
และฝั่ง Code.gs ของเรารองรับ yyyy-MM-dd แล้ว จึงไม่ควรมีปัญหาจากรูปแบบวันที่ที่แสดงบนหน้าจอ

แต่เพื่อให้ปลอดภัยที่สุดกับบาง Browser ที่อาจไม่รองรับ type="date" ดีพอ เช่น Browser เก่า หรือ WebView บางตัวใน LINE/Facebook ผมแนะนำให้เพิ่มฟังก์ชัน parse แบบกันพลาดไว้ใน app.js

ให้เพิ่มฟังก์ชันนี้ท้าย app.js
function getDateInputIsoValue(inputId) {
  const input = $(inputId);
  if (!input) return "";

  const raw = String(input.value || "").trim();

  // มาตรฐานจาก input type="date"
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) {
    return raw;
  }

  // fallback กรณีบาง browser คืนค่า dd/MM/yyyy
  let m = raw.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (m) {
    const dd = String(Number(m[1])).padStart(2, "0");
    const mm = String(Number(m[2])).padStart(2, "0");
    const yyyy = String(Number(m[3]));
    return `${yyyy}-${mm}-${dd}`;
  }

  // fallback กรณีแสดงแบบ 12-May-2026 หรือ 12 May 2026
  m = raw.match(/^(\d{1,2})[-\s]([A-Za-z]{3,})[-\s](\d{4})$/);
  if (m) {
    const monthMap = {
      jan: "01",
      january: "01",
      feb: "02",
      february: "02",
      mar: "03",
      march: "03",
      apr: "04",
      april: "04",
      may: "05",
      jun: "06",
      june: "06",
      jul: "07",
      july: "07",
      aug: "08",
      august: "08",
      sep: "09",
      sept: "09",
      september: "09",
      oct: "10",
      october: "10",
      nov: "11",
      november: "11",
      dec: "12",
      december: "12"
    };

    const dd = String(Number(m[1])).padStart(2, "0");
    const mm = monthMap[String(m[2]).toLowerCase()];
    const yyyy = String(Number(m[3]));

    if (mm) return `${yyyy}-${mm}-${dd}`;
  }

  // fallback สุดท้าย ใช้ Date parser ของ browser
  const d = new Date(raw);
  if (!isNaN(d.getTime())) {
    return toDateInputValue(d);
  }

  return "";
}
แล้วแก้ใน handleEditOutboundSearch()
ใน preConfirm ให้เปลี่ยนจากการอ่าน input.value ตรง ๆ เป็นแบบนี้:

preConfirm: () => {
  const isoDate = getDateInputIsoValue("outboundSearchDate");

  if (!isoDate) {
    Swal.showValidationMessage("กรุณาเลือกวันที่ให้ถูกต้อง");
    return false;
  }

  return {
    apiDate: isoDate,
    displayDate: isoDateToDisplayDate(isoDate)
  };
}
สรุป
ถ้าเป็น Android Chrome, iPhone Safari, Edge, Chrome บนคอมพิวเตอร์ทั่วไป:

ไม่มีปัญหา เพราะ input.value จะเป็น yyyy-MM-dd
ถ้าเป็น Browser แปลก ๆ หรือ WebView ที่แสดงวันที่ไม่เหมือนกัน:

ฟังก์ชัน getDateInputIsoValue() จะช่วยแปลงกลับเป็น yyyy-MM-dd ก่อนส่ง API
ดังนั้นหลังเพิ่มฟังก์ชันกันพลาดนี้ ระบบจะไม่ขึ้นกับรูปแบบวันที่ที่ “มองเห็นบนหน้าจอ” แต่จะใช้ค่าวันที่มาตรฐานก่อนส่งไปค้นหาทุกครั้งครับ.



ข้อความที่วาง (1)(266).txt
เอกสาร
ปรับปรุงapp.js มาแบบครบถ้วนพร้อมวางเลยได้ไหม 

คิดเป็นเวลา 14s
ได้ครับ ด้านล่างคือ app.js ฉบับปรับปรุงครบถ้วน พร้อมวางแทนไฟล์เดิมทั้งไฟล์ โดยจัดโครงสร้างใหม่จากไฟล์ที่คุณส่งมา และแก้จุดสำคัญให้ครบ:

ปุ่ม แก้ไขข้อมูล อยู่หน้า Main Form ผ่าน openEditOutboundBtn

ไม่เอาปุ่มแก้ไขไปไว้ใน SweetAlert บันทึกพาเลทออกแล้ว

ปฏิทินใช้ input type="date" แต่ระบบอ่านค่าแบบปลอดภัยด้วย getDateInputIsoValue()

ส่งวันที่ค้นหาเป็น yyyy-MM-dd ไป API เสมอ เช่น 2026-05-12

รองรับ browser ที่แสดงวันที่เป็น 12-May-2026, 12/05/2026 หรือรูปแบบอื่น

แก้ flow แก้ไข/ลบให้กลับมาโหลดข้อมูลวันที่เดิมได้ถูกต้อง

จัด indent และโครงสร้างให้สะอาดกว่าไฟล์เดิมที่มีบางส่วนวางเหลื่อม/ซ้ำ 


ให้วางแทน app.js เดิมทั้งไฟล์ได้เลย

/* =====================================================
 * Pallet OUT System - Frontend App
 * File: app.js
 * ใช้กับ index.html + style.css
 * ===================================================== */

(function () {
  "use strict";

  /* =========================
   * CONFIG
   * ========================= */

  const CONFIG = Object.assign(
    {
      API_BASE: "",
      MAX_IMAGES: 4,
      MIN_IMAGES: 1,
      IMAGE_MAX_WIDTH: 1280,
      IMAGE_MAX_HEIGHT: 1280,
      IMAGE_QUALITY: 0.78,
      IMAGE_OUTPUT_TYPE: "image/jpeg",
      DATE_TIME_FORMAT: "dd/MM/yyyy HH:mm:ss"
    },
    window.APP_CONFIG || {}
  );

  const STORAGE_KEY_USER = "PALLET_OUT_CURRENT_USER";
  const STORAGE_KEY_LOGIN_AT = "PALLET_OUT_LOGIN_AT";

  const ECD_REGEX = /^[A-Za-z0-9]+$/;
  const TCR_REGEX = /^[A-Za-z0-9]+$/;
  const DEFAULT_PALLET_QTY = [10, 20, 30, 40, 50, 60, 80, 100];

  const state = {
    currentUser: "",
    options: {
      brands: [],
      palletQty: []
    },
    inboundRows: [],
    filteredRows: [],
    selectedEvidenceFiles: [],
    selectedEvidencePayloads: [],
    selectedBrand: "",
    selectedQty: "",
    isSubmitting: false
  };

  let inlineCameraStream = null;

  /* =========================
   * DOM
   * ========================= */

  const $ = (id) => document.getElementById(id);

  const els = {
    loginView: $("loginView"),
    mainView: $("mainView"),
    loginForm: $("loginForm"),
    passInput: $("passInput"),
    loginBtn: $("loginBtn"),
    togglePassBtn: $("togglePassBtn"),

    currentUserName: $("currentUserName"),
    logoutBtn: $("logoutBtn"),
    refreshBtn: $("refreshBtn"),
    emptyRefreshBtn: $("emptyRefreshBtn"),
    openEditOutboundBtn: $("openEditOutboundBtn"),

    searchInput: $("searchInput"),
    openCountText: $("openCountText"),
    lastUpdatedText: $("lastUpdatedText"),

    statusBox: $("statusBox"),
    statusText: $("statusText"),
    emptyState: $("emptyState"),
    inboundList: $("inboundList"),

    cameraInput: $("cameraInput"),
    uploadInput: $("uploadInput")
  };

  /* =========================
   * INIT
   * ========================= */

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    bindEvents();

    const savedUser = sessionStorage.getItem(STORAGE_KEY_USER) || "";

    if (savedUser) {
      state.currentUser = savedUser;
      showMainView(savedUser);
      loadInitialData();
      return;
    }

    showLoginView();

    const passFromUrl = getPassFromUrl();

    if (passFromUrl && els.passInput) {
      els.passInput.value = passFromUrl;

      setTimeout(() => {
        if (els.loginForm) {
          els.loginForm.requestSubmit();
        }
      }, 300);
    }
  }

  function bindEvents() {
    if (els.loginForm) {
      els.loginForm.addEventListener("submit", handleLoginSubmit);
    }

    if (els.togglePassBtn) {
      els.togglePassBtn.addEventListener("click", togglePassword);
    }

    if (els.logoutBtn) {
      els.logoutBtn.addEventListener("click", handleLogout);
    }

    if (els.refreshBtn) {
      els.refreshBtn.addEventListener("click", () => loadInboundRows(true));
    }

    if (els.openEditOutboundBtn) {
      els.openEditOutboundBtn.addEventListener("click", async () => {
        await handleEditOutboundSearch();
      });
    }

    if (els.emptyRefreshBtn) {
      els.emptyRefreshBtn.addEventListener("click", () => loadInboundRows(true));
    }

    if (els.searchInput) {
      els.searchInput.addEventListener("input", handleSearch);
    }

    if (els.cameraInput) {
      els.cameraInput.addEventListener("change", handleEvidenceInputChange);
    }

    if (els.uploadInput) {
      els.uploadInput.addEventListener("change", handleEvidenceInputChange);
    }
  }

  /* =========================
   * VIEW CONTROL
   * ========================= */

  function showLoginView() {
    if (els.loginView) els.loginView.classList.remove("isHidden");
    if (els.mainView) els.mainView.classList.add("isHidden");

    setTimeout(() => {
      if (els.passInput) els.passInput.focus();
    }, 100);
  }

  function showMainView(name) {
    if (els.loginView) els.loginView.classList.add("isHidden");
    if (els.mainView) els.mainView.classList.remove("isHidden");
    if (els.currentUserName) els.currentUserName.textContent = name || "-";
  }

  function setStatus(show, text) {
    if (!els.statusBox) return;

    if (show) {
      els.statusBox.classList.remove("isHidden");

      if (els.statusText) {
        els.statusText.textContent = text || "กำลังโหลดข้อมูล...";
      }
    } else {
      els.statusBox.classList.add("isHidden");
    }
  }

  function setEmptyState(show) {
    if (!els.emptyState) return;

    if (show) {
      els.emptyState.classList.remove("isHidden");
    } else {
      els.emptyState.classList.add("isHidden");
    }
  }

  function setButtonLoading(button, isLoading, loadingText) {
    if (!button) return;

    if (isLoading) {
      button.dataset.originalText = button.textContent;
      button.disabled = true;
      button.textContent = loadingText || "กำลังทำงาน...";
    } else {
      button.disabled = false;
      button.textContent = button.dataset.originalText || button.textContent;
    }
  }

  /* =========================
   * LOGIN
   * ========================= */

  async function handleLoginSubmit(e) {
    e.preventDefault();

    const pass = String(els.passInput.value || "").trim();

    if (!pass) {
      await Swal.fire({
        icon: "warning",
        title: "กรุณากรอกรหัส",
        text: "ต้องกรอกรหัสผู้ใช้งานก่อนเข้าสู่ระบบ",
        confirmButtonText: "ตกลง"
      });
      return;
    }

    try {
      setButtonLoading(els.loginBtn, true, "กำลังตรวจสอบ...");

      const res = await apiPost("/api/login", { pass });

      if (!res.ok) {
        await Swal.fire({
          icon: "error",
          title: "เข้าสู่ระบบไม่สำเร็จ",
          text: res.message || "รหัสผ่านไม่ถูกต้อง",
          confirmButtonText: "ตกลง"
        });
        return;
      }

      const name = String(res.name || "").trim();

      if (!name) {
        throw new Error("ระบบไม่พบชื่อผู้ใช้งานจากรหัสนี้");
      }

      state.currentUser = name;

      sessionStorage.setItem(STORAGE_KEY_USER, name);
      sessionStorage.setItem(STORAGE_KEY_LOGIN_AT, getNowDisplay());

      els.passInput.value = "";

      showMainView(name);

      await Swal.fire({
        icon: "success",
        title: "เข้าสู่ระบบสำเร็จ",
        text: "ผู้ใช้งาน: " + name,
        timer: 1200,
        showConfirmButton: false
      });

      await loadInitialData();

    } catch (err) {
      await showError(err);
    } finally {
      setButtonLoading(els.loginBtn, false);
    }
  }

  function togglePassword() {
    const input = els.passInput;
    if (!input) return;

    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";
    els.togglePassBtn.textContent = isPassword ? "ซ่อน" : "แสดง";
  }

  async function handleLogout() {
    const result = await Swal.fire({
      icon: "question",
      title: "ออกจากระบบ?",
      text: "ต้องการออกจากระบบใช่หรือไม่",
      showCancelButton: true,
      confirmButtonText: "ออกจากระบบ",
      cancelButtonText: "ยกเลิก",
      reverseButtons: true
    });

    if (!result.isConfirmed) return;

    sessionStorage.removeItem(STORAGE_KEY_USER);
    sessionStorage.removeItem(STORAGE_KEY_LOGIN_AT);

    state.currentUser = "";
    state.inboundRows = [];
    state.filteredRows = [];
    state.options = { brands: [], palletQty: [] };

    stopInlineCamera();
    renderInboundRows([]);
    updateSummary();

    showLoginView();
  }

  /* =========================
   * DATA LOADING
   * ========================= */

  async function loadInitialData() {
    try {
      setStatus(true, "กำลังโหลดตัวเลือกและข้อมูลขาเข้า...");

      await loadOptions();
      await loadInboundRows(false);

    } catch (err) {
      await showError(err);
    } finally {
      setStatus(false);
    }
  }

  async function loadOptions() {
    const res = await apiGet("/api/options");

    if (!res.ok) {
      throw new Error(res.message || "โหลดตัวเลือกไม่สำเร็จ");
    }

    state.options.brands = Array.isArray(res.brands) ? res.brands : [];
    state.options.palletQty = Array.isArray(res.palletQty) ? res.palletQty : [];

    state.options.brands = state.options.brands
      .filter((b) => b && b.brand)
      .map((b) => ({
        brand: String(b.brand || "").trim().toUpperCase(),
        imageId: String(b.imageId || "").trim(),
        imageUrl: String(b.imageUrl || "").trim()
      }));

    state.options.palletQty = state.options.palletQty
      .map((n) => Number(n))
      .filter((n) => Number.isFinite(n) && n > 0)
      .sort((a, b) => a - b);

    if (!state.options.palletQty.length) {
      state.options.palletQty = DEFAULT_PALLET_QTY.slice();
    }
  }

  async function loadInboundRows(showLoading = true) {
    try {
      if (showLoading) {
        setStatus(true, "กำลังโหลดรายการรอบันทึกขาออก...");
      }

      const res = await apiGet("/api/inbound-open");

      if (!res.ok) {
        throw new Error(res.message || "โหลดรายการขาเข้าไม่สำเร็จ");
      }

      state.inboundRows = sortRowsByLatestTimestamp(Array.isArray(res.rows) ? res.rows : []);
      state.filteredRows = state.inboundRows.slice();

      if (els.searchInput) {
        const q = String(els.searchInput.value || "").trim();
        if (q) applySearch(q);
      }

      renderInboundRows(state.filteredRows);
      updateSummary();

    } catch (err) {
      await showError(err);
    } finally {
      if (showLoading) {
        setStatus(false);
      }
    }
  }

  /* =========================
   * SEARCH / SORT
   * ========================= */

  function handleSearch(e) {
    const q = String(e.target.value || "").trim();
    applySearch(q);
    renderInboundRows(state.filteredRows);
    updateSummary();
  }

  function applySearch(query) {
    const q = normalizeForSearch(query);

    if (!q) {
      state.filteredRows = sortRowsByLatestTimestamp(state.inboundRows);
      return;
    }

    state.filteredRows = sortRowsByLatestTimestamp(
      state.inboundRows.filter((row) => {
        const haystack = [
          row.autoId,
          row.timestampIn,
          row.reason,
          row.brandIn,
          row.plateNo,
          row.prefix,
          row.firstName,
          row.lastName,
          row.driverFullName,
          row.driverCompany,
          row.phone
        ]
          .map(normalizeForSearch)
          .join(" ");

        return haystack.includes(q);
      })
    );
  }

  function sortRowsByLatestTimestamp(rows) {
    return Array.from(rows || []).sort((a, b) => {
      const ta = parseDisplayDateTimeToMs(a.timestampIn);
      const tb = parseDisplayDateTimeToMs(b.timestampIn);
      return tb - ta;
    });
  }

  function parseDisplayDateTimeToMs(value) {
    const text = String(value || "").trim();

    if (!text) return 0;

    const m = text.match(
      /^(\d{1,2})\/(\d{1,2})\/(\d{4})\s+(\d{1,2}):(\d{2})(?::(\d{2}))?$/
    );

    if (m) {
      const dd = Number(m[1]);
      const mm = Number(m[2]) - 1;
      const yyyy = Number(m[3]);
      const hh = Number(m[4] || 0);
      const mi = Number(m[5] || 0);
      const ss = Number(m[6] || 0);

      const d = new Date(yyyy, mm, dd, hh, mi, ss);
      return isNaN(d.getTime()) ? 0 : d.getTime();
    }

    const d = new Date(text);
    return isNaN(d.getTime()) ? 0 : d.getTime();
  }

  /* =========================
   * RENDER LIST
   * ========================= */

  function renderInboundRows(rows) {
    if (!els.inboundList) return;

    els.inboundList.innerHTML = "";

    const list = Array.isArray(rows) ? rows : [];

    if (!list.length) {
      setEmptyState(true);
      return;
    }

    setEmptyState(false);

    const fragment = document.createDocumentFragment();

    list.forEach((row) => {
      const card = document.createElement("article");
      card.className = "inboundCard";
      card.dataset.autoId = row.autoId || "";

      const brandClass = String(row.brandIn || "").toUpperCase() === "CHEP"
        ? "brandBadge brandChep"
        : "brandBadge brandLoscam";

      card.innerHTML = `
        <div class="cardHeader">
          <div>
            <div class="plateText">${escapeHtml(row.plateNo || "-")}</div>
            <div class="autoIdText">Auto ID: ${escapeHtml(row.autoId || "-")}</div>
          </div>
          <span class="${brandClass}">${escapeHtml(row.brandIn || "-")}</span>
        </div>

        <div class="cardBody">
          <div class="infoGrid">
            <div class="infoItem">
              <span>พขร.</span>
              <strong>${escapeHtml(row.driverFullName || joinName(row) || "-")}</strong>
            </div>

            <div class="infoItem">
              <span>ต้นสังกัด</span>
              <strong>${escapeHtml(row.driverCompany || "-")}</strong>
            </div>

            <div class="infoItem">
              <span>เวลาเข้า</span>
              <strong>${escapeHtml(row.timestampIn || "-")}</strong>
            </div>

            <div class="infoItem">
              <span>เบอร์โทร</span>
              <strong>${escapeHtml(row.phone || "-")}</strong>
            </div>
          </div>
        </div>

        <div class="cardActions">
          <button class="primaryBtn recordOutBtn" type="button">
            บันทึกขาออก
          </button>
        </div>
      `;

      const btn = card.querySelector(".recordOutBtn");

      if (btn) {
        btn.addEventListener("click", () => openRecordOutDialog(row));
      }

      card.addEventListener("click", (ev) => {
        if (ev.target && ev.target.closest("button")) return;
        openRecordOutDialog(row);
      });

      fragment.appendChild(card);
    });

    els.inboundList.appendChild(fragment);
  }

  function updateSummary() {
    const total = state.filteredRows.length;

    if (els.openCountText) {
      els.openCountText.textContent = String(total);
    }

    if (els.lastUpdatedText) {
      els.lastUpdatedText.textContent = getNowDisplay();
    }
  }

  /* =========================
   * SWEETALERT FORM
   * ========================= */

  async function openRecordOutDialog(row) {
    if (state.isSubmitting) return;

    resetDialogState();

    const html = buildRecordOutDialogHtml(row);

    const result = await Swal.fire({
      title: "บันทึกพาเลทขาออก",
      html,
      width: 860,
      showCancelButton: true,
      confirmButtonText: "บันทึกขาออก",
      cancelButtonText: "ยกเลิก",
      reverseButtons: true,
      focusConfirm: false,
      allowOutsideClick: () => !state.isSubmitting,
      allowEscapeKey: () => !state.isSubmitting,
      didOpen: () => {
        initDialogEvents(row);
      },
      willClose: () => {
        stopInlineCamera();
      },
      preConfirm: async () => {
        try {
          return await collectAndValidateDialogData(row);
        } catch (err) {
          showDialogNotice(err.message || String(err), "error");
          return false;
        }
      }
    });

    if (!result.isConfirmed || !result.value) return;

    await submitOutRecord(result.value);
  }

  function resetDialogState() {
    state.selectedEvidenceFiles = [];
    state.selectedEvidencePayloads = [];
    state.selectedBrand = "";
    state.selectedQty = "";
    state.isSubmitting = false;

    stopInlineCamera();

    if (els.cameraInput) els.cameraInput.value = "";
    if (els.uploadInput) els.uploadInput.value = "";
  }

  function buildRecordOutDialogHtml(row) {
    const brandsHtml = buildBrandOptionsHtml();
    const qtyHtml = buildQtyOptionsHtml();

    return `
      <div class="outDialog">
        <section class="dialogSection">
          <h3>ข้อมูลขาเข้า</h3>

          <div class="dialogInfoGrid">
            ${dialogInfo("Auto ID", row.autoId)}
            ${dialogInfo("เวลาเข้า", row.timestampIn)}
            ${dialogInfo("เหตุผล", row.reason)}
            ${dialogInfo("ยี่ห้อขาเข้า", row.brandIn)}
            ${dialogInfo("ทะเบียนรถ", row.plateNo)}
            ${dialogInfo("พขร.", row.driverFullName || joinName(row))}
            ${dialogInfo("ต้นสังกัด", row.driverCompany)}
            ${dialogInfo("เบอร์โทร", row.phone)}
          </div>
        </section>

        <section class="dialogSection">
          <div class="dialogSectionHeader">
            <h3>ข้อมูลขาออก</h3>

            <div class="manageWrap">
              <button id="manageDataBtn" type="button" class="manageDataBtn">
                จัดการข้อมูล
              </button>

              <div id="manageMenu" class="manageMenu isHidden">
                <button id="suppressInboundBtn" type="button" class="manageMenuBtn danger">
                  ซ่อนรายการนี้
                </button>
              </div>
            </div>
          </div>

          <div id="dialogNotice" class="dialogNotice isHidden"></div>

          <div class="fieldGroup">
            <label>เลือกยี่ห้อพาเลทขาออก <em>*</em></label>
            <div id="brandSelectGrid" class="brandSelectGrid">
              ${brandsHtml}
            </div>
          </div>

          <div class="fieldGroup">
            <label>จำนวนพาเลทขาออก <em>*</em></label>
            <div id="qtySelectGrid" class="qtySelectGrid">
              ${qtyHtml}
              <button type="button" class="qtyChip" data-qty="custom">อื่นๆ</button>
            </div>

            <input
              id="customQtyInput"
              class="dialogInput isHidden"
              type="number"
              inputmode="numeric"
              min="1"
              step="1"
              placeholder="กรอกจำนวนเอง"
            >
          </div>

          <div class="docPairGrid">
            <div class="fieldGroup">
              <label for="ecdNameInput">หมายเลขเอกสาร ECD <em>*</em></label>
              <input
                id="ecdNameInput"
                class="dialogInput"
                type="text"
                inputmode="latin"
                autocomplete="off"
                placeholder="ECD001"
                maxlength="30"
              >
            </div>

            <div class="fieldGroup">
              <label for="tcrNoInput">หมายเลขเอกสาร TCR <em>*</em></label>
              <input
                id="tcrNoInput"
                class="dialogInput"
                type="text"
                inputmode="latin"
                autocomplete="off"
                placeholder="TCR001"
                maxlength="30"
              >
            </div>
          </div>

          <div class="helpText">
            ECD/TCR ใช้ได้เฉพาะ A-Z, a-z, 0-9 ห้ามเว้นวรรคและห้ามอักขระพิเศษ
          </div>

          <div class="fieldGroup">
            <label>รูปหลักฐาน <em>*</em></label>

            <div class="evidenceControl">
              <button id="openCameraBtn" type="button" class="secondaryBtn">
                เปิดกล้อง
              </button>

              <button id="pickGalleryBtn" type="button" class="secondaryBtn">
                เลือกรูปจากเครื่อง
              </button>

              <span id="evidenceCountText" class="evidenceCount">
                ยังไม่ได้เลือกรูป
              </span>
            </div>

            <div id="inlineCameraPanel" class="inlineCameraPanel isHidden">
              <video
                id="inlineCameraVideo"
                class="inlineCameraVideo"
                autoplay
                playsinline
                muted
              ></video>

              <canvas id="inlineCameraCanvas" class="inlineCameraCanvas"></canvas>

              <div class="inlineCameraActions">
                <button id="captureCameraBtn" type="button" class="primaryBtn">
                  ถ่ายภาพ
                </button>

                <button id="closeCameraBtn" type="button" class="secondaryBtn">
                  ปิดกล้อง
                </button>
              </div>

              <div class="helpText">
                จัดภาพให้ชัดเจน แล้วกด “ถ่ายภาพ” รูปจะถูกเพิ่มในรายการด้านล่าง
              </div>
            </div>

            <div class="helpText">ต้องมีอย่างน้อย 1 รูป และสูงสุด 4 รูป</div>
            <div id="evidencePreviewGrid" class="evidencePreviewGrid"></div>
          </div>

          <div class="fieldGroup">
            <label for="noteInput">หมายเหตุ</label>
            <textarea
              id="noteInput"
              class="dialogTextarea"
              rows="3"
              placeholder="ระบุหมายเหตุเพิ่มเติมถ้ามี"
            ></textarea>
          </div>
        </section>
      </div>
    `;
  }

  function buildBrandOptionsHtml() {
    const brands = state.options.brands || [];

    if (!brands.length) {
      return `<div class="optionMissing">ไม่พบตัวเลือก Brand ในชีท Brand</div>`;
    }

    return brands.map((b) => {
      const brand = escapeHtml(b.brand || "");
      const imageUrl = escapeAttr(b.imageUrl || "");

      return `
        <button type="button" class="brandOption" data-brand="${brand}">
          <div
            class="brandImageBox"
            style="${imageUrl ? `--brand-img: url('${imageUrl}');` : ""}"
          >
            ${
              imageUrl
                ? `<img class="brandFallbackImg" src="${imageUrl}" alt="${brand}" loading="lazy">`
                : `<span>${brand}</span>`
            }
          </div>
          <strong>${brand}</strong>
        </button>
      `;
    }).join("");
  }

  function buildQtyOptionsHtml() {
    let qtyList = state.options.palletQty || [];

    qtyList = qtyList
      .map((qty) => Number(qty))
      .filter((qty) => Number.isFinite(qty) && qty > 0)
      .sort((a, b) => a - b);

    if (!qtyList.length) {
      qtyList = DEFAULT_PALLET_QTY.slice();
    }

    return qtyList.map((qty) => {
      return `<button type="button" class="qtyChip" data-qty="${qty}">${qty}</button>`;
    }).join("");
  }

  function dialogInfo(label, value) {
    return `
      <div class="dialogInfoItem">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(value || "-")}</strong>
      </div>
    `;
  }

  function initDialogEvents(row) {
    const brandButtons = document.querySelectorAll(".brandOption");
    const qtyButtons = document.querySelectorAll(".qtyChip");

    const customQtyInput = $("customQtyInput");
    const ecdNameInput = $("ecdNameInput");
    const tcrNoInput = $("tcrNoInput");

    const manageDataBtn = $("manageDataBtn");
    const manageMenu = $("manageMenu");
    const suppressInboundBtn = $("suppressInboundBtn");

    const openCameraBtn = $("openCameraBtn");
    const captureCameraBtn = $("captureCameraBtn");
    const closeCameraBtn = $("closeCameraBtn");
    const pickGalleryBtn = $("pickGalleryBtn");

    brandButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        brandButtons.forEach((b) => b.classList.remove("isSelected"));
        btn.classList.add("isSelected");
        state.selectedBrand = String(btn.dataset.brand || "").trim().toUpperCase();
        clearDialogNotice();
      });
    });

    qtyButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        qtyButtons.forEach((b) => b.classList.remove("isSelected"));
        btn.classList.add("isSelected");

        const qty = String(btn.dataset.qty || "").trim();

        if (qty === "custom") {
          state.selectedQty = "custom";

          if (customQtyInput) {
            customQtyInput.classList.remove("isHidden");
            setTimeout(() => customQtyInput.focus(), 50);
          }
        } else {
          state.selectedQty = qty;

          if (customQtyInput) {
            customQtyInput.classList.add("isHidden");
            customQtyInput.value = "";
          }
        }

        clearDialogNotice();
      });
    });

    if (ecdNameInput) {
      ecdNameInput.addEventListener("input", () => {
        ecdNameInput.value = ecdNameInput.value
          .replace(/[^A-Za-z0-9]/g, "")
          .toUpperCase();

        clearDialogNotice();
      });
    }

    if (tcrNoInput) {
      tcrNoInput.addEventListener("input", () => {
        tcrNoInput.value = tcrNoInput.value
          .replace(/[^A-Za-z0-9]/g, "")
          .toUpperCase();

        clearDialogNotice();
      });
    }

    if (manageDataBtn && manageMenu) {
      manageDataBtn.addEventListener("click", (ev) => {
        ev.stopPropagation();
        manageMenu.classList.toggle("isHidden");
      });
    }

    if (suppressInboundBtn) {
      suppressInboundBtn.addEventListener("click", async () => {
        await handleSuppressInbound(row);
      });
    }

    if (openCameraBtn) {
      openCameraBtn.addEventListener("click", async () => {
        await openInlineCamera();
      });
    }

    if (captureCameraBtn) {
      captureCameraBtn.addEventListener("click", async () => {
        await captureInlineCameraImage();
      });
    }

    if (closeCameraBtn) {
      closeCameraBtn.addEventListener("click", () => {
        stopInlineCamera();
      });
    }

    if (pickGalleryBtn) {
      pickGalleryBtn.addEventListener("click", () => {
        if (!els.uploadInput) {
          showDialogNotice("ไม่พบช่องเลือกรูป กรุณาตรวจสอบ index.html ว่ามี input id=\"uploadInput\"", "error");
          return;
        }

        els.uploadInput.value = "";
        els.uploadInput.click();
      });
    }

    updateEvidencePreview();
  }

  async function collectAndValidateDialogData(row) {
    const customQtyInput = $("customQtyInput");
    const ecdNameInput = $("ecdNameInput");
    const tcrNoInput = $("tcrNoInput");
    const noteInput = $("noteInput");

    const brandOut = String(state.selectedBrand || "").trim().toUpperCase();

    if (!brandOut) {
      throw new Error("กรุณาเลือกยี่ห้อพาเลทขาออก");
    }

    let qtyOut = 0;

    if (state.selectedQty === "custom") {
      qtyOut = Number(customQtyInput ? customQtyInput.value || 0 : 0);
    } else {
      qtyOut = Number(state.selectedQty || 0);
    }

    if (!Number.isFinite(qtyOut) || qtyOut <= 0) {
      throw new Error("กรุณาระบุจำนวนพาเลทขาออกเป็นตัวเลขมากกว่า 0");
    }

    qtyOut = Math.floor(qtyOut);

    const ecdName = String(ecdNameInput ? ecdNameInput.value || "" : "")
      .trim()
      .toUpperCase();

    if (!ecdName) {
      throw new Error("กรุณากรอกหมายเลขเอกสาร ECD");
    }

    if (!ECD_REGEX.test(ecdName)) {
      throw new Error("หมายเลขเอกสาร ECD กรอกได้เฉพาะตัวอักษรภาษาอังกฤษและตัวเลขเท่านั้น");
    }

    const tcrNo = String(tcrNoInput ? tcrNoInput.value || "" : "")
      .trim()
      .toUpperCase();

    if (!tcrNo) {
      throw new Error("กรุณากรอกหมายเลขเอกสาร TCR");
    }

    if (!TCR_REGEX.test(tcrNo)) {
      throw new Error("หมายเลขเอกสาร TCR กรอกได้เฉพาะตัวอักษรภาษาอังกฤษและตัวเลขเท่านั้น");
    }

    if (state.selectedEvidenceFiles.length < CONFIG.MIN_IMAGES) {
      throw new Error("กรุณาแนบรูปหลักฐานอย่างน้อย 1 รูป");
    }

    if (state.selectedEvidenceFiles.length > CONFIG.MAX_IMAGES) {
      throw new Error("แนบรูปหลักฐานได้สูงสุด 4 รูปเท่านั้น");
    }

    if (!state.selectedEvidencePayloads.length) {
      showDialogNotice("กำลังเตรียมรูปภาพ กรุณารอสักครู่...", "info");
      state.selectedEvidencePayloads = await compressSelectedImages(state.selectedEvidenceFiles);
    }

    if (state.selectedEvidencePayloads.length < CONFIG.MIN_IMAGES) {
      throw new Error("ไม่สามารถเตรียมข้อมูลรูปภาพได้ กรุณาเลือกรูปใหม่");
    }

    clearDialogNotice();

    return {
      autoId: row.autoId,
      plateNo: row.plateNo || "",
      driverFullName: row.driverFullName || joinName(row) || "",
      brandOut,
      qtyOut,
      ecdName,
      tcrNo,
      recordedBy: state.currentUser,
      note: String(noteInput ? noteInput.value || "" : "").trim(),
      images: state.selectedEvidencePayloads
    };
  }

  /* =========================
   * EVIDENCE IMAGES
   * ========================= */

  async function handleEvidenceInputChange(e) {
    const files = Array.from(e.target.files || []);
    await addEvidenceFiles(files);
  }

  async function addEvidenceFiles(files) {
    const imageFiles = Array.from(files || []).filter((file) => {
      return file && file.type && file.type.indexOf("image/") === 0;
    });

    if (!imageFiles.length) {
      showDialogNotice("กรุณาเลือกเฉพาะไฟล์รูปภาพ", "error");
      return;
    }

    const remaining = CONFIG.MAX_IMAGES - state.selectedEvidenceFiles.length;

    if (remaining <= 0) {
      showDialogNotice("แนบรูปหลักฐานได้สูงสุด " + CONFIG.MAX_IMAGES + " รูปเท่านั้น", "warning");
      return;
    }

    let filesToAdd = imageFiles;

    if (imageFiles.length > remaining) {
      filesToAdd = imageFiles.slice(0, remaining);
      showDialogNotice("ระบบรับเพิ่มได้อีก " + remaining + " รูป รวมสูงสุด " + CONFIG.MAX_IMAGES + " รูป", "warning");
    } else {
      clearDialogNotice();
    }

    state.selectedEvidenceFiles = state.selectedEvidenceFiles.concat(filesToAdd);
    state.selectedEvidencePayloads = [];

    updateEvidencePreview();

    try {
      const countText = $("evidenceCountText");
      if (countText) countText.textContent = "กำลังเตรียมรูปภาพ...";

      state.selectedEvidencePayloads = await compressSelectedImages(state.selectedEvidenceFiles);

      updateEvidencePreview();

    } catch (err) {
      showDialogNotice(err.message || String(err), "error");
    }
  }

  async function openInlineCamera() {
    if (state.selectedEvidenceFiles.length >= CONFIG.MAX_IMAGES) {
      showDialogNotice("แนบรูปหลักฐานได้สูงสุด " + CONFIG.MAX_IMAGES + " รูปเท่านั้น", "warning");
      return;
    }

    const panel = $("inlineCameraPanel");
    const video = $("inlineCameraVideo");

    if (!panel || !video) {
      showDialogNotice("ไม่พบพื้นที่กล้อง กรุณาตรวจสอบ HTML ของฟอร์มรูปหลักฐาน", "error");
      return;
    }

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      showDialogNotice("เบราว์เซอร์ไม่รองรับกล้องสด ระบบจะเปิดกล้อง/เลือกรูปแบบพื้นฐานของเครื่องแทน", "warning");
      openCameraInputFallback();
      return;
    }

    try {
      stopInlineCamera();

      inlineCameraStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: "environment" },
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      });

      video.srcObject = inlineCameraStream;
      panel.classList.remove("isHidden");

      await video.play();

      showDialogNotice("เปิดกล้องแล้ว จัดภาพให้ชัดเจนแล้วกดถ่ายภาพ", "info");

    } catch (err) {
      stopInlineCamera();
      showDialogNotice("เปิดกล้องสดไม่ได้ ระบบจะเปิดเมนูถ่ายภาพ/เลือกรูปแบบพื้นฐานของเครื่องแทน", "warning");
      openCameraInputFallback();
    }
  }

  function openCameraInputFallback() {
    if (!els.cameraInput) return;

    els.cameraInput.value = "";
    els.cameraInput.click();
  }

  async function captureInlineCameraImage() {
    const video = $("inlineCameraVideo");
    const canvas = $("inlineCameraCanvas");

    if (!video || !canvas) {
      showDialogNotice("ไม่พบกล้อง กรุณาเปิดกล้องใหม่อีกครั้ง", "error");
      return;
    }

    if (!inlineCameraStream) {
      showDialogNotice("กรุณากดเปิดกล้องก่อนถ่ายภาพ", "warning");
      return;
    }

    if (state.selectedEvidenceFiles.length >= CONFIG.MAX_IMAGES) {
      showDialogNotice("แนบรูปหลักฐานได้สูงสุด " + CONFIG.MAX_IMAGES + " รูปเท่านั้น", "warning");
      stopInlineCamera();
      return;
    }

    const width = video.videoWidth || 1280;
    const height = video.videoHeight || 720;

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, width, height);

    const mimeType = CONFIG.IMAGE_OUTPUT_TYPE || "image/jpeg";
    const quality = Number(CONFIG.IMAGE_QUALITY || 0.78);
    const dataUrl = canvas.toDataURL(mimeType, quality);

    const file = dataUrlToFile(
      dataUrl,
      "camera_" + getNowDisplay().replace(/[\/:\s]/g, "") + ".jpg"
    );

    await addEvidenceFiles([file]);

    showDialogNotice("ถ่ายภาพแล้ว รูปถูกเพิ่มในรายการด้านล่าง", "success");

    if (state.selectedEvidenceFiles.length >= CONFIG.MAX_IMAGES) {
      stopInlineCamera();
    }
  }

  function stopInlineCamera() {
    if (inlineCameraStream) {
      inlineCameraStream.getTracks().forEach((track) => {
        try {
          track.stop();
        } catch (err) {
          // ignore
        }
      });
    }

    inlineCameraStream = null;

    const video = $("inlineCameraVideo");
    const panel = $("inlineCameraPanel");

    if (video) {
      try {
        video.pause();
        video.srcObject = null;
      } catch (err) {
        // ignore
      }
    }

    if (panel) {
      panel.classList.add("isHidden");
    }
  }

  function updateEvidencePreview() {
    const grid = $("evidencePreviewGrid");
    const countText = $("evidenceCountText");

    if (countText) {
      const count = state.selectedEvidenceFiles.length;
      countText.textContent = count
        ? `เลือกรูปแล้ว ${count}/${CONFIG.MAX_IMAGES} รูป`
        : "ยังไม่ได้เลือกรูป";
    }

    if (!grid) return;

    grid.innerHTML = "";

    state.selectedEvidenceFiles.forEach((file, index) => {
      const url = URL.createObjectURL(file);

      const item = document.createElement("div");
      item.className = "evidenceThumb";
      item.innerHTML = `
        <img src="${url}" alt="รูปหลักฐาน ${index + 1}">
        <button type="button" class="removeEvidenceBtn" data-index="${index}" aria-label="ลบรูป">×</button>
      `;

      const removeBtn = item.querySelector(".removeEvidenceBtn");

      if (removeBtn) {
        removeBtn.addEventListener("click", () => {
          URL.revokeObjectURL(url);
          removeEvidenceAt(index);
        });
      }

      grid.appendChild(item);
    });
  }

  function removeEvidenceAt(index) {
    state.selectedEvidenceFiles.splice(index, 1);
    state.selectedEvidencePayloads = [];
    updateEvidencePreview();

    if (state.selectedEvidenceFiles.length) {
      compressSelectedImages(state.selectedEvidenceFiles)
        .then((payloads) => {
          state.selectedEvidencePayloads = payloads;
          updateEvidencePreview();
        })
        .catch((err) => {
          console.error(err);
          showDialogNotice(err.message || String(err), "error");
        });
    }
  }

  async function compressSelectedImages(files) {
    const list = Array.from(files || []);

    if (list.length > CONFIG.MAX_IMAGES) {
      throw new Error("แนบรูปหลักฐานได้สูงสุด " + CONFIG.MAX_IMAGES + " รูปเท่านั้น");
    }

    const payloads = [];

    for (let i = 0; i < list.length; i++) {
      const file = list[i];
      const payload = await compressImageToPayload(file, i + 1);
      payloads.push(payload);
    }

    return payloads;
  }

  function compressImageToPayload(file, index) {
    return new Promise((resolve, reject) => {
      if (!file || !file.type || file.type.indexOf("image/") !== 0) {
        reject(new Error("พบไฟล์ที่ไม่ใช่รูปภาพ"));
        return;
      }

      const reader = new FileReader();

      reader.onload = () => {
        const img = new Image();

        img.onload = () => {
          try {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            const originalWidth = img.width || 1;
            const originalHeight = img.height || 1;

            const ratio = Math.min(
              CONFIG.IMAGE_MAX_WIDTH / originalWidth,
              CONFIG.IMAGE_MAX_HEIGHT / originalHeight,
              1
            );

            const targetWidth = Math.max(1, Math.round(originalWidth * ratio));
            const targetHeight = Math.max(1, Math.round(originalHeight * ratio));

            canvas.width = targetWidth;
            canvas.height = targetHeight;

            ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

            const mimeType = CONFIG.IMAGE_OUTPUT_TYPE || "image/jpeg";
            const quality = Number(CONFIG.IMAGE_QUALITY || 0.78);

            const dataUrl = canvas.toDataURL(mimeType, quality);
            const base64 = dataUrl.split(",").pop();

            resolve({
              name: buildImageName(file.name, index),
              mimeType,
              data: base64
            });

          } catch (err) {
            reject(err);
          }
        };

        img.onerror = () => {
          reject(new Error("ไม่สามารถอ่านรูปภาพได้"));
        };

        img.src = String(reader.result || "");
      };

      reader.onerror = () => {
        reject(new Error("ไม่สามารถอ่านไฟล์รูปภาพได้"));
      };

      reader.readAsDataURL(file);
    });
  }

  function buildImageName(originalName, index) {
    const safeName = String(originalName || "evidence")
      .replace(/\.[^.]+$/, "")
      .replace(/[^A-Za-z0-9ก-ฮะ-์_-]+/g, "_")
      .slice(0, 40);

    return `evidence_${String(index).padStart(2, "0")}_${safeName}.jpg`;
  }

  function dataUrlToFile(dataUrl, filename) {
    const parts = String(dataUrl || "").split(",");
    const header = parts[0] || "";
    const data = parts[1] || "";

    const mimeMatch = header.match(/data:(.*?);base64/);
    const mimeType = mimeMatch ? mimeMatch[1] : "image/jpeg";

    const binary = atob(data);
    const length = binary.length;
    const bytes = new Uint8Array(length);

    for (let i = 0; i < length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }

    return new File([bytes], filename || "camera.jpg", {
      type: mimeType
    });
  }

  /* =========================
   * MANAGE / SUPPRESS / EDIT
   * ========================= */

  async function handleSuppressInbound(row) {
    if (!row || !row.autoId) {
      showDialogNotice("ไม่พบ Auto ID ของรายการนี้", "error");
      return;
    }

    const confirm = await Swal.fire({
      icon: "warning",
      title: "ซ่อนรายการนี้?",
      html: `
        <div class="confirmBox">
          <div><span>Auto ID</span><strong>${escapeHtml(row.autoId || "-")}</strong></div>
          <div><span>ทะเบียนรถ</span><strong>${escapeHtml(row.plateNo || "-")}</strong></div>
          <div><span>พขร.</span><strong>${escapeHtml(row.driverFullName || joinName(row) || "-")}</strong></div>
        </div>

        <div class="confirmNote">
          รายการนี้จะไม่แสดงในฟอร์มขาออกอีก แต่ข้อมูลในชีทขาเข้าจะไม่ถูกแก้ไข
        </div>
      `,
      input: "textarea",
      inputLabel: "เหตุผลการซ่อนรายการ",
      inputPlaceholder: "เช่น คนขับกดเข้าผิด / ไม่ได้มารับพาเลท / รายการซ้ำ",
      inputAttributes: {
        maxlength: 250
      },
      showCancelButton: true,
      confirmButtonText: "ยืนยันซ่อน",
      cancelButtonText: "ยกเลิก",
      reverseButtons: true,
      inputValidator: (value) => {
        if (!String(value || "").trim()) {
          return "กรุณาระบุเหตุผลการซ่อนรายการ";
        }

        return null;
      }
    });

    if (!confirm.isConfirmed) return;

    const reason = String(confirm.value || "").trim();

    try {
      Swal.fire({
        title: "กำลังซ่อนรายการ",
        html: "กรุณารอสักครู่ ระบบกำลังบันทึกข้อมูลการซ่อนรายการ",
        allowOutsideClick: false,
        allowEscapeKey: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      const res = await apiPost("/api/suppress-inbound", {
        autoId: row.autoId,
        suppressedBy: state.currentUser,
        recordedBy: state.currentUser,
        reason
      }, 60000);

      if (!res.ok) {
        throw new Error(res.message || "ซ่อนรายการไม่สำเร็จ");
      }

      removeInboundRowFromState(row.autoId);

      await Swal.fire({
        icon: "success",
        title: "ซ่อนรายการสำเร็จ",
        html: `
          <div class="successSummary">
            <div><span>Auto ID</span><strong>${escapeHtml(res.autoId || row.autoId || "-")}</strong></div>
            <div><span>ทะเบียนรถ</span><strong>${escapeHtml(res.plateNo || row.plateNo || "-")}</strong></div>
            <div><span>ผู้ซ่อน</span><strong>${escapeHtml(res.suppressedBy || state.currentUser || "-")}</strong></div>
            <div><span>เวลา</span><strong>${escapeHtml(res.suppressedAt || "-")}</strong></div>
          </div>
        `,
        confirmButtonText: "ตกลง"
      });

    } catch (err) {
      await showError(err);
    }
  }

  async function handleEditOutboundSearch() {
    stopInlineCamera();

    const todayIso = toDateInputValue(new Date());

    const result = await Swal.fire({
      title: "ค้นหารายการขาออกย้อนหลัง",
      html: `
        <div class="editSearchBox">
          <div class="fieldGroup">
            <label for="outboundSearchDate">เลือกวันที่บันทึกขาออก</label>
            <input
              id="outboundSearchDate"
              class="dialogInput"
              type="date"
              value="${escapeAttr(todayIso)}"
            >
          </div>

          <div class="confirmNote">
            เลือกวันที่ที่ต้องการตรวจสอบ ระบบจะค้นหารายการพาเลทขาออกที่บันทึกไว้แล้วในวันนั้น
          </div>
        </div>
      `,
      width: 560,
      showCancelButton: true,
      confirmButtonText: "ค้นหารายการ",
      cancelButtonText: "ยกเลิก",
      reverseButtons: true,
      focusConfirm: false,
      preConfirm: () => {
        const isoDate = getDateInputIsoValue("outboundSearchDate");

        if (!isoDate) {
          Swal.showValidationMessage("กรุณาเลือกวันที่ให้ถูกต้อง");
          return false;
        }

        return {
          apiDate: isoDate,
          displayDate: isoDateToDisplayDate(isoDate)
        };
      }
    });

    if (!result.isConfirmed || !result.value) return;

    await openOutboundHistoryDialog(result.value);
  }

  async function openOutboundHistoryDialog(datePayload) {
    const normalizedPayload = normalizeDatePayload(datePayload);
    const apiDate = normalizedPayload.apiDate;
    const displayDate = normalizedPayload.displayDate;

    if (!apiDate) {
      await Swal.fire({
        icon: "warning",
        title: "ไม่พบวันที่",
        text: "กรุณาเลือกวันที่ที่ต้องการค้นหาอีกครั้ง",
        confirmButtonText: "ตกลง"
      });
      return;
    }

    try {
      Swal.fire({
        title: "กำลังค้นหารายการ",
        html: `
          <div class="confirmNote">
            กำลังค้นหาข้อมูลวันที่ ${escapeHtml(displayDate || apiDate)}
          </div>
        `,
        allowOutsideClick: false,
        allowEscapeKey: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      const res = await apiGet(
        "/api/outbound-by-date?date=" + encodeURIComponent(apiDate) + "&_t=" + Date.now(),
        60000
      );

      if (!res.ok) {
        throw new Error(res.message || "ค้นหารายการขาออกย้อนหลังไม่สำเร็จ");
      }

      const rows = Array.isArray(res.rows) ? res.rows : [];
      const resultDate = res.date || displayDate || apiDate;

      await Swal.fire({
        title: "รายการขาออกวันที่ " + escapeHtml(resultDate),
        html: buildOutboundHistoryHtml(rows, resultDate),
        width: 900,
        showConfirmButton: false,
        showCloseButton: true,
        didOpen: () => {
          initOutboundHistoryEvents(rows, {
            apiDate,
            displayDate: resultDate
          });
        }
      });

    } catch (err) {
      await showError(err);
    }
  }

  function buildOutboundHistoryHtml(rows, dateText) {
    if (!rows.length) {
      return `
        <div class="emptyEditResult">
          <div class="emptyIcon">✓</div>
          <h3>ไม่พบรายการขาออก</h3>
          <p>ไม่พบข้อมูลที่บันทึกขาออกในวันที่ ${escapeHtml(dateText)}</p>

          <button id="searchOutboundAgainBtn" type="button" class="secondaryBtn">
            เลือกวันที่ใหม่
          </button>
        </div>
      `;
    }

    const cards = rows.map((row) => {
      const updatedText = row.updatedBy || row.updatedAt
        ? `
          <div class="editAuditLine">
            แก้ไขล่าสุด: ${escapeHtml(row.updatedBy || "-")}
            ${row.updatedAt ? " / " + escapeHtml(row.updatedAt) : ""}
          </div>
        `
        : `
          <div class="editAuditLine muted">
            ยังไม่มีประวัติการแก้ไข
          </div>
        `;

      return `
        <article class="outboundHistoryCard" data-outbound-id="${escapeAttr(row.outboundId || "")}">
          <div class="outboundHistoryHead">
            <div>
              <div class="plateText">${escapeHtml(row.plateNo || "-")}</div>
              <div class="autoIdText">Outbound ID: ${escapeHtml(row.outboundId || "-")}</div>
              <div class="autoIdText">Auto ID: ${escapeHtml(row.autoId || "-")}</div>
            </div>

            <span class="brandBadge ${String(row.brandOut || "").toUpperCase() === "CHEP" ? "brandChep" : "brandLoscam"}">
              ${escapeHtml(row.brandOut || "-")}
            </span>
          </div>

          <div class="dialogInfoGrid outboundHistoryInfo">
            ${dialogInfo("เวลาออก", row.timestampOut)}
            ${dialogInfo("พขร.", row.driverFullName)}
            ${dialogInfo("จำนวน", row.qtyOut)}
            ${dialogInfo("ECD", row.ecdName)}
            ${dialogInfo("TCR", row.tcrNo)}
            ${dialogInfo("ผู้บันทึก", row.recordedBy)}
          </div>

          ${updatedText}

          <div class="outboundHistoryActions">
            <button
              type="button"
              class="secondaryBtn editOutboundRowBtn"
              data-action="edit"
              data-outbound-id="${escapeAttr(row.outboundId || "")}"
            >
              แก้ไข
            </button>

            <button
              type="button"
              class="secondaryBtn dangerSoftBtn deleteOutboundRowBtn"
              data-action="delete"
              data-outbound-id="${escapeAttr(row.outboundId || "")}"
            >
              ลบรายการนี้
            </button>
          </div>
        </article>
      `;
    }).join("");

    return `
      <div class="outboundHistoryWrap">
        <div class="outboundHistoryToolbar">
          <button id="searchOutboundAgainBtn" type="button" class="secondaryBtn">
            เลือกวันที่ใหม่
          </button>

          <span>พบ ${rows.length} รายการ</span>
        </div>

        <div id="outboundHistoryList" class="outboundHistoryList">
          ${cards}
        </div>
      </div>
    `;
  }

  function initOutboundHistoryEvents(rows, datePayload) {
    const list = $("outboundHistoryList");
    const searchAgainBtn = $("searchOutboundAgainBtn");
    const normalizedPayload = normalizeDatePayload(datePayload);

    if (searchAgainBtn) {
      searchAgainBtn.addEventListener("click", async () => {
        await handleEditOutboundSearch();
      });
    }

    if (!list) return;

    const rowMap = {};

    rows.forEach((row) => {
      rowMap[String(row.outboundId || "").trim()] = row;
    });

    list.addEventListener("click", async (ev) => {
      const btn = ev.target.closest("button[data-action]");
      if (!btn) return;

      const action = String(btn.dataset.action || "");
      const outboundId = String(btn.dataset.outboundId || "").trim();
      const row = rowMap[outboundId];

      if (!row) {
        await Swal.fire({
          icon: "error",
          title: "ไม่พบข้อมูลรายการ",
          text: "ไม่พบ Outbound ID ที่เลือก",
          confirmButtonText: "ตกลง"
        });
        return;
      }

      if (action === "edit") {
        await openEditOutboundDialog(row, normalizedPayload);
        return;
      }

      if (action === "delete") {
        await confirmDeleteOutbound(row, normalizedPayload);
      }
    });
  }

  async function openEditOutboundDialog(row, datePayload) {
    const brandOptions = buildBrandSelectOptions(row.brandOut);

    const result = await Swal.fire({
      title: "แก้ไขรายการขาออก",
      html: `
        <div class="editOutboundDialog">
          <section class="dialogSection">
            <h3>ข้อมูลอ้างอิง</h3>

            <div class="dialogInfoGrid">
              ${dialogInfo("Outbound ID", row.outboundId)}
              ${dialogInfo("Auto ID", row.autoId)}
              ${dialogInfo("ทะเบียนรถ", row.plateNo)}
              ${dialogInfo("พขร.", row.driverFullName)}
              ${dialogInfo("เวลาออก", row.timestampOut)}
              ${dialogInfo("Duration", row.duration)}
            </div>

            <div class="confirmNote">
              ข้อมูลเวลาออก, Duration, Auto ID, ทะเบียนรถ และข้อมูล พขร. จะไม่ถูกแก้ไข
            </div>
          </section>

          <section class="dialogSection">
            <h3>ข้อมูลที่แก้ไขได้</h3>

            <div class="docPairGrid">
              <div class="fieldGroup">
                <label for="editBrandOutInput">ยี่ห้อพาเลทขาออก <em>*</em></label>
                <select id="editBrandOutInput" class="dialogInput">
                  ${brandOptions}
                </select>
              </div>

              <div class="fieldGroup">
                <label for="editQtyOutInput">จำนวนพาเลทขาออก <em>*</em></label>
                <input
                  id="editQtyOutInput"
                  class="dialogInput"
                  type="number"
                  inputmode="numeric"
                  min="1"
                  step="1"
                  value="${escapeAttr(row.qtyOut || "")}"
                >
              </div>
            </div>

            <div class="docPairGrid">
              <div class="fieldGroup">
                <label for="editEcdInput">หมายเลขเอกสาร ECD <em>*</em></label>
                <input
                  id="editEcdInput"
                  class="dialogInput"
                  type="text"
                  inputmode="latin"
                  maxlength="30"
                  value="${escapeAttr(row.ecdName || "")}"
                >
              </div>

              <div class="fieldGroup">
                <label for="editTcrInput">หมายเลขเอกสาร TCR <em>*</em></label>
                <input
                  id="editTcrInput"
                  class="dialogInput"
                  type="text"
                  inputmode="latin"
                  maxlength="30"
                  value="${escapeAttr(row.tcrNo || "")}"
                >
              </div>
            </div>

            <div class="fieldGroup">
              <label for="editNoteInput">หมายเหตุ</label>
              <textarea
                id="editNoteInput"
                class="dialogTextarea"
                rows="3"
              >${escapeHtml(row.note || "")}</textarea>
            </div>

            <div class="helpText">
              รอบนี้แก้ไขเฉพาะข้อมูลตัวอักษร/จำนวนก่อน ส่วนรูปหลักฐานยังคงของเดิม
            </div>
          </section>
        </div>
      `,
      width: 820,
      showCancelButton: true,
      confirmButtonText: "บันทึกการแก้ไข",
      cancelButtonText: "ยกเลิก",
      reverseButtons: true,
      focusConfirm: false,
      didOpen: () => {
        initEditOutboundInputFilters();
      },
      preConfirm: () => {
        return collectEditOutboundPayload(row);
      }
    });

    if (!result.isConfirmed || !result.value) return;

    await submitUpdateOutbound(result.value, datePayload);
  }

  function initEditOutboundInputFilters() {
    const ecd = $("editEcdInput");
    const tcr = $("editTcrInput");

    if (ecd) {
      ecd.addEventListener("input", () => {
        ecd.value = ecd.value.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
      });
    }

    if (tcr) {
      tcr.addEventListener("input", () => {
        tcr.value = tcr.value.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
      });
    }
  }

  function collectEditOutboundPayload(row) {
    const brandInput = $("editBrandOutInput");
    const qtyInput = $("editQtyOutInput");
    const ecdInput = $("editEcdInput");
    const tcrInput = $("editTcrInput");
    const noteInput = $("editNoteInput");

    const brandOut = String(brandInput ? brandInput.value || "" : "")
      .trim()
      .toUpperCase();

    const qtyOut = Number(qtyInput ? qtyInput.value || 0 : 0);

    const ecdName = String(ecdInput ? ecdInput.value || "" : "")
      .trim()
      .toUpperCase();

    const tcrNo = String(tcrInput ? tcrInput.value || "" : "")
      .trim()
      .toUpperCase();

    const note = String(noteInput ? noteInput.value || "" : "").trim();

    if (!brandOut) {
      Swal.showValidationMessage("กรุณาเลือกยี่ห้อพาเลทขาออก");
      return false;
    }

    if (!Number.isFinite(qtyOut) || qtyOut <= 0) {
      Swal.showValidationMessage("กรุณาระบุจำนวนพาเลทขาออกเป็นตัวเลขมากกว่า 0");
      return false;
    }

    if (!ecdName || !ECD_REGEX.test(ecdName)) {
      Swal.showValidationMessage("ECD ใช้ได้เฉพาะตัวอักษรภาษาอังกฤษและตัวเลขเท่านั้น");
      return false;
    }

    if (!tcrNo || !TCR_REGEX.test(tcrNo)) {
      Swal.showValidationMessage("TCR ใช้ได้เฉพาะตัวอักษรภาษาอังกฤษและตัวเลขเท่านั้น");
      return false;
    }

    return {
      outboundId: row.outboundId,
      brandOut,
      qtyOut: Math.floor(qtyOut),
      ecdName,
      tcrNo,
      note,
      updatedBy: state.currentUser,
      recordedBy: state.currentUser
    };
  }

  async function submitUpdateOutbound(payload, datePayload) {
    try {
      Swal.fire({
        title: "กำลังบันทึกการแก้ไข",
        html: "กรุณารอสักครู่ ระบบกำลังบันทึกข้อมูลและสร้างประวัติการแก้ไข",
        allowOutsideClick: false,
        allowEscapeKey: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      const res = await apiPost("/api/update-outbound", payload, 60000);

      if (!res.ok) {
        throw new Error(res.message || "แก้ไขรายการไม่สำเร็จ");
      }

      await Swal.fire({
        icon: "success",
        title: "แก้ไขสำเร็จ",
        html: `
          <div class="successSummary">
            <div><span>Outbound ID</span><strong>${escapeHtml(res.outboundId || payload.outboundId || "-")}</strong></div>
            <div><span>ทะเบียนรถ</span><strong>${escapeHtml(res.plateNo || "-")}</strong></div>
            <div><span>ผู้แก้ไข</span><strong>${escapeHtml(res.updatedBy || state.currentUser || "-")}</strong></div>
            <div><span>เวลาแก้ไข</span><strong>${escapeHtml(res.updatedAt || "-")}</strong></div>
          </div>
        `,
        confirmButtonText: "กลับไปดูรายการ"
      });

      await openOutboundHistoryDialog(datePayload);

    } catch (err) {
      await showError(err);
    }
  }

  async function confirmDeleteOutbound(row, datePayload) {
    const confirm = await Swal.fire({
      icon: "warning",
      title: "ลบรายการขาออกนี้?",
      html: `
        <div class="confirmBox">
          <div><span>Outbound ID</span><strong>${escapeHtml(row.outboundId || "-")}</strong></div>
          <div><span>ทะเบียนรถ</span><strong>${escapeHtml(row.plateNo || "-")}</strong></div>
          <div><span>พขร.</span><strong>${escapeHtml(row.driverFullName || "-")}</strong></div>
          <div><span>เวลาออก</span><strong>${escapeHtml(row.timestampOut || "-")}</strong></div>
        </div>

        <div class="confirmNote">
          ระบบจะลบแบบ Soft Delete เท่านั้น ข้อมูลจะยังอยู่ใน Sheet1 พร้อมประวัติ AuditLog และจะไม่แก้ไข Sheet5
        </div>
      `,
      input: "textarea",
      inputLabel: "เหตุผลการลบ",
      inputPlaceholder: "เช่น บันทึกผิดรายการ / จำนวนผิดมาก / ยกเลิกเอกสาร",
      inputAttributes: {
        maxlength: 250
      },
      showCancelButton: true,
      confirmButtonText: "ยืนยันลบ",
      cancelButtonText: "ยกเลิก",
      reverseButtons: true,
      inputValidator: (value) => {
        if (!String(value || "").trim()) {
          return "กรุณาระบุเหตุผลการลบ";
        }

        return null;
      }
    });

    if (!confirm.isConfirmed) return;

    const reason = String(confirm.value || "").trim();

    try {
      Swal.fire({
        title: "กำลังลบรายการ",
        html: "กรุณารอสักครู่ ระบบกำลังบันทึกสถานะลบและ AuditLog",
        allowOutsideClick: false,
        allowEscapeKey: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      const res = await apiPost("/api/delete-outbound", {
        outboundId: row.outboundId,
        deletedBy: state.currentUser,
        recordedBy: state.currentUser,
        reason
      }, 60000);

      if (!res.ok) {
        throw new Error(res.message || "ลบรายการไม่สำเร็จ");
      }

      await Swal.fire({
        icon: "success",
        title: "ลบรายการสำเร็จ",
        html: `
          <div class="successSummary">
            <div><span>Outbound ID</span><strong>${escapeHtml(res.outboundId || row.outboundId || "-")}</strong></div>
            <div><span>ทะเบียนรถ</span><strong>${escapeHtml(res.plateNo || row.plateNo || "-")}</strong></div>
            <div><span>ผู้ลบ</span><strong>${escapeHtml(res.deletedBy || state.currentUser || "-")}</strong></div>
            <div><span>เวลาลบ</span><strong>${escapeHtml(res.deletedAt || "-")}</strong></div>
          </div>
        `,
        confirmButtonText: "กลับไปดูรายการ"
      });

      await openOutboundHistoryDialog(datePayload);

    } catch (err) {
      await showError(err);
    }
  }

  function buildBrandSelectOptions(currentBrand) {
    const current = String(currentBrand || "").trim().toUpperCase();

    let brands = (state.options.brands || [])
      .map((b) => String(b.brand || "").trim().toUpperCase())
      .filter(Boolean);

    brands = Array.from(new Set(brands.concat(["LOSCAM", "CHEP"])));

    return brands.map((brand) => {
      const selected = brand === current ? "selected" : "";
      return `<option value="${escapeAttr(brand)}" ${selected}>${escapeHtml(brand)}</option>`;
    }).join("");
  }

  function removeInboundRowFromState(autoId) {
    const target = String(autoId || "").trim();

    if (!target) return;

    state.inboundRows = state.inboundRows.filter((r) => String(r.autoId || "").trim() !== target);
    state.filteredRows = state.filteredRows.filter((r) => String(r.autoId || "").trim() !== target);

    renderInboundRows(state.filteredRows);
    updateSummary();
  }

  /* =========================
   * SUBMIT
   * ========================= */

  async function submitOutRecord(payload) {
    try {
      state.isSubmitting = true;

      Swal.fire({
        title: "กำลังบันทึกข้อมูล",
        html: "กำลังอัปโหลดรูปและบันทึกข้อมูลขาออก กรุณารอจนกว่าระบบจะแจ้งผล",
        allowOutsideClick: false,
        allowEscapeKey: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      const res = await apiPost("/api/submit-out", payload, 240000);

      if (!res.ok) {
        throw new Error(res.message || "บันทึกข้อมูลไม่สำเร็จ");
      }

      await Swal.fire({
        icon: "success",
        title: "บันทึกสำเร็จ",
        html: `
          <div class="successSummary">
            <div><span>Outbound ID</span><strong>${escapeHtml(res.outboundId || "-")}</strong></div>
            <div><span>Auto ID</span><strong>${escapeHtml(res.autoId || "-")}</strong></div>
            <div><span>ทะเบียนรถ</span><strong>${escapeHtml(res.plateNo || payload.plateNo || "-")}</strong></div>
            <div><span>พขร.</span><strong>${escapeHtml(res.driverFullName || payload.driverFullName || "-")}</strong></div>
            <div><span>ECD</span><strong>${escapeHtml(res.ecdName || payload.ecdName || "-")}</strong></div>
            <div><span>TCR</span><strong>${escapeHtml(res.tcrNo || payload.tcrNo || "-")}</strong></div>
            <div><span>เวลาออก</span><strong>${escapeHtml(res.timestampOut || "-")}</strong></div>
            <div><span>Duration</span><strong>${escapeHtml(res.duration || "-")}</strong></div>
          </div>
        `,
        confirmButtonText: "ตกลง"
      });

      await loadInboundRows(true);

    } catch (err) {
      await showError(err);
    } finally {
      state.isSubmitting = false;
    }
  }

  /* =========================
   * API
   * ========================= */

  async function apiGet(path, timeoutMs = 60000) {
    const url = buildApiUrl(path);

    const res = await fetchWithTimeout(url, {
      method: "GET",
      headers: {
        "Accept": "application/json"
      },
      cache: "no-store"
    }, timeoutMs);

    return parseApiResponse(res);
  }

  async function apiPost(path, body, timeoutMs = 60000) {
    const url = buildApiUrl(path);

    const res = await fetchWithTimeout(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body || {}),
      cache: "no-store"
    }, timeoutMs);

    return parseApiResponse(res);
  }

  function buildApiUrl(path) {
    const base = String(CONFIG.API_BASE || "").replace(/\/+$/, "");

    if (!base || base.indexOf("YOUR-WORKER") >= 0) {
      throw new Error("ยังไม่ได้ตั้งค่า API_BASE ใน index.html ให้เป็น URL ของ Cloudflare Worker จริง");
    }

    return base + path;
  }

  async function parseApiResponse(res) {
    const text = await res.text();

    let data;

    try {
      data = JSON.parse(text);
    } catch (err) {
      throw new Error("API ไม่ได้คืนค่าเป็น JSON: " + text.slice(0, 300));
    }

    if (!res.ok && data && !data.message) {
      data.message = "เกิดข้อผิดพลาดจาก API";
    }

    return data;
  }

  function fetchWithTimeout(url, options, timeoutMs) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs || 60000);

    return fetch(url, {
      ...options,
      signal: controller.signal
    })
      .catch((err) => {
        if (err && err.name === "AbortError") {
          throw new Error("เชื่อมต่อ API เกินเวลาที่กำหนด กรุณาลองใหม่");
        }

        throw err;
      })
      .finally(() => {
        clearTimeout(timer);
      });
  }

  /* =========================
   * DATE HELPERS
   * ========================= */

  function getDateInputIsoValue(inputId) {
    const input = $(inputId);
    if (!input) return "";

    const raw = String(input.value || "").trim();

    if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) {
      return raw;
    }

    let m = raw.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);

    if (m) {
      const dd = String(Number(m[1])).padStart(2, "0");
      const mm = String(Number(m[2])).padStart(2, "0");
      const yyyy = String(Number(m[3]));
      return `${yyyy}-${mm}-${dd}`;
    }

    m = raw.match(/^(\d{1,2})[-\s]([A-Za-z]{3,})[-\s](\d{4})$/);

    if (m) {
      const monthMap = {
        jan: "01",
        january: "01",
        feb: "02",
        february: "02",
        mar: "03",
        march: "03",
        apr: "04",
        april: "04",
        may: "05",
        jun: "06",
        june: "06",
        jul: "07",
        july: "07",
        aug: "08",
        august: "08",
        sep: "09",
        sept: "09",
        september: "09",
        oct: "10",
        october: "10",
        nov: "11",
        november: "11",
        dec: "12",
        december: "12"
      };

      const dd = String(Number(m[1])).padStart(2, "0");
      const mm = monthMap[String(m[2]).toLowerCase()];
      const yyyy = String(Number(m[3]));

      if (mm) return `${yyyy}-${mm}-${dd}`;
    }

    const d = new Date(raw);

    if (!isNaN(d.getTime())) {
      return toDateInputValue(d);
    }

    return "";
  }

  function isoDateToDisplayDate(isoDate) {
    const text = String(isoDate || "").trim();
    const m = text.match(/^(\d{4})-(\d{2})-(\d{2})$/);

    if (!m) return "";

    return `${m[3]}/${m[2]}/${m[1]}`;
  }

  function displayDateToIsoDate(displayDate) {
    const text = String(displayDate || "").trim();

    const m = text.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);

    if (!m) return text;

    const dd = String(Number(m[1])).padStart(2, "0");
    const mm = String(Number(m[2])).padStart(2, "0");
    const yyyy = String(Number(m[3]));

    return `${yyyy}-${mm}-${dd}`;
  }

  function toDateInputValue(date) {
    const d = date instanceof Date && !isNaN(date.getTime())
      ? date
      : new Date();

    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");

    return `${yyyy}-${mm}-${dd}`;
  }

  function normalizeDatePayload(datePayload) {
    if (typeof datePayload === "string") {
      const text = String(datePayload || "").trim();

      if (/^\d{4}-\d{2}-\d{2}$/.test(text)) {
        return {
          apiDate: text,
          displayDate: isoDateToDisplayDate(text)
        };
      }

      const iso = displayDateToIsoDate(text);

      return {
        apiDate: iso,
        displayDate: /^\d{4}-\d{2}-\d{2}$/.test(iso) ? isoDateToDisplayDate(iso) : text
      };
    }

    const apiDate = String(datePayload && datePayload.apiDate ? datePayload.apiDate : "").trim();
    const displayDate = String(datePayload && datePayload.displayDate ? datePayload.displayDate : "").trim();

    return {
      apiDate,
      displayDate: displayDate || isoDateToDisplayDate(apiDate) || apiDate
    };
  }

  /* =========================
   * UTILITIES
   * ========================= */

  async function showError(err) {
    console.error(err);

    await Swal.fire({
      icon: "error",
      title: "เกิดข้อผิดพลาด",
      text: err && err.message ? err.message : String(err),
      confirmButtonText: "ตกลง"
    });
  }

  function showDialogNotice(message, type) {
    const box = $("dialogNotice");

    if (!box) {
      console.warn(message);
      return;
    }

    box.className = "dialogNotice";
    box.classList.add("dialogNotice-" + (type || "info"));
    box.textContent = message || "";
    box.classList.remove("isHidden");
  }

  function clearDialogNotice() {
    const box = $("dialogNotice");

    if (!box) return;

    box.textContent = "";
    box.className = "dialogNotice isHidden";
  }

  function getPassFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return String(params.get("pass") || "").trim();
  }

  function getNowDisplay() {
    const d = new Date();

    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    const hh = String(d.getHours()).padStart(2, "0");
    const mi = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");

    return `${dd}/${mm}/${yyyy} ${hh}:${mi}:${ss}`;
  }

  function joinName(row) {
    return [row.prefix, row.firstName, row.lastName]
      .filter(Boolean)
      .join(" ");
  }

  function normalizeForSearch(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function escapeAttr(value) {
    return escapeHtml(value).replace(/`/g, "&#096;");
  }

})();
หลังวางแล้วให้แก้ version ใน index.html เป็นเลขใหม่ เช่น:

<link rel="stylesheet" href="./style.css?v=16">
<script src="./app.js?v=17" defer></script>
จุดสำคัญหลังแก้: การค้นหาจากปฏิทินจะส่งวันที่เป็น yyyy-MM-dd เสมอ เช่น 2026-05-12 ไม่ขึ้นกับว่าเครื่องหรือเบราว์เซอร์จะแสดงเป็น 12-May-2026 หรือรูปแบบอื่นครับ.


9cb45ebe-8581-4bb7-856d-9b8a68cbe454.png
ไม่สำเร็จโค้ดใหม่ แถมข้อมูลที่เคยถูกดึงมาได้(โค้ดเดิมทำได้) ก็ไม่สามารถดึงข้อมูลจาชีทขาเข้าได้ ตรวจสอบมาใหม่ 

คิดเป็นเวลา 32s
ตรวจแล้ว จุดที่ทำให้ ข้อมูลขาเข้าที่เคยดึงได้ กลับไม่ขึ้น ไม่น่ามาจาก app.js โดยตรง เพราะในไฟล์ที่คุณส่งมา app.js ยังเรียกข้อมูลขาเข้าด้วย endpoint เดิมคือ:

const res = await apiGet("/api/inbound-open");
แล้วนำ res.rows มาแสดงเหมือนเดิม 


ดังนั้นถ้า “ข้อมูลขาเข้าไม่ขึ้นเลย” ปัญหาน่าจะอยู่ที่ ฝั่ง Backend Code.gs หรือ Worker/API ที่ /api/inbound-open คืนค่า rows ว่างหรือ error มากกว่า

จากภาพ Sheet5 ที่ส่งมา ข้อมูลขาเข้ายังมีจริง เช่นแถวที่ เหตุผลเข้าพื้นที่ = รับพาเลท, ยี่ห้อพาเลท = LOSCAM, และบางแถว Timestamp Out ยังว่าง ดังนั้นระบบควรดึงมาได้

ให้แก้ Code.gs เฉพาะฟังก์ชัน getInboundOpenRows_() ก่อน
ให้เอาฟังก์ชัน getInboundOpenRows_() เดิมออก แล้ววางชุดนี้แทน

ชุดนี้แก้ให้ปลอดภัยขึ้นมาก:

1. ไม่พังถ้า Timestamp Out เป็นช่องว่างจริง
2. ไม่พังถ้าหัวคอลัมน์มีช่องว่างแปลก ๆ
3. แปลงยี่ห้อพาเลทเป็นตัวใหญ่ก่อนเทียบ
4. เช็คเหตุผลแบบ trim
5. ถ้า InboundSuppress มีปัญหา จะไม่ทำให้ข้อมูลขาเข้าหายทั้งหมด
6. เพิ่ม debug fields กลับไปให้ตรวจได้ง่ายขึ้น
function getInboundOpenRows_() {
  const ss = SpreadsheetApp.openById(IN_SPREADSHEET_ID);
  const sheet = ss.getSheetByName(IN_SHEET_NAME);

  if (!sheet) {
    throw new Error("ไม่พบชีทข้อมูลขาเข้า: " + IN_SHEET_NAME);
  }

  const values = sheet.getDataRange().getValues();

  if (values.length < 2) {
    return {
      ok: true,
      rows: [],
      count: 0,
      debug: {
        reason: "Sheet5 มีเฉพาะหัวตารางหรือไม่มีข้อมูล"
      }
    };
  }

  const headers = values[0];
  const headerMap = getHeaderMap_(headers);

  const cAutoId = getRequiredCol_(headerMap, "Auto ID");
  const cTimestamp = getRequiredCol_(headerMap, "Timestamp");
  const cStatus = getOptionalCol_(headerMap, "สถานะ");
  const cReason = getRequiredCol_(headerMap, "เหตุผลเข้าพื้นที่");
  const cBrand = getRequiredCol_(headerMap, "ยี่ห้อพาเลท");
  const cPlate = getRequiredCol_(headerMap, "ทะเบียนรถ");
  const cPrefix = getOptionalCol_(headerMap, "คำนำหน้า");
  const cFirstName = getOptionalCol_(headerMap, "ชื่อ");
  const cLastName = getOptionalCol_(headerMap, "สกุล");
  const cCompany = getOptionalCol_(headerMap, "ต้นสังกัด พขร.");
  const cPhone = getOptionalCol_(headerMap, "เบอร์โทร");
  const cTimestampOut = getRequiredCol_(headerMap, "Timestamp Out");
  const cDuration = getOptionalCol_(headerMap, "Duration");

  let suppressedMap = {};

  try {
    suppressedMap = getActiveSuppressedInboundMap_();
  } catch (err) {
    suppressedMap = {};
  }

  const rows = [];

  const debug = {
    totalDataRows: values.length - 1,
    skippedNoAutoId: 0,
    skippedReason: 0,
    skippedBrand: 0,
    skippedTimestampOut: 0,
    skippedSuppressed: 0,
    accepted: 0
  };

  for (let r = 1; r < values.length; r++) {
    const row = values[r];

    const autoId = norm_(row[cAutoId]);
    const reason = norm_(row[cReason]);
    const brandIn = norm_(row[cBrand]).toUpperCase();
    const timestampOut = normalizeTimestampOutCell_(row[cTimestampOut]);

    if (!autoId) {
      debug.skippedNoAutoId++;
      continue;
    }

    if (reason !== ALLOWED_IN_REASON) {
      debug.skippedReason++;
      continue;
    }

    if (ALLOWED_BRANDS.indexOf(brandIn) === -1) {
      debug.skippedBrand++;
      continue;
    }

    if (timestampOut) {
      debug.skippedTimestampOut++;
      continue;
    }

    if (suppressedMap[autoId]) {
      debug.skippedSuppressed++;
      continue;
    }

    const item = {
      rowNumber: r + 1,
      autoId: autoId,
      timestampIn: toDisplayDateTime_(row[cTimestamp]),
      status: cStatus >= 0 ? norm_(row[cStatus]) : "",
      reason: reason,
      brandIn: brandIn,
      plateNo: norm_(row[cPlate]),
      prefix: cPrefix >= 0 ? norm_(row[cPrefix]) : "",
      firstName: cFirstName >= 0 ? norm_(row[cFirstName]) : "",
      lastName: cLastName >= 0 ? norm_(row[cLastName]) : "",
      driverCompany: cCompany >= 0 ? norm_(row[cCompany]) : "",
      phone: cPhone >= 0 ? norm_(row[cPhone]) : "",
      timestampOut: "",
      duration: cDuration >= 0 ? norm_(row[cDuration]) : ""
    };

    item.driverFullName = [item.prefix, item.firstName, item.lastName]
      .filter(Boolean)
      .join(" ");

    rows.push(item);
    debug.accepted++;
  }

  rows.sort(function (a, b) {
    const da = parseAnyDate_(a.timestampIn);
    const db = parseAnyDate_(b.timestampIn);

    const ta = da && !isNaN(da.getTime()) ? da.getTime() : 0;
    const tb = db && !isNaN(db.getTime()) ? db.getTime() : 0;

    return tb - ta;
  });

  return {
    ok: true,
    rows: rows,
    count: rows.length,
    debug: debug
  };
}
เพิ่ม Helper นี้ใน Code.gs
วางไว้ใกล้ ๆ กลุ่ม Date/Text helper ได้เลย

function normalizeTimestampOutCell_(value) {
  if (value === null || value === undefined) return "";

  if (Object.prototype.toString.call(value) === "[object Date]") {
    if (isNaN(value.getTime())) return "";
    return Utilities.formatDate(value, TZ, "dd/MM/yyyy HH:mm:ss");
  }

  const text = String(value || "").trim();

  if (!text) return "";

  if (text === "-") return "";
  if (text.toLowerCase() === "null") return "";
  if (text.toLowerCase() === "undefined") return "";

  return text;
}
แล้ว Deploy ใหม่
หลังแก้ Code.gs:

Deploy > Manage deployments > Edit > New version > Deploy
ทดสอบทันที
เปิด URL นี้ใน Browser:

https://pallet.somchaibutphon.workers.dev/api/inbound-open
ให้ดูค่าที่ได้:

{
  "ok": true,
  "rows": [],
  "count": 0,
  "debug": {
    "totalDataRows": 704,
    "skippedNoAutoId": 0,
    "skippedReason": 500,
    "skippedBrand": 0,
    "skippedTimestampOut": 190,
    "skippedSuppressed": 0,
    "accepted": 14
  }
}
จุดที่ต้องดูคือ:

accepted
ถ้า accepted > 0 แปลว่า Backend ดึงข้อมูลได้แล้ว และหน้าเว็บควรแสดงรายการ

ถ้า accepted = 0 ให้ดูว่าเลขไหนสูงผิดปกติ:

skippedReason สูงมาก = ค่าเหตุผลในชีทไม่ตรงคำว่า "รับพาเลท"
skippedBrand สูงมาก = ยี่ห้อไม่ตรง LOSCAM/CHEP
skippedTimestampOut สูงมาก = คอลัมน์ Timestamp Out มีค่าอยู่ ระบบถือว่าออกแล้ว
skippedSuppressed สูงมาก = รายการถูกซ่อนจาก InboundSuppress
ส่วนการค้นหาวันที่ย้อนหลัง
ให้ทดสอบแยกด้วย URL นี้:

https://pallet.somchaibutphon.workers.dev/api/outbound-by-date?date=2026-05-12
ถ้ายังไม่เจอข้อมูลย้อนหลัง แต่ Sheet1 มีข้อมูลวันที่นั้น ให้ตรวจว่าใน Sheet1 คอลัมน์ Timestamp ขาออก เป็นวันที่ 12/05/2026 จริงหรือไม่ และคอลัมน์ สถานะรายการ ไม่ใช่ DELETED

ตอนนี้ให้แก้ Code.gs จุดนี้ก่อน เพราะอาการ “ข้อมูลขาเข้าที่เคยดึงได้ไม่ขึ้น” ต้องแก้ที่ /api/inbound-open ก่อน ไม่ควรแก้ app.js เพิ่มจนกว่าจะเห็นว่า endpoint นี้คืน rows กลับมาถูกต้องครับ.


/* =====================================================

Pallet OUT System - Frontend App

File: app.js

ใช้กับ index.html + style.css

===================================================== */

(function () {
"use strict";

/* =========================

CONFIG

========================= */

const CONFIG = Object.assign(
{
API_BASE: "",
MAX_IMAGES: 4,
MIN_IMAGES: 1,
IMAGE_MAX_WIDTH: 1280,
IMAGE_MAX_HEIGHT: 1280,
IMAGE_QUALITY: 0.78,
IMAGE_OUTPUT_TYPE: "image/jpeg",
DATE_TIME_FORMAT: "dd/MM/yyyy HH:mm"
},
window.APP_CONFIG || {}
);

const STORAGE_KEY_USER = "PALLET_OUT_CURRENT_USER";
const STORAGE_KEY_LOGIN_AT = "PALLET_OUT_LOGIN_AT";

const ECD_REGEX = /^[A-Za-z0-9]+$/;
const TCR_REGEX = /^[A-Za-z0-9]+$/;
const DEFAULT_PALLET_QTY = [10, 20, 30, 40, 50, 60, 80, 100];

const state = {
currentUser: "",
options: {
brands: [],
palletQty: []
},
inboundRows: [],
filteredRows: [],
selectedEvidenceFiles: [],
selectedEvidencePayloads: [],
selectedBrand: "",
selectedQty: "",
isSubmitting: false
};

let inlineCameraStream = null;

/* =========================

DOM

========================= */

const $ = (id) => document.getElementById(id);

const els = {
loginView: $("loginView"),
mainView: $("mainView"),
loginForm: $("loginForm"),
passInput: $("passInput"),
loginBtn: $("loginBtn"),
togglePassBtn: $("togglePassBtn"),

currentUserName: $("currentUserName"),
logoutBtn: $("logoutBtn"),
refreshBtn: $("refreshBtn"),
emptyRefreshBtn: $("emptyRefreshBtn"),
openEditOutboundBtn: $("openEditOutboundBtn"),

searchInput: $("searchInput"),
openCountText: $("openCountText"),
lastUpdatedText: $("lastUpdatedText"),

statusBox: $("statusBox"),
statusText: $("statusText"),
emptyState: $("emptyState"),
inboundList: $("inboundList"),

cameraInput: $("cameraInput"),
uploadInput: $("uploadInput")
};

/* =========================

INIT

========================= */

document.addEventListener("DOMContentLoaded", init);

function init() {
bindEvents();

const savedUser = sessionStorage.getItem(STORAGE_KEY_USER) || "";

if (savedUser) {
  state.currentUser = savedUser;
  showMainView(savedUser);
  loadInitialData();
  return;
}

showLoginView();

const passFromUrl = getPassFromUrl();

if (passFromUrl && els.passInput) {
  els.passInput.value = passFromUrl;

  setTimeout(() => {
    if (els.loginForm) {
      els.loginForm.requestSubmit();
    }
  }, 300);
}
}

function bindEvents() {
if (els.loginForm) {
els.loginForm.addEventListener("submit", handleLoginSubmit);
}

if (els.togglePassBtn) {
  els.togglePassBtn.addEventListener("click", togglePassword);
}

if (els.logoutBtn) {
  els.logoutBtn.addEventListener("click", handleLogout);
}

if (els.refreshBtn) {
  els.refreshBtn.addEventListener("click", () => loadInboundRows(true));
}
if (els.openEditOutboundBtn) {
els.openEditOutboundBtn.addEventListener("click", async () => {
await handleEditOutboundSearch();
});
}
if (els.emptyRefreshBtn) {
els.emptyRefreshBtn.addEventListener("click", () => loadInboundRows(true));
}

if (els.searchInput) {
  els.searchInput.addEventListener("input", handleSearch);
}

if (els.cameraInput) {
  els.cameraInput.addEventListener("change", handleEvidenceInputChange);
}

if (els.uploadInput) {
  els.uploadInput.addEventListener("change", handleEvidenceInputChange);
}
}

/* =========================

VIEW CONTROL

========================= */

function showLoginView() {
if (els.loginView) els.loginView.classList.remove("isHidden");
if (els.mainView) els.mainView.classList.add("isHidden");

setTimeout(() => {
  if (els.passInput) els.passInput.focus();
}, 100);
}

function showMainView(name) {
if (els.loginView) els.loginView.classList.add("isHidden");
if (els.mainView) els.mainView.classList.remove("isHidden");
if (els.currentUserName) els.currentUserName.textContent = name || "-";
}

function setStatus(show, text) {
if (!els.statusBox) return;

if (show) {
  els.statusBox.classList.remove("isHidden");

  if (els.statusText) {
    els.statusText.textContent = text || "กำลังโหลดข้อมูล...";
  }
} else {
  els.statusBox.classList.add("isHidden");
}
}

function setEmptyState(show) {
if (!els.emptyState) return;

if (show) {
  els.emptyState.classList.remove("isHidden");
} else {
  els.emptyState.classList.add("isHidden");
}
}

function setButtonLoading(button, isLoading, loadingText) {
if (!button) return;

if (isLoading) {
  button.dataset.originalText = button.textContent;
  button.disabled = true;
  button.textContent = loadingText || "กำลังทำงาน...";
} else {
  button.disabled = false;
  button.textContent = button.dataset.originalText || button.textContent;
}
}

/* =========================

LOGIN

========================= */

async function handleLoginSubmit(e) {
e.preventDefault();

const pass = String(els.passInput.value || "").trim();

if (!pass) {
  await Swal.fire({
    icon: "warning",
    title: "กรุณากรอกรหัส",
    text: "ต้องกรอกรหัสผู้ใช้งานก่อนเข้าสู่ระบบ",
    confirmButtonText: "ตกลง"
  });
  return;
}

try {
  setButtonLoading(els.loginBtn, true, "กำลังตรวจสอบ...");

  const res = await apiPost("/api/login", { pass });

  if (!res.ok) {
    await Swal.fire({
      icon: "error",
      title: "เข้าสู่ระบบไม่สำเร็จ",
      text: res.message || "รหัสผ่านไม่ถูกต้อง",
      confirmButtonText: "ตกลง"
    });
    return;
  }

  const name = String(res.name || "").trim();

  if (!name) {
    throw new Error("ระบบไม่พบชื่อผู้ใช้งานจากรหัสนี้");
  }

  state.currentUser = name;

  sessionStorage.setItem(STORAGE_KEY_USER, name);
  sessionStorage.setItem(STORAGE_KEY_LOGIN_AT, getNowDisplay());

  els.passInput.value = "";

  showMainView(name);

  await Swal.fire({
    icon: "success",
    title: "เข้าสู่ระบบสำเร็จ",
    text: "ผู้ใช้งาน: " + name,
    timer: 1200,
    showConfirmButton: false
  });

  await loadInitialData();

} catch (err) {
  await showError(err);
} finally {
  setButtonLoading(els.loginBtn, false);
}
}

function togglePassword() {
const input = els.passInput;
if (!input) return;

const isPassword = input.type === "password";
input.type = isPassword ? "text" : "password";
els.togglePassBtn.textContent = isPassword ? "ซ่อน" : "แสดง";
}

async function handleLogout() {
const result = await Swal.fire({
icon: "question",
title: "ออกจากระบบ?",
text: "ต้องการออกจากระบบใช่หรือไม่",
showCancelButton: true,
confirmButtonText: "ออกจากระบบ",
cancelButtonText: "ยกเลิก",
reverseButtons: true
});

if (!result.isConfirmed) return;

sessionStorage.removeItem(STORAGE_KEY_USER);
sessionStorage.removeItem(STORAGE_KEY_LOGIN_AT);

state.currentUser = "";
state.inboundRows = [];
state.filteredRows = [];
state.options = { brands: [], palletQty: [] };

stopInlineCamera();
renderInboundRows([]);
updateSummary();

showLoginView();
}

/* =========================

DATA LOADING

========================= */

async function loadInitialData() {
try {
setStatus(true, "กำลังโหลดตัวเลือกและข้อมูลขาเข้า...");

  await loadOptions();
  await loadInboundRows(false);

} catch (err) {
  await showError(err);
} finally {
  setStatus(false);
}
}

async function loadOptions() {
const res = await apiGet("/api/options");

if (!res.ok) {
  throw new Error(res.message || "โหลดตัวเลือกไม่สำเร็จ");
}

state.options.brands = Array.isArray(res.brands) ? res.brands : [];
state.options.palletQty = Array.isArray(res.palletQty) ? res.palletQty : [];

state.options.brands = state.options.brands
  .filter((b) => b && b.brand)
  .map((b) => ({
    brand: String(b.brand || "").trim().toUpperCase(),
    imageId: String(b.imageId || "").trim(),
    imageUrl: String(b.imageUrl || "").trim()
  }));

state.options.palletQty = state.options.palletQty
  .map((n) => Number(n))
  .filter((n) => Number.isFinite(n) && n > 0)
  .sort((a, b) => a - b);

if (!state.options.palletQty.length) {
  state.options.palletQty = DEFAULT_PALLET_QTY.slice();
}
}

async function loadInboundRows(showLoading = true) {
try {
if (showLoading) {
setStatus(true, "กำลังโหลดรายการรอบันทึกขาออก...");
}

  const res = await apiGet("/api/inbound-open");

  if (!res.ok) {
    throw new Error(res.message || "โหลดรายการขาเข้าไม่สำเร็จ");
  }

  state.inboundRows = sortRowsByLatestTimestamp(Array.isArray(res.rows) ? res.rows : []);
  state.filteredRows = state.inboundRows.slice();

  if (els.searchInput) {
    const q = String(els.searchInput.value || "").trim();
    if (q) applySearch(q);
  }

  renderInboundRows(state.filteredRows);
  updateSummary();

} catch (err) {
  await showError(err);
} finally {
  if (showLoading) {
    setStatus(false);
  }
}
}

/* =========================

SEARCH / SORT

========================= */

function handleSearch(e) {
const q = String(e.target.value || "").trim();
applySearch(q);
renderInboundRows(state.filteredRows);
updateSummary();
}

function applySearch(query) {
const q = normalizeForSearch(query);

if (!q) {
  state.filteredRows = sortRowsByLatestTimestamp(state.inboundRows);
  return;
}

state.filteredRows = sortRowsByLatestTimestamp(
  state.inboundRows.filter((row) => {
    const haystack = [
      row.autoId,
      row.timestampIn,
      row.reason,
      row.brandIn,
      row.plateNo,
      row.prefix,
      row.firstName,
      row.lastName,
      row.driverFullName,
      row.driverCompany,
      row.phone
    ]
      .map(normalizeForSearch)
      .join(" ");

    return haystack.includes(q);
  })
);
}

function sortRowsByLatestTimestamp(rows) {
return Array.from(rows || []).sort((a, b) => {
const ta = parseDisplayDateTimeToMs(a.timestampIn);
const tb = parseDisplayDateTimeToMs(b.timestampIn);
return tb - ta;
});
}

function parseDisplayDateTimeToMs(value) {
const text = String(value || "").trim();

if (!text) return 0;

const m = text.match(
  /^(\d{1,2})\/(\d{1,2})\/(\d{4})\s+(\d{1,2}):(\d{2})(?::(\d{2}))?$/
);

if (m) {
  const dd = Number(m[1]);
  const mm = Number(m[2]) - 1;
  const yyyy = Number(m[3]);
  const hh = Number(m[4] || 0);
  const mi = Number(m[5] || 0);
  const ss = Number(m[6] || 0);

  const d = new Date(yyyy, mm, dd, hh, mi, ss);
  return isNaN(d.getTime()) ? 0 : d.getTime();
}

const d = new Date(text);
return isNaN(d.getTime()) ? 0 : d.getTime();
}

/* =========================

RENDER LIST

========================= */

function renderInboundRows(rows) {
if (!els.inboundList) return;

els.inboundList.innerHTML = "";

const list = Array.isArray(rows) ? rows : [];

if (!list.length) {
  setEmptyState(true);
  return;
}

setEmptyState(false);

const fragment = document.createDocumentFragment();

list.forEach((row) => {
  const card = document.createElement("article");
  card.className = "inboundCard";
  card.dataset.autoId = row.autoId || "";

  const brandClass = String(row.brandIn || "").toUpperCase() === "CHEP"
    ? "brandBadge brandChep"
    : "brandBadge brandLoscam";

  card.innerHTML = `
    <div class="cardHeader">
      <div>
        <div class="plateText">${escapeHtml(row.plateNo || "-")}</div>
        <div class="autoIdText">Auto ID: ${escapeHtml(row.autoId || "-")}</div>
      </div>
      <span class="${brandClass}">${escapeHtml(row.brandIn || "-")}</span>
    </div>

    <div class="cardBody">
      <div class="infoGrid">
        <div class="infoItem">
          <span>พขร.</span>
          <strong>${escapeHtml(row.driverFullName || joinName(row) || "-")}</strong>
        </div>

        <div class="infoItem">
          <span>ต้นสังกัด</span>
          <strong>${escapeHtml(row.driverCompany || "-")}</strong>
        </div>

        <div class="infoItem">
          <span>เวลาเข้า</span>
          <strong>${escapeHtml(row.timestampIn || "-")}</strong>
        </div>

        <div class="infoItem">
          <span>เบอร์โทร</span>
          <strong>${escapeHtml(row.phone || "-")}</strong>
        </div>
      </div>
    </div>

    <div class="cardActions">
      <button class="primaryBtn recordOutBtn" type="button">
        บันทึกขาออก
      </button>
    </div>
  `;

  const btn = card.querySelector(".recordOutBtn");

  if (btn) {
    btn.addEventListener("click", () => openRecordOutDialog(row));
  }

  card.addEventListener("click", (ev) => {
    if (ev.target && ev.target.closest("button")) return;
    openRecordOutDialog(row);
  });

  fragment.appendChild(card);
});

els.inboundList.appendChild(fragment);
}

function updateSummary() {
const total = state.filteredRows.length;

if (els.openCountText) {
  els.openCountText.textContent = String(total);
}

if (els.lastUpdatedText) {
  els.lastUpdatedText.textContent = getNowDisplay();
}
}

/* =========================

SWEETALERT FORM

========================= */

async function openRecordOutDialog(row) {
if (state.isSubmitting) return;

resetDialogState();

const html = buildRecordOutDialogHtml(row);

const result = await Swal.fire({
  title: "บันทึกพาเลทขาออก",
  html,
  width: 860,
  showCancelButton: true,
  confirmButtonText: "บันทึกขาออก",
  cancelButtonText: "ยกเลิก",
  reverseButtons: true,
  focusConfirm: false,
  allowOutsideClick: () => !state.isSubmitting,
  allowEscapeKey: () => !state.isSubmitting,
  didOpen: () => {
    initDialogEvents(row);
  },
  willClose: () => {
    stopInlineCamera();
  },
  preConfirm: async () => {
    try {
      return await collectAndValidateDialogData(row);
    } catch (err) {
      showDialogNotice(err.message || String(err), "error");
      return false;
    }
  }
});

if (!result.isConfirmed || !result.value) return;

await submitOutRecord(result.value);
}

function resetDialogState() {
state.selectedEvidenceFiles = [];
state.selectedEvidencePayloads = [];
state.selectedBrand = "";
state.selectedQty = "";
state.isSubmitting = false;

stopInlineCamera();

if (els.cameraInput) els.cameraInput.value = "";
if (els.uploadInput) els.uploadInput.value = "";
}

function buildRecordOutDialogHtml(row) {
const brandsHtml = buildBrandOptionsHtml();
const qtyHtml = buildQtyOptionsHtml();

return `
  <div class="outDialog">
    <section class="dialogSection">
      <h3>ข้อมูลขาเข้า</h3>

      <div class="dialogInfoGrid">
        ${dialogInfo("Auto ID", row.autoId)}
        ${dialogInfo("เวลาเข้า", row.timestampIn)}
        ${dialogInfo("เหตุผล", row.reason)}
        ${dialogInfo("ยี่ห้อขาเข้า", row.brandIn)}
        ${dialogInfo("ทะเบียนรถ", row.plateNo)}
        ${dialogInfo("พขร.", row.driverFullName || joinName(row))}
        ${dialogInfo("ต้นสังกัด", row.driverCompany)}
        ${dialogInfo("เบอร์โทร", row.phone)}
      </div>
    </section>

    <section class="dialogSection">
      <div class="dialogSectionHeader">
        <h3>ข้อมูลขาออก</h3>

        <div class="manageWrap">
          <button id="manageDataBtn" type="button" class="manageDataBtn">
            จัดการข้อมูล
          </button>

          <div id="manageMenu" class="manageMenu isHidden">
      <div id="dialogNotice" class="dialogNotice isHidden"></div>

      <div class="fieldGroup">
        <label>เลือกยี่ห้อพาเลทขาออก <em>*</em></label>
        <div id="brandSelectGrid" class="brandSelectGrid">
          ${brandsHtml}
        </div>
      </div>

      <div class="fieldGroup">
        <label>จำนวนพาเลทขาออก <em>*</em></label>
        <div id="qtySelectGrid" class="qtySelectGrid">
          ${qtyHtml}
          <button type="button" class="qtyChip" data-qty="custom">อื่นๆ</button>
        </div>

        <input
          id="customQtyInput"
          class="dialogInput isHidden"
          type="number"
          inputmode="numeric"
          min="1"
          step="1"
          placeholder="กรอกจำนวนเอง"
        >
      </div>

      <div class="docPairGrid">
        <div class="fieldGroup">
          <label for="ecdNameInput">หมายเลขเอกสาร ECD <em>*</em></label>
          <input
            id="ecdNameInput"
            class="dialogInput"
            type="text"
            inputmode="latin"
            autocomplete="off"
            placeholder="ECD001"
            maxlength="30"
          >
        </div>

        <div class="fieldGroup">
          <label for="tcrNoInput">หมายเลขเอกสาร TCR <em>*</em></label>
          <input
            id="tcrNoInput"
            class="dialogInput"
            type="text"
            inputmode="latin"
            autocomplete="off"
            placeholder="TCR001"
            maxlength="30"
          >
        </div>
      </div>

      <div class="helpText">
        ECD/TCR ใช้ได้เฉพาะ A-Z, a-z, 0-9 ห้ามเว้นวรรคและห้ามอักขระพิเศษ
      </div>

      <div class="fieldGroup">
        <label>รูปหลักฐาน <em>*</em></label>

        <div class="evidenceControl">
          <button id="openCameraBtn" type="button" class="secondaryBtn">
            เปิดกล้อง
          </button>

          <button id="pickGalleryBtn" type="button" class="secondaryBtn">
            เลือกรูปจากเครื่อง
          </button>

          <span id="evidenceCountText" class="evidenceCount">
            ยังไม่ได้เลือกรูป
          </span>
        </div>

        <div id="inlineCameraPanel" class="inlineCameraPanel isHidden">
          <video
            id="inlineCameraVideo"
            class="inlineCameraVideo"
            autoplay
            playsinline
            muted
          ></video>

          <canvas id="inlineCameraCanvas" class="inlineCameraCanvas"></canvas>

          <div class="inlineCameraActions">
            <button id="captureCameraBtn" type="button" class="primaryBtn">
              ถ่ายภาพ
            </button>

            <button id="closeCameraBtn" type="button" class="secondaryBtn">
              ปิดกล้อง
            </button>
          </div>

          <div class="helpText">
            จัดภาพให้ชัดเจน แล้วกด “ถ่ายภาพ” รูปจะถูกเพิ่มในรายการด้านล่าง
          </div>
        </div>

        <div class="helpText">ต้องมีอย่างน้อย 1 รูป และสูงสุด 4 รูป</div>
        <div id="evidencePreviewGrid" class="evidencePreviewGrid"></div>
      </div>

      <div class="fieldGroup">
        <label for="noteInput">หมายเหตุ</label>
        <textarea
          id="noteInput"
          class="dialogTextarea"
          rows="3"
          placeholder="ระบุหมายเหตุเพิ่มเติมถ้ามี"
        ></textarea>
      </div>
    </section>
  </div>
`;
}

function buildBrandOptionsHtml() {
const brands = state.options.brands || [];

if (!brands.length) {
  return `<div class="optionMissing">ไม่พบตัวเลือก Brand ในชีท Brand</div>`;
}

return brands.map((b) => {
  const brand = escapeHtml(b.brand || "");
  const imageUrl = escapeAttr(b.imageUrl || "");

  return `
    <button type="button" class="brandOption" data-brand="${brand}">
      <div
        class="brandImageBox"
        style="${imageUrl ? `--brand-img: url('${imageUrl}');` : ""}"
      >
        ${
          imageUrl
            ? `<img class="brandFallbackImg" src="${imageUrl}" alt="${brand}" loading="lazy">`
            : `<span>${brand}</span>`
        }
      </div>
      <strong>${brand}</strong>
    </button>
  `;
}).join("");
}

function buildQtyOptionsHtml() {
let qtyList = state.options.palletQty || [];

qtyList = qtyList
  .map((qty) => Number(qty))
  .filter((qty) => Number.isFinite(qty) && qty > 0)
  .sort((a, b) => a - b);

if (!qtyList.length) {
  qtyList = DEFAULT_PALLET_QTY.slice();
}

return qtyList.map((qty) => {
  return `<button type="button" class="qtyChip" data-qty="${qty}">${qty}</button>`;
}).join("");
}

function dialogInfo(label, value) {
return <div class="dialogInfoItem"> <span>${escapeHtml(label)}</span> <strong>${escapeHtml(value || "-")}</strong> </div> ;
}

function initDialogEvents(row) {
const brandButtons = document.querySelectorAll(".brandOption");
const qtyButtons = document.querySelectorAll(".qtyChip");

const customQtyInput = $("customQtyInput");
const ecdNameInput = $("ecdNameInput");
const tcrNoInput = $("tcrNoInput");

const manageDataBtn = $("manageDataBtn");
const manageMenu = $("manageMenu");
const suppressInboundBtn = $("suppressInboundBtn");


const openCameraBtn = $("openCameraBtn");
const captureCameraBtn = $("captureCameraBtn");
const closeCameraBtn = $("closeCameraBtn");
const pickGalleryBtn = $("pickGalleryBtn");

brandButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    brandButtons.forEach((b) => b.classList.remove("isSelected"));
    btn.classList.add("isSelected");
    state.selectedBrand = String(btn.dataset.brand || "").trim().toUpperCase();
    clearDialogNotice();
  });
});

qtyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    qtyButtons.forEach((b) => b.classList.remove("isSelected"));
    btn.classList.add("isSelected");

    const qty = String(btn.dataset.qty || "").trim();

    if (qty === "custom") {
      state.selectedQty = "custom";

      if (customQtyInput) {
        customQtyInput.classList.remove("isHidden");
        setTimeout(() => customQtyInput.focus(), 50);
      }
    } else {
      state.selectedQty = qty;

      if (customQtyInput) {
        customQtyInput.classList.add("isHidden");
        customQtyInput.value = "";
      }
    }

    clearDialogNotice();
  });
});

if (ecdNameInput) {
  ecdNameInput.addEventListener("input", () => {
    ecdNameInput.value = ecdNameInput.value
      .replace(/[^A-Za-z0-9]/g, "")
      .toUpperCase();

    clearDialogNotice();
  });
}

if (tcrNoInput) {
  tcrNoInput.addEventListener("input", () => {
    tcrNoInput.value = tcrNoInput.value
      .replace(/[^A-Za-z0-9]/g, "")
      .toUpperCase();

    clearDialogNotice();
  });
}

if (manageDataBtn && manageMenu) {
  manageDataBtn.addEventListener("click", (ev) => {
    ev.stopPropagation();
    manageMenu.classList.toggle("isHidden");
  });
}

if (suppressInboundBtn) {
  suppressInboundBtn.addEventListener("click", async () => {
    await handleSuppressInbound(row);
  });
}


if (openCameraBtn) {
  openCameraBtn.addEventListener("click", async () => {
    await openInlineCamera();
  });
}

if (captureCameraBtn) {
  captureCameraBtn.addEventListener("click", async () => {
    await captureInlineCameraImage();
  });
}

if (closeCameraBtn) {
  closeCameraBtn.addEventListener("click", () => {
    stopInlineCamera();
  });
}

if (pickGalleryBtn) {
  pickGalleryBtn.addEventListener("click", () => {
    if (!els.uploadInput) {
      showDialogNotice("ไม่พบช่องเลือกรูป กรุณาตรวจสอบ index.html ว่ามี input id=\"uploadInput\"", "error");
      return;
    }

    els.uploadInput.value = "";
    els.uploadInput.click();
  });
}

updateEvidencePreview();
}

async function collectAndValidateDialogData(row) {
const customQtyInput = $("customQtyInput");
const ecdNameInput = $("ecdNameInput");
const tcrNoInput = $("tcrNoInput");
const noteInput = $("noteInput");

const brandOut = String(state.selectedBrand || "").trim().toUpperCase();

if (!brandOut) {
  throw new Error("กรุณาเลือกยี่ห้อพาเลทขาออก");
}

let qtyOut = 0;

if (state.selectedQty === "custom") {
  qtyOut = Number(customQtyInput ? customQtyInput.value || 0 : 0);
} else {
  qtyOut = Number(state.selectedQty || 0);
}

if (!Number.isFinite(qtyOut) || qtyOut <= 0) {
  throw new Error("กรุณาระบุจำนวนพาเลทขาออกเป็นตัวเลขมากกว่า 0");
}

qtyOut = Math.floor(qtyOut);

const ecdName = String(ecdNameInput ? ecdNameInput.value || "" : "")
  .trim()
  .toUpperCase();

if (!ecdName) {
  throw new Error("กรุณากรอกหมายเลขเอกสาร ECD");
}

if (!ECD_REGEX.test(ecdName)) {
  throw new Error("หมายเลขเอกสาร ECD กรอกได้เฉพาะตัวอักษรภาษาอังกฤษและตัวเลขเท่านั้น");
}

const tcrNo = String(tcrNoInput ? tcrNoInput.value || "" : "")
  .trim()
  .toUpperCase();

if (!tcrNo) {
  throw new Error("กรุณากรอกหมายเลขเอกสาร TCR");
}

if (!TCR_REGEX.test(tcrNo)) {
  throw new Error("หมายเลขเอกสาร TCR กรอกได้เฉพาะตัวอักษรภาษาอังกฤษและตัวเลขเท่านั้น");
}

if (state.selectedEvidenceFiles.length < CONFIG.MIN_IMAGES) {
  throw new Error("กรุณาแนบรูปหลักฐานอย่างน้อย 1 รูป");
}

if (state.selectedEvidenceFiles.length > CONFIG.MAX_IMAGES) {
  throw new Error("แนบรูปหลักฐานได้สูงสุด 4 รูปเท่านั้น");
}

if (!state.selectedEvidencePayloads.length) {
  showDialogNotice("กำลังเตรียมรูปภาพ กรุณารอสักครู่...", "info");
  state.selectedEvidencePayloads = await compressSelectedImages(state.selectedEvidenceFiles);
}

if (state.selectedEvidencePayloads.length < CONFIG.MIN_IMAGES) {
  throw new Error("ไม่สามารถเตรียมข้อมูลรูปภาพได้ กรุณาเลือกรูปใหม่");
}

clearDialogNotice();

return {
  autoId: row.autoId,
  plateNo: row.plateNo || "",
  driverFullName: row.driverFullName || joinName(row) || "",
  brandOut,
  qtyOut,
  ecdName,
  tcrNo,
  recordedBy: state.currentUser,
  note: String(noteInput ? noteInput.value || "" : "").trim(),
  images: state.selectedEvidencePayloads
};
}

/* =========================

EVIDENCE IMAGES

========================= */

async function handleEvidenceInputChange(e) {
const files = Array.from(e.target.files || []);
await addEvidenceFiles(files);
}

async function addEvidenceFiles(files) {
const imageFiles = Array.from(files || []).filter((file) => {
return file && file.type && file.type.indexOf("image/") === 0;
});

if (!imageFiles.length) {
  showDialogNotice("กรุณาเลือกเฉพาะไฟล์รูปภาพ", "error");
  return;
}

const remaining = CONFIG.MAX_IMAGES - state.selectedEvidenceFiles.length;

if (remaining <= 0) {
  showDialogNotice("แนบรูปหลักฐานได้สูงสุด " + CONFIG.MAX_IMAGES + " รูปเท่านั้น", "warning");
  return;
}

let filesToAdd = imageFiles;

if (imageFiles.length > remaining) {
  filesToAdd = imageFiles.slice(0, remaining);
  showDialogNotice("ระบบรับเพิ่มได้อีก " + remaining + " รูป รวมสูงสุด " + CONFIG.MAX_IMAGES + " รูป", "warning");
} else {
  clearDialogNotice();
}

state.selectedEvidenceFiles = state.selectedEvidenceFiles.concat(filesToAdd);
state.selectedEvidencePayloads = [];

updateEvidencePreview();

try {
  const countText = $("evidenceCountText");
  if (countText) countText.textContent = "กำลังเตรียมรูปภาพ...";

  state.selectedEvidencePayloads = await compressSelectedImages(state.selectedEvidenceFiles);

  updateEvidencePreview();

} catch (err) {
  showDialogNotice(err.message || String(err), "error");
}
}

async function openInlineCamera() {
if (state.selectedEvidenceFiles.length >= CONFIG.MAX_IMAGES) {
showDialogNotice("แนบรูปหลักฐานได้สูงสุด " + CONFIG.MAX_IMAGES + " รูปเท่านั้น", "warning");
return;
}

const panel = $("inlineCameraPanel");
const video = $("inlineCameraVideo");

if (!panel || !video) {
  showDialogNotice("ไม่พบพื้นที่กล้อง กรุณาตรวจสอบ HTML ของฟอร์มรูปหลักฐาน", "error");
  return;
}

if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
  showDialogNotice("เบราว์เซอร์ไม่รองรับกล้องสด ระบบจะเปิดกล้อง/เลือกรูปแบบพื้นฐานของเครื่องแทน", "warning");
  openCameraInputFallback();
  return;
}

try {
  stopInlineCamera();

  inlineCameraStream = await navigator.mediaDevices.getUserMedia({
    video: {
      facingMode: { ideal: "environment" },
      width: { ideal: 1280 },
      height: { ideal: 720 }
    },
    audio: false
  });

  video.srcObject = inlineCameraStream;
  panel.classList.remove("isHidden");

  await video.play();

  showDialogNotice("เปิดกล้องแล้ว จัดภาพให้ชัดเจนแล้วกดถ่ายภาพ", "info");

} catch (err) {
  stopInlineCamera();
  showDialogNotice("เปิดกล้องสดไม่ได้ ระบบจะเปิดเมนูถ่ายภาพ/เลือกรูปแบบพื้นฐานของเครื่องแทน", "warning");
  openCameraInputFallback();
}
}

function openCameraInputFallback() {
if (!els.cameraInput) return;

els.cameraInput.value = "";
els.cameraInput.click();
}

async function captureInlineCameraImage() {
const video = $("inlineCameraVideo");
const canvas = $("inlineCameraCanvas");

if (!video || !canvas) {
  showDialogNotice("ไม่พบกล้อง กรุณาเปิดกล้องใหม่อีกครั้ง", "error");
  return;
}

if (!inlineCameraStream) {
  showDialogNotice("กรุณากดเปิดกล้องก่อนถ่ายภาพ", "warning");
  return;
}

if (state.selectedEvidenceFiles.length >= CONFIG.MAX_IMAGES) {
  showDialogNotice("แนบรูปหลักฐานได้สูงสุด " + CONFIG.MAX_IMAGES + " รูปเท่านั้น", "warning");
  stopInlineCamera();
  return;
}

const width = video.videoWidth || 1280;
const height = video.videoHeight || 720;

canvas.width = width;
canvas.height = height;

const ctx = canvas.getContext("2d");
ctx.drawImage(video, 0, 0, width, height);

const mimeType = CONFIG.IMAGE_OUTPUT_TYPE || "image/jpeg";
const quality = Number(CONFIG.IMAGE_QUALITY || 0.78);
const dataUrl = canvas.toDataURL(mimeType, quality);

const file = dataUrlToFile(
  dataUrl,
  "camera_" + getNowDisplay().replace(/[\/:\s]/g, "") + ".jpg"
);

await addEvidenceFiles([file]);

showDialogNotice("ถ่ายภาพแล้ว รูปถูกเพิ่มในรายการด้านล่าง", "success");

if (state.selectedEvidenceFiles.length >= CONFIG.MAX_IMAGES) {
  stopInlineCamera();
}
}

function stopInlineCamera() {
if (inlineCameraStream) {
inlineCameraStream.getTracks().forEach((track) => {
try {
track.stop();
} catch (err) {
// ignore
}
});
}

inlineCameraStream = null;

const video = $("inlineCameraVideo");
const panel = $("inlineCameraPanel");

if (video) {
  try {
    video.pause();
    video.srcObject = null;
  } catch (err) {
    // ignore
  }
}

if (panel) {
  panel.classList.add("isHidden");
}
}

function updateEvidencePreview() {
const grid = $("evidencePreviewGrid");
const countText = $("evidenceCountText");

if (countText) {
  const count = state.selectedEvidenceFiles.length;
  countText.textContent = count
    ? `เลือกรูปแล้ว ${count}/${CONFIG.MAX_IMAGES} รูป`
    : "ยังไม่ได้เลือกรูป";
}

if (!grid) return;

grid.innerHTML = "";

state.selectedEvidenceFiles.forEach((file, index) => {
  const url = URL.createObjectURL(file);

  const item = document.createElement("div");
  item.className = "evidenceThumb";
  item.innerHTML = `
    <img src="${url}" alt="รูปหลักฐาน ${index + 1}">
    <button type="button" class="removeEvidenceBtn" data-index="${index}" aria-label="ลบรูป">×</button>
  `;

  const removeBtn = item.querySelector(".removeEvidenceBtn");

  if (removeBtn) {
    removeBtn.addEventListener("click", () => {
      URL.revokeObjectURL(url);
      removeEvidenceAt(index);
    });
  }

  grid.appendChild(item);
});
}

function removeEvidenceAt(index) {
state.selectedEvidenceFiles.splice(index, 1);
state.selectedEvidencePayloads = [];
updateEvidencePreview();

if (state.selectedEvidenceFiles.length) {
  compressSelectedImages(state.selectedEvidenceFiles)
    .then((payloads) => {
      state.selectedEvidencePayloads = payloads;
      updateEvidencePreview();
    })
    .catch((err) => {
      console.error(err);
      showDialogNotice(err.message || String(err), "error");
    });
}
}

async function compressSelectedImages(files) {
const list = Array.from(files || []);

if (list.length > CONFIG.MAX_IMAGES) {
  throw new Error("แนบรูปหลักฐานได้สูงสุด " + CONFIG.MAX_IMAGES + " รูปเท่านั้น");
}

const payloads = [];

for (let i = 0; i < list.length; i++) {
  const file = list[i];
  const payload = await compressImageToPayload(file, i + 1);
  payloads.push(payload);
}

return payloads;
}

function compressImageToPayload(file, index) {
return new Promise((resolve, reject) => {
if (!file || !file.type || file.type.indexOf("image/") !== 0) {
reject(new Error("พบไฟล์ที่ไม่ใช่รูปภาพ"));
return;
}

  const reader = new FileReader();

  reader.onload = () => {
    const img = new Image();

    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const originalWidth = img.width || 1;
        const originalHeight = img.height || 1;

        const ratio = Math.min(
          CONFIG.IMAGE_MAX_WIDTH / originalWidth,
          CONFIG.IMAGE_MAX_HEIGHT / originalHeight,
          1
        );

        const targetWidth = Math.max(1, Math.round(originalWidth * ratio));
        const targetHeight = Math.max(1, Math.round(originalHeight * ratio));

        canvas.width = targetWidth;
        canvas.height = targetHeight;

        ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

        const mimeType = CONFIG.IMAGE_OUTPUT_TYPE || "image/jpeg";
        const quality = Number(CONFIG.IMAGE_QUALITY || 0.78);

        const dataUrl = canvas.toDataURL(mimeType, quality);
        const base64 = dataUrl.split(",").pop();

        resolve({
          name: buildImageName(file.name, index),
          mimeType,
          data: base64
        });

      } catch (err) {
        reject(err);
      }
    };

    img.onerror = () => {
      reject(new Error("ไม่สามารถอ่านรูปภาพได้"));
    };

    img.src = String(reader.result || "");
  };

  reader.onerror = () => {
    reject(new Error("ไม่สามารถอ่านไฟล์รูปภาพได้"));
  };

  reader.readAsDataURL(file);
});
}

function buildImageName(originalName, index) {
const safeName = String(originalName || "evidence")
.replace(/.[^.]+$/, "")
.replace(/[^A-Za-z0-9ก-ฮะ-์_-]+/g, "_")
.slice(0, 40);

return `evidence_${String(index).padStart(2, "0")}_${safeName}.jpg`;
}

function dataUrlToFile(dataUrl, filename) {
const parts = String(dataUrl || "").split(",");
const header = parts[0] || "";
const data = parts[1] || "";

const mimeMatch = header.match(/data:(.*?);base64/);
const mimeType = mimeMatch ? mimeMatch[1] : "image/jpeg";

const binary = atob(data);
const length = binary.length;
const bytes = new Uint8Array(length);

for (let i = 0; i < length; i++) {
  bytes[i] = binary.charCodeAt(i);
}

return new File([bytes], filename || "camera.jpg", {
  type: mimeType
});
}

/* =========================

MANAGE / SUPPRESS / EDIT

========================= */

async function handleSuppressInbound(row) {
if (!row || !row.autoId) {
showDialogNotice("ไม่พบ Auto ID ของรายการนี้", "error");
return;
}

const confirm = await Swal.fire({
  icon: "warning",
  title: "ซ่อนรายการนี้?",
  html: `
    <div class="confirmBox">
      <div><span>Auto ID</span><strong>${escapeHtml(row.autoId || "-")}</strong></div>
      <div><span>ทะเบียนรถ</span><strong>${escapeHtml(row.plateNo || "-")}</strong></div>
      <div><span>พขร.</span><strong>${escapeHtml(row.driverFullName || joinName(row) || "-")}</strong></div>
    </div>

    <div class="confirmNote">
      รายการนี้จะไม่แสดงในฟอร์มขาออกอีก แต่ข้อมูลในชีทขาเข้าจะไม่ถูกแก้ไข
    </div>
  `,
  input: "textarea",
  inputLabel: "เหตุผลการซ่อนรายการ",
  inputPlaceholder: "เช่น คนขับกดเข้าผิด / ไม่ได้มารับพาเลท / รายการซ้ำ",
  inputAttributes: {
    maxlength: 250
  },
  showCancelButton: true,
  confirmButtonText: "ยืนยันซ่อน",
  cancelButtonText: "ยกเลิก",
  reverseButtons: true,
  inputValidator: (value) => {
    if (!String(value || "").trim()) {
      return "กรุณาระบุเหตุผลการซ่อนรายการ";
    }

    return null;
  }
});

if (!confirm.isConfirmed) return;

const reason = String(confirm.value || "").trim();

try {
  Swal.fire({
    title: "กำลังซ่อนรายการ",
    html: "กรุณารอสักครู่ ระบบกำลังบันทึกข้อมูลการซ่อนรายการ",
    allowOutsideClick: false,
    allowEscapeKey: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

  const res = await apiPost("/api/suppress-inbound", {
    autoId: row.autoId,
    suppressedBy: state.currentUser,
    recordedBy: state.currentUser,
    reason
  }, 60000);

  if (!res.ok) {
    throw new Error(res.message || "ซ่อนรายการไม่สำเร็จ");
  }

  removeInboundRowFromState(row.autoId);

  await Swal.fire({
    icon: "success",
    title: "ซ่อนรายการสำเร็จ",
    html: `
      <div class="successSummary">
        <div><span>Auto ID</span><strong>${escapeHtml(res.autoId || row.autoId || "-")}</strong></div>
        <div><span>ทะเบียนรถ</span><strong>${escapeHtml(res.plateNo || row.plateNo || "-")}</strong></div>
        <div><span>ผู้ซ่อน</span><strong>${escapeHtml(res.suppressedBy || state.currentUser || "-")}</strong></div>
        <div><span>เวลา</span><strong>${escapeHtml(res.suppressedAt || "-")}</strong></div>
      </div>
    `,
    confirmButtonText: "ตกลง"
  });

} catch (err) {
  await showError(err);
}
}

async function handleEditOutboundSearch() {
stopInlineCamera();

const todayIso = toDateInputValue(new Date());

const result = await Swal.fire({
title: "ค้นหารายการขาออกย้อนหลัง",
html: `


เลือกวันที่บันทึกขาออก



    <div class="confirmNote">
      เลือกวันที่ที่ต้องการตรวจสอบ ระบบจะดึงรายการพาเลทขาออกที่บันทึกไว้แล้วในวันนั้นมาให้แก้ไขหรือลบรายการ
    </div>
  </div>
`,
width: 560,
showCancelButton: true,
confirmButtonText: "ค้นหารายการ",
cancelButtonText: "ยกเลิก",
reverseButtons: true,
focusConfirm: false,
preConfirm: () => {
  const input = $("outboundSearchDate");
  const isoDate = String(input ? input.value || "" : "").trim();

  if (!isoDate) {
    Swal.showValidationMessage("กรุณาเลือกวันที่");
    return false;
  }

  const displayDate = isoDateToDisplayDate(isoDate);

  if (!displayDate) {
    Swal.showValidationMessage("รูปแบบวันที่ไม่ถูกต้อง");
    return false;
  }

  return displayDate;
}
});

if (!result.isConfirmed || !result.value) return;

await openOutboundHistoryDialog(result.value);
}

async function openOutboundHistoryDialog(dateText) {
try {
Swal.fire({
title: "กำลังค้นหารายการ",
html: "กรุณารอสักครู่ ระบบกำลังดึงข้อมูลขาออกย้อนหลัง",
allowOutsideClick: false,
allowEscapeKey: false,
didOpen: () => {
Swal.showLoading();
}
});

const res = await apiGet(
  "/api/outbound-by-date?date=" + encodeURIComponent(dateText),
  60000
);

if (!res.ok) {
  throw new Error(res.message || "ค้นหารายการขาออกย้อนหลังไม่สำเร็จ");
}

const rows = Array.isArray(res.rows) ? res.rows : [];

await Swal.fire({
  title: "รายการขาออกวันที่ " + escapeHtml(res.date || dateText),
  html: buildOutboundHistoryHtml(rows, res.date || dateText),
  width: 900,
  showConfirmButton: false,
  showCloseButton: true,
  didOpen: () => {
    initOutboundHistoryEvents(rows, res.date || dateText);
  }
});
} catch (err) {
await showError(err);
}
}

function buildOutboundHistoryHtml(rows, dateText) {
if (!rows.length) {
return `

✓
ไม่พบรายการขาออก
ไม่พบข้อมูลที่บันทึกขาออกในวันที่ ${escapeHtml(dateText)}

    <button id="searchOutboundAgainBtn" type="button" class="secondaryBtn">
      เลือกวันที่ใหม่
    </button>
  </div>
`;
}

const cards = rows.map((row) => {
const updatedText = row.updatedBy || row.updatedAt
? <div class="editAuditLine"> แก้ไขล่าสุด: ${escapeHtml(row.updatedBy || "-")} ${row.updatedAt ? " / " + escapeHtml(row.updatedAt) : ""} </div>
: <div class="editAuditLine muted"> ยังไม่มีประวัติการแก้ไข </div> ;

return `
  <article class="outboundHistoryCard" data-outbound-id="${escapeAttr(row.outboundId || "")}">
    <div class="outboundHistoryHead">
      <div>
        <div class="plateText">${escapeHtml(row.plateNo || "-")}</div>
        <div class="autoIdText">Outbound ID: ${escapeHtml(row.outboundId || "-")}</div>
        <div class="autoIdText">Auto ID: ${escapeHtml(row.autoId || "-")}</div>
      </div>

      <span class="brandBadge ${String(row.brandOut || "").toUpperCase() === "CHEP" ? "brandChep" : "brandLoscam"}">
        ${escapeHtml(row.brandOut || "-")}
      </span>
    </div>

    <div class="dialogInfoGrid outboundHistoryInfo">
      ${dialogInfo("เวลาออก", row.timestampOut)}
      ${dialogInfo("พขร.", row.driverFullName)}
      ${dialogInfo("จำนวน", row.qtyOut)}
      ${dialogInfo("ECD", row.ecdName)}
      ${dialogInfo("TCR", row.tcrNo)}
      ${dialogInfo("ผู้บันทึก", row.recordedBy)}
    </div>

    ${updatedText}

    <div class="outboundHistoryActions">
      <button
        type="button"
        class="secondaryBtn editOutboundRowBtn"
        data-action="edit"
        data-outbound-id="${escapeAttr(row.outboundId || "")}"
      >
        แก้ไข
      </button>

      <button
        type="button"
        class="secondaryBtn dangerSoftBtn deleteOutboundRowBtn"
        data-action="delete"
        data-outbound-id="${escapeAttr(row.outboundId || "")}"
      >
        ลบรายการนี้
      </button>
    </div>
  </article>
`;
}).join("");

return `



เลือกวันที่ใหม่


    <span>พบ ${rows.length} รายการ</span>
  </div>

  <div id="outboundHistoryList" class="outboundHistoryList">
    ${cards}
  </div>
</div>
`;
}

function initOutboundHistoryEvents(rows, dateText) {
const list = $("outboundHistoryList");
const searchAgainBtn = $("searchOutboundAgainBtn");

if (searchAgainBtn) {
searchAgainBtn.addEventListener("click", async () => {
await handleEditOutboundSearch();
});
}

if (!list) return;

const rowMap = {};
rows.forEach((row) => {
rowMap[String(row.outboundId || "").trim()] = row;
});

list.addEventListener("click", async (ev) => {
const btn = ev.target.closest("button[data-action]");
if (!btn) return;

const action = String(btn.dataset.action || "");
const outboundId = String(btn.dataset.outboundId || "").trim();
const row = rowMap[outboundId];

if (!row) {
  await Swal.fire({
    icon: "error",
    title: "ไม่พบข้อมูลรายการ",
    text: "ไม่พบ Outbound ID ที่เลือก",
    confirmButtonText: "ตกลง"
  });
  return;
}

if (action === "edit") {
  await openEditOutboundDialog(row, dateText);
  return;
}

if (action === "delete") {
  await confirmDeleteOutbound(row, dateText);
}
});
}

async function openEditOutboundDialog(row, dateText) {
const brandOptions = buildBrandSelectOptions(row.brandOut);

const result = await Swal.fire({
title: "แก้ไขรายการขาออก",
html: `


ข้อมูลอ้างอิง

      <div class="dialogInfoGrid">
        ${dialogInfo("Outbound ID", row.outboundId)}
        ${dialogInfo("Auto ID", row.autoId)}
        ${dialogInfo("ทะเบียนรถ", row.plateNo)}
        ${dialogInfo("พขร.", row.driverFullName)}
        ${dialogInfo("เวลาออก", row.timestampOut)}
        ${dialogInfo("Duration", row.duration)}
      </div>

      <div class="confirmNote">
        ข้อมูลเวลาออก, Duration, Auto ID, ทะเบียนรถ และข้อมูล พขร. จะไม่ถูกแก้ไข
      </div>
    </section>

    <section class="dialogSection">
      <h3>ข้อมูลที่แก้ไขได้</h3>

      <div class="docPairGrid">
        <div class="fieldGroup">
          <label for="editBrandOutInput">ยี่ห้อพาเลทขาออก <em>*</em></label>
          <select id="editBrandOutInput" class="dialogInput">
            ${brandOptions}
          </select>
        </div>

        <div class="fieldGroup">
          <label for="editQtyOutInput">จำนวนพาเลทขาออก <em>*</em></label>
          <input
            id="editQtyOutInput"
            class="dialogInput"
            type="number"
            inputmode="numeric"
            min="1"
            step="1"
            value="${escapeAttr(row.qtyOut || "")}"
          >
        </div>
      </div>

      <div class="docPairGrid">
        <div class="fieldGroup">
          <label for="editEcdInput">หมายเลขเอกสาร ECD <em>*</em></label>
          <input
            id="editEcdInput"
            class="dialogInput"
            type="text"
            inputmode="latin"
            maxlength="30"
            value="${escapeAttr(row.ecdName || "")}"
          >
        </div>

        <div class="fieldGroup">
          <label for="editTcrInput">หมายเลขเอกสาร TCR <em>*</em></label>
          <input
            id="editTcrInput"
            class="dialogInput"
            type="text"
            inputmode="latin"
            maxlength="30"
            value="${escapeAttr(row.tcrNo || "")}"
          >
        </div>
      </div>

      <div class="fieldGroup">
        <label for="editNoteInput">หมายเหตุ</label>
        <textarea
          id="editNoteInput"
          class="dialogTextarea"
          rows="3"
        >${escapeHtml(row.note || "")}</textarea>
      </div>

      <div class="helpText">
        รอบนี้แก้ไขเฉพาะข้อมูลตัวอักษร/จำนวนก่อน ส่วนรูปหลักฐานยังคงของเดิม
      </div>
    </section>
  </div>
`,
width: 820,
showCancelButton: true,
confirmButtonText: "บันทึกการแก้ไข",
cancelButtonText: "ยกเลิก",
reverseButtons: true,
focusConfirm: false,
didOpen: () => {
  initEditOutboundInputFilters();
},
preConfirm: () => {
  return collectEditOutboundPayload(row);
}
});

if (!result.isConfirmed || !result.value) return;

await submitUpdateOutbound(result.value, dateText);
}

function initEditOutboundInputFilters() {
const ecd = $("editEcdInput");
const tcr = $("editTcrInput");

if (ecd) {
ecd.addEventListener("input", () => {
ecd.value = ecd.value.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
});
}

if (tcr) {
tcr.addEventListener("input", () => {
tcr.value = tcr.value.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
});
}
}

function collectEditOutboundPayload(row) {
const brandInput = $("editBrandOutInput");
const qtyInput = $("editQtyOutInput");
const ecdInput = $("editEcdInput");
const tcrInput = $("editTcrInput");
const noteInput = $("editNoteInput");

const brandOut = String(brandInput ? brandInput.value || "" : "")
.trim()
.toUpperCase();

const qtyOut = Number(qtyInput ? qtyInput.value || 0 : 0);

const ecdName = String(ecdInput ? ecdInput.value || "" : "")
.trim()
.toUpperCase();

const tcrNo = String(tcrInput ? tcrInput.value || "" : "")
.trim()
.toUpperCase();

const note = String(noteInput ? noteInput.value || "" : "").trim();

if (!brandOut) {
Swal.showValidationMessage("กรุณาเลือกยี่ห้อพาเลทขาออก");
return false;
}

if (!Number.isFinite(qtyOut) || qtyOut <= 0) {
Swal.showValidationMessage("กรุณาระบุจำนวนพาเลทขาออกเป็นตัวเลขมากกว่า 0");
return false;
}

if (!ecdName || !ECD_REGEX.test(ecdName)) {
Swal.showValidationMessage("ECD ใช้ได้เฉพาะตัวอักษรภาษาอังกฤษและตัวเลขเท่านั้น");
return false;
}

if (!tcrNo || !TCR_REGEX.test(tcrNo)) {
Swal.showValidationMessage("TCR ใช้ได้เฉพาะตัวอักษรภาษาอังกฤษและตัวเลขเท่านั้น");
return false;
}

return {
outboundId: row.outboundId,
brandOut,
qtyOut: Math.floor(qtyOut),
ecdName,
tcrNo,
note,
updatedBy: state.currentUser,
recordedBy: state.currentUser
};
}

async function submitUpdateOutbound(payload, dateText) {
try {
Swal.fire({
title: "กำลังบันทึกการแก้ไข",
html: "กรุณารอสักครู่ ระบบกำลังบันทึกข้อมูลและสร้างประวัติการแก้ไข",
allowOutsideClick: false,
allowEscapeKey: false,
didOpen: () => {
Swal.showLoading();
}
});

const res = await apiPost("/api/update-outbound", payload, 60000);

if (!res.ok) {
  throw new Error(res.message || "แก้ไขรายการไม่สำเร็จ");
}

await Swal.fire({
  icon: "success",
  title: "แก้ไขสำเร็จ",
  html: `
    <div class="successSummary">
      <div><span>Outbound ID</span><strong>${escapeHtml(res.outboundId || payload.outboundId || "-")}</strong></div>
      <div><span>ทะเบียนรถ</span><strong>${escapeHtml(res.plateNo || "-")}</strong></div>
      <div><span>ผู้แก้ไข</span><strong>${escapeHtml(res.updatedBy || state.currentUser || "-")}</strong></div>
      <div><span>เวลาแก้ไข</span><strong>${escapeHtml(res.updatedAt || "-")}</strong></div>
    </div>
  `,
  confirmButtonText: "กลับไปดูรายการ"
});

await openOutboundHistoryDialog(dateText);
} catch (err) {
await showError(err);
}
}

async function confirmDeleteOutbound(row, dateText) {
const confirm = await Swal.fire({
icon: "warning",
title: "ลบรายการขาออกนี้?",
html: `

Outbound ID${escapeHtml(row.outboundId || "-")}
ทะเบียนรถ${escapeHtml(row.plateNo || "-")}
พขร.${escapeHtml(row.driverFullName || "-")}
เวลาออก${escapeHtml(row.timestampOut || "-")}


  <div class="confirmNote">
    ระบบจะลบแบบ Soft Delete เท่านั้น ข้อมูลจะยังอยู่ใน Sheet1 พร้อมประวัติ AuditLog และจะไม่แก้ไข Sheet5
  </div>
`,
input: "textarea",
inputLabel: "เหตุผลการลบ",
inputPlaceholder: "เช่น บันทึกผิดรายการ / จำนวนผิดมาก / ยกเลิกเอกสาร",
inputAttributes: {
  maxlength: 250
},
showCancelButton: true,
confirmButtonText: "ยืนยันลบ",
cancelButtonText: "ยกเลิก",
reverseButtons: true,
inputValidator: (value) => {
  if (!String(value || "").trim()) {
    return "กรุณาระบุเหตุผลการลบ";
  }

  return null;
}
});

if (!confirm.isConfirmed) return;

const reason = String(confirm.value || "").trim();

try {
Swal.fire({
title: "กำลังลบรายการ",
html: "กรุณารอสักครู่ ระบบกำลังบันทึกสถานะลบและ AuditLog",
allowOutsideClick: false,
allowEscapeKey: false,
didOpen: () => {
Swal.showLoading();
}
});

const res = await apiPost("/api/delete-outbound", {
  outboundId: row.outboundId,
  deletedBy: state.currentUser,
  recordedBy: state.currentUser,
  reason
}, 60000);

if (!res.ok) {
  throw new Error(res.message || "ลบรายการไม่สำเร็จ");
}

await Swal.fire({
  icon: "success",
  title: "ลบรายการสำเร็จ",
  html: `
    <div class="successSummary">
      <div><span>Outbound ID</span><strong>${escapeHtml(res.outboundId || row.outboundId || "-")}</strong></div>
      <div><span>ทะเบียนรถ</span><strong>${escapeHtml(res.plateNo || row.plateNo || "-")}</strong></div>
      <div><span>ผู้ลบ</span><strong>${escapeHtml(res.deletedBy || state.currentUser || "-")}</strong></div>
      <div><span>เวลาลบ</span><strong>${escapeHtml(res.deletedAt || "-")}</strong></div>
    </div>
  `,
  confirmButtonText: "กลับไปดูรายการ"
});

await openOutboundHistoryDialog(dateText);
} catch (err) {
await showError(err);
}
}

function buildBrandSelectOptions(currentBrand) {
const current = String(currentBrand || "").trim().toUpperCase();

let brands = (state.options.brands || [])
.map((b) => String(b.brand || "").trim().toUpperCase())
.filter(Boolean);

brands = Array.from(new Set(brands.concat(["LOSCAM", "CHEP"])));

return brands.map((brand) => {
const selected = brand === current ? "selected" : "";
return <option value="${escapeAttr(brand)}" ${selected}>${escapeHtml(brand)}</option>;
}).join("");
}

function isoDateToDisplayDate(isoDate) {
const text = String(isoDate || "").trim();
const m = text.match(/^(\d{4})-(\d{2})-(\d{2})$/);

if (!m) return "";

return ${m[3]}/${m[2]}/${m[1]};
}

function toDateInputValue(date) {
const d = date instanceof Date && !isNaN(date.getTime())
? date
: new Date();

const yyyy = d.getFullYear();
const mm = String(d.getMonth() + 1).padStart(2, "0");
const dd = String(d.getDate()).padStart(2, "0");

return ${yyyy}-${mm}-${dd};
}
function removeInboundRowFromState(autoId) {
const target = String(autoId || "").trim();

if (!target) return;

state.inboundRows = state.inboundRows.filter((r) => String(r.autoId || "").trim() !== target);
state.filteredRows = state.filteredRows.filter((r) => String(r.autoId || "").trim() !== target);

renderInboundRows(state.filteredRows);
updateSummary();
}

/* =========================

SUBMIT

========================= */

async function submitOutRecord(payload) {
try {
state.isSubmitting = true;

  Swal.fire({
    title: "กำลังบันทึกข้อมูล",
    html: "กำลังอัปโหลดรูปและบันทึกข้อมูลขาออก กรุณารอจนกว่าระบบจะแจ้งผล",
    allowOutsideClick: false,
    allowEscapeKey: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

  const res = await apiPost("/api/submit-out", payload, 240000);

  if (!res.ok) {
    throw new Error(res.message || "บันทึกข้อมูลไม่สำเร็จ");
  }

  await Swal.fire({
    icon: "success",
    title: "บันทึกสำเร็จ",
    html: `
      <div class="successSummary">
        <div><span>Outbound ID</span><strong>${escapeHtml(res.outboundId || "-")}</strong></div>
        <div><span>Auto ID</span><strong>${escapeHtml(res.autoId || "-")}</strong></div>
        <div><span>ทะเบียนรถ</span><strong>${escapeHtml(res.plateNo || payload.plateNo || "-")}</strong></div>
        <div><span>พขร.</span><strong>${escapeHtml(res.driverFullName || payload.driverFullName || "-")}</strong></div>
        <div><span>ECD</span><strong>${escapeHtml(res.ecdName || payload.ecdName || "-")}</strong></div>
        <div><span>TCR</span><strong>${escapeHtml(res.tcrNo || payload.tcrNo || "-")}</strong></div>
        <div><span>เวลาออก</span><strong>${escapeHtml(res.timestampOut || "-")}</strong></div>
        <div><span>Duration</span><strong>${escapeHtml(res.duration || "-")}</strong></div>
      </div>
    `,
    confirmButtonText: "ตกลง"
  });

  await loadInboundRows(true);

} catch (err) {
  await showError(err);
} finally {
  state.isSubmitting = false;
}
}

/* =========================

API

========================= */

async function apiGet(path, timeoutMs = 60000) {
const url = buildApiUrl(path);

const res = await fetchWithTimeout(url, {
  method: "GET",
  headers: {
    "Accept": "application/json"
  },
  cache: "no-store"
}, timeoutMs);

return parseApiResponse(res);
}

async function apiPost(path, body, timeoutMs = 60000) {
const url = buildApiUrl(path);

const res = await fetchWithTimeout(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(body || {}),
  cache: "no-store"
}, timeoutMs);

return parseApiResponse(res);
}

function buildApiUrl(path) {
const base = String(CONFIG.API_BASE || "").replace(//+$/, "");

if (!base || base.indexOf("YOUR-WORKER") >= 0) {
  throw new Error("ยังไม่ได้ตั้งค่า API_BASE ใน index.html ให้เป็น URL ของ Cloudflare Worker จริง");
}

return base + path;
}

async function parseApiResponse(res) {
const text = await res.text();

let data;

try {
  data = JSON.parse(text);
} catch (err) {
  throw new Error("API ไม่ได้คืนค่าเป็น JSON: " + text.slice(0, 300));
}

if (!res.ok && data && !data.message) {
  data.message = "เกิดข้อผิดพลาดจาก API";
}

return data;
}

function fetchWithTimeout(url, options, timeoutMs) {
const controller = new AbortController();
const timer = setTimeout(() => controller.abort(), timeoutMs || 60000);

return fetch(url, {
  ...options,
  signal: controller.signal
})
  .catch((err) => {
    if (err && err.name === "AbortError") {
      throw new Error("เชื่อมต่อ API เกินเวลาที่กำหนด กรุณาลองใหม่");
    }

    throw err;
  })
  .finally(() => {
    clearTimeout(timer);
  });
}

/* =========================

UTILITIES

========================= */

async function showError(err) {
console.error(err);

await Swal.fire({
  icon: "error",
  title: "เกิดข้อผิดพลาด",
  text: err && err.message ? err.message : String(err),
  confirmButtonText: "ตกลง"
});
}

function showDialogNotice(message, type) {
const box = $("dialogNotice");

if (!box) {
  console.warn(message);
  return;
}

box.className = "dialogNotice";
box.classList.add("dialogNotice-" + (type || "info"));
box.textContent = message || "";
box.classList.remove("isHidden");
}

function clearDialogNotice() {
const box = $("dialogNotice");

if (!box) return;

box.textContent = "";
box.className = "dialogNotice isHidden";
}

function getPassFromUrl() {
const params = new URLSearchParams(window.location.search);
return String(params.get("pass") || "").trim();
}

function getNowDisplay() {
const d = new Date();

const dd = String(d.getDate()).padStart(2, "0");
const mm = String(d.getMonth() + 1).padStart(2, "0");
const yyyy = d.getFullYear();
const hh = String(d.getHours()).padStart(2, "0");
const mi = String(d.getMinutes()).padStart(2, "0");
const ss = String(d.getSeconds()).padStart(2, "0");

return `${dd}/${mm}/${yyyy} ${hh}:${mi}:${ss}`;
}

function joinName(row) {
return [row.prefix, row.firstName, row.lastName]
.filter(Boolean)
.join(" ");
}

function normalizeForSearch(value) {
return String(value || "")
.trim()
.toLowerCase()
.replace(/\s+/g, " ");
}

function escapeHtml(value) {
return String(value || "")
.replace(/&/g, "&")
.replace(/</g, "<")
.replace(/>/g, ">")
.replace(/"/g, """)
.replace(/'/g, "'");
}

function escapeAttr(value) {
return escapeHtml(value).replace(/`/g, "`");
}

})();


