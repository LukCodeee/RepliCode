import type { Config } from "@measured/puck";

import { ProblemBlock as ProblemBlock, ProblemBlockProps } from "./blocks/template1/ProblemBlock/ProblemBlock";
import { About as About, AboutProps as AboutProps } from "./blocks/template1/About/About";
import { CTA as CTA, CTAProps as CTAProps } from "./blocks/template1/CTA/CTA";
import { FAQ as FAQ, FAQProps as FAQProps } from "./blocks/template1/FAQ/FAQ";
import { Features as Features, FeaturesProps as FeaturesProps } from "./blocks/template1/Features/Features";
import { Pricing as Pricing, PricingProps as PricingProps } from "./blocks/template1/Pricing/Pricing";
import { SocialProof as SocialProof, SocialProofProps as SocialProofProps } from "./blocks/template1/SocialProof/SocialProof";
import { Hero as Hero, HeroProps as HeroProps } from "./blocks/template1/Hero/Hero";
import { Solution as Solution, SolutionProps as SolutionProps } from "./blocks/template1/Solution/Solution";
import { Features2, FeaturesProps2 } from "./blocks/template1/Features/Features2";


// Define component types to use in type-safe way
export type ComponentName = "Hero" | "ProblemBlock" | "Solution" | "SocialProof" | "About" | "CTA" | "FAQ" | "Features" | "Features2" | "Pricing";

// Define image URLs for components
export const componentImages: Record<ComponentName, string> = {
  Hero: "/images/components/hero-block1.png",
  ProblemBlock: "/images/components/problem-block1.png",
  Solution: "/images/components/solution-block1.png",
  About: "/images/components/about-block1.png",
  CTA: "/images/components/cta-block1.png",
  FAQ: "/images/components/faq-block1.png",
  Features: "/images/components/feature-block1.png",
  Features2: "/images/components/feature-block2.png",
  Pricing: "/images/components/pricing-block1.png",
  SocialProof: "/images/components/social-proof1.png",
};

type Props = {
  Hero: HeroProps;
  ProblemBlock: ProblemBlockProps;
  Solution: SolutionProps;
  About: AboutProps;
  CTA: CTAProps;
  FAQ: FAQProps;
  Features: FeaturesProps;
  Features2: FeaturesProps2;
  Pricing: PricingProps;
  SocialProof: SocialProofProps;
};

export const config: Config<Props> = {
  categories: {
    hero: {
      components: ["Hero"],
    },
    problem: {
      title: "Problem Agitation",
      components: ["ProblemBlock"],
    },
    solution: {
      title: "Solution",
      components: ["Solution"],
    },
    social: {
      title: "Social Proof",
      components: ["SocialProof"],
    },
    features: {
      title: "Features",
      components: ["Features", "Features2"],
    },
    pricing: {
      title: "Pricing",
      components: ["Pricing"],
    },
    faq: {
      title: "FAQ",
      components: ["FAQ"],
    },
    about: {
      title: "About",
      components: ["About"],
    },
    cta: {
      title: "Call to Action",
      components: ["CTA"],
    },
  },
  components: {
    Hero, 
    ProblemBlock,
    Solution,
    About,
    CTA,
    FAQ,
    Features,
    Features2,
    Pricing,
    SocialProof,
  },
};

export default config;
