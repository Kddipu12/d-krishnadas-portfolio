export const NAV_OFFSET = 88;

export function scrollToSection(sectionId: string, event?: { preventDefault: () => void; stopPropagation: () => void }) {
  event?.preventDefault();
  event?.stopPropagation();

  window.location.hash = `/${sectionId}`;

  window.setTimeout(() => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }, 0);
}
