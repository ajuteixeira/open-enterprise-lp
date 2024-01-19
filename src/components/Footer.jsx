import SecondaryLogo from "./SecondaryLogo";
import NavbarItemFooter from "./NavbarItemFooter";

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
      <footer className="flex flex-col items-center gap-1 pt-7 pb-5 sm:px-6 sm:flex-row sm:justify-between sm:pb-3 md:px-10 lg:px-16 lg:pt-14 lg:pb-8 xl:px-40 xl:pb-14">
        <div>
          <SecondaryLogo />
        </div>
        <div>
          <NavbarItemFooter links={linksFooter} />
        </div>
      </footer>
    </>
  );
}
