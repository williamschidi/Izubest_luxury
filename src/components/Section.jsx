import UseInView from "../hooks/UseInView";

function Section({ children }) {
  const [isVisible, ref] = UseInView(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-in transform ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
}

export default Section;
