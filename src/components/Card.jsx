export default function Card(props) {
  return (
    <div
      className={`
      ${props.color === "white" && "bg-white"}
      ${props.color === "gray" && "bg-[#F3F0EA]"}
      ${props.type === "default" && "flex flex-col rounded-lg"}
      ${
        props.type === "border" &&
        "flex flex-col rounded-lg border-solid border-4 border-[#303031]"
      }
      ${
        props.type === "border-shadow" &&
        "flex flex-col rounded-lg border-solid border-4 border-[#303031] shadow-[5px_5px_0px_0px_#71A894]"
      }
      ${props.align === "center" && "flex flex-col items-center justify-center"}
      ${props.align === "left" && "flex flex-col items-start justify-center"}
      ${
        props.align === "between" &&
        "flex flex-col items-center justify-between"
      }
`}
    >
      {props.children}
    </div>
  );
}
