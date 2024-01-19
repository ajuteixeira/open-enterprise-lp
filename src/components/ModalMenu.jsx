import NavbarItem from "./NavbarItem";

export default function ModalMenu(props) {
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
    <div
      className={`absolute w-full py-6 sm:hidden bg-[#f9f9f9] drop-shadow-md`}
    >
      <nav className={""}>
        <div className={"gap-8 flex flex-col text-base"}>
          <NavbarItem links={linksHeader} />
        </div>
      </nav>
    </div>
  );
}
