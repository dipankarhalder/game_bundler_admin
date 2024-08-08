import {
  HiOutlineViewGridAdd,
  HiOutlineUserCircle,
  HiOutlinePuzzle,
  HiOutlineColorSwatch,
  HiOutlineCurrencyDollar,
  HiOutlineDuplicate,
  HiOutlineCube,
  HiOutlineGift,
  HiOutlineSwitchHorizontal,
} from "react-icons/hi";

import { ISidebar } from "@/interface";

export const appStorage = {
  MAIN_DROPDOWN_GAME: "MAIN_DROPDOWN_GAME",
};

export const environments = [
  "Development",
  "QA or Testing",
  "Staging",
  "Stg Green",
  "Pre Production",
  "Production",
];

export const sidebarLinks: ISidebar[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <HiOutlineViewGridAdd />,
    sublist: [],
  },
  {
    name: "Users",
    icon: <HiOutlineUserCircle />,
    sublist: [
      {
        name: "Tagged Users",
        path: "/tagged-users",
      },
      {
        name: "Untagged Users",
        path: "/untagged-users",
      },
    ],
  },
  {
    name: "Games",
    path: "/",
    icon: <HiOutlinePuzzle />,
    sublist: [],
  },
  {
    name: "Categories",
    icon: <HiOutlineColorSwatch />,
    sublist: [
      {
        name: "Global Categories",
        path: "/",
      },
      {
        name: "Game Categories",
        path: "/",
      },
    ],
  },
  {
    name: "Currencies",
    icon: <HiOutlineCurrencyDollar />,
    sublist: [
      {
        name: "Manage Currency",
        path: "/",
      },
      {
        name: "Currency Package",
        path: "/",
      },
    ],
  },
  {
    name: "Items",
    path: "/",
    icon: <HiOutlineDuplicate />,
    sublist: [],
  },
  {
    name: "Bundles",
    path: "/",
    icon: <HiOutlineCube />,
    sublist: [],
  },
  {
    name: "Discounts",
    path: "/",
    icon: <HiOutlineGift />,
    sublist: [],
  },
  {
    name: "Transactions",
    path: "/",
    icon: <HiOutlineSwitchHorizontal />,
    sublist: [],
  },
];

export const gameList = {
  action: [
    {
      id: 1,
      title: "God of War",
      developer: "Santa Monica Studio",
      releaseDate: "2018-04-20",
      platforms: ["PlayStation 4", "PC"],
      rating: 9.5,
    },
    {
      id: 2,
      title: "Grand Theft Auto V",
      developer: "Rockstar Games",
      releaseDate: "2013-09-17",
      platforms: ["PlayStation 4", "Xbox One", "PC"],
      rating: 9.3,
    },
  ],
  rpg: [
    {
      id: 3,
      title: "The Witcher 3: Wild Hunt",
      developer: "CD Projekt Red",
      releaseDate: "2015-05-19",
      platforms: ["PlayStation 4", "Xbox One", "PC", "Switch"],
      rating: 9.8,
    },
    {
      id: 4,
      title: "Persona 5",
      developer: "Atlus",
      releaseDate: "2016-09-15",
      platforms: ["PlayStation 4"],
      rating: 9.2,
    },
  ],
  strategy: [
    {
      id: 5,
      title: "Civilization VI",
      developer: "Firaxis Games",
      releaseDate: "2016-10-21",
      platforms: ["PC", "Switch"],
      rating: 8.9,
    },
    {
      id: 6,
      title: "StarCraft II",
      developer: "Blizzard Entertainment",
      releaseDate: "2010-07-27",
      platforms: ["PC"],
      rating: 9.0,
    },
  ],
  sports: [
    {
      id: 7,
      title: "FIFA 23",
      developer: "EA Sports",
      releaseDate: "2022-09-30",
      platforms: ["PlayStation 5", "Xbox Series X", "PC"],
      rating: 8.5,
    },
    {
      id: 8,
      title: "NBA 2K24",
      developer: "Visual Concepts",
      releaseDate: "2023-09-08",
      platforms: ["PlayStation 5", "Xbox Series X", "PC"],
      rating: 8.7,
    },
  ],
  adventure: [
    {
      id: 9,
      title: "The Legend of Zelda: Breath of the Wild",
      developer: "Nintendo",
      releaseDate: "2017-03-03",
      platforms: ["Switch", "Wii U"],
      rating: 9.7,
    },
    {
      id: 10,
      title: "Red Dead Redemption 2",
      developer: "Rockstar Games",
      releaseDate: "2018-10-26",
      platforms: ["PlayStation 4", "Xbox One", "PC"],
      rating: 9.6,
    },
  ],
};
