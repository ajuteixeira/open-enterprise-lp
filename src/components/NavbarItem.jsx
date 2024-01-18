import NavbarLink from "./NavbarLink";

export default function NavbarItem({ links }) {
  return (
    <div className="flex sm:gap-3 lg:gap-8 xl:gap-12">
      {links.map((link, index) => {
        return <NavbarLink key={index} text={link.text} url={link.url} />;
      })}
    </div>
  );
}
