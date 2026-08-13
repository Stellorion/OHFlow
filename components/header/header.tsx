import { ModeToggle } from "./theme-toggle";
import NavLink from "./nav-link";

const Header = async () => {
  return (
    <header className="fixed top-0 left-0 z-50 flex h-14 w-full items-center justify-between border-b border-border bg-background px-4 text-xl text-foreground shadow-sm font-outfit">
      <p className="text-4xl font-bold">OHFlow</p>
      
      <nav className=" space-x-4">
        <NavLink href="/chart">Chart</NavLink>
        <NavLink href="/gustavo">Gustavo</NavLink>
      </nav>

      <ModeToggle />
    </header>
  );
};

export default Header;
