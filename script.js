const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".category-btn");
const promptCards = document.querySelectorAll(".prompt-card");
const copyButtons = document.querySelectorAll(".copy-btn");

let currentCategory = "all";

function filterPrompts() {
  const keyword = searchInput.value.toLowerCase().trim();

  promptCards.forEach(card => {
    const category = card.dataset.category;
    const text = card.innerText.toLowerCase();

    const matchesCategory = currentCategory === "all" || category === currentCategory;
    const matchesKeyword = keyword === "" || text.includes(keyword);

    if (matchesCategory && matchesKeyword) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    categoryButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    currentCategory = button.dataset.category;
    filterPrompts();
  });
});

searchInput.addEventListener("input", filterPrompts);

copyButtons.forEach(button => {
  button.addEventListener("click", async () => {
    const card = button.closest(".prompt-card");
    const promptText = card.querySelector(".prompt-text").innerText;

    try {
      await navigator.clipboard.writeText(promptText);
      button.innerText = "已复制";
      setTimeout(() => {
        button.innerText = "复制提示词";
      }, 1500);
    } catch (error) {
      alert("复制失败，请手动选择复制。");
    }
  });
});
