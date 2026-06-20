import React, { memo } from "react";

// Page & Section Components
import PageTitle from "../reusable/PageTitle";
import HeroSlider from "./heroBanner.jsx/HeroSlider";
import ProductsCurtains from "./Products_Curtains";
import ProductsBlackout from "./Products_Blackout";
import WhyChoose from "./WhyChoose";
import OurClient from "./OurClient";
import CustomerReviews from "./CustomerReviews";
import SubscribeContact from "../contact/SubscreibeContact";

const Home = () => {
  return (
    <>
      {/* SEO Title */}
      <PageTitle title="Curtains Furniture | Home" />

      {/* Hero Section */}
      <section>
        <HeroSlider />
      </section>

      {/* Curtains Collection */}
      <SectionWrapper>
        <ProductsCurtains />
      </SectionWrapper>

      {/* Blackout Curtains */}
      <SectionWrapper>
        <ProductsBlackout />
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper>
        <WhyChoose />
      </SectionWrapper>

      {/* Our Clients */}
      <SectionWrapper>
        <OurClient />
      </SectionWrapper>

      {/* Customer Reviews */}
      <SectionWrapper>
        <CustomerReviews />
      </SectionWrapper>

      {/* Newsletter / Contact */}
      <SectionWrapper>
        <SubscribeContact />
      </SectionWrapper>
    </>
  );
};

/**
 * Reusable Section Wrapper for consistent spacing and structure
 */
const SectionWrapper = memo(({ children }) => {
  return <section className="my-16 w-full">{children}</section>;
});

export default memo(Home);
