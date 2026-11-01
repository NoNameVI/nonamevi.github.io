const links = {
  github: "https://github.com/NoNameVI",
  aura: "https://gitlab.com/auraproject/aura-shore-store",
  tetris: "https://github.com/NoNameVI/Tetris2048Fushion"
};

const copyTargets = ["github", "aura", "tetris", "github", "github", "github"];

const translations = {
  vi: {
    skip: "Chuyển đến nội dung", searchLabel: "Tìm slide", searchPlaceholder: "Tìm slide",
    copyAria: "Sao chép liên kết phù hợp với slide", cutAria: "Cắt: sao chép liên kết phù hợp với slide",
    previous: "Trước", next: "Tiếp", show: "Trình chiếu", replay: "Phát lại", exitShow: "Thoát trình chiếu ×",
    thumbIntro: "Giới thiệu", thumbMethod: "Cách tôi làm việc", thumbSkills: "Kỹ năng & cột mốc", thumbContact: "Liên hệ", thumbContactPreview: "KẾT NỐI.", shapes: "Hình", arrange: "Sắp xếp",
    introKicker: "01 / GIỚI THIỆU", introLine1: "TÔI XÂY", introLine2: "PHẦN LÕI", introLine3: "CHO SẢN PHẨM CÓ THỂ DÙNG.",
    introDescription: "Từ yêu cầu đến luồng chức năng rõ ràng, rồi đưa sản phẩm tới trạng thái sử dụng được.", portraitAlt: "Chân dung Nguyễn Minh Thức", rowCleared: "HÀNG ĐÃ XÓA",
    auraKicker: "02 / DỰ ÁN WEB", auraLead: "Hệ thống bán giày cho khách hàng và quản trị viên.",
    roleLabel: "VAI TRÒ", auraRole: "Trưởng nhóm · Java Backend", coreLabel: "PHẦN LÕI", auraCore: "Sản phẩm, danh mục, thương hiệu",
    highlightLabel: "ĐIỂM NHẤN", auraHighlight: "Tách tìm kiếm danh mục theo khách hàng và quản trị viên", openGitLab: "MỞ DỰ ÁN TRÊN GITLAB",
    tetrisKicker: "03 / GAME JAVA DESKTOP", tetrisLead: "Trò chơi JavaFX kết hợp xếp khối và hợp nhất số trên bàn cờ 10 × 20.",
    roleLabel2: "VAI TRÒ", tetrisRole: "Trưởng nhóm · cơ chế trò chơi cốt lõi", mechanicLabel: "CƠ CHẾ", tetrisMechanic: "Khối rơi, xoay, di chuyển và hợp nhất dọc",
    integrationLabel: "TÍCH HỢP", tetrisIntegration: "Phối hợp hoàn thiện năm chế độ chơi", openGitHub: "MỞ DỰ ÁN TRÊN GITHUB",
    methodKicker: "04 / CÁCH TÔI LÀM VIỆC", methodHeading: "TỪ BÀI TOÁN<br>ĐẾN BẢN CHẠY ĐƯỢC.",
    methodLead: "Tôi bắt đầu từ mục tiêu, dữ liệu và quy tắc nghiệp vụ; sau đó chia công việc rõ ràng để cả nhóm tích hợp thuận lợi.",
    method1Title: "Làm rõ bài toán", method1Body: "Chia chức năng thành luồng dữ liệu và quy tắc có thể kiểm tra.",
    method2Title: "Xây phần lõi", method2Body: "Ưu tiên logic có cấu trúc và giao diện rõ giữa các thành phần.",
    method3Title: "Tích hợp cùng nhóm", method3Body: "Phân công, theo dõi và rà soát thay đổi trước khi ghép nhánh.",
    skillsKicker: "05 / KỸ NĂNG & CỘT MỐC", skillsHeading: "NỀN TẢNG<br>ĐỂ TIẾP TỤC XÂY DỰNG.",
    langLabel: "NGÔN NGỮ", dataLabel: "DỮ LIỆU", toolsLabel: "CÔNG CỤ", englishLabel: "TIẾNG ANH", englishSkill: "Đọc hiểu phần lớn tài liệu kỹ thuật", milestones: "Cột mốc",
    award1: "Giải Nhất Tin học trẻ cấp tỉnh Kiên Giang", award2: "Tham gia ICPC khu vực miền Nam", award3: "Sinh viên giỏi học kỳ Spring tại Đại học FPT",
    education: "Kỹ thuật phần mềm · Đại học FPT Cần Thơ · GPA 3.28/4 · 2024 – hiện tại",
    contactKicker: "06 / LIÊN HỆ", contactHeading: "CÙNG GIẢI QUYẾT<br>MỘT BÀI TOÁN THỰC TẾ.",
    contactLead: "Tôi đang tìm cơ hội Java Backend để tiếp tục rèn kỹ năng xây dựng sản phẩm và làm việc cùng một đội ngũ có kinh nghiệm.",
    emailMe: "GỬI EMAIL", viewCv: "XEM CV", notes: "Nhấp thumbnail, cuộn chuột hoặc dùng phím mũi tên để chuyển slide.",
    statusLanguage: "Tiếng Việt", accessibility: "Trợ năng: Sẵn sàng", labels: ["GIỚI THIỆU", "AURA SHOE STORE", "TETRIS 2048 FUSION", "CÁCH TÔI LÀM VIỆC", "KỸ NĂNG & CỘT MỐC", "LIÊN HỆ"],
    menu: ["Tệp", "Trang đầu", "Chèn", "Vẽ", "Thiết kế", "Chuyển tiếp", "Hoạt ảnh", "Trình chiếu", "Ghi", "Xem lại", "Hiển thị", "Trợ giúp"],
    ribbon: ["Bảng nhớ tạm", "Slide", "Phông chữ", "Đoạn văn", "Hình vẽ", "Trình chiếu"],
    copy: "Sao chép", cut: "Cắt", copied: "Đã sao chép liên kết", failedCopy: "Không thể tự sao chép. Liên kết:", noResults: "Không tìm thấy slide phù hợp.",
    appTitle: "Nguyễn Minh Thức - Portfolio - PowerPoint", autoSave: "Tự động lưu", autoOff: "Tắt", search: "Tìm kiếm", slideCount: (n) => `Slide ${n} / 6`
  },
  en: {
    skip: "Skip to content", searchLabel: "Search slides", searchPlaceholder: "Search slides",
    copyAria: "Copy the link for the current slide", cutAria: "Cut: copy the link for the current slide",
    previous: "Previous", next: "Next", show: "Slide Show", replay: "Replay", exitShow: "Exit slide show ×",
    thumbIntro: "Introduction", thumbMethod: "How I work", thumbSkills: "Skills & milestones", thumbContact: "Contact", thumbContactPreview: "LET'S TALK.", shapes: "Shapes", arrange: "Arrange",
    introKicker: "01 / INTRODUCTION", introLine1: "I BUILD", introLine2: "THE CORE", introLine3: "FOR SOFTWARE PEOPLE CAN USE.",
    introDescription: "I turn requirements into clear flows and help bring software to a usable state.", portraitAlt: "Portrait of Nguyen Minh Thuc", rowCleared: "ROW CLEARED",
    auraKicker: "02 / WEB PROJECT", auraLead: "A shoe store with a customer storefront and admin area.",
    roleLabel: "ROLE", auraRole: "Team Lead · Java Backend", coreLabel: "CORE WORK", auraCore: "Products, categories, and brands",
    highlightLabel: "HIGHLIGHT", auraHighlight: "Different category search behavior for customers and admins", openGitLab: "OPEN PROJECT ON GITLAB",
    tetrisKicker: "03 / JAVA DESKTOP GAME", tetrisLead: "A JavaFX game combining falling blocks and number merging on a 10 × 20 board.",
    roleLabel2: "ROLE", tetrisRole: "Team Lead · Core game mechanics", mechanicLabel: "MECHANICS", tetrisMechanic: "Falling, rotation, movement, and vertical merging",
    integrationLabel: "INTEGRATION", tetrisIntegration: "Coordinated integration of five game modes", openGitHub: "OPEN PROJECT ON GITHUB",
    methodKicker: "04 / HOW I WORK", methodHeading: "FROM THE PROBLEM<br>TO WORKING SOFTWARE.",
    methodLead: "I start with goals, data, and business rules, then define clear tasks so the team can integrate its work smoothly.",
    method1Title: "Clarify the problem", method1Body: "Break features into data flows and testable rules.",
    method2Title: "Build the core", method2Body: "Prioritize structured logic and clear interfaces between components.",
    method3Title: "Integrate as a team", method3Body: "Assign, track, and review changes before merging.",
    skillsKicker: "05 / SKILLS & MILESTONES", skillsHeading: "A FOUNDATION<br>TO KEEP BUILDING.",
    langLabel: "LANGUAGES", dataLabel: "DATA", toolsLabel: "TOOLS", englishLabel: "ENGLISH", englishSkill: "Read most technical documentation", milestones: "Milestones",
    award1: "First Prize, Kien Giang Provincial Youth Informatics Contest", award2: "Participated in ICPC Southern Vietnam", award3: "Honorable Student, Spring trimester at FPT University",
    education: "Software Engineering · FPT University, Can Tho Campus · GPA 3.28/4 · 2024 – present",
    contactKicker: "06 / CONTACT", contactHeading: "LET'S SOLVE<br>A REAL PROBLEM.",
    contactLead: "I'm looking for a Java Backend opportunity to keep building products and learning from an experienced team.",
    emailMe: "EMAIL ME", viewCv: "VIEW CV", notes: "Click a thumbnail, scroll, or use the arrow keys to move between slides.",
    statusLanguage: "English", accessibility: "Accessibility: Good to go", labels: ["INTRODUCTION", "AURA SHOE STORE", "TETRIS 2048 FUSION", "HOW I WORK", "SKILLS & MILESTONES", "CONTACT"],
    menu: ["File", "Home", "Insert", "Draw", "Design", "Transitions", "Animations", "Slide Show", "Record", "Review", "View", "Help"],
    ribbon: ["Clipboard", "Slides", "Font", "Paragraph", "Drawing", "Slide Show"],
    copy: "Copy", cut: "Cut", copied: "Copied link", failedCopy: "Clipboard unavailable. Link:", noResults: "No matching slide found.",
    appTitle: "Nguyen Minh Thuc - Portfolio - PowerPoint", autoSave: "AutoSave", autoOff: "Off", search: "Search", slideCount: (n) => `Slide ${n} of 6`
  }
};

const app = document.getElementById("portfolio-app");
const stage = document.getElementById("slide-stage");
const panels = [...stage.querySelectorAll("[data-slide-panel]")];
const thumbnails = [...document.querySelectorAll(".slide-thumbnail")];
const tArt = stage.querySelector(".t-art");
const toast = document.getElementById("copy-toast");
let currentSlide = 0;
let language = "vi";
let lastWheel = 0;
let mergeTimer;
let toastTimer;
let replayTimer;

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.hidden = false;
  toastTimer = setTimeout(() => { toast.hidden = true; }, 4000);
}

function resetMerge() {
  clearTimeout(mergeTimer);
  tArt.classList.remove("is-dropping");
}

function playMerge() {
  resetMerge();
  void tArt.offsetWidth;
  tArt.classList.add("is-dropping");
}

function goToSlide(index, { updateHash = true } = {}) {
  const next = Math.max(0, Math.min(panels.length - 1, index));
  if (next === currentSlide) {
    if (next === 2) playMerge();
    return;
  }
  clearTimeout(replayTimer);
  resetMerge();
  currentSlide = next;
  stage.dataset.slide = String(next);
  panels.forEach((panel, i) => {
    if (i === next) { panel.removeAttribute("aria-hidden"); panel.removeAttribute("inert"); }
    else { panel.setAttribute("aria-hidden", "true"); panel.setAttribute("inert", ""); }
  });
  thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle("is-active", i === next);
    if (i === next) thumb.setAttribute("aria-current", "true");
    else thumb.removeAttribute("aria-current");
  });
  document.getElementById("slide-count").textContent = translations[language].slideCount(next + 1);
  document.querySelector(".slide-label").textContent = translations[language].labels[next];
  document.getElementById("previous-slide").disabled = next === 0;
  document.getElementById("next-slide").disabled = next === panels.length - 1;
  if (next === 2) mergeTimer = setTimeout(playMerge, 950);
  if (updateHash) history.replaceState(null, "", `#slide-${next + 1}`);
}

function setLanguage(next) {
  language = next === "en" ? "en" : "vi";
  const words = translations[language];
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (!(key in words)) return;
    if (["methodHeading", "skillsHeading", "contactHeading"].includes(key)) node.innerHTML = words[key];
    else node.textContent = words[key];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((node) => { node.setAttribute("aria-label", words[node.dataset.i18nAria]); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => { node.placeholder = words[node.dataset.i18nPlaceholder]; });
  document.querySelectorAll(".menu-bar span").forEach((node, i) => { node.textContent = words.menu[i]; });
  document.querySelectorAll(".ribbon-group>small").forEach((node, i) => { node.textContent = words.ribbon[i]; });
  document.querySelector("#copy-link span:last-child").textContent = words.copy;
  document.querySelector("#cut-link span:last-child").textContent = words.cut;
  document.getElementById("copy-link").title = words.copyAria;
  document.getElementById("cut-link").title = words.cutAria;
  document.querySelector(".document-title").textContent = words.appTitle;
  document.querySelector(".autosave").firstChild.textContent = words.autoSave + " ";
  document.querySelector(".autosave i").textContent = words.autoOff;
  document.querySelector(".slide-search>span").textContent = "⌕";
  document.querySelectorAll(".lang-vi,.lang-en").forEach((node) => node.classList.toggle("active", node.classList.contains("lang-" + language)));
  document.getElementById("language-toggle").setAttribute("aria-label", language === "vi" ? "Switch to English" : "Chuyển sang tiếng Việt");
  document.querySelector(".slide-label").textContent = words.labels[currentSlide];
  document.querySelector(".portrait-art img").alt = words.portraitAlt;
  document.getElementById("slide-count").textContent = words.slideCount(currentSlide + 1);
  document.querySelector('meta[name="description"]').content = language === "vi"
    ? "Portfolio Nguyễn Minh Thức — Java Backend, AURA Shoe Store và Tetris 2048 Fusion."
    : "Nguyen Minh Thuc's Java Backend portfolio featuring AURA Shoe Store and Tetris 2048 Fusion.";
  document.querySelector("[data-cv-link]").href = `assets/cv/CV_Nguyen_Minh_Thuc_${language.toUpperCase()}.pdf`;
  try { localStorage.setItem("portfolio-language", language); } catch (_) {}
}

async function copyCurrentLink() {
  const key = copyTargets[currentSlide];
  const url = links[key];
  let copied = false;
  try { await navigator.clipboard.writeText(url); copied = true; } catch (_) {}
  if (!copied) {
    const field = document.createElement("textarea");
    field.value = url;
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    try { copied = document.execCommand("copy"); } catch (_) {}
    field.remove();
  }
  const label = key === "aura" ? "AURA GitLab" : key === "tetris" ? "Tetris GitHub" : "GitHub";
  showToast(copied ? `${translations[language].copied}: ${label}` : `${translations[language].failedCopy} ${url}`);
}

function startPresentation() {
  app.classList.add("is-presenting");
  if (app.requestFullscreen) app.requestFullscreen().catch(() => {});
}

function exitPresentation() {
  app.classList.remove("is-presenting");
  if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
}

thumbnails.forEach((thumb, i) => thumb.addEventListener("click", () => goToSlide(i)));
document.getElementById("previous-slide").addEventListener("click", () => goToSlide(currentSlide - 1));
document.getElementById("next-slide").addEventListener("click", () => goToSlide(currentSlide + 1));
document.getElementById("copy-link").addEventListener("click", copyCurrentLink);
document.getElementById("cut-link").addEventListener("click", copyCurrentLink);
document.getElementById("start-show").addEventListener("click", startPresentation);
document.getElementById("exit-show").addEventListener("click", exitPresentation);
document.getElementById("replay-morph").addEventListener("click", () => {
  if (currentSlide === 2) { playMerge(); return; }
  const target = currentSlide === 0 ? 1 : currentSlide;
  goToSlide(Math.max(0, target - 1));
  replayTimer = setTimeout(() => goToSlide(target), 110);
});
document.getElementById("language-toggle").addEventListener("click", () => setLanguage(language === "vi" ? "en" : "vi"));
document.getElementById("slide-search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const query = document.getElementById("slide-search-input").value.trim().toLocaleLowerCase();
  if (!query) return;
  const index = translations[language].labels.findIndex((label) => label.toLocaleLowerCase().includes(query));
  if (index < 0) showToast(translations[language].noResults);
  else goToSlide(index);
});
stage.addEventListener("wheel", (event) => {
  if (Math.abs(event.deltaY) < 8) return;
  event.preventDefault();
  const now = Date.now();
  if (now - lastWheel < 850) return;
  lastWheel = now;
  goToSlide(currentSlide + (event.deltaY > 0 ? 1 : -1));
}, { passive: false });
let touchStartX = 0;
let touchStartY = 0;
stage.addEventListener("touchstart", (event) => { touchStartX = event.changedTouches[0].screenX; touchStartY = event.changedTouches[0].screenY; }, { passive: true });
stage.addEventListener("touchend", (event) => {
  const deltaX = touchStartX - event.changedTouches[0].screenX;
  const deltaY = touchStartY - event.changedTouches[0].screenY;
  const dominant = Math.abs(deltaY) >= Math.abs(deltaX) ? deltaY : deltaX;
  if (Math.abs(dominant) > 55) goToSlide(currentSlide + (dominant > 0 ? 1 : -1));
}, { passive: true });
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && app.classList.contains("is-presenting")) { exitPresentation(); return; }
  if (["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) return;
  if (["ArrowRight", "ArrowDown", "PageDown"].includes(event.key)) { event.preventDefault(); goToSlide(currentSlide + 1); }
  else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) { event.preventDefault(); goToSlide(currentSlide - 1); }
  else if (event.key === "Home") { event.preventDefault(); goToSlide(0); }
  else if (event.key === "End") { event.preventDefault(); goToSlide(panels.length - 1); }
});
document.addEventListener("fullscreenchange", () => { if (!document.fullscreenElement) app.classList.remove("is-presenting"); });
window.addEventListener("hashchange", () => {
  const match = location.hash.match(/^#slide-([1-6])$/);
  if (match) goToSlide(Number(match[1]) - 1, { updateHash: false });
});

try { if (localStorage.getItem("portfolio-language") === "en") language = "en"; } catch (_) {}
setLanguage(language);
const initialHash = location.hash.match(/^#slide-([1-6])$/);
if (initialHash) goToSlide(Number(initialHash[1]) - 1, { updateHash: false });
document.getElementById("previous-slide").disabled = currentSlide === 0;
