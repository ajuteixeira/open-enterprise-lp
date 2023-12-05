export default function NavbarLink({ text, url }) {
  return (
    <a
      className="
              text-[17px]
              tracking-tighter
              cursor-pointer
              text-[##303031] 
              hover:text-[#71A894]
          "
      href={url}
    >
      {text}
    </a>
  );
}
