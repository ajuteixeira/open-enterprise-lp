export default function NavbarLink({ text, url }) {
  return (
    <a
      className="
              tracking-tighter cursor-pointer
              sm:text-sm lg:text-base text-[#303031] hover:text-[#71A894] active:text-[#71A894]
          "
      href={url}
    >
      {text}
    </a>
  );
}
