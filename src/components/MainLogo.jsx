import mainlogo from "../assets/images/logo-1.png";

export default function MainLogo() {
  return (
    <img
      src={mainlogo}
      alt="logo"
      title="Logo Open Enterprise"
      className="sm:w-2/5 md:w-1/3 lg:w-[281px]"
    />
  );
}
