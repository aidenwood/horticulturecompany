export const services = [
  {
    id: 'ecosystem-maintenance',
    step: '01',
    name: 'Ecosystem Maintenance',
    serviceimg: '/img/ecosystems.webp',
    img: '/img/ecosystems.webp',
    alt: 'Team of maintenance ecologists working on rehabilitating native residential gardens',
    description: 'Comprehensive ecosystem maintenance services for private residential properties focusing on native habitat care',
    link: '/services/ecosystem-maintenance',
    serviceDetails: {
      process: 'Initial site assessment → Ecological analysis → maintenance plan → Implementation → Monitoring',
      deliverables: 'Detailed maintenance plan, plant species list, maintenance schedule, monitoring reports',
      team: 'Senior ecologist + maintenance specialists + planting crew',
      revisionRounds: 3,
      includes: 'Site preparation and 12-month establishment care'
    },
    packages: [
      {
        name: 'Small-Scale Maintenance',
        description: 'Maintenance projects up to 500sqm for residential properties',
        price: 125,
        timeframe: '2-3 hours'
      },
      {
        name: 'Medium-Scale Maintenance',
        description: 'Maintenance projects from 500-2000sqm with diverse native habitat requirements',
        price: 245,
        timeframe: '4-6 hours'
      },
      {
        name: 'Large-Scale Maintenance',
        description: 'Comprehensive maintenance for residential sites over 2000sqm',
        price: 445,
        timeframe: '7-12 hours'
      }
    ],
    addons: [
      {
        name: 'Extended Monitoring Program',
        description: 'Quarterly monitoring and reports for 3 additional years',
        price: 895
      },
      {
        name: 'Habitat Enhancement',
        description: 'Installation of nesting boxes, habitat logs, and specialized wildlife structures',
        price: 1245
      }
    ],
    commonUses: [
      'Native garden maintenance',
      'Wildlife habitat care',
      'Residential bushland management',
      'Private nature reserve upkeep',
      'Established native landscape maintenance'
    ],
    faqs: [
      {
        question: 'How long until we see results?',
        answer: 'Initial improvements are visible within 3-6 months, with substantial recovery in 2-3 years'
      },
      {
        question: 'Do you work with existing garden features?',
        answer: 'Yes, we integrate maintenance around existing hardscaping and landscape features'
      }
    ],
    relatedServices: ['native-planting-consultation', 'horticultural-maintenance', 'seasonal-fertilising-program']
  },
  {
    id: 'turf-installation',
    step: '08',
    name: 'Turf Installation',
    serviceimg: '/img/turf-install.webp',
    img: '/img/turf-install.webp',
    alt: 'Professional installation of native hedging and premium turf areas',
    description: 'Specialist installation of hedging, screening plants, and premium turf solutions for residential properties',
    link: '/services/hedging-turf-installation',
    serviceDetails: {
      process: 'Site assessment → Species selection → Soil preparation → Installation → Establishment care',
      deliverables: 'Planting specifications, installation schedule, care instructions, warranty documentation',
      team: 'Turf specialist + hedging expert + installation crew',
      revisionRounds: 2,
      includes: 'Initial establishment care and 6-month establishment warranty'
    },
    packages: [
      {
        name: 'Hedging Installation',
        description: 'Professional hedging installation up to 50 linear meters',
        price: 245,
        timeframe: '1-2 days'
      },
      {
        name: 'Turf & Hedging Package',
        description: 'Combined turf and hedging installation for residential properties',
        price: 445,
        timeframe: '2-3 days'
      },
      {
        name: 'Complete Screening Solution',
        description: 'Comprehensive privacy screening and turf installation for large properties',
        price: 745,
        timeframe: '3-4 days'
      }
    ],
    addons: [
      {
        name: 'Irrigation Integration',
        description: 'Automated irrigation system for new installations',
        price: 395
      },
      {
        name: 'Soil Enhancement Program',
        description: 'Premium soil preparation and organic conditioning',
        price: 295
      }
    ],
    commonUses: [
      'Privacy screening and boundary definition',
      'Formal garden structure and organization',
      'Lawn replacement with premium turf varieties',
      'Property enhancement and value addition',
      'Functional landscape zoning'
    ],
    faqs: [
      {
        question: 'What types of turf do you install?',
        answer: 'We specialize in premium native and adapted turf varieties suitable for local climate conditions'
      },
      {
        question: 'How quickly do hedges establish?',
        answer: 'Most hedging plants establish within 6-12 months, with full screening achieved in 2-3 years'
      }
    ],
    relatedServices: ['landscape-design', 'irrigation-services', 'horticultural-maintenance']
  },
  {
    id: 'seasonal-fertilising-program',
    step: '02',
    name: 'Seasonal Fertilising Program',
    serviceimg: '/img/fert.jpg',
    img: '/img/fert.jpg',
    alt: 'Horticulturist applying organic fertiliser to native garden beds',
    description: 'Customized seasonal fertilising programs using premium organic inputs tailored to your landscape needs',
    link: '/services/seasonal-fertilising-program',
    serviceDetails: {
      process: 'Soil testing → Nutrient analysis → Custom plan development → Scheduled applications → Monitoring',
      deliverables: 'Soil test results, fertiliser schedule, application reports, follow-up assessments',
      team: 'Soil scientist + horticultural specialists',
      revisionRounds: 2,
      includes: 'Quarterly soil pH testing and organic matter assessment'
    },
    packages: [
      {
        name: 'Small Fertilising Program',
        description: 'Quarterly applications for residential gardens up to 400sqm',
        price: 125,
        timeframe: '1-2 hour plus fertiliser'
      },
      {
        name: 'Medium Fertilising Program',
        description: 'Bi-monthly applications with specialized amendments for gardens up to 1000sqm',
        price: 245,
        timeframe: '3 hour plus fertiliser'
      },
      {
        name: 'Large Fertilising Program',
        description: 'Comprehensive monthly applications for large properties over 1000sqm',
        price: 445,
        timeframe: '4 hour plus fertiliser'
      }
    ],
    addons: [
      {
        name: 'Microbial Soil Inoculation',
        description: 'Specialized beneficial fungi and bacteria applications',
        price: 195
      },
      {
        name: 'Deep Root Fertilising',
        description: 'Targeted sub-surface fertilising for established trees',
        price: 295
      }
    ],
    commonUses: [
      'Premium residential gardens',
      'Native plant collections requiring specialized nutrition',
      'Established mature landscapes',
      'High-performance garden beds',
      'Specialized horticultural displays'
    ],
    faqs: [
      {
        question: 'Are your fertilisers organic?',
        answer: 'Yes, we exclusively use certified organic and sustainably sourced inputs'
      },
      {
        question: 'How do you prevent nutrient runoff?',
        answer: 'Our programs include timing and application methods specifically designed to prevent environmental contamination'
      }
    ],
    relatedServices: ['horticultural-maintenance', 'soil-remediation', 'composting-systems']
  },
  {
    id: 'horticultural-maintenance',
    step: '04',
    name: 'Horticultural Maintenance',
    serviceimg: '/img/horti-maintenance.jpg',
    img: '/img/horti-maintenance.jpg',
    alt: 'Professional gardener performing detailed maintenance on native garden bed',
    description: 'Premium horticultural maintenance plans ensuring thriving landscapes year-round with expert plant care and sustainable practices',
    link: '/services/horticultural-maintenance',
    serviceDetails: {
      process: 'Site assessment → Maintenance plan development → Schedule creation → Implementation → Monitoring',
      deliverables: 'Detailed maintenance calendar, monthly reports, plant health assessments',
      team: 'Maintenance manager + qualified horticulturists',
      revisionRounds: 2,
      includes: 'Organic pest management and seasonal adjustments'
    },
    packages: [
      {
        name: 'Essential Garden Care',
        description: 'Professional maintenance for residential gardens up to 400sqm',
        price: 245,
        timeframe: '3-4 hours'
      },
      {
        name: 'Premium Garden Care',
        description: 'Comprehensive maintenance for established gardens up to 800sqm',
        price: 445,
        timeframe: '6-8 hours'
      },
      {
        name: 'Estate Garden Program',
        description: 'Expert care for large residential properties over 800sqm',
        price: 745,
        timeframe: '12-14 hours'
      }
    ],
    addons: [
      {
        name: 'Specialized Plant Care',
        description: 'Targeted care for rare and specialty plant collections',
        price: 345
      },
      {
        name: 'Irrigation Management',
        description: 'Regular system checks and seasonal adjustments',
        price: 295
      }
    ],
    commonUses: [
      'Established residential gardens requiring expert care',
      'Native plant collections and specialty gardens',
      'High-end residential landscapes',
      'Heritage and mature garden preservation',
      'Complex mixed plantings and garden rooms'
    ],
    faqs: [
      {
        question: 'Can you work with existing maintenance teams?',
        answer: 'Yes, we can collaborate with or supplement current maintenance staff'
      },
      {
        question: 'What happens if plants fail?',
        answer: 'Our maintenance plans include replacement of any plants that fail due to improper maintenance'
      }
    ],
    relatedServices: ['seasonal-fertilising-program', 'pest-management', 'irrigation-services']
  },
  {
    id: 'native-planting-consultation',
    step: '05',
    name: 'Native Plant Consultation',
    serviceimg: '/img/natives.jpg',
    img: '/img/natives.jpg',
    alt: 'Botanist discussing native plant selection with client in garden setting',
    description: 'Expert consultation on native plant selection and ecosystem design tailored to your specific site conditions and wildlife goals',
    link: '/services/native-planting-consultation',
    serviceDetails: {
      process: 'Site assessment → Soil analysis → Microclimate mapping → Plant selection → Implementation guidance',
      deliverables: 'Detailed plant list, placement plan, care instructions, sourcing information',
      team: 'Native plant specialist + landscape designer',
      revisionRounds: 3,
      includes: 'Follow-up support and seasonal advice'
    },
    packages: [
      {
        name: 'Essential Consultation',
        description: 'Focused consultation with native plant recommendations for residential gardens',
        price: 125,
        timeframe: '1-2 hours'
      },
      {
        name: 'Comprehensive Planting Plan',
        description: 'Detailed consultation with complete native planting design and specifications',
        price: 245,
        timeframe: '2-4 hours'
      },
      {
        name: 'Ecosystem Design Package',
        description: 'Full-scale native ecosystem design creating authentic plant communities',
        price: 445,
        timeframe: '4-6 hours'
      }
    ],
    addons: [
      {
        name: 'Plant Sourcing Service',
        description: 'Procurement of specified native plants from quality local nurseries',
        price: 195
      },
      {
        name: 'Wildlife Habitat Enhancement',
        description: 'Additional focus on creating specific native wildlife habitat',
        price: 295
      }
    ],
    commonUses: [
      'New native garden establishment',
      'Converting traditional gardens to native landscapes',
      'Wildlife habitat creation and enhancement',
      'Sustainable low-maintenance garden development',
      'Native plant collection curation'
    ],
    faqs: [
      {
        question: 'Can you recommend plants that attract specific wildlife?',
        answer: 'Yes, we specialize in creating targeted habitat for native birds, butterflies, and beneficial insects'
      },
      {
        question: 'Do you provide ongoing support?',
        answer: 'All consultations include 12 months of email support and seasonal care reminders'
      }
    ],
    relatedServices: ['ecosystem-maintenance', 'landscape-design', 'habitat-creation']
  },
  {
    id: 'landscape-design',
    step: '06',
    name: 'Landscape Design',
    serviceimg: '/img/landscaping.jpg',
    img: '/img/landscaping.jpg',
    alt: 'Landscape architect reviewing detailed landscape plans with client',
    description: 'Creative and sustainable landscape design services blending aesthetic beauty with ecological function and native plant integration',
    link: '/services/landscape-design',
    serviceDetails: {
      process: 'Client briefing → Site analysis → Concept development → Detailed design → Implementation planning',
      deliverables: 'Concept plans, detailed drawings, plant schedules, material specifications',
      team: 'Landscape architect + design associates',
      revisionRounds: 3,
      includes: 'Digital visualization and walkthrough'
    },
    packages: [
      {
        name: 'Garden Design Package',
        description: 'Comprehensive design for residential gardens up to 500sqm',
        price: 945,
        timeframe: '3-4 weeks'
      },
      {
        name: 'Estate Landscape Design',
        description: 'Complete landscape design with detailed plans for properties up to 1000sqm',
        price: 1345,
        timeframe: '6-8 weeks'
      },
      {
        name: 'Master Planning Package',
        description: 'Extensive master planning for large residential estates over 1000sqm',
        price: 1945,
        timeframe: '10-12 weeks'
      }
    ],
    addons: [
      {
        name: '3D Visualization',
        description: 'Photorealistic renders of proposed landscape',
        price: 195
      },
      {
        name: 'Construction Documentation',
        description: 'Detailed technical drawings for contractors',
        price: 345
      }
    ],
    commonUses: [
      'New home landscape design',
      'Garden renovation and modernization',
      'Native landscape integration',
      'Sustainable garden development',
      'Multi-functional outdoor space planning'
    ],
    faqs: [
      {
        question: 'Can you work with our architect?',
        answer: 'Yes, we regularly collaborate with architects and other design professionals'
      },
      {
        question: 'Do you oversee installation?',
        answer: 'We offer design implementation services to ensure your design is realized correctly'
      }
    ],
    relatedServices: ['softscape-design-installation', 'native-planting-consultation', 'irrigation-design']
  },
  {
    id: 'softscape-design-installation',
    step: '07',
    name: 'Garden Installation & Planting',
    serviceimg: '/img/softscape-design.jpg',
    img: '/img/softscape-design.jpg',
    alt: 'Crew installing carefully selected native plants in prepared garden beds',
    description: 'Expert design and installation of garden beds, plantings, and living landscape elements with focus on native species and sustainable practices',
    link: '/services/softscape-design-installation',
    serviceDetails: {
      process: 'Site preparation → Soil improvement → Plant layout → Installation → Finishing & mulching',
      deliverables: 'Planting plan, soil preparation specifications, installation documentation',
      team: 'Planting specialist + installation crew',
      revisionRounds: 2,
      includes: 'Initial establishment care and 3-month warranty'
    },
    packages: [
      {
        name: 'Garden Bed Installation',
        description: 'Professional installation of prepared planting beds up to 50sqm',
        price: 445,
        timeframe: '1-2 days'
      },
      {
        name: 'Complete Garden Makeover',
        description: 'Comprehensive garden renovation and planting for areas up to 300sqm',
        price: 945,
        timeframe: '3-4 days'
      },
      {
        name: 'Estate Garden Installation',
        description: 'Large-scale professional planting implementation for properties over 300sqm',
        price: 1445,
        timeframe: '3-5 days'
      }
    ],
    addons: [
      {
        name: 'Premium Soil Preparation',
        description: 'Advanced soil remediation and organic amendment program',
        price: 195
      },
      {
        name: 'Extended Plant Guarantee',
        description: '12-month plant replacement guarantee with ongoing care',
        price: 645
      }
    ],
    commonUses: [
      'New garden establishment and creation',
      'Comprehensive garden renovations',
      'Native habitat installation',
      'Sustainable landscape creation',
      'Specialty garden development'
    ],
    faqs: [
      {
        question: 'Do you supply the plants?',
        answer: 'Yes, we source high-quality plants from trusted local nurseries and our own growing facilities'
      },
      {
        question: 'How long is the establishment period?',
        answer: 'Typically 3-6 months depending on season, with proper care required during this time'
      }
    ],
    relatedServices: ['landscape-design', 'seasonal-fertilising-program', 'irrigation-services']
  },
  {
    id: 'tree-pruning-management',
    step: '03',
    name: 'Tree Pruning & Management',
    serviceimg: '/img/pruning.jpg',
    img: '/img/pruning.jpg',
    alt: 'Arborist safely pruning large native tree with professional equipment',
    description: 'Expert tree pruning and management services focusing on tree health, safety, and natural form',
    link: '/services/tree-pruning-management',
    serviceDetails: {
      process: 'Tree assessment → Pruning plan → Safety protocol → Implementation → Debris management',
      deliverables: 'Arborist report, pruning specifications, before/after documentation',
      team: 'Certified arborist + climbing specialists + ground crew',
      revisionRounds: 1,
      includes: 'Complete cleanup and responsible green waste recycling'
    },
    packages: [
      {
        name: 'Small Tree Pruning Service',
        description: 'Professional pruning for individual specimen trees',
        price: 345,
        timeframe: '4-6 hours'
      },
      {
        name: 'Medium Tree Pruning Service',
        description: 'Tree management for properties with 5-10 trees',
        price: 545,
        timeframe: '7-12 hours'
      },
      {
        name: 'Large Tree Pruning Service',
        description: 'Comprehensive pruning and tree care for properties with 10+ trees',
        price: 945,
        timeframe: '2-3 days'
      }
    ],
    addons: [
      {
        name: 'Tree Health Treatment',
        description: 'Pest and disease diagnosis and organic treatment',
        price: 195
      },
      {
        name: 'Canopy Thinning',
        description: 'Specialized thinning for wind and light penetration',
        price: 445
      }
    ],
    commonUses: [
      'Residential tree health and safety',
      'Vista enhancement and view corridor creation',
      'Storm damage prevention and repair',
      'Heritage tree preservation and care',
      'Mature landscape rejuvenation'
    ],
    faqs: [
      {
        question: 'Are your arborists certified?',
        answer: 'All our arborists hold AQF Level 5 certification and current industry credentials'
      },
      {
        question: 'Do you handle council permits?',
        answer: 'Yes, we manage the entire permit application process for protected trees'
      }
    ],
    relatedServices: ['tree-health-assessment', 'storm-preparation', 'habitat-creation']
  }
];

export default services;