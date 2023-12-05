export default function Button(props) {
  return (
    <button
      className={`
      ${props.color === "green" && "bg-[#71A894] text-white font-medium"}
      ${props.color === "black" && "bg-[#303031] text-white font-medium"}
      ${props.type === "default" && "px-5  py-5 tracking-tight rounded-lg"}
      ${
        props.type === "small" &&
        "px-5 py-3 font-mono tracking-tighter rounded-lg"
      }
`}
    >
      {props.children}
    </button>
  );
}
