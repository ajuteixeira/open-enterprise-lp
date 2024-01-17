export default function Container(props) {
  return (
    <section className="sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-16 lg:py-20">
      {props.children}
    </section>
  );
}
