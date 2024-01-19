import MainLogo from "./MainLogo";
import NavbarItem from "./NavbarItem";
import iconMenu from "../assets/images/iconMenu.png";
import ModalMenu from "./ModalMenu";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
  };

  const pathname = window.location.href;

  const linksHeader = [
    {
      text: "Why Open Enterprise",
      url: `${pathname}#why`,
    },
    {
      text: "Features",
      url: `${pathname}#features`,
    },
    {
      text: "Contribute",
      url: `${pathname}#contribute`,
    },
    {
      text: "Request early access",
      url: `${pathname}#request`,
    },
  ];

  return (
    <>
      <header className="flex items-center justify-between p-7 sm:gap-9 sm:pt-6 md:px-10 md:pt-10 lg:px-16 xl:px-40 xl:pt-20">
        <MainLogo />
        <div className="hidden sm:block">
          <NavbarItem links={linksHeader} />
        </div>
        <img className="sm:hidden" onClick={openMenu} src={iconMenu} alt="" />
      </header>
      {open && <ModalMenu />}
    </>
  );
}
