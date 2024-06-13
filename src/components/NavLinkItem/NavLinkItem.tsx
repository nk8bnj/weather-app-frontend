import { NavLink } from "react-router-dom";

const NavLinkItem: React.FC<{ path: string; label: string }> = ({
  path,
  label,
}) => (
  <li>
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? "text-teal-500 px-3 py-2 rounded-md text-2xl font-medium transition-all duration-300"
          : "text-gray-600 hover:text-teal-500 px-3 py-2 rounded-md text-2xl font-medium transition-all duration-300"
      }
    >
      {label}
    </NavLink>
  </li>
);

export default NavLinkItem;
