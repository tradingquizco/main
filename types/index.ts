import { ReactNode } from "react";

export type LoginActionResult = {
  isError: boolean;
  message: string;
};


export type navItem = { path: string; name: string, icon?: ReactNode }