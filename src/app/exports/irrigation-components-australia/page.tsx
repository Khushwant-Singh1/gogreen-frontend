import React from "react";
import CountryPageLayout from "@/components/CountryPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Australia Irrigation Solutions - Vidhi Enterprises",
  description:
    "Vidhi Enterprises exports drip irrigation systems, agricultural sprinklers, filtration systems, HDPE pipes, and precision irrigation solutions to Australia’s commercial farming and horticulture sectors.",
  keywords: "irrigation Australia, drip irrigation Australia, agricultural irrigation Australia, vineyard irrigation Australia, cotton farm irrigation Australia, HDPE pipes Australia irrigation, filtration systems Australia irrigation",
};

export default function AustraliaPage() {
  return (
    <CountryPageLayout
      countryName="Australia"
      flagSrc="https://d170mw2nhcb1v0.cloudfront.net/img/Australia.png"
      welcomeMessage="Welcome to Vidhi Enterprises – a trusted global supplier of irrigation systems in Australia."
      greeting="G’day Australia!"
      introduction={[
        "We provide high-performance drip irrigation systems, agricultural sprinklers, filtration systems, HDPE pipes, and precision irrigation solutions tailored for Australian farming conditions.",
        "Australia’s agricultural sector operates largely in arid and semi-arid regions where water conservation and irrigation efficiency are critical. Vidhi Enterprises supplies commercial irrigation systems in Australia designed to maximize crop yield while minimizing water usage.",
        "Our drip irrigation Australia solutions are widely used in vineyards, cotton farms, almond orchards, citrus plantations, vegetable farms, and greenhouse irrigation systems.",
      ]}
      marketInsights={[
        "With increasing drought cycles and strict water management regulations, the demand for precision irrigation systems in Australia is rising rapidly.",
        "Farmers are shifting toward water-efficient drip irrigation systems, high-pressure impact sprinklers, sand media filters, and disc filtration systems.",
        "Major agricultural exports such as cotton, grapes, almonds, citrus, and vegetables require uniform water distribution systems and durable irrigation infrastructure built for Australian conditions.",
      ]}
      products={[
        "Heavy-duty inline drip irrigation lines",
        "Pressure compensating (PC) drippers",
        "Non-PC orchard drippers",
        "Plantation sprinklers for large farms",
        "Impact sprinklers for broadacre irrigation",
        "Sand media filtration systems",
        "Disc filters for irrigation",
        "HDPE pipes for agriculture",
        "PP compression fittings for irrigation pipelines",
      ]}
      industries={[
        "Vineyard irrigation Australia",
        "Cotton farm irrigation systems",
        "Almond orchard drip irrigation",
        "Citrus plantation irrigation",
        "Vegetable farm irrigation systems",
        "Greenhouse irrigation solutions",
        "Broadacre commercial farming irrigation",
      ]}
      whyChooseUs={[
        "Export-quality irrigation systems for Australia",
        "High water efficiency drip irrigation technology",
        "Durable products for arid and drought-prone climates",
        "Reliable international logistics and supply chain",
        "Cost-effective irrigation solutions for commercial farms",
      ]}
    />
  );
}
