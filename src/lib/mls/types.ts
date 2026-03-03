export type PropertyType = "Single Family" | "Townhouse" | "Condo" | "Multi-Family" | "Land";
export type PropertyStatus = "Active" | "Pending" | "Sold" | "Coming Soon";

export interface Property {
  mlsNumber: string;
  slug: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  lotSize: string;
  yearBuilt: number;
  propertyType: PropertyType;
  status: PropertyStatus;
  description: string;
  features: string[];
  images: string[];
  lat: number;
  lng: number;
  daysOnMarket: number;
  hoaFees?: number;
  garage: number;
  stories: number;
  listDate: string;
  agent: string;
}

export interface PropertySearchParams {
  query?: string;
  city?: string;
  propertyType?: PropertyType;
  minPrice?: number;
  maxPrice?: number;
  minBeds?: number;
  minBaths?: number;
  minSqft?: number;
  maxSqft?: number;
  status?: PropertyStatus;
  sort?: "newest" | "price-asc" | "price-desc" | "beds" | "sqft";
  page?: number;
  limit?: number;
}

export interface PropertySearchResult {
  properties: Property[];
  total: number;
  page: number;
  totalPages: number;
}
