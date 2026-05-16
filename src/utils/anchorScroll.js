export function scrollToSectionById(id, behavior = "smooth") {
  if (!id) return;

  const element = document.getElementById(id);
  if (!element) return;
  const rootFontSize = parseFloat(
    window.getComputedStyle(document.documentElement).fontSize || "16",
  );
  const fixedOffset = 1.3 * rootFontSize;
  const targetTop = Math.max(
    0,
    window.scrollY + element.getBoundingClientRect().top - fixedOffset,
  );

  window.scrollTo({
    top: targetTop,
    behavior,
  });
}
