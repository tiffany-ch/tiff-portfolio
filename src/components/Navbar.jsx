// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `transition-colors ${isActive ? "text-teal-400" : "text-gray-400 hover:text-gray-200"}`;

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10">
      <NavLink to="/" className="text-lg font-bold text-white">
        Tiff
      </NavLink>
      <div className="flex gap-6 text-sm font-medium">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
        <NavLink to="/projects" className={linkClass}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
