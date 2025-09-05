function Button({ children }) {
  return (
    <div className="text-center py-2">
      <button className="text-sm font-playfair bg-gradient-to-tr from-yellow-300 to-yellow-700 hover:from-yellow-500 hover:to-yellow-800 text-gray-100 border border-gray-200 px-4 py-[2px] transition active:scale-95 rounded-full">
        {children}
      </button>
    </div>
  );
}

export default Button;
