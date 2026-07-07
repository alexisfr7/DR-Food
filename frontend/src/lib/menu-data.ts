export type MenuItem = {
  name: string;
  desc?: string;
  price: string;
  priceXL?: string;
  priceL?: string;
  tag?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "panuozzo",
    title: "Panuozzo",
    subtitle: "Pain italien",
    items: [
      { name: "Red Chicken", desc: "Poulet mariné façon rouge, salade iceberg, tomate, oignons rouges, cheddar, sauce au choix", price: "9,90€" },
      { name: "Yellow Chicken", desc: "Poulet mariné façon curry, salade iceberg, tomate, oignons rouges, cheddar, sauce au choix", price: "9,90€" },
      { name: "Rumsteak", desc: "Tranches de rumsteak, salade iceberg, tomate, oignons rouges, cheddar, sauce au choix", price: "12,90€" },
      { name: "Américain", desc: "Steak haché 120g, salade iceberg, tomate, oignons rouges, cheddar, sauce au choix", price: "9,90€" },
      { name: "Merguez", desc: "Merguez de bœuf, salade iceberg, tomate, oignons rouges, cheddar, sauce au choix", price: "11,90€" },
      { name: "Cordon Bleu", desc: "Cordon bleu maison, salade iceberg, tomate, oignons rouges, cheddar, sauce au choix", price: "12,90€" },
    ],
  },
  {
    id: "smash",
    title: "Smaaaash",
    subtitle: "Burger signature",
    items: [
      { name: "Original", desc: "Steak smashé 70g, salade buffalo, tomate, oignons rouges, cornichons, cheddar, sauce burger", price: "8,90€", priceL: "11,90€", priceXL: "13,90€", tag: "M / L / XL" },
      { name: "Oignon", desc: "Steak smashé 70g, oignons rouges, cornichons, cheddar, sauce burger", price: "8,90€", priceL: "11,90€", priceXL: "13,90€", tag: "M / L / XL" },
      { name: "Bacon", desc: "Steak smashé 70g, bacon, salade buffalo, tomate, oignons rouges, cornichons, cheddar, sauce bbq", price: "9,90€", priceL: "12,90€", priceXL: "14,90€", tag: "M / L / XL" },
      { name: "Abé", desc: "Steak smashé 70g, kebab mariné, salade buffalo, tomate, oignons, cornichons, cheddar, sauce burger", price: "8,90€" },
      { name: "Chicken", desc: "Poulet frit à l'américaine, salade buffalo, tomate, oignons rouges, cheddar, sauce curry mango", price: "8,90€" },
    ],
  },
  {
    id: "starters",
    title: "Starters",
    subtitle: "Pour commencer",
    items: [
      { name: "Tenders spicy x3", price: "4,90€" },
      { name: "Donuts mozza x4", price: "4,90€" },
      { name: "Nuggets x4", price: "2,90€" },
      { name: "Chili cheese x4", price: "3,90€" },
      { name: "Tempura x4", price: "4,90€" },
      { name: "Oignon rings x5", price: "2,30€" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    subtitle: "La touche finale",
    items: [
      { name: "Tiramisu choco-nut", price: "3,50€" },
      { name: "Tiramisu caramel beurre salé", price: "3,50€" },
      { name: "Tiramisu toffee choc", price: "3,90€" },
      { name: "Diplomate fraise", price: "3,90€" },
      { name: "Coco rocher", price: "3,90€" },
      { name: "Tarte Nutella coco", price: "3,50€" },
    ],
  },
];
