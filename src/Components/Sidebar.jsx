import { MenuItems } from "./MenuItems";
import { NavLink } from "react-router";
import { BsBarChartFill } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";
//<CiLogout />

const Sidebar = ({ isCollapsed }) => {
  return (
    <aside
      className={`sidebar ${isCollapsed ? "collapsed" : ""} bg-[#040E28] px-5 py-5 h-screen flex flex-col justify-between`}
    >
      <ul className="flex flex-col gap-y-2">
        <NavLink
          className="flex gap-x-4 px-5 py-2 hover:bg-[#5B62FC] rounded cursor-pointer"
          to={"/"}
        >
          <BsBarChartFill className="text-[#10CE8E] text-2xl" />
          {!isCollapsed && (
            <span className="title text-md text-white font-bold">
              NexusFlow
            </span>
          )}
        </NavLink>

        {MenuItems.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-x-4 px-5 py-2 rounded cursor-pointer ${
                    isActive
                      ? "bg-[#e0e7ff] text-[#4f46e5] font-semibold"
                      : "text-white"
                  }`
                }
              >
                <span className="icon">
                  <Icon size={25} />
                </span>

                {!isCollapsed && (
                  <span className="title text-md">{item.title}</span>
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>

      <NavLink
        className="flex gap-x-4 px-5 py-1 hover:bg-[#5B62FC] rounded cursor-pointer"
        to={"login"}
      >
        <CiLogin className="text-white text-2xl" />
        {!isCollapsed && (
          <span className="title text-md text-white">Login</span>
        )}
      </NavLink>
    </aside>
  );
};

export default Sidebar;
