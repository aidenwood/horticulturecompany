export const products = [
  {
    id: 'festoon-lighting',
    step: '01',
    name: 'Festoon Lighting Hire',
    productimg: '/lighting/festoon-whitebg.webp',
    img: '/lighting/beach-festoon.webp',
    alt: 'Elegant outdoor festoon string lights perfect for wedding receptions and garden parties with warm white bulbs.',
    description:
      'Create a magical atmosphere with our warm, dimmable festoon lighting for weddings and outdoor events.',
    link: '/products/festoon-lighting',
    specifications: {
      bulbType: 'LED Edison-style',
      bulbCount: '25 per 5m string',
      bulbSpacing: '20cm',
      color: 'Warm white (2700K)',
      powerConsumption: '20W per 5m string',
      dimmable: true,
      waterproof: 'IP65 rated for outdoor use',
      installation: 'Professional installation required',
      maxRunLength: '50m from single power source'
    },
    pricing: [
      {
        name: 'Festoon Package (Small)',
        description: '60m of festoon lighting (60 bulbs)',
        price: 895,
        rentalPeriod: '24 hours'
      },
      {
        name: 'Festoon Package (Medium)',
        description: '120m of festoon lighting (120 bulbs)',
        price: 1495,
        rentalPeriod: '24 hours'
      },
      {
        name: 'Festoon Package (Large)',
        description: '200m of festoon lighting (200 bulbs)',
        price: 2445,
        rentalPeriod: '24 hours'
      }
    ],
    additionalOptions: [
      {
        name: 'Extended Rental',
        description: 'Additional 24 hours',
        price: 145
      },
      {
        name: 'Raised Beams (2.8m)',
        description: 'Includes gripple and installation',
        price: 85
      },
      {
        name: 'Dimmable Power Controller',
        description: 'Allow complete control brightness',
        price: 245
      }
    ],
    popularApplications: [
      'Wedding receptions',
      'Garden parties',
      'Beer gardens',
      'Outdoor dining areas',
      'Festival spaces'
    ],
    faqs: [
      {
        question: 'How long does installation take?',
        answer: 'Typically 2-3 hours depending on layout complexity and venue access.'
      },
      {
        question: 'Can I install these myself?',
        answer: 'Yes, with our DIY kit option, though professional installation is recommended for best results.'
      }
    ],
    relatedProducts: ['fairy-light-canopy', 'chandelier-installations', 'lighting-installations', 'outdoor-tree-lighting']
  },
  
  {
    id: 'fairy-light-canopy',
    step: '02',
    name: 'Fairy Light Canopies',
    productimg: '/lighting/fairy-lights-sqr.webp',
    img: '/lighting/fairy-wedding-day-wide.webp',
    alt: 'Stunning ceiling installation of fairy lights creating a starry night effect for indoor venues.',
    description:
      'Transform your venue with an enchanting ceiling of twinkling fairy lights ideal for receptions and galas.',
    link: '/products/fairy-light-canopy',
    specifications: {
      bulbType: 'Micro LED',
      bulbCount: '100 per 10m string',
      bulbSpacing: '10cm',
      color: 'Warm white or cool white options',
      powerConsumption: '8W per 10m string',
      twinkleEffect: 'Available',
      waterproof: 'Indoor use only',
      installation: 'Professional installation required',
      canopyDensity: 'Customizable from light to dense coverage'
    },
    pricing: [
      {
        name: 'Fairy Light Package (Small)',
        description: '40m of fairy lighting and installation',
        price: 895,
        rentalPeriod: '24 hours'
      },
      {
        name: 'Fairy Light Package (Medium)',
        description: '80m of fairy lighting and installation',
        price: 1495,
        rentalPeriod: '24 hours'
      },
      {
        name: 'Fairy Light Package (Large)',
        description: '120m of fairy lighting and installation',
        price: 2445,
        rentalPeriod: '24 hours'
      }
    ],
    additionalOptions: [
      {
        name: 'Extended Rental',
        description: 'Additional 24 hours',
        price: 145
      },
      {
        name: 'Raised Beams (2.8m)',
        description: 'Includes gripple and installation',
        price: 85
      },
      {
        name: 'Dimmable Power Controller',
        description: 'Allow complete control brightness',
        price: 245
      }
    ],
    popularApplications: [
      'Wedding receptions',
      'Corporate galas',
      'Indoor dining rooms',
      'Marquee ceilings',
      'Dance floors'
    ],
    faqs: [
      {
        question: 'Will this work in my venue?',
        answer: 'We conduct site visits to assess venue suitability and ceiling access points.'
      },
      {
        question: 'Can you create a custom pattern?',
        answer: 'Yes, we offer bespoke design services for unique canopy layouts.'
      }
    ],
    relatedProducts: ['festoon-lighting', 'stage-wash-package', 'chandelier-installations', 'lighting-installations']
  },

  {
    id: 'stage-wash-package',
    step: '03',
    name: 'Stage Wash Package',
    productimg: '/lighting/intelligent-lighting-wide.webp',
    img: '/lighting/intelligent-lighting-wide.webp',
    alt: 'Professional LED uplighting fixtures casting colored light on venue walls for dramatic effect at corporate events.',
    description:
      'Add color and dimension to any space with our customizable LED uplighting solutions.',
    link: '/products/stage-wash-package',
    specifications: {
      fixtureType: 'RGBW LED wash lights',
      coverage: 'One fixture per 2-3m of wall space',
      colors: 'Full RGBW spectrum with millions of color options',
      control: 'DMX or wireless remote',
      powerConsumption: '15W per fixture',
      dimming: '0-100% smooth dimming',
      waterproof: 'IP20 indoor fixtures, IP65 outdoor options available',
      programming: 'Custom color programming included'
    },
    pricing: [
      {
        name: 'Stage Wash Package (Small)',
        description: '2x stage wash lights and installation.',
        price: 245,
        rentalPeriod: '24 hours'
      },
      {
        name: 'Stage Wash Package (Medium)',
        description: '4x stage wash lights and installation.',
        price: 395,
        rentalPeriod: '24 hours'
      },
      {
        name: 'Stage Wash Package (Large)',
        description: '8x stage wash lights and installation.',
        price: 895,
        rentalPeriod: '24 hours'
      }
    ],
    additionalOptions: [
      {
        name: 'DMX Cable Rental',
        description: 'Rental of a single 10m DMX cable.',
        price: 25
      },
      {
        name: 'Above 3m Installation',
        description: 'Extra fee for high install and removal, EWP on site required.',
        price: 245
      },
      {
        name: 'FollowSpot Operation',
        description: 'Manual FollowSpot Operation per hour and hire.',
        price: 245
      }
    ],
    popularApplications: [
      'Corporate events',
      'Wedding receptions',
      'Gala dinners',
      'Product launches',
      'Brand activations'
    ],
    faqs: [
      {
        question: 'Can I choose specific colors?',
        answer: 'Yes, we can match any brand colors or wedding palette exactly.'
      },
      {
        question: 'How long do battery-powered uplights last?',
        answer: 'Our battery units provide 8-10 hours of continuous use on a full charge.'
      }
    ],
    relatedProducts: ['festoon-lighting', 'dmx-light-shows', 'chandelier-installations', 'stage-projection-package']
  },

  {
    id: 'lighting-installations',
    step: '04',
    name: 'Lighting Installations',
    productimg: '/lighting/marina-festoon.webp',
    img: '/lighting/festival-bamboo-path.webp',
    alt: 'Vintage-style Edison bulbs hanging from custom structures creating a rustic yet elegant atmosphere.',
    description:
      'Vintage-inspired lighting fixtures that add warmth and character to any event space.',
    link: '/products/lighting-installations',
    specifications: {
      bulbType: 'Large Edison vintage-style LED',
      installation: 'Custom overhead structures or existing architecture',
      bulbSize: '95mm diameter statement bulbs',
      color: 'Ultra-warm amber (2200K)',
      powerConsumption: '4-8W per bulb',
      dimmable: true,
      suspension: 'Adjustable height black textile cord',
      arrangements: 'Linear, cluster, or geometric patterns',
      minInstallation: '10 bulb minimum order'
    },
    pricing: [
      {
        name: 'Creative Pathway Lighting Installation',
        description: '200m of festoon and creative pathway installation to capture attention.',
        price: 3445,
        rentalPeriod: '72 hours'
      },
      {
        name: 'Circus Tent Lighting Installation',
        description: '200m of festoon installed in a circus tent or dome formation (EWP required).',
        price: 3445,
        rentalPeriod: '72 hours'
      },
      {
        name: 'Festival Road Lined Festoons',
        description: '200m of festoon installed across festival streets for high traffic areas.',
        price: 3445,
        rentalPeriod: '72 hours'
      }
    ],
    additionalOptions: [
      {
        name: 'Support Structure Rental',
        description: 'For venues without hanging points',
        price: 200
      },
      {
        name: 'Mixed Bulb Styles',
        description: 'Combine different vintage bulb shapes',
        price: 75
      },
      {
        name: 'Extended Height Installation',
        description: 'For ceiling heights above 5m',
        price: 150
      }
    ],
    popularApplications: [
      'Industrial venue weddings',
      'Rustic receptions',
      'Vintage-themed events',
      'Restaurant pop-ups',
      'Brewery events'
    ],
    faqs: [
      {
        question: 'What ceiling height is needed?',
        answer: 'Minimum 3m ceiling height, with 4-5m being ideal for best effect.'
      },
      {
        question: 'Is structural engineering approval needed?',
        answer: 'For installations over 20kg, venue structural assessment may be required.'
      }
    ],
    relatedProducts: ['festoon-lighting', 'fairy-light-canopy', 'chandelier-installations', 'stage-projection-package']
  },

  {
    id: 'outdoor-tree-lighting',
    step: '05',
    name: 'Outdoor Tree Lighting',
    productimg: '/lighting/tree-rgb-sqr.webp',
    img: '/lighting/tree-rgb-sqr.webp',
    alt: 'Trees illuminated with fairy lights and spotlights creating a magical outdoor setting for evening events.',
    description:
      'Transform outdoor spaces by highlighting natural elements with our professional tree lighting packages.',
    link: '/products/outdoor-tree-lighting',
    specifications: {
      lightTypes: 'Fairy lights, uplights, spotlights, or combination',
      coverage: 'Custom designed based on tree size and type',
      waterproof: 'IP65 rated for all-weather use',
      powerRequirements: 'Outdoor-rated power supply needed',
      installation: 'Professional installation required',
      treeSize: 'Works with trees 3m tall and above',
      colors: 'Warm white standard, colored options available',
      controlOptions: 'Static, twinkle, or color-changing'
    },
    pricing: [
      {
        name: 'Outdoor Tree Lighting (Small)',
        description: '4x 4500 lumen wash lights for illuminating whole tree lines.',
        price: 1445,
        rentalPeriod: '48 hours'
      },
      {
        name: 'Outdoor Tree Lighting (Medium)',
        description: '8x 4500 lumen wash lights for illuminating whole tree lines.',
        price: 2445,
        rentalPeriod: '48 hours'
      },
      {
        name: 'Outdoor Tree Lighting (Large)',
        description: '12x 4500 lumen wash lights for illuminating whole tree lines.',
        price: 3445,
        rentalPeriod: '48 hours'
      },
    ],
    additionalOptions: [
      {
        name: 'Multi-Tree Discount',
        description: '10% off for 3+ trees',
        price: 'Variable'
      },
      {
        name: 'Color-Changing Options',
        description: 'RGB lighting with control system',
        price: 150
      },
      {
        name: 'Generator Power',
        description: 'For locations without power access',
        price: 200
      }
    ],
    popularApplications: [
      'Outdoor weddings',
      'Garden parties',
      'Festival grounds',
      'Christmas events',
      'Corporate outdoor functions'
    ],
    faqs: [
      {
        question: 'Will installation damage the trees?',
        answer: 'No, we use arborist-approved techniques that protect the tree\'s health.'
      },
      {
        question: 'Can you light very tall trees?',
        description: 'Yes, with specialized equipment we can illuminate trees up to 15m tall.'
      }
    ],
    relatedProducts: ['festoon-lighting', 'pathway-lighting', 'architectural-lighting']
  },

  

  {
    id: 'dmx-light-shows',
    step: '06',
    name: 'Custom Lighting Shows',
    productimg: '/lighting/dmx-sqr-sml.webp',
    img: '/lighting/dmx-show-upclose.webp',
    alt: 'Custom monogram and pattern projection on venue walls and dance floors for personalized wedding lighting.',
    description:
      'Custom DMX lighting shows taking control of a whole venue and keeping the light show synced to the BPM of the music for the night.',
    link: '/products/dmx-light-shows',
    specifications: {
      fixtures: 'Professional moving heads, LED bars, wash lights',
      control: 'Advanced DMX programming and operation',
      synchronization: 'Music-synchronized via BPM detection',
      operator: 'Professional lighting designer included',
      customization: 'Fully custom-programmed to your event',
      setup: 'Includes all rigging, cabling and control equipment',
      effects: 'Beam, wash, strobe, color effects',
      audioIntegration: 'Compatible with any sound system'
    },
    pricing: [
      {
        name: 'DMX Light Show (Small Venue)',
        description: '8-12 fixtures, basic programming',
        price: 845,
        rentalPeriod: '8 hours'
      },
      {
        name: 'DMX Light Show (Medium Venue)',
        description: '12-24 fixtures, advanced programming',
        price: 1695,
        rentalPeriod: '12 hours'
      },
      {
        name: 'DMX Light Show (Stadiums and Festivals)',
        description: '24+ fixtures, full programming',
        price: 2895,
        rentalPeriod: '16 hours'
      },
    ],
    additionalOptions: [
      {
        name: 'Custom Show Programming',
        description: 'Pre-programmed special moments',
        price: 350
      },
      {
        name: 'Rehearsal/Setup Day',
        description: 'Early access for complex installations',
        price: 500
      },
      {
        name: 'Live Operation',
        description: 'Skilled lighting operator for live events',
        price: 350
      }
    ],
    popularApplications: [
      'Live music events',
      'Corporate presentations',
      'Gala dinners',
      'Fashion shows',
      'Award ceremonies'
    ],
    faqs: [
      {
        question: 'How long does setup take?',
        answer: 'Depending on the package, setup requires 4-8 hours access before the event.'
      },
      {
        question: 'Can lighting be synchronized to specific songs?',
        answer: 'Yes, we can program special moments for key songs with advance notice.'
      }
    ],
    relatedProducts: ['custom-laser-shows', 'stage-projection-package', 'mirror-ball-disco-lighting']
  },

  {
    id: 'custom-laser-shows',
    step: '07',
    name: 'IDLA Laser Shows',
    productimg: '/lighting/lasers.webp',
    img: '/lighting/lasers.webp',
    alt: 'Dynamic laser light effects creating immersive experience for corporate product launches and high-energy events.',
    description:
      'Wow your guests with cutting-edge laser projection systems for spectacular visual displays.',
    link: '/products/custom-laser-shows',
    specifications: {
      laserType: 'Full-color RGB professional laser systems',
      power: '3W-10W systems available',
      effectTypes: 'Beam effects, animations, text, logos',
      safetyCertification: 'FDA variance compliant',
      technician: 'Professional laser operator included',
      coverage: 'Suitable for venues up to 1000m²',
      control: 'DMX or dedicated laser control software',
      customContent: 'Custom animations and logos available'
    },
    pricing: [
      {
        name: 'Single Laser Show',
        description: 'Single 3W system with standard effects',
        price: 845,
        rentalPeriod: '8 hours'
      },
      {
        name: 'Dual Laser Show',
        description: '2x 3W systems with synchronized effects',
        price: 1445,
        rentalPeriod: '12 hours'
      },
      {
        name: 'Multi-Laser Show',
        description: '4x 3W Lasers with custom programming',
        price: 2445,
        rentalPeriod: '16 hours'
      }
    ],
    additionalOptions: [
      {
        name: 'Custom Logo Animation',
        description: 'Corporate branding or event logo in laser',
        price: 350
      },
      {
        name: 'Extended Hours',
        description: 'Additional operation time',
        price: 150,
        unit: 'per hour'
      },
      {
        name: 'Atmospheric Haze',
        description: 'Professional haze system for enhanced visibility',
        price: 200
      }
    ],
    popularApplications: [
      'Corporate product launches',
      'EDM events and nightclubs',
      'Concert productions',
      'Gala dinner entertainment',
      'Brand activations'
    ],
    faqs: [
      {
        question: 'Are laser shows safe?',
        answer: 'Yes, all shows are operated by certified technicians following strict safety protocols.'
      },
      {
        question: 'Can you project our company logo?',
        answer: 'Yes, we can create custom laser animations of logos with 2-3 weeks advance notice.'
      }
    ],
    relatedProducts: ['dmx-light-shows', 'projection-mapping-package', 'corporate-event-package']
  },

  // Projection Mapping Product
{
  id: 'projection-mapping-package',
  step: '08',
  name: 'Projection Mapping Package',
  productimg: '/lighting/projections-wide-obscura.webp',
  img: '/lighting/projections-wide-obscura.webp',
  alt: 'Stunning projection mapping transforming architectural features with vivid colors and animations.',
  description:
    'Transform any surface into a dynamic canvas with our cutting-edge projection mapping services, creating immersive visual experiences.',
  link: '/products/projection-mapping-package',
  specifications: {
    projectors: 'High-lumen laser projectors (10,000-30,000 lumens)',
    resolution: 'Up to 4K UHD',
    software: 'Professional mapping and media server software',
    contentCreation: 'Custom animation and content design available',
    surfaceCompatibility: 'Buildings, interior walls, 3D objects, stages',
    blending: 'Seamless edge blending for multi-projector setups',
    setup: 'Professional installation and calibration included',
    control: 'DMX integration capability for show control'
  },
  pricing: [
    {
      name: 'Projection Mapping Package (Small)',
      description: '1 projector, standard surfaces, pre-made content and live effects.',
      price: 1695,
      rentalPeriod: '24 hours'
    },
    {
      name: 'Projection Mapping Package (Medium)',
      description: '2 projectors, complex surfaces, custom content and live effects.',
      price: 2695,
      rentalPeriod: '48 hours'
    },
    {
      name: 'Projection Mapping Package (Large)',
      description: '3+ projectors, full venue transformation, complete custom rendered show.',
      price: 3695,
      rentalPeriod: '72 hours'
    }
  ],
  additionalOptions: [
    {
      name: 'Custom Content Creation',
      description: 'Branded animations and visual storytelling',
      price: 1200
    },
    {
      name: 'Technical Site Survey',
      description: 'Detailed venue assessment and mapping planning',
      price: 445
    },
    {
      name: 'Pre-Show Rehersal and Install',
      description: 'For shows requiring a pre-show rehersal',
      price: 895
    }
  ],
  popularApplications: [
    'Corporate brand activations',
    'Wedding venue transformations',
    'Product launches',
    'Theatrical productions',
    'Museum and art installations'
  ],
  faqs: [
    {
      question: 'How much space do you need for projection mapping?',
      answer: 'We need sufficient distance from the projection surface, typically 1.5-3x the width of the projected area, depending on lenses used.'
    },
    {
      question: 'Can you project onto any surface?',
      answer: 'Most surfaces work well, though lighter colors and less reflective materials produce the best results. We can advise during a site survey.'
    },
    {
      question: 'How long does setup take?',
      answer: 'Setup typically requires 4-8 hours depending on complexity, with an additional tech rehearsal recommended for complex projects.'
    }
  ],
  relatedProducts: ['premium-projector-hire', 'custom-stage-renders', 'dmx-lighting']
},

// Projector Hire Product
{
  id: 'premium-projector-hire',
  step: '09',
  name: 'Premium Projector Hire',
  productimg: '/lighting/projector-sqr.webp',
  img: '/lighting/projector-sqr.webp',
  alt: 'Professional high-brightness projector suitable for large venues and outdoor projection with vibrant image quality.',
  description:
    'High-performance projectors available for any event size, delivering crystal-clear visuals with exceptional brightness and resolution.',
  link: '/products/premium-projector-hire',
  specifications: {
    brightness: 'Options from 5,000 to 30,000 lumens',
    resolution: 'Full HD to 4K UHD',
    contrast: 'Up to 10,000:1 contrast ratio',
    inputs: 'HDMI, DisplayPort, SDI, HDBaseT',
    lenses: 'Interchangeable lens options (standard, short-throw, long-throw)',
    throw: 'Adjustable throw ratios for various spaces',
    mounting: 'Floor, ceiling, or rigging mount options',
    accessories: 'Screens, media players, switchers available'
  },
  pricing: [
    {
      name: 'Standard Projector',
      description: '6,000-8,000 lumens, Full HD resolution',
      price: 250,
      rentalPeriod: '24 hours'
    },
    {
      name: 'Professional Projector',
      description: '12,000-15,000 lumens, WUXGA/4K resolution',
      price: 450,
      rentalPeriod: '24 hours'
    },
    {
      name: 'Ultra-High Brightness',
      description: '20,000+ lumens, 4K resolution, outdoor capability',
      price: 850,
      rentalPeriod: '24 hours'
    }
  ],
  additionalOptions: [
    {
      name: 'Projection Screen',
      description: 'Front or rear projection screens, various sizes',
      price: 120
    },
    {
      name: 'Technician Support',
      description: 'On-site professional for setup and operation',
      price: 350
    },
    {
      name: 'Content Management',
      description: 'Media server with content scheduling',
      price: 200
    }
  ],
  popularApplications: [
    'Conference presentations',
    'Outdoor cinema events',
    'Trade show displays',
    'Wedding photo/video displays',
    'Educational seminars'
  ],
  faqs: [
    {
      question: 'How do I know what brightness I need?',
      answer: 'For indoor controlled lighting, use 100 lumens per square meter. For ambient light or outdoor use, 500+ lumens per square meter is recommended.'
    },
    {
      question: 'Do you include cables and accessories?',
      description: 'Yes, standard HDMI cables, power cables and basic remote control are included. Specialized cables or adapters can be added for a small fee.'
    },
    {
      question: 'Can I connect my own device?',
      answer: 'Yes, our projectors support various inputs including HDMI, which works with most laptops, tablets and media players.'
    }
  ],
  relatedProducts: ['projection-mapping-paxckage', 'custom-stage-renders', 'custom-laser-shows', 'dmx-lighting']
},

// Custom Stage Renders Product
{
  id: 'custom-stage-renders',
  step: '10',
  name: 'Custom Stage Renders',
  productimg: '/lighting/stage-render.webp',
  img: '/lighting/stage-render.webp',
  alt: 'Photorealistic 3D visualization of custom stage design with lighting and audiovisual elements for event planning.',
  description:
    'Bring your event vision to life with our custom 3D stage rendering service, creating custom visual content pre-show using our own Geometry Node Engines.',
  link: '/products/custom-stage-renders',
  specifications: {
    renderQuality: 'Photorealistic 3D visualization',
    revisions: 'Up to 3 revision cycles included',
    viewAngles: 'Multiple camera angles and perspectives',
    lightingSimulation: 'Accurate lighting effect previsualization',
    deliverables: 'High-resolution still images and optional flythrough videos',
    timeframe: '3-10 business days depending on complexity',
    software: 'Industry-standard 3D modeling and rendering tools',
    compatibility: 'CAD drawings available for production teams'
  },
  pricing: [
    {
      name: 'Basic Visualization',
      description: 'Single stage setup, 3 camera angles, basic lighting',
      price: 750,
      rentalPeriod: 'One-time fee'
    },
    {
      name: 'Standard Production',
      description: 'Detailed venue modeling, multiple setups, lighting previews',
      price: 1500,
      rentalPeriod: 'One-time fee'
    },
    {
      name: 'Complete Event Visualization',
      description: 'Full venue, animation sequences, VR-ready files, technical documentation',
      price: 3000,
      rentalPeriod: 'One-time fee'
    }
  ],
  additionalOptions: [
    {
      name: 'Animated Flythrough',
      description: '30-second camera movement through design',
      price: 500
    },
    {
      name: 'VR Experience Package',
      description: 'Interactive VR files for client presentation',
      price: 800
    },
    {
      name: 'Technical Drawing Set',
      description: 'CAD files and technical specifications',
      price: 400
    }
  ],
  popularApplications: [
    'Concert and tour production',
    'Corporate event design',
    'Wedding reception layouts',
    'Television and broadcast sets',
    'Conference and exhibition stands'
  ],
  faqs: [
    {
      question: 'How accurate are the visualizations to the final result?',
      answer: 'Our renders achieve approximately 90% accuracy to the final installed production, accounting for real-world lighting conditions and material properties.'
    },
    {
      question: 'What information do you need to create a render?',
      answer: 'We need venue dimensions, event details, design preferences, and any specific equipment requirements. A venue site visit or existing floor plans are extremely helpful.'
    },
    {
      question: 'Can renders be used for client presentations?',
      answer: 'Absolutely! Our high-quality renders are specifically designed for client approval processes and marketing materials.'
    }
  ],
  relatedProducts: ['dmx-light-shows', 'projection-mapping-package', 'premium-projector-hire', 'custom-laser-shows']
},



  {
    id: 'table-centerpiece-lighting',
    step: '11',
    name: 'Table Centerpiece Lighting',
    productimg: '/lighting/table-light.webp',
    img: '/lighting/table-light.webp',
    alt: 'Intricate table centerpieces with integrated LED lighting highlighting floral arrangements for wedding receptions.',
    description:
      'Enhance your table settings with our battery-operated and wireless lighting solutions for centerpieces.',
    link: '/products/table-centerpiece-lighting',
    specifications: {
      types: 'LED bases, submersible LEDs, mini fairy lights',
      powerSource: 'Battery-operated (10-12hr operation)',
      colors: 'Warm white, cool white, or color-changing RGB',
      control: 'Remote control options available',
      size: 'Various sizes to suit different table designs',
      waterproof: 'Submersible options for vase applications',
      brightness: 'Adjustable brightness levels',
      compatibility: 'Works with most floral and decor elements'
    },
    pricing: [
      {
        name: 'LED Light Base Package',
        description: '10x remote-controlled light bases',
        price: 150,
        rentalPeriod: '24 hours'
      },
      {
        name: 'Submersible LED Package',
        description: '20x waterproof submersible lights',
        price: 180,
        rentalPeriod: '24 hours'
      },
      {
        name: 'Mini Fairy Light Package',
        description: '15x battery fairy light strings for vessels',
        price: 120,
        rentalPeriod: '24 hours'
      }
    ],
    additionalOptions: [
      {
        name: 'Color-Changing Option',
        description: 'RGB lights with remote control',
        price: 30,
        unit: 'additional'
      },
      {
        name: 'Spare Batteries',
        description: 'Extra set of batteries for backup',
        price: 15
      },
      {
        name: 'Setup Service',
        description: 'Professional installation with your decor',
        price: 75,
        unit: 'per hour'
      }
    ],
    popularApplications: [
      'Wedding reception tables',
      'Gala dinner settings',
      'Corporate event tables',
      'Holiday parties',
      'Anniversary celebrations'
    ],
    faqs: [
      {
        question: 'Will these work with my florist\'s arrangements?',
        answer: 'Yes, we can coordinate with your florist to ensure compatibility.'
      },
      {
        question: 'How are the lights controlled?',
        answer: 'Each package includes remote controls, or we can set them to static mode before delivery.'
      }
    ],
    relatedProducts: ['battery-wireless-lighting', 'lantern-packages', 'wedding-complete-package']
  },

  {
    id: 'chandelier-installations',
    step: '12',
    name: 'Chandelier Installations',
    productimg: '/lighting/styled-festoon-sqr.webp',
    img: '/lighting/styled-festoon-sqr.webp',
    alt: 'Elegant crystal chandeliers hanging from marquee ceiling creating luxury atmosphere for high-end weddings.',
    description:
      'Add a touch of luxury with our range of hanging chandeliers suitable for tents and permanent venues.',
    link: '/products/chandelier-installations',
    specifications: {
      styles: 'Crystal, modern, rustic, or custom designs',
      sizes: 'Diameters from 60cm to 2m',
      installation: 'Professional installation included',
      lighting: 'Warm white LED or dimmable incandescent',
      height: 'Adjustable drop length',
      powerRequirements: 'Standard 110-240V',
      weight: '15-80kg depending on size',
      structuralRequirements: 'Rigging points or beam support'
    },
    pricing: [
      {
        name: 'Crystal Chandelier',
        description: '80cm diameter, classic elegance',
        price: 450,
        rentalPeriod: '24 hours'
      },
      {
        name: 'Modern Chandelier',
        description: '100cm diameter, contemporary design',
        price: 550,
        rentalPeriod: '24 hours'
      },
      {
        name: 'Statement Chandelier',
        description: '150cm+ diameter, dramatic impact',
        price: 950,
        rentalPeriod: '24 hours'
      }
    ],
    additionalOptions: [
      {
        name: 'Custom Rigging',
        description: 'For venues without existing hang points',
        price: 250
      },
      {
        name: 'Dimming Package',
        description: 'Adjustable brightness control',
        price: 100
      },
      {
        name: 'Greenery or Floral Addition',
        description: 'Natural elements added to chandelier',
        price: 'From 150'
      }
    ],
    popularApplications: [
      'Wedding receptions',
      'Luxury dinners',
      'Marquee events',
      'Ballroom functions',
      'High-end corporate events'
    ],
    faqs: [
      {
        question: 'Can chandeliers be installed in a tent?',
        answer: 'Yes, with proper rigging assessment and support structures if needed.'
      },
      {
        question: 'How many chandeliers do I need?',
        answer: 'Typically one large chandelier per 30-40m² or multiple smaller ones for balanced design.'
      }
    ],
    relatedProducts: ['fairy-light-canopy', 'tent-marquee-lighting', 'pendant-light-installations']
  },

  {
    id: 'letter-lights',
    step: '13',
    name: 'Marquee Letter Lights',
    productimg: '/lighting/letter-lights.webp',
    img: '/lighting/letter-lights.webp',
    alt: 'Large illuminated marquee letters spelling LOVE for wedding photo opportunities and decor.',
    description:
      'Make a statement with our large-scale illuminated letters and symbols, perfect for photo opportunities.',
    link: '/products/letter-lights',
    specifications: {
      letterHeight: '1.2m standard (0.8m and 1.5m also available)',
      bulbType: 'Warm white LED globe bulbs',
      construction: 'Lightweight aluminum with white or rustic finish',
      powerConsumption: '30W per letter average',
      freestanding: 'Yes, stable on any flat surface',
      customOptions: 'Full alphabet, numbers, & symbols',
      specialCharacters: '&, #, @, ♥ available',
      maxString: 'Up to 10 characters recommended'
    },
    pricing: [
      {
        name: 'Individual Letters',
        description: 'Single letter or symbol (1.2m)',
        price: 120,
        rentalPeriod: '24 hours'
      },
      {
        name: '3-Letter Package',
        description: 'Common 3-letter combinations (e.g., BAR, MR&MRS)',
        price: 300,
        rentalPeriod: '24 hours'
      },
      {
        name: 'LOVE Package',
        description: 'Our most popular 4-letter combination',
        price: 380,
        rentalPeriod: '24 hours'
      }
    ],
    additionalOptions: [
      {
        name: 'Color Filters',
        description: 'Change bulb color with professional filters',
        price: 10,
        unit: 'per letter'
      },
      {
        name: 'Custom Symbol Creation',
        description: 'For unique shapes not in standard inventory',
        price: 'From 200'
      },
      {
        name: 'Delivery & Collection',
        description: 'Within 20 miles of our location',
        price: 75
      }
    ],
    popularApplications: [
      'Wedding photo areas',
      'Corporate brand displays',
      'Birthday celebrations',
      'Event entrance features',
      'Dance floor surrounds'
    ],
    faqs: [
      {
        question: 'How much space do the letters require?',
        answer: 'Allow approximately 75cm width per 1.2m letter plus 50cm spacing between letters.'
      },
      {
        question: 'Can they be used outdoors?',
        answer: 'Yes, but only in dry conditions or under shelter. They are not waterproof.'
      }
    ],
    relatedProducts: ['festoon-lighting', 'custom-lighting-shows', 'mirror-ball-disco-lighting']
  },

  {
    id: 'pendant-light-installations',
    step: '14',
    name: 'Pendant Light Installations',
    productimg: '/lighting/pendant-light-sqr.webp',
    img: '/lighting/pendant-light-sqr.webp',
    alt: 'Modern geometric pendant lights hanging at various heights creating contemporary design element for stylish events.',
    description:
      'Contemporary hanging light fixtures that create visual interest and define event spaces.',
    link: '/products/pendant-light-installations',
    specifications: {
      styles: 'Geometric, industrial, modern, or minimalist',
      arrangement: 'Clustered, linear, or scattered patterns',
      heights: 'Customizable drop heights',
      bulbType: 'LED designer bulbs',
      customization: 'Color and finish options available',
      installation: 'Professional installation included',
      powerRequirements: 'Standard power access needed',
      venue: 'Suitable for venues with 3m+ ceiling height'
    },
    pricing: [
      {
        name: 'Small Pendant Cluster',
        description: '3-5 pendants in arranged grouping',
        price: 350,
        rentalPeriod: '24 hours'
      },
      {
        name: 'Medium Installation',
        description: '6-10 pendants with custom layout',
        price: 650,
        rentalPeriod: '24 hours'
      },
      {
        name: 'Statement Installation',
        description: '12+ pendants in dramatic arrangement',
        price: 950,
        rentalPeriod: '24 hours'
      }
    ],
    additionalOptions: [
      {
        name: 'Designer Pendants',
        description: 'Premium brand designer fixtures',
        price: 'From 50 per pendant additional'
      },
      {
        name: 'Custom Rigging',
        description: 'For complex ceiling structures',
        price: 250
      },
      {
        name: 'Colored Cord Options',
        description: 'Change standard black cord to match theme',
        price: 15,
        unit: 'per pendant'
      }
    ],
    popularApplications: [
      'Modern wedding receptions',
      'Design-focused corporate events',
      'Restaurant pop-ups',
      'Fashion shows',
      'Gallery openings'
    ],
    faqs: [
      {
        question: 'Can I choose different pendant styles?',
        answer: 'Yes, we can create mixed pendant installations for eclectic designs.'
      },
      {
        question: 'What ceiling height is required?',
        answer: 'Minimum 3m for standard installations, 4m+ recommended for dramatic effect.'
      }
    ],
    relatedProducts: ['chandelier-installations', 'fairy-light-canopy', 'architectural-lighting']
  },

];
export default products;