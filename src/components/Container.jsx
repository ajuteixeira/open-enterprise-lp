export default function Container(props) {
  return (
    <section className="px-12 py-16 sm:px-6 sm:py-12 md:px-10 md:py-14">
      {props.children}
    </section>
  );
}
