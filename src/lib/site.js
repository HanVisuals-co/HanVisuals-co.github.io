export const SITE = {
  url: "https://hanvisuals-co.github.io",
  email: "muhammadroihannn@gmail.com",
  whatsapp: "6281334535073",
  instagram: "https://www.instagram.com/hanvisuals._",
  founderUrl: "https://ihanwcydev.github.io/portfolio/",
};

export const WA_DEFAULT_TEXT = "Halo hanvisuals, saya ingin berdiskusi mengenai proyek.";
export const WA_TERMS_TEXT =
  "Halo hanvisuals, saya ingin konsultasi termin pembayaran dan proposal untuk proyek saya.";

export function waLink(text) {
  const base = `https://wa.me/${SITE.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
