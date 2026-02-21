export const stories = [
  { id: 1, name: "Your Story", avatar: "https://i.pravatar.cc/150?img=5", isOwn: true },
  { id: 2, name: "Zara New", avatar: "https://i.pravatar.cc/150?img=9", isBrand: true },
  { id: 3, name: "alex.v", avatar: "https://i.pravatar.cc/150?img=22" },
  { id: 4, name: "nour.m", avatar: "https://i.pravatar.cc/150?img=44" },
  { id: 5, name: "H&M", avatar: "https://i.pravatar.cc/150?img=15", isBrand: true },
  { id: 6, name: "leo.t", avatar: "https://i.pravatar.cc/150?img=52" },
  { id: 7, name: "camille", avatar: "https://i.pravatar.cc/150?img=56" },
  { id: 8, name: "Nike", avatar: "https://i.pravatar.cc/150?img=60", isBrand: true },
];

export const posts = [
  {
    id: 1,
    user: {
      name: "Sofia Laurent",
      handle: "@sofia.laurent",
      avatar: "https://i.pravatar.cc/150?img=47",
    },
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80",
    caption: "Sunday brunch vibes 🥂 Loving this whole look right now.",
    likes: 3241,
    comments: 87,
    time: "2h ago",
    tags: [
      { id: 1, label: "Silk Slip Dress", brand: "Reformation", price: "$218", x: 45, y: 55, link: "https://www.thereformation.com" },
      { id: 2, label: "Strappy Heels", brand: "Tony Bianco", price: "$189", x: 55, y: 85, link: "https://tonybianco.com.au" },
    ],
  },
  {
    id: 2,
    user: {
      name: "Marcus Reid",
      handle: "@marcusreid",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&q=80",
    caption: "Clean fits only. The jacket goes hard 🔥",
    likes: 8102,
    comments: 214,
    time: "5h ago",
    tags: [
      { id: 1, label: "Leather Jacket", brand: "AllSaints", price: "$320", x: 50, y: 30, link: "https://www.allsaints.com" },
      { id: 2, label: "Slim Chinos", brand: "Uniqlo", price: "$49", x: 50, y: 65, link: "https://www.uniqlo.com" },
      { id: 3, label: "White Tee", brand: "COS", price: "$39", x: 50, y: 45, link: "https://www.cos.com" },
    ],
  },
  {
    id: 3,
    user: {
      name: "Priya Sharma",
      handle: "@priyastyled",
      avatar: "https://i.pravatar.cc/150?img=31",
    },
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80",
    caption: "Transitional dressing done right 🍂✨",
    likes: 5430,
    comments: 132,
    time: "8h ago",
    tags: [
      { id: 1, label: "Trench Coat", brand: "Burberry", price: "$1,590", x: 50, y: 35, link: "https://www.burberry.com" },
      { id: 2, label: "Turtleneck", brand: "Arket", price: "$79", x: 48, y: 55, link: "https://www.arket.com" },
    ],
  },
  {
    id: 4,
    user: {
      name: "Jake Nowak",
      handle: "@jake.nowak",
      avatar: "https://i.pravatar.cc/150?img=68",
    },
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&q=80",
    caption: "Street style game always up 🏙️",
    likes: 2798,
    comments: 61,
    time: "12h ago",
    tags: [
      { id: 1, label: "Oversized Hoodie", brand: "Fear of God", price: "$420", x: 45, y: 40, link: "https://fearofgod.com" },
      { id: 2, label: "Cargo Pants", brand: "Carhartt WIP", price: "$120", x: 50, y: 68, link: "https://www.carhartt-wip.com" },
      { id: 3, label: "Chunky Sneakers", brand: "New Balance", price: "$160", x: 50, y: 88, link: "https://www.newbalance.com" },
    ],
  },
];
