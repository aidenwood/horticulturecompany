export const services = [
  {
    id: 'ecosystem-restoration',
    step: '01',
    name: 'Ecosystem Restoration',
    serviceimg: '/img/ecosystem-restoration.jpg',
    img: '/img/ecosystem-restoration.jpg',
    alt: 'Team of restoration ecologists working on rehabilitating native coastal dunes',
    description: 'Comprehensive ecosystem rehabilitation services restoring degraded landscapes to thriving native habitats',
    link: '/services/ecosystem-restoration',
    serviceDetails: {
      process: 'Initial site assessment → Ecological analysis → Restoration plan → Implementation → Monitoring',
      deliverables: 'Detailed restoration plan, plant species list, maintenance schedule, monitoring reports',
      team: 'Senior ecologist + restoration specialists + planting crew',
      revisionRounds: 3,
      includes: 'Site preparation and 12-month establishment care'
    },
    packages: [
      {
        name: 'Small-Scale Restoration',
        description: 'Restoration projects up to 500sqm (residential or small commercial sites)',
        price: 245,
        timeframe: '2-3 hours'
      },
      {
        name: 'Medium-Scale Restoration',
        description: 'Restoration projects from 500-2000sqm with diverse habitat requirements',
        price: 445,
        timeframe: '4-6 hours'
      },
      {
        name: 'Large-Scale Restoration',
        description: 'Comprehensive restoration for sites over 2000sqm with complex ecological requirements',
        price: 895,
        timeframe: '7-12 hours'
      }
    ],
    addons: [
      {
        name: 'Extended Monitoring Program',
        description: 'Quarterly monitoring and reports for 3 additional years',
        price: 1245
      },
      {
        name: 'On-Going Habitat Enhancement',
        description: 'Installation of nesting boxes, habitat logs, and specialized wildlife structures',
        price: 1445
      }
    ],
    commonUses: [
      'Degraded bushland regeneration',
      'Coastal dune rehabilitation',
      'Wetland restoration',
      'Riparian zone recovery',
      'Fire-damaged landscape rehabilitation'
    ],
    faqs: [
      {
        question: 'How long until we see results?',
        answer: 'Initial improvements are visible within 3-6 months, with substantial recovery in 2-3 years'
      },
      {
        question: 'Do you work with local councils?',
        answer: 'Yes, we regularly partner with Gold Coast and surrounding councils on public land restoration'
      }
    ],
    relatedServices: ['native-planting-consultation', 'bush-regeneration', 'wetland-conservation']
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
        price: 245,
        timeframe: '1-2 hour plus fertiliser'
      },
      {
        name: 'Medium Fertilising Program',
        description: 'Bi-monthly applications with specialized amendments for gardens up to 1000sqm',
        price: 345,
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
        price: 245
      },
      {
        name: 'Deep Root Fertilising',
        description: 'Targeted sub-surface fertilising for established trees',
        price: 345
      }
    ],
    commonUses: [
      'Residential gardens',
      'Native plant collections',
      'Commercial landscapes',
      'Public parklands',
      'Food production areas'
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
        price: 445,
        timeframe: '4-6 hours'
      },
      {
        name: 'Medium Tree Pruning Service',
        description: 'Tree management for properties with 5-10 trees',
        price: 645,
        timeframe: '7-12 hours'
      },
      {
        name: 'Large Tree Pruning Service',
        description: 'Comprehensive pruning and tree care for properties with 10+ trees',
        price: 1445,
        timeframe: '2-3 days'
      }
    ],
    addons: [
      {
        name: 'Tree Health Treatment',
        description: 'Pest and disease diagnosis and organic treatment',
        price: 245
      },
      {
        name: 'Canopy Thinning',
        description: 'Specialized thinning for wind and light penetration',
        price: 645
      }
    ],
    commonUses: [
      'Hazard reduction',
      'Vista pruning',
      'Storm damage repair',
      'Fruit tree management',
      'Native tree rejuvenation'
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
  },
  {
    id: 'horticultural-maintenance',
    step: '04',
    name: 'Horticultural Maintenance',
    serviceimg: '/img/horti-maintenance.jpg',
    img: '/img/horti-maintenance.jpg',
    alt: 'Professional gardener performing detailed maintenance on native garden bed',
    description: 'Premium horticultural maintenance plans ensuring thriving spaces all year round with sustainable practices',
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
        name: 'Essential Maintenance',
        description: 'Maintenance for residential gardens up to 400sqm',
        price: 445,
        timeframe: '3-4 hours'
      },
      {
        name: 'Premium Garden Care',
        description: 'Maintenance for gardens up to 800sqm',
        price: 845,
        timeframe: '6-8 hours'
      },
      {
        name: 'Estate Maintenance Program',
        description: 'Comprehensive care for properties over 800sqm',
        price: 1245,
        timeframe: '12-14 hours'
      }
    ],
    addons: [
      {
        name: 'Seasonal Color Rotation',
        description: 'Quarterly flowering display changes',
        price: 845
      },
      {
        name: 'Irrigation Management',
        description: 'Regular system checks and seasonal adjustments',
        price: 845
      }
    ],
    commonUses: [
      'Residential gardens',
      'Commercial properties',
      'Public spaces',
      'Native plant collections',
      'Resort landscapes'
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
    description: 'Expert consultation on native plant selection and ecosystem design tailored to your specific site conditions',
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
        name: 'Basic Consultation',
        description: 'Single consultation with basic plant recommendations for small gardens',
        price: 145,
        timeframe: '1-2 hours'
      },
      {
        name: 'Comprehensive Planting Plan',
        description: 'Detailed consultation with complete planting design and specifications',
        price: 345,
        timeframe: '2-4 hours'
      },
      {
        name: 'Ecosystem Design Package',
        description: 'Full-scale ecosystem design mimicking natural plant communities',
        price: 845,
        timeframe: '4-6 hours'
      }
    ],
    addons: [
      {
        name: 'Plant Sourcing Service',
        description: 'Procurement of specified native plants from quality nurseries',
        price: 245
      },
      {
        name: 'Wildlife Habitat Enhancement',
        description: 'Additional focus on creating specific wildlife habitat',
        price: 345
      }
    ],
    commonUses: [
      'New garden establishment',
      'Garden renovations',
      'Property development',
      'Habitat creation',
      'Sustainable landscapes'
    ],
    faqs: [
      {
        question: 'Can you recommend plants that attract specific wildlife?',
        answer: 'Yes, we specialize in creating targeted habitat for birds, butterflies, and native pollinators'
      },
      {
        question: 'Do you provide ongoing support?',
        answer: 'All consultations include 12 months of email support and seasonal care reminders'
      }
    ],
    relatedServices: ['ecosystem-restoration', 'landscape-design', 'habitat-creation']
  },
  {
    id: 'landscape-design',
    step: '06',
    name: 'Landscape Design',
    serviceimg: '/img/landscaping.jpg',
    img: '/img/landscaping.jpg',
    alt: 'Landscape architect reviewing detailed landscape plans with client',
    description: 'Creative and sustainable landscape design services blending aesthetic beauty with ecological function',
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
        name: 'Concept Design',
        description: 'Initial design concepts for residential gardens up to 500sqm',
        price: 1245,
        timeframe: '3-4 weeks'
      },
      {
        name: 'Comprehensive Design',
        description: 'Complete landscape design with detailed plans for properties up to 1000sqm',
        price: 1645,
        timeframe: '6-8 weeks'
      },
      {
        name: 'Master Planning',
        description: 'Extensive master planning for estates and large properties over 1000sqm',
        price: 2445,
        timeframe: '10-12 weeks'
      }
    ],
    addons: [
      {
        name: '3D Visualization',
        description: 'Photorealistic renders of proposed landscape',
        price: 245
      },
      {
        name: 'Construction Documentation',
        description: 'Detailed technical drawings for contractors',
        price: 445
      }
    ],
    commonUses: [
      'Residential gardens',
      'Commercial properties',
      'Public spaces',
      'Resort developments',
      'Community projects'
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
    relatedServices: ['hardscape-design', 'softscape-design', 'irrigation-design']
  },
  {
    id: 'softscape-design-installation',
    step: '07',
    name: 'Softscape Design & Installation',
    serviceimg: '/img/softscape-design.jpg',
    img: '/img/softscape-design.jpg',
    alt: 'Crew installing carefully selected native plants in prepared garden beds',
    description: 'Expert design and installation of garden beds, plantings, and living landscape elements',
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
        description: 'Installation of prepared planting beds up to 50sqm',
        price: 645,
        timeframe: '1-2 days'
      },
      {
        name: 'Complete Garden Makeover',
        description: 'Comprehensive softscape renovation for areas up to 300sqm',
        price: 1645,
        timeframe: '3-4 days'
      },
      {
        name: 'Estate Garden Makeover',
        description: 'Large-scale planting implementation for properties over 300sqm',
        price: 2445,
        timeframe: '3-5 days'
      }
    ],
    addons: [
      {
        name: 'Premium Soil Preparation',
        description: 'Advanced soil remediation and amendment program',
        price: 245
      },
      {
        name: 'Extended Plant Maintanence',
        description: '12-month plant replacement guarantee',
        price: 1245
      }
    ],
    commonUses: [
      'New garden establishment',
      'Garden renovations',
      'Seasonal color displays',
      'Native habitat creation',
      'Edible landscapes'
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
    id: 'hardscape-design-installation',
    step: '08',
    name: 'Hardscape Design & Installation',
    serviceimg: '/img/hardscape-design.jpg',
    img: '/img/hardscape-design.jpg',
    alt: 'Construction of elegant outdoor entertainment area with sustainable materials',
    description: 'Professional design and construction of patios, walkways, and outdoor living spaces using sustainable materials',
    link: '/services/hardscape-design-installation',
    serviceDetails: {
      process: 'Design consultation → CAD development → Material selection → Construction → Finishing',
      deliverables: 'Detailed plans, material specifications, construction documentation',
      team: 'Hardscape designer + construction manager + skilled installers',
      revisionRounds: 2,
      includes: 'Council approvals and engineering certification'
    },
    packages: [
      {
        name: 'Basic Hardscape Elements',
        description: 'Pathways, small patios, and garden edging up to 30sqm',
        price: 1245,
        timeframe: '2-3 days'
      },
      {
        name: 'Outdoor Living Package',
        description: 'Complete outdoor entertainment area up to 60sqm',
        price: 2445,
        timeframe: '4-6 days'
      },
      {
        name: 'Premium Estate Hardscape',
        description: 'Comprehensive hardscape development for large properties',
        price: 3445,
        timeframe: '8-12 days'
      }
    ],
    addons: [
      {
        name: 'Outdoor Lighting System',
        description: 'Integrated low-voltage landscape lighting',
        price: 1445
      },
      {
        name: 'Water Feature Integration',
        description: 'Custom designed water feature installation',
        price: 1445
      }
    ],
    commonUses: [
      'Outdoor entertainment areas',
      'Garden pathways',
      'Retaining walls',
      'Pool surrounds',
      'Driveway enhancements'
    ],
    faqs: [
      {
        question: 'Do you handle council approvals?',
        answer: 'Yes, our service includes managing all necessary permits and approvals'
      },
      {
        question: 'What sustainable materials do you use?',
        answer: 'We prioritize permeable surfaces, recycled materials, and locally sourced stone'
      }
    ],
    relatedServices: ['landscape-design', 'outdoor-kitchens', 'structural-elements']
  },
  {
    id: 'bush-regeneration',
    step: '09',
    name: 'Bush Regeneration',
    serviceimg: '/img/softscape-design.jpg',
    img: '/img/softscape-design.jpg',
    alt: 'Team removing invasive species and restoring native vegetation in bushland area',
    description: 'Specialized regeneration of degraded bushland through weed management and assisted natural regeneration',
    link: '/services/bush-regeneration',
    serviceDetails: {
      process: 'Site assessment → Weed mapping → Strategic planning → Implementation → Monitoring',
      deliverables: 'Regeneration plan, weed management strategy, progress reports',
      team: 'Bush regeneration specialists + field crew',
      revisionRounds: 2,
      includes: 'Photo monitoring and ecological assessment'
    },
    packages: [
      {
        name: 'Initial Restoration',
        description: 'Primary weed control and initial regeneration for areas up to 1000sqm',
        price: 445,
        timeframe: '3-4 hours'
      },
      {
        name: 'Comprehensive Regeneration',
        description: 'Intensive regeneration program for areas up to 5000sqm',
        price: 1245,
        timeframe: '10-12 hours'
      },
      {
        name: 'Long-term Rehabilitation',
        description: 'Extended regeneration program for large bushland areas',
        price: 2445,
        timeframe: '24-26 hours'
      }
    ],
    addons: [
      {
        name: 'Supplementary Planting',
        description: 'Strategic planting of key native species to enhance regeneration',
        price: 845
      },
      {
        name: 'Fire Management Integration',
        description: 'Incorporating fire management strategies into regeneration',
        price: 2445
      }
    ],
    commonUses: [
      'Degraded bushland',
      'Property boundaries',
      'Creek lines',
      'Conservation areas',
      'Lifestyle blocks'
    ],
    faqs: [
      {
        question: 'How long until the bushland recovers?',
        answer: 'Initial recovery is visible within 6-12 months, with substantial regeneration in 3-5 years'
      },
      {
        question: 'Do you use herbicides?',
        answer: 'We minimize chemical use through targeted application on invasive species only when necessary'
      }
    ],
    relatedServices: ['ecosystem-restoration', 'weed-management', 'fire-management']
  },
  {
    id: 'wetland-conservation',
    step: '10',
    name: 'Wetland Conservation',
    serviceimg: '/img/softscape-design.jpg',
    img: '/img/softscape-design.jpg',
    alt: 'Ecologists restoring native wetland with appropriate aquatic and marginal species',
    description: 'Expert design, restoration, and management of natural and constructed wetland systems',
    link: '/services/wetland-conservation',
    serviceDetails: {
      process: 'Hydrological assessment → Design → Construction/Restoration → Planting → Monitoring',
      deliverables: 'Wetland design, plant species list, water quality parameters, monitoring protocol',
      team: 'Wetland ecologist + water management specialists + installation team',
      revisionRounds: 2,
      includes: 'Water quality testing and aquatic ecosystem assessment'
    },
    packages: [
      {
        name: 'Small Wetland Creation',
        description: 'Design and installation of small wetland features up to 100sqm',
        price: 1445,
        timeframe: '2-3 days'
      },
      {
        name: 'Wetland Restoration',
        description: 'Rehabilitation of degraded wetlands up to 500sqm',
        price: 2445,
        timeframe: '5-6 days'
      },
      {
        name: 'Comprehensive Wetland System',
        description: 'Complete wetland design and implementation for large properties',
        price: 3445,
        timeframe: '7-8 days'
      }
    ],
    addons: [
      {
        name: 'Water Quality Management',
        description: 'Ongoing water testing and remediation program',
        price: 1445
      },
      {
        name: 'Wildlife Habitat Enhancement',
        description: 'Specialized features for target wildlife species',
        price: 1445
      }
    ],
    commonUses: [
      'Natural wetland restoration',
      'Stormwater management',
      'Water purification',
      'Wildlife habitat creation',
      'Flood mitigation'
    ],
    faqs: [
      {
        question: 'Do wetlands attract mosquitoes?',
        answer: 'Properly designed wetlands support predators that control mosquito populations'
      },
      {
        question: 'How much maintenance do wetlands require?',
        answer: 'After establishment, healthy wetlands require quarterly monitoring and minimal intervention'
      }
    ],
    relatedServices: ['ecosystem-restoration', 'water-management', 'habitat-creation']
  },
  {
    id: 'cad-landscape-design',
    step: '11',
    name: 'CAD Landscape Design',
    serviceimg: '/img/softscape-design.jpg',
    img: '/img/softscape-design.jpg',
    alt: 'Landscape architect working on detailed CAD drawing of property landscape',
    description: 'Precision CAD design services for complex landscape projects with detailed technical specifications',
    link: '/services/cad-landscape-design',
    serviceDetails: {
      process: 'Site survey → Base plan creation → Design development → Technical detailing → Final documentation',
      deliverables: 'AutoCAD drawings, technical specifications, construction details, planting plans',
      team: 'CAD specialist + landscape architect + technical draftsperson',
      revisionRounds: 3,
      includes: 'Site measurement and digital terrain modeling'
    },
    packages: [
      {
        name: 'Basic CAD Package',
        description: 'Essential CAD drawings for straightforward residential projects',
        price: 845,
        timeframe: '3-4 days'
      },
      {
        name: 'Comprehensive CAD Design',
        description: 'Detailed technical drawings for complex residential landscapes',
        price: 1245,
        timeframe: '6-8 days'
      },
      {
        name: 'Commercial CAD Documentation',
        description: 'Full commercial-grade documentation for large projects and developments',
        price: 2445,
        timeframe: '10-12 days'
      }
    ],
    addons: [
      {
        name: '3D Modeling',
        description: 'Digital 3D visualization of designed landscape',
        price: 245
      },
      {
        name: 'Construction Supervision',
        description: 'Technical oversight during installation phase',
        price: 2445
      }
    ],
    commonUses: [
      'Complex residential designs',
      'Commercial developments',
      'Public space planning',
      'Municipal projects',
      'Developer submissions'
    ],
    faqs: [
      {
        question: 'What CAD software do you use?',
        answer: 'We work with AutoCAD, Vectorworks, and specialized landscape design software'
      },
      {
        question: 'Can contractors work directly from your plans?',
        answer: 'Yes, our technical documentation is prepared to industry standards for direct implementation'
      }
    ],
    relatedServices: ['landscape-design', 'hardscape-design-installation', 'engineering-services']
  },
  {
    id: 'outdoor-entertainment-areas',
    step: '12',
    name: 'Outdoor Entertainment Areas',
    serviceimg: '/landscaping/outdoor-entertainment.webp',
    img: '/landscaping/outdoor-entertainment.webp',
    alt: 'Beautifully designed outdoor kitchen and entertainment area with native landscaping',
    description: 'Custom design and construction of premium outdoor living spaces that blend with the natural environment',
    link: '/services/outdoor-entertainment-areas',
    serviceDetails: {
      process: 'Client consultation → Design development → Material selection → Construction → Landscaping integration',
      deliverables: 'Design plans, material specifications, construction documentation, lighting plan',
      team: 'Outdoor living specialist + construction manager + landscape designer',
      revisionRounds: 3,
      includes: 'Council approvals and engineering certification'
    },
    packages: [
      {
        name: 'Courtyard Entertainment',
        description: 'Intimate outdoor entertaining space up to 40sqm',
        price: 2445,
        timeframe: '6-8 days'
      },
      {
        name: 'Premium Outdoor Living',
        description: 'Comprehensive entertainment area with multiple features up to 80sqm',
        price: 3445,
        timeframe: '8-12 days'
      },
      {
        name: 'Luxury Estate Entertainment',
        description: 'Extensive outdoor living environment with premium features',
        price: 4445,
        timeframe: '12-16 days'
      }
    ],
    addons: [
      {
        name: 'Outdoor Kitchen',
        description: 'Custom designed outdoor cooking facilities',
        price: 2445
      },
      {
        name: 'Fire Feature',
        description: 'Integrated fire pit or fireplace installation',
        price: 1245
      }
    ],
    commonUses: [
      'Family entertaining',
      'Alfresco dining areas',
      'Pool surrounds',
      'Outdoor relaxation spaces',
      'Multi-functional outdoor rooms'
    ],
    faqs: [
      {
        question: 'How do you incorporate sustainable practices?',
        answer: 'We prioritize permeable surfaces, local materials, rainwater harvesting, and energy-efficient lighting'
      },
      {
        question: 'Can you work with challenging terrain?',
        answer: 'Yes, we specialize in creating functional outdoor spaces on sloped and complex sites'
      }
    ],
    relatedServices: ['hardscape-design-installation', 'landscape-design', 'outdoor-structures']
  }


];

export default services;