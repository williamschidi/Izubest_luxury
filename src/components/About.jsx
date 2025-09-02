import image2 from "./../assets/hero-img1.webp";
import image from "./../assets/story-img.webp";
import Section from "./Section";

function About() {
  return (
    <Section>
      <section className="bg-gray-100 py-14 px-10 lg:px-20">
        <div
          id="about"
          className="max-w-5xl lg:max-w-6xl mx-auto flex flex-col-reverse md:flex-row justify-between gap-10 lg:gap-16 items-center"
        >
          <div className="flex-1 h-[30rem]">
            <img
              src={image2}
              alt="Brand Story"
              loading="lazy"
              className="rounded-lg shadow-lg w-full h-full  object-cover"
            />
          </div>

          <div className="flex-1 px-6">
            <p className="text-sm tracking-widest uppercase text-gray-500 text-center md:text-left">
              About Us
            </p>
            <h2 className="text-4xl font-bold mt-2 mb-6 text-center md:text-left bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-700 leading-loose w-[90%] md:w-full mx-auto">
              <p>
                <strong>Izubest Luxury LTD</strong> began in
                <strong> 2016,</strong> inspired by a young
                man's passion for well-crafted outfits.
                Starting with a small tailoring shop,
                Izubest honed his skills, blending comfort
                and elegance to create unique designs.
              </p>
              <p>
                Over time, the shop evolved into a
                full-fledged fashion design company known
                for creativity, precision, and timeless
                style, while staying true to its core values
                of passion, quality, and inspiring
                confidence through fashion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
}

export default About;

// import image from "./../assets/story-img.webp";
// const storySections = [
//   {
//     img: image,
//     paragraphs: [
//       ` Our journey began in ${
//         new Date().getFullYear() - 9
//       } with the simple dream of a young boy who loved the beauty of well-made outfits. From an early age, he was captivated by fabrics, colors, and the way a single stitch could transform ordinary cloth into something extraordinary.,
//         With nothing more than passion and a small tailoring shop, Izubest Luxury LTD spent years perfecting his craft — listening to clients, experimenting with designs, and creating pieces that blended comfort with elegance. Every outfit told a story, and every customer became part of the journey.`,
//     ],
//     reverse: false,
//   },
//   {
//     img: image2,
//     paragraphs: [
//       ` As time passed, that little tailoring shop grew beyond its walls. What started as a personal passion has blossomed into a full fashion design company, known for creativity, precision, and timeless style.,
//         Today, we remain driven by the same values that started it all — passion, quality, and a deep love for fashion that inspires confidence and beauty in everyone we dress.`,
//     ],
//     reverse: true,
//   },
// ];

// function About() {
//   return (
//     <section className="bg-gray-100 py-14 lg:px-20">
//       {storySections.map((section, idx) => (
//         <div
//           key={idx}
//           className={`max-w-6xl mx-auto flex flex-col-reverse md:flex-row justify-between gap-16 items-center ${
//             section.reverse ? "md:flex-row-reverse" : ""
//           } pt-${idx === 0 ? 0 : "20"} `}
//         >
//           {/* Image */}
//           <div className="flex-1 h-[30rem]">
//             <img
//               src={section.img}
//               alt="Brand Story"
//               loading="lazy"
//               className="rounded-lg shadow-lg w-full h-full object-cover"
//             />
//           </div>

//           {/* Text Content */}
//           <div className="flex-1 px-6">
//             {idx === 0 && (
//               <>
//                 <p className="text-sm tracking-widest uppercase text-gray-500 text-center md:text-left">
//                   About Us
//                 </p>
//                 <h2 className="text-4xl font-bold mt-2 mb-6 text-center md:text-left bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
//                   Our Story
//                 </h2>
//               </>
//             )}
//             <div className="space-y-4 text-gray-700 leading-loose w-[90%] md:w-full mx-auto">
//               {section.paragraphs.map((para, i) => (
//                 <p key={i}>{para}</p>
//               ))}
//             </div>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// }

// export default About;
