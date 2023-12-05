export default function Text(props) {
  return (
    <p
      className="
          text-[#303031] text-lg leading-6 tracking-tighter"
    >
      {props.children}
    </p>
  );
}
