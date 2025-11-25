import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AffiliateDisclosure.css";

export default function AffiliateDisclosure() {
  return (
    <>
      <Navbar />

      <div className="disclosure-page">
        <div className="disclosure-container">
          <h1>Affiliate Disclosure</h1>

          <p>
            The purpose of this page is to disclose that some of the links on this
            website are affiliate links. This means that at no additional cost to
            you, we may earn a small commission if you click through and make a
            purchase.
          </p>

          <h2>Amazon Affiliate Program</h2>
          <p>
            Smart Finds Shop is a participant in the Amazon Services LLC Associates
            Program, an affiliate advertising program designed to provide a means
            for sites to earn advertising fees by advertising and linking to
            Amazon.com.
          </p>

          <h2>Why We Use Affiliate Links</h2>
          <p>
            We only recommend products that we genuinely believe offer value. Our
            goal is to help users find high-quality, reliable items without
            spending hours searching.
          </p>

          <h2>No Extra Cost to You</h2>
          <p>
            Clicking an affiliate link does <strong>not</strong> increase the price
            of the product. The commission comes directly from Amazon as a thank-you
            for sending traffic.
          </p>

          <h2>Transparency & Trust</h2>
          <p>
            We believe in full transparency. If you ever have questions about a
            product recommendation or want more information, feel free to contact
            us.
          </p>

          <p className="thank-you">
            Thank you for supporting our website — it helps us continue finding and
            recommending the best deals!
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
