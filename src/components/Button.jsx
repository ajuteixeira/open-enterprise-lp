export default function Button(props) {
  return (
    <button
      className={`
      ${props.color === "green" && "bg-[#71A894] text-white font-medium"}
      ${props.color === "black" && "bg-[#303031] text-white font-medium"}
      ${
        props.type === "default" &&
        "p-3 tracking-tight rounded-lg sm:text-sm lg:px-5 lg:text-base xl:text-lg"
      }
      ${
        props.type === "small" &&
        "w-full px-5 py-1 font-mono tracking-tighter rounded-lg sm:text-sm lg:text-base xl:px-7 xl:py-2 xl:text-lg"
      }
`}
    >
      {props.children}
    </button>
  );
}
