import { Property, PropertySearchParams, PropertySearchResult } from "./types";

export interface MLSAdapter {
  searchProperties(params: PropertySearchParams): Promise<PropertySearchResult>;
  getProperty(mlsNumber: string): Promise<Property | null>;
  getFeaturedProperties(limit?: number): Promise<Property[]>;
  getComingSoonProperties(limit?: number): Promise<Property[]>;
  getSimilarProperties(property: Property, limit?: number): Promise<Property[]>;
  getCities(): Promise<string[]>;
}
