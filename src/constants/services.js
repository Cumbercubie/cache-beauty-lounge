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
    services: [
      {
        name: "Classic mani",
        price: "25",
      },
      {
        name: "Classic mani",
        price: "25",
      },
      {
        name: "Classic mani",
        price: "25",
      },
      {
        name: "Classic mani",
        price: "25",
      },
      {
        name: "Classic mani",
        price: "25",
      },
    ],
  },
  {
    id: 4,
    value: services.EYELASH,
    groupName: "Eye Lash",
    services: [
      {
        name: "Classic mani",
        price: "25",
      },
      {
        name: "Classic mani",
        price: "25",
      },
      {
        name: "Classic mani",
        price: "25",
      },
      {
        name: "Classic mani",
        price: "25",
      },
      {
        name: "Classic mani",
        price: "25",
      },
    ],
  },
];
