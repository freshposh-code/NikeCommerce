import {
  HowToRegSharp,
  Logout,
  Search,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { logo } from "../assets";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalQTY, setOpenCart } from "../app/CartSlice";

const Navbar = () => {
  const [navState, setNavState] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  const disPatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY);

  const onCartToggle = () => {
    disPatch(
      setOpenCart({
        cartState: true,
      })
    );
  };
  return (
    <>
      <header
        id="#top"
        className={
          !navState
            ? `absolute top-7 left-0 right-0 opacity-100 z-50`
            : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center blur-effect-theme"
        }
      >
        <nav className="flex items-center justify-between nike-container">
          <div className="flex items-center">
            <a href="#top">
              <img
                src={logo}
                alt="logo/img"
                className={`w-16 h-auto ${navState && "filter brightness-0"}`}
              />
            </a>
          </div>
            <div>
              <ul className="flex items-center  gap-2">
                <li className="grid items-center">
                  <Search
                    className={`icon-style ${
                      navState && "filter brightness-0"
                    }`}
                  />
                </li>
                <li className="grid items-center">
                  <button
                    onClick={onCartToggle}
                    type="button"
                    className="border-none outline-none active:scale-110 transition-all duration-300 relative"
                  >
                    <ShoppingBagOutlined
                      className={`icon-style ${
                        navState && "filter brightness-0"
                      }`}
                    />
                  </button>
                  <div
                    className={`bg-white flex justify-center items-center
                  rounded-[50%] sm:h-[20px] h-[15px] sm:w-[20px] w-[15px] text-[13px] absolute top-4 md:right-[3.4rem] right-[1rem] cursor-pointer ${
                    navState ? "bg-black text-white" : "bg-white text-black"
                  }`}
                  >
                    {totalQTY}
                  </div>
                </li>
              </ul>
            </div>
           </nav>
      </header>
    </>
  );
};

export default Navbar;
