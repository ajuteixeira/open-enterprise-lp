export default function Button(props) {
  return (
    <button
      className={`
      ${props.color === "green" && "bg-[#71A894] text-white font-medium"}
      ${props.color === "black" && "bg-[#303031] text-white font-medium"}
      ${
        props.type === "default" &&
        "tracking-tight rounded-lg sm:text-sm sm:px-3 sm:py-3 lg:px-5 lg:text-lg"
      }
      ${
        props.type === "small" &&
        "w-full px-5 py-1 font-mono tracking-tighter rounded-lg sm:text-sm lg:text-md"
      }
`}
    >
      {props.children}
    </button>
  );
}
