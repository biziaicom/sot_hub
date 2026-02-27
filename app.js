let currentJaTitle = 'SS 合宿 2026';
let currentEnTitle = 'SS Camp 2026';
let isFontBoosted = false;

function openPage(pageId, jaTitle, enTitle) {
  document.querySelectorAll('.page').forEach((page) => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  currentJaTitle = jaTitle;
  currentEnTitle = enTitle;
  updateHeaderTitle();
  document.getElementById('backBtn').style.display = 'block';
  window.scrollTo(0, 0);
}

function goHome() {
  document.querySelectorAll('.page').forEach((page) => page.classList.remove('active'));
  document.getElementById('homePage').classList.add('active');
  currentJaTitle = 'SS 合宿 2026';
  currentEnTitle = 'SS Camp 2026';
  updateHeaderTitle();
  document.getElementById('backBtn').style.display = 'none';
  window.scrollTo(0, 0);
}

function updateHeaderTitle() {
  const isEn = document.body.classList.contains('en-mode');
  document.getElementById('headerTitle').innerText = isEn ? currentEnTitle : currentJaTitle;
}

function switchTab(tabId, buttonEl) {
  document.querySelectorAll('.tab-btn').forEach((btn) => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach((content) => content.classList.remove('active'));
  buttonEl.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

function toggleFontSize() {
  isFontBoosted = !isFontBoosted;
  document.documentElement.classList.toggle('font-boost', isFontBoosted);
}

function toggleLanguage() {
  const body = document.body;
  body.classList.toggle('en-mode');
  document.getElementById('langBtn').innerText = body.classList.contains('en-mode') ? 'JA' : 'EN';
  updateHeaderTitle();
}

function calculateDDay() {
  const targetDate = new Date('2026-05-03T00:00:00');
  const today = new Date();
  const diffTime = targetDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const badge = document.getElementById('ddayBadge');

  if (diffDays > 0) badge.innerText = `D-${diffDays}`;
  else if (diffDays === 0) badge.innerText = 'D-Day!';
  else badge.innerText = `D+${Math.abs(diffDays)}`;
}

window.onload = calculateDDay;
