// data/sectionsData.ts

export interface Item {
  id: string;
  name: string;
  image?: string;
  description?: string;
  details?: string;
}

export interface Section {
  id: string;
  title: string;
  items: Item[];
  icon: string;
}

export const sectionsData: Section[] = [
  {
    id: "trending",
    title: "Trending Data",
    icon: "/assets/images/trending-up-icon.png",
    items: [
      {
        id: "t1",
        name: "Item 1",
        image: "/images/item1.jpg", // Use a local image or URL
        description: "Item 1 description",
      },
      {
        id: "t2",
        name: "Item 2",
        image: "/images/item2.jpg",
        description: "Item 2 description",
      },
      {
        id: "t3",
        name: "Item 2",
        image: "/images/item2.jpg",
        description: "Item 2 description",
      },
      {
        id: "t4",
        name: "Item 2",
        image: "/images/item2.jpg",
        description: "Item 2 description",
      },
      {
        id: "t5",
        name: "Item 2",
        image: "/images/item2.jpg",
        description: "Item 2 description",
      },
      {
        id: "t6",
        name: "Item 2",
        image: "/images/item2.jpg",
        description: "Item 2 description",
      },
    ],
  },
  {
    id: "social",
    title: "Social",
    icon: "/assets/images/icon-social.png",
    items: [
      {
        id: "s1",
        name: "Item A",
        details: "Extra details about Item A",
      },
      {
        id: "s2",
        name: "Item B",
        details: "Extra details about Item B",
      },
    ],
  },
  {
    id: "health",
    title: "Health Care",
    icon: "/assets/images/icon-health.png",
    items: [
      {
        id: "h1",
        name: "Health Tip 1",
        image: "/images/health1.jpg",
        description: "Health tip description",
      },
    ],
  },
  {
    id: "arts",
    title: "Arts and Entertainment",
    icon: "/assets/images/icon-arts.png",
    items: [
      {
        id: "h1",
        name: "Health Tip 1",
        image: "/images/health1.jpg",
        description: "Health tip description",
      },
    ],
  },
  {
    id: "Mml",
    title: "Machine Learning",
    icon: "/assets/images/icon-ml.png",
    items: [
      {
        id: "h1",
        name: "Health Tip 1",
        image: "/images/health1.jpg",
        description: "Health tip description",
      },
    ],
  },
];
