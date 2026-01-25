import { navLinks } from "@/app/constants";
import { ThemeSwitch } from "@/components/theme-switch";

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src="/new-logo.png" alt="Apple logo" className="max-w-[86px]" />

        <ul>
          {navLinks.map(({ label, link }) => (
            <li key={label} className="">
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <ThemeSwitch />
          <button>
            <img src="/search.svg" alt="Search" />
          </button>
          <button>
            <img src="/cart.svg" alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
