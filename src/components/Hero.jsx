import bg1 from "./../assets/hero-img7.webp";

function Hero() {
  return (
    <div
      id="hero"
      className="relative h-[calc(100vh-14rem)] bg-cover bg-center"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className="absolute bg-gradient-to-tr from-yellow-800/30 to-yellow-500/10 inset-0"></div>
      <div className=" w-full sm:w-[60%] h-full bg-yellow-700/50 sm:[clip-path:circle(80%_at_0%_50%)]">
        <div className="max-w-full sm:max-w-[28rem] pb-16 sm:pb-0 flex flex-col justify-end sm:justify-center items-center sm:items-start  h-full px-6 md:px-8 text-white">
          <h1 className="text-3xl  md:text-4xl  font-bold mb-4 text-white text-transparent font-poppins">
            Elevate Your Style
          </h1>
          <p className="text-md md:text-lg max-w-[24rem] text-center sm:text-left sm:max-w-full  mb-6 text-white font-semibold md:font-medium font-calligraphy px-2">
            Discover unique, modern, and culturally inspired
            designs tailored for you.
          </p>
          <button className="bg-gradient-to-r from-yellow-300 to-yellow-600 text-gray-600 px-6 py-3 rounded-lg font-semibold hover:from-bg-yellow-600 hover:to-yellow-800 hover:text-gray-200  hover:scale-105 transition-all">
            Explore Collection
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
