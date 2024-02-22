import { TContact } from "./types";

import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export const age: number = Math.floor(
  (new Date().getTime() - new Date("2003-07-15").getTime()) /
    (1000 * 3600 * 24 * 365.25),
);

export const arrContacts: TContact[] = [
  { title: "Github", target: "https://github.com/ywwa", icon: FiGithub },
  {
    title: "LinkedIn",
    target: "https://linkedin.com/in/gabriels-kukutis",
    icon: FaLinkedinIn,
  },
  { title: "Telegram", target: "https://t.me/y0wwa", icon: FaTelegramPlane },
  {
    title: "Email",
    target: "mailto:gabriels.kukutis.proton.me",
    icon: MdAlternateEmail,
  },
];
