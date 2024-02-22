import { ComponentType, HTMLAttributes } from "react";

export type TContact = {
  title: string;
  target: string;
  icon: ComponentType<{ size?: number }>;
};

export interface IContactProps extends HTMLAttributes<HTMLAnchorElement> {
  contact: TContact;
}
export interface IThemeToggleProps {
  initialTheme?: "dark" | "light";
}
