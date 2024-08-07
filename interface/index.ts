import { ReactNode } from "react";
export interface IChildren {
  children: React.ReactNode;
}

export interface ISublistItem {
  name: string;
  path: string;
}

export interface ISidebar {
  name: string;
  path?: string;
  icon: ReactNode;
  sublist: ISublistItem[];
}
