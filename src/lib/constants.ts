export const SITE_NAME = "Childs Real Estate";
export const SITE_DESCRIPTION =
  "Ammon & Tasha Childs — Luxury real estate in Utah County and the Salt Lake Valley. Berkshire Hathaway HomeServices Elite Real Estate.";
export const SITE_URL = "https://childsrealestate.com";

export const OFFICE = {
  name: "Berkshire Hathaway HomeServices Elite Real Estate",
  address: "825 E 1180 S 300, American Fork, UT 84003",
  phone: "(801) 735-8460",
  email: "ammonchilds@gmail.com",
  lat: 40.3766,
  lng: -111.7465,
};

export const TEAM = [
  {
    name: "Ammon Childs",
    title: "Broker / Owner",
    phone: "(801) 735-8460",
    email: "ammonchilds@gmail.com",
    bio: "With over 15 years of experience in Utah real estate, Ammon brings deep market knowledge and a commitment to exceptional client service. As broker and owner, he leads the Childs Real Estate team with integrity and results-driven strategies.",
    image: "/images/team/ammon.jpg",
    imagePosition: "top",
    social: {
      instagram: "https://instagram.com/childsrealestate",
      facebook: "https://facebook.com/childsrealestate",
      linkedin: "https://linkedin.com/in/ammonchilds",
    },
  },
  {
    name: "Tasha Childs",
    title: "Realtor / Co-Owner",
    phone: "(801) 602-8856",
    email: "tashalchilds@gmail.com",
    bio: "Tasha is passionate about helping families find their dream homes throughout Utah County. Her attention to detail, design eye, and warm approach make the buying and selling process seamless and enjoyable.",
    image: "/images/team/tasha.jpg",
    social: {
      instagram: "https://instagram.com/childsrealestate",
      facebook: "https://facebook.com/childsrealestate",
    },
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Search", href: "/properties" },
  { label: "About", href: "/about" },
  { label: "Sell", href: "/sell" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const FEATURED_AREAS = [
  {
    name: "Highland",
    slug: "highland",
    image: "/images/areas/highland.svg",
    description: "Luxury mountain estates with stunning valley views",
  },
  {
    name: "Alpine",
    slug: "alpine",
    image: "/images/areas/alpine.svg",
    description: "Exclusive properties nestled against the Wasatch Range",
  },
  {
    name: "American Fork",
    slug: "american-fork",
    image: "/images/areas/american-fork.svg",
    description: "Family-friendly neighborhoods with modern amenities",
  },
  {
    name: "Cedar Hills",
    slug: "cedar-hills",
    image: "/images/areas/cedar-hills.svg",
    description: "Charming community with scenic trails and parks",
  },
  {
    name: "Lehi",
    slug: "lehi",
    image: "/images/areas/lehi.svg",
    description: "Fast-growing tech hub with new construction",
  },
  {
    name: "Orem",
    slug: "orem",
    image: "/images/areas/orem.svg",
    description: "Central Utah County living near shopping and universities",
  },
];

export const TESTIMONIALS = [
  {
    name: "Brandon & Jessica M.",
    location: "Highland, UT",
    text: "Ammon and Tasha went above and beyond to help us find our dream home in Highland. Their knowledge of the market and negotiation skills saved us thousands. We couldn't be happier!",
    rating: 5,
  },
  {
    name: "Sarah K.",
    location: "American Fork, UT",
    text: "Selling our home was stressful, but Tasha made the entire process smooth and easy. She staged our home beautifully and we had multiple offers within the first weekend.",
    rating: 5,
  },
  {
    name: "David & Emily R.",
    location: "Lehi, UT",
    text: "As first-time homebuyers, we had a million questions. Ammon was incredibly patient and guided us through every step. We found the perfect starter home in our budget.",
    rating: 5,
  },
  {
    name: "Michael T.",
    location: "Alpine, UT",
    text: "The Childs team helped us sell our Alpine property for well above asking price. Their marketing was top-notch — professional photos, drone footage, the works.",
    rating: 5,
  },
  {
    name: "Rachel & Josh W.",
    location: "Cedar Hills, UT",
    text: "We relocated from out of state and Tasha coordinated everything remotely. By the time we arrived in Utah, our new home was ready and waiting. Truly exceptional service.",
    rating: 5,
  },
];

export const PROPERTY_TYPES = [
  "Single Family",
  "Townhouse",
  "Condo",
  "Multi-Family",
  "Land",
] as const;

export const CITIES = [
  "All Cities",
  "Alpine",
  "American Fork",
  "Cedar Hills",
  "Draper",
  "Eagle Mountain",
  "Highland",
  "Lehi",
  "Lindon",
  "Mapleton",
  "Orem",
  "Pleasant Grove",
  "Provo",
  "Salt Lake City",
  "Sandy",
  "Saratoga Springs",
  "Spanish Fork",
  "Springville",
] as const;

export const SORT_OPTIONS = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Beds", value: "beds" },
  { label: "Sqft", value: "sqft" },
] as const;

export const MLS_DISCLAIMER =
  "Listing information is provided in part by the Wasatch Front Regional MLS. IDX information is provided exclusively for consumers' personal, non-commercial use, and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Listing data is deemed reliable but is not guaranteed accurate by the MLS. Updated daily.";

export const BHHS_DISCLAIMER =
  "© 2026 BHH Affiliates, LLC. An independently owned and operated franchisee of BHH Affiliates, LLC. Berkshire Hathaway HomeServices and the Berkshire Hathaway HomeServices symbol are registered service marks of Columbia Insurance Company, a Berkshire Hathaway affiliate. Equal Housing Opportunity.";
