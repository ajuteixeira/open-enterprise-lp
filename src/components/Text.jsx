export default function Text(props) {
  return (
    <p
      className="
          text-[#66645E] text-lg leading-6 tracking-tighter"
    >
      {props.children}
    </p>
  );
}
