import NavbarLink from "./NavbarLink";

export default function NavbarItem({ links }) {
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row lg:gap-8 xl:gap-12">
      {links.map((link, index) => {
        return <NavbarLink key={index} text={link.text} url={link.url} />;
      })}
    </div>
  );
}
