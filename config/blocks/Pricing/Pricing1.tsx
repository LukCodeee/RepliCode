import { ComponentConfig } from "@measured/puck";
import { Check, XIcon } from "lucide-react";

export type PricingPlan = {
  name: string;
  price: number;
  description: string;
  cta: string;
  featured: boolean;
  badge?: string;
  featureFlags: { value: boolean }[];
};

export type PricingProps1 = {
  title: string;
  description: string;
  features: { value: string }[];
  plans: PricingPlan[];
};

export const Pricing1: ComponentConfig<PricingProps1> = {
  fields: {
    title: { type: "text", label: "Section Title" },
    description: { type: "textarea", label: "Section Description" },
    features: {
      type: "array",
      label: "Features List (master)",
      arrayFields: {
        value: { type: "text", label: "Feature" }
      }
    },
    plans: {
      type: "array",
      label: "Plans",
      arrayFields: {
        name: { type: "text", label: "Plan Name" },
        price: { type: "number", label: "Price (per month)" },
        description: { type: "textarea", label: "Plan Description" },
        cta: { type: "text", label: "CTA Button Text" },
        featured: { type: "select", label: "Featured?", options: [
          { label: "Yes", value: true },
          { label: "No", value: false }
        ] },
        badge: { type: "text", label: "Badge (optional)" },
        featureFlags: {
          type: "array",
          label: "Feature Flags (one per feature)",
          arrayFields: {
            value: { type: "select", label: "Included?", options: [
              { label: "Yes", value: true },
              { label: "No", value: false }
            ] }
          }
        }
      },
      defaultItemProps: {
        name: "New Plan",
        price: 0,
        description: "Plan description.",
        cta: "Get Started",
        featured: false,
        badge: "",
        featureFlags: []
      }
    }
  },
  defaultProps: {
    title: "Pricing",
    description: "Our pricing is not expensive, but it's not cheap either, it's exactly what it should be.",
    features: [
      { value: "Unlimited projects" },
      { value: "24/7 Support" },
      { value: "Custom domain" },
      { value: "Advanced analytics" }
    ],
    plans: [
      {
        name: "Basic",
        price: 9,
        description: "For individuals and small teams",
        cta: "Get Started with Basic",
        featured: false,
        badge: "",
        featureFlags: [
          { value: true },
          { value: false },
          { value: false },
          { value: false }
        ]
      },
      {
        name: "Pro",
        price: 19,
        description: "For startups and growing businesses",
        cta: "Get Started with Pro",
        featured: true,
        badge: "Most Popular",
        featureFlags: [
          { value: true },
          { value: true },
          { value: true },
          { value: false }
        ]
      },
      {
        name: "Business",
        price: 99,
        description: "For organizations with advanced needs",
        cta: "Get Started with Business",
        featured: false,
        badge: "",
        featureFlags: [
          { value: true },
          { value: true },
          { value: true },
          { value: true }
        ]
      }
    ]
  },
  render: ({ title, description, features, plans }) => {
    return (
      <section className="py-12 md:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center">
          {/* Heading */}
          <h2 className="font-poppins text-4xl leading-[80px] font-semibold text-[#030303] mb-6">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 md:mb-24">
            {description}
          </p>

          {/* Cards */}
          <div className="relative flex flex-col gap-8 sm:flex-row sm:gap-6 sm:justify-center">
            {plans.map((plan, planIdx) => (
              <div
                key={planIdx}
                className={[
                  "flex-1 rounded-2xl bg-white p-8 transition-transform", 
                  plan.featured
                    ? "relative z-20 -mx-3 shadow-2xl sm:-mx-6 sm:scale-105"
                    : "shadow sm:translate-y-4",
                ].join(" ")}
              >
                {plan.badge && plan.badge.trim() && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                    {plan.badge}
                  </span>
                )}

                <h3 className="mb-4 text-lg font-semibold">{plan.name}</h3>

                <div className="mb-4 flex items-baseline justify-center">
                  <span className="text-3xl font-bold">$</span>
                  <span className="mx-1 text-6xl font-extrabold">{plan.price}</span>
                  <span className="text-xl text-gray-500">/month</span>
                </div>

                <p className="mb-6 text-gray-600">{plan.description}</p>

                {/* Features list */}
                <ul className="mb-8 space-y-3 text-left">
                  {features.map((feature, idx) => {
                    const included = plan.featureFlags[idx]?.value;
                    return (
                      <li key={feature.value + idx} className="flex items-center gap-2">
                        {included ? (
                          <Check className="h-5 w-5 text-green-600" aria-hidden="true" />
                        ) : (
                          <XIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        )}
                        <span className={included ? "text-gray-700" : "text-gray-400"}>{feature.value}</span>
                      </li>
                    );
                  })}
                </ul>

                <button
                  className={
                    plan.featured
                      ? "w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                      : "w-full rounded-xl border border-gray-900 px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                  }
                  aria-label={plan.cta}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
}; 