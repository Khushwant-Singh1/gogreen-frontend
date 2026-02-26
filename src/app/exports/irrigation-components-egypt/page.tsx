import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Egypt Irrigation Solutions - Vidhi Enterprises",
  description:
    "Vidhi Enterprises exports desert-suitable drip systems, filters, sprinklers and HDPE lines to Egypt’s farms, greenhouses and palm plantations.",
  keywords: "irrigation Egypt, desert irrigation Egypt, drip Egypt",
};

export default function EgyptPage() {
  return (
    <CountryPageLayout
      countryName="Egypt"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Egypt.png"
      welcomeMessage="Welcome to our Egypt irrigation solutions page."
      greeting="مرحبا! (Marhaban! Hello!)"
      introduction={[
        "Vidhi Enterprises delivers advanced, desert-suitable irrigation systems across Egypt, supporting large government projects, commercial farms, and greenhouses.",
        "Given Egypt’s sandy soils and high temperatures, efficient irrigation systems are crucial for sustainable agricultural growth.",
      ]}
      marketInsights={[
        "Egypt is heavily investing in new desert farming zones, increasing demand for durable drip and filtration systems.",
        "Greenhouses and date plantations are rapidly adopting modern micro-irrigation technology.",
      ]}
      products={[
        "PC & Non-PC drippers",
        "Heavy-duty drip lines",
        "Impact sprinklers",
        "Sand media & disc filters",
        "HDPE pipelines",
      ]}
      industries={[
        "Desert agriculture",
        "Greenhouses",
        "Palm plantations",
        "Vegetable farms",
      ]}
      whyChooseUs={[
        "Systems engineered for extreme heat",
        "Long-lasting performance in saline water",
        "Trusted supplier for large agriculture projects",
      ]}
    />
  );
}
