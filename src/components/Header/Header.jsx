import React from "react";
import DesktopNav from "../DesktopNav/DesktopNav";
import Options from "../Options/Options";
import SuperHeader from "../SuperHeader/SuperHeader";
import MobileNav from "../MobileNav/MobileNav";

function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      <SuperHeader>Lunara therapy is now available →</SuperHeader>
      <div
        className={`bg-[#ffffff] sticky top-0 ${
          isScrolled ? "shadow-lg" : ""
        } w-screen`}
      >
        <div className="flex justify-between px-6 h-16">
          {!isMobile && (
            <>
              <DesktopNav />
              <Options />
            </>
          )}
          {isMobile && (
            <>
              <MobileNav />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
