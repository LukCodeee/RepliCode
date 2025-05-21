import { ComponentConfig } from "@measured/puck";

export type AboutPrinciple = {
  title: string;
  description: string;
};

export type AboutProps1 = {
  label: string;
  heading: string;
  subtitle: string;
  paragraphs: { value: string }[];
  principles: AboutPrinciple[];
  outro: string;
};

export const About1: ComponentConfig<AboutProps1> = {
  fields: {
    label: { type: "text", label: "Section Label (above heading)" },
    heading: { type: "text", label: "Main Heading" },
    subtitle: { type: "text", label: "Subtitle (below heading)" },
    paragraphs: {
      type: "array",
      label: "Paragraphs (above principles)",
      arrayFields: {
        value: { type: "textarea", label: "Paragraph" }
      }
    },
    principles: {
      type: "array",
      label: "Principles List",
      arrayFields: {
        title: { type: "text", label: "Principle Title" },
        description: { type: "textarea", label: "Principle Description" }
      },
      defaultItemProps: {
        title: "New Principle",
        description: "Principle description."
      }
    },
    outro: { type: "textarea", label: "Outro (bottom text)" }
  },
  defaultProps: {
    label: "- MEET THE CREATOR",
    heading: "Hey, I'm Luke",
    subtitle: "I'm just curious.",
    paragraphs: [
      { value: "I'm a solopreneur behind Luke AI, a landing page builder combining drag & drop with AI content generation." },
      { value: "People ask me:" },
      { value: "- How to build professional pages quickly?\n- How to create content that converts?" },
      { value: "My answer: The right tools for both design AND content" }
    ],
    principles: [
      {
        title: "Design without complexity",
        description: "Intuitive drag & drop editing with zero learning curve"
      },
      {
        title: "Generate, don't create",
        description: "AI-powered content generation for headlines, copy, and CTAs"
      },
      {
        title: "Launch in minutes, not days",
        description: "Beautiful templates that convert visitors into customers"
      }
    ],
    outro: "I'm building Luke AI in public and sharing my journey along the way. Feel free to check out my progress and send me your thoughts! 🚀"
  },
  render: ({ label, heading, subtitle, paragraphs, principles, outro }) => {
    return (
      <div className="max-w-3xl mx-auto p-6 py-12 md:py-24">
        {/* Section 1: Image left + text right */}
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          {/* Profile image */}
          <div className="flex-shrink-0 w-full md:w-80">
            <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center transform hover:-translate-y-1 transition-all duration-200 shadow-md">
              <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-blue-500 shadow-lg mb-4">
                <img
                  src="https://pbs.twimg.com/profile_images/1889587118030180352/u8VidDs0_400x400.jpg"
                  alt="Profile Picture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">Luke</div>
                <div className="text-blue-600 text-sm font-medium">{subtitle}</div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 mt-8 md:mt-0">
            <div className="mb-4">
              <span className="block text-sm font-medium text-gray-500 mb-6 tracking-wider uppercase">{label}</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#030303]">
                {heading}
              </h2>
            </div>

            {paragraphs.map((p, i) => (
              <p key={i} className="text-lg text-gray-600 mb-4 whitespace-pre-line">{p.value}</p>
            ))}
          </div>
        </div>

        {/* Section 2: Principles list */}
        <div className="border-t border-gray-200 pt-8 max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            As a solopreneur, I know time is precious. That's why I built Luke AI with three core principles:
          </p>

          <ol className="list-decimal pl-8 mb-8 space-y-4">
            {principles.map((principle, i) => (
              <li key={i}><span className="font-medium text-gray-900">{principle.title}</span> — {principle.description}</li>
            ))}
          </ol>

          <div className="mt-8">
            <p className="text-lg text-gray-600">
              {outro}
            </p>
          </div>
        </div>
      </div>
    );
  },
};
