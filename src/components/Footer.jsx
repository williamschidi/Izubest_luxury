import { Icon } from "@iconify/react/dist/iconify.js";

function Footer() {
  return (
    <div className="text-center ">
      <div className="bg-gray-800/80  py-8 sm:py-16 space-y-3">
        <div>
          <h2 className="text-2xl xs:text-3xl sm:text-2xl mlg:text-3xl lg:text-4xl tracking-[.1.5em] font-playfair font-semibold bg-gradient-to-r from-yellow-400 to-yellow-800 bg-clip-text text-transparent">
            Izubest Luxury
          </h2>
          <span className="text-sm uppercase tracking-[0.2em] font-semibold bg-gradient-to-tr from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
            Where demands meet satisfaction
          </span>
        </div>

        <div className="inline-flex justify-start items-center gap-8">
          <a
            href="http://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[1.7rem] h-[1.7rem] rounded-full bg-gray-400 inline-flex justify-center items-center hover:bg-blue-900"
          >
            <Icon
              icon="basil:facebook-solid"
              width="24"
              height="24"
              className="w-[1.1rem] h-[1.1rem] text-white"
            />
          </a>
          <a
            href="http://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[1.7rem] h-[1.7rem] rounded-full bg-gray-400 inline-flex justify-center items-center hover:bg-blue-500"
          >
            <Icon
              icon="si:twitter-fill"
              width="24"
              height="24"
              className="w-[1rem] h-[1rem] text-white"
            />
          </a>
          <a
            href="http://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[1.7rem] h-[1.7rem] rounded-full bg-gray-400 inline-flex justify-center items-center hover:bg-gradient-to-b from-orange-700 to-yellow-600"
          >
            <Icon
              icon="flowbite:instagram-solid"
              width="24"
              height="24"
              className="w-[1rem] h-[1rem] text-white"
            />
          </a>
          <a
            href="http://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[1.7rem] h-[1.7rem] rounded-full bg-gray-400 inline-flex justify-center items-center hover:bg-orange-600"
          >
            <Icon
              icon="iconoir:youtube-solid"
              width="24"
              height="24"
              className="w-[1rem] h-[1rem] text-white"
            />
          </a>
        </div>
      </div>
      <div className="bg-gray-800 text-gray-100 text-xs py-2 tracking-[0.2em]">
        copyright &copy; {new Date().getFullYear()} Izubest
        Luxury Ltd
      </div>
    </div>
  );
}

export default Footer;
