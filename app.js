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
