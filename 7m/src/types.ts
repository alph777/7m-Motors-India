export type EngineCategory = "100-200cc" | "200-350cc" | "350-500cc" | "500-650cc" | "650cc+";
export type BikeStatus = "AVAILABLE" | "PRE-BOOKED" | "SOLD" | "PROJECT";
export type BikeCondition = "Mint" | "Concours Restored" | "Factory Original" | "Custom Cafe" | "Project Build";

export interface Motorcycle {
  id: string;
  brand: string;
  model: string;
  year: number;
  engine: string;
  engineCategory: EngineCategory;
  kilometres: number;
  price: number;
  condition: BikeCondition;
  status: BikeStatus;
  registration: string;
  ownership: string;
  insurance: string;
  location: string;
  images: string[];
  featured?: boolean;
  description: string;
  highlights: string[];
  specs: {
    engineType: string;
    transmission: string;
    cooling: string;
    brakes: string;
    fuelSystem: string;
    exhaust?: string;
  };
}

export interface ProjectBuild {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  category: string;
  donorBike: string;
  hours: number;
  beforeImage: string;
  afterImage: string;
  description: string;
  mods: string[];
}

export interface ServiceItem {
  id: string;
  key: "buy" | "sell" | "source" | "restore" | "customize" | "project";
  title: string;
  summary: string;
  ctaText: string;
  targetId: string;
  features: string[];
}

export interface SellBikeSubmission {
  id: string;
  name: string;
  phone: string;
  brand: string;
  model: string;
  year: string;
  kilometres: string;
  registration: string;
  expectedPrice: string;
  location: string;
  photos: string[];
  additionalInfo: string;
  submittedAt: string;
}

export interface ContactInquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  interestedIn: string;
  message: string;
  submittedAt: string;
}
