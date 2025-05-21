import type { Config } from "@measured/puck";
import { ProblemBlock1, ProblemBlockProps } from "./blocks/ProblemBlock/ProblemBlock1";
import { About1, AboutProps1 } from "./blocks/About/About1";
import { CTA1, CTAProps1 } from "./blocks/CTA/CTA1";
import { FAQ1, FAQProps1 } from "./blocks/FAQ/FAQ1";
import { Features1, FeaturesProps1 } from "./blocks/Features/Features1";
import { Pricing1, PricingProps1 } from "./blocks/Pricing/Pricing1";
import { SocialProof1, SocialProofProps1 } from "./blocks/SocialProof/SocialProof1";
import { Hero1, Hero1Props } from "./blocks/Hero/Hero1";
import { Solution1, Solution1Props } from "./blocks/Solution/Solution1";
import { Features2, FeaturesProps2 } from "./blocks/Features/Features2";


// Define component types to use in type-safe way
export type ComponentName = "Hero1" | "ProblemBlock1" | "Solution1" | "SocialProof1" | "About1" | "CTA1" | "FAQ1" | "Features1" | "Features2" | "Pricing1";

// Define image URLs for components
export const componentImages: Record<ComponentName, string> = {
  Hero1: "/images/components/hero-block1.png",

  ProblemBlock1: "/images/components/problem-block1.png",

  Solution1: "/images/components/solution-block1.png",

  About1: "/images/components/about-block1.png",

  CTA1: "/images/components/cta-block1.png",

  FAQ1: "/images/components/faq-block1.png",

  Features1: "/images/components/feature-block1.png",
  Features2: "/images/components/feature-block2.png",
  
  Pricing1: "/images/components/pricing-block1.png  ",
  
  SocialProof1: "/images/components/social-proof1.png",
};

type Props = {
  Hero1: Hero1Props;

  ProblemBlock1: ProblemBlockProps;

  Solution1: Solution1Props;

  About1: AboutProps1;

  CTA1: CTAProps1;

  FAQ1: FAQProps1;

  Features1: FeaturesProps1;
  Features2: FeaturesProps2;

  Pricing1: PricingProps1;

  SocialProof1: SocialProofProps1;
};

export const config: Config<Props> = {
  categories: {
    hero: {
      components: ["Hero1"],
    },
    problem: {
      title: "Problem Agitation",
      components: ["ProblemBlock1"],
    },
    solution: {
      title: "Solution",
      components: ["Solution1"],
    },
    social: {
      title: "Social Proof",
      components: ["SocialProof1"],
    },
    features: {
      title: "Features",
      components: ["Features1", "Features2"],
    },
    pricing: {
      title: "Pricing",
      components: ["Pricing1"],
    },
    faq: {
      title: "FAQ",
      components: ["FAQ1"],
    },
    about: {
      title: "About",
      components: ["About1"],
    },
    cta: {
      title: "Call to Action",
      components: ["CTA1"],
    },
  },
  components: {
    Hero1,

    ProblemBlock1,

    Solution1,

    About1,
    
    CTA1,

    FAQ1,

    Features1,
    Features2,

    Pricing1,

    SocialProof1,
  },
};

export default config;
