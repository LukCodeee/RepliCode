import { ComponentConfig } from "@measured/puck";
import { ClipboardList, Timer, DollarSign, Image as ImageIcon } from "lucide-react";

// Define structure for the comparison points
interface ComparisonPoint {
  advantageIcon: "ClipboardList" | "Timer" | "DollarSign"; 
  advantageTitle: string;
  advantageDescription: string;
}

// Define structure for the traditional points
interface TraditionalPoint {
  drawbackText: string;
}

export type ProblemBlockProps = {
  comparisonHeadline: string;
  highlightedWord: string;
  comparisonSubheadline: string;
  visualBuilderDetails: {
    visualBuilderTitle: string;
    visualBuilderAdvantages: ComparisonPoint[];
  };
  traditionalDevDetails: {
    traditionalDevTitle: string;
    traditionalDevDrawbacks: TraditionalPoint[];
  };
  closingCallToActionText: string;
  callToActionButtonText: string;
  callToActionButtonLink: string;
};

// Helper to map icon names to components
const iconMap = {
  ClipboardList: ClipboardList,
  Timer: Timer,
  DollarSign: DollarSign,
};

export const ProblemBlock1: ComponentConfig<ProblemBlockProps> = {
  fields: {
    comparisonHeadline: { type: "text", label: "Headline" },
    highlightedWord: { type: "text", label: "Highlighted Word in Headline" },
    comparisonSubheadline: { type: "textarea", label: "Subheadline" },
    visualBuilderDetails: {
      type: "object",
      label: "Visual Builder Column",
      objectFields: {
        visualBuilderTitle: { type: "text", label: "Title" },
        visualBuilderAdvantages: {
          type: "array",
          label: "Advantages",
          arrayFields: {
            advantageIcon: { 
              type: "select", 
              label: "Icon",
              options: [
                { label: "Clipboard List", value: "ClipboardList" },
                { label: "Timer", value: "Timer" },
                { label: "Dollar Sign", value: "DollarSign" },
              ]
            },
            advantageTitle: { type: "text", label: "Advantage Title" },
            advantageDescription: { type: "textarea", label: "Advantage Description" }
          },
          defaultItemProps: {
            advantageIcon: "ClipboardList",
            advantageTitle: "New Advantage",
            advantageDescription: "Description for the new advantage."
          }
        }
      }
    },
    traditionalDevDetails: {
      type: "object",
      label: "Traditional Dev Column",
      objectFields: {
        traditionalDevTitle: { type: "text", label: "Title" },
        traditionalDevDrawbacks: {
          type: "array",
          label: "Drawbacks",
          arrayFields: {
            drawbackText: { type: "text", label: "Drawback" }
          },
          defaultItemProps: {
            drawbackText: "New drawback"
          }
        }
      }
    },
    closingCallToActionText: { type: "text", label: "CTA Text" },
    callToActionButtonText: { type: "text", label: "Button Text" },
    callToActionButtonLink: { type: "text", label: "Button Link" }
  },
  defaultProps: {
    comparisonHeadline: "Visual Editing vs Traditional Development",
    highlightedWord: "Visual Editing",
    comparisonSubheadline: "See how a visual page builder can transform your web development workflow",
    visualBuilderDetails: {
      visualBuilderTitle: "Building with Puck",
      visualBuilderAdvantages: [
        {
          advantageIcon: "ClipboardList",
          advantageTitle: "Drag-and-Drop Editing (No Code)",
          advantageDescription: "Create and modify pages visually with an intuitive interface. Add components, edit content, and see changes in real-time.",
        },
        {
          advantageIcon: "Timer",
          advantageTitle: "Instant Publishing",
          advantageDescription: "Publish new pages or updates in seconds, without deployments or waiting for developer availability.",
        },
        {
          advantageIcon: "DollarSign",
          advantageTitle: "Developer-Friendly Architecture",
          advantageDescription: "Maintain control with custom React components, TypeScript support, and seamless integration with your existing Next.js app.",
        },
      ],
    },
    traditionalDevDetails: {
      traditionalDevTitle: "Traditional Web Development",
      traditionalDevDrawbacks: [
        { drawbackText: "Development bottlenecks for content changes" },
        { drawbackText: "Content team dependence on developers" },
        { drawbackText: "Slow iteration cycles for new pages" },
        { drawbackText: "Cumbersome deployment processes" },
        { drawbackText: "Risk of code conflicts and bugs" },
        { drawbackText: "Higher total cost of ownership" },
      ],
    },
    closingCallToActionText: "Join hundreds of developers using Puck to build flexible web experiences",
    callToActionButtonText: "Try Puck Today",
    callToActionButtonLink: "#try-puck",
  },
  render: ({ 
    comparisonHeadline, 
    highlightedWord,
    comparisonSubheadline, 
    visualBuilderDetails, 
    traditionalDevDetails, 
    closingCallToActionText, 
    callToActionButtonText, 
    callToActionButtonLink 
  }) => {
    if(!comparisonHeadline || !comparisonSubheadline || !visualBuilderDetails?.visualBuilderTitle || !visualBuilderDetails?.visualBuilderAdvantages || !traditionalDevDetails?.traditionalDevTitle || !traditionalDevDetails?.traditionalDevDrawbacks || !closingCallToActionText || !callToActionButtonText || !callToActionButtonLink) {
      return (
        <div className="flex items-center justify-center py-24">
          <h1 className="text-2xl font-bold">Configure error in your problem block</h1>
        </div>
      );
    }
    // Highlight logic for headline
    let formattedHeadline;
    if (highlightedWord && highlightedWord.trim() && comparisonHeadline.includes(highlightedWord)) {
      const [before, ...rest] = comparisonHeadline.split(highlightedWord);
      const after = rest.join(highlightedWord);
      formattedHeadline = (
        <>
          {before}
          <span className="text-blue-600 font-bold">{highlightedWord}</span>
          {after}
        </>
      );
    } else {
      formattedHeadline = comparisonHeadline;
    }
    return (
      <div className="w-full py-24 bg-white max-w-7xl mx-auto">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-4xl leading-[80px] font-semibold text-[#030303]">{formattedHeadline}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{comparisonSubheadline}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Box  */}
            <div className="rounded-xl overflow-hidden bg-white shadow-lg">
              <div className="relative">
              <img src="/images/template-blocks-placeholders/pros2.png" alt="Pros image" className="w-full aspect-[2/1] object-contain" />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                   {visualBuilderDetails?.visualBuilderTitle}
                </h3>
                
                <div className="space-y-6">
                  {visualBuilderDetails?.visualBuilderAdvantages.map((point, index) => {
                    const IconComponent = iconMap[point.advantageIcon] || ClipboardList; // Default icon
                    return (
                      <div key={index} className="flex gap-4">
                        <IconComponent className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-2">{point.advantageTitle}</h4>
                          <p className="text-neutral-600">{point.advantageDescription}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Box */}
            <div className="rounded-xl overflow-hidden bg-white shadow-lg">
              <div className="relative">
              <img src="/images/template-blocks-placeholders/cons.png" alt="Cons image" className="w-full aspect-[2/1] object-contain" />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6">{traditionalDevDetails?.traditionalDevTitle}</h3>
                
                <div className="space-y-4">
                  {traditionalDevDetails?.traditionalDevDrawbacks.map((point, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-red-500">✕</span>
                      <p>{point.drawbackText}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg font-medium text-blue-600 mb-2">{closingCallToActionText}</p>
            <a href={callToActionButtonLink} className="inline-block px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
              {callToActionButtonText}
            </a>
          </div>
        </div>
      </div>
    );
  },
}; 