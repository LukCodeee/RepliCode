import { ComponentConfig } from '@measured/puck';
import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

export interface Solution1Props {
  headerContent: {
    mainTitle: string;
    description: string;
  };
  ctaButton: {
    buttonText: string;
    buttonLink: string;
    showButton: boolean;
  };
  solutionItems: {
    solutionTitle: string;
    solutionSubTitle: string;
    solutionDescription: string;
  }[];
}

export const Solution1: ComponentConfig<Solution1Props> = {
  fields: {
    headerContent: {
      type: 'object',
      label: 'Header Content',
      objectFields: {
        mainTitle: { 
          type: 'textarea', 
          label: 'Main Title (Large headline)' 
        },
        description: { 
          type: 'textarea', 
          label: 'Description (Supporting text)' 
        }
      }
    },
    ctaButton: {
      type: 'object',
      label: 'Call to Action Button',
      objectFields: {
        buttonText: { 
          type: 'text', 
          label: 'Button Text' 
        },
        buttonLink: { 
          type: 'text', 
          label: 'Button Link' 
        },
        showButton: { 
          type: 'select', 
          label: 'Show Button',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false }
          ]
        }
      }
    },
    solutionItems: {
      type: 'array',
      label: 'Solution Items',
      arrayFields: {
        solutionTitle: { 
          type: 'text', 
          label: 'Solution Title (Main Title)' 
        },
        solutionSubTitle: {
          type: 'text',
          label: 'Solution Subtitle'
        },
        solutionDescription: { 
          type: 'textarea', 
          label: 'Solution Description' 
        }
      },
      defaultItemProps: {
        solutionTitle: 'New Solution',
        solutionSubTitle: 'Subtitle for this solution',
        solutionDescription: 'Description for this solution'
      }
    }
  },
  defaultProps: {
    headerContent: {
      mainTitle: 'Meet your AI partner.',
      description: 'Available 24/7. Ready to do everything. Our AI assistant streamlines your workflow by handling repetitive tasks, providing intelligent insights, and adapting to your unique business needs.',
    },
    ctaButton: {
      buttonText: 'Try for free',
      buttonLink: '#try-for-free',
      showButton: true
    },
    solutionItems: [
      {
        solutionTitle: 'Effortless Integration',
        solutionSubTitle: 'Integrate in minutes, not months.',
        solutionDescription: 'Our platform seamlessly integrates with your existing systems in minutes, not months. No complicated setup or downtime required.'
      },
      {
        solutionTitle: '30% Cost Reduction',
        solutionSubTitle: 'Save costs from day one.',
        solutionDescription: 'Customers report an average of 30% reduction in operational costs within the first quarter of implementation.'
      },
      {
        solutionTitle: 'Real-time Analytics',
        solutionSubTitle: 'Insights at your fingertips.',
        solutionDescription: 'Make data-driven decisions with powerful real-time analytics and customizable dashboards that provide actionable insights.'
      }
    ]
  },
  render: ({ headerContent, ctaButton, solutionItems }) => {
    if(!headerContent?.mainTitle || !headerContent?.description || !ctaButton?.buttonText || !ctaButton?.buttonLink) {
      return (
        <div className="flex items-center justify-center py-24">
          <h1 className="text-2xl font-bold">Configure error in your solution</h1>
        </div>
      );
    }
    
    return (
      <div className="flex items-center justify-center py-24">
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-6xl mx-auto flex flex-col lg:flex-row overflow-visible">
          <div className="p-6 sm:p-8 md:p-10 lg:p-12 lg:w-1/2 flex flex-col justify-center relative">
            <div className="absolute -top-56 lg:-top-48 left-20 -ml-8 -mt-8 md:ml-0 md:mt-0 hidden lg:block">
              <img 
                src="/images/template-blocks-placeholders/solution1.png" 
                alt="3D Illustration" 
              />
            </div>
            <div className="mt-4 lg:mt-48">
              <h1 className="font-poppins text-4xl sm:text-5xl md:text-6xl leading-tight md:leading-[80px] font-semibold text-[#030303] mb-4 md:mb-6">
                {headerContent?.mainTitle}
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mb-6 md:mb-8">
                {headerContent?.description}
              </p>
              {ctaButton?.showButton && (
                <div>
                  <a 
                    href={ctaButton?.buttonLink}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 md:py-3 px-6 md:px-8 rounded-lg text-base md:text-lg transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer inline-block"
                  >
                    {ctaButton.buttonText}
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="p-6 sm:p-8 md:p-10 lg:p-12 lg:w-1/2 bg-white flex flex-col justify-center rounded-2xl">
            {solutionItems.map((solution, index) => (
              <React.Fragment key={index}>
                <div className="py-3 md:py-4">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 text-gray-900">
                    {solution.solutionTitle}
                  </h2>
                  <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-blue-600">
                    {solution.solutionSubTitle}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600">
                    {solution.solutionDescription}
                  </p>
                </div>
                {index < solutionItems.length - 1 && (
                  <div className="h-px bg-gray-200 my-3 md:my-4"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    );
  }
};