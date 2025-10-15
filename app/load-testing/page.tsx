"use client";

import React from "react";
import Image from "next/image"; // Import Next.js Image
import "./LoadTesting.css";

const LoadTesting = () => {
  return (
    <div className="loadTestingPage">
      {/* HERO SECTION */}
      <section className="loadHero">
        <div className="heroContent">
          <div className="textContent">
            <h1>Load Testing of THERMODRAIN Products</h1>
            <p>
              THERMODRAIN FRP / GRP / COMPOSITE products are tested for 2.5 tons,
              5 tons, B125 (12.5 tons), C250 (25 tons), D400 (40 tons), E600 (60
              tons) and F900 (90 tons) class load bearing and permanent set as per
              BS EN124, IS 1726 and AASHTO. BS EN 124 is a testing code worldwide
              for manhole covers in cast iron, ductile iron and other materials.
              Permanent Set is a multiple loading test to determine the permanent
              deformation in cover after multiple loading within a short time as
              specified in the code.
            </p>
          </div>
          <div className="imageContent">
            <Image
              src="/images/load-testing.jpg"
              alt="Load Testing"
              width={600}   // Adjust width
              height={400}  // Adjust height
              className="loadImage"
              priority      // Optional: preload for LCP
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoadTesting;
