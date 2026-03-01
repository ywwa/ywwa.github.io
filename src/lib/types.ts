import { ComponentType, HTMLAttributes } from "react";

export type TContact = {
  title: string;
  target: string;
  icon: ComponentType<{ size?: number }>;
};

export type TWork = {
  name: string;
  url: string;
  color?: string;
};

export interface IContactProps extends HTMLAttributes<HTMLAnchorElement> {
  contact: TContact;
}
export interface IThemeToggleProps {
  initialTheme?: "dark" | "light";
}
