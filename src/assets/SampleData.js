import { v4 as uuidv4 } from "uuid";

const productData = [
  //wheelbases
  {
    id: uuidv4(),
    name: "Gran Turismo® DD Extreme",
    class: "GT",
    category: "Wheel Bases",
    price: 209000,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/fc/d8/72/Product_Page_top_banner_GT_DD_RW_RW_X_Front_angled_.jpg",
      "https://fanatec.com/media/image/29/3c/33/Product_Page_top_banner_GT_DD_RW_X_Front_angled_facing_right.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/dd/08/2c/Product_thumbnail_GT_DD_RW_X__600x600.jpg",
    description:
      "The most powerful official Direct Drive system for Gran Turismo® combines an advanced Steering Wheel designed in partnership with Polyphony Digital and the 15 Nm ClubSport DD+ Wheel Base to deliver consistent torque performance and detailed force feedback.",
    features: [
      "Officially licensed for PlayStation®5 (compatibility is achieved via the Wheel Base) ",
      "Premium vegan leather grip gives it the look and feel of a GT road car",
      "New force feedback protocol developed for Fanatec Direct Drive ",
      "Advanced Tuning Menu allows enthusiasts to fine-tune the force feedback characteristics to suit their driving preferences",
      "Designed for QR2 from the ground up ",
      "FullForce technology  "
    ]
  },
  {
    id: uuidv4(),
    name: "ClubSport Racing Wheel F1®",
    class: "ClubSport",
    category: "Wheel Bases",
    price: 209000,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/1d/11/05/Product_Page_top_banner_CS_RW_F1_Front_1280x1280.jpg",
      "https://fanatec.com/media/image/01/24/8b/Product_Page_top_banner_CS_RW_F1_Front_angled_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/e7/c9/2b/Product_thumbnail_CS_RW_F1_600x600.jpg",
    description:
      "The ClubSport Racing Wheel F1® combines an advanced Formula Steering Wheel with a unique blue forged carbon finish and the 15 Nm ClubSport DD+ Wheel Base to deliver consistent torque performance and detailed force feedback. Our partnership with Sony Interactive Entertainment means that the ClubSport Racing Wheel F1® works seamlessly with all PlayStation®4 and PlayStation®5 systems.",
    features: [
      "Officially licensed by Formula 1®",
      "Officially licensed for PlayStation®5 (compatibility is achieved via the Wheel Base)",
      "Unique to ClubSport Racing Wheel F1® package, not sold separately",
      "F1®-style steering wheel with a compact 270 mm diameter for fast movements and reactions",
      "Strong, 5 mm-thick blue carbon fibre front plate; unique finish to each wheel",
      "Genuine leather grips (perforated for breathability)"
    ]
  },
  {
    id: uuidv4(),
    name: "Podium Wheel Base DD2",
    class: "Podium",
    category: "Wheel Bases",
    price: 190000,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/17/0e/70/Podium_DD2_QR2_upgrade_top_banner_1280x1280.jpg",
      "https://fanatec.com/media/image/c9/07/7b/Product_Page_top_banner_P_WB_DD2_QR2_Rear_1280x1280.jpg",
      "https://fanatec.com/media/image/90/6f/56/Product_Page_top_banner_P_WB_DD2_QR2_Top_down_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/03/94/fc/Podium_DD2_QR2_upgrade_thumb_600x600.jpg",
    description:
      "The Podium Wheel Base DD2 provides the ultimate force feedback experience with up to 25 Nm torque. No other direct drive system combines this level of performance, compatibility, and ease of use.",
    features: [
      "Custom-designed servo motor designed by our engineers and the first direct drive motor optimised for racing simulator applications.",
      "Outrunner-type motor achieves outstanding peak torque of 25Nm, matching the torque output in most real race cars using power steering.",
      "Motor acceleration and speed remains at the highest level, even with heavy steering wheels.",
      "Ultra-low torque ripple ensures minimal mechanical distractions and the same smooth experience as in a belt driven wheel.",
      "Wireless QR technology: Wireless transfer of data (infra-red) and power (inductive coupling) between the motor and quick release means no external cables between wheel base and steering wheel, and no need for batteries inside the wheel.",
      "Rotation: 2520 degrees (electronically limited, adjustable)."
    ]
  },
  {
    id: uuidv4(),
    name: "ClubSport DD+",
    class: "ClubSport",
    category: "Wheel Bases",
    price: 160200,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/56/d1/93/Product_Page_top_banner_CS_DD-_WB_Front_angled3e16XhP2MrFCS_1280x1280.jpg",
      "https://fanatec.com/media/image/61/75/b2/Product_Page_top_banner_CS_DD-_WB_Side9cKHXKz3uResB_1280x1280.jpg",
      "https://fanatec.com/media/image/3c/8b/9b/Product_Page_top_banner_CS_DD-_WB_Rear_angledmAtYVcfbqVvMF_1280x1280.jpg",
      "https://fanatec.com/media/image/51/cc/3c/Product_Page_top_banner_CS_DD-_WB_RearuYusgKwvk7K7M_1280x1280.jpg",
      "https://fanatec.com/media/image/1f/g0/6d/Product_Page_top_banner_CS_DD-_WB_FrontYDOor3YwJViLu_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/72/ed/93/Product_thumbnail_CS_DD-_WBzMWkSD4beBexJ_600x600.jpg",
    description:
      "The all-new ClubSport DD+ delivers 15 Nm of consistent torque performance with incredible responsiveness and dynamics. Your favourite racing sim suddenly became much more realistic.",
    features: [
      "Officially licensed for PlayStation®5 consoles and PlayStation®4 consoles",
      "Direct Drive servo motor",
      "Custom-designed in Germany for the ClubSport DD+ specifically for sim racing",
      "FullForce technology",
      "Passively cooled Wheel Base",
      "QR2"
    ]
  },
  {
    id: uuidv4(),
    name: "Gran Turismo DD Pro (8 Nm)",
    class: "GT",
    category: "Wheel Bases",
    price: 160200,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/9c/19/a9/Product_Page_top_banner_GT_DD_PRO_TC_Boost_Kit_Bundle_1280x1280.jpg",
      "https://fanatec.com/media/image/0d/a5/74/Product_Page_top_banner_GT_DD_PRO_WB_Front_angled_1280x1280.jpg",
      "https://fanatec.com/media/image/51/51/26/Product_Page_top_banner_GT_DD_PRO_RearBiE1Hr1cFvbDi_1280x1280.jpg",
      "https://fanatec.com/media/image/bf/b5/ea/Product_Page_top_banner_GT_DD_PRO_rear_angleMYpRjhMA16dvS_1280x1280.jpg",
      "https://fanatec.com/media/image/89/f6/c0/Product_Page_top_banner_GT_DD_PRO_siden3Ntp3vJUcSqV_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/25/10/d2/Product_thumbnail_GT_DD_PRO_Boost_Kit_Bundle_600x600.jpg",
    description:
      "Introducing the official Direct Drive Wheel for Gran Turismo®. Combining PlayStation®5 console performance with FANATEC® Direct Drive technology for the smoothest and most dynamic force feedback sensations.",
    features: [
      "The official Direct Drive Wheel for Gran Turismo",
      "Officially licensed for PlayStation®5 consoles and PlayStation®4 consoles",
      "Direct-Drive system delivers instant, detailed force feedback",
      "Linear, consistent performance",
      "Boost Kit 180 (included) unlocks maximum strength (8 Nm peak torque)",
      "Two-pedal set (throttle and brake), upgradeable to three pedals (upgrade kits sold separately)"
    ]
  },
  {
    id: uuidv4(),
    name: "Gran Turismo DD Pro (5 Nm)",
    class: "GT",
    category: "Wheel Bases",
    price: 112200,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/8f/64/f7/Product_Page_top_banner_GT_DD_PRO_comp_2_1280x1280.jpg",
      "https://fanatec.com/media/image/0d/a5/74/Product_Page_top_banner_GT_DD_PRO_WB_Front_angled_1280x1280.jpg",
      "https://fanatec.com/media/image/51/51/26/Product_Page_top_banner_GT_DD_PRO_RearBiE1Hr1cFvbDi_1280x1280.jpg",
      "https://fanatec.com/media/image/bf/b5/ea/Product_Page_top_banner_GT_DD_PRO_rear_angleMYpRjhMA16dvS_1280x1280.jpg",
      "https://fanatec.com/media/image/89/f6/c0/Product_Page_top_banner_GT_DD_PRO_siden3Ntp3vJUcSqV_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/dc/2b/05/Product_thumbnail_GT_DD_PRO_composition_600x600.jpg",
    description:
      "Introducing the official Direct Drive Wheel for Gran Turismo®. Combining PlayStation®5 console performance with FANATEC® Direct Drive technology for the smoothest and most dynamic force feedback sensations.",
    features: [
      "The official Direct Drive Wheel for Gran Turismo",
      "Officially licensed for PlayStation®5 consoles and PlayStation®4 consoles",
      "Direct-Drive system delivers instant, detailed force feedback",
      "Linear, consistent performance (5 Nm peak torque)",
      "Optional Boost Kit 180 (sold separately) unlocks maximum strength (8 Nm peak torque)",
      "Two-pedal set (throttle and brake), upgradeable to three pedals (upgrade kits sold separately)"
    ]
  },
  {
    id: uuidv4(),
    name: "CSL DD Racing Wheel WRC for Xbox & PC (8 Nm)",
    class: "CSL",
    category: "Wheel Bases",
    price: 104200,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/37/12/85/Product_Page_top_banner_CSL_DD_Racing_Wheel_WRC_for_XBox_PC_-8Nm_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/72/0a/33/Product_thumbnail_CSL_DD_Racing_Wheel_WRC_for_XBox_PC_-8Nm_600x600.jpg",
    description:
      "Officially licensed by the World Rally Championship (WRC), the CSL Elite Steering Wheel WRC is perfect for mastering the most demanding rally stages. This wheel is used in official WRC Esports competitions.",
    features: [
      "Perfect for rally racing and officially licensed by WRC",
      "A connected Fanatec wheel base will become compatible with the Xbox One and Xbox Series X|S due to integration of the Xbox-specific electronics into the wheel",
      "Plug & Play: Ready to use right away without any assembly required",
      "Realistic size (300 mm diameter)",
      "Improved ease of use (no clamping bolt required) and durability",
      "Exchangeable, supports QR1 Wheel-Side (ClubSport Quick Release Adapter)"
    ]
  },
  {
    id: uuidv4(),
    name: "ClubSport Steering Wheel F1® Esports V2",
    class: "ClubSport",
    category: "Wheel Bases",
    price: 144000,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/10/7e/d9/Product_Page_top_banner_CS_RW_F1EV2_Bundle_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/98/ce/f6/Product_thumbnail_CS_RW_F1EV2_Bundle_600x600.jpg",
    description:
      "Celebrating our partnership with Formula 1™ as official provider of the F1® Esports Series, the ClubSport Steering Wheel F1® Esports V2 is designed for driving Formula 1 cars at the limit. The V2 comes with magnetic shifters, customisable RGB LEDs, revised electronics, and an exchangeable quick release.",
    features: [
      "Officially licensed by Formula 1™",
      "Replica of a steering wheel as used in formula cars. The compact diameter of 270 mm allows fast movements and reactions",
      "Durable metal construction",
      "Genuine Alcantara® grips",
      "Magnetic paddle shifters (CSL Elite Magnetic Paddle Module, preinstalled)",
      "7-way FunkySwitch™: left, right, up, and down directional inputs, push button, and rotary encoder functionality"
    ]
  },
  {
    id: uuidv4(),
    name: "CSL DD (8 Nm)",
    class: "CSL",
    category: "Wheel Bases",
    price: 72100,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/a8/06/f8/Product_Page_top_banner_CSL_DD_8Nm_1280x1280.jpg",
      "https://fanatec.com/media/image/7b/4a/57/Product_Page_top_banner_CSL_DD_Front_1280x1280.jpg",
      "https://fanatec.com/media/image/c2/d7/02/Product_Page_top_banner_CSL_DD_Front_angled_1280x1280.jpg",
      "https://fanatec.com/media/image/1b/1e/8e/Product_Page_top_banner_CSL_DD_Side_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/64/2c/35/Product_thumbnail_CSL_DD_8Nm_600x600.jpg",
    description:
      "FANATEC® Direct-Drive technology comes to the CSL Series. From subtle sidewall flex to powerful self-aligning torque, you’ll feel everything with a heightened sense of realism. Exceptionally crisp and dynamic force feedback sensations await.",
    features: [
      "Direct-Drive system delivers instant, detailed force feedback",
      "Boost Kit 180 included",
      "Linear, consistent performance (8 Nm peak torque)",
      "Patented, exclusive FluxBarrier technology optimises motor efficiency and smoothness",
      "Full Fanatec SDK support ensures game compatibility out of the box for all major racing games",
      "Standard Tuning Menu allows beginners to get started quickly without having to worry about settings"
    ]
  },
  {
    id: uuidv4(),
    name: "CSL DD (5 Nm)",
    class: "CSL",
    category: "Wheel Bases",
    price: 72100,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/9a/37/1f/Product_Page_top_banner_CSL_DD_QR1_Primeshot_Front_angledmpWozrrVHP1ql_1280x1280.jpg",
      "https://fanatec.com/media/image/7b/4a/57/Product_Page_top_banner_CSL_DD_Front_1280x1280.jpg",
      "https://fanatec.com/media/image/c2/d7/02/Product_Page_top_banner_CSL_DD_Front_angled_1280x1280.jpg",
      "https://fanatec.com/media/image/1b/1e/8e/Product_Page_top_banner_CSL_DD_Side_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/b7/9d/3a/Product_thumbnail_CSL_DD_QR1_Primeshot_Front_angledEkN9Y6qrZkHkT_600x600.jpg",
    description:
      "FANATEC® Direct-Drive technology comes to the CSL Series. From subtle sidewall flex to powerful self-aligning torque, you’ll feel everything with a heightened sense of realism. Exceptionally crisp and dynamic force feedback sensations await.",
    features: [
      "Direct-Drive system delivers instant, detailed force feedback",
      "Linear, consistent performance (5 Nm peak torque)",
      "Optional Boost Kit 180 (sold separately) unlocks maximum strength (8 Nm peak torque)",
      "Patented, exclusive FluxBarrier technology optimises motor efficiency and smoothness",
      "Full Fanatec SDK support ensures game compatibility out of the box for all major racing games",
      "Standard Tuning Menu allows beginners to get started quickly without having to worry about settings"
    ]
  },
  //pedals
  {
    id: uuidv4(),
    name: "ClubSport Pedals V3 inverted",
    class: "ClubSport",
    category: "Pedals",
    price: 96200,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/8a/21/f3/CSP_V3i_prime2_1280x1280.jpg",
      "https://fanatec.com/media/image/fc/be/62/CSP_V3i_prime_1280x1280.jpg",
      "https://fanatec.com/media/image/ea/70/59/CSP_V3i_banner_1_1280x1280.jpg",
      "https://fanatec.com/media/image/fd/6b/9f/CSP_V3i_banner_2_1280x1280.jpg",
      "https://fanatec.com/media/image/2a/87/ce/CSP_V3i_banner_4_1280x1280.jpg",
      "https://fanatec.com/media/image/67/7e/41/CSP_V3i_banner_6_1280x1280.jpg",
      "https://fanatec.com/media/image/c0/c7/2f/CSP_V3i_banner_5_1280x1280.jpg",
      "https://fanatec.com/media/image/5c/a5/c3/CSP_V3i_banner_8_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/87/fd/18/CSP_V3i_preview_600x600.jpg",
    description:
      "Realism to the max - that's the ideology of these inverted pedals. ​Pivot points, ​arrangement, distances and overall feeling, just like in a real car!",
    features: [
      "Turning points of brake and clutch on top side like in real cars",
      "High resolution pedals with magnetic and contactless sensors on gas and clutch for a long life and maximum performance",
      "Pressure sensitive brake with custom made 90 kg load cell sensor",
      "Adjustable brake stiffness and travel without tools",
      "12-bit resolution (4096 values) on all axis",
      "Pedal extension to adjust the angle of the pedal plate and to change the angle of the whole pedal arm"
    ]
  },
  {
    id: uuidv4(),
    name: "ClubSport Pedals V3",
    class: "ClubSport",
    category: "Pedals",
    price: 64100,
    availability: "Pre-Order",
    image: [
      "https://fanatec.com/media/image/c2/e9/01/CSP_V3_prime_1280x1280.jpg",
      "https://fanatec.com/media/image/60/ef/a1/CSP_V3_prime2_1280x1280.jpg",
      "https://fanatec.com/media/image/f1/28/4a/CSP_V3_banner_LB1_1280x1280.jpg",
      "https://fanatec.com/media/image/47/43/b2/CSP_V3_banner_LB2_1280x1280.jpg",
      "https://fanatec.com/media/image/f6/12/08/CSP_V3_banner_LB3_1280x1280.jpg",
      "https://fanatec.com/media/image/78/69/af/CSP_V3_banner_LB4_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/b1/93/8f/CSP_V3_preview_600x600.jpg",
    description:
      "The ClubSport Pedals V3 offer professional-grade performance for serious sim racers. Featuring a load cell brake pedal for realistic braking, adjustable pedal positions for a customized fit, vibration feedback for enhanced immersion, and high-resolution sensors for precise input.",
    features: [
      "Load cell brake pedal for realistic braking feel",
      "Adjustable pedal positions for a customized fit",
      "Vibration feedback for enhanced immersion",
      "High-resolution sensors for precise input",
      "Durable construction for long-lasting performance",
      "Compatible with all major racing games"
    ]
  },
  {
    id: uuidv4(),
    name: "CSL Elite Pedals V2",
    class: "CSL",
    category: "Pedals",
    price: 48100,
    availability: "Pre-Order",
    image: [
      "https://fanatec.com/media/image/82/98/aa/Product_Page_top_banner_CSL_Elite_Pedals_V2_Front_angled_1_1280x1280.jpg",
      "https://fanatec.com/media/image/5a/9c/0a/Product_Page_top_banner_CSL_Elite_Pedals_V2_Front_1_1280x1280.jpg",
      "https://fanatec.com/media/image/f7/8b/29/Product_Page_top_banner_CSL_Elite_Pedals_V2_Rear_angled_1_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/94/68/58/Product_thumbnail_CSL_Elite_Pedals_V2_1_600x600.jpg",
    description:
      "The popular pedal set returns with an overhauled load cell brake, Hall sensors on throttle and clutch, and many refinements to the design.",
    features: [
      "High-performance three-pedal set (clutch, brake, throttle)",
      "Contactless Hall sensors on both clutch and throttle for high precision and durability",
      "All-new load cell brake system",
      "Up to 90 kg measured foot force on pedal plate (load cell sensor rated >200 kg)",
      "Load cell sensitivity (approx. 10 kg minimum) adjustable via Tuning Menu (or Fanatec Control Panel on PC)*",
      "Elastomer stack combined with load cell sensor creates a realistic braking feel"
    ]
  },
  {
    id: uuidv4(),
    name: "CSL Pedals LC",
    class: "CSL",
    category: "Pedals",
    price: 32100,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/85/fa/46/Product_Page_top_banner_CSL_P_LC_Front_angled_1280x1280.jpg",
      "https://fanatec.com/media/image/9d/56/e5/Product_Page_top_banner_CSL_P_LC_Rear_angled_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/f7/2b/12/Product_thumbnail_CSL_Pedals_LC_600x600.jpg",
    description:
      "Brake with consistency and confidence with the CSL Pedals Load Cell Kit. You’ll be smashing your personal best laps in no time.",
    features: [
      "Three-pedal set (clutch, brake, throttle)",
      "All-metal construction (excluding pedal faces). Pedals are made from heavy steel, which helps to prevent the set from sliding on the floor (if not hard-mounted to a rig)",
      "Optional anodised aluminium pedal plates ",
      "Contactless Hall sensors (12-bit) on both clutch and throttle for high precision and durability",
      "Clutch pedal spring is stiffer than throttle pedal spring",
      "Pedal position can be adjusted sideways along heel rest"
    ]
  },
  {
    id: uuidv4(),
    name: "CSL Steering Wheel P1 V2",
    class: "CSL",
    category: "Steering Wheels",
    price: 19300,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/99/29/72/Product_Page_top_banner_CSL_SW_P1_V2_R_Front_1280x1280.jpg",
      "https://fanatec.com/media/image/b4/12/0b/Product_Page_top_banner_CSL_SW_P1_V2_R_Front_angled_1280x1280.jpg",
      "https://fanatec.com/media/image/c8/3b/f1/Product_Page_top_banner_CSL_SW_P1_V2_R_Rear_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/2e/42/91/Product_thumbnail_CSL_SW_P1_V2_R_absolutely_600x600.jpg",
    description:
      "With the CSL Steering Wheel P1 V2, we’ve made a fully featured wheel at the lowest price that doesn’t compromise on performance. It is an ideal starter wheel for the CSL DD.",
    features: [
      "Realistic size, suitable for many driving styles (300 mm)",
      "Rubberised wheel rim with improved ergonomics",
      "Integrated RevStripe™, which is a combined centre stripe and an engine RPM indicator, using a multi-colour LED",
      "Three-digit LED display smoothly integrated into the wheel rim below the RevStripe™ allows telemetry data such as speed or gears to be displayed in compatible games or third-party software",
      "Metal shifter paddles, snap-dome-activated “click” feeling"
    ]
  },
  {
    id: uuidv4(),
    name: "Podium Steering Wheel BMW M4 GT3",
    class: "Podium",
    category: "Steering Wheels",
    price: 240300,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/9c/70/21/Product_Page_top_banner_Podium_SW_BMW_M4_GT3_Front_1280x1280.jpg",
      "https://fanatec.com/media/image/03/e6/11/Product_Page_top_banner_Podium_SW_BMW_M4_GT3_Front_angled_1280x1280.jpg",
      "https://fanatec.com/media/image/71/a4/96/Product_Page_top_banner_P_SW_BMW_M4_GT3_QR2_PRO_Rear_angled_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/45/62/6b/Product_thumbnail_Podium_SW_M4_GT3_absolutely_600x600.jpg",
    description:
      "Developed together with BMW M Motorsport, the Podium Steering Wheel BMW M4 GT3 is the actual wheel made for the 2022 BMW M4 GT3 race car.",
    features: [
      "Official BMW M Motorsport product",
      "Lightweight, multi-layer (8 layers) full carbon fibre body",
      "Homologated for GT3 racing (meets FIA standards)",
      "Forged carbon means every wheel has a unique surface finish",
      "Communicates with 2022 BMW M4 GT3 via CAN bus"
    ]
  },
  {
    id: uuidv4(),
    name: "Podium Steering Wheel Monte Carlo Rally",
    class: "Podium",
    category: "Steering Wheels",
    price: 112200,
    availability: "Pre-Order",
    image: [
      "https://fanatec.com/media/image/77/a9/c7/Product_Page_top_banner_Podium_SW_Rally_Monte_Carlo_1_1280x1280.jpg",
      "https://fanatec.com/media/image/38/ca/4e/Product_Page_top_banner_Podium_SW_Rally_Monte_Carlo_2_1280x1280.jpg",
      "https://fanatec.com/media/image/4e/f8/32/Product_Page_top_banner_Podium_SW_Rally_Monte_Carlo_3_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/5c/d3/0c/Product_thumbnail_Podium_Button_Module_Rally_Sparco_Rim_600x600.jpg",
    description:
      "The genuine Sparco R383 and Podium Button Module Rally used in the 2022 and 2023 Ford Puma Hybrid Rally1 WRC car is the ultimate way to immerse yourself in rally simulations. This special modular Steering Wheel celebrates Sébastien Loeb’s remarkable victory at the 2022 Monte Carlo Rally with M-Sport using this hardware.",
    features: [
      "Original SPARCO R383 wheel rim",
      "QR2 Pro Wheel-Side",
      "Podium Button Module Rally",
      "Official M-Sport World Rally Team product",
      "Designed for the 2022 and 2023 Ford Puma Hybrid Rally1 WRC cars"
    ]
  },
  {
    id: uuidv4(),
    name: "Podium Steering Wheel Fanatec GT World Challenge",
    class: "Podium",
    category: "Steering Wheels",
    price: 97700,
    availability: "Pre-Order",
    image: [
      "https://fanatec.com/media/image/6b/6f/6b/Product_Page_top_banner_Podium_SW_320_PBME_PAPM_Front_1280x1280.jpg",
      "https://fanatec.com/media/image/57/e6/62/Product_Page_top_banner_Podium_SW_320_PBME_PAPM_Front_angled_1280x1280.jpg",
      "https://fanatec.com/media/image/01/ab/6d/Product_Page_top_banner_Podium_SW_320_PBME_PAPM_Rear_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/7a/6d/18/Product_thumbnail_Podium_SW_320_PBME_PAPM_absolutely_600x600.jpg",
    description:
      "Modular components from the Podium range come together to create a high-performance steering wheel, as seen in the 2021 Fanatec Esports GT Pro Series.",
    features: [
      "Three-spoke aluminium wheel rim with a 320 mm diameter",
      "Genuine smooth leather",
      "Light grey centre stripe",
      "Light grey stitching",
      "Real carbon fibre front plate and internal metal reinforcements for maximum stability"
    ]
  },
  {
    id: uuidv4(),
    name: "ClubSport Steering Wheel Formula V2.5 X",
    class: "ClubSport",
    category: "Steering Wheels",
    price: 64100,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/df/ce/de/Product_Page_top_banner_CS_Formula_V2-5X_1280x1280.jpg",
      "https://fanatec.com/media/image/fa/e1/bc/Product_Page_top_banner_CS_Formula_V2-5X_Rear_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/c8/f6/4c/Product_thumbnail_CS_Formula_V2-5X_wheels_absolutely_600x600.jpg",
    description:
      "Officially licensed for Xbox, the ClubSport Steering Wheel Formula V2.5 X is the perfect size and shape for all formula-style and single-seater race cars.",
    features: [
      "Officially licensed for Xbox One® and Xbox Series X|S ",
      "Formula-style steering wheel with a compact diameter of 270 mm for fast movements and reactions",
      "Durable construction made of metal and carbon fibre",
      "5 mm solid carbon fibre front plate. Carbon fibre plate is constructed of approx. 30 layers of unidirectional carbon cloth",
      "Genuine Alcantara® grips"
    ]
  },
  {
    id: uuidv4(),
    name: "ClubSport Steering Wheel Formula V2.5",
    class: "ClubSport",
    category: "Steering Wheels",
    price: 62500,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/ca/4c/f4/Product_Page_top_banner_CS_SW_Formula_V2-5_1280x1280.jpg",
      "https://fanatec.com/media/image/3f/c2/69/Product_Page_top_banner_CS_SW_Formula_V2-5_Rear_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/f6/e0/0f/Product_thumbnail_CS_SW_Formula_V2-5_absolutely_600x600.jpg",
    description:
      "The ClubSport Steering Wheel Formula V2.5 is the perfect size and shape for all formula-style and single-seater race cars.",
    features: [
      "Formula-style steering wheel with a compact diameter of 270 mm for fast movements and reactions",
      "Grips made of genuine smooth leather, perforated for improved breathability",
      "Durable construction made of metal and carbon fibre",
      "5 mm solid carbon fibre front plate. Carbon fibre plate is constructed of approx. 30 layers of unidirectional carbon cloth",
      "ClubSport Magnetic Paddle Module pre-installed"
    ]
  },
  {
    id: uuidv4(),
    name: "ClubSport Steering Wheel BMW GT2 V2",
    class: "ClubSport",
    category: "Steering Wheels",
    price: 48100,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/96/0c/36/Product_Page_top_banner_CS_SW_BMW_GT2_V2_Front_1280x1280.jpg",
      "https://fanatec.com/media/image/a2/b4/5e/Product_Page_top_banner_CS_SW_BMW_GT2_V2_Rear_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/ed/b4/b7/Product_thumbnail_CS_SW_BMW_GT2_V2_absolutely_600x600.jpg",
    description:
      "This is a precise replica of the BMW M3 GT2 race car steering wheel, with identical dimensions and materials. One of our most popular all-rounders has received some major upgrades.",
    features: [
      "Officially licensed by BMW",
      "Replica of a steering wheel used in BMW touring cars. The realistic diameter of 320 mm allows for precision driving",
      "Completely revised internal structure increases strength while also reducing weight (30% lighter than the previous model). This translates to increased acceleration and force feedback fidelity from your wheel base",
      "Wheel rim wrapped in genuine Italian-made Alcantara®. This material is easy to clean and provides sensational grip"
    ]
  },
  {
    id: uuidv4(),
    name: "ClubSport Steering Wheel F1® Esports V2",
    class: "ClubSport",
    category: "Steering Wheels",
    price: 35300,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/36/9d/10/Product_Page_top_banner_CS_SW_F1_Esp_V2_1280x1280.jpg",
      "https://fanatec.com/media/image/06/36/23/Product_Page_top_banner_CS_SW_F1_Esp_V2_Rear_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/a7/7f/ab/Product_thumbnail_CS_SW_F1_Esports_V2_600x600.jpg",
    description:
      "Celebrating our partnership with Formula 1™ as official provider of the F1® Esports Series, the ClubSport Steering Wheel F1® Esports V2 is designed for driving Formula 1 cars at the limit. The V2 comes with magnetic shifters, customisable RGB LEDs, revised electronics, and an exchangeable quick release.",
    features: [
      "Officially licensed by Formula 1™",
      "Replica of a steering wheel as used in formula cars. The compact diameter of 270 mm allows fast movements and reactions",
      "Durable metal construction",
      "Genuine Alcantara® grips"
    ]
  },
  {
    id: uuidv4(),
    name: "CSL Elite Steering Wheel McLaren GT3 V2",
    class: "CSL",
    category: "Steering Wheels",
    price: 32100,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/78/24/b1/Product_Page_top_banner_McLaren_GT3_V2_1280x1280.jpg",
      "https://fanatec.com/media/image/7c/08/1a/Product_Page_top_banner_McLaren_GT3_V2_stickers_no_caps_1280x1280.jpg",
      "https://fanatec.com/media/image/31/aa/33/Product_Page_top_banner_McLaren_GT3_V2_Rear_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/08/9a/77/Product_thumbnail_MCLaren_GT3_V2_absolutely_600x600.jpg",
    description:
      "Officially licensed by McLaren Automotive Limited, this is a full-size, detailed reproduction of the steering wheel used in McLaren GT3 race cars. The overall shape, as well as the size of the switches, paddles, and dials is based on original McLaren CAD data.",
    features: [
      "Full-scale replica of a McLaren GT3 Steering Wheel",
      "Officially licensed by McLaren Automotive Limited",
      "Officially licensed for Xbox One® and Xbox Series X|S ",
      "Clutch bite-point system can be used in any game with analogue clutch input"
    ]
  },
  {
    id: uuidv4(),
    name: "Podium Steering Wheel Classic 2",
    class: "Podium",
    category: "Steering Wheels",
    price: 37900,
    availability: "Pre-Order",
    image: [
      "https://fanatec.com/media/image/0e/06/21/PSW_RCLASSIC2_top_image_1_1280x1280.jpg",
      "https://fanatec.com/media/image/c5/18/37/PSW_RCLASSIC2_top_image_2_1280x1280.jpg",
      "https://fanatec.com/media/image/69/b1/6b/P-HUB-4_1280x1280_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/db/75/4e/PSW_RCLASSIC2_preview_600x600.jpg",
    description:
      "Perfect for vintage road cars and historic racing cars. The thin, large diameter rim creates an authentic feeling of driving a classic car.",
    features: [
      "Three-spoke aluminium wheel rim with a 35 cm diameter",
      "Polished, anodised silver finish",
      "Black ‘F’ signet in centre of silver metal hub cover",
      "Genuine leather (smooth)"
    ]
  },
  {
    id: uuidv4(),
    name: "CSL Steering Wheel GT Alcantara V2",
    class: "CSL",
    category: "Steering Wheels",
    price: 25800,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/d8/e3/10/Product_Page_top_banner_CSL_UH_V2_GT_AlcantarasPS10BReJeMOw_1280x1280.jpg",
      "https://fanatec.com/media/image/bd/1a/0a/_Product_Page_top_banner_CSL_UH_V2_Rear_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/2d/4a/cf/Product_thumbnail_CS_SW_GT_Alcantara_CSL_UH_V2_600x600.jpg",
    description:
      "A variation on the popular ClubSport Wheel Rim GT, using genuine Alcantara®. The striking lime green accents add a splash of colour to any simulator setup.",
    features: [
      "Three-spoke aluminium wheel rim with a 330 mm diameter",
      "Genuine Alcantara® grip",
      "Genuine leather lime green centre stripe",
      "Lime green cross stitching"
    ]
  },
  {
    id: uuidv4(),
    name: "Podium Steering Wheel R300",
    class: "Podium",
    category: "Steering Wheels",
    price: 80100,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/2e/cf/30/Product_Page_top_banner_Podium_W_R300_1280x1280.jpg",
      "https://fanatec.com/media/image/2e/2d/f9/Product_Page_top_banner_Podium_W_R300_Rear_1280x1280.jpg",
      "https://fanatec.com/media/image/ce/e7/d6/Product_Page_top_banner_Podium_W_R300_Front_angled_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/18/70/b2/Product_thumbnail_Podium_RW_R300_absolutely_600x600.jpg",
    description:
      "Podium Steering Wheel R300 is a high-end, multi-purpose wheel. This product combines the Podium Wheel Rim R300, Podium Hub, Podium Advanced Paddle Module, and ClubSport Button Cluster Pack.",
    features: [
      "Podium Wheel Rim R300",
      "Podium Advanced Paddle Module (4 magnetic paddles + 2 analog paddles)",
      "Podium Hub",
      "Modular design"
    ]
  },
  {
    id: uuidv4(),
    name: "ClubSport Steering Wheel GT V2",
    class: "ClubSport",
    category: "Steering Wheels",
    price: 60900,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/3a/b7/43/Product_Page_top_banner_CS_SW_GT_V2_1280x1280.jpg",
      "https://fanatec.com/media/image/cb/28/e7/Product_Page_top_banner_CS_UH_V2_Rear_1280x1280.jpg",
      "https://fanatec.com/media/image/04/f9/fd/Product_Page_top_banner_CS_UH_V2_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/27/a1/71/Product_thumbnail_CS_SW_GT_V2_absolutely_600x600.jpg",
    description:
      "Many supercars of the GT series use a very similar steering wheel. It's just the right size and has incredible grip.",
    features: [
      "Aluminium wheel rim with a diameter of 330 mm",
      "Genuine leather (suede)",
      "Fully assembled and pre-configured to mount the Fanatec Wheel Rim GT (or similar)",
      "Improved electronics means hub is firmware-updatable"
    ]
  },
  {
    id: uuidv4(),
    name: "Podium Steering Wheel NASCAR",
    class: "Podium",
    category: "Steering Wheels",
    price: 50600,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/3c/79/6a/P_SW_RNASCAR_top_image_1_1280x1280.jpg",
      "https://fanatec.com/media/image/ed/ee/1e/P_SW_RNASCAR_top_image_2_1280x1280.jpg",
      "https://fanatec.com/media/image/1f/38/b3/P_SW_RNASCAR_top_image_3_1280x1280.jpg",
      "https://fanatec.com/media/image/38/b4/4a/P_SW_RNASCAR_top_image_4_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/86/27/5b/Product_thumbnail_Podium_NASCAR_absolutely_600x600.jpg",
    description:
      "Drivers, start your engines! Grab the officially licensed NASCAR steering wheel for the most realistic oval racing experience.",
    features: [
      "Officially licensed NASCAR product",
      "Three-spoke aluminium wheel rim with a 35 cm diameter",
      "Genuine Alcantara© grip",
      "Genuine Alcantara© hub cover with embroidered NASCAR logo"
    ]
  },
  {
    id: uuidv4(),
    name: "ClubSport Steering Wheel RS",
    class: "ClubSport",
    category: "Steering Wheels",
    price: 48100,
    availability: "Pre-Order",
    image: [
      "https://fanatec.com/media/image/a1/8a/f7/Product_Page_top_banner_CS_SW_RS_Front_1280x1280.jpg",
      "https://fanatec.com/media/image/c1/7c/0e/Product_Page_top_banner_CS_SW_RS_Rear_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/e8/6f/0d/Product_thumbnail_CS_SW_RS_absolutely_600x600.jpg",
    description:
      "Authentic materials and a stunning design means you'll feel like you're sitting in a real car.",
    features: [
      "Realistic 320 mm diameter allows for precision and smooth driving",
      "Durable construction made of metal and carbon fibre",
      "Wheel rim wrapped in genuine, automotive-grade leather",
      "Improved grip shape for increased comfort"
    ]
  },
  {
    id: uuidv4(),
    name: "ClubSport Steering Wheel Round 1 V2",
    class: "ClubSport",
    category: "Steering Wheels",
    price: 48100,
    availability: "Pre-Order",
    image: [
      "https://fanatec.com/media/image/ea/c4/84/Product_Page_top_banner_CS_SW_Round_1_V2_1280x1280.jpg",
      "https://fanatec.com/media/image/cb/28/e7/Product_Page_top_banner_CS_UH_V2_Rear_1280x1280.jpg",
      "https://fanatec.com/media/image/04/f9/fd/Product_Page_top_banner_CS_UH_V2_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/70/f6/e1/Product_thumbnail_CS_SW_Round_1_V2_absolutely_600x600.jpg",
    description:
      "Inspired by a steering wheel used in Formula 1 cars of the 1980's, the compact size is great for fast movements, and the round shape and smooth leather also allows you to rapidly spin the wheel.",
    features: [
      "​Aluminium wheel rim with a diameter of 270 mm",
      "Genuine leather (smooth)",
      "Can be used with all Fanatec wheel rims and all third-party rims using the 6 x 70 mm or 3 x 50 mm bolt pattern (e.g. Sparco, MOMO, OMP)",
      "Fully assembled and pre-configured to mount the Fanatec Wheel Rim GT (or similar)"
    ]
  },
  {
    id: uuidv4(),
    name: "ClubSport Handbrake V1.5",
    class: "ClubSport",
    category: "Shifters/Others",
    price: 21000,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/38/cb/94/CS-HB-V1-3_1280x1280.jpg",
      "https://fanatec.com/media/image/dc/c5/98/CS-HB-V1-4_1280x1280.jpg",
      "https://fanatec.com/media/image/21/6b/49/CS-HB-V1_1280x1280.jpg",
      "https://fanatec.com/media/image/2a/a9/0b/CS-HB-V1-1_1280x1280.jpg",
      "https://fanatec.com/media/image/9a/4f/92/CS-HB-V1-2_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/d5/af/65/CS-HB-V1-5-1280x1280_600x600.jpg",
    description:
      "Slide through the corners with the help of the ClubSport Handbrake V1.5​, and perform perfect drifts in rallye and drift simulations.",
    features: [
      "Analog sensor for precise input",
      "Adjustable handle height for comfort",
      "Solid metal construction for durability",
      "Realistic handbrake feel for rally and drifting",
      "Compatible with all major racing games"
    ]
  },
  {
    id: uuidv4(),
    name: "ClubSport Shifter SQ V1.5",
    class: "ClubSport",
    category: "Shifters/Others",
    price: 41700,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/79/3d/05/CSS-SQ-V1-1_1280x1280.jpg",
      "https://fanatec.com/media/image/ac/68/0a/CSS-SQ-V1-3_1280x1280.jpg",
      "https://fanatec.com/media/image/32/53/23/CSS-SQ-V1-4_1280x1280.jpg",
      "https://fanatec.com/media/image/39/aa/fa/CSS-SQ-V1-6_1280x1280.jpg",
      "https://fanatec.com/media/image/bf/e7/c5/CSS-SQ-V1-8_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/90/a7/fa/CSS-SQ-V1-5-1280x1280_600x600.jpg",
    description:
      "The ClubSport Shifter SQ V1.5 offers both H-pattern and sequential shifting modes for a versatile racing experience. It features high-quality construction, adjustable resistance, and compatibility with most wheel bases.",
    features: [
      "H-pattern and sequential shifting modes",
      "High-quality construction for durability",
      "Adjustable resistance for a customized feel",
      "Compatible with most wheel bases",
      "Realistic shifting feel for immersive racing",
      "Easy installation and setup"
    ]
  },
  {
    id: uuidv4(),
    name: "Podium Button Module Rally",
    class: "Podium",
    category: "Shifters/Others",
    price: 40100,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/64/d8/9d/Product_Page_top_banner_Podium_Button_Module_Rally_2rjRGm2YU40jbR_1280x1280.jpg",
      "https://fanatec.com/media/image/6e/73/7e/Product_Page_top_banner_Podium_Button_Module_Rally_1gKKOEkETr0ekF_1280x1280.jpg",
      "https://fanatec.com/media/image/12/84/ef/Product_Page_top_banner_Podium_Button_Module_Rally_3mkGhX2Bcz00id_1280x1280.jpg",
      "https://fanatec.com/media/image/15/d0/f0/Product_Page_top_banner_Podium_Button_Module_Rally_5PgCYh0HNG5JLM_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/a8/d6/cc/Product_thumbnail_Podium_Button_Module_RallyYEcCAMvtZ8NQO_600x600.jpg",
    description:
      "Designed in collaboration with the M-⁠Sport World Rally Team, the Podium Button Module Rally is a feature-packed device used in the 2022 and 2023 Ford Puma Hybrid Rally1 WRC car.This module assisted nine-time world champion Sébastien Loeb to victory at the 2022 Monte Carlo Rally. 2019 World Champion Ott Tänak went on to win the 2023 Rally Sweden and Rally Chile.",
    features: [
      "Official M-Sport World Rally Team product",
      "Designed for the 2022 and 2023 Ford Puma Hybrid Rally1 WRC cars",
      "Two D-pads placed in the primary position (nearest the thumbs), activation force optimised for quick and reliable access to multiple functions"
    ]
  },
  {
    id: uuidv4(),
    name: "Podium Button Module Endurance",
    class: "Podium",
    category: "Shifters/Others",
    price: 32100,
    availability: "In Stock",
    image: ["https://fanatec.com/media/image/e0/a0/d9/PBME_HQ2_1280x1280.jpg"],
    thumbnail:
      "https://fanatec.com/media/image/fe/a2/26/PBME_preview_600x600.jpg",
    description:
      "Designed for both the Podium Hub and ClubSport Universal Hub for Xbox One, the Podium Button Module Endurance offers motorsport-inspired aesthetics and features.",
    features: [
      "Upgrade module for Podium Hub and ClubSport Universal Hub for Xbox One (with included adaptor)",
      "Real carbon fibre front plate and internal metal reinforcements for maximum stability",
      "Full-scale replica to class-leading endurance GT3 racing car"
    ]
  },
  {
    id: uuidv4(),
    name: "Podium Advanced Paddle Module",
    class: "Podium",
    category: "Shifters/Others",
    price: 29000,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/de/58/fb/Product_Page_top_banner_P_APM_Large_Paddlest2xDpJoSSBxLe_1280x1280.jpg",
      "https://fanatec.com/media/image/e5/19/dd/Product_Page_top_banner_P_APM_Small_PaddlesAQBcAobvfvMLO_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/99/f1/95/P_APM_thumbnail_600x600.jpg",
    description:
      "Featuring magnetic shifters and Hall sensors, the Podium Advanced Paddle Module is the ultimate upgrade for your Fanatec steering wheel.",
    features: [
      "Upgrades your Podium Hub / ClubSport Universal Hub V2 (full compatibility list below)",
      "Upgrades Fanatec steering wheels like the ClubSport Formula V2 (full compatibility list below)",
      "High-precision contactless hall sensor with unlimited lifetime"
    ]
  },
  {
    id: uuidv4(),
    name: "ClubSport Pedals V3 Damper Kit",
    class: "ClubSport",
    category: "Accessories",
    price: 12900,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/41/f6/e3/CSP-V3-DK-5wqIsjrIP2o4Zt_1280x1280.jpg",
      "https://fanatec.com/media/image/5f/e8/da/CSP-V3-DK-14mOZ31I2NR5lp_1280x1280.jpg",
      "https://fanatec.com/media/image/2b/dd/97/CSP-V3-DK-3zeRelCL4CrW3P_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/9f/66/41/CS-DamperKit_01-1000x666-1_600x600.png",
    description:
      "The hydraulic damper in addition of the pressure sensitive load cell gives you the familiar feeling of a hydraulic brake",
    features: [
      "​Can be used on the gas or brake pedal of the ClubSport Pedals V3",
      "​Can be used on the gas pedal of the ClubSport Pedals V3 inverted",
      "Provides the feeling of a hydraulic brake"
    ]
  },
  {
    id: uuidv4(),
    name: "CSL Pedals Tuning Kit",
    class: "CSL",
    category: "Accessories",
    price: 5600,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/5c/ba/3a/Product_Page_top_banner_CSL_P_TK_plates_1280x1280.jpg",
      "https://fanatec.com/media/image/98/57/33/Product_Page_top_banner_CSL_P_TK_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/8d/e4/b5/Product_thumbnail_CSL_P_TK_plates_600x600.jpg",
    description:
      "Upgrade the appearance and feel of your CSL Pedals with anodised aluminium pedal plates.",
    features: [
      "Designed specifically for the CSL Pedals, including Clutch Kit and Load Cell Kit",
      "White polymer backing plate supports the curved front plate and creates a durable ‘F’ signet",
      "Throttle face is extended for more comfortable heel-and-toe"
    ]
  },
  {
    id: uuidv4(),
    name: "ClubSport Pedals V3 Brake Performance Kit",
    class: "ClubSport",
    category: "Accessories",
    price: 3200,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/6b/1c/ab/CSP-V3-BPK-03ICjBPOI8tIIQI_1280x1280.jpg",
      "https://fanatec.com/media/image/2d/87/1d/CSP-V3-BPK-04_1280x1280.jpg",
      "https://fanatec.com/media/image/g0/ff/55/CSP-V3-BPK-02_1280x1280.jpg",
      "https://fanatec.com/media/image/91/a7/c5/CSP-V3-BPK-01_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/3b/e8/84/CSP-V3-BPK-Big_01-1000x666_600x600.png",
    description:
      "The human body memorizes muscle tension much better than foot position. This is why all car brakes measure the pressure and not the travel. Race and F1 cars have almost no travel at all.",
    features: [
      "Can be used on the brake pedal of the ClubSport Pedals V3 (inverted)",
      "Provides a realistic brake point pressure feeling like in a real race car",
      "Adjustable in pedal travel and resistance by mixing and matching the various hardness and diameter of the Elastomer springs together with the PU foam",
      "Easy to lubricate and super durable with well over 1 Million cycles"
    ]
  },
  {
    id: uuidv4(),
    name: "Podium Mounting Brackets",
    class: "Podium",
    category: "Accessories",
    price: 40100,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/0c/65/99/P-MB-2_1280x1280.jpg",
      "https://fanatec.com/media/image/82/63/b0/P-MB-6_1280x1280.jpg",
      "https://fanatec.com/media/image/ab/eb/09/P-MB-5_1280x1280.jpg",
      "https://fanatec.com/media/image/f4/fe/8e/P-MB-7_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/8c/09/27/P_MB_Big_01_600x600.jpg",
    description:
      "Securely mount your Podium Series wheel base to your rig using these ultra-strong, side-mounted brackets.",
    features: [
      "Side-mounted brackets made from solid aluminium",
      "Anodised gold finish",
      "Side mounting improves leg clearance and is optimal for bracing against the high steering torque of the Podium Series wheel bases",
      "Width adjustment for aluminium profile upright compatibility"
    ]
  },
  {
    id: uuidv4(),
    name: "Podium Kill Switch",
    class: "Podium",
    category: "Accessories",
    price: 16100,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/b8/78/3c/Product_Page_top_banner_ESTOP_Prime_1280x1280.jpg",
      "https://fanatec.com/media/image/93/5e/4b/Product_Page_top_banner_ESTOP_Front_1280x1280.jpg",
      "https://fanatec.com/media/image/41/b0/35/Product_Page_top_banner_ESTOP_Side_1_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/28/b3/24/KS_preview_600x600.jpg",
    description:
      "The Podium Kill Switch is designed for use with all Podium Series Direct Drive wheel bases.",
    features: [
      "Brushed aluminium Emergency Stop button instantly cuts power to any connected Podium Series wheel base",
      "Dedicated power button to remotely turn on (and turn off) the wheel base",
      "2 metre cable for ease of positioning on a sim rig",
      "Threaded mounting holes on upper, left, and right sides allow for flexible installation"
    ]
  },
  {
    id: uuidv4(),
    name: "QR1 Wheel-Side",
    class: "QR",
    category: "Accessories",
    price: 8100,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/6b/a1/a2/CS-QRA-BLK_06_1280x1280.jpg",
      "https://fanatec.com/media/image/3e/64/b9/CS-QRA-BLK_05_1280x1280.jpg",
      "https://fanatec.com/media/image/ae/7a/46/CS-QRA-BLK_04_1280x1280.jpg",
      "https://fanatec.com/media/image/d4/b9/82/CS-QRA-BLK_02_1280x1280.jpg "
    ],
    thumbnail:
      "https://fanatec.com/media/image/bd/c4/00/CS-QRA-BLK-1280x1280_600x600.jpg",
    description:
      "Acquire automotive-grade performance for your compatible Fanatec Steering Wheel with the QR1 Wheel-Side (formerly named ClubSport Quick Release Adapter).",
    features: [
      "Automotive-grade QR1 quick release mechanism",
      "Upgrades QR1 Lite Wheel-Side (Simplified Quick Release Adapter), allows High-Torque Mode on Podium Wheel Bases on supported Steering Wheels",
      "Full aluminium body"
    ]
  },
  {
    id: uuidv4(),
    name: "QR2 Wheel-Side",
    class: "QR",
    category: "Accessories",
    price: 15800,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/b7/30/1c/banner_QR2_WS_Regular_Front_angled_1280x1280.jpg",
      "https://fanatec.com/media/image/1f/32/40/banner_QR2_WS_Regular_Rear_angled_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/e5/dc/1b/thumbnail_QR2_WS_Regular_600x600.jpg",
    description:
      "The QR2 Wheel-Side features an all-aluminium construction that is robust and durable. The all-new mechanical design of QR2 delivers rock-solid performance at the highest level.",
    features: [
      "Motorsport-derived quick release (wheel-side)",
      "Diecast aluminium with CNC-machined and black anodised finish",
      "QR2 design",
      "Spring-loaded locking pin mechanism is far stronger and more secure than QR1"
    ]
  },
  {
    id: uuidv4(),
    name: "QR2 Pro Wheel-Side",
    class: "QR",
    category: "Accessories",
    price: 31600,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/6a/17/49/Product_Page_top_banner_QR2_WS_PRO_Front_angledInwKOdC2JBAvW_1280x1280.jpg",
      "https://fanatec.com/media/image/61/4c/49/Product_Page_top_banner_QR2_WS_PRO_Rear_angled_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/e6/07/5a/Product_thumbnail_QR2_WS_PROQvLhiChKsLt1h_600x600.jpg",
    description:
      "The QR2 Pro Wheel-Side is the first quick release designed for both real and virtual racing applications. It features fully CNC-machined parts from billet aluminium, developed to meet real-world motorsport requirements.",
    features: [
      "Meets FIA standards",
      "Built for both real-world motorsport and sim racing",
      "CNC-machined from aviation-grade billet aluminium",
      "Spring-loaded locking pin mechanism is far stronger and more secure than QR1"
    ]
  },
  {
    id: uuidv4(),
    name: "Podium Hub",
    class: "Podium",
    category: "Accessories",
    price: 32100,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/76/99/3c/P-HUB-4_1280x1280.jpg",
      "https://fanatec.com/media/image/81/38/44/P-HUB-1_1280x1280.jpg",
      "https://fanatec.com/media/image/c4/38/06/P-HUB-2l_1280x1280.jpg",
      "https://fanatec.com/media/image/18/61/57/P-HUB-5_1280x1280.jpg",
      "https://fanatec.com/media/image/55/e6/9a/P-HUB-7_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/16/e5/03/P_HUB_CSQRA_large_1-1000x666-1_600x600.png",
    description:
      "The Podium Hub is the premium core component for the Fanatec® modular steering wheel system.",
    features: [
      "Gold anodised aluminium monocoque ",
      "Ultra sturdy and lightweight space frame design",
      "Two connectors for the Podium Advanced Paddle Module (4 buttons + 2 analogue axes)",
      "Supports interchangeable Quick Release"
    ]
  },
  {
    id: uuidv4(),
    name: "ClubSport Shifter Carbon Knobs Kit",
    class: "ClubSport",
    category: "Accessories",
    price: 12900,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/a3/a6/d1/CS_CKK_top_image_1_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/cb/15/47/knobs_preview_600x600.jpg",
    description:
      "Add matte carbon gear knobs to your ClubSport Shifter SQ for that high-performance racing aesthetic.",
    features: [
      "Matte carbon fibre shifter knobs",
      "Weighted metal cores",
      "Round knob: 220 g",
      "SQ knob: 141 g"
    ]
  },
  {
    id: uuidv4(),
    name: "ClubSport Shifter Table Clamp",
    class: "ClubSport",
    category: "Accessories",
    price: 6500,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/ce/39/23/CSS-TC-01Q21t06A3GNKJh_1280x1280.jpg",
      "https://fanatec.com/media/image/2c/0b/00/CSS-TC-2_1280x1280.jpg",
      "https://fanatec.com/media/image/e2/23/dc/CSS-SQ-V1-9l6l9s6FWE0mZw_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/39/f3/12/TableClamp-CSS_big-1000x666OX91W8v9brLgE_600x600.png",
    description:
      "Add matte carbon gear knobs to your ClubSport Shifter SQ for that high-performance racing aesthetic.",
    features: [
      "Clamping system allows for endless height adjustments when connected to the ClubSport Shifter’s T-slot rails",
      "CSS and CSS SQ can be mounted on either side, right or left and can even be screwed onto the top of the table clamp"
    ]
  },
  {
    id: uuidv4(),
    name: "ClubSport USB Adapter",
    class: "ClubSport",
    category: "Accessories",
    price: 3200,
    availability: "In Stock",
    image: [
      "https://fanatec.com/media/image/da/6a/dd/CS-USB_01ppmxtTCsGNrLi_1280x1280.jpg"
    ],
    thumbnail:
      "https://fanatec.com/media/image/bb/f2/5c/CS-USB-1280x1280_600x600.jpg",
    description:
      "Connect your Fanatec devices via USB to your PC to make it compatible to almost any modern racing simulation.",
    features: [
      "Use your ClubSport Shifter with any steering wheel on PC (supports sequential and H-pattern mode)",
      "Use the ClubSport handbrake without any other Fanatec product with a handbrake connection on PC",
      "Use analogue Fanatec pedals directly on the PC via USB"
    ]
  }
];

const bannerPhotos = [
  "https://fanatec.com/media/image/d3/27/4d/CSL_EP_V2_banner_1920x1920.png",
  "https://fanatec.com/media/image/2c/65/0d/GTWS_banner_1920x1920.png",
  "https://fanatec.com/media/image/fb/f5/15/apparel_en_banner__1920x1920.jpg",
  "https://fanatec.com/media/image/32/7c/9d/CS_DD_banner_en__1920x1920.png",
  "https://fanatec.com/media/image/22/2f/f9/GT_DD_X_banner_EN_1920x1920.jpg",
  "https://fanatec.com/media/image/30/f0/ea/CS_DD_F1_Esports_V2_banner_EN_1920x1920.jpg",
  "https://fanatec.com/media/image/bb/6d/44/CS_DDp_banner_EN_j_1920x1920.jpg",
  "https://fanatec.com/media/image/1b/3c/45/CSL_Cockpit_banner_1920x1920.jpg"
];

const smBannerPhotos = [
  "https://fanatec.com/media/image/6e/56/bd/CSL_EP_V2_mob_1920x1920.png",
  "https://fanatec.com/media/image/8f/8b/4e/GTWS_banner_mob_1920x1920.png",
  "https://fanatec.com/media/image/ea/a9/e3/apparel_en_banner_mob_1920x1920.jpg",
  "https://fanatec.com/media/image/21/d2/4f/CS_DDP_banner_EN_mob_j_1920x1920.jpg",
  "https://fanatec.com/media/image/a5/0c/c8/GT_DD_X_banner_EN_mob_1920x1920.jpg",
  "https://fanatec.com/media/image/7d/0c/21/CS_DD_F1_Esports_V2_banner_mob_1920x1920.jpg",
  "https://fanatec.com/media/image/21/d2/4f/CS_DDP_banner_EN_mob_j_1920x1920.jpg",
  "https://fanatec.com/media/image/3e/34/9c/CSL_Cockpit_banner_mob_1920x1920.jpg"
];

const topSellers = [
  productData[0],
  productData[1],
  productData[2],
  productData[3],
  productData[4],
  productData[5]
];

export { productData, bannerPhotos, smBannerPhotos, topSellers };
