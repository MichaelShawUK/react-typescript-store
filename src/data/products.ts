interface ProductType {
  id: string;
  name: string;
  brand: string;
  category: string;
  colour: string;
  description: string;
  image: string;
  images: string[];
  price: number;
}

const products: ProductType[] = [
  // Mens Adidas
  {
    id: "19569409",
    name: "adidas Runfalcon 3.0 Shoes",
    description:
      "Lace up for a run through the park or a walk to the coffee shop in these versatile adidas running shoes. They feel good from the minute you step in, thanks to the cushy Cloudfoam midsole. The textile upper feels comfy and breathable, and the rubber outsole gives you plenty of grip for a confident stride.Made with a series of recycled materials, this upper features at least 50% recycled content. This product represents just one of our solutions to help end plastic waste.• Regular fit• Lace closure• Textile upper• Cloudfoam midsole",
    price: 50,
    brand: "adidas",
    category: "men",
    colour: "blue",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_ID2286_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_ID2286_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_ID2286_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_ID2286_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_ID2286_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_ID2286_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_ID2286_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "19544097",
    name: "adidas Terrex Speed Flow Trail Running Shoes",
    description:
      "Race steep trails in these adidas trail running shoes. With a lightweight, cushioned midsole for comfort, these shoes feature seamless overlays to provide protection as you navigate slick roots and wet rocks. A Continental™ Rubber outsole provides the traction you need to take on any trail condition, wet or dry.Made with a series of recycled materials, this upper features at least 50% recycled content. This product represents just one of our solutions to help end plastic waste.• Runs small. Order 1 Size larger than your usual size.• Regular fit• Lace closure• Mesh upper with seamless overlays• Abrasion resistant• Lightstrike cushioning",
    price: 110,
    brand: "adidas",
    category: "men",
    colour: "black",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_HR1128_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_HR1128_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_HR1128_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_HR1128_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_HR1128_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_HR1128_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_HR1128_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "16614823",
    name: "adidas Ultraboost 1.0 Shoes",
    description:
      "From a walk in the park to a weekend run with friends, these adidas Ultraboost 1.0 shoes are designed to keep you comfortable. An adidas PRIMEKNIT upper gently hugs your feet while BOOST on the midsole cushions from the first step to the last mile. The Stretchweb outsole flexes naturally for an energised ride, and Continental™ Rubber gives you the traction you need to keep that pep in your step.• Runs small. Order 1 Size larger than your usual size.• Lace closure• adidas PRIMEKNIT textile upper• Fitcounter moulded heel counter• BOOST midsole",
    price: 160,
    brand: "adidas",
    category: "women",
    colour: "grey",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_HQ4200_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_HQ4200_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_HQ4200_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_HQ4200_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_HQ4200_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_HQ4200_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_HQ4200_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "19569417",
    name: "adidas Ultrabounce Shoes",
    description:
      "Ready to ramp up your training? These adidas shoes help you take the next step in your running journey. Lightweight Bounce cushioning provides comfort and flexibility to keep you energised when you add kilometres to your daily run. The long-lasting rubber outsole ensures traction on varied surfaces so you can stride with confidence.• Runs small. Order 1 Size larger than your usual size.• Regular fit• Lace closure• Textile upper• Bounce midsole",
    price: 80,
    brand: "adidas",
    category: "men",
    colour: "green",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_ID2258_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_ID2258_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_ID2258_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_ID2258_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_ID2258_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_ID2258_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_ID2258_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "19565825",
    name: "adidas Stabil Next Gen Shoes",
    description:
      "Dictate play in shoes with a rock-solid reputation. Throughout their distinguished history, adidas Stabil Next Gen shoes have provided a platform to dominate indoor courts. Lightweight and sleek, their knit upper has reinforced sidewalls to add support for sideways movement. Even their energy-returning BOOST midsole is framed in EVA for maximum stability on the deck. Underneath, the grippy outsole has rounded edges for more natural movement.• Runs small. Order 1 Size larger than your usual size.• Regular fit• Lace closure• Knit upper• EVA stabilisation frame• BOOST midsole",
    price: 140,
    brand: "adidas",
    category: "men",
    colour: "blue",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_IG3196_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_IG3196_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_IG3196_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_IG3196_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_IG3196_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_IG3196_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_IG3196_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "18474195",
    name: "adidas TERREX Soulstride Flow Trail Running Shoes",
    description:
      "From door to trail and back, the TERREX SOULSTRIDE FLOW is your partner to collect miles on longer trail adventures. Using a pillow-like cushioning of lightweight EVA, this trail running shoe is designed to keep you moving. A Continental™ Rubber outsole adds exceptional grip across roots, rocks and dirt and the engineered mesh upper provides optimal zoning for breathability, stretch and a snug fit.• Runs small. Order 1 Size larger than your usual size.• Lace closure• Engineered mesh upper with weldings• Gusseted tongue• REPETITOR midsole",
    price: 120,
    brand: "adidas",
    category: "women",
    colour: "black",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_HP5564_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_HP5564_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_HP5564_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_HP5564_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_HP5564_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_HP5564_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_HP5564_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  // Mens Nike
  {
    id: "19523818",
    name: "Nike Air Max 90 Icons",
    description:
      " Lace up and feel the legacy. Produced at the intersection of art, music and culture, this champion running shoe helped define the '90s. Worn by presidents, revolutionised through collabs and celebrated through rare colourways, its striking visuals, Waffle outsole and exposed Nike Air cushioning keep it alive and well.BenefitsThe textile on the upper with leather and synthetic overlays is durable and breathable.Plush and comfortable, the Max Air cushioning has just the right amount of support.The classic construction roots you to the '90s while modern methods of make, materials and colours push every step into the future.Waffle outsole delivers durable traction and heritage style.Product DetailsPadded collarFoam midsoleAir Max 90The '90s were a turning point in culture—art, music, fashion and sneakers. The Air Max was at the forefront of the movement. With even more exposed Air cushioning and a bold new colour affectionately dubbed as &quot;Infrared&quot;, its revolutionised design helped the first 90 take on a life of its own. No longer just a running shoe, it solidified Air Max as a streetwear cornerstone.",
    price: 135,
    brand: "Nike",
    category: "men",
    colour: "grey",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_647015_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_647015_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647015_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647015_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647015_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647015_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647015_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "19523831",
    name: "Nike Air Max Pulse",
    description:
      "Inspired by London's music scene, these men's Air Max Pulse trainers from Nike add an underground edge to your rotation. In a Black and White colourway, these JD-exclusive sneakers have a textile mesh upper with leather and synthetic overlays for support. They have a padded ankle collar and a tonal lace-up closure for custom comfort. Underfoot, the new point-loaded cushioning system distributes weight across the Air unit for max bounce, while the rubber Waffle outsole provides essential street grip. Signed off with classic Swoosh branding to the sidewalls.",
    price: 145,
    brand: "Nike",
    category: "men",
    colour: "white",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_649722_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_649722_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_649722_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_649722_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_649722_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_649722_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_649722_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "19429708",
    name: "Nike Dunk Remastered",
    description:
      "An OG classic gets a bold refresh with these men's Dunk Low Jumbo sneakers from Nike. In a Summit White and Photon Dust colourway, these sneaks are cut from light, breathable mesh with plush leather overlays for durability. They feature a lace fastening to lock you in, with a padded collar for added support. Underfoot, they sit on a cushioned foam midsole that combines with an Air strobel for a smooth ride, with a grippy rubber outsole thst uses pivot circles for total traction. Finished up with bold Nike Swoosh branding.",
    price: 115,
    brand: "Nike",
    category: "men",
    colour: "grey",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_647154_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_647154_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647154_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647154_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647154_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647154_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647154_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "19570552",
    name: "Nike Dunk High PRM",
    description:
      "Go platinum in the streets and celebrate the birth of hip-hop with these men's Dunk Hi PRM sneakers from Nike. In a Smoke Grey, Black and Beach colourway, these sneaks are cut from smooth leather in the upper for a durable feel. They feature a lace fastening to keep you locked in, with a padded collar for added support and breathable perforations for ventilation. Underfoot, they sit on a soft foam midsole for cushioning, with a grippy rubber outsole for firm traction. Finished up with signature Swoosh branding.",
    price: 115,
    brand: "Nike",
    category: "men",
    colour: "grey",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_647157_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_647157_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647157_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647157_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647157_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647157_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647157_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "19569220",
    name: "Nike Air Max 270",
    description:
      "Lace up in a Swoosh classic with these men's Air Max 270 sneakers from Nike. In a Gym Red colourway with Bright Crimson and White accents, these kicks have a stretchy knit upper with no-sew synthetic skin details for added durability. They feature a tonal lace fastening with a snug inner sleeve and a bootie-style design for a secure fit. They sit atop a lightweight midsole with an iconc extra-large Air unit under the heel for maximum comfort, while a tough rubber outsole delivers grippy traction. Finished with signature Nike branding throughout.",
    price: 145,
    brand: "Nike",
    category: "men",
    colour: "red",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_645308_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_645308_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645308_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645308_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645308_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645308_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645308_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "19570533",
    name: "Nike Zegama",
    description:
      "Stay on top on the terrain with these men's Zegama trainers from Nike. In a Spring Green and Olive Flak colourway, these trail runners have a lightweight, breathable and flexible engineered mesh upper, paired with an ankle gaitor synthetic overlays for support and durability. They feature a heel pull and an adjustable lace-up closure for a secure fit. Underfoot, the stacked Nike ZoomX midsole keeps you cushioned for longer, while the diverse lug pattern on the rubber outsole provides standout grip. Finished off with a White Swoosh to the outer wall and Nike Trail branding to the inner.",
    price: 145,
    brand: "Nike",
    category: "men",
    colour: "green",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_647930_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_647930_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647930_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647930_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647930_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647930_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647930_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "19487292",
    name: "Nike Air Max 90 Terrascape",
    description:
      "Nike's iconic silhouette gets a rugged update with these men's Air Max 90 Terrascape sneakers. In an Anthracite and Black colourway, these trainers have breathable mesh and lightweight synthetic overlays to the upper for a trail-inspired look. They feature pull tabs to the tongue and heel for easy access, and are sat above a Crater Foam midsole with visible Max Air cushioning in the heel for an ultra-lightweight step. With a padded ankle collar for custom comfort, they have a translucent Nike Grind rubber outsole that wraps to the mudguard for added durability. Finished off with University Red Swoosh branding to the sidewalls.",
    price: 145,
    brand: "Nike",
    category: "men",
    colour: "grey",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_645509_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_645509_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645509_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645509_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645509_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645509_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645509_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  // Mens Lacoste
  {
    id: "19570507",
    name: "Lacoste Deviation Hybrid",
    description:
      "Refresh your rotation with these men's Deviation Hybrid trainers from Lacoste. In a Navy colourway, these JD-exclusive kicks have a crisp leather upper for lasting wear. With perforated side panels, they feature a tonal lace fastening with plush padding around the ankle collar for a locked-in fit. They sit atop a streamlined cushioned midsole, while a tough rubber outsole keeps you gripped. Signed off with classic Lacoste branding throughout.",
    price: 90,
    brand: "Lacoste",
    category: "men",
    colour: "blue",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_641567_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_641567_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_641567_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_641567_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_641567_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_641567_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_641567_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "19569267",
    name: "Lacoste Carnaby Pro",
    description:
      "Lace up in a clean, classic style with these men's Carnaby Pro trainers from Lacoste. Exclusive to JD, these kicks have a crisp leather upper with breathable, perforated side panels for lasting wear. In a White colourway, they feature a tonal lace fastening with a low-cut ankle collar for a secure feel, and sit atop a streamlined cushioned midsole. With a grippy, gum rubber outsole for essential traction, they're finished with a metallic Gold dubrae hardware and Croc logo to the sidewall. Signed off with luxe Lacoste branding at the heel and tongue.",
    price: 95,
    brand: "Lacoste",
    category: "men",
    colour: "white",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_652411_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_652411_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_652411_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_652411_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_652411_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_652411_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_652411_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "19562313",
    name: "Lacoste Game Advance",
    description:
      "Bring heritage style to the streets with these men's Game Advance sneakers from Lacoste. In a Black colourway, these chunky trainers have a leather and synthetic upper for durable comfort. They feature a padded textile collar and a tonal lace-up closure for a custom fit. Underfoot, the contrasting midsole delivers a cushioned ride, while the rubber outsole adds essential grip. Finished off with signature Lacoste branding, including the classic Crocodile to the sidewalls and heel.",
    price: 120,
    brand: "Lacoste",
    category: "men",
    colour: "black",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_647374_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_647374_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647374_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647374_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647374_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647374_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647374_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "19560894",
    name: "Lacoste Twin Serve",
    description:
      "Lace up in premium heat with these men's Twin Serve from Lacoste. In a Grey colourway, these sneaks are cut from smooth, durble leather for a plush look and feel. They feature a lace fastening to keep you locked in, with a padded collar for added support and breathable perforations for ventilation. Underfoot, they sit on a cushioned midsole for a smooth ride, with a grippy rubber outsole for traction. Finished up with Lacoste Croc branding to the heel and sidewalls.",
    price: 95,
    brand: "Lacoste",
    category: "men",
    colour: "grey",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_647373_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_647373_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647373_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647373_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647373_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647373_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647373_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  // Womens Nike
  {
    id: "19574169",
    name: "Nike Downshifter 12 Women's",
    description:
      "Make every step lightweight with these women's Downshifter 12 from Nike. In a Guava Ice colourway, these runners have a breathable mesh upper, paired with synthetic skin overlays in key areas for added durability. Made from at least 20% recycled content by weight, they feature a stable midfoot band and secure laces to lock you in. Underfoot, the elevated foam midsole provides super-soft cushioning, while the rubber outsole grips every stride for lasting traction. Finished off with Rush Fuchsia Swoosh branding to the sidewalls.",
    price: 65,
    brand: "Nike",
    category: "women",
    colour: "orange",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_668016_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_668016_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_668016_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_668016_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_668016_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_668016_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_668016_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "19496081",
    name: "Nike Zoom Bella 6 Women's",
    description:
      "Hit those goals in style with these women's Zoom Bella 6 sneakers from Nike. In a Sail, Coral Chalk and Sanddrift colourway, these sneaks are cut from light, breathable mesh with synthetic overlays for a durable wear. They feature a lace fastening to lock you in, with a padded collar for added support and a midfoot panel for structure and stability. Underfoot, they sit on a combo of foam and a Zoom Air unit for cushioning, while the grippy rubber outsole brings total traction. Finished up with signature Swoosh branding.",
    price: 80,
    brand: "Nike",
    category: "women",
    colour: "white",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_644868_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_644868_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_644868_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_644868_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_644868_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_644868_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_644868_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "16871220",
    name: "Nike Metcon 8 Women's",
    description:
      "Get your goals with these women's Metcon 8 trainers from Nike. In a Barely Rose colourway, these fitness kicks have a lightweight and breathable mesh upper to keep your feet cool as you train. They feature a lace fastening with a hook-and-loop closure and a low-cut padded ankle collar snug, locked in fit. Underfoot is a Nike React foam midsole for an ultra-responsive ride and a wide, flat rubber outsole for traction. With a handstand clip at the heel to reduce drag during exercises using a wall, they're finished with the Swoosh to the sidewalls.",
    price: 125,
    brand: "Nike",
    category: "women",
    colour: "pink",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_597699_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_597699_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_597699_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_597699_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_597699_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_597699_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_597699_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "19556036",
    name: "Nike Air Force 1 Low Women's",
    description:
      "Lace up in these women's Air Force 1 Low trainers from Nike. In a Cobalt Bliss and Summit White colourway, these hoops-inspired kicks have a tumbled leather upper with glossy patent overlays for added support. They feature a secure lace fastening with padding around the ankle collar for a secure fit, and sit atop a chunky midsole with Air cushioning underfoot for supreme comfort. With a tough rubber outsole for grippy traction, they're finished with Nike's iconic Swoosh logo to the sidewalls. Signed off with Nike branding throughout.",
    price: 110,
    brand: "Nike",
    category: "women",
    colour: "blue",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_645177_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_645177_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645177_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645177_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645177_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645177_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645177_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  // Womens Adidas Originals
  {
    id: "19553476",
    name: "adidas Originals Gazelle Women's",
    description:
      "Level up your rotation with these women's Gazelle trainers from adidas Originals. In a Halo Blush colourway, these treads bring back the 1991 OG, with a soft suede upper signature T-toe patch. They feature a secure lace fastening with a low-cut ankle collar for a secure fit, and sit atop a streamlined, low-profile midsole with lightweight cushioning for all-day comfort. With a tough rubber outsole for grippy traction, they're finished with adidas' signature 3-Stripes to the sidewalls and a Gazelle wordmark. Signed off with the iconic Trefoil logo throughout. | ID7006",
    price: 85,
    brand: "adidas Originals",
    category: "women",
    colour: "white",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_660210_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_660210_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_660210_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_660210_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_660210_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_660210_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_660210_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "19565893",
    name: "adidas Originals Stan Smith Women's",
    description:
      "Adding a fresh twist to timeless style, these women's Stan Smith sneakers from adidas Originals elevate your everyday 'fit. Landing in a Clear Pink and Cloud White colourway, these trainers have a minimalist suede upper, paired with a textile lining and a padded ankle collar for a plush feel. They have a rubber foxing tape cupsole for a smooth ride, while the rubber outsole delivers essential grip. With perforated 3-Stripes to the sidewalls, these trainers are finished off with signature Trefoil branding to the tongue and heel. | IG0345",
    price: 80,
    brand: "adidas Originals",
    category: "women",
    colour: "pink",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_656867_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_656867_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_656867_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_656867_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_656867_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_656867_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_656867_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "16614505",
    name: "adidas Originals NMD_R1 Shoes",
    description:
      "Calling all city explorers. This pair of the adidas NMD_R1 Shoes was designed for you. They're made to be outrageously comfortable, so you can walk endlessly and see where your curiosity leads you. It's all thanks to an adaptive knit upper and responsive BOOST cushioning. A cutting-edge evolution of the '80s running shoe, they have a sleek, fast look that pairs with every outfit and every destination.• Regular fit• Lace closure• Knit upper• Textile lining• BOOST midsole",
    price: 120,
    brand: "adidas Originals",
    category: "women",
    colour: "blue",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_HQ4451_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_HQ4451_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_HQ4451_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_HQ4451_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_HQ4451_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_HQ4451_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_HQ4451_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "16621383",
    name: "adidas Originals Treziod 2",
    description:
      "Level up your lace ups in retro style with these men's Trezoid 2 sneakers from adidas Originals. In a Victory Blue, Cloud White and Legend Ink colourway, these sneaks are cut from smooth leather with breathable textile for a comfy wear. They feature a lace fastening to lock you in, with a padded collar for added support and a textile lining for a snug fit. Underfoot, they sit on a cushioned midsole for a smooth ride, with a grippy rubber outsole for durable traction. Finished up with 3-Stripes and Trefoil branding to the tongue, heel and sidewalls.|GY0044",
    price: 50,
    brand: "adidas Originals",
    category: "women",
    colour: "blue",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_609019_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_609019_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_609019_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_609019_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_609019_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_609019_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_609019_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "19544190",
    name: "adidas Originals Gazelle Bold Shoes",
    description:
      "It wouldn't be a list of adidas' most iconic shoes without the Gazelle. First worn on indoor courts in the '70s, the suede shoe is gaining new fans to this day. Now the style you covet is lifted up to new heights. It's stacked three layers high, for a new perspective on the classic style. The details stay sporty with buttery-soft suede and serrated 3-Stripes. A metallic-gold &quot;Gazelle&quot; is the final stamp of our heritage.• Regular fit• Lace closure• Suede upper• Synthetic lining• Rubber outsole",
    price: 90,
    brand: "adidas Originals",
    category: "women",
    colour: "red",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_ID6990_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_ID6990_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_ID6990_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_ID6990_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_ID6990_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_ID6990_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_ID6990_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  // Womens Converse
  {
    id: "16598896",
    name: "Converse Run Star Legacy CX Women's",
    description:
      "Take a Converse classic to new heights with these women's Run Star Legacy CX trainers. Landing in an Egret colourway, these redesigned icons have a stretchy canvas upper, with a synthetic toe cap for essential protection. They feature a PU CX sockliner that hugs your foot for a snug feel, while the adjustable lace-up front offers a locked-in fit. Underfoot, the amplified CX foam midsole provides next-level cushioning, and the durable rubber outsole adds grip to every step. Finished off with a signature All Star ankle patch and a Chuck Taylor label to the tongue.",
    price: 110,
    brand: "Converse",
    category: "women",
    colour: "white",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_559110_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_559110_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_559110_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_559110_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_559110_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_559110_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_559110_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "19521105",
    name: "Converse All Star Lift High Platform Women's",
    description:
      "Turn heads when you step out in these women's All Star Lift High Platform trainers from Converse. In a Pink colourway, these high-top kicks have a durable and stretchy canvas upper for lasting comfort and easy wear. They feature a lace fasting to lock you in and sit on a platform midsole that uses OrthoLite cushioning for elevated comfort. With a rubber outsole for grip a heel tab for easy on-and-off, they're finished up with the famous Converse ankle patch.",
    price: 90,
    brand: "Converse",
    category: "women",
    colour: "pink",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_650520_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_650520_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_650520_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_650520_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_650520_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_650520_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_650520_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "1267714",
    name: "Converse All Star High Women's",
    description:
      "Reach for the stars with these women's Converse All Star Hi trainers! Originally released in 1917 and worn by basketball legend Charles 'Chuck' Taylor, these iconic shoes feature a white canvas upper and Converse's instantly recognisable striped rubber sole. A true classic, these Converse All Star hi-tops are a firm favourite amongst footwear fans around the world for their timeless yet street smart style. __Other features include: Toe cap, tonal white laces, a rubber All Star logo on the back heel and a printed Converse badge on the side._",
    price: 60,
    brand: "Converse",
    category: "women",
    colour: "white",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_029961_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_029961_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_029961_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_029961_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_029961_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_029961_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_029961_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "344367",
    name: "Converse Run Star Hike Women's",
    description:
      "Converse remix their iconic Chuck Taylor All Star 70 this season, as they introduce these women's Run Star Hike trainers. This chunky sneak has the usual comfortable canvas uppers in a white colourway and the brand's signature heel patch, but it's underneath where the makeover begins. Raising you to new heights, the pair sits upon a stacked platform midsole, while a split panelled, two-tone jagged outsole keeps you gripped to the surface. Finished with eyelets in the sidewalls for breathability and a comfy Ortholite insole.",
    price: 105,
    brand: "Converse",
    category: "women",
    colour: "white",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_344367_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_344367_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_344367_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_344367_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_344367_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_344367_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_344367_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  // Kids Nike
  {
    id: "19419217",
    name: "Nike Air Max 270 Children",
    description:
      "Refresh their kick collection with these children's Air Max 270 trainers from Nike. In a Black colourway with Volt details, these JD exclusive sneaks have a stretchy sock-like upper for comfy wear. They feature a lace fastening to lock them in and a pull tab to the heel so they can easily take them on-and-off. Underfoot is a spongy foam midsole with a Max Air 270 unit to give them a supportive ride and a rubber outsole for grippy traction. Signed off with the Swoosh to the sidewalls.",
    price: 70,
    brand: "Nike",
    category: "kids",
    colour: "black",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_645282_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_645282_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645282_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645282_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645282_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645282_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645282_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "16245191",
    name: "Nike Dunk High Junior",
    description:
      "Lace up in a Swoosh classic by reppin' these juniors' Dunk High sneakers from Nike. In a White and Red colourway, these OG, b-ball inspired sneaks are made with a smooth, durable leather upper for total comfort. They have a padded, high-top collar for a snug fit, with a lace fastening to lock you in and breathable perforations in the toe for ventilation. Underfoot, they have a soft foam midsole for cushioning and a grippy rubber sole for essential traction. Finished up with Nike branding to the tongue and sidewalls.",
    price: 75,
    brand: "Nike",
    category: "kids",
    colour: "red",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_472471_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_472471_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_472471_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_472471_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_472471_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_472471_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_472471_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "19570739",
    name: "Nike Air Force 1 Next Nature Junior",
    description:
      "Rep it like the OG with these juniors' Air Force 1 Next Nature sneakers from Nike. Coming in a University Blue, White and Black colourway, these updated classics have a durable synthetic leather upper and stitched detailing. They feature a low-cut, padded ankle collar for a comfy fit, sat above Nike Air cushioning for a plush ride. With heritage hoops pivot circles in the rubber outsole for court-inspired grip, these trainers are finished off with the iconic Swoosh on the sidewalls.",
    price: 80,
    brand: "Nike",
    category: "kids",
    colour: "blue",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_645264_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_645264_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645264_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645264_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645264_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645264_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645264_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "16257990",
    name: "Nike Revolution 6 Children",
    description:
      "Lace up your little one in a sporty style with these children's Revolution 6 trainers from Nike. Coming in a Pink Foam colourway with Black accents, these treads are made with a smooth, breathable mesh upper for lasting wear. They feature elastic laces and a pull tab at the heel for easy on-off, while a velcro ankle strap locks 'em in. They sit on a lightweight midsole with plush foam cushioning underfoot for essential comfort, while a grippy rubber outsole underfoot offers total traction. Finished up with Nike's iconic Swoosh at the sidewalls, and classic branding at the heel and tongue.",
    price: 35,
    brand: "Nike",
    category: "kids",
    colour: "black",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_475458_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_475458_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_475458_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_475458_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_475458_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_475458_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_475458_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  // Kids Adidas
  {
    id: "16166782",
    name: "adidas Originals Forum Low Children",
    description:
      "Get them steppin' out in a legendary look with these children's Forum Low trainers from adidas Originals. In a Cloud White and Royal Blue colourway, these low-profile kicks are back from the archives with a premium leather upper. They feature breathable perforations, a tonal lace up fastening and an adjustable Velcro strap for a custom fit. With a cushioned midsole for everyday comfort, these downsized trainers are sat on a chunky outsole with a grippy rubber tread for traction. Finished with adidas' iconic 3-Stripes to the sidewalls, as well as a Trefoil logo.|FY7978",
    price: 60,
    brand: "adidas Originals",
    category: "kids",
    colour: "white",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_442747_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_442747_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_442747_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_442747_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_442747_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_442747_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_442747_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "19501471",
    name: "adidas Originals Ozweego Children",
    description:
      "Cop ya' kiddo heat for their feet with these children's Ozweego trainers from adidas Originals. Exclusive to JD, in a Vapour Pink colourway, these sneaks have a lightweight and breathable textile upper for all-day wear. They feature a lace fastening to lock them in and a padded ankle collar for a plush feel. Underfoot is a spongy foam midsole that uses Adiprene and Adiprene+ cushioning for a super-smooth ride. With a rubber outsole for traction, they're finished with the Trefoil to the tongue. | ID6916",
    price: 45,
    brand: "adidas Originals",
    category: "kids",
    colour: "pink",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_646345_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_646345_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_646345_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_646345_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_646345_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_646345_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_646345_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "19570694",
    name: "adidas Originals U_Path Run Junior",
    description:
      "Top up your everyday rotation with these juniors' U_Path Run sneakers from adidas Originals. In a Grey Heather colourway, these JD-exclusive kicks have a lightweight textile and synthetic upper, paired with a tonal lace-up closure and a padded collar for a comfy fit. Underfoot, the EVA midsole adds lightweight and responsive cushioning, while the durable rubber outsole keeps you gripped. Finished off with the signature 3-Stripes to the sidewalls. | IF7962",
    price: 50,
    brand: "adidas Originals",
    category: "kids",
    colour: "grey",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_645035_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_645035_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645035_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645035_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645035_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645035_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645035_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "19273797",
    name: "adidas Originals Gazelle Junior",
    description:
      "Lace up in a OG style with these juniors' Gazelle sneakers from adidas Originals. Landing in an Easy Green colourway, these treads have a soft suede upper for lasting wear. They feature a secure lace fastening with padding around the ankle collar for a snug fit, and a plush OrthoLite sockliner for all-day comfort. THey sit atop a lightweight, low-riding midsole, with a tough rubber outsole underfoot for grippy traction. Signed off with adidas' iconic 3-Stripes to the sidewalls and the legendary Trefoil logo throughout. | HP2865",
    price: 50,
    brand: "adidas Originals",
    category: "kids",
    colour: "green",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_619926_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_619926_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_619926_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_619926_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_619926_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_619926_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_619926_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "15966939",
    name: "adidas Originals Superstar Junior",
    description:
      "Celebrating 50 years on top, adidas Originals have brought back the icon with these juniors' Superstar trainers. In a black colourway, these low-profile sneakers have a premium leather upper with the signature rubber shell toe for durability. They've kept the OG design lines and feature a tonal lace up fastening and a OrthoLite sockliner for all-day cushioning. With a tonal midsole and a grippy rubber tread, these iconic sneaks are finished up with serrated 3-Stripes to the sidewalls, a gold-tone Superstar wordmark and the Trefoil logo to the tongue and heel.|EF5398",
    price: 60,
    brand: "adidas Originals",
    category: "kids",
    colour: "black",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_348196_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_348196_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_348196_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_348196_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_348196_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_348196_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_348196_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  // Kids Jordan
  {
    id: "19509306",
    name: "Jordan Air 1 Mid Infant",
    description:
      "Inspire the next gen of Sneakerheads with these infants' Air 1 Mid trainers from Jordan. In a Black and Fire Red colourway, these mini sneakers have a layered leather and synthetic upprt, with a flexible tongue and stretchy laces for a secure fit. Featuring a padded ankle collar and a smooth midsole for plush comfort, they're sat on a durable rubber outsole for essential traction. Finished off with Swoosh branding at the sidewalls, the Air Wings badge to the ankle and the iconic Jumpman at the tongue.",
    price: 50,
    brand: "Jordan",
    category: "kids",
    colour: "black",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_645850_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_645850_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645850_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645850_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645850_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645850_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_645850_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "19457234",
    name: "Jordan Air 1 Low Junior",
    description:
      "Go bold in a Jordan classic with these juniors' Air 1 Low sneakers. Landing in a Black and Lucky Green colour block design across the leather and synthetic panels, these lower-cut kicks have a perforated toe for cool comfort. They're sat on a soft foam midsole that houses signature Air cushioning for a revolutionary ride. With hoops pivot circles to the rubber outsole for OG grip, these trainers are finished off with the iconic Swoosh at the sidewalls and the Air Wings badge to the heel. | Please Note: This item is limited to 2 pairs per person.",
    price: 75,
    brand: "Jordan",
    category: "kids",
    colour: "green",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_646832_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_646832_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_646832_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_646832_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_646832_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_646832_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_646832_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "19569266",
    name: "Jordan Max Aura 4 Junior",
    description:
      "Add some courtside style to your tread game with these juniors' Max Aura 4 sneakers from Jordan. In a White, Black and University Red colourway, these sneaks are cut from smooth genuine and synthetic leather for a lasting wear. They feature a lace fastening to lock you in, with a padded, mid-rise collar for added support. Underfoot, they sit on a visible Max Air unit for a super-smooth ride, with a grippy rubber outsole that uses futuristic waves for total traction. Finished up with signature Jordan branding.",
    price: 65,
    brand: "Jordan",
    category: "kids",
    colour: "white",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_647418_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_647418_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647418_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647418_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647418_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647418_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_647418_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
  {
    id: "19523808",
    name: "Jordan Air 4 Retro Junior's",
    description:
      "Throw it back to the '89 OG with these juniors' Air 4 Retro sneakers from Jordan. In a Black colourway with Tour Yellow accents to make them stand out, these iconic kicks have a layered leather and synthetic upper. They feature plastic lace locks to adjust the fit and a sculpted foot frame to keep you stable. Underfoot, a visible Air-Sole unit delivers impact cushioning in the heel, while the rubber outsole has an updated herringbone tread for essentials grip. These sneakers are finished off with signature Jumpman branding to the tongue and heel.",
    price: 130,
    brand: "Jordan",
    category: "kids",
    colour: "",
    image:
      "https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_646856_plc&qlt=92&w=363&h=463&v=1&fmt=auto",
    images: [
      "https://i8.amplience.net/i/jpl/jd_646856_a?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_646856_b?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_646856_c?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_646856_d?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_646856_e?qlt=92&w=750&h=531&v=1&fmt=auto",
      "https://i8.amplience.net/i/jpl/jd_646856_f?qlt=92&w=750&h=531&v=1&fmt=auto",
    ],
  },
];
