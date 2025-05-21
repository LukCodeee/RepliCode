import { ComponentConfig } from "@measured/puck";

export type FeaturesProps2 = {
  label: string;
  title: string;
  titleHighlightedText: string;
  description: string;
  button: {
    text: string;
    link: string;
    show: boolean;
  };
};

export const Features2: ComponentConfig<FeaturesProps2> = {
  fields: {
    label: { type: "text", label: "Section Label (above title)" },
    title: { type: "text", label: "Section Title (main, without highlight)" },
    titleHighlightedText: { type: "text", label: "Section Title Highlighted Text (will be emphasized)" },
    description: { type: "textarea", label: "Section Description" },
    button: {
      type: "object",
      label: "Button",
      objectFields: {
        text: { type: "text", label: "Button Text" },
        link: { type: "text", label: "Button Link" },
        show: { type: "select", label: "Show Button", options: [
          { label: "Yes", value: true },
          { label: "No", value: false }
        ]}
      }
    }
  },
  defaultProps: {
    label: "- FEATURE 2",
    title: "Cost saving in a smart ",
    titleHighlightedText: "way",
    description: "Luke AI is a cost-saving tool that helps you reduce your expenses by automating repetitive tasks and streamlining your workflow.",
    button: {
      text: "Try for free",
      link: "#try-for-free",
      show: true
    }
  },
  render: ({ label, title, titleHighlightedText, description, button }) => {
    return (
      <section className="w-full pb-24 px-4 pt-12 md:pt-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Content Section */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="space-y-4">
              <span className="block text-sm font-medium text-gray-500 mb-6 tracking-wider uppercase">{label}</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {title}<span className="text-blue-600">{titleHighlightedText}</span>
              </h2>
              <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                {description}
              </p>
            </div>
            <div className="pt-4">
              {button?.show && (
                <a
                  href={button.link}
                  className="px-6 py-3.5 rounded-lg text-base font-medium bg-blue-600 text-white hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  {button.text}
                </a>
              )}
            </div>
          </div>
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="/images/template-blocks-placeholders/feature2.png" 
              alt="SmartSave security visualization" 
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
    );
  },
}; 