import React from "react";
import FAQSection from "../reusable/FAQSection";
import PageTitle from "../reusable/PageTitle";
import ParallaxSection from "../reusable/Parallax";

const FaqPage = () => {
  return (
    <div>
      <PageTitle
        title="FAQ"
        description="Frequently asked questions about Ehan Tech services — construction, aluminium & glass, tents, furniture, cleaning, manpower, events, and digital solutions in Qatar."
      />

      <ParallaxSection
        imagePath="https://8upload.com/image/685c9a9746ecf/IMG-20250625-WA0038.jpg"
        title="Frequently Asked Questions"
        subTitle="Find answers about our construction, furniture, cleaning, manpower, events, and digital services across Qatar."
      />

      <main className="bg-white">
        <section className="py-16 px-4 sm:px-8 lg:px-16">
          <FAQSection />
        </section>
      </main>
    </div>
  );
};

export default FaqPage;
