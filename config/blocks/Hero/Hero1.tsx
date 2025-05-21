import { ComponentConfig } from '@measured/puck';
import React from 'react';

export type Hero1Props = {
  tagline: string;
  title: string;
  highlightedWord: string;
  description: string;
  primaryButtonDetails: {
    primaryButtonText: string;
    primaryButtonLink: string;
  };
  secondaryButtonDetails: {
    secondaryButtonText: string;
    secondaryButtonLink: string;
    showSecondaryButton: boolean;
  };
};

export const Hero1: ComponentConfig<Hero1Props> = {
  fields: {
    tagline: { type: "text", label: "Tagline (Small text above title)" },
    title: { 
      type: "textarea", 
      label: "Hero Title (Main headline)"
    },
    highlightedWord: {
      type: "text",
      label: "Highlighted Word in Title (will be highlighted if found in title)"
    },
    description: { 
      type: "textarea", 
      label: "Description (Subheadline text)" 
    },
    primaryButtonDetails: {
      type: "object",
      label: "Primary Button",
      objectFields: {
        primaryButtonText: { type: "text", label: "Button Text" },
        primaryButtonLink: { type: "text", label: "Button Link" },
      }
    },
    secondaryButtonDetails: {
      type: "object",
      label: "Secondary Button",
      objectFields: {
        secondaryButtonText: { type: "text", label: "Button Text" },
        secondaryButtonLink: { type: "text", label: "Button Link" },
        showSecondaryButton: { type: "select", label: "Show Secondary Button", options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ] }
      }
    },
  },
  defaultProps: {
    tagline: "- FREE 30 DAYS TRIAL",
    title: "The best way\nto showcase\nyour project.",
    highlightedWord: "way",
    description: "Here you can put a short description about your project.",
    primaryButtonDetails: {
      primaryButtonText: "Try for free",
      primaryButtonLink: "#try-now",
    },
    secondaryButtonDetails: {
      secondaryButtonText: "See how it works",
      secondaryButtonLink: "#how-it-works",
      showSecondaryButton: false
    },

  },
  render: ({ 
    tagline, 
    title, 
    highlightedWord,
    description, 
    primaryButtonDetails, 
    secondaryButtonDetails, 
  }) => {
    if(!title || !tagline || !description || !primaryButtonDetails.primaryButtonText || !primaryButtonDetails.primaryButtonLink) {
      return (
        <div className="flex items-center justify-center py-24">
          <h1 className="text-2xl font-bold">Configure error in your hero</h1>
        </div>
      );
    }
    // Transform title to handle line breaks and highlighting
    let formattedTitle;
    if (highlightedWord && highlightedWord.trim() && title.includes(highlightedWord)) {
      // Split only on the first occurrence
      const [before, ...rest] = title.split(highlightedWord);
      const after = rest.join(highlightedWord);
      formattedTitle = (
        <>
          {before.split('\n').map((line, i, arr) => (
            <React.Fragment key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </React.Fragment>
          ))}
          <span className="bg-blue-600 text-white px-4 py-2 font-bold rounded-sm" style={{display: 'inline-block'}}>{highlightedWord}</span>
          {after.split('\n').map((line, i, arr) => (
            <React.Fragment key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </React.Fragment>
          ))}
        </>
      );
    } else {
      formattedTitle = title.split('\n').map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i < title.split('\n').length - 1 && <br />}
        </React.Fragment>
      ));
    }

    return (
      <section className="w-full flex items-center justify-center p-8">
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between gap-8 md:flex-row flex-col">
          <div className="flex-1 max-w-[600px] md:text-left text-center">
            <span className="block text-sm font-medium text-gray-500 mb-6 tracking-wider uppercase">- {tagline}</span>
            <h1 className="font-poppins text-6xl leading-[80px] font-semibold text-[#030303] mb-6">
              {formattedTitle}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              {description}
            </p>
            <div className="flex gap-4 md:justify-start justify-center flex-col sm:flex-row">
              <a 
                href={primaryButtonDetails.primaryButtonLink} 
                className={`px-6 py-3.5 rounded-lg text-base font-medium bg-blue-600 text-white hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer`}
              >
                {primaryButtonDetails.primaryButtonText}
              </a>
              
              {secondaryButtonDetails?.showSecondaryButton && (
                <a 
                  href={secondaryButtonDetails.secondaryButtonLink}
                  className="px-6 py-3.5 rounded-lg text-base font-medium bg-transparent text-gray-900 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  {secondaryButtonDetails.secondaryButtonText}
                </a>
              )}
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center p-6">
              <img 
                src="/images/template-blocks-placeholders/img-hero1.png"
                alt="Hero image placeholder"
                className={`max-w-full h-auto object-contain md:max-w-full md:mt-0 mt-8 hover:-translate-y-1 transition-transform duration-300`}
              />
          </div>
        </div>
      </section>
    );
  },
};
