export type GalleryImage = {
  url: string;
  alt: string;
  caption: string;
  aspect?: "portrait" | "square" | "landscape";
};

// We will replace these with real PNG paths once provided.
// Using placeholder Lovable URLs for now as requested.
export const logoAsset = { url: "/images/drfood-2.png" };
export const brandBoxAsset = { url: "/images/drfood-4.png" };
export const menuBoardAsset = { url: "/images/drfood1.png" };
export const heroBurgerAsset = { url: "/images/drfood-3.png" };
export const mealAsset = { url: "/images/drfood-8.png" };
export const storefrontAsset = { url: "/images/drfood-7.png" };
export const interiorAsset = { url: "/images/drfood-5.png" };
export const kiosksAsset = { url: "/images/drfood-6.png" };

export const gallery: GalleryImage[] = [
  { url: heroBurgerAsset.url, alt: "Smash burger signature", caption: "Le Smash Original, croustillant et fondant", aspect: "landscape" },
  { url: mealAsset.url, alt: "Menu burger et frites Coca-Cola", caption: "Menu complet, frites maison et boisson", aspect: "portrait" },
  { url: storefrontAsset.url, alt: "Devanture DR Food Porte de Vanves", caption: "Notre adresse, Porte de Vanves à Paris", aspect: "portrait" },
  { url: interiorAsset.url, alt: "Salle intérieure lumineuse", caption: "Une salle chaleureuse, pensée pour vous", aspect: "portrait" },
  { url: kiosksAsset.url, alt: "Bornes de commande DR Food", caption: "Commande rapide sur bornes tactiles", aspect: "portrait" },
  { url: brandBoxAsset.url, alt: "Packaging signature DR Food", caption: "Le packaging iconique du Docteur", aspect: "landscape" },
  { url: logoAsset.url, alt: "Enseigne lumineuse DR Food", caption: "L'enseigne néon, notre signature nocturne", aspect: "portrait" },
  { url: menuBoardAsset.url, alt: "Carte streetfood complète", caption: "La carte streetfood, panuozzo et smash", aspect: "portrait" },
];
