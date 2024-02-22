import { IContactProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import { createElement } from "react";
import { Link } from "react-router-dom";

const CardLinkButton = ({ contact, className }: IContactProps) => {
  return (
    <Link
      to={contact.target}
      draggable={false}
      className={cn(
        `outline-none transition-all duration-300 focus:scale-125 hover:scale-125
         text-zinc-700 hover:text-pink-400 focus:text-pink-400
        dark:text-zinc-500 dark:hover:text-purple-400 dark:focus:text-purple-400
        `,
        className,
      )}
    >
      {createElement(contact.icon, { size: 26 })}
    </Link>
  );
};

export default CardLinkButton;
