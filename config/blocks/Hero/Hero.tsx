import { ComponentConfig } from "@measured/puck";
import { ImageIcon } from "lucide-react";

export type HeroProps = {
  title: string;
  description: string;
  ctaButtonText: string;
};

export const Hero: ComponentConfig<HeroProps> = {
  fields: {
    title: { type: "text" },
    description: { type: "text" },
    ctaButtonText: { type: "text" },
  },
  defaultProps: {
    title: "Hero",
    description: "Hero description",
    ctaButtonText: "Get Started Free",
  },
  render: ({ title, description, ctaButtonText }) => {
    return (
      <div className="w-full py-24 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Content */}
          <div className="flex items-center">
            <div>
              <h1 className="text-5xl md:text-6xl leading-[1.1] font-bold mb-6">
                {title}
              </h1>
              <p className="text-lg text-neutral-700 mb-8">
                {description}
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                  {ctaButtonText}
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative">
            <div className="bg-gray-100 rounded-lg aspect-square w-full flex items-center justify-center">
              <div className="flex flex-col items-center text-gray-400">
                <ImageIcon className="w-16 h-16 mb-3" />
                <p className="text-base">Visual editor interface</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};