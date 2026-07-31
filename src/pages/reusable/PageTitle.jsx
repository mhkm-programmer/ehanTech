const PageTitle = ({
  title,
  description = "Ehan Tech Construction and Trading Services — premier Qatari enterprise delivering civil construction, aluminium & glass, tents, furniture, cleaning, manpower, events, and digital solutions since 2009.",
  keywords = "Ehan Tech, construction Qatar, contracting Doha, aluminium glass Qatar, furniture Qatar, cleaning services, manpower supply, events Qatar, digital marketing Qatar",
  image = "https://8upload.com/image/685c9a9746ecf/IMG-20250625-WA0038.jpg",
  url,
}) => {
  const fullTitle = `${title} | Ehan Tech Qatar`;
  const pageUrl = url || window.location.href;

  // Update the document head directly — no packages needed
  document.title = fullTitle;

  // Helper to set or update meta tags
  const setMeta = (name, content, property = false) => {
    const attr = property ? "property" : "name";
    let el = document.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };

  // Set all meta tags
  setMeta("description", description);
  setMeta("keywords", keywords);
  setMeta("author", "Ehan Tech Construction and Trading Services");
  setMeta("og:title", fullTitle, true);
  setMeta("og:description", description, true);
  setMeta("og:image", image, true);
  setMeta("og:url", pageUrl, true);
  setMeta("og:type", "website", true);
  setMeta("og:site_name", "Ehan Tech Qatar", true);
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", fullTitle);
  setMeta("twitter:description", description);
  setMeta("twitter:image", image);
  setMeta("theme-color", "#8A1538");

  // Canonical link
  let link = document.querySelector("link[rel='canonical']");
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", pageUrl);

  return null; // No DOM output needed
};

export default PageTitle;
