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
    <header
      className="
                px-12
                py-6
                flex
                items-center 
                justify-between 
                sm:gap-9
                sm:px-6
                md:px-10
                md:py-8
                "
    >
      <MainLogo />
      <NavbarItem links={linksHeader} />
    </header>
  );
}
