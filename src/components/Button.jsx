export default function Button(props) {
  return (
    <button
      className={`
      ${
        props.color === "green" && "bg-[#71A894] text-lg text-white font-medium"
      }
      ${
        props.color === "black" && "bg-[#303031] text-lg text-white font-medium"
      }
      ${
        props.type === "default" &&
        "px-5 py-4 text-lg tracking-tight rounded-lg"
      }
      ${
        props.type === "small" &&
        "w-full px-5 py-1 text-md font-mono tracking-tighter rounded-lg"
      }
      ${
        props.type === "small-rounded" &&
        "px-3 py-1 text-sm font-mono tracking-tighter rounded-full"
      }
`}
    >
      {props.children}
    </button>
  );
}
