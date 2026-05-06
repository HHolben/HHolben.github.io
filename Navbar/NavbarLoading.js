async function loadNavbar() {
  const container = document.getElementById("navbar");
  if (!container) return;

  const depth = (typeof NestIndex !== "undefined") ? NestIndex : 0;
  const prefix = "../".repeat(depth);

  try {
    const response = await fetch(prefix + "Navbar/Navbar.html");

    if (!response.ok) {
      throw new Error(`Failed to load navbar: ${response.status}`);
    }

    const html = await response.text();
    container.innerHTML = html;

    const links = container.querySelectorAll("a[data-href]");
    links.forEach(link => {
      const target = link.getAttribute("data-href");
      link.href = prefix + target;
    });

  } catch (err) {
    console.error("Navbar failed to load:", err);
  }
}

loadNavbar();