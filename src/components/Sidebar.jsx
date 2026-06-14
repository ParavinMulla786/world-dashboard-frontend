import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Population", path: "/population" },
    { name: "Languages", path: "/languages" },
    { name: "Economy", path: "/economy" },
    { name: "Life Expectancy", path: "/life" },
    { name: "Cities", path: "/cities" },
  ];

  return (
    <div className="sidebar">
      <h2>🌍 World Dashboard</h2>

      {menu.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={location.pathname === item.path ? "active" : ""}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;