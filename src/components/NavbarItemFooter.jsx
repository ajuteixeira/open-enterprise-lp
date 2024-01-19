import NavbarLink from "./NavbarLink";

export default function NavbarItemFooter({ links }) {
  return (
    <div className="flex gap-3 lg:gap-8 xl:gap-12">
      {links.map((link, index) => {
        return <NavbarLink key={index} text={link.text} url={link.url} />;
      })}
    </div>
  );
}
