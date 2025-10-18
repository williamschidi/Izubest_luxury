function Button({ children }) {
  return (
    <div className="text-center">
      <button className="text-sm sm:text-base font-playfair bg-gradient-to-t from-yellow-400 to-yellow-700 hover:from-yellow-500  hover:to-yellow-800 hover:scale-105 active:scale-95 text-gray-100 border border-gray-200 px-6 py-[2px] transition rounded-full">
        {children}
      </button>
    </div>
  );
}

export default Button;
