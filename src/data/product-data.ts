export interface ProductData {
  title: string;
  category: string;
  categoryLink: string;
  subCategory?: string;
  heroImage: string;
  productImage: string;
  features: string[];
  application?: {
    text?: string;
    image?: string;
    images?: string[];
  };
  pdf?: string;
}

export const productData: Record<string, ProductData> = {
  "1-way-fogger": {
    "title": "1-Way-Fogger",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Emitting Devices",
    "heroImage": "/img/drip-head-15.png",
    "productImage": "/img/Drip-18.jpg",
    "features": [
      "Equipped with a specially designed Anti-Drip device that instantly prevents water dripping after each irrigation cycle.",
      "Operates automatically when pressure exceeds 1.5 kg/cm².",
      "Automatically shuts down when water pressure drops below 0.7 kg/cm².",
      "Bridgeless design ensures completely drip-free operation.",
      "Produces fine droplets with an average size of 65 microns for uniform misting.",
      "Provides consistent and even water distribution at nominal pressure.",
      "Made from acid-resistant raw materials suitable for chemical applications in agriculture.",
      "Compatible with acid cleaning treatment for easy maintenance and clog prevention.",
      "Ensures efficient fogging for effective cooling and humidification.",
      "Durable construction for long-lasting performance under greenhouse and livestock conditions."
    ],
    "application": {
      "text": "Ideal for cooling and humidifying greenhouses and rooting tables, creating optimal conditions for plant propagation and seed germination.Widely used in poultry sheds, cow sheds, and livestock areas for temperature and humidity control.Ensures a uniform microclimate that promotes healthy plant and animal growth.",
      "images": [
        "/img/drip-table-15.png",
        "/img/drip-table-16.png",
        "/img/drip-table-15.png",
        "/img/drip-table-16.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "2-4-connector": {
    "title": "2-Way/4 -Way Connector",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Emitting Devices",
    "heroImage": "/img/drip-head-9.png",
    "productImage": "/img/Land-6.png",
    "features": [
      "Dual-outlet single barb connector designed to divide one dripper/emitter line into two.",
      "Compact, one-piece structure ensuring leak-free performance.",
      "Suitable for use with both PC (Pressure Compensating) and NPC (Non-Pressure Compensating) drippers/emitters.",
      "Manufactured from high-strength engineering 100% virgin raw materials  for superior durability.ade from durable, UV-resistant plastic.",
      "Corrosion-free and resistant to most agricultural chemicals and fertilizers.",
      "Easy to install and remove, ensuring convenient maintenance.",
      "Designed for 5.5 mm extension tubing and compatible with pot drippers.",
      "UV-stabilized material ensures long-lasting performance under sunlight exposure.",
      "Lightweight yet sturdy construction ideal for all irrigation setups.",
      "Provides uniform water distribution for efficient irrigation management."
    ],
    "application": {
      "text": "Widely used in home gardens, polyhouses, greenhouses, and nurseries to extend two outlets from a single dripper/emitter, ensuring balanced and efficient watering across multiple plants.",
      "images": [
        "/img/Model-36.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "2-way-landscape": {
    "title": "2-Way / 4-Way Connector",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Emitting Devices",
    "heroImage": "/img/land-head-5.png",
    "productImage": "/img/Land-6.png",
    "features": [
      "Dual-outlet single barb connector designed to divide one dripper/emitter line into two.",
      "Compact, one-piece structure ensuring leak-free performance.",
      "Suitable for use with both PC (Pressure Compensating) and NPC (Non-Pressure Compensating) drippers/emitters.",
      "Manufactured from high-strength engineering 100% virgin raw materials  for superior durability.ade from durable, UV-resistant plastic.",
      "Corrosion-free and resistant to most agricultural chemicals and fertilizers.",
      "Easy to install and remove, ensuring convenient maintenance.",
      "Designed for 5.5 mm extension tubing and compatible with pot drippers.",
      "UV-stabilized material ensures long-lasting performance under sunlight exposure.",
      "Lightweight yet sturdy construction ideal for all irrigation setups.",
      "Provides uniform water distribution for efficient irrigation management."
    ],
    "application": {
      "text": "Widely used in home gardens, polyhouses, greenhouses, and nurseries to extend two outlets from a single dripper/emitter, ensuring balanced and efficient watering across multiple plants.",
      "images": [
        "/img/Model-36.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "4-way-fogger": {
    "title": "4 -Way Fogger",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Emitting Devices",
    "heroImage": "/img/drip-head-16.png",
    "productImage": "/img/Drip-19.jpg",
    "features": [
      "Specially designed Anti-Drip device prevents water dripping after each irrigation cycle.",
      "Anti-Drip device activates automatically at pressures above 1.5 kg/cm² to start fogger operation.",
      "Shuts down automatically when pressure drops below 0.7 kg/cm², stopping fogger operation.",
      "Bridgeless design ensures completely drip-free performance.",
      "Produces fine, uniform droplets of approximately 65 microns at a nominal pressure of 4 kg/cm².",
      "Constructed from acid-resistant materials, allowing safe use with agricultural chemicals.",
      "System can be easily cleaned using suitable acid treatment.",
      "Operates efficiently within a pressure range of 2.5 to 5 kg/cm².",
      "Recommended working pressure is 4.0 kg/cm² for optimal performance.",
      "Equipped with a press-fit type inlet connector and 120 mesh (130 micron) filtration for clog-free operation."
    ],
    "application": {
      "text": "Designed for efficient cooling and humidification in greenhouses, poultry sheds, cow sheds, and other livestock environments.\nIdeal for irrigation over rooting tables, plant propagation, and seed germination under controlled conditions.\nEnsures uniform fogging and moisture distribution, creating an optimal microclimate for plant and animal growth.",
      "images": [
        "/img/drip-table-21.png",
        "/img/drip-table-16.png",
        "/img/drip-table-21.png",
        "/img/drip-table-16.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "6-mm-spagetty": {
    "title": "",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Emitting Devices",
    "heroImage": "/img/drip-head-11.png",
    "productImage": "/img/Drip-12.jpg",
    "features": [
      "Made from high-quality, flexible, and UV-resistant material.",
      "Ensures easy installation and secure connections with drippers and emitters..",
      "It is used in drip irrigation, typically in gardens and greenhouses.",
      "Used with 5.5mm drip fittings",
      "Resistant to chemicals, algae growth, and environmental stress.",
      "Provides uniform water flow without leakage."
    ],
    "application": {
      "text": "Used for connecting drippers, emitters, and micro-sprinklers in home gardens, greenhouses, nurseries, and landscape irrigation systems for efficient water distribution.",
      "images": []
    },
    "pdf": "AM pdf.pdf"
  },
  "6mm-landscape": {
    "title": "",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "6 mm SPAGETTY/ DISTRIBUTOR PIPES /",
    "heroImage": "/img/land-head-8.png",
    "productImage": "/img/Land-10.png",
    "features": [
      "Made from high-quality, flexible, and UV-resistant material.",
      "Ensures easy installation and secure connections with drippers and emitters..",
      "It is used in drip irrigation, typically in gardens and greenhouses.",
      "Used with 5.5mm drip fittings",
      "Resistant to chemicals, algae growth, and environmental stress.",
      "Provides uniform water flow without leakage."
    ],
    "application": {
      "text": "Used for connecting drippers, emitters, and micro-sprinklers in home gardens, greenhouses, nurseries, and landscape irrigation systems for efficient water distribution.",
      "images": []
    },
    "pdf": "AM pdf.pdf"
  },
  "Plain-drip": {
    "title": "Plain Lateral/ Polytubes",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Brown Drip Tubing",
    "heroImage": "/img/land-head-1.png",
    "productImage": "/img/Land-1.png",
    "features": [
      "Laterals serve as the core lifeline of every efficient drip irrigation system.",
      "Crafted from premium 100% virgin raw materials for unmatched durability and performance.",
      "Each roll features laser-etched markings with precise date stamps for full production traceability.",
      "Compact and neatly coiled, making storage, stacking, and transportation effortless.",
      "Designed with UV stabilization to resist sunlight damage and prevent environmental cracking.",
      "Thoroughly tested at every stage of manufacturing to ensure top-notch quality and reliability.",
      "Suitable for both surface and subsurface irrigation applications with excellent performance.",
      "The smooth inner surface minimizes friction loss, ensuring optimal water distribution.",
      "Strong, dependable, and long-lasting ,  a product you can truly rely on."
    ],
    "application": {
      "text": "Ideal for row crops, vegetables, horticultural plantations, orchards, vineyards, fruit crops, sugarcane, floriculture, banana, cotton, chillies, and all kinds of close-spaced field crops, as well as greenhouses and landscape irrigation.",
      "images": [
        "/img/TABLE.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "T-Type-filter": {
    "title": "T-Type Filter",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Filtration",
    "heroImage": "/img/drip-head-39.png",
    "productImage": "/img/Spri-25.png",
    "features": [
      "Made from high-quality premium 100% virgin Materials  for long life and durability.",
      "Corrosion-resistant and UV-stabilized, suitable for outdoor use.",
      "Removes sand, silt, algae, and debris from irrigation water.",
      "Ensures uniform water pressure and flow in the irrigation system.",
      "Easy to open and clean â€“ no special tools required.",
      "High filtration area for maximum dirt-holding capacity.",
      "Optional flush valve provided for easy cleaning without disassembly.",
      "Lightweight, compact, and easy to install in any irrigation line.",
      "Available Sizes: 2\", 2 ½\" & 3\"."
    ],
    "application": {
      "text": "",
      "images": [
        "/img/drip-table-19.png",
        "/img/drip-table-20.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "Y-Type-filter": {
    "title": "Y-Type Filter",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Filtration",
    "heroImage": "/img/drip-head-38.png",
    "productImage": "/img/Spri-23.png",
    "features": [
      "Made from high-quality premium 100% virgin Materials  for long life and durability.",
      "Corrosion-resistant and UV-stabilized, suitable for outdoor use.",
      "Removes sand, silt, algae, and debris from irrigation water.",
      "Ensures uniform water pressure and flow in the irrigation system.",
      "Easy to open and clean â€“ no special tools required.",
      "High filtration area for maximum dirt-holding capacity.",
      "Optional flush valve provided for easy cleaning without disassembly.",
      "Lightweight, compact, and easy to install in any irrigation line.",
      "Available Sizes: ¾\", 1\", 1 ¼\", 1 ½\" & 2\"."
    ],
    "application": {
      "text": "",
      "images": [
        "/img/drip-table-17.png",
        "/img/drip-table-18.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "adjustable-bubbler": {
    "title": "",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Adjustable Bubbler With Filter And Take",
    "heroImage": "/img/drip-head-8.png",
    "productImage": "/img/Drip-9.png",
    "features": [
      "Equipped with a special inlet filter to prevent blockage by sand or silt, ensuring long-term trouble-free operation.",
      "Umbrella pattern flood bubbler design for uniform water distribution.",
      "Innovative design made from premium 100% virgin raw materials  for durability and better performance.",
      "Threaded inlet connection (½w BSP female) for easy and secure system connectivity.",
      "Adjustable flow control allows precise regulation according to crop or tree water needs.",
      "Can be easily mounted on stake or PVC risers using an adaptor.",
      "Bubbler stake assembly available with 13mm ID, 12 & 16mm OD tubing in customized lengths.",
      "Operates efficiently under working pressure of 1.03.0 kg/cm² with flow rates between 0–240 LPH."
    ],
    "application": {
      "text": "Suitable for vegetable crops, fruit orchards, nurseries, and garden plants, ensuring precise irrigation and nutrient delivery. Ideal for uneven terrains and variable soil conditions.",
      "images": [
        "/img/Model-35.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "adjustable-dripper": {
    "title": "Adjustable Dripper",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Emitting Devices",
    "heroImage": "/img/drip-head-7.png",
    "productImage": "/img/Drip-7.jpg",
    "features": [
      "Variable flow rate for different crop requirements.",
      "Made from UV-stabilized 100% virgin raw materials .",
      "Clog-resistant design ensures consistent water flow.",
      "Easy to install on lateral pipes.",
      "Compatible with fertilizers and chemicals (fertigation safe).",
      "Precise and targeted watering for efficient water use.",
      "Made from UV-stabilized 100% virgin raw materials .",
      "Durable and long-lasting.",
      "Ensures uniform crop growth.",
      "Available in Vari Flow and Single Flow options.",
      "Color-coded for easy identification of flow ranges.",
      "Durable and ensures uniform crop growth."
    ],
    "application": {
      "text": "Suitable for vegetable crops, fruit orchards, nurseries, and garden plants, ensuring precise irrigation and nutrient delivery. Ideal for uneven terrains and variable soil conditions.",
      "images": [
        "/img/Model-34.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "air-realease-landscape": {
    "title": "Air Release Valve",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Control Valves & ACC",
    "heroImage": "/img/drip-head-41.png",
    "productImage": "/img/Drip-50.png",
    "features": [
      "Made from high-quality plastic material ensuring durability and corrosion resistance.",
      "Available in 3/4â€³ and 1â€³ Male BSP/NPT connections for easy installation and compatibility.",
      "Equipped with a solid plastic float ball specially designed for smooth and reliable operation.",
      "Offers excellent seating characteristics, preventing leakage and ensuring efficient performance.",
      "Operates trouble-free under working pressure up to 4 kg/cmÂ², maintaining consistent flow.",
      "Lightweight and compact design, suitable for various irrigation and water management setups."
    ],
    "application": {
      "text": "",
      "images": []
    },
    "pdf": "AM pdf.pdf"
  },
  "air-release": {
    "title": "Air Release Valve",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Control Valves & ACC",
    "heroImage": "/img/drip-head-41.png",
    "productImage": "/img/Drip-50.png",
    "features": [
      "Made from high-quality plastic material ensuring durability and corrosion resistance.",
      "Available in 3/4\" and 1\" Male BSP/NPT connections for easy installation and compatibility.",
      "Equipped with a solid plastic float ball specially designed for smooth and reliable operation.",
      "Offers excellent seating characteristics, preventing leakage and ensuring efficient performance.",
      "Operates trouble-free under working pressure up to 4 kg/cm², maintaining consistent flow.",
      "Lightweight and compact design, suitable for various irrigation and water management setups.",
      "Available Sizes: ¾\", 1\", 1½\", 2\", 3\""
    ],
    "application": {
      "text": "",
      "images": []
    },
    "pdf": "AM pdf.pdf"
  },
  "aluminium-spri": {
    "title": "Aluminium Sprinkler",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "",
    "heroImage": "/img/Spri-head-3.png",
    "productImage": "/img/Spri-9.png",
    "features": [
      "1-1/4â€ Full Circle Metal Sprinkler equipped with three nozzles for wide and efficient coverage",
      "Brass Bearing Assembly ensures smooth rotation and long service life.",
      "Compatible with 1-1/4â€ Male or Female BSP/NPT connection for easy installation.",
      "Stainless Steel Fulcrum Pin, Arm & Bearing Spring provide long wearing reliability.",
      "Chemical-resistant bearing seal enhances protection against corrosion and wear.",
      "Aluminum Body combined with Copper Base Alloy Arm offers extra strength and durability.",
      "Designed for consistent water distribution under varying pressure conditions.",
      "Suitable for both agricultural and industrial irrigation systems.",
      "Built to deliver reliable performance in rugged field environments."
    ],
    "application": {
      "text": "Ideal for large-scale agricultural irrigation, plantations, and industrial watering systems. Ensures uniform full-circle water coverage with long-lasting operational reliability.",
      "images": [
        "/img/metaltable-3n.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "anti-bug-landscape": {
    "title": "Anti Bug Cup",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Emitting Devices",
    "heroImage": "/img/land-head-7.png",
    "productImage": "/img/Drip-13.jpg",
    "features": [
      "Stops entry of insects, dust, and particles that could block the emitter outlet.",
      "Works as a diffuser to spread water evenly and avoid direct jetting.",
      "Compatible with both PC and NPC online drippers.",
      "Ensures consistent water flow and improved irrigation efficiency.",
      "Easy to install, clean, and replace when required.",
      "Made from durable, UV-stabilized material for long-lasting performance.",
      "Helps maintain uniform watering and prevents clogging issues in the system."
    ],
    "application": {
      "text": "Ideal for use in greenhouses, nurseries, and gardens to maintain smooth emitter performance and ensure even water distribution for all plants",
      "images": [
        "/img/Model-38.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "anti-bug": {
    "title": "Anti Bug Cup",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Emitting Devices",
    "heroImage": "/img/drip-head-12.png",
    "productImage": "/img/Drip-13.jpg",
    "features": [
      "Stops entry of insects, dust, and particles that could block the emitter outlet.",
      "Works as a diffuser to spread water evenly and avoid direct jetting.",
      "Compatible with both PC and NPC online drippers.",
      "Ensures consistent water flow and improved irrigation efficiency.",
      "Easy to install, clean, and replace when required.",
      "Made from durable, UV-stabilized material for long-lasting performance.",
      "Helps maintain uniform watering and prevents clogging issues in the system."
    ],
    "application": {
      "text": "Ideal for use in greenhouses, nurseries, and gardens to maintain smooth emitter performance and ensure even water distribution for all plants",
      "images": [
        "/img/Model-38.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "arrow-dripper": {
    "title": "Pot Dripper/Arrow Dripper",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Emitting Devices",
    "heroImage": "/img/drip-head-10.png",
    "productImage": "/img/Drip-11.jpg",
    "features": [
      "Ideal for watering planter boxes, pots, hanging baskets, nursery grow bags, and vertical garden trays.",
      "Provides a discharge of 3.5 LPH at 1 Kg/cm² ensuring efficient irrigation.",
      "Simple to install and requires minimal maintenance.",
      "Ensures uniform and consistent water distribution.",
      "Designed with clog-resistant technology for smooth performance.",
      "Suitable for both indoor and outdoor gardening setups."
    ],
    "application": {
      "text": "Perfect for home gardens, nurseries, and vertical setups to ensure consistent, efficient, and hassle-free watering of plants.",
      "images": [
        "/img/Model-37.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "arrow-landscape": {
    "title": "",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Pot Dripper/Arrow Dripper",
    "heroImage": "/img/land-head-6.png",
    "productImage": "/img/Drip-11.jpg",
    "features": [
      "Ideal for watering planter boxes, pots, hanging baskets, nursery grow bags, and vertical garden trays.",
      "Provides a discharge of 3.5 LPH at 1 Kg/cmÂ² ensuring efficient irrigation.",
      "Simple to install and requires minimal maintenance.",
      "Ensures uniform and consistent water distribution.",
      "Designed with clog-resistant technology for smooth performance.",
      "Suitable for both indoor and outdoor gardening setups."
    ],
    "application": {
      "text": "Perfect for home gardens, nurseries, and vertical setups to ensure consistent, efficient, and hassle-free watering of plants.",
      "images": [
        "/img/Model-37.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "cylendrical-dripline": {
    "title": "",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "/Inline Drip Tube - PC & NON PC",
    "heroImage": "/img/drip-head-2.png",
    "productImage": "/img/Drip-2.jpg",
    "features": [
      "Maintains uniform irrigation even on uneven terrain or long lateral lengths.",
      "Made from high-quality UV-resistant raw material for long life under sunlight exposure.",
      "Compatible with fertigation and commonly used agrochemicals.",
      "Emitting pipes (Drip lines) are made from 100 % virgin raw materials.",
      "Wide range of discharge from 1 LPH to 8 LPH to suit field conditions.",
      "Excellent coefficient of variation (Less than 5%).",
      "Option of 2/4 outlets per emitter enhancing uniform distribution of water along the length",
      "Clog resistant due to wide flow path of Emitters.",
      "Standard spacing of Emitters depending on individual customer requirement starting from 20 cm onwards"
    ],
    "application": {
      "text": "Ideal for row crops, vegetables, horticultural plantations, orchards, vineyards, fruit crops, sugarcane, floriculture, banana, cotton, chillies, and all kinds of close-spaced field crops, as well as greenhouses and landscape irrigation.",
      "images": [
        "/img/drip-table-2.png",
        "/img/drip-table-3.png",
        "/img/drip-table-4.png",
        "/img/drip-table-5.png",
        "/img/drip-table-6.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "double-union-landscape": {
    "title": "Double Union Ball Valve",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Control Valves & ACC",
    "heroImage": "/img/drip-head-42.png",
    "productImage": "/img/Drip-43.png",
    "features": [
      "Made from high-quality Polypropylene (PP) material for excellent strength and long-lasting performance.",
      "Connections available: Threaded (BSP, NPT & BSPT) or Solvent Glued Socket Ends, conforming to ISO, ASTM, BS, and DIN standards.",
      "Ergonomic and user-friendly design enables smooth handle operation with low operational torque.",
      "Corrosion-resistant and UV-stabilized body ensures durability even in outdoor and chemical-prone environments.Union design for easier installation or repair, without disturbing the pipe system.",
      "Reliable, durable, and easy to maintain, offering consistent functionality with minimal upkeep.",
      "Suitable for applications up to 50Â°C, maintaining stability under varying temperature conditions.",
      "Available sizes: 1\", 1Â¼\", 1Â½\", 2\", 2Â½\", and 3\" to meet diverse irrigation and industrial needs."
    ],
    "application": {
      "text": "Ideal for manual shut-off, overhead sprinkler control, and isolation in irrigation distribution lines, ensuring smooth, leak-free, and durable water management in agricultural and industrial systems.",
      "images": []
    },
    "pdf": "AM pdf.pdf"
  },
  "double-union": {
    "title": "Double Union Ball Valve",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Control Valves & ACC",
    "heroImage": "/img/drip-head-42.png",
    "productImage": "/img/Drip-43.png",
    "features": [
      "Made from high-quality Polypropylene (PP) material for excellent strength and long-lasting performance.",
      "Connections available: Threaded (BSP, NPT & BSPT) or Solvent Glued Socket Ends, conforming to ISO, ASTM, BS, and DIN standards.",
      "Ergonomic and user-friendly design enables smooth handle operation with low operational torque.",
      "Corrosion-resistant and UV-stabilized body ensures durability even in outdoor and chemical-prone environments.Union design for easier installation or repair, without disturbing the pipe system.",
      "Reliable, durable, and easy to maintain, offering consistent functionality with minimal upkeep.",
      "Suitable for applications up to 50Â°C, maintaining stability under varying temperature conditions.",
      "Available sizes: 1\", 1Â¼\", 1Â½\", 2\", 2Â½\", and 3\" to meet diverse irrigation and industrial needs."
    ],
    "application": {
      "text": "Ideal for manual shut-off, overhead sprinkler control, and isolation in irrigation distribution lines, ensuring smooth, leak-free, and durable water management in agricultural and industrial systems.",
      "images": []
    },
    "pdf": "AM pdf.pdf"
  },
  "drip-fitting-landscape": {
    "title": "Drip Fittings",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "",
    "heroImage": "/img/land-head-9.png",
    "productImage": "/img/Land-11.png",
    "features": [
      "Used to connect the dripline with the mainline efficiently.",
      "Made from high-quality, uv-resistant materials for long-lasting performance.",
      "Provides a leak-proof and secure connection.",
      "Easy to install and remove without special tools.",
      "Suitable for all types of drip irrigation systems.",
      "Ensures smooth water flow and system durability.",
      "Used for connecting sub mains to laterals.",
      "Used along with grommet to prevent leakage."
    ],
    "application": {
      "text": "",
      "images": [
        "/img/Model-51.png",
        "/img/Model-46.png",
        "/img/Model-47.png",
        "/img/Model-48.png",
        "/img/Model-49.png",
        "/img/Model-50.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "drip-lateral-fiiting": {
    "title": "Drip Lateral Fittings",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Drip Fittings",
    "heroImage": "/img/drip-head-17.png",
    "productImage": "/img/Drip-23.jpg",
    "features": [
      "Used to connect the dripline with the mainline efficiently.",
      "Made from high-quality, uv-resistant materials for long-lasting performance.",
      "Provides a leak-proof and secure connection.",
      "Easy to install and remove without special tools.",
      "Suitable for all types of drip irrigation systems.",
      "Ensures smooth water flow and system durability.",
      "Used for connecting sub mains to laterals.",
      "Used along with grommet to prevent leakage.",
      "Available Sizes: 12mm, 16mm & 16mm×12mm"
    ],
    "application": {
      "text": "",
      "images": [
        "/img/Model-2.png",
        "/img/Model-3.png",
        "/img/Model-10.png",
        "/img/Model-4.png",
        "/img/Model-5.png",
        "/img/Model-6.png",
        "/img/Model-7.png",
        "/img/Model-8.png",
        "/img/Model-9.png",
        "/img/Model-11.png",
        "/img/Model-12.png",
        "/img/Model-13.png",
        "/img/Model-14.png",
        "/img/Model-15.png",
        "/img/Model-16.png",
        "/img/Model-17.png",
        "/img/Model-18.png",
        "/img/Model-19.png",
        "/img/Model-20.png",
        "/img/Model-21.png",
        "/img/Model-22.png",
        "/img/Model-23.png",
        "/img/Model-24.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "eco-sprinkler": {
    "title": "Eco Rotating Sprinkler",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Eco Sprinklers",
    "heroImage": "/img/eco-head-8.png",
    "productImage": "/img/Eco-21.png",
    "features": [
      "Comes with 1/2″ and 3/4″ BSP male threaded inlets for easy installation.",
      "Supports multiple nozzle types, available in various sizes to suit different needs.",
      "Works efficiently within a pressure range of 0.75 kg/cm² to 2 kg/cm².",
      "Made using premium-grade engineering plastic for long-lasting strength.",
      "UV-stabilized and resistant to commonly used agricultural chemicals.",
      "Rotates continuously to ensure complete field coverage without leaving dry spots.",
      "Delivers highly uniform water distribution, even when operated at low pressure.",
      "Equipped with a counterbalance system to minimize vibrations during operation.",
      "Designed for smooth, reliable performance in all irrigation conditions.",
      "Ensures stable working efficiency while maintaining consistent water output."
    ],
    "application": {
      "text": "",
      "images": [
        "/img/Model-64.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "flat-dripline": {
    "title": "Flat Dripline PC & NON-PC",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Drip Tubing",
    "heroImage": "/img/drip-head-3.png",
    "productImage": "/img/Drip-3.jpg",
    "features": [
      "Uniform water distribution across all plants.",
      "Designed for efficient irrigation in uneven terrains and long laterals.",
      "Manufactured from high-quality UV-resistant material for longer life.",
      "Compact and durable dripper design minimizes clogging.",
      "Easy installation and suitable for both surface and subsurface irrigation.",
      "Ensures high performance even under varying pressure conditions.",
      "Wide range of discharge from 1.2 LPH to 4 LPH.",
      "Excellent coefficient of variation (Less than 5%)",
      "Standard spacing of Emitters depending on field condition starting from 20 cm onwards."
    ],
    "application": {
      "text": "Ideal for row crops, vegetables, horticultural plantations, orchards, vineyards, fruit crops, sugarcane, floriculture, banana, cotton, chillies, and all kinds of close-spaced field crops, as well as greenhouses and landscape irrigation.",
      "images": [
        "/img/drip-table-7.png",
        "/img/drip-table-8.png",
        "/img/drip-table-9.png",
        "/img/drip-table-10.png",
        "/img/drip-table-11.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "full-circle": {
    "title": "Brass Full Circle Sprinkler",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "",
    "heroImage": "/img/Spri-head-1.png",
    "productImage": "/img/Spri-1.png",
    "features": [
      "Â½â€ full circle sprinkler designed for wide and even water coverage.",
      "Equipped with a robust brass bearing assembly for enhanced durability.",
      "Features a Â½â€ male BSP/NPT connection suitable for standard fittings.",
      "Certified and BIS-approved (ISI marked) for superior quality assurance.",
      "Stainless steel fulcrum pin, arm spring, and bearing spring ensure long-term reliability.",
      "Copper-based alloy body and arm provide exceptional strength and corrosion resistance.",
      "Delivers consistent performance even under tough field conditions.",
      "Designed for easy installation and low maintenance.",
      "Ensures efficient water utilization with uniform droplet distribution"
    ],
    "application": {
      "text": "Ideal for agricultural use, particularly in center pivot systems, crop cooling, and frost protection applications. Designed to ensure uniform water distribution for efficient irrigation.",
      "images": [
        "/img/full-table-1.png",
        "/img/full-table-2.png",
        "/img/full-table-3.png",
        "/img/full-table-4.png",
        "/img/full-table-5.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "global-presence": {
    "title": "",
    "category": "Products",
    "categoryLink": "/products",
    "subCategory": "",
    "heroImage": "/img/Drip-header.png",
    "productImage": "",
    "features": [],
    "application": {
      "text": "",
      "images": []
    },
    "pdf": ""
  },
  "inline-drip": {
    "title": "",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Inline Drip Tube - PC & NON PC",
    "heroImage": "/img/land-head-2.png",
    "productImage": "/img/Land-2.png",
    "features": [
      "Maintains uniform irrigation even on uneven terrain or long lateral lengths.",
      "Made from high-quality UV-resistant raw material for long life under sunlight exposure.",
      "Compatible with fertigation and commonly used agrochemicals.",
      "Emitting pipes (Drip lines) are made from 100 % virgin raw materials.",
      "Wide range of discharge from 1 LPH to 8 LPH to suit field conditions.",
      "Excellent coefficient of variation (Less than 5%).",
      "Option of 2 / 4 outlets per emitter enhancing uniform distribution of water along the length",
      "Clog resistant due to wide flow path of Emitters.",
      "Standard spacing of Emitters depending on individual customer requirement starting from 20 cm onwards"
    ],
    "application": {
      "text": "Ideal for row crops, vegetables, horticultural plantations, orchards, vineyards, fruit crops, sugarcane, floriculture, banana, cotton, chillies, and all kinds of close-spaced field crops, as well as greenhouses and landscapeÂ irrigation.",
      "images": []
    },
    "pdf": ""
  },
  "layflat-pipe": {
    "title": "",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Lay Flat Pipes",
    "heroImage": "/img/eco-head-7.png",
    "productImage": "/img/Eco-20.png",
    "features": [
      "Lightweight design makes it simple to carry and set up anywhere.",
      "Can be moved from one field or plot to another without hassle.",
      "Eliminates the need for trenching, helping reduce installation expenses.",
      "Suitable for direct on-ground installation without any extra preparation.",
      "Resistant to sunlight, ensuring no cracking or damage under UV exposure.",
      "Built for long service life with strong and durable performance.",
      "Easily connects with existing PVC or HDPE pipelines and serves as a cost-saving alternative, cutting main and sub-main expenses by up to 50%."
    ],
    "application": {
      "text": "",
      "images": []
    },
    "pdf": "AM pdf.pdf"
  },
  "low-thickness-plain": {
    "title": "",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Drip Tubing & Fittings",
    "heroImage": "/img/eco-head-1.png",
    "productImage": "/img/Eco-1.png",
    "features": [
      "Designed as a budget-friendly option, these low-thickness plain laterals (ISI Class I) perfectly fulfill farmersâ€™ irrigation needs.",
      "These laterals act as the backbone of any efficient drip irrigation setup.",
      "Manufactured using premium-quality 100% virgin material for superior performance.",
      "Each roll features laser-etched product information with time stamping for complete production tracking.",
      "Comes in neatly packed compact coils, ensuring convenient storage and easy transportation.",
      "UV-protected material safeguards the pipe from sunlight damage and prevents stress-related cracks.",
      "Every batch passes through strict quality inspections at multiple manufacturing levels.",
      "Suitable for both above-ground installation and underground drip irrigation systems.",
      "A green guiding strip helps in perfect alignment while installing emitters or dripper accessories.",
      "The smooth interior minimizes frictional resistance, ensuring better water flow and long-term dependability."
    ],
    "application": {
      "text": "",
      "images": []
    },
    "pdf": "AM pdf.pdf"
  },
  "microsprinkler": {
    "title": "Micro Sprinkler",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Emitting Devices",
    "heroImage": "/img/drip-head-14.png",
    "productImage": "/img/Drip-17.png",
    "features": [
      "Constructed from premium virgin engineering material and UV-stabilized for superior durability and longevity.",
      "Designed for precise, low-volume irrigation in horticultural crops, orchards, greenhouses, nurseries, and gardens.",
      "Suitable for both upright and inverted installation  ideal for overhead watering in greenhouses and nurseries.",
      "Comes with 5.5mm microtube, pin connector, and sturdy PVC support stake for easy setup.",
      "Ensures uniform water distribution with fine droplet formation for efficient irrigation.",
      "Resistant to clogging and weather variations, offering reliable operation in all seasons.",
      "Easy to install, clean, and maintain for long-term, hassle-free use.",
      "Reduces water wastage while promoting healthy and uniform plant growth.",
      "Available Model: 50 LPH, 60 LPH, 90 LPH, 160 LPH"
    ],
    "application": {
      "text": "Perfect for greenhouses, nurseries, fruit orchards, and landscape irrigation used for overhead or under-tree watering, frost protection, and efficient crop cooling.",
      "images": [
        "/img/Model-40.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "mini-sprinkler-accessories": {
    "title": "Mini Sprinkler Accessories",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "",
    "heroImage": "/img/Spri-head-6.png",
    "productImage": "/img/Spri-18.png",
    "features": [
      "Made from high-quality material.",
      "Equipped with a plastic bearing assembly for smooth operation.",
      "Comes with Â½â€ Male BSP/NPT connection for easy fitting.",
      "Stainless steel fulcrum pin ensures long-lasting performance.",
      "Arm and bearing spring made of stainless steel for reliability.",
      "Operates efficiently at low pressure, saving energy.",
      "BIS Approved and ISI Marked for guaranteed quality.",
      "Provides even water distribution over a wide area.",
      "Easy to install, dismantle, and maintain."
    ],
    "application": {
      "text": "Ideal for irrigation of agricultural crops, gardens, and plantations, ensuring uniform water coverage and efficient use of water resources.",
      "images": [
        "/img/Model-25.png",
        "/img/Model-26.png",
        "/img/Model-27.png",
        "/img/Model-28.png",
        "/img/Model-29.png",
        "/img/Model-30.png",
        "/img/Model-31.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "misters": {
    "title": "Misters",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Emitting Devices",
    "heroImage": "/img/drip-head-13.png",
    "productImage": "/img/Drip-14.png",
    "features": [
      "Manufactured from high-grade virgin engineering material with UV stabilization for extended durability.",
      "Essential component for controlled environment agriculture and precision irrigation systems.",
      "Functions effectively as a humidifier to maintain optimal humidity levels for plant growth.",
      "Provides superior water distribution with fine misting uniformity.",
      "Available with anti-drip or leak prevention mechanisms for efficient operation.",
      "Easy to install, clean, and maintain, ensuring long-term performance.",
      "Delivers gentle mist ideal for delicate plants and seedlings.",
      "Ensures energy-efficient operation with low water consumption.",
      "Equipped with optional Leak Prevention Devices (LPD) for efficient and drip-free performance."
    ],
    "application": {
      "text": "Best suited for greenhouses, nurseries, and shade houses for overhead cooling, humidity control, and uniform misting to enhance plant growth under controlled climatic conditions.",
      "images": [
        "/img/Model-39.png",
        "/img/drip-table-14.png",
        "/img/Model-39.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "online-emitters": {
    "title": "",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Emitting Devices",
    "heroImage": "/img/drip-head-6.png",
    "productImage": "/img/Drip-5.jpg",
    "features": [
      "Online Emitters (Drippers) are made from virgin Engineering Polymers & UV Stabilised.",
      "Suitable for use with 12 mm, 16 mm & 20 mm Plain Drip Laterals.",
      "Openable type and easy to maintain.",
      "Inlet at an angle to provide easy entry of water into Emitter.",
      "Resistant to chemicals and fertilizers used in fertigation.",
      "Compact and sturdy design ensures long service life.",
      "Easy to install on lateral pipes using a punching tool.",
      "Available in three color-coded flow rates: 2 LPH (Yellow), 4 LPH (Green), and 8 LPH (Red). Additionally, Black colour is available for all three flow rate options."
    ],
    "application": {
      "text": "Ideal for precise irrigation in orchards, vineyards, greenhouses, and landscape areas. Ensures uniform water distribution for vegetables, fruits, and closely spaced crops.",
      "images": [
        "/img/drip-table-13.png",
        "/img/Model-33.png",
        "/img/drip-table-13.png",
        "/img/Model-33.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "online-landscape": {
    "title": "ONLINE PC DRIPPER/EMITTERS",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Emitting Devices",
    "heroImage": "/img/land-head-3.png",
    "productImage": "/img/land-3.png",
    "features": [
      "Ensures uniform water discharge under varying pressure conditions.",
      "Made from 100% virgin raw materials  for long life.",
      "Self-flushing mechanism reduces clogging.",
      "Color-coded design allows easy identification of different flow rates, such as 2 LPH, 4 LPH, and 8 LPH.",
      "Resistant to chemicals and fertilizers.",
      "Provides accurate and consistent flow rate.",
      "Easy to install",
      "Option to use Anti â€“ Bug cap.",
      "Extended emitter outlet to use micro tube for applications needing further extension.",
      "A sealed turbulent flow path PC Emitter incorporating a diaphragm that maintains a uniform flow rate over a wide range of operating pressures."
    ],
    "application": {
      "text": "Suitable for Undulated lands, Hilly regions, Orchard, Tree, Shrubs, Vineyards, Green House Irrigation, Vertical Gardens and Landscape.",
      "images": [
        "/img/drip-table-12.png",
        "/img/Model-32.png"
      ]
    },
    "pdf": ""
  },
  "online-turbokey-lands": {
    "title": "",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Online Emitters NPC TurboKey Drippers",
    "heroImage": "/img/land-head-4.png",
    "productImage": "/img/Drip-5.jpg",
    "features": [
      "Online Emitters (Drippers) are made from virgin Engineering Polymers & UV Stabilised.",
      "Suitable for use with 12 mm, 16 mm & 20 mm Plain Drip Laterals.",
      "Openable type and easy to maintain.",
      "Inlet at an angle to provide easy entry of water into Emitter.",
      "Resistant to chemicals and fertilizers used in fertigation.",
      "Compact and sturdy design ensures long service life.",
      "Easy to install on lateral pipes using a punching tool.",
      "Available in four color-coded flow rates: 2 LPH (Yellow), 4 LPH (Green), and 8 LPH (Red)  & 4 LPH  Black"
    ],
    "application": {
      "text": "Ideal for precise irrigation in orchards, vineyards, greenhouses, and landscape areas. Ensures uniform water distribution for vegetables, fruits, and closely spaced crops.",
      "images": [
        "/img/drip-table-13.png",
        "/img/Model-33.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "onlinepc-dripper-emitter": {
    "title": "Online PC Dripper/Emitters",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Emitting Devices",
    "heroImage": "/img/drip-head-5.png",
    "productImage": "/img/Drip-4.jpg",
    "features": [
      "Ensures uniform water discharge under varying pressure conditions.",
      "Made from 100% virgin raw materials  for long life.",
      "Self-flushing mechanism reduces clogging.",
      "Color-coded design allows easy identification of different flow rates, such as 2 LPH, 4 LPH, and 8 LPH.",
      "Resistant to chemicals and fertilizers.",
      "Provides accurate and consistent flow rate.",
      "Easy to install",
      "Option to use Anti Bug cap.",
      "Extended emitter outlet to use micro tube for applications needing further extension.",
      "A sealed turbulent flow path PC Emitter incorporating a diaphragm that maintains a uniform flow rate over a wide range of operating pressures."
    ],
    "application": {
      "text": "Suitable for Undulated lands, Hilly regions, Orchard, Tree, Shrubs, Vineyards, Green House Irrigation, Vertical Gardens and Landscape.",
      "images": [
        "/img/drip-table-12.png",
        "/img/Model-32.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "part-circle": {
    "title": "Brass Part Circle Sprinkler",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "",
    "heroImage": "/img/Spri-head-2.png",
    "productImage": "/img/Spri-6.png",
    "features": [
      "Â¾â€ Part Circle Metal Sprinkler designed for efficient water distribution.",
      "Constructed with high-quality Brass Bearing for durability.",
      "Equipped with Â¾â€ Male BSP/NPT connection for easy installation.",
      "Adjustable Diffuser Pin allows precise control of water spread.",
      "Single Nozzle design ensures uniform water flow.",
      "Stainless Steel Fulcrum Pin, Arm & Bearing Spring provide long-lasting performance.",
      "Chemical-resistant bearing seals enhance life and reliability.",
      "Copper Base Alloy Body & Arm offer extra strength and corrosion resistance.",
      "Suitable for both medium and large-scale irrigation setups."
    ],
    "application": {
      "text": "Ideal for agricultural fields, center pivot systems, solid set installations, and large landscape irrigation areas.",
      "images": [
        "/img/part-table-1.png",
        "/img/part-table-2.png",
        "/img/part-table-3.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "plain-lateral": {
    "title": "Plain Lateral/ Polytubes",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Drip Tubing",
    "heroImage": "/img/drip-head-1.png",
    "productImage": "/img/Drip-1.jpg",
    "features": [
      "Laterals serve as the core lifeline of every efficient drip irrigation system.",
      "Crafted from premium 100% virgin raw materials for unmatched durability and performance.",
      "Each roll features laser-etched markings with precise date stamps for full production traceability.",
      "Compact and neatly coiled, making storage, stacking, and transportation effortless.",
      "Designed with UV stabilization to resist sunlight damage and prevent environmental cracking.",
      "Thoroughly tested at every stage of manufacturing to ensure top-notch quality and reliability.",
      "Suitable for both surface and subsurface irrigation applications with excellent performance.",
      "A distinct RED guideline ensures perfect alignment of emitters and accessories during installation.",
      "The smooth inner surface minimizes friction loss, ensuring optimal water distribution.",
      "Strong, dependable, and long-lasting  a product you can truly rely on."
    ],
    "application": {
      "text": "Ideal for row crops, vegetables, horticultural plantations, orchards, vineyards, fruit crops, sugarcane, floriculture, banana, cotton, chillies, and all kinds of close-spaced field crops, as well as greenhouses and landscape irrigation.",
      "images": [
        "/img/drip-table-1.png",
        "/img/drip-table-1.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "plastci-full-circle": {
    "title": "Plastic Full Circle Sprinkler",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "",
    "heroImage": "/img/Spri-head-4.png",
    "productImage": "/img/Spri-11.png",
    "features": [
      "Â½â€ Full Circle Plastic Sprinkler designed for efficient micro irrigation.",
      "Durable Plastic Bearing Assembly ensures smooth and long-lasting performance.",
      "Comes with Â½â€ Male BSP/NPT connection for easy and secure installation.",
      "Stainless Steel Fulcrum Pin, Arm & Bearing Spring provide long wearing reliability.",
      "BIS Approved and ISI Marked for assured quality and standard compliance.",
      "Operates at low pressure, ensuring significant energy savings.",
      "Easy to install, operate, and dismantle for maintenance.",
      "Lightweight construction with high durability under field conditions.",
      "Provides uniform water distribution with minimal clogging risk."
    ],
    "application": {
      "text": "Specially designed for micro irrigation in crops like potato, onion, garlic, ginger, pulses, tea, and nurseries.",
      "images": [
        "/img/plastic-table-1.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "pressure-gauge-landscape": {
    "title": "Pressure Gauge",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Control Valves & ACC",
    "heroImage": "/img/drip-head-44.png",
    "productImage": "/img/Drip-42.png",
    "features": [
      "Manufactured from high-quality PVC material, ensuring strength and long service life.",
      "Connections available in Threaded (BSP, NPT & BSPT) or Solvent Glued Socket Ends, conforming to ISO, ASTM, BS, and DIN standards.",
      "User-friendly design enables smooth handle movement with low operational torque for easy use.",
      "Corrosion-resistant and UV-stabilized body ensures durability even under harsh outdoor conditions.",
      "Reliable and easy to maintain, offering long-term performance with minimal servicing.",
      "Suitable for temperature applications up to 50Â°C, maintaining consistent efficiency.",
      "Available sizes: Â½\", Â¾\", 1\", 1Â¼\", 1Â½\", 2\", 2Â½\", and 3\" for diverse system requirements."
    ],
    "application": {
      "text": "Ideal for manual shut-off and isolation in irrigation distribution lines and overhead sprinkler systems, providing smooth and reliable water control in agricultural and industrial applications.",
      "images": []
    },
    "pdf": "AM pdf.pdf"
  },
  "pressure-gauge": {
    "title": "Pressure Gauge",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Control Valves & ACC",
    "heroImage": "/img/drip-head-44.png",
    "productImage": "/img/Drip-42.png",
    "features": [
      "Manufactured from high-quality PVC material, ensuring strength and long service life.",
      "Connections available in Threaded (BSP, NPT & BSPT) or Solvent Glued Socket Ends, conforming to ISO, ASTM, BS, and DIN standards.",
      "User-friendly design enables smooth handle movement with low operational torque for easy use.",
      "Corrosion-resistant and UV-stabilized body ensures durability even under harsh outdoor conditions.",
      "Reliable and easy to maintain, offering long-term performance with minimal servicing.",
      "Suitable for temperature applications up to 50Â°C, maintaining consistent efficiency.",
      "Available sizes: Â½\", Â¾\", 1\", 1Â¼\", 1Â½\", 2\", 2Â½\", and 3\" for diverse system requirements."
    ],
    "application": {
      "text": "Ideal for manual shut-off and isolation in irrigation distribution lines and overhead sprinkler systems, providing smooth and reliable water control in agricultural and industrial applications.",
      "images": []
    },
    "pdf": "AM pdf.pdf"
  },
  "pressure-relief": {
    "title": "Pressure Relief Valve",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Control Valves & ACC",
    "heroImage": "/img/drip-head-43.png",
    "productImage": "/img/Drip-44.png",
    "features": [
      "Available in two models",
      "2â€ BSP Male Threaded Connection",
      "2â€ BSP Male Threaded Connection"
    ],
    "application": {
      "text": "Ideal for use in drip and sprinkler irrigation systems, filtration units, and industrial pipelines to automatically release excess pressure and ensure safe, continuous operation.",
      "images": []
    },
    "pdf": "AM pdf.pdf"
  },
  "prv": {
    "title": "Pressure Regulating Valves",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "",
    "heroImage": "/img/land-head-10.png",
    "productImage": "/img/Land-28.png",
    "features": [
      "Available in two models :-"
    ],
    "application": {
      "text": "",
      "images": []
    },
    "pdf": "AM pdf.pdf"
  },
  "quick-coupling": {
    "title": "",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "",
    "heroImage": "/img/land-head-13.png",
    "productImage": "/img/Land-31.png",
    "features": [
      "Solid one-piece brass body with a durable thermoplastic cover ensures long life and reliable field performance.",
      "Available in 3/4\" and 1\" BSP female threaded inlet connections for versatile installation compatibility.",
      "Equipped with a corrosion-resistant stainless-steel spring that prevents leakage and ensures smooth operation.",
      "Designed with a drain hole in the body to minimize debris collection and maintain clean internal flow.",
      "Auto-closing lid activated by the spring mechanism keeps the system protected when not in use.",
      "Quick Coupling Valve (QCV) key threads into the top of the valve to provide immediate and secure water access.",
      "360° hose swivel allows easy attachment of a water hose and ensures flexible movement without tangling.",
      "Optional locking cover models are available on request for added security and system protection.",
      "Ideal for residential, commercial landscapes, golf courses, and sports fields, offering convenient water access in irrigation systems.",
      "Available dimensions: 3.8\" without cover for ¾\" QCV, 5.0\" with cover for 1\" QCV, with operating range 0.5-8.5 Kg/cm² (5-125 psi) and flow rates 10-70 GPM (38-265 LPM) for ¾\" QCV and 10-125 GPM (38-473 LPM) for 1\" QCV."
    ],
    "application": {
      "text": "",
      "images": [
        "/img/Model-53.png",
        "/img/Model-54.png",
        "/img/Model-55.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "quote": {
    "title": "Free Quote",
    "category": "Products",
    "categoryLink": "#",
    "subCategory": "Get A Free Quote",
    "heroImage": "/img/Drip-header.png",
    "productImage": "",
    "features": [],
    "application": {
      "text": "",
      "images": []
    },
    "pdf": ""
  },
  "rain-diamond": {
    "title": "1-1/2\" Rain Diamond Sprinkler",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "",
    "heroImage": "/img/Rain-head-4.png",
    "productImage": "/img/Rain-4.png",
    "features": [
      "1.5\" Part Circle & Full Circle Sprinkler Gun for flexible irrigation coverage.",
      "Durable Brass Bearing Assembly ensures smooth and long-lasting performance.",
      "Comes with 1.5\" BSP/NPT Female & 2\" BSP/NPT Male Connection for easy installation.",
      "Pressure Die-Cast Arm & Body with aluminum extrusion range tube provide extra strength.",
      "Equipped with new design interchangeable plastic nozzles for multiple applications.",
      "Stainless Steel Fulcrum Pin, Arm & Bearing Spring offer high durability and reliability.",
      "Chemical-resistant bearing seal ensures protection against corrosion and chemicals.",
      "Designed for excellent water distribution uniformity even at low pressure.",
      "Low water consumption makes it efficient and cost-effective for irrigation."
    ],
    "application": {
      "text": "Ideal for irrigation of field cropslike sugarcane, groundnut, maize, wheat, grams, pulses, and plantations such as tea and coffee.",
      "images": []
    },
    "pdf": "AM pdf.pdf"
  },
  "rain-gold": {
    "title": "1-1/2\" Rain Gold Sprinkler",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "",
    "heroImage": "/img/Rain-head-2.png",
    "productImage": "/img/Rain-2.png",
    "features": [
      "1-1/2â€ Part Circle & Full Circle Sprinkler Gun for flexible irrigation coverage.",
      "Robust Brass/SS Bearing Assembly for long-lasting durability.",
      "1-1/2â€ Female BSP/NPT Connection enables quick and easy fitting.",
      "Stainless Steel Fulcrum Pin, Arm & Bearing Spring ensure reliable performance.",
      "Chemical-resistant bearing seal prevents corrosion and wear.",
      "Gravity Die-Cast Aluminum Body & Arm provide superior strength and stability.",
      "Interchangeable nozzles available for multiple irrigation requirements.",
      "Designed for smooth water distribution and consistent performance.",
      "Suitable for medium to large-scale agricultural and industrial applications."
    ],
    "application": {
      "text": "Ideal for irrigation of field cropslike sugarcane, groundnut, maize, wheat, grams, pulses, and plantations such as tea and coffee.",
      "images": [
        "/img/rain-table-2.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "rain-pipe-fittings": {
    "title": "Vidhi Rain Pipe Fittings",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "",
    "heroImage": "/img/eco-head-6.png",
    "productImage": "/img/Eco-15.png",
    "features": [
      "Helps in linking the sub-main line directly with the rain pipe.",
      "Works together with a grommet to ensure a tight, leak-free connection.",
      "Comes with a valve mechanism to regulate and manage water flow easily.",
      "Manufactured using premium 100% virgin material for enhanced durability.",
      "Designed to provide long-lasting performance in all irrigation conditions.",
      "Ensures smooth installation and reliable functioning throughout its lifespan."
    ],
    "application": {
      "text": "",
      "images": [
        "/img/Model-2.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "rain-pipe": {
    "title": "",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "",
    "heroImage": "/img/eco-head-5.png",
    "productImage": "/img/Eco-14.png",
    "features": [
      "Ideal for irrigating leafy greens, short-height crops, and closely planted fields.",
      "Ensures consistent and even water spread across the entire area.",
      "Helps save water by supplying moisture right to the plant’s root zone.",
      "Minimizes evaporation and runoff, improving overall irrigation efficiency.",
      "Operates effectively even at very low pressure starting from 0.6 Kg/cm².",
      "Can be safely used up to a maximum pressure of 1.5 Kg/cm²."
    ],
    "application": {
      "text": "",
      "images": []
    },
    "pdf": "AM pdf.pdf"
  },
  "rain-silver": {
    "title": "1-1/4\" Rain Silver Sprinkler",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "",
    "heroImage": "/img/Rain-head-1.png",
    "productImage": "/img/Rain-1.png",
    "features": [
      "1-1/4â€ Part Circle & Full Circle Sprinkler Gun for versatile coverage.",
      "Durable Brass/SS Bearing Assembly ensures long-term performance.",
      "1-1/4â€ Female BSP/NPT Connection for easy installation.",
      "Stainless Steel Fulcrum Pin, Arm & Bearing Spring for high reliability.",
      "Chemical-resistant bearing seal provides protection from corrosion.",
      "Pressure Die-Cast Aluminum Body & Arm for enhanced strength.",
      "Interchangeable nozzles available in multiple sizes for varied use.",
      "Designed for smooth operation under different water pressures.",
      "Suitable for both agricultural and industrial irrigation systems."
    ],
    "application": {
      "text": "Ideal for irrigation of field cropslike sugarcane, groundnut, maize, wheat, grams, pulses, and plantations such as tea and coffee.",
      "images": [
        "/img/rain-table-1.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "rain-violet": {
    "title": "2\" Rain Violet Sprinkler",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "",
    "heroImage": "/img/Rain-head-3.png",
    "productImage": "/img/Rain-3.png",
    "features": [
      "2â€ Part Circle & Full Circle Sprinkler Gun for wide-area irrigation coverage.",
      "Heavy-duty Brass/SS Bearing Assembly ensures long service life.",
      "2â€ Female BSP/NPT Connection allows easy and secure installation.",
      "Stainless Steel Fulcrum Pin, Arm & Bearing Spring offer strong reliability.",
      "Chemical-resistant bearing seal provides protection against corrosion.",
      "Gravity Die-Cast Aluminum Body & Arm deliver superior strength and durability.",
      "Equipped with interchangeable nozzles to suit various irrigation needs.",
      "Ensures uniform water distribution with efficient performance.",
      "Suitable for high-pressure agricultural and industrial irrigation systems."
    ],
    "application": {
      "text": "Ideal for irrigation of field cropslike sugarcane, groundnut, maize, wheat, grams, pulses, and plantations such as tea and coffee.",
      "images": [
        "/img/rain-table-3.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "raingold-stand": {
    "title": "1-1/2\" Rain Gold Sprinkler Stand",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "",
    "heroImage": "/img/Rain-head-2.png",
    "productImage": "/img/rainstand-2.png",
    "features": [
      "Heavy-Duty Construction designed to withstand high pressure and tough field conditions.",
      "Made from top-quality virgin mild steel, ensuring superior strength and durability.",
      "Protective coating for long-lasting performance in all weather.",
      "Adjustable Height up to 4.5 ft, allowing accurate rain sprinkler positioning for maximum coverage.",
      "Easy to Install, making it convenient to shift and set up in any field.",
      "Provides better pattern coverage and maintains consistent performance even in windy conditions.",
      "Suitable for tropical, temperate, and humid climates, ensuring versatility across regions",
      "Compatible with solid set irrigation systems and mechanically moved systems like center pivots.",
      "Ensures gentle and even watering, reducing risk of soil erosion and protecting delicate crops.",
      "Comes with a 1-1/2\" riser size, ensuring strong flow and stable sprinkler operation."
    ],
    "application": {
      "text": "",
      "images": []
    },
    "pdf": "AM pdf.pdf"
  },
  "rainsilver-stand": {
    "title": "1-1/4\" Rain Silver Sprinkler Stand",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "",
    "heroImage": "/img/Rain-head-1.png",
    "productImage": "/img/rainstand-1.png",
    "features": [
      "Heavy-Duty Construction ensures strong performance and long operational life in all farming conditions.",
      "Manufactured from top-quality virgin mild steel, offering exceptional strength and stability.",
      "Protective coating ensures corrosion resistance and long-term durability.",
      "Adjustable Height up to 4.5 ft, allowing precise rain sprinkler positioning for maximum coverage.",
      "Easy to Install, enabling quick setup and movement across fields.",
      "Better Pattern Coverage, delivering uniform water distribution with excellent performance in windy conditions.",
      "Suitable for a variety of climates including tropical, temperate, and humid regions.",
      "Compatible with both solid set field irrigation and mechanically moved systems like center pivot units.",
      "Minimizes structural damage to soil and delicate plants due to gentle and even watering.",
      "Comes with 1¼” Riser Size, ensuring stable flow and optimal sprinkler output."
    ],
    "application": {
      "text": "",
      "images": []
    },
    "pdf": "AM pdf.pdf"
  },
  "rainviolet-stand": {
    "title": "2\" Rain Violet Sprinkler Stand",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "",
    "heroImage": "/img/Rain-head-3.png",
    "productImage": "/img/rainstand-3.png",
    "features": [
      "Heavy-Duty Construction built to handle high pressure and demanding field conditions.",
      "Manufactured from top-quality virgin mild steel, ensuring maximum strength and long-term durability.",
      "Protective coating for long life, even in harsh weather and water conditions.",
      "Adjustable Height up to 4.5 ft, allowing flexible rain sprinkler placement for wider and more uniform coverage.",
      "Easy to Install, enabling quick shifting and setup across fields.",
      "Provides excellent pattern coverage with strong performance even under windy conditions",
      "Suitable for tropical, temperate, and humid climates, ensuring reliable operation throughout the year.",
      "Compatible with solid set irrigation systems and mechanically moved systems like center pivot units.",
      "Ensures gentle, even watering, reducing the risk of soil erosion and preventing damage to delicate crops.",
      "Comes with a 2-inch riser size, delivering high flow and stable sprinkler performance for large fields."
    ],
    "application": {
      "text": "",
      "images": []
    },
    "pdf": "AM pdf.pdf"
  },
  "resier-pipe": {
    "title": "Riser Pipes",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "",
    "heroImage": "/img/Spri-head-7.png",
    "productImage": "/img/Spri-22.png",
    "features": [
      "Made from high-quality, UV-stabilized HDPE or PVC material.",
      "Available in various diameters and lengths for flexible use.",
      "Corrosion and rust-resistant for longer service life.",
      "Ensures stable connection between lateral and sprinkler.",
      "Withstands high operating pressure without leakage.",
      "Lightweight and easy to install in any irrigation setup.",
      "Provides vertical water delivery to sprinklers.",
      "Compatible with all standard fittings and accessories.",
      "Durable construction suitable for field and garden irrigation systems.",
      "The Riser Pro is designed with an internal water flow guide to minimize friction loss and ensure smooth water movement.",
      "Its larger inlet helps reduce pressure drop during vertical installation, maintaining consistent and stable performance",
      "Additionally, it offers flexibility by allowing easy connection adjustments according to crop height requirements, making it ideal for diverse irrigation setups."
    ],
    "application": {
      "text": "Used for connecting sprinklers, micro-sprinklers, or emitters above the ground for effective irrigation.",
      "images": []
    },
    "pdf": "AM pdf.pdf"
  },
  "riser-pipes-eco": {
    "title": "RISER PIPES",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Eco Sprinklers",
    "heroImage": "/img/eco-head-9.png",
    "productImage": "/img/Eco-22.png",
    "features": [
      "Made from high-quality, UV-stabilized raw material.",
      "Available in various diameters and lengths for flexible use.",
      "Corrosion and rust-resistant for longer service life.",
      "Ensures stable connection between lateral and sprinkler.",
      "Withstands high operating pressure without leakage.",
      "Lightweight and easy to install in any irrigation setup.",
      "Provides vertical water delivery to sprinklers.",
      "Compatible with all standard fittings and accessories.",
      "Durable construction suitable for field and garden irrigation systems.",
      "The Riser Pro is designed with an internal water flow guide to minimize friction loss and ensure smooth water movement.",
      "Its larger inlet helps reduce pressure drop during vertical installation, maintaining consistent and stable performance",
      "Additionally, it offers flexibility by allowing easy connection adjustments according to crop height requirements, making it ideal for diverse irrigation setups."
    ],
    "application": {
      "text": "",
      "images": []
    },
    "pdf": "AM pdf.pdf"
  },
  "saddles": {
    "title": "SERVICE SADDLES",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "",
    "heroImage": "/img/land-head-11.png",
    "productImage": "/img/Land-29.png",
    "features": [
      "Made from high-quality virgin material for long-lasting durability.",
      "UV stabilized to withstand extreme weather conditions.",
      "Corrosion and chemical resistant for reliable performance.",
      "Available in various sizes to fit different pipe diameters.",
      "Equipped with high-grade rubber sealing for leak-proof connection.",
      "Easy and quick installation without special tools.",
      "Suitable for HDPE & PVC pipes.",
      "Fitted with brass threaded outlet for extra strength.",
      "Provides strong grip ensuring no pipe slippage during operation."
    ],
    "application": {
      "text": "",
      "images": []
    },
    "pdf": "AM pdf.pdf"
  },
  "service-saddles": {
    "title": "Service Saddles",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "",
    "heroImage": "/img/Spri-head-5.png",
    "productImage": "/img/Spri-15.png",
    "features": [
      "Made from high-quality virgin material for long-lasting durability.",
      "UV stabilized to withstand extreme weather conditions.",
      "Corrosion and chemical resistant for reliable performance.",
      "Available in various sizes to fit different pipe diameters.",
      "Equipped with high-grade rubber sealing for leak-proof connection.",
      "Easy and quick installation without special tools.",
      "Suitable for HDPE & PVC pipes.",
      "Fitted with brass threaded outlet for extra strength.",
      "Provides strong grip ensuring no pipe slippage during operation."
    ],
    "application": {
      "text": "",
      "images": [
        "/img/Model-41.png",
        "/img/Model-42.png",
        "/img/Model-43.png",
        "/img/Model-44.png",
        "/img/Model-45.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "single-union-landscape": {
    "title": "Single Union Ball Valve",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Control Valves & ACC",
    "heroImage": "/img/drip-head-44.png",
    "productImage": "/img/Drip-42.png",
    "features": [
      "Manufactured from high-quality PVC material, ensuring strength and long service life.",
      "Connections available in Threaded (BSP, NPT & BSPT) or Solvent Glued Socket Ends, conforming to ISO, ASTM, BS, and DIN standards.",
      "User-friendly design enables smooth handle movement with low operational torque for easy use.",
      "Corrosion-resistant and UV-stabilized body ensures durability even under harsh outdoor conditions.",
      "Reliable and easy to maintain, offering long-term performance with minimal servicing.",
      "Suitable for temperature applications up to 50Â°C, maintaining consistent efficiency.",
      "Available sizes: Â½\", Â¾\", 1\", 1Â¼\", 1Â½\", 2\", 2Â½\", and 3\" for diverse system requirements."
    ],
    "application": {
      "text": "Ideal for manual shut-off and isolation in irrigation distribution lines and overhead sprinkler systems, providing smooth and reliable water control in agricultural and industrial applications.",
      "images": []
    },
    "pdf": "AM pdf.pdf"
  },
  "single-union": {
    "title": "Single Union Ball Valve",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Control Valves & ACC",
    "heroImage": "/img/drip-head-44.png",
    "productImage": "/img/Drip-42.png",
    "features": [
      "Manufactured from high-quality PVC material, ensuring strength and long service life.",
      "Connections available in Threaded (BSP, NPT & BSPT) or Solvent Glued Socket Ends, conforming to ISO, ASTM, BS, and DIN standards.",
      "User-friendly design enables smooth handle movement with low operational torque for easy use.",
      "Corrosion-resistant and UV-stabilized body ensures durability even under harsh outdoor conditions.",
      "Reliable and easy to maintain, offering long-term performance with minimal servicing.",
      "Suitable for temperature applications up to 50Â°C, maintaining consistent efficiency.",
      "Available sizes: Â½\", Â¾\", 1\", 1Â¼\", 1Â½\", 2\", 2Â½\", and 3\" for diverse system requirements."
    ],
    "application": {
      "text": "Ideal for manual shut-off and isolation in irrigation distribution lines and overhead sprinkler systems, providing smooth and reliable water control in agricultural and industrial applications.",
      "images": []
    },
    "pdf": "AM pdf.pdf"
  },
  "swing-joint": {
    "title": "SWING JOINTS",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "",
    "heroImage": "/img/land-head-12.png",
    "productImage": "/img/Land-30.png",
    "features": [
      "Available in two sizes: 1/2\" × 1/2\" × 12\" and 3/4\" × 3/4\" × 12\", both with a 12-inch length.",
      "Designed to operate efficiently under pressures up to 5.5 bar.",
      "Withstands surge pressures up to 15.5 bar for enhanced system safety.",
      "Built to perform reliably in temperatures up to 50Â°C .",
      "Comes as a quality pre-assembled swing assembly, reducing installation time.",
      "Features a flexible swing arm for easy adjustment of sprinkler heads to the desired grade.",
      "Flexible joints ensure smooth positioning and easy alignment during setup.",
      "Flexible components minimize leakage risk, offering better performance than rigid fittings.",
      "Engineered to resist cracking or breaking under stress, ensuring long-term durability."
    ],
    "application": {
      "text": "",
      "images": [
        "/img/Model-52.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "thin-wall-drip-tape-fittings": {
    "title": "Thin Wall Drip Tape Fittings",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Drip Tubing & Fittings",
    "heroImage": "/img/eco-head-4.png",
    "productImage": "/img/Eco-3.png",
    "features": [
      "Joins two sections of drip tape securely in irrigation systems.",
      "Provides a leak-proof and tight connection",
      "Maintains consistent water pressure and flow throughout the line.",
      "Helps in extending drip tape length as per field requirement.",
      "Useful for repairing damaged sections of drip tape easily.",
      "Ensures smooth and uninterrupted water distribution.",
      "Simple to install and remove without special tools.",
      "Enhances efficiency and durability of the drip irrigation system"
    ],
    "application": {
      "text": "",
      "images": [
        "/img/Model-22.png",
        "/img/Model-23.png",
        "/img/Model-24.png",
        "/img/Model-57.png",
        "/img/Model-2.png",
        "/img/Model-58.png",
        "/img/Model-59.png",
        "/img/Model-60.png",
        "/img/Model-61.png",
        "/img/Model-62.png",
        "/img/Model-21.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "thinwall-dripline": {
    "title": "Thin Wall Drip Line Cylindrical",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Drip Tubing & Fittings",
    "heroImage": "/img/eco-head-2.png",
    "productImage": "/img/Eco-24.png",
    "features": [
      "Manufactured using premium 100% virgin material to ensure long-lasting performance in the field.",
      "UV-protected construction helps the pipe withstand sunlight exposure and prevents cracking.",
      "Available with discharge rates of 2 LPH and 4 LPH, giving farmers flexibility based on crop needs.",
      "Designed with a very low coefficient of variation (below 5%), ensuring uniform water output.",
      "Built to offer strong resistance against fertilizers and agricultural chemicals, maintaining durability.",
      "Emitters come with dual options of 2 or 4 outlets, allowing even water spread throughout the line.",
      "Engineered with a wide-flow emitter passage, minimizing the risk of clogging during irrigation.",
      "Emitter spacing can be customized starting from 20 cm as per the growerâ€™s specific field layout.",
      "Provides specialized grouped spacing options for crops planted at wider intervals.",
      "Ensures consistent and efficient water delivery, supporting healthy crop growth across the entire field."
    ],
    "application": {
      "text": "",
      "images": []
    },
    "pdf": "AM pdf.pdf"
  },
  "thiwall-driptape": {
    "title": "Thin Wall Drip Tape  Flat",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Drip Tubing & Fittings",
    "heroImage": "/img/eco-head-3.png",
    "productImage": "/img/Eco-2.png",
    "features": [
      "Produced using 100% pure virgin raw material, ensuring strength, flexibility, and long service life.",
      "Designed with UV shielding properties that protect the tape from sunlight damage and prevent surface cracking.",
      "Offers a variety of discharge options ranging from 2 LPH to 4 LPH, suitable for different crop requirements.",
      "Ensures very high uniformity in water output, maintaining a coefficient of variation below 5%.",
      "Built with excellent resistance to fertilizers and chemical inputs, ensuring reliable operation in all conditions.",
      "The drip tape features a large flow path emitter design, reducing chances of clogging even in challenging water conditions.",
      "Emitter spacing is adjustable, starting from 20 cm to match field layout and crop spacing needs.",
      "Designed to deliver even distribution of water, supporting optimum irrigation efficiency.",
      "Ideal for high-precision irrigation, helping farmers manage water usage effectively.",
      "Ensures a smooth and consistent flow, making it dependable for various crop types and soil conditions."
    ],
    "application": {
      "text": "",
      "images": []
    },
    "pdf": "AM pdf.pdf"
  },
  "valve-box": {
    "title": "Valve Box",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "",
    "heroImage": "/img/land-head-14.png",
    "productImage": "/img/land-33.png",
    "features": [
      "Lightweight yet heavy-duty plastic construction ensures long-lasting durability.",
      "Provides strong protection for sprinkler system valves in all environments.",
      "Removable pre-moulded slots allow easy installation of sprinkler header lines without special tools.",
      "Green lid and black box design blends naturally with garden and landscape surroundings.",
      "Suitable for both freezing and non-freezing areas, ensuring year-round performance.",
      "Anti-skid lid design offers added safety and stability.",
      "Side ridges provide enhanced side-wall strength and structural support.",
      "Bottom flanges prevent sinking, keeping the valve box stable in soft soil.",
      "Environment-friendly manufacturing.Provides strong grip ensuring no pipe slippage during operation."
    ],
    "application": {
      "text": "",
      "images": [
        "/img/valve-table.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "ventury-injector": {
    "title": "Ventury Injector",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "",
    "heroImage": "/img/drip-head-40.png",
    "productImage": "/img/Spri-27.png",
    "features": [
      "Made from premium 100% virgin Materials ensuring durability and long service life.",
      "Corrosion and chemical-resistant, suitable for use with a wide range of fertilizers and chemicals.",
      "Compact design for easy installation and smooth operation in any irrigation setup.",
      "Works on the differential pressure principle for efficient fertilizer or chemical injection.",
      "Highly efficient in mixing and delivering fertilizers uniformly in the irrigation line.",
      "Economical and cost-effective solution for fertigation and chemical application.",
      "Low maintenance requirement with easy handling and cleaning.",
      "Available in 3/4\" BSP male thread connections for flexible compatibility.",
      "BIS approved ISI marked ensuring reliability and quality assurance.",
      "Available Sizes: ¾\", 2\""
    ],
    "application": {
      "text": "",
      "images": [
        "/img/Model-63.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  },
  "vertical-garden": {
    "title": "",
    "category": "Products",
    "categoryLink": "/index",
    "subCategory": "Vertical Garden Pots / Hanging pot",
    "heroImage": "/img/vidhikit-header-2.png",
    "productImage": "/img/dripkit-1.png",
    "features": [
      "Made from premium virgin plastic material, ensuring high durability and long service life.",
      "UV-stabilized construction protects the pots from sun damage and color fading",
      "Specially designed vertical hook system for easy hanging on grills, bars, and railings.",
      "Perfect for creating economical and modular vertical gardens at home or in commercial spaces.",
      "Lightweight yet strong design, capable of carrying up to 2.5 kg per pot.",
      "Widely used for window grills, balconies, verandas, and small space gardening.",
      "Ideal for both indoor and outdoor use, thanks to weather-resistant material.",
      "Suitable for growing seasonal flowers, money plants, syngoniums, and ground covers.",
      "Available commonly in white and black, with full colour customization as per requirement.",
      "A cost-effective greenery solution, perfect for beautifying residential and project-based landscapes."
    ],
    "application": {
      "text": "",
      "images": [
        "/img/Model-56.png"
      ]
    },
    "pdf": "AM pdf.pdf"
  }
};
