
import { useCallback, useState } from "react";
import AnnouncementBar from "./header/AnnouncementBar";
import HeaderMain from "./header/HeaderMain";
import DesktopNavigation from "./header/DesktopNavigation";
import MobileBottomNavigation from "./header/MobileBottomNavigation";
import MobileNavigation from "./header/MobileNavigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(true);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header className="relative z-30 bg-white">
      <AnnouncementBar />
      <HeaderMain />
      <DesktopNavigation />

      <MobileNavigation
        open={isMobileMenuOpen}
        onClose={closeMobileMenu}
      />

      <MobileBottomNavigation onMenuOpen={openMobileMenu} />
    </header>
  );
}
