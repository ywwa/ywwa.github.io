import { FC } from "react";
import { Link } from "react-router-dom";

type CLinkProps = {
  to: string;
  children: JSX.Element;
};

export const CLink: FC<CLinkProps> = ({ to, children }) => {
  return (
    <Link
      to={to}
      className={"transition-all duration-300 hover:text-purple-300 hover:scale-125"}
    >
      {children}
    </Link>
  );
};
