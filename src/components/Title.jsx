export default function Title(props) {
  return (
    <>
      {props.type === "primary" && (
        <h1
          className={`
                      text-[#303031]
                      font-normal
                      text-6xl 
                  `}
        >
          {props.children}
        </h1>
      )}
      {props.type === "secondary" && (
        <h2
          className={`
                      text-[#303031]
                      font-normal
                      text-5xl
                  `}
        >
          {props.children}
        </h2>
      )}
      {props.type === "tertiary" && (
        <h3
          className={`
                      text-[#303031]
                      font-bold
                      text-2xl
                      text-center
                  `}
        >
          {props.children}
        </h3>
      )}
    </>
  );
}
