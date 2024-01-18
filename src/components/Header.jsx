import MainLogo from "./MainLogo";
import NavbarItem from "./NavbarItem";

export default function Header() {
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
    <header className="flex items-center justify-between sm:gap-9 sm:pt-6 md:px-10 md:pt-10 lg:px-16 xl:px-40 xl:pt-20">
      <MainLogo />
      <NavbarItem links={linksHeader} />
    </header>
  );
}
