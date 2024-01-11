import NavbarLink from "./NavbarLink";

export default function NavbarItem({ links }) {
  return (
    <div className="flex gap-8 sm:gap-3">
      {links.map((link, index) => {
        return <NavbarLink key={index} text={link.text} url={link.url} />;
      })}
    </div>
  );
}
