export type ProductStatus = "IN_STOCK" | "OUT_OF_STOCK" | "LIMITED";

export interface ProductPriceOption {
  storage: string;
  screenSize?: string;
  price: number;
}

export interface Product {
  productId: string;
  slug: string;
  category: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  status: ProductStatus;
  rating: number;
  reviewsCount: number;

  flags: {
    topSelling: boolean;
    trending: boolean;
    mostPurchased: boolean;
    recent: boolean;
  };

  pricing: ProductPriceOption[];
  availableColors: string[];
  availableStorage: string[];
  screenSizes?: string[];

  imagesByColor: Record<string, string[]>;
  heroImage: string;

  whatsInTheBox: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  image: string;
  description: string;
  products: Product[];
}

export const shopData: Category[] = [
  /* ======================= IPHONES ======================= */
  {
    id: "iphone",
    name: "iPhone",
    slug: "iphone",
    icon: "Smartphone",
    image: "/iphone-14.png",
    description: "Apple smartphones with iOS.",
    products: [
      {
        productId: "ip15pro",
        slug: "iphone-15-pro",
        category: "iphone",
        name: "iPhone 15 Pro",
        shortDescription: "Titanium. A17 Pro chip.",
        fullDescription:
          "The most advanced iPhone ever with A17 Pro chip, titanium design, and professional camera system.",
        status: "IN_STOCK",
        rating: 4.9,
        reviewsCount: 1240,
        flags: {
          topSelling: true,
          trending: true,
          mostPurchased: true,
          recent: true,
        },
        pricing: [
          { storage: "128GB", price: 180000 },
          { storage: "256GB", price: 195000 },
          { storage: "512GB", price: 220000 },
        ],
        availableColors: ["Natural", "Black", "Blue", "White"],
        availableStorage: ["128GB", "256GB", "512GB"],
        imagesByColor: {
          Natural: ["/images/iphone-17-pro.webp"],
          Black: ["/images/iphone-17-pro.webp"],
          Blue: ["/images/iphone-17-pro.webp"],
          White: ["/images/iphone-17-pro.webp"],
        },
        heroImage: "/images/iphone-17.webp",
        whatsInTheBox: [
          "iPhone 15 Pro",
          "USB-C Cable",
          "SIM Eject Tool",
          "Documentation",
        ],
      },
      {
        productId: "ip15",
        slug: "iphone-15",
        category: "iphone",
        name: "iPhone 15",
        shortDescription: "New camera. New design.",
        fullDescription:
          "iPhone 15 features a powerful camera system, vibrant colors, and all-day battery life.",
        status: "IN_STOCK",
        rating: 4.7,
        reviewsCount: 980,
        flags: {
          topSelling: false,
          trending: true,
          mostPurchased: true,
          recent: true,
        },
        pricing: [
          { storage: "128GB", price: 145000 },
          { storage: "256GB", price: 160000 },
        ],
        availableColors: ["Pink", "Yellow", "Green", "Blue", "Black"],
        availableStorage: ["128GB", "256GB"],
        imagesByColor: {
          Pink: ["/iphone.png"],
          Yellow: ["/images/iphone-14.jpg"],
          Green: ["/images/iphone-14.jpg"],
          Blue: ["/images/iphone-14.jpg"],
          Black: ["/images/iphone-14.jpg"],
        },
        heroImage: "/iphone.png",
        whatsInTheBox: ["iPhone 15", "USB-C Cable", "Documentation"],
      },
      {
        productId: "ip14",
        slug: "iphone-14",
        category: "iphone",
        name: "iPhone 14",
        shortDescription: "Still powerful. Still brilliant.",
        fullDescription:
          "A reliable iPhone with excellent performance, camera quality, and safety features.",
        status: "LIMITED",
        rating: 4.6,
        reviewsCount: 1500,
        flags: {
          topSelling: false,
          trending: false,
          mostPurchased: true,
          recent: false,
        },
        pricing: [{ storage: "128GB", price: 115000 }],
        availableColors: ["Midnight", "Starlight", "Red"],
        availableStorage: ["128GB"],
        imagesByColor: {
          Midnight: ["/iphone-14.jpg"],
          Starlight: ["/images/iphone-14.jpg"],
          Red: ["/images/iphone-14.jpg"],
        },
        heroImage: "/iphone-14.jpg",
        whatsInTheBox: ["iPhone 14", "Lightning Cable", "Documentation"],
      },
    ],
  },

  /* ======================= MACBOOKS ======================= */
  {
    id: "macbook",
    name: "MacBook",
    slug: "macbook",
    icon: "Laptop",
    image: "/Mac.png",
    description: "Apple laptops powered by Apple silicon.",
    products: [
      {
        productId: "mbp14m3",
        slug: "macbook-pro-14-m3",
        category: "macbook",
        name: "MacBook Pro 14” (M3)",
        shortDescription: "Supercharged by M3.",
        fullDescription:
          "MacBook Pro with M3 delivers extreme performance for professionals.",
        status: "IN_STOCK",
        rating: 4.9,
        reviewsCount: 620,
        flags: {
          topSelling: true,
          trending: true,
          mostPurchased: false,
          recent: true,
        },
        pricing: [
          { storage: "512GB", screenSize: "14-inch", price: 320000 },
          { storage: "1TB", screenSize: "14-inch", price: 360000 },
        ],
        availableColors: ["Space Black", "Silver"],
        availableStorage: ["512GB", "1TB"],
        screenSizes: ["14-inch"],
        imagesByColor: {
          "Space Black": ["/Macbook-laptop.png"],
          Silver: ["/Mac.png"],
        },
        heroImage: "/Macbook-laptop.png",
        whatsInTheBox: ["MacBook Pro", "USB-C MagSafe Cable", "96W Charger"],
      },
      {
        productId: "mba15",
        slug: "macbook-air-15",
        category: "macbook",
        name: "MacBook Air 15”",
        shortDescription: "Thin. Light. Powerful.",
        fullDescription:
          "MacBook Air with M2 chip offers silent performance and stunning display.",
        status: "IN_STOCK",
        rating: 4.8,
        reviewsCount: 890,
        flags: {
          topSelling: true,
          trending: false,
          mostPurchased: true,
          recent: false,
        },
        pricing: [
          { storage: "256GB", screenSize: "15-inch", price: 210000 },
          { storage: "512GB", screenSize: "15-inch", price: 245000 },
        ],
        availableColors: ["Midnight", "Starlight", "Silver"],
        availableStorage: ["256GB", "512GB"],
        screenSizes: ["15-inch"],
        imagesByColor: {
          Midnight: ["/Macbook-laptop.png"],
          Starlight: ["/Mac.png"],
          Silver: ["/Macbook-laptop.png"],
        },
        heroImage: "/Macbook-laptop.png",
        whatsInTheBox: ["MacBook Air", "USB-C Cable", "35W Dual Charger"],
      },
      {
        productId: "mba13",
        slug: "macbook-air-13",
        category: "macbook",
        name: "MacBook Air 13”",
        shortDescription: "Everyday performance.",
        fullDescription:
          "The most popular MacBook, perfect for work, study, and creativity.",
        status: "IN_STOCK",
        rating: 4.7,
        reviewsCount: 2000,
        flags: {
          topSelling: false,
          trending: false,
          mostPurchased: true,
          recent: false,
        },
        pricing: [{ storage: "256GB", screenSize: "13-inch", price: 175000 }],
        availableColors: ["Silver", "Space Gray"],
        availableStorage: ["256GB"],
        screenSizes: ["13-inch"],
        imagesByColor: {
          Silver: ["/Macbook-laptop.png"],
          "Space Gray": ["/Mac.png"],
        },
        heroImage: "/Mac.png",
        whatsInTheBox: ["MacBook Air", "USB-C Cable", "30W Charger"],
      },
    ],
  },

  {
    id: "mac",
    name: "Mac",
    slug: "mac",
    icon: "Headphones",
    image: "/watch.png",
    description: "Essential Apple accessories.",
    products: [],
  },
  {
    id: "airpods",
    name: "Airpods",
    slug: "airpods",
    icon: "Headphones",
    image: "/watch.png",
    description: "Essential Apple accessories.",
    products: [],
  },
  {
    id: "watch",
    name: "Apple Watch",
    slug: "apple-watch",
    icon: "Headphones",
    image: "/watch.png",
    description: "Essential Apple accessories.",
    products: [],
  },
  {
    id: "homepod",
    name: "HomePod",
    slug: "home-pod",
    icon: "Headphones",
    image: "/watch.png",
    description: "Essential Apple accessories.",
    products: [],
  },
  {
    id: "ipad",
    name: "iPad",
    slug: "ipad",
    icon: "Headphones",
    image: "/ipad-pro.png",
    description: "Essential Apple accessories.",
    products: [],
  },

  /* ======================= ACCESSORIES ======================= */
  {
    id: "accessories",
    name: "Accessories",
    slug: "accessories",
    icon: "Headphones",
    image: "/watch.png",
    description: "Essential Apple accessories.",
    products: [
      {
        productId: "airpodspro2",
        slug: "airpods-pro-2",
        category: "accessories",
        name: "AirPods Pro (2nd Gen)",
        shortDescription: "Active Noise Cancellation.",
        fullDescription:
          "Immersive sound with adaptive transparency and spatial audio.",
        status: "IN_STOCK",
        rating: 4.8,
        reviewsCount: 3400,
        flags: {
          topSelling: true,
          trending: true,
          mostPurchased: true,
          recent: false,
        },
        pricing: [{ storage: "Standard", price: 42000 }],
        availableColors: ["White"],
        availableStorage: ["Standard"],
        imagesByColor: {
          White: ["/watch.png"],
        },
        heroImage: "/watch.png",
        whatsInTheBox: [
          "AirPods Pro",
          "Charging Case",
          "Ear Tips",
          "USB-C Cable",
        ],
      },
      {
        productId: "watchs9",
        slug: "apple-watch-series-9",
        category: "accessories",
        name: "Apple Watch Series 9",
        shortDescription: "Smarter. Brighter.",
        fullDescription:
          "Advanced health tracking with brighter display and faster performance.",
        status: "IN_STOCK",
        rating: 4.7,
        reviewsCount: 870,
        flags: {
          topSelling: false,
          trending: true,
          mostPurchased: false,
          recent: true,
        },
        pricing: [{ storage: "GPS", price: 65000 }],
        availableColors: ["Midnight", "Starlight", "Pink"],
        availableStorage: ["GPS"],
        imagesByColor: {
          Midnight: ["/watch.png"],
          Starlight: ["/watch.png"],
          Pink: ["/watch.png"],
        },
        heroImage: "/watch.png",
        whatsInTheBox: ["Apple Watch", "Band", "Magnetic Charger"],
      },
      {
        productId: "magsafe",
        slug: "magsafe-charger",
        category: "accessories",
        name: "MagSafe Charger",
        shortDescription: "Snap. Charge. Go.",
        fullDescription:
          "Fast wireless charging with perfect magnetic alignment.",
        status: "IN_STOCK",
        rating: 4.5,
        reviewsCount: 560,
        flags: {
          topSelling: false,
          trending: false,
          mostPurchased: true,
          recent: false,
        },
        pricing: [{ storage: "Standard", price: 7800 }],
        availableColors: ["White"],
        availableStorage: ["Standard"],
        imagesByColor: {
          White: ["/watch.png"],
        },
        heroImage: "/watch.png",
        whatsInTheBox: ["MagSafe Charger", "USB-C Cable"],
      },
    ],
  },
];
