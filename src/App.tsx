// External
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import type { NavLinkProps } from "react-router-dom";

// Internal
import { Separator } from "@/components/ui/separator";

type FCWithChildren = {
  children: React.ReactNode;
};

type MenuItemProps = FCWithChildren & NavLinkProps;

function MenuLinkItem({ children, to, ...props }: MenuItemProps) {
  const baseClasses = "block p-2 rounded dark:hover:bg-slate-700";
  const activeClass = baseClasses + " bg-slate-700";

  return (
    <li>
      <NavLink
        className={({ isActive }) => {
          return isActive ? activeClass : baseClasses;
        }}
        to={to}
        {...props}
      >
        {children}
      </NavLink>
    </li>
  );
}

function Root() {
  return (
    <div className="flex">
      <aside className="w-64 h-screen ">
        <nav className="px-3 py-4 overflow-y-auto">
          <ul className="space-y-2">
            <MenuLinkItem to={"/"}>Dashboard</MenuLinkItem>
            <MenuLinkItem to={"/friends"}>Friends</MenuLinkItem>
          </ul>
        </nav>
      </aside>
      <Separator orientation="vertical" className="absolute left-64" />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
