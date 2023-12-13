export default function Image(props) {
  return (
    <img
      className={`
              ${props.type === "rounded" && "rounded-full h-16 w-16"}
          `}
      src={props.src}
      alt={props.alt}
    />
  );
}
