import bg1 from "./../../assets/hero-img7.webp";
import { HashLink } from "react-router-hash-link";

function Hero() {
  return (
    <div
      id="hero"
      className="relative h-[calc(100vh-8rem)] sm:h-[calc(100vh-12rem)] bg-cover bg-center"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className="absolute bg-gradient-to-tr from-yellow-800/10 to-yellow-500/10 inset-0"></div>
      <div className="w-full mlg:w-[60%] h-full bg-yellow-700/20 mlg:bg-yellow-700/50 mlg:[clip-path:circle(70%_at_0%_50%)] lg:[clip-path:circle(80%_at_0%_50%)] ">
        <div className=" max-w-full mlg:max-w-[28rem] pb-16 mlg:pb-0 flex flex-col justify-end mlg:justify-center items-center mlg:items-start  h-full px-2 xs:px-4 sm:px-6 md:px-8 text-white">
          <h1 className="text-3xl md:text-4xl  font-bold mb-2 md:mb-4 text-white  font-calligraphy tracking-tighter">
            Elevate Your Style
          </h1>
          <p className="text-lg max-w-[24rem] text-center md:text-left mlg:max-w-full mb-4 md:mb-6 text-white font-semibold md:font-medium font-poppins px-2">
            Discover unique, modern, and culturally inspired
            designs tailored for you.
          </p>
          <button className="bg-gradient-to-r from-yellow-300 to-yellow-600 text-gray-600 px-6 py-2 md:py-3 rounded-lg font-semibold hover:from-bg-yellow-600 hover:to-yellow-800 hover:text-gray-100  hover:scale-105 transition-all">
            <HashLink smooth to="#collections">
              Explore Collection
            </HashLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
