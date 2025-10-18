function Spinner() {
  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="w-[4rem] h-[4rem] rounded-full border-t-[3px] border-r-2 border-b border-l border-l-transparent border-yellow-700 animate-spin transition-all duration-[4s]"></div>
    </div>
  );
}

export default Spinner;
