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
    path: "/games",
    icon: <HiOutlinePuzzle />,
    sublist: [],
  },
  {
    name: "Categories",
    icon: <HiOutlineColorSwatch />,
    sublist: [
      {
        name: "Global Categories",
        path: "/global-categories",
      },
      {
        name: "Game Categories",
        path: "/game-categories",
      },
    ],
  },
  {
    name: "Currencies",
    icon: <HiOutlineCurrencyDollar />,
    sublist: [
      {
        name: "Manage Currency",
        path: "/manage-currency",
      },
      {
        name: "Currency Package",
        path: "/currency-package",
      },
    ],
  },
  {
    name: "Items",
    path: "/items",
    icon: <HiOutlineDuplicate />,
    sublist: [],
  },
  {
    name: "Bundles",
    path: "/bundles",
    icon: <HiOutlineCube />,
    sublist: [],
  },
  {
    name: "Discounts",
    path: "/discounts",
    icon: <HiOutlineGift />,
    sublist: [],
  },
  {
    name: "Transactions",
    path: "/transactions",
    icon: <HiOutlineSwitchHorizontal />,
    sublist: [],
  },
];
