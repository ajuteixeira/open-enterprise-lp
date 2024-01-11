export default function Image(props) {
  return (
    <img
      className={`
              ${
                props.type === "rounded" &&
                "rounded-full h-16 w-16 sm:w-12 sm:h-12"
              }
              ${props.type === "default" && "w-full"}
          `}
      src={props.src}
      alt={props.alt}
    />
  );
}
