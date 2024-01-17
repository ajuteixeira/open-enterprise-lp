export default function Image(props) {
  return (
    <img
      className={`
              ${
                props.type === "rounded" &&
                "rounded-full sm:w-12 sm:h-12 lg:h-16 lg:w-16"
              }
              ${props.type === "default" && "w-full"}
          `}
      src={props.src}
      alt={props.alt}
    />
  );
}
