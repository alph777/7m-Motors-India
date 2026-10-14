import { Motorcycle } from "../types";

export const initialMotorcycles: Motorcycle[] = [
  {
    id: "7M-RE-350-09",
    brand: "Royal Enfield",
    model: "Standard 350",
    year: 2009,
    engine: "346cc UCE Heavy Crank",
    engineCategory: "200-350cc",
    kilometres: 42000,
    price: 135000,
    condition: "Factory Original",
    status: "AVAILABLE",
    registration: "KL-07 (Ernakulam Central)",
    ownership: "1st Owner",
    insurance: "Valid until Nov 2027 (Comprehensive)",
    location: "Kochi Garage, Kerala",
    featured: true,
    images: [
      "pics/WhatsApp Image 2026-08-22 at 2.43.35 PM.jpeg",
      "pics/WhatsApp Image 2026-08-22 at 2.43.36 PM.jpeg",
      "pics/WhatsApp Image 2026-08-22 at 2.43.38 PM.jpeg",
      "wdj.jpg"
    ],
    description: "An authentic, pristine 2009 Royal Enfield Standard 350 with original black lacquer finish and iconic gold pinstripes handcrafted in Madras. Kept with obsessive care by a single enthusiast in Fort Kochi. Crisp rhythmic thump, blueprinted carburettor, freshly overhauled clutch assembly, and spotless period-accurate spoke rims. Road-tested across 150 km of Kerala tarmac with zero vibrations.",
    highlights: [
      "Quality checked & 45-point mechanical inspection passed",
      "Documentation verified: Clean RC, NOC ready, insurance active",
      "Freshly overhauled Mikuni carburettor & oil flush",
      "Doorstep delivery available across all 14 Kerala districts",
      "Custom exhausts, brass embellishments & bar-ends on request"
    ],
    specs: {
      engineType: "Single Cylinder, 4 Stroke, Twinspark Air-Cooled",
      transmission: "5-Speed Constant Mesh Left-Shift",
      cooling: "Air Cooled",
      brakes: "Front Disc 280mm / Rear Drum 153mm",
      fuelSystem: "Carburettor with UCD 29",
      exhaust: "OEM Long Bottle Chromed Free-Flow Thump"
    }
  },
  {
    id: "7M-RE-GT650-22",
    brand: "Royal Enfield",
    model: "Continental GT 650",
    year: 2022,
    engine: "648cc Parallel-Twin 270°",
    engineCategory: "500-650cc",
    kilometres: 9200,
    price: 315000,
    condition: "Mint",
    status: "AVAILABLE",
    registration: "KL-08 (Thrissur)",
    ownership: "1st Owner",
    insurance: "Valid until Dec 2027",
    location: "Thrissur Garage, Kerala",
    featured: true,
    images: [
      "pics/WhatsApp Image 2026-08-28 at 12.24.50 PM.jpeg",
      "pics/WhatsApp Image 2026-08-28 at 12.24.51 PM.jpeg",
      "djs.jpg"
    ],
    description: "British Racing Green edition cafe racer with clip-on ergonomics, Pirelli Phantom Sportscomp tyres, and stainless performance slip-ons. Single rider cowl included alongside dual touring bench. Perfectly dialed suspension tuned for ghat corners and open highway cruising.",
    highlights: [
      "Complete authorized service history documented",
      "No accident history, pristine chassis alignment checked",
      "Brembo ByBre dual-channel ABS verified",
      "Free 6-month mechanical warranty from 7M Motors",
      "Kerala door-to-door enclosed transport ready"
    ],
    specs: {
      engineType: "Inline Twin, 4-Stroke, SOHC 4-Valves per Cylinder",
      transmission: "6-Speed with Slipper & Assist Clutch",
      cooling: "Air/Oil-Cooled with Heavy-Duty Radiator",
      brakes: "320mm Front Floating Disc with ByBre Caliper",
      fuelSystem: "Bosch Electronic Fuel Injection",
      exhaust: "Brushed Stainless Performance Megaphone"
    }
  },
  {
    id: "7M-RE-CL500-18",
    brand: "Royal Enfield",
    model: "Classic 500 Chrome",
    year: 2018,
    engine: "499cc UCE High Torque",
    engineCategory: "350-500cc",
    kilometres: 22400,
    price: 185000,
    condition: "Concours Restored",
    status: "PRE-BOOKED",
    registration: "KL-11 (Kozhikode)",
    ownership: "2nd Owner",
    insurance: "Valid until August 2027",
    location: "Calicut Garage, Kerala",
    featured: true,
    images: [
      "pics/WhatsApp Image 2026-08-22 at 2.43.40 PM.jpeg",
      "pics/WhatsApp Image 2026-08-07 at 10.09.08 PM.jpeg",
      "wdj.jpg"
    ],
    description: "The revered 500cc big-single torque monster in gleaming mirror chrome and deep maroon accents. Known for its effortless low-end grunt (41.3 Nm). Mirror chrome tank has undergone multi-stage ceramic coating. Vintage spring saddle with handcrafted distressed tan leather.",
    highlights: [
      "Stage 1 ceramic detailing and chrome preservation sealed",
      "All mechanical consumables replaced with OEM genuine parts",
      "Clear title, zero hypothecation, green tax up to date",
      "Pre-booked by rider in Kottayam — awaiting final handover"
    ],
    specs: {
      engineType: "Single Cylinder 4 Stroke Spark Ignition",
      transmission: "5-Speed Constant Mesh",
      cooling: "Air Cooled",
      brakes: "Dual Disc with ABS",
      fuelSystem: "Keihin Electronic Fuel Injection",
      exhaust: "Classic Chromed Swept Back Pipe"
    }
  },
  {
    id: "7M-HIM-411-21",
    brand: "Royal Enfield",
    model: "Himalayan 411 Pine Green",
    year: 2021,
    engine: "411cc LS410 Single",
    engineCategory: "350-500cc",
    kilometres: 18500,
    price: 195000,
    condition: "Mint",
    status: "AVAILABLE",
    registration: "KL-01 (Trivandrum)",
    ownership: "1st Owner",
    insurance: "Valid until Jan 2028",
    location: "Kochi Garage, Kerala",
    featured: false,
    images: [
      "pics/WhatsApp Image 2026-08-07 at 10.09.05 PM.jpeg",
      "pics/WhatsApp Image 2026-08-21 at 8.36.47 PM.jpeg"
    ],
    description: "Built for the high passes of Ladakh and rugged trails of Munnar & Vagamon. Fitted with heavy-duty pannier rails, touring windshield, Barkbusters handguards, and dual-purpose knobby tyres with 80% tread remaining.",
    highlights: [
      "Switchable Dual-Channel ABS tested & verified",
      "Full chassis subframe inspection completed",
      "All service bills from authorized service center provided",
      "Kerala-wide doorstep test ride / inspection available"
    ],
    specs: {
      engineType: "Single Cylinder, 4-Stroke, SOHC, Air-Cooled with Oil Cooler",
      transmission: "5-Speed Manual",
      cooling: "Air-Cooled with External Oil Cooler",
      brakes: "Front 300mm Disc / Rear 240mm Disc",
      fuelSystem: "Electronic Fuel Injection",
      exhaust: "Upswept Adventure Pipe"
    }
  },
  {
    id: "7M-YAM-RD350-86",
    brand: "Yamaha",
    model: "RD 350 HT (High Torque)",
    year: 1986,
    engine: "347cc Parallel-Twin 2-Stroke",
    engineCategory: "200-350cc",
    kilometres: 31000,
    price: 380000,
    condition: "Concours Restored",
    status: "SOLD",
    registration: "KL-07 (Ernakulam)",
    ownership: "3rd Owner",
    insurance: "Valid (Historical Comprehensive)",
    location: "7M Atelier, Kerala",
    featured: false,
    images: [
      "djs.jpg",
      "stc/WhatsApp Image 2026-08-22 at 2.43.35 PM.jpeg"
    ],
    description: "The crown jewel of Indian motorcycling lore: a genuine Rajdoot Yamaha RD350 High Torque. Restored over 400 workshop hours with Japanese Mikuni carburettors, NOS CDI ignition, factory red & white livery, and razor-sharp powerband kick.",
    highlights: [
      "Concours preservation build executed by 7M master mechanics",
      "Original twin exhaust chambers retuned and chrome-dipped",
      "Clean papers, FC cleared, fitness certified up to 2028",
      "Delivered to a vintage collector in Kannur"
    ],
    specs: {
      engineType: "Two-Stroke Parallel Twin with Torque Induction Reed Valves",
      transmission: "6-Speed Constant Mesh",
      cooling: "Air Cooled",
      brakes: "Front Twin-Piston Disc Conversion / Rear Drum",
      fuelSystem: "Dual Mikuni VM28 Carburettors",
      exhaust: "Twin Chromed Expansion Chamber Stems"
    }
  },
  {
    id: "7M-HON-CB350-23",
    brand: "Honda",
    model: "CB350 RS Scrambler",
    year: 2023,
    engine: "348cc PGM-FI Air-Cooled",
    engineCategory: "200-350cc",
    kilometres: 6400,
    price: 210000,
    condition: "Mint",
    status: "AVAILABLE",
    registration: "KL-10 (Malappuram)",
    ownership: "1st Owner",
    insurance: "Valid until March 2028",
    location: "Calicut Garage, Kerala",
    featured: true,
    images: [
      "pics/WhatsApp Image 2026-08-22 at 2.43.38 PM.jpeg",
      "wdj.jpg"
    ],
    description: "Crisp modern retro roadster with tuck-and-roll scrambler saddle, LED headlight nacelle, assist & slipper clutch, and Honda Selectable Torque Control (HSTC). Ultra-smooth gearshifts and bulletproof reliability for daily commutes and weekend escapes.",
    highlights: [
      "Showroom mint condition with under 7,000 kilometres",
      "Zero modifications to engine, untouched factory warranty",
      "Pre-delivery service completed at 7M garage",
      "Instant WhatsApp video call walkaround available"
    ],
    specs: {
      engineType: "4-Stroke, SI Engine with Counter Balancer",
      transmission: "5-Speed Manual with Assist & Slipper Clutch",
      cooling: "Air Cooled",
      brakes: "Dual Channel ABS, 310mm Front / 240mm Rear",
      fuelSystem: "PGM-FI Multi-Point Injection",
      exhaust: "Matte Black Swept Exhaust with Chrome Shield"
    }
  },
  {
    id: "7M-RE-BUILD-84",
    brand: "Royal Enfield",
    model: "1984 Bullet 350 Cast-Iron Rebuild",
    year: 1984,
    engine: "346cc Cast Iron Right-Shift",
    engineCategory: "200-350cc",
    kilometres: 68000,
    price: 165000,
    condition: "Project Build",
    status: "PROJECT",
    registration: "KL-05 (Kottayam Vintage)",
    ownership: "Collector Consignment",
    insurance: "Fitness Renewed",
    location: "7M Custom Workshop, Kerala",
    featured: false,
    images: [
      "pics/WhatsApp Image 2026-08-07 at 10.09.08 PM.jpeg",
      "vdfr_1788967657543.jpg"
    ],
    description: "A rare 4-speed right-foot gearshift, left-foot brake vintage cast-iron Bullet. Currently in our restoration bay undergoing blueprint crank balancing and hand-beaten tank fabrication. Can be personalized to client's exact color & styling wishes.",
    highlights: [
      "Eligible for full custom cafe racer, brat or stock restoration",
      "Heavy flywheel crank that idles at impossible low RPMs",
      "Transfer papers and fitness validation verified",
      "Commission this build with 7M master builders today"
    ],
    specs: {
      engineType: "Cast-Iron Block Overhead Valve Single",
      transmission: "4-Speed Separate Albion Gearbox (Right-Shift)",
      cooling: "Air Cooled",
      brakes: "Vintage Twin-Leading Shoe Drum Brakes",
      fuelSystem: "Amal Concentric Carburettor",
      exhaust: "Upswept Scrambler Pipe Option"
    }
  },
  {
    id: "7M-KTM-ADV-22",
    brand: "KTM",
    model: "390 Adventure SW",
    year: 2022,
    engine: "373cc DOHC Liquid-Cooled",
    engineCategory: "350-500cc",
    kilometres: 14200,
    price: 275000,
    condition: "Mint",
    status: "AVAILABLE",
    registration: "KL-07 (Ernakulam)",
    ownership: "1st Owner",
    insurance: "Valid until July 2027",
    location: "Kochi Garage, Kerala",
    featured: false,
    images: [
      "pics/WhatsApp Image 2026-08-28 at 12.24.51 PM.jpeg",
      "djs.jpg"
    ],
    description: "Spoke-wheel adventure tourer primed for Kerala's mountain passes and monsoons. Features adjustable WP APEX suspension, cornering ABS, off-road traction control, and Quickshifter+. Full crash protection kit installed.",
    highlights: [
      "Spoke wheel conversion for true off-road capability",
      "Quickshifter+ enabled with smooth clutchless shifts",
      "New Metzeler Tourance tyres installed 800 km ago",
      "Doorstep delivery across Kerala ready within 24 hours"
    ],
    specs: {
      engineType: "Single-Cylinder 4-Stroke DOHC 4-Valve Engine",
      transmission: "6-Speed with PASC Anti-Hopping Slipper Clutch",
      cooling: "Liquid Cooled with Curved Twin Radiators",
      brakes: "320mm Front Disc with Radial 4-Piston Caliper",
      fuelSystem: "Bosch EFI with 46mm Throttle Body",
      exhaust: "Underbelly Stainless Pre-Muffler with Side Can"
    }
  }
];
