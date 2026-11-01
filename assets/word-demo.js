if (window.wordDemoAssets?.icons) {
  const spriteDocument = new DOMParser().parseFromString(window.wordDemoAssets.icons, "image/svg+xml");
  const sprite = document.importNode(spriteDocument.documentElement, true);
  sprite.classList.add("word-icon-sprite");
  document.body.prepend(sprite);
}

const app = document.getElementById("word-app");
const pagesHost = document.getElementById("pages");
const scroller = document.getElementById("document-scroll");
const ui = {
  vi: {
    saved: "Bản xem trước · Nội dung từ Markdown", back: "← Portfolio", share: "Chia sẻ ↗", file: "Tệp", home: "Trang đầu", insert: "Chèn", design: "Thiết kế", layout: "Bố trí", references: "Tham chiếu", mailings: "Thư", review: "Xem lại", view: "Xem", help: "Trợ giúp", comments: "▢ Bình luận", editing: "✎ Chỉnh sửa", demo: "BẢN DEMO", download: "Tải file .md", print: "In tài liệu", fileGroup: "Tệp", fileHint: "Nội dung được đọc trực tiếp từ file Markdown. Đây là bản xem trước, không phải trình soạn thảo.", copy: "Sao chép liên kết", clipboard: "Bảng nhớ tạm", paste: "Dán", font: "Phông chữ", fontSize: "Cỡ chữ", paragraph: "Đoạn văn", normal: "Thường", noSpacing: "Không giãn", heading: "Tiêu đề", styles: "Kiểu", find: "Tìm", replace: "Thay", select: "Chọn", editingGroup: "Chỉnh sửa", dictate: "Đọc", voice: "Giọng nói", editor: "Biên tập", editorGroup: "Biên tập", addins: "Tiện ích", profile: "Hồ sơ", skills: "Kỹ năng", navigate: "Điều hướng", insertHint: "Chọn một mục để chuyển đến trang chứa nội dung tương ứng.", designHint: "Bản demo giữ một kiểu tài liệu nhất quán; định dạng nội dung nằm trong file Markdown.", a4: "Khổ A4", margins: "Lề rộng", pageSetup: "Thiết lập trang", layoutHint: "Hai trang giấy A4 với lề và khoảng cách chữ theo phong cách tài liệu Word.", referencesHint: "Liên kết dự án và hồ sơ được đặt ngay trong tài liệu Markdown.", mailingsHint: "Trang portfolio này là bản xem trước, không gửi thư từ thanh công cụ.", reviewHint: "Đây là bản trình bày chỉ đọc. Hãy chỉnh nội dung trong file .md để cập nhật tài liệu.", helpHint: "Bạn có thể mở, tải hoặc chỉnh file .md; trang HTML chỉ đảm nhiệm giao diện Word.", proofingTitle: "BẬT KIỂM TRA CHÍNH TẢ", proofingBody: "Bản demo không kiểm tra chính tả của tài liệu này.", proofingDismiss: "Ẩn thông báo", readMode: "Chế độ đọc", viewGroup: "Chế độ xem", zoom100: "100%", zoom: "Thu phóng", pages: "TRANG", overview: "Tổng quan", experience: "Kỹ năng & liên hệ", source: "Nguồn nội dung", loading: "Đang mở tài liệu Markdown…", copied: "Đã sao chép liên kết", copyFailed: "Không sao chép được. Liên kết:", loadFailed: "Không mở được file Markdown.", pageStatus: (n) => `Trang ${n} / 2`, wordCount: (n) => `${n} từ`, document: "TÀI LIỆU PORTFOLIO", page: "Trang"
  },
  en: {
    saved: "Preview · Content from Markdown", back: "← Portfolio", share: "Share ↗", file: "File", home: "Home", insert: "Insert", design: "Design", layout: "Layout", references: "References", mailings: "Mailings", review: "Review", view: "View", help: "Help", comments: "▢ Comments", editing: "✎ Editing", demo: "DEMO", download: "Download .md", print: "Print document", fileGroup: "File", fileHint: "Content is loaded directly from a Markdown file. This is a preview, not an editor.", copy: "Copy link", clipboard: "Clipboard", paste: "Paste", font: "Font", fontSize: "Font size", paragraph: "Paragraph", normal: "Normal", noSpacing: "No Spacing", heading: "Heading", styles: "Styles", find: "Find", replace: "Replace", select: "Select", editingGroup: "Editing", dictate: "Dictate", voice: "Voice", editor: "Editor", editorGroup: "Editor", addins: "Add-ins", profile: "Profile", skills: "Skills", navigate: "Navigate", insertHint: "Choose a section to jump to its page.", designHint: "This preview uses one consistent document theme; the Markdown file provides the content.", a4: "A4 size", margins: "Wide margins", pageSetup: "Page setup", layoutHint: "Two A4 pages with Word-inspired margins and typography.", referencesHint: "Project and profile links are part of the Markdown document.", mailingsHint: "This portfolio is a preview; the ribbon does not send mail.", reviewHint: "This is a read-only presentation. Edit the .md file to update the document.", helpHint: "You can open, download, or edit the .md file; HTML provides the Word-like interface.", proofingTitle: "TURN ON PROOFING", proofingBody: "Spelling and grammar are not checked in this demo.", proofingDismiss: "Don't show again", readMode: "Reading mode", viewGroup: "Views", zoom100: "100%", zoom: "Zoom", pages: "PAGES", overview: "Overview", experience: "Skills & contact", source: "Content source", loading: "Opening Markdown document…", copied: "Link copied", copyFailed: "Could not copy. Link:", loadFailed: "Could not load the Markdown file.", pageStatus: (n) => `Page ${n} / 2`, wordCount: (n) => `${n} words`, document: "PORTFOLIO DOCUMENT", page: "Page"
  }
};

let language = "vi";
let currentPage = 1;
let toastTimer;

const escapeHtml = (value) => value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/\[([^\]]+)\]\((https:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1 ↗</a>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

function markdownToHtml(markdown) {
  const lines = markdown.trim().split(/\r?\n/);
  const output = [];
  let listOpen = false;
  const closeList = () => { if (listOpen) { output.push("</ul>"); listOpen = false; } };
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) { closeList(); continue; }
    const image = line.match(/^!\[([^\]]*)\]\((assets\/images\/portrait\.jpg)\)$/);
    if (image) { closeList(); output.push(`<figure class="doc-portrait"><img src="${image[2]}" alt="${escapeHtml(image[1])}"></figure>`); continue; }
    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) { closeList(); const level = heading[1].length; output.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`); continue; }
    if (line.startsWith("> ")) { closeList(); output.push(`<blockquote>${inlineMarkdown(line.slice(2))}</blockquote>`); continue; }
    if (line.startsWith("- ")) { if (!listOpen) { output.push("<ul>"); listOpen = true; } output.push(`<li>${inlineMarkdown(line.slice(2))}</li>`); continue; }
    closeList();
    output.push(`<p>${inlineMarkdown(line)}</p>`);
  }
  closeList();
  return output.join("\n");
}

function updateStatus() {
  document.getElementById("page-status").textContent = ui[language].pageStatus(currentPage);
  document.querySelectorAll(".page-thumbnail").forEach((thumb) => thumb.classList.toggle("is-active", Number(thumb.dataset.page) === currentPage));
}

function renderPages(markdown) {
  const parts = markdown.trim().split(/\r?\n---\r?\n/);
  pagesHost.innerHTML = parts.map((part, index) => `<article class="word-page" id="page-${index + 1}" aria-label="${ui[language].page} ${index + 1}"><span class="page-corner">${ui[language].document}</span><div class="doc-content">${markdownToHtml(part)}</div><footer class="page-footer"><span>NGUYEN MINH THUC · PORTFOLIO</span><span>${String(index + 1).padStart(2, "0")} / ${String(parts.length).padStart(2, "0")}</span></footer></article>`).join("");
  document.getElementById("word-count").textContent = ui[language].wordCount(markdown.replace(/[^\p{L}\p{N}]+/gu, " ").trim().split(/\s+/).length);
  document.getElementById("font-family").dispatchEvent(new Event("change"));
  document.getElementById("font-size").dispatchEvent(new Event("change"));
  document.querySelectorAll(".doc-content").forEach((content) => {
    content.classList.toggle("is-bold", document.querySelector('[data-action="bold"]').getAttribute("aria-pressed") === "true");
    content.classList.toggle("is-italic", document.querySelector('[data-action="italic"]').getAttribute("aria-pressed") === "true");
    const alignment = document.querySelector('[data-action^="align-"][aria-pressed="true"]')?.dataset.action.slice(6);
    if (alignment && alignment !== "left") content.classList.add(`align-${alignment}`);
  });
  currentPage = 1;
  updateStatus();
  scroller.scrollTop = 0;
}

async function setLanguage(next) {
  language = next === "en" ? "en" : "vi";
  document.documentElement.lang = language;
  for (const element of document.querySelectorAll("[data-ui]")) {
    const label = ui[language][element.dataset.ui];
    if (typeof label === "string") element.textContent = label;
  }
  document.querySelectorAll(".lang-vi,.lang-en").forEach((element) => element.classList.toggle("active", element.classList.contains(`lang-${language}`)));
  const file = `word-demo.${language}.md`;
  document.getElementById("document-name").textContent = `Portfolio_NguyenMinhThuc.${language}.md`;
  document.getElementById("source-filename").textContent = file;
  document.getElementById("download-md").href = file;
  document.getElementById("language-button").setAttribute("aria-label", language === "vi" ? "Switch to English" : "Chuyển sang tiếng Việt");
  document.title = `${language === "vi" ? "Nguyễn Minh Thức" : "Nguyen Minh Thuc"} — Word portfolio demo`;
  const url = new URL(location.href);
  if (language === "en") url.searchParams.set("lang", "en");
  else url.searchParams.delete("lang");
  history.replaceState(null, "", url);
  let markdown;
  if (location.protocol !== "file:") {
    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      markdown = await response.text();
    } catch (_) {}
  }
  markdown ||= window.wordDemoAssets?.markdown?.[language];
  if (markdown) renderPages(markdown);
  else {
    pagesHost.innerHTML = `<div class="loading">${ui[language].loadFailed}</div>`;
  }
  try { localStorage.setItem("portfolio-language", language); } catch (_) {}
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.hidden = true; }, 3500);
}

async function copyLink() {
  const url = location.href.split("#")[0];
  try { await navigator.clipboard.writeText(url); showToast(ui[language].copied); }
  catch (_) { showToast(`${ui[language].copyFailed} ${url}`); }
}

function togglePressed(action, className) {
  const button = document.querySelector(`[data-action="${action}"]`);
  const active = !button.classList.contains("is-active");
  button.classList.toggle("is-active", active);
  button.setAttribute("aria-pressed", String(active));
  document.querySelectorAll(".doc-content").forEach((content) => content.classList.toggle(className, active));
}

function setZoom(value) {
  const zoom = Math.max(80, Math.min(120, Number(value)));
  document.documentElement.style.setProperty("--page-zoom", String(zoom / 100));
  document.getElementById("zoom-range").value = String(zoom);
  document.getElementById("zoom-value").textContent = `${zoom}%`;
}

document.querySelectorAll("[data-tab]").forEach((tab) => tab.addEventListener("click", () => {
  document.querySelectorAll("[data-tab]").forEach((item) => item.setAttribute("aria-selected", String(item === tab)));
  document.querySelectorAll("[data-panel]").forEach((panel) => { panel.hidden = panel.dataset.panel !== tab.dataset.tab; });
}));

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  if (action === "copy") copyLink();
  else if (action === "print") window.print();
  else if (action === "jump") {
    const target = document.getElementById(`page-${button.dataset.page}`);
    if (target) { target.scrollIntoView({ behavior: "smooth", block: "start" }); currentPage = Number(button.dataset.page); updateStatus(); }
  }
  else if (action === "bold" || action === "italic") togglePressed(action, `is-${action}`);
  else if (action === "font-plus" || action === "font-minus") {
    const select = document.getElementById("font-size");
    const sizes = [...select.options].map((option) => Number(option.value));
    const index = Math.max(0, sizes.indexOf(Number(select.value)) + (action === "font-plus" ? 1 : -1));
    select.value = String(sizes[Math.min(sizes.length - 1, index)]);
    select.dispatchEvent(new Event("change"));
  }
  else if (action.startsWith("align-")) {
    const alignment = action.slice(6);
    document.querySelectorAll('[data-action^="align-"]').forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    document.querySelectorAll(".doc-content").forEach((content) => { content.classList.remove("align-center", "align-right"); if (alignment !== "left") content.classList.add(`align-${alignment}`); });
  }
  else if (action === "line-space") document.querySelectorAll(".doc-content").forEach((content) => content.classList.toggle("spacious"));
  else if (action === "read-mode") {
    const active = app.classList.toggle("reading-mode");
    document.querySelectorAll('[data-action="read-mode"]').forEach((item) => item.setAttribute("aria-pressed", String(active)));
  }
  else if (action === "zoom-reset") setZoom(100);
  else if (action === "proofing-hide") document.getElementById("proofing-bar").hidden = true;
});

document.getElementById("font-family").addEventListener("change", (event) => {
  pagesHost.style.fontFamily = event.target.value === "georgia" ? 'Georgia, "Times New Roman", serif' : 'Arial, "Segoe UI", sans-serif';
});
document.getElementById("font-size").addEventListener("change", (event) => document.documentElement.style.setProperty("--doc-font-size", `${event.target.value}px`));
document.getElementById("zoom-range").addEventListener("input", (event) => setZoom(event.target.value));
document.getElementById("language-button").addEventListener("click", () => setLanguage(language === "vi" ? "en" : "vi"));
scroller.addEventListener("scroll", () => {
  const items = [...pagesHost.querySelectorAll(".word-page")];
  if (!items.length) return;
  const top = scroller.getBoundingClientRect().top;
  currentPage = items.reduce((best, page, index) => Math.abs(page.getBoundingClientRect().top - top) < Math.abs(items[best - 1].getBoundingClientRect().top - top) ? index + 1 : best, 1);
  updateStatus();
}, { passive: true });

let preferredLanguage = "vi";
try { preferredLanguage = localStorage.getItem("portfolio-language") || "vi"; } catch (_) {}
preferredLanguage = new URLSearchParams(location.search).get("lang") || preferredLanguage;
setLanguage(preferredLanguage);
