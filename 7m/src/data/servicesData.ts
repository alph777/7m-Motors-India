import { ServiceItem } from "../types";

export const servicesData: ServiceItem[] = [
  {
    id: "serv-buy",
    key: "buy",
    title: "BUY",
    summary: "Looking to sell your motorcycle? Get a fair, instant valuation and immediate payment without dealing with time-wasters.",
    ctaText: "SELL YOUR BIKE →",
    targetId: "sell-bike",
    features: [
      "Fair transparent market valuations",
      "Immediate secure payment transfer",
      "Hassle-free ownership & RC name transfer",
      "Doorstep evaluation across Kerala"
    ]
  },
  {
    id: "serv-sell",
    key: "sell",
    title: "SELL",
    summary: "Find your next motorcycle through 7M Motors. Every machine is physically checked, mechanically tested, and verified before handover.",
    ctaText: "VIEW INVENTORY →",
    targetId: "inventory",
    features: [
      "Curated pre-owned motorcycles only",
      "Comprehensive 45-point mechanical inspection",
      "100% verified documentation & clear title",
      "Kerala-wide doorstep transport"
    ]
  },
  {
    id: "serv-source",
    key: "source",
    title: "SOURCE",
    summary: "Can't find the right motorcycle? Whether it's a rare cast-iron Bullet, a vintage 2-stroke RD350, or a modern superbike, we'll locate it.",
    ctaText: "REQUEST A SOURCE →",
    targetId: "contact",
    features: [
      "Exhaustive statewide collector network",
      "Authenticity & provenance verification",
      "Pre-purchase inspection & valuation",
      "Direct negotiation on your behalf"
    ]
  },
  {
    id: "serv-restore",
    key: "restore",
    title: "RESTORE",
    summary: "Mechanical and visual restoration projects executed with obsessive attention to vintage factory accuracy or bespoke concours finishes.",
    ctaText: "COMMISSION RESTORATION →",
    targetId: "contact",
    features: [
      "Nut-and-bolt strip-down overhauls",
      "Precision engine blueprinting & crank balancing",
      "Period-accurate chrome plating & hand pinstriping",
      "Electrical loom rebuilds with modern reliability"
    ]
  },
  {
    id: "serv-customize",
    key: "customize",
    title: "CUSTOMIZE",
    summary: "Custom upgrades and personalization designed to elevate your ride without ruining the machine's mechanical soul.",
    ctaText: "START CUSTOMIZING →",
    targetId: "contact",
    features: [
      "Performance exhaust tuning & intake systems",
      "Handcrafted leather seats & bespoke upholstery",
      "Bespoke handlebars, foot controls & ergonomics",
      "High-power vintage-look LED headlamps & brass accents"
    ]
  },
  {
    id: "serv-project",
    key: "project",
    title: "PROJECT BUILDS",
    summary: "Complete motorcycle transformation projects. From raw concept sketches to one-of-a-kind road-dominating scramblers and cafe racers.",
    ctaText: "EXPLORE BUILDS →",
    targetId: "garage-builds",
    features: [
      "Frame geometry modification & subframe loops",
      "Hand-beaten aluminium & steel body fabrication",
      "Custom paintwork, metal flake, & raw brushed steel",
      "Concours road-testing & dyno tuning"
    ]
  }
];
