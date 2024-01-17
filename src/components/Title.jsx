export default function Title(props) {
  return (
    <>
      {props.type === "primary" && (
        <h1
          className={`
                      text-[#303031] font-normal sm:text-4xl md:text-5xl lg:text-6xl
                  `}
        >
          {props.children}
        </h1>
      )}
      {props.type === "secondary" && (
        <h2
          className={`
                      text-[#303031] font-normal sm:text-3xl md:text-4xl lg:text-5xl
                  `}
        >
          {props.children}
        </h2>
      )}
      {props.type === "tertiary" && (
        <h3
          className={`
                      text-[#303031] font-bold text-center sm:text-lg lg:text-2xl
                  `}
        >
          {props.children}
        </h3>
      )}
    </>
  );
}
