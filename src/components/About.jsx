import image2 from "./../assets/hero-img1.webp";

function About() {
  return (
    <div
      id="about"
      className="bg-gray-100 py-12 px-10 lg:px-20"
    >
      <div className="max-w-5xl lg:max-w-6xl mx-auto flex flex-col-reverse md:flex-row justify-between gap-10 lg:gap-16 items-center">
        <div
          data-aos="fade-right"
          className="flex-1 h-[30rem]"
        >
          <img
            src={image2}
            alt="Brand Story"
            loading="lazy"
            className="rounded-lg shadow-lg w-full h-full  object-cover"
          />
        </div>

        <div
          data-aos="fade-left"
          className="flex-1 px-1 sm:px-3 md:px-6"
        >
          <p className="text-sm tracking-widest uppercase text-gray-500 text-center md:text-left">
            About Us
          </p>
          <h2 className="text-4xl font-bold mt-2 mb-6 text-center md:text-left bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
            Our Story
          </h2>
          <div className="space-y-4 text-gray-700 leading-loose w-full mx-auto">
            <p>
              <strong>Izubest Luxury LTD</strong> began in
              <strong> 2016,</strong> inspired by a young
              man's passion for well-crafted outfits.
              Starting with a small tailoring shop, Izubest
              honed his skills, blending comfort and
              elegance to create unique designs.
            </p>
            <p>
              Over time, the shop evolved into a
              full-fledged fashion design company known for
              creativity, precision, and timeless style,
              while staying true to its core values of
              passion, quality, and inspiring confidence
              through fashion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
