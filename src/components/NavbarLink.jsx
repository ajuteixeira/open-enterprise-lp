export default function NavbarLink({ text, url }) {
  return (
    <a
      className="
              text-[17px]
              tracking-tighter
              cursor-pointer
              sm:text-sm
              text-[#303031] 
              hover:text-[#71A894]
              active:text-[#71A894]
          "
      href={url}
    >
      {text}
    </a>
  );
}
