export default function Text(props) {
  return (
    <p
      className="
          leading-6 tracking-tighter sm:text-sm lg:text-base xl:leading-7 xl:text-lg text-[#66645E]"
    >
      {props.children}
    </p>
  );
}
