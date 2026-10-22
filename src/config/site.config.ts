/**
 * Knightdale Lawn Care - Central Site Configuration
 * 
 * Defines business identity, service boundaries, lead collection state,
 * and design tokens.
 * 
 * IMPORTANT: Lead collection is DISABLED by default until real provider
 * relationships and delivery channels are finalized.
 */

export interface ServiceOption {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  commonNeeds: string[];
  seasonalWindow: string;
  iconName: string;
}

export interface TownCoverage {
  id: string;
  name: string;
  zip: string;
  county: string;
  highlights: string[];
  subdivisions: string[];
  overview: string;
}

export interface SiteConfig {
  site: {
    name: string;
    legalNotice: string;
    domain: string;
    baseUrl: string;
    tagline: string;
    description: string;
  };
  contact: {
    // Phone remains null/disabled until client provides a confirmed active number.
    phone: string | null;
    phoneFormatted: string | null;
    email: string;
    addressSummary: string;
  };
  leadGeneration: {
    // Lead collection MUST be disabled by default per project requirements.
    enabled: boolean;
    preLaunchMessage: {
      headline: string;
      body: string;
      estimatedAvailability: string;
    };
    allowLocalPreview: boolean;
    webhookUrlEnvVar: string;
  };
  analytics: {
    // Analytics is disconnected until verified GA4/Tag Manager ID is provided.
    enabled: boolean;
    measurementId: string | null;
  };
  services: ServiceOption[];
  towns: TownCoverage[];
  faqs: Array<{
    question: string;
    answer: string;
    category: "general" | "pricing" | "services" | "process";
  }>;
}

export const SITE_CONFIG: SiteConfig = {
  site: {
    name: "Knightdale Lawn Care",
    domain: "knightdalelawncare.com",
    baseUrl: "https://knightdalelawncare.com",
    tagline: "Connecting Eastern Wake Homeowners with Trusted Local Lawn Care",
    description:
      "Request lawn care quotes in Knightdale, Wendell, and Zebulon, NC. We connect homeowners with independent local providers for mowing, cleanups, edging, and pine straw.",
    legalNotice:
      "KnightdaleLawnCare.com is an independent referral and quote-request service connecting homeowners in eastern Wake County with independent local lawn care specialists. We are not a direct lawn care contractor and do not perform landscaping services directly.",
  },
  contact: {
    phone: null,
    phoneFormatted: null,
    email: "inquiries@knightdalelawncare.com",
    addressSummary: "Knightdale, Wendell, & Zebulon, Eastern Wake County, NC",
  },
  leadGeneration: {
    // Lead collection MUST remain false until live provider agreements & delivery webhooks are confirmed.
    enabled: false,
    preLaunchMessage: {
      headline: "Quote Matching for the Upcoming Season is Opening Soon",
      body: "We are currently completing seasonal onboarding with vetted, independent lawn care specialists in Knightdale, Wendell, and Zebulon. Live quote requests will activate once provider routing and availability are confirmed.",
      estimatedAvailability: "Launching ahead of the upcoming mowing season",
    },
    allowLocalPreview: true,
    webhookUrlEnvVar: "QUOTE_WEBHOOK_URL",
  },
  analytics: {
    enabled: false,
    measurementId: null,
  },
  services: [
    {
      id: "lawn-mowing",
      title: "Routine Lawn Mowing & Maintenance",
      slug: "lawn-mowing",
      shortDesc: "Scheduled grass cutting, clean perimeter line edging, hard-surface string trimming, and debris blowing.",
      fullDesc:
        "Consistent turf care tailored to common North Carolina warm-season (Bermuda, Zoysia) and cool-season (Tall Fescue) grasses. Request recurring weekly or bi-weekly service during peak growing months.",
      commonNeeds: [
        "Consistent mowing deck height to prevent turf scalping",
        "Crisp edging along driveways, walkways, and curbs",
        "Careful string trimming around fences, garden beds, and AC units",
        "Thorough blower cleanup of clippings from all hard surfaces",
      ],
      seasonalWindow: "April through October (Weekly / Bi-Weekly)",
      iconName: "Scissors",
    },
    {
      id: "seasonal-cleanup",
      title: "Seasonal Yard Cleanups",
      slug: "seasonal-cleanup",
      shortDesc: "Spring yard revival, autumn leaf removal, stick and fallen branch pickup, and property resets.",
      fullDesc:
        "Seasonal cleanouts clear heavy fall leaves that smother grass, clear winter debris ahead of spring green-up, and prepare turf for healthy root development.",
      commonNeeds: [
        "Heavy oak, pine, and sweetgum leaf collection and curbside staging or haul-away",
        "Stick, dead branch, and storm debris clearing",
        "Cutting back dead perennial stalks and ornamental grasses",
        "Pre-season turf dethatching or light rake-out",
      ],
      seasonalWindow: "March–April (Spring Reset) & October–December (Fall Leaves)",
      iconName: "Leaf",
    },
    {
      id: "mulch-pine-straw",
      title: "Pine Straw & Mulch Installation",
      slug: "mulch-pine-straw",
      shortDesc: "Fresh longleaf pine straw rolls and dark double-shredded hardwood mulch for refreshed flower beds.",
      fullDesc:
        "Improve curb appeal while conserving soil moisture, moderating root temperatures during hot Carolina summers, and naturally suppressing aggressive weed germination.",
      commonNeeds: [
        "Trench edging around garden borders for clean containment lines",
        "Weed removal and bed smoothing prior to dressing",
        "Uniform 2–3 inch depth application to protect plant root crowns",
        "Careful tucking along foundations, stone borders, and sidewalks",
      ],
      seasonalWindow: "Year-Round (Peak in Spring & Early Fall)",
      iconName: "Layers",
    },
    {
      id: "edging-trimming",
      title: "Edging & Line Trimming",
      slug: "edging-trimming",
      shortDesc: "Sharp trench definition along sidewalks, curb lines, tree rings, and difficult lawn perimeters.",
      fullDesc:
        "Give your lawn that manicured, crisp presentation by cutting back creeping grass and maintaining clean boundaries between turf and concrete.",
      commonNeeds: [
        "Vertical blade edging along concrete driveways and curbs",
        "String line trimming around mailbox posts, AC pads, and utility boxes",
        "Clean border separation around mulch and pine straw beds",
      ],
      seasonalWindow: "Spring through Autumn",
      iconName: "Ruler",
    },
    {
      id: "aeration-overseeding",
      title: "Aeration & Overseeding Inquiries",
      slug: "aeration-overseeding",
      shortDesc: "Core aeration to relieve dense Piedmont clay compaction combined with premium grass seed application.",
      fullDesc:
        "Wake County's heavy red clay soil frequently becomes tightly compacted. Core aeration pulls soil plugs to allow water, air, and seed to reach deep into root systems.",
      commonNeeds: [
        "Core plug aeration to alleviate high-traffic compaction",
        "Overseeding with heat-tolerant certified Tall Fescue blends",
        "Starter fertilizer coordination when recommended",
      ],
      seasonalWindow: "September through October (Fescue prime germination)",
      iconName: "Sparkles",
    },
    {
      id: "hedge-trimming",
      title: "Hedge & Shrub Shaping",
      slug: "hedge-trimming",
      shortDesc: "Light ornamental shrub pruning, perimeter hedge trimming, and natural shape maintenance.",
      fullDesc:
        "Keep foundational shrubs, boxwoods, hollies, and flowering bushes balanced, healthy, and off siding and walkways.",
      commonNeeds: [
        "Pruning new spring shoots to maintain crisp shape",
        "Removing dead or diseased interior branches",
        "Raking and bagging all cut clippings",
      ],
      seasonalWindow: "Late Spring & Mid-Summer",
      iconName: "Trees",
    },
  ],
  towns: [
    {
      id: "knightdale",
      name: "Knightdale",
      zip: "27545",
      county: "Wake County",
      highlights: [
        "Rapidly growing eastern Wake community with mix of established lots and modern subdivisions",
        "Common turf varieties include Bermuda in full sun and Tall Fescue in mature tree-shaded areas",
        "Close proximity to Knightdale Station Park and the I-540 corridor",
      ],
      subdivisions: [
        "Knightdale Station",
        "Planters Walk",
        "Widewaters",
        "Glenmere",
        "Poplar Pointe",
        "Parkside",
      ],
      overview:
        "Knightdale is a vibrant, expanding community just east of Raleigh. From spacious lawns in established neighborhoods like Planters Walk to modern planned developments near Knightdale Station, local homeowners need regular, dependable yard upkeep that balances summer heat tolerance with tidy neighborhood aesthetics.",
    },
    {
      id: "wendell",
      name: "Wendell",
      zip: "27591",
      county: "Wake County",
      highlights: [
        "Historic downtown charm paired with large master-planned communities like Wendell Falls",
        "Mix of open suburban yard sizes, pocket park green spaces, and private rear yards",
        "Warm Carolina summers requiring proactive mowing schedules and weed management",
      ],
      subdivisions: [
        "Wendell Falls",
        "Edgemont Landing",
        "Deerfield",
        "Woodcreek",
        "Maggie Way",
      ],
      overview:
        "Wendell blends small-town hospitality with dynamic residential growth, highlighted by the Wendell Falls community. Whether managing zero-lot-line townhouse yards or multi-acre properties surrounding town, homeowners appreciate straightforward quote connections for dependable seasonal mowing and bed maintenance.",
    },
    {
      id: "zebulon",
      name: "Zebulon",
      zip: "27597",
      county: "Wake County",
      highlights: [
        "The easternmost town in Wake County, home of Five County Stadium and Carolina Mudcats baseball",
        "Spacious residential parcels often featuring mature hardwood trees and rolling topography",
        "Heavy seasonal leaf fall in autumn requiring thorough clearing and yard preparation",
      ],
      subdivisions: [
        "Weaver's Pond",
        "Braemar",
        "Autumn Lakes",
        "Wakelon",
        "Tandler",
      ],
      overview:
        "Known as 'The Town of Friendly People,' Zebulon features tree-lined neighborhoods, larger estate parcels, and welcoming subdivisions like Weaver's Pond. Homeowners here frequently seek help with routine grass cutting, seasonal storm cleanups, and fresh pine straw applications.",
    },
  ],
  faqs: [
    {
      category: "general",
      question: "What is KnightdaleLawnCare.com?",
      answer:
        "KnightdaleLawnCare.com is an independent local referral and quote-request service. We help homeowners in Knightdale, Wendell, and Zebulon describe their lawn care needs and connect with independent local lawn care specialists. We are not a direct lawn care contractor.",
    },
    {
      category: "process",
      question: "How does requesting a lawn care quote work?",
      answer:
        "You submit a short request stating your town, what services your yard needs (such as routine mowing, seasonal cleanup, or mulch), and your preferred contact method. Once live matching is open, we review your details and route your request to an available independent local provider. That provider contacts you directly to discuss specific yard requirements, timing, and pricing.",
    },
    {
      category: "process",
      question: "Is there any cost or obligation to request a quote?",
      answer:
        "No. Requesting a quote through our platform is completely free with zero obligation. You review the independent provider's estimate and decide whether you wish to hire them.",
    },
    {
      category: "pricing",
      question: "How much does lawn care typically cost?",
      answer:
        "Pricing is set directly by each independent provider based on your yard's acreage, terrain, obstacles (fences, slopes, ditches), grass height, and whether you request recurring maintenance or a one-time project. Because we are an independent referral platform, we do not set or guarantee prices.",
    },
    {
      category: "services",
      question: "Can I request recurring weekly or bi-weekly mowing?",
      answer:
        "Yes. Routine mowing during the active growing season (roughly April through October) is the most common homeowner request. You can specify whether you prefer weekly or bi-weekly visits in your request details.",
    },
    {
      category: "general",
      question: "What towns do you cover?",
      answer:
        "Our primary focus is eastern Wake County, North Carolina—specifically the towns of Knightdale (27545), Wendell (27591), and Zebulon (27597), as well as immediately bordering neighborhoods.",
    },
    {
      category: "process",
      question: "Why does the site say quote matching is opening soon?",
      answer:
        "To protect homeowner satisfaction, we do not accept quote requests until provider capacity, routing, and communication channels are verified for the area. We are currently finalizing seasonal arrangements before turning on live lead submission.",
    },
    {
      category: "process",
      question: "Who will receive my contact details?",
      answer:
        "When live submissions are active, your contact information will only be shared with the independent local lawn care provider selected to evaluate your specific request. We never sell homeowner contact details to mass marketing lists.",
    },
  ],
};
