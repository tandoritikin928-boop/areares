/* =====================================================
   Area Hub - Global Script (FINAL)
   Welcome Typing / Page Fade / Micro Animations
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ===== Page Fade In ===== */
  document.body.classList.add("page");

  /* ===== Welcome Typing Effect ===== */
  const welcome = document.querySelector(".welcome");
  if (welcome) {
    const text = welcome.dataset.text || welcome.textContent;
    welcome.textContent = "";

    [...text].forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.animationDelay =
        (Math.random() * 60 + 80) * i + "ms";
      welcome.appendChild(span);
    });
  }

  /* ===== Smooth Page Transition (Link Click) ===== */
  document.querySelectorAll("a").forEach(link => {
    const url = link.getAttribute("href");
    if (!url || url.startsWith("#") || url.startsWith("http")) return;

    link.addEventListener("click", e => {
      e.preventDefault();
      document.body.style.opacity = 0;
      setTimeout(() => {
        window.location.href = url;
      }, 200);
    });
  });

  /* ===== Card Subtle Floating ===== */
  document.querySelectorAll(
    ".card,.script-card,.bypass-card,.tool-card,.exec-btn"
  ).forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      const rx = (y - cy) / 35;
      const ry = (x - cx) / -35;

      card.style.transform =
        `translateY(-2px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });

  /* ===== Copy Button (Scripts Page) ===== */
  document.querySelectorAll("[data-copy]").forEach(btn => {
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(
        "コミュニティ参加をお願い致します。"
      );

      btn.classList.add("copied");
      const old = btn.textContent;
      btn.textContent = "Copied";

      setTimeout(() => {
        btn.textContent = old;
        btn.classList.remove("copied");
      }, 1200);
    });
  });

});
