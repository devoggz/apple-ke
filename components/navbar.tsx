import {navLinks} from "@/app/constants";
import {ThemeSwitch} from "@/components/theme-switch";
import Image from "next/image";

const NavBar = () => {
  return (
      <header>
        <nav>
            <Image  src="/logo.svg" alt="Apple logo" width={30} height={30}/>

          <ul>
            {navLinks.map(({ label }) => (
                <li key={label} className="">
                  <a href={label}>{label}</a>
                </li>
            ))}
          </ul>

          <div className="flex-center gap-3">
              <ThemeSwitch/>
              <button>
                  <img src="/search.svg" alt="Search" width={30} height={30} />
              </button>
              <button>
                  <img src="/cart.svg" alt="Cart" width={30} height={30} />
              </button>

          </div>
        </nav>
      </header>
  )
}
export default NavBar
