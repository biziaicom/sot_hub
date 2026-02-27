const pageTitle = document.getElementById("pageTitle");
const backBtn = document.getElementById("backBtn");
const views = document.querySelectorAll(".view");
const actionButtons = document.querySelectorAll("[data-target]");

// Switches the visible view and updates the top title/nav state.
function openView(targetId, titleText) {
  views.forEach((view) => view.classList.toggle("active", view.id === targetId));

  const isHome = targetId === "home";
  backBtn.style.visibility = isHome ? "hidden" : "visible";
  pageTitle.textContent = titleText;

  document.querySelectorAll(".tab-btn").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.target === targetId);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Delegates navigation actions for both menu cards and bottom tabs.
actionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.target;
    const title = button.dataset.title;
    openView(target, title);
  });
});

backBtn.addEventListener("click", () => {
  openView("home", "Single Singers Camp");
});
