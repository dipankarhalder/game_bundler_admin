import { ReactNode } from "react";
export type IChildren = {
  children: React.ReactNode;
};

export type ISublistItem = {
  name: string;
  path: string;
};

export type ISidebar = {
  name: string;
  path?: string;
  icon: ReactNode;
  sublist: ISublistItem[];
};

export type IUserInfo = {
  id: string;
  name: string;
  dob: string;
  activeUser: boolean;
  amount: number;
  email: string;
  phoneNo: string;
};

export type IUntagUserInfo = {
  id: string;
  name: string;
  dob: string;
  amount: number;
  email: string;
  phoneNo: string;
};

export type IGameInfo = {
  game_name: string;
  game_id: string;
  client_id: string;
  create_date: string;
  active_status: boolean;
  genre: string;
  google_image_link: string;
  bundle_price: number;
};
