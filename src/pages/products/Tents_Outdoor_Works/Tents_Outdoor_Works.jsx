import {
  FaDoorOpen,
  FaBuilding,
  FaGlassMartini,
  FaShieldAlt,
  FaTools,
  FaRulerCombined,

  FaCertificate,
} from "react-icons/fa";

import CustomerReviews from "../../Home/CustomerReviews";
import PageTitle from "../../reusable/PageTitle";
import ParallaxSection from "../../reusable/Parallax";

const Tents_Outdoor_Works = () => {
  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-[#fdfbf9] dark:bg-gray-900">

      <PageTitle title="Aluminium Glass Metal Works Qatar | Aluminium Doors Windows | Glass Partitions & Gates" />


      {/* Hero */}
      <ParallaxSection
        imagePath="https://8upload.com/image/685c9a9746ecf/IMG-20250625-WA0038.jpg"
        title="Aluminium, Glass & Metal Works Qatar"
        subTitle="Modern Design. Strong Structure. Perfect Finishing."
      />


      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#4A342E] dark:text-white">
          Premium Aluminium & Glass Solutions for Homes and Businesses
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
          Curtains Furniture provides complete aluminium, glass and metal fabrication
          services in Qatar. We specialize in aluminium doors, windows, glass
          partitions, shower glass, mirrors, steel gates, railings, pergolas,
          parking shades and custom metal works with professional installation.
        </p>

      </section>


      {/* Features */}

      <section className="bg-[#f2ede8] dark:bg-gray-800 py-16 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          {[
            {
              icon:<FaDoorOpen size={40} className="mx-auto mb-4 text-[#6B4226]" />,
              title:"Aluminium Doors & Windows",
              desc:"Strong, stylish and energy-efficient aluminium solutions for residential and commercial buildings."
            },

            {
              icon:<FaGlassMartini size={40} className="mx-auto mb-4 text-[#6B4226]" />,
              title:"Premium Glass Installation",
              desc:"Glass partitions, shower glass, doors and mirrors with elegant finishing."
            },

            {
              icon:<FaShieldAlt size={40} className="mx-auto mb-4 text-[#6B4226]" />,
              title:"Strong Metal Fabrication",
              desc:"Custom steel gates, railings and structures designed for durability."
            },

            {
              icon:<FaRulerCombined size={40} className="mx-auto mb-4 text-[#6B4226]" />,
              title:"Custom Measurement",
              desc:"Professional site measurement and customized fabrication."
            },

            {
              icon:<FaTools size={40} className="mx-auto mb-4 text-[#6B4226]" />,
              title:"Expert Installation",
              desc:"Experienced technicians ensuring accurate fitting and finishing."
            },

            {
              icon:<FaBuilding size={40} className="mx-auto mb-4 text-[#6B4226]" />,
              title:"Residential & Commercial",
              desc:"Solutions for villas, offices, shops, hotels and industrial projects."
            },

          ].map(({icon,title,desc},i)=>(

            <div
              key={i}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >

              {icon}

              <h3 className="text-xl font-semibold mb-2 text-[#4A342E] dark:text-white">
                {title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {desc}
              </p>

            </div>

          ))}

        </div>

      </section>



      {/* Services */}

      <section className="py-20 px-6 bg-white dark:bg-gray-900">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-10 text-[#4A342E] dark:text-white">
            Our Aluminium, Glass & Metal Services
          </h2>


          <div className="grid md:grid-cols-4 gap-6">


          {[
            "Aluminium Doors",
            "Aluminium Windows",
            "Glass Partitions",
            "Glass Doors",
            "Shower Glass",
            "Mirror Works",
            "Steel Gates",
            "Sliding Gates",
            "Automatic Gates",
            "Stair Railings",
            "Pergola Works",
            "Car Parking Shades",
            "Balustrades"
          ].map((service,index)=>(

            <div
            key={index}
            className="bg-[#f5f0e8] dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
            >

              <FaCertificate className="text-[#6B4226] mb-3" size={28}/>

              <h3 className="font-semibold text-lg text-[#4A342E] dark:text-white">
                {service}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Professional design, fabrication and installation in Qatar.
              </p>

            </div>

          ))}


          </div>

        </div>

      </section>



      {/* Reviews */}

      <CustomerReviews />



      {/* Why Choose */}

      <section className="bg-[#f5f0e8] dark:bg-gray-800 py-20 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-6 text-[#4A342E] dark:text-white">
            Why Choose Curtains Furniture?
          </h2>


          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 mb-10">
            We provide complete aluminium and glass solutions with quality
            materials, modern designs and professional workmanship.
          </p>


          <div className="grid md:grid-cols-4 gap-8">


          {[
            "Free Site Inspection",
            "Custom Design Solutions",
            "Quality Materials",
            "Professional Installation"
          ].map((item,index)=>(

            <div
            key={index}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow"
            >

              <h3 className="font-semibold text-[#6B4226] dark:text-white">
                {item}
              </h3>

            </div>

          ))}


          </div>

        </div>

      </section>



      {/* CTA */}

      <section className="py-20 bg-[#4A342E] text-white text-center px-6">


        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Book Aluminium & Glass Work Consultation in Qatar
        </h2>


        <p className="text-lg mb-6 max-w-xl mx-auto">
          Contact Curtains Furniture for aluminium doors, windows,
          glass partitions, gates and custom metal fabrication.
        </p>


        <a
          href="https://wa.me/97466280037"
          className="inline-block bg-white text-[#4A342E] font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-100"
        >
          Contact WhatsApp
        </a>


        <p className="mt-5 text-sm">
          Location: Mansoura, Doha Qatar
        </p>


      </section>


    </div>
  );
};


export default Tents_Outdoor_Works;
