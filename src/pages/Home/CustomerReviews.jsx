import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar, FaQuoteLeft, FaUserTie } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center justify-center gap-0.5 text-amber-400 mt-3">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} size={16} />
      ))}
      {halfStar && <FaStarHalfAlt size={16} />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} size={16} />
      ))}
    </div>
  );
};

const Avatar = ({ name }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#8A1538] to-[#5a0e24] flex items-center justify-center shadow-lg border-2 border-white">
      <span className="text-white text-xl font-bold">{initials}</span>
    </div>
  );
};

const CustomerReviews = () => {
  const reviews = [
    {
      quote:
        "Ehan Tech delivered our villa renovation on time and exceeded all expectations. Their attention to detail and project management was outstanding.",
      name: "Abdullah Al-Sulaiti",
      title: "Property Owner, The Pearl – Doha",
      rating: 5,
    },
    {
      quote:
        "We hired Ehan Tech for our corporate office fit-out. The team was professional, efficient, and the quality of work was exceptional. Highly recommended.",
      name: "Faisal Al-Kuwari",
      title: "CEO, Al Faisal Holding",
      rating: 5,
    },
    {
      quote:
        "The exhibition booth they designed for us at QIF 2024 was stunning. Creative, well-built, and delivered on time. Our best booth yet!",
      name: "Noora Al-Sayed",
      title: "Marketing Director, Qatar Events",
      rating: 5,
    },
    {
      quote:
        "Professional, reliable, and high-quality work. Their team handled our building maintenance contract seamlessly. A trusted partner for our facilities.",
      name: "Khalid Al-Naemi",
      title: "Facilities Manager, Msheireb Properties",
      rating: 4.5,
    },
    {
      quote:
        "From the initial consultation to final installation, Ehan Tech provided exceptional service. Our villa curtains and furniture look absolutely premium.",
      name: "Sara Al-Mohannadi",
      title: "Homeowner, Al Wakrah",
      rating: 5,
    },
    {
      quote:
        "They supplied skilled workers for our construction project within 24 hours. Efficient, professional, and great value. Will definitely use again.",
      name: "Mohammed Al-Emadi",
      title: "Project Manager, Al Jaber Engineering",
      rating: 4.5,
    },
  ];

  const items = reviews.map((review, index) => (
    <div
      key={index}
      className="flex flex-col items-center w-full p-8 space-y-5 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 mx-3"
    >
      {/* Quote Icon */}
      <FaQuoteLeft className="text-[#8A1538]/20 text-4xl" />

      {/* Avatar */}
      <Avatar name={review.name} />

      {/* Quote */}
      <blockquote className="text-base text-gray-600 text-center leading-relaxed italic">
        “{review.quote}”
      </blockquote>

      {/* Stars */}
      <StarRating rating={review.rating} />

      {/* Name & Title */}
      <div className="text-center">
        <p className="font-bold text-gray-900 text-lg">{review.name}</p>
        <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mt-0.5">
          <FaUserTie size={12} />
          <span>{review.title}</span>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="py-16 lg:py-20 bg-[#f9f5f0]">
      <div className="container px-6 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-[#8A1538] text-xs font-bold uppercase tracking-[0.25em]">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mt-4 mb-4">
            What Our <span className="text-[#8A1538]">Clients Say</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Hear from our clients across Qatar about their experience working with Ehan Tech.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto">
          <AliceCarousel
            mouseTracking
            items={items}
            autoPlay
            autoPlayInterval={4000}
            infinite
            animationDuration={1000}
            disableButtonsControls
            disableDotsControls={false}
            responsive={{
              0: { items: 1 },
              640: { items: 1 },
              768: { items: 2 },
              1024: { items: 3 },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
