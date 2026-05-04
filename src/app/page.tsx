"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeMediumTitles"
        background="none"
        cardStyle="gradient-mesh"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Products",          id: "products"},
        {
          name: "Reviews",          id: "testimonials"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Freedom Gifts Corp"
      button={{ text: "Contact Us", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      title="Take a Piece of New York Home"
      description="Discover our wide collection of high-quality, affordable souvenirs. From iconic memorabilia to custom gifts, we have something special for every traveler."
      testimonials={[
        {
          name: "Sarah J.",          handle: "@traveler",          testimonial: "Best gift store I’ve ever visited in New York!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-showing-something-her-friend-phone_23-2148385706.jpg"},
        {
          name: "Mark D.",          handle: "@nyc_lover",          testimonial: "Huge selection and great prices. Must visit!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-wearing-headphones_23-2149249209.jpg"},
        {
          name: "Jessica L.",          handle: "@nyc_visitor",          testimonial: "Beautiful variety of souvenirs and great quality.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-women-flea-market_23-2149536959.jpg"},
        {
          name: "David W.",          handle: "@tourist_guy",          testimonial: "Found everything I needed for my family.",          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/young-old-couple-besties_23-2150168960.jpg"},
        {
          name: "Linda M.",          handle: "@nyc_explorer",          testimonial: "Staff was helpful and very friendly.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-taking-break-after-shopping_23-2148660684.jpg"},
      ]}
      buttons={[
        {
          text: "Shop Now",          href: "#products"},
        {
          text: "Visit Us",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/patriotic-cupcakes-with-american-flags-4th-july-celebration_23-2151983684.jpg?_wi=1"
      imageAlt="New York City souvenir shop hero display"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/surprised-woman-looking-his-boyfriend-hiding-gift-his-back_23-2147879714.jpg",          alt: "Customer portrait"},
        {
          src: "http://img.b2bpic.net/free-photo/cropped-image-glad-female-smiles-gently-has-hiking-tour-with-rucksack_273609-25972.jpg",          alt: "Customer portrait"},
        {
          src: "http://img.b2bpic.net/free-photo/happy-tourist-has-glad-expression-wears-fashionable-headgear_273609-25749.jpg",          alt: "Customer portrait"},
        {
          src: "http://img.b2bpic.net/free-photo/people-taking-part-sustainable-travel-movement_23-2151049535.jpg",          alt: "Customer portrait"},
        {
          src: "http://img.b2bpic.net/free-photo/horizontal-view-delighted-female-tourist-walks-street_273609-25750.jpg",          alt: "Customer portrait"},
      ]}
      marqueeItems={[
        {
          type: "text",          text: "Authentic NYC Memorabilia"},
        {
          type: "text",          text: "Open Daily until 11 PM"},
        {
          type: "text",          text: "Premium Gift Selection"},
        {
          type: "text",          text: "Best Prices in Town"},
        {
          type: "text",          text: "Located at 50 Broadway"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Your Neighborhood Gift Shop"
      description={[
        "Located in the heart of the city at 50 Broadway, we've become a favorite stop for travelers and locals alike.",        "We pride ourselves on our friendly staff, an incredibly huge collection of authentic NYC memorabilia, and affordable pricing that makes every souvenir meaningful.",        "Our goal is to ensure your visit is memorable and that you walk away with the perfect piece of New York."]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "Iconic Keychain",          price: "$5.99",          variant: "Memorabilia",          imageSrc: "http://img.b2bpic.net/free-photo/small-house-figurines_23-2147737967.jpg?_wi=1"},
        {
          id: "p2",          name: "NY Skyline Mug",          price: "$12.50",          variant: "Gifts",          imageSrc: "http://img.b2bpic.net/free-photo/two-white-cups-with-inscription_169016-3273.jpg?_wi=1"},
        {
          id: "p3",          name: "Statue of Liberty Figurine",          price: "$19.99",          variant: "NYC Souvenir",          imageSrc: "http://img.b2bpic.net/free-photo/framing-landscape-with-statue-liberty_52683-94792.jpg?_wi=1"},
        {
          id: "p4",          name: "Classic Postcards Set",          price: "$8.00",          variant: "Travel Keepsakes",          imageSrc: "http://img.b2bpic.net/free-photo/colorful-spring-postcard-design_23-2151950252.jpg"},
        {
          id: "p5",          name: "NYC Graphic T-Shirt",          price: "$24.99",          variant: "Apparel",          imageSrc: "http://img.b2bpic.net/free-photo/woman-shopping-city_23-2149273769.jpg"},
        {
          id: "p6",          name: "Broadway Souvenir Mask",          price: "$14.99",          variant: "Custom",          imageSrc: "http://img.b2bpic.net/free-photo/theater-mask-with-dark-background-still-life_23-2150257752.jpg"},
      ]}
      title="Curated NYC Keepsakes"
      description="Explore our favorite finds, from classic landmarks to unique local treasures."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "5.0 ★",          description: "Average Customer Rating"},
        {
          id: "m2",          value: "11 PM",          description: "Daily Closing Time"},
        {
          id: "m3",          value: "50+",          description: "Souvenir Categories"},
      ]}
      title="Shop Highlights"
      description="Trusted by thousands of visitors every single year."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "Sarah J.",          date: "Oct 2024",          title: "Great Experience",          quote: "Best gift store I’ve ever visited in New York!",          tag: "Visitor",          avatarSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-taking-break-after-shopping_23-2148660685.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/patriotic-cupcakes-with-american-flags-4th-july-celebration_23-2151983684.jpg?_wi=2",          imageAlt: "happy tourist visitor smiling portrait"},
        {
          id: "t2",          name: "Mark D.",          date: "Sep 2024",          title: "Highly Recommend",          quote: "Huge selection and great prices. Must visit!",          tag: "Traveler",          avatarSrc: "http://img.b2bpic.net/free-photo/happy-woman-outdoors-medium-shot_23-2148962801.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/outdoor-night-portrait-young-woman-with-shopping-bags_1157-45925.jpg",          imageAlt: "happy tourist visitor smiling portrait"},
        {
          id: "t3",          name: "Jessica L.",          date: "Aug 2024",          title: "Perfect Souvenirs",          quote: "Excellent customer service, highly recommended.",          tag: "Regular",          avatarSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-having-fun-together_23-2148287907.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/small-house-figurines_23-2147737967.jpg?_wi=2",          imageAlt: "happy tourist visitor smiling portrait"},
        {
          id: "t4",          name: "David W.",          date: "Jul 2024",          title: "Amazing Staff",          quote: "The staff really helped me pick the best gifts.",          tag: "Tourist",          avatarSrc: "http://img.b2bpic.net/free-photo/gifting-concept-with-three-young-friends_23-2147723664.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/two-white-cups-with-inscription_169016-3273.jpg?_wi=2",          imageAlt: "happy tourist visitor smiling portrait"},
        {
          id: "t5",          name: "Linda M.",          date: "Jun 2024",          title: "Five Stars",          quote: "Clean, affordable, and centrally located. Perfect.",          tag: "Visitor",          avatarSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-souvenirs-shop_23-2149726224.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/framing-landscape-with-statue-liberty_52683-94792.jpg?_wi=2",          imageAlt: "happy tourist visitor smiling portrait"},
      ]}
      title="Loved by Our Visitors"
      description="What our wonderful customers are saying about us."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",          title: "Where are you located?",          content: "We are located at 50 Broadway, New York, NY 10004, right in the heart of the financial district."},
        {
          id: "f2",          title: "What are your hours?",          content: "We are open daily and stay open until 11 PM to serve our late-night tourists."},
        {
          id: "f3",          title: "Do you offer international shipping?",          content: "While we focus on in-store sales, we have plenty of compact items perfect for carry-on luggage."},
      ]}
      title="Questions? We’ve Got Answers"
      description="Find everything you need to know about our shop location, hours, and selection."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Visit Us"
      title="Get in Touch"
      description="Located at 50 Broadway, New York. Stop by today or reach out for inquiries. We're open daily until 11 PM."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/manhattan-bridge-overlooking-new-york_53876-153447.jpg"
      logoText="Freedom Gifts Corp"
      columns={[
        {
          title: "Shop",          items: [
            {
              label: "All Products",              href: "#products"},
            {
              label: "Best Sellers",              href: "#products"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Use",              href: "#"},
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
