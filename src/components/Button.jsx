export default function Button(props) {
  return (
    <button
      className={`
      ${props.color === "green" && "bg-[#71A894] text-white font-medium"}
      ${props.color === "black" && "bg-[#303031] text-white font-medium"}
      ${
        props.type === "default" &&
        "px-5 py-4 text-lg tracking-tight rounded-lg sm:text-sm sm:px-3 sm:py-3"
      }
      ${
        props.type === "small" &&
        "w-full px-5 py-1 text-md font-mono tracking-tighter rounded-lg sm:text-sm"
      }
`}
    >
      {props.children}
    </button>
  );
}
