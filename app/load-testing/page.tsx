"use client";
import React from "react";
import Image from "next/image";
import "./LoadTesting.css";

interface LoadItem {
  group: string;
  groupImg: string;
  classLoad: string;
  load: string;
  installation: string;
  example: string;
}

const loadData: LoadItem[] = [
  {
    group: "F900",
    groupImg: "/icons/aeroplain_02.jpg",
    classLoad: "F900",
    load: "90 Ton (900kN)",
    installation: "Areas imposing high wheel loads",
    example: "Airports",
  },
  {
    group: "E600",
    groupImg: "/icons/see_port.jpg",
    classLoad: "E600",
    load: "60 Ton (600kN)",
    installation: "Areas imposing high wheel loads",
    example: "Sea ports",
  },
  {
    group: "D400",
    groupImg: "/icons/vehical.jpeg",
    classLoad: "D400",
    load: "40 Ton (400kN)",
    installation:
      "Carriageway of roads, including pedestrian ways and parking areas for all types of road vehicles",
    example: "Truck roads",
  },
  {
    group: "C250",
    groupImg: "/icons/car.avif",
    classLoad: "C250",
    load: "25 Ton (250kN)",
    installation: "Areas imposing high wheel loads",
    example: "Cars",
  },
  {
    group: "B125",
    groupImg: "/icons/car_01.avif",
    classLoad: "B125",
    load: "12.5 Ton (125kN)",
    installation: "Footways, pedestrian areas and areas with light duty",
    example: "Cars",
  },
  {
    group: "A15",
    groupImg: "/icons/bike.avif",
    classLoad: "A15",
    load: "1.5 Ton (15kN)",
    installation: "Areas which can only be used by pedestrian and pedal cycles",
    example: "Bikes & pedestrians",
  },
];

const doDontsData = {
  do: [
    "Ensure proper installation with complete civil support.",
    "Use appropriate tools for handling.",
    "Check load class before installation.",
    "Regularly inspect drain covers for safety.",
  ],
  dont: [
    "Do not place load before grouting is complete.",
    "Avoid throwing or dragging the covers.",
    "Do not exceed specified load limits.",
    "Avoid installation in unsafe or wet conditions.",
  ],
};

const LoadTesting = () => {
  return (
    <div className="loadTestingPage">

      {/* ===== FIBRODRAIN INTRO SECTION ===== */}
      <section className="fibrodrainIntro">
        <h2>Fibrodrain Load Testing</h2>
        <p>
          Fibrodrain FRP/GRP/Composite products are tested for different load
          classes: <strong>2.5 tons, 5 tons, B125 (12.5 tons), C250 (25 tons),
          D400 (40 tons), E600 (60 tons), and F900 (90 tons)</strong>.
        </p>
        <p>
          Testing is done as per international and Indian standards: 
          <strong> BS EN 124, IS 1726, and AASHTO</strong>. BS EN 124 is the globally accepted testing 
          standard for manhole covers made of cast iron, ductile iron, FRP, and other materials.
        </p>
        <p>
          Products also undergo a <strong>Permanent Set Test</strong> – this means they are repeatedly 
          loaded in a short time to check if the cover permanently deforms or loses strength.
        </p>
      </section>

      {/* ===== LOAD BEARING TABLE ===== */}
      <section className="loadBearing">
        <h2>Applicable Load Bearing</h2>
        <table>
          <thead>
            <tr>
              <th>Group</th>
              <th>Class</th>
              <th>Load</th>
              <th>Installation Areas</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            {loadData.map((item, index) => (
              <tr key={index}>
                <td>
                  <Image src={item.groupImg} alt={item.group} width={60} height={60} />
                </td>
                <td>{item.classLoad}</td>
                <td>{item.load}</td>
                <td>{item.installation}</td>
                <td>{item.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* ===== DO's & DON'Ts SPLIT ===== */}
      <section className="dosDontsSplit">
        <h2>DO's & DON'Ts</h2>
        <div className="dosDontsSplitWrapper">

          {/* DO COLUMN */}
          <div className="dosColumn">
            <div className="circleLabel">DO</div>
            {doDontsData.do.map((text, index) => (
              <div key={index} className="dosItem">
                <div className="dosNumber">{index + 1}</div>
                <p>{text}</p>
              </div>
            ))}
          </div>

          {/* DON'T COLUMN */}
          <div className="dontColumn">
            <div className="circleLabel dontLabel">DON'T</div>
            {doDontsData.dont.map((text, index) => (
              <div key={index} className="dontItem">
                <div className="dontNumber">{index + 1}</div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoadTesting;
