import { useGetLatestQuery } from "./../feature/apiFeatures/apiSlice";

function Latest1() {
  const { data } = useGetLatestQuery();
  const baseUrl = `https://res.cloudinary.com/djldlfhm1/video/upload`;
  const latest = data?.data.latestCollection;

  return (
    <section
      id="latest"
      className="text-center pt-[4rem] bg-gray-100  px-2 pb-16 "
    >
      <p className="text-sm uppercase tracking-[0.2em] text-gray-800">
        LATEST
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 bg-gradient-to-tr from-yellow-400 to-yellow-800 bg-clip-text text-transparent">
        In Motion: Our Latest Masterpieces
      </h2>
      <div className="flex flex-col-reverse sm:flex-row justify-between items-stretch w-[90%] sm:max-w-[70rem] mx-auto gap-8  border border-gray-300 overflow-x-hidden">
        <div
          data-aos="fade-right"
          className={`relative w-full sm:flex-[60%] bg-black  h-[30rem] overflow-hidden `}
        >
          <video
            src={`${baseUrl}/w_500,h_600,c_fill,f_auto,q_auto/${latest?.video?.id}`}
            autoPlay
            muted
            loop
            playsInline
            className="absolute xs:max-h-full xs:max-w-full w-full h-full object-cover blur-lg scale-110"
          />
          {latest?.video?.url && (
            <video
              className="relative z-10 max-h-full max-w-full mx-auto object-contain"
              controls
              loop
              autoPlay
              muted
            >
              <source
                src={`${baseUrl}/w_500,h_600,c_fill,f_auto,q_auto/${latest?.video?.id}`}
                type="video/mp4"
              />
            </video>
          )}
        </div>
        <div
          data-aos="fade-left"
          className={`flex-[40%] flex flex-col justify-start gap-6 text-left  min-h-[22rem] py-4 px-4`}
        >
          <h2 className="font-bold text-2xl text-gray-600 tracking-tight capitalize">
            {latest?.title}
          </h2>
          <p className="text-sm leading-loose">
            {latest?.description}
          </p>
          <div className="mt-auto flex justify-between items-center  px-2 text-xs font-semibold ">
            <span>{latest?.createdAt}</span>
            <span>comments</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Latest1;
