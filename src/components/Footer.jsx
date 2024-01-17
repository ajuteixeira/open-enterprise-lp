import SecondaryLogo from "./SecondaryLogo";
import NavbarItem from "./NavbarItem";

export default function Footer() {
  const pathname = window.location.href;

  const linksFooter = [
    {
      text: "Documentation",
      url: `${pathname}#documentation`,
    },
    {
      text: "GitHub",
      url: `www.github.com`,
    },
    {
      text: "Twitter",
      url: `twitter.com`,
    },
    {
      text: "Contact us",
      url: `${pathname}#contact`,
    },
  ];
  return (
    <>
      <footer className="px-12 pt-14 pb-8 flex justify-between items-center sm:px-6 sm:pt-7 sm:pb-3 md:px-10">
        <div>
          <SecondaryLogo />
        </div>
        <div>
          <NavbarItem links={linksFooter} />
        </div>
      </footer>
    </>
  );
}
