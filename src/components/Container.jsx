export default function Container(props) {
  return (
    <section className="p-7 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16 lg:py-20 xl:px-40 xl:py-28">
      {props.children}
    </section>
  );
}
