export default function Title(props) {
  return (
    <>
      {props.type === "primary" && (
        <h1
          className={`
                      text-[#303031]
                      font-normal
                      text-6xl 
                      leading-10	
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
                      leading-8
                  `}
        >
          {props.children}
        </h2>
      )}
    </>
  );
}
