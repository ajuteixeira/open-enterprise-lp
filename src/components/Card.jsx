export default function Card(props) {
  return (
    <div
      className={`
      ${props.color === "white" && "bg-white"}
      ${props.color === "gray" && "bg-[#F3F0EA]"}
      ${
        props.type === "default" &&
        "w-1/3 py-7 px-5 flex flex-col rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_5px]"
      }
      ${
        props.type === "border" &&
        "w-[350px] p-5 ml-8 flex flex-col rounded-xl border-solid border-4 border-[#303031]"
      }
      ${
        props.type === "border-shadow" &&
        "min-w-[300px] p-5 mr-20 flex flex-col rounded-xl border-solid border-4 border-[#303031] shadow-[12px_12px_0px_0px_#71A894]"
      }
      ${
        props.align === "center" &&
        "flex flex-col items-center justify-center gap-2"
      }
      ${
        props.align === "left" &&
        "flex flex-col justify-between items-start gap-2"
      }
      ${
        props.align === "between" &&
        "flex flex-col items-center justify-between gap-2"
      }
`}
    >
      {props.children}
    </div>
  );
}
