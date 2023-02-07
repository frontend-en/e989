import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Routes } from "./../../constants/index";

const Nav: FC = () => {
  const setClassName = (isActive: boolean) =>
    `${
      isActive ? "text-base-7" : "text-base-2"
    } hover:text-base-1 ease-in-out duration-500`;

  return (
    <nav className={"py-4 flex gap-12 text-xl"}>
      {Routes.map((route) => (
        <NavLink
          className={({ isActive }) => setClassName(isActive)}
          key={route.path}
          to={route.path}
        >
          {route.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
