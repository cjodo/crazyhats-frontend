// Menu content — the single source of truth for every menu on the site.
// Prices are strings so they render exactly as written.

export interface MenuItem {
  name: string;
  price?: string;
  desc?: string;
  addons?: string;
  gf?: boolean;
}

export interface MenuGroup {
  title?: string;
  items?: MenuItem[];
  /** Simple name-only lists (wines, beers, cocktails) */
  list?: string[];
}

export interface Menu {
  id: string;
  tab: string;
  title: string;
  groups: MenuGroup[];
  note?: { label: string; text: string };
}

const sourCreamGuac = 'Add sour cream $3 · guacamole $3';
const pizzaAddons = 'Extra pepperoni or meatballs $5 · extra cheese $3';

export const menus: Menu[] = [
  {
    id: 'breakfast',
    tab: 'Breakfast',
    title: 'Breakfast',
    groups: [
      {
        items: [
          { name: 'House-Smoked Ham & Cheese Omelette', price: '$18.95', desc: 'Potatoes on the side.' },
          { name: 'Sunny-Side-Up Eggs with House-Smoked Ham', price: '$18.95', desc: 'Potatoes on the side.' },
          { name: 'Smoked Salmon Omelette', price: '$20.95', desc: 'With cheese, potatoes on the side. Seasonal.' },
          { name: 'Bagel with House-Smoked Back Bacon', price: '$18.95', desc: 'With omelette and potatoes.' },
        ],
      },
      {
        title: 'Vegetarian Breakfast',
        items: [
          { name: 'Vegetarian Omelette on a Bagel', price: '$18.95', desc: 'Potatoes on the side.' },
          { name: 'Vegetarian Egg Burrito', price: '$18.95', desc: 'Cheese, diced vegetables, salsa and potatoes.' },
          { name: 'Vegetarian Eggless Breakfast', price: '$17.95', desc: 'Potatoes and a cheese-melt bagel.' },
        ],
      },
    ],
    note: { label: 'Sweet Parisian Breakfast', text: 'Ask about our house-baked desserts and artisan coffees.' },
  },
  {
    id: 'lunch',
    tab: 'Lunch & Dinner',
    title: 'Lunch & Dinner',
    groups: [
      {
        items: [
          { name: 'Greek Rice with Chicken Souvlaki', price: '$23.95', gf: true, desc: 'Roast chicken souvlaki on Greek rice casserole with feta. Tzatziki on the side.' },
          { name: 'Greek Rice with Pork Souvlaki', price: '$23.95', gf: true, desc: 'Wine-marinated pork souvlaki on Greek rice casserole with feta. Tzatziki on the side.' },
          { name: 'Pasta Roma with Meatballs', price: '$24.95', desc: 'Baked pasta in mild tomato sauce with cheese over lamb-and-beef meatballs, finished with microgreens.' },
          { name: 'Risotto with House Meatballs', price: '$23.95', desc: 'Herbed rice, olive oil, lamb-and-beef meatballs, cheese and microgreens.' },
          { name: 'Bison Burrito Mariachi con Carne', price: '$22.95', desc: 'Mid-spicy. Ground Alberta bison and rice in a wheat tortilla, baked with cheese. Pico de gallo on the side.', addons: sourCreamGuac },
          { name: 'Chicken Burrito Mazatlán', price: '$22.95', desc: 'Mid-spicy. Diced chicken breast and rice, baked with cheese. Pico de gallo on the side.', addons: sourCreamGuac },
          { name: 'Perogies & House-Smoked Pork Tenderloin', price: '$23.95', desc: 'Baked potato-and-onion perogies with sliced smoked pork. Sour cream on the side.', addons: 'Extra meat $5' },
          { name: 'Meatball Eggplant Moussaka', price: '$24.95', desc: 'Layered eggplant moussaka over rice with house meatballs and feta.', addons: 'Add tzatziki $3' },
          { name: 'Oregano Greek Salad', price: '$21.95', gf: true, desc: 'Greens, feta, olive oil and oregano dressing.', addons: 'Add meatballs $5 · hot garlic bread $3' },
          { name: 'Nachos Vallarta', price: '$22.95', desc: 'Baked nachos with ground beef, cheese, red pepper, tomato, onion and pico de gallo.', addons: 'Add smoked pork or pepperoni $5 · extra cheese or feta $4 · sour cream or guacamole $3' },
          { name: 'Pepperoni Pizza “Umberto”', price: '$23.95', desc: 'Thin crust with oregano and cheese. Shareable for two, or a full meal for one.', addons: pizzaAddons },
          { name: 'Thin-Crust Pizza with House-Smoked Meat & Feta', price: '$23.95', desc: 'Smoked pork fillet, cheese, peppers, tomato, onion and cracked peppercorns.', addons: pizzaAddons },
        ],
      },
      {
        title: 'Vegetarian',
        items: [
          { name: 'Vegetarian Pizza Italiana', price: '$24.95', desc: 'Thin crust with cheese, red pepper, tomato and mushroom.' },
          { name: 'Basil Risotto with Tofu & Cheese', price: '$24.95', gf: true, desc: 'Italian herbs and mid-firm tofu, baked with cheese.' },
          { name: 'Vegetarian Eggplant Moussaka', price: '$24.95', gf: true, desc: 'Layered moussaka over rice, topped with feta.' },
          { name: 'Mid-Spicy Vegetable, Bean & Cheese Burrito', price: '$23.95', desc: 'White wheat tortilla, baked. Pico de gallo on the side.', addons: sourCreamGuac },
          { name: 'Vegetarian Perogies', price: '$23.95', desc: 'Potato-and-onion filling, baked. Sour cream on the side.' },
          { name: 'Vegetarian Pasta of the Day', price: '$23.95', desc: 'Ask your server.' },
        ],
      },
    ],
  },
  {
    id: 'wines',
    tab: 'Wine, Beer & Cocktails',
    title: 'Wine, Beer & Cocktails',
    groups: [
      { title: 'White Wine', list: ['Pinot Grigio', 'Chardonnay', 'Sauvignon Blanc'] },
      { title: 'Red Wine', list: ['Cabernet Sauvignon', 'Merlot', 'Malbec', 'Shiraz'] },
      { title: 'Rosé', list: ['Zinfandel'] },
      { title: 'Big Rock Beer', list: ['Grasshopper', 'Pilsner', 'Light', 'Lager', 'Honey', 'Traditional Dark Ale'] },
      {
        title: 'Cocktails',
        list: [
          'Caesar', 'Sangria Bianca', 'Sangria Roja', 'Manzanita', 'Agua Roja', 'Charro Negro', 'Gin & Ginger',
          'Tequila Limonada', 'Moose Milk', 'Iced Irish Cream Coffee', 'Glühwein', 'Vodka Cran-Apple', 'Screwdriver', 'Rum & Coke',
        ],
      },
    ],
  },
  {
    id: 'drinks',
    tab: 'Coffee & Drinks',
    title: 'Coffee & Drinks',
    groups: [
      {
        items: [
          { name: 'Espresso', price: '$4.25' },
          { name: 'Americano', price: '$4.95' },
          { name: 'Latte', price: '$6.50' },
          { name: 'Cappuccino', price: '$6.50' },
          { name: 'Mochaccino', price: '$6.95', desc: 'Premium coffee and hot chocolate.' },
          { name: 'Brazilian Cappuccino', price: '$6.95', desc: 'Espresso powder over milk foam.' },
          { name: 'Chai Latte', price: '$5.95' },
          { name: 'Tea', price: '$3.95', desc: 'Black, green or herbal.' },
          { name: 'Milk', price: '$3.50' },
          { name: 'Chocolate Milk', price: '$3.95' },
          { name: 'Coke, Diet Coke, Ginger Ale', price: '$3.95' },
          { name: 'Mineral Water', price: '$4.95' },
          { name: 'Bottled Water', price: '$2.95' },
        ],
      },
    ],
    note: { label: 'Spike it', text: 'Add a shot of Baileys, rum or whiskey to any hot drink (legal drinking age only).' },
  },
];
