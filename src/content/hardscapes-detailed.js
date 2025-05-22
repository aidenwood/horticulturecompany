export const services = [
  {
    id: 'paver-stepper-installation',
    step: '01',
    name: 'Paver & Stepper Installation',
    serviceimg: '/img/steppers.webp',
    img: '/img/steppers.webp',
    alt: 'Professional installation of natural stone pavers and stepping stones',
    description: 'Expert installation of pavers, stepping stones, and natural stone pathways creating beautiful and functional outdoor connections',
    link: '/services/paver-stepper-installation',
    serviceDetails: {
      process: 'Site survey → Design layout → Base preparation → Paver installation → Jointing & sealing',
      deliverables: 'Installation plan, material specifications, warranty documentation',
      team: 'Hardscape installer + stone mason + finishing specialist',
      revisionRounds: 2,
      includes: 'Base preparation, sand bedding, and initial settling'
    },
    packages: [
      {
        name: 'Pathway Installation',
        description: 'Natural stone stepping stones and simple pathways up to 30sqm',
        price: 799,
        timeframe: '2-3 days'
      },
      {
        name: 'Comprehensive Paving',
        description: 'Complete paver installation for patios and walkways up to 60sqm',
        price: 1299,
        timeframe: '4-5 days'
      },
      {
        name: 'Premium Stone Installation',
        description: 'Large-scale paving with premium materials for areas over 60sqm',
        price: 1999,
        timeframe: '6-8 days'
      }
    ],
    addons: [
      {
        name: 'Decorative Borders',
        description: 'Contrasting stone borders and design elements',
        price: 399
      },
      {
        name: 'Integrated Lighting',
        description: 'Low-voltage pathway lighting installation',
        price: 549
      }
    ],
    commonUses: [
      'Front entrance walkways',
      'Backyard patio surfaces',
      'Garden pathway connections',
      'Pool area surrounds',
      'Side yard access routes'
    ],
    faqs: [
      {
        question: 'What types of stone do you work with?',
        answer: 'We specialize in local sandstone, granite, bluestone, and sustainable recycled materials'
      },
      {
        question: 'How long do paver installations last?',
        answer: 'With proper installation and maintenance, quality pavers can last 25-50 years'
      }
    ],
    relatedServices: ['timber-retaining-walls', 'patio-construction', 'raised-wooden-pathway']
  },
  {
    id: 'timber-retaining-walls',
    step: '02',
    name: 'Timber Retaining Wall Construction',
    serviceimg: '/img/timber-retaining.webp',
    img: '/img/timber-retaining.webp',
    alt: 'Construction of sustainable timber retaining wall with integrated planting',
    description: 'Sustainable timber retaining wall construction using treated hardwoods and engineered lumber for natural landscape integration',
    link: '/services/timber-retaining-walls',
    serviceDetails: {
      process: 'Site evaluation → Foundation preparation → Post installation → Timber placement → Drainage integration → Finishing',
      deliverables: 'Structural plans, timber specifications, drainage details, maintenance guide',
      team: 'Timber specialist + structural installer + drainage expert',
      revisionRounds: 2,
      includes: 'Treated timber materials, concrete footings, and integrated drainage'
    },
    packages: [
      {
        name: 'Garden Timber Wall',
        description: 'Residential timber retaining walls up to 1m height for garden terracing',
        price: 999,
        timeframe: '3-4 days'
      },
      {
        name: 'Structural Timber System',
        description: 'Engineered timber walls up to 1.8m height with advanced drainage',
        price: 1599,
        timeframe: '5-6 days'
      },
      {
        name: 'Multi-Tier Timber Terracing',
        description: 'Complex stepped timber retaining systems for challenging slopes',
        price: 2299,
        timeframe: '7-10 days'
      }
    ],
    addons: [
      {
        name: 'Integrated Bench Seating',
        description: 'Built-in seating elements along retaining wall tops',
        price: 449
      },
      {
        name: 'Climbing Frame Integration',
        description: 'Timber framework for climbing plants and green wall development',
        price: 349
      }
    ],
    commonUses: [
      'Backyard slope management',
      'Garden bed level creation',
      'Natural boundary definition',
      'Hillside home terracing',
      'Erosion control solutions'
    ],
    faqs: [
      {
        question: 'How long do timber retaining walls last?',
        answer: 'Quality treated timber walls typically last 15-25 years with proper maintenance and drainage'
      },
      {
        question: 'What timber treatment do you use?',
        answer: 'We use H4 treated hardwoods and engineered lumber specifically rated for ground contact and moisture exposure'
      }
    ],
    relatedServices: ['block-retaining-walls', 'garden-bed-construction', 'raised-wooden-pathway']
  },
  {
    id: 'block-retaining-walls',
    step: '03',
    name: 'Block & Stone Retaining Walls',
    serviceimg: '/img/stone-retaining.webp',
    img: '/img/besserblock-retaining.webp',
    alt: 'Construction of engineered block retaining wall with natural stone veneer',
    description: 'Professional block and stone retaining wall construction using concrete blocks, natural stone, and besser blocks for maximum durability',
    link: '/services/block-retaining-walls',
    serviceDetails: {
      process: 'Engineering assessment → Excavation → Foundation → Block laying → Reinforcement → Drainage → Finishing',
      deliverables: 'Engineering certification, construction specifications, drainage plans, warranty documentation',
      team: 'Structural engineer + block mason + reinforcement specialist',
      revisionRounds: 2,
      includes: 'Engineering certification, reinforcement steel, and comprehensive drainage system'
    },
    packages: [
      {
        name: 'Besser Block Retaining Wall',
        description: 'Concrete besser block walls up to 1.5m height with basic drainage',
        price: 1299,
        timeframe: '4-5 days'
      },
      {
        name: 'Stone Retaining Wall',
        description: 'Natural stone retaining walls up to 2m height with reinforcement',
        price: 1999,
        timeframe: '6-8 days'
      },
      {
        name: 'High-End Stone Retaining Wall',
        description: 'Premium stone systems over 2m height with architectural features',
        price: 2999,
        timeframe: '10-14 days'
      }
    ],
    addons: [
      {
        name: 'Natural Stone Veneer',
        description: 'Natural stone facing over concrete block structure',
        price: 799
      },
      {
        name: 'Stepped Terracing Design',
        description: 'Multi-level terraced design with integrated planting areas',
        price: 999
      }
    ],
    commonUses: [
      'Heavy-duty slope stabilization',
      'Driveway level changes',
      'Property boundary walls',
      'Structural foundation support',
      'Long-term landscape solutions'
    ],
    faqs: [
      {
        question: 'What types of blocks do you work with?',
        answer: 'We install concrete blocks, besser blocks, interlocking systems, and natural stone blocks based on structural requirements'
      },
      {
        question: 'Do you handle structural engineering?',
        answer: 'Yes, all block retaining walls include professional structural engineering and council certification'
      }
    ],
    relatedServices: ['timber-retaining-walls', 'patio-construction', 'garden-bed-construction']
  },
  {
    id: 'raised-wooden-pathway',
    step: '04',
    name: 'Raised Wooden Pathway Construction',
    serviceimg: '/img/wood-path.webp',
    img: '/img/wood-path.webp',
    alt: 'Construction of elevated timber boardwalk through garden landscape',
    description: 'Custom raised wooden pathway and boardwalk construction, creating elevated access through gardens and challenging terrain',
    link: '/services/raised-wooden-pathway',
    serviceDetails: {
      process: 'Route planning → Foundation installation → Framework construction → Decking installation → Railing & finishing',
      deliverables: 'Pathway plans, structural specifications, safety compliance documentation',
      team: 'Pathway specialist + structural carpenter + safety inspector',
      revisionRounds: 2,
      includes: 'Concrete footings, weather treatment, and safety railings where required'
    },
    packages: [
      {
        name: 'Garden Boardwalk',
        description: 'Raised timber pathways up to 20 linear meters through garden areas',
        price: 1199,
        timeframe: '3-4 days'
      },
      {
        name: 'Extended Pathway System',
        description: 'Complex raised walkways up to 40 linear meters with multiple access points',
        price: 1799,
        timeframe: '5-7 days'
      },
      {
        name: 'Premium Boardwalk Installation',
        description: 'Extensive raised pathway networks over 40 linear meters with architectural features',
        price: 2699,
        timeframe: '8-12 days'
      }
    ],
    addons: [
      {
        name: 'Integrated Lighting',
        description: 'Low-voltage LED lighting along pathway edges and handrails',
        price: 449
      },
      {
        name: 'Viewing Platform',
        description: 'Expanded platform areas for rest stops and scenic viewing',
        price: 799
      }
    ],
    commonUses: [
      'Garden access through wet areas',
      'Elevated walkways over slopes',
      'Protected plant area access',
      'Backyard feature connections',
      'Accessible pathway solutions'
    ],
    faqs: [
      {
        question: 'What timber species do you use for pathways?',
        answer: 'We use treated hardwoods and composite materials designed for outdoor exposure and durability'
      },
      {
        question: 'Do raised pathways require safety railings?',
        answer: 'Railings are installed based on height and local building codes - we ensure full compliance with safety requirements'
      }
    ],
    relatedServices: ['deck-construction', 'garden-bed-construction', 'timber-retaining-walls']
  },
  {
    id: 'deck-construction',
    step: '05',
    name: 'Deck Construction',
    serviceimg: '/img/decking.webp',
    img: '/img/decking.webp',
    alt: 'Construction of sustainable timber deck with integrated seating',
    description: 'Custom deck construction using sustainable timber and composite materials, creating elevated outdoor living spaces',
    link: '/services/deck-construction',
    serviceDetails: {
      process: 'Design consultation → Structural engineering → Foundation → Framing → Decking installation → Finishing',
      deliverables: 'Structural plans, material specifications, building permits, warranty',
      team: 'Deck builder + structural engineer + finishing carpenter',
      revisionRounds: 2,
      includes: 'Council permits, structural certification, and weather protection treatment'
    },
    packages: [
      {
        name: 'Compact Deck',
        description: 'Residential decks up to 25sqm with standard features',
        price: 1399,
        timeframe: '4-5 days'
      },
      {
        name: 'Premium Deck Package',
        description: 'Feature decks up to 50sqm with integrated elements',
        price: 2199,
        timeframe: '6-8 days'
      },
      {
        name: 'Multi-Level Deck System',
        description: 'Complex elevated decking for challenging sites over 50sqm',
        price: 2999,
        timeframe: '10-14 days'
      }
    ],
    addons: [
      {
        name: 'Integrated Pergola',
        description: 'Attached pergola structure for shade and definition',
        price: 899
      },
      {
        name: 'Built-in Seating',
        description: 'Custom bench seating and storage solutions',
        price: 599
      }
    ],
    commonUses: [
      'Backyard entertaining areas',
      'Pool surrounds and spa decks',
      'Elevated outdoor dining spaces',
      'Challenging slope solutions',
      'Home outdoor room extensions'
    ],
    faqs: [
      {
        question: 'What timber species do you use?',
        answer: 'We prioritize sustainably sourced hardwoods and composite alternatives for longevity'
      },
      {
        question: 'Do you handle structural engineering?',
        answer: 'Yes, all deck construction includes professional structural engineering and certification'
      }
    ],
    relatedServices: ['pergola-construction', 'patio-construction', 'raised-wooden-pathway']
  },
  {
    id: 'pergola-construction',
    step: '06',
    name: 'Pergola Construction',
    serviceimg: '/img/pergolas.webp',  
    img: '/img/pergolas.webp',
    alt: 'Construction of elegant timber pergola with climbing plant integration',
    description: 'Custom pergola construction creating beautiful shade structures and outdoor room definition using quality materials',
    link: '/services/pergola-construction',
    serviceDetails: {
      process: 'Design consultation → Site preparation → Foundation installation → Framework construction → Finishing',
      deliverables: 'Construction plans, material specifications, installation documentation',
      team: 'Pergola specialist + carpenter + foundation installer',
      revisionRounds: 2,
      includes: 'Concrete footings, weather treatment, and climbing plant support'
    },
    packages: [
      {
        name: 'Standard Pergola',
        description: 'Traditional pergola construction up to 20sqm coverage',
        price: 1199,
        timeframe: '3-4 days'
      },
      {
        name: 'Premium Pergola Package',
        description: 'Feature pergolas with integrated elements up to 40sqm',
        price: 1799,
        timeframe: '5-6 days'
      },
      {
        name: 'Architectural Pergola System',
        description: 'Complex pergola structures with multiple zones over 40sqm',
        price: 2399,
        timeframe: '7-10 days'
      }
    ],
    addons: [
      {
        name: 'Climbing Plant Installation',
        description: 'Integrated climbing plants for natural shade development',
        price: 299
      },
      {
        name: 'Outdoor Ceiling Fans',
        description: 'Weather-rated ceiling fan installation',
        price: 399
      }
    ],
    commonUses: [
      'Outdoor dining area shade',
      'Backyard entertaining spaces',
      'Pool area sun protection',
      'Garden room definition',
      'Patio cover structures'
    ],
    faqs: [
      {
        question: 'What materials do you recommend?',
        answer: 'We work with sustainably sourced timber, steel, and composite materials based on design requirements'
      },
      {
        question: 'Can pergolas support heavy climbing plants?',
        answer: 'Yes, our pergolas are engineered to support mature climbing plants and vines'
      }
    ],
    relatedServices: ['deck-construction', 'patio-construction', 'garden-bed-construction']
  },
  {
    id: 'patio-construction',
    step: '07',
    name: 'Patio Construction',
    serviceimg: '/img/patio.webp',
    img: '/img/patio.webp',
    alt: 'Construction of natural stone patio with integrated seating areas',
    description: 'Professional patio construction using premium materials, creating functional outdoor living and entertaining spaces',
    link: '/services/patio-construction',
    serviceDetails: {
      process: 'Site planning → Excavation → Base preparation → Surface installation → Finishing & sealing',
      deliverables: 'Construction plans, material specifications, drainage details, maintenance guide',
      team: 'Patio specialist + stone mason + drainage expert',
      revisionRounds: 2,
      includes: 'Proper drainage, base stabilization, and weather sealing'
    },
    packages: [
      {
        name: 'Standard Patio',
        description: 'Natural stone or concrete patios up to 40sqm',
        price: 1599,
        timeframe: '4-5 days'
      },
      {
        name: 'Premium Patio Package',
        description: 'Feature patios with integrated elements up to 80sqm',
        price: 2399,
        timeframe: '6-8 days'
      },
      {
        name: 'Architectural Patio System',
        description: 'Multi-level patios with complex features over 80sqm',
        price: 3299,
        timeframe: '10-12 days'
      }
    ],
    addons: [
      {
        name: 'Integrated Fire Feature',
        description: 'Built-in fire pit or fireplace installation',
        price: 999
      },
      {
        name: 'Built-in Seating Walls',
        description: 'Integrated seating and storage solutions',
        price: 799
      }
    ],
    commonUses: [
      'Backyard entertaining areas',
      'Pool surrounds and spa areas',
      'Garden focal gathering spaces',
      'Outdoor dining areas',
      'Family recreation spaces'
    ],
    faqs: [
      {
        question: 'What surface materials do you recommend?',
        answer: 'We specialize in natural stone, stamped concrete, and premium pavers suitable for local conditions'
      },
      {
        question: 'How do you ensure proper drainage?',
        answer: 'All patios include integrated drainage systems and proper slope for water management'
      }
    ],
    relatedServices: ['paver-stepper-installation', 'pergola-construction', 'deck-construction']
  },
  {
    id: 'cad-hardscape-design',
    step: '08',
    name: 'Landscape Plan Design',
    serviceimg: '/img/cad-large.webp',
    img: '/img/cad-large.webp',
    alt: 'Landscape designer working on detailed CAD drawing of outdoor entertainment area',
    description: 'Precision CAD design services for complex landscape projects with Australian standards construction documentation',
    link: '/services/cad-hardscape-design',
    serviceDetails: {
      process: 'Site survey → Base plan creation → Hardscape design → Technical detailing → Construction documentation',
      deliverables: 'AutoCAD drawings, technical specifications, construction details, material schedules',
      team: 'CAD specialist + hardscape architect + technical draftsperson',
      revisionRounds: 3,
      includes: 'Site measurement, structural calculations, and permit drawings'
    },
    packages: [
      {
        name: 'Basic Hardscape CAD',
        description: 'Essential CAD drawings for straightforward hardscape projects',
        price: 799,
        timeframe: '4-5 days'
      },
      {
        name: 'Comprehensive CAD Design',
        description: 'Detailed technical drawings for complex hardscape installations',
        price: 1199,
        timeframe: '7-10 days'
      },
      {
        name: 'Commercial CAD Documentation',
        description: 'Full commercial-grade documentation for large hardscape developments',
        price: 1799,
        timeframe: '12-15 days'
      }
    ],
    addons: [
      {
        name: '3D Hardscape Modeling',
        description: 'Digital 3D visualization of proposed hardscape elements',
        price: 299
      },
      {
        name: 'Construction Supervision',
        description: 'Technical oversight during hardscape installation phase',
        price: 1199
      }
    ],
    commonUses: [
      'Residential hardscape planning',
      'Complex home renovations',
      'Multi-phase project planning',
      'Council approval submissions',
      'Contractor collaboration projects'
    ],
    faqs: [
      {
        question: 'What CAD software do you use for hardscaping?',
        answer: 'We work with AutoCAD, SketchUp Pro, and specialized hardscape design software'
      },
      {
        question: 'Can contractors work directly from your plans?',
        answer: 'Yes, our technical documentation is prepared to industry standards for direct construction implementation'
      }
    ],
    relatedServices: ['patio-construction', 'deck-construction', 'timber-retaining-walls']
  },
  {
    id: 'garden-bed-construction',
    step: '09',
    name: 'Garden Bed Construction',
    serviceimg: '/img/garden-bed-construction.jpg',
    img: '/img/garden-bed-construction.jpg',
    alt: 'Construction of raised garden beds with integrated irrigation and drainage',
    description: 'Professional garden bed construction using sustainable materials, creating structured planting areas with proper drainage and soil management',
    link: '/services/garden-bed-construction',
    serviceDetails: {
      process: 'Site assessment → Design layout → Excavation → Edging installation → Soil preparation → Drainage integration',
      deliverables: 'Construction plans, soil analysis, drainage specifications, planting guide',
      team: 'Garden construction specialist + soil expert + irrigation installer',
      revisionRounds: 2,
      includes: 'Quality soil mix, drainage system, and plant-ready preparation'
    },
    packages: [
      {
        name: 'Standard Garden Beds',
        description: 'Raised garden bed construction up to 30sqm with basic edging',
        price: 899,
        timeframe: '2-3 days'
      },
      {
        name: 'Premium Garden System',
        description: 'Integrated garden beds up to 60sqm with irrigation and specialty edging',
        price: 1399,
        timeframe: '4-5 days'
      },
      {
        name: 'Estate Garden Development',
        description: 'Extensive garden bed systems over 60sqm with advanced features',
        price: 2199,
        timeframe: '6-8 days'
      }
    ],
    addons: [
      {
        name: 'Integrated Irrigation',
        description: 'Drip irrigation system installation throughout garden beds',
        price: 549
      },
      {
        name: 'Decorative Mulching',
        description: 'Premium organic mulch application and edging definition',
        price: 299
      }
    ],
    commonUses: [
      'Vegetable and herb gardens',
      'Flower bed installations',
      'Native plant gardens',
      'Front yard landscaping',
      'Backyard garden zones'
    ],
    faqs: [
      {
        question: 'What soil mix do you recommend?',
        answer: 'We provide custom soil blends based on intended plantings, typically including compost, quality topsoil, and drainage materials'
      },
      {
        question: 'How do you handle drainage in garden beds?',
        answer: 'All garden beds include proper drainage systems with gravel base layers and integrated overflow management'
      }
    ],
    relatedServices: ['raised-wooden-pathway', 'paver-stepper-installation', 'timber-retaining-walls']
  },
  {
    id: 'water-feature-construction',
    step: '10',
    name: 'Water Feature Construction',
    serviceimg: '/img/water-feature.webp',
    img: '/img/water-feature.webp',
    alt: 'Construction of natural stone water feature with integrated lighting',
    description: 'Custom water feature design and construction including ponds, fountains, and water walls using natural materials and sustainable systems',
    link: '/services/water-feature-construction',
    serviceDetails: {
      process: 'Design consultation → Excavation → Liner installation → Plumbing → Stone work → Equipment installation → Testing',
      deliverables: 'Design plans, equipment specifications, maintenance guide, warranty documentation',
      team: 'Water feature specialist + plumber + stone mason',
      revisionRounds: 2,
      includes: 'Quality liner systems, circulation pumps, and integrated filtration'
    },
    packages: [
      {
        name: 'Garden Water Feature',
        description: 'Small ponds and fountain features up to 5sqm with basic circulation',
        price: 1399,
        timeframe: '4-5 days'
      },
      {
        name: 'Premium Water System',
        description: 'Complex water features up to 15sqm with advanced filtration and lighting',
        price: 2399,
        timeframe: '7-9 days'
      },
      {
        name: 'Architectural Water Installation',
        description: 'Large-scale water features over 15sqm with custom design elements',
        price: 3699,
        timeframe: '12-15 days'
      }
    ],
    addons: [
      {
        name: 'Underwater Lighting',
        description: 'LED underwater lighting systems for evening ambiance',
        price: 549
      },
      {
        name: 'Fish Habitat Systems',
        description: 'Biological filtration and fish-safe water management',
        price: 799
      }
    ],
    commonUses: [
      'Garden focal point features',
      'Backyard relaxation spaces',
      'Front yard water features',
      'Meditation garden elements',
      'Natural wildlife habitats'
    ],
    faqs: [
      {
        question: 'What maintenance do water features require?',
        answer: 'Regular cleaning, pump maintenance, and seasonal care - we provide comprehensive maintenance guides and ongoing support'
      },
      {
        question: 'Can you install features suitable for fish?',
        answer: 'Yes, we design pond systems with proper depth, filtration, and oxygenation for healthy fish habitats'
      }
    ],
    relatedServices: ['garden-bed-construction', 'patio-construction', 'paver-stepper-installation']
  }
];

export default services;