(() => {
  "use strict";

  const cards = document.querySelectorAll(".game-card");
  const hues = [198, 270, 32, 145, 12, 224, 52, 335];

  cards.forEach((card, index) => {
    const media = card.querySelector(".game-card__media");
    const titleElement = card.querySelector(".game-card__title");
    const imagePath = (card.dataset.image || "").trim();
    const title = titleElement?.textContent.trim() || "游戏";

    card.style.setProperty("--card-hue", hues[index % hues.length]);

    if (!media || !imagePath) {
      card.classList.add("image-fallback");
      return;
    }

    const image = document.createElement("img");
    image.alt = `${title}封面图`;
    image.loading = "lazy";
    image.decoding = "async";

    image.addEventListener("load", () => {
      card.classList.add("has-image");
      card.classList.remove("image-fallback");
    }, { once: true });

    image.addEventListener("error", () => {
      card.classList.add("image-fallback");
      card.classList.remove("has-image");
      image.remove();
    }, { once: true });

    media.prepend(image);
    image.src = imagePath;
  });
})();
