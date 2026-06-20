import React from 'react';
import FAQSection from '../reusable/FAQSection';
import PageTitle from '../reusable/PageTitle';
import ParallaxSection from '../reusable/Parallax';

const FaqPage = () => {
  return (
    <div>
      {/* Page Meta Title for SEO */}
      <PageTitle title="Al-FWZ Furniture Trading & Contracting | Frequently Asked Questions" />

      {/* Hero Banner Section */}
      <ParallaxSection
        imagePath="https://i.ibb.co/bNDvJWf/FAQ-Help-1-min.jpg"
        title="Frequently Asked Questions"
        subTitle="Explore answers to common questions about our furniture, flooring, curtains, installation, customization, and services across Qatar."
      />

      {/* FAQ Accordion Section */}
      <main className="bg-white">
        <section className="py-16 px-4 sm:px-8 lg:px-16">
          <FAQSection />
        </section>
      </main>
    </div>
  );
};

export default FaqPage;
