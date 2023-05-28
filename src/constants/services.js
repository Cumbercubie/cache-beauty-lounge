export const services = {
  MANICURE: "MANICURE",
  PEDICURE: "PEDICURE",
  MANI_PEDI: "MANI_PEDI",
  NAIL_ENHANCE: "NAIL_ENHANCE",
  NAIL_EXTRAS: "NAIL_EXTRAS",
  SPA: "SPA",
  EYELASH: "EYELASH",
  HAIR: "HAIR",
  CHILDREN: "CHILDREN",
};

export const classicServices = [
  {
    id: 1,
    value: services.MANI_PEDI,
    groupName: "Manicure & Pedicure",
    services: [
      {
        name: "Classic mani",
        price: "15",
      },
      {
        name: "Classic pedi",
        price: "30",
      },
      {
        name: "Gel polish",
        price: "25",
      },
      {
        name: "Gel toes polish",
        price: "30",
      },
      {
        name: "Nail polish",
        price: "10",
      },
      {
        name: "Gel Mani",
        price: "33",
      },
      {
        name: "Gel ped",
        price: "45",
      },
      {
        name: "Toes polish",
        price: "25",
      },
    ],
  },
  {
    id: 2,
    value: services.NAIL_ENHANCE,
    image: "/images/services/manicure.png",
    groupName: "Nail Enhancement",
    services: [
      {
        name: "Acrylic full set",
        price: "30",
      },
      {
        name: "Refill",
        price: "20",
      },
      {
        name: "Gel full set",
        price: "30",
      },
      {
        name: "Refill",
        price: "35",
      },
      {
        name: "Ombre full set",
        price: "60",
      },
      {
        name: "Refill (1 color)",
        price: "38",
      },
      {
        name: "Pink & White gel full set",
        price: "75",
      },
      {
        name: "Refill",
        price: "60",
      },
      {
        name: "Dip full set",
        price: "50",
      },
      {
        name: "Dip mani",
        price: "43",
      },
    ],
  },
  {
    id: 3,
    value: services.NAIL_EXTRAS,
    groupName: "Nail Extras",
    services: [
      {
        name: "Nail Repair",
        price: "3+",
      },
      {
        name: "Nail removal",
        price: "10+",
      },
    ],
  },
  {
    id: 4,
    value: services.HAIR,
    groupName: "Hair Removal",
    image: "/images/services/wax.jpg",
    services: [
      {
        name: "Eyebrows",
        price: "10",
      },
      {
        name: "Chin",
        price: "15",
      },
      {
        name: "Sideburn",
        price: "18+",
      },
      {
        name: "Lips",
        price: "8+",
      },
      {
        name: "Half arms",
        price: "40+",
      },
      {
        name: "Full arms",
        price: "50+",
      },
      {
        name: "Under arms",
        price: "30+",
      },
      {
        name: "Toes/Fingers",
        price: "17+",
      },
      {
        name: "Full leg",
        price: "80+",
      },
      {
        name: "Half leg",
        price: "50+",
      },
      {
        name: "Chest/Back",
        price: "60+",
      },
      {
        name: "Bikini",
        price: "45+",
      },
      {
        name: "Brazilian",
        price: "70+",
      },
      {
        name: "Eyebrowns + Lips + Chin",
        price: "30+",
      },
    ],
  },
  {
    id: 4,
    value: services.EYELASH,
    image: "/images/services/eyelash-mascara.jpg",
    groupName: "Eye Lash",
    services: [
      {
        name: "Classic full set (1-2 hrs)",
        price: "150",
      },
      {
        name: "Volum hybrid full set (2 hrs)",
        price: "220",
      },
      {
        name: "Volum full set (2-2.5 hrs)",
        price: "230",
      },
    ],
  },
  {
    id: 4,
    value: services.CHILDREN,
    groupName: "Princess Mani & Pedi",
    image: "/images/services/princess-spa-couch.jpg",
    services: [
      {
        name: "Princess mani",
        price: "10",
      },
      {
        name: "Princess pedi",
        price: "10",
      },
      {
        name: "Princess mani & pedi",
        price: "30",
      },
      {
        name: "Just nail polish",
        price: "5",
      },
      {
        name: "Nail & toes polish",
        price: "15",
      },
      {
        name: "Gel polish add on",
        price: "10",
      },
      {
        name: "Design",
        price: "3+",
      },
    ],
  },
];
