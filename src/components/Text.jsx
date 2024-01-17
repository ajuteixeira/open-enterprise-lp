export default function Text(props) {
  return (
    <p
      className="
          text-[#66645E] text-lg leading-6 tracking-tighter sm:text-sm lg:text-base"
    >
      {props.children}
    </p>
  );
}
