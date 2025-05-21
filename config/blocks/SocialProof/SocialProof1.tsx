import { ComponentConfig } from "@measured/puck";
import { StarIcon } from "lucide-react";

export type SocialProofProps1 = {
  title: string;
  titleHighlightedText: string;
  description: string;
  testimonials: {
    quote: string;
    highlightedText: string;
    author: string;
    title: string;
    rating: number;
    avatarId: number;
  }[];
};

interface TestimonialCardProps {
  quote: string;
  highlightedText: string;
  author: string;
  title: string;
  rating: number;
  avatarId: number;
}

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <StarIcon key={index} fill="gold" className="text-yellow-400"/>
      ))}
    </div>
  );
};
const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  highlightedText,
  author, 
  title, 
  rating,
  avatarId 
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <p className="text-xl font-bold mb-6">
        "{quote} <span className="text-blue-600">{highlightedText}</span>"
      </p>
      <div className="mt-auto">
        <StarRating rating={rating} />
        <div className="flex items-center mt-4 gap-4">
          <img 
            src={`https://i.pravatar.cc/50?img=${avatarId}`}
            alt={author}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="text-xl font-bold">{author}</h3>
            <p className="text-gray-600">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SocialProof1: ComponentConfig<SocialProofProps1> = {
  fields: {
    title: { type: "text", label: "Section Title (main, without highlight)" },
    titleHighlightedText: { type: "text", label: "Section Title Highlighted Text (will be emphasized)" },
    description: { type: "textarea", label: "Section Description" },
    testimonials: {
      type: "array",
      label: "Testimonials",
      arrayFields: {
        quote: { type: "textarea", label: "Quote (main text, without highlight)" },
        highlightedText: { type: "text", label: "Highlighted Text (will be emphasized)" },
        author: { type: "text", label: "Author Name" },
        title: { type: "text", label: "Author Title" },
        rating: { type: "number", label: "Rating (1-5)" },
        avatarId: { type: "number", label: "Avatar ID (for pravatar.cc)" },
      },
      defaultItemProps: {
        quote: "New testimonial quote.",
        highlightedText: "highlighted part",
        author: "Author Name",
        title: "Author Title",
        rating: 5,
        avatarId: 1,
      }
    }
  },
  defaultProps: {
    title: "Luke AI is loved by ",
    titleHighlightedText: "2047 customers",
    description: "What our customers are saying:",
    testimonials: [
      {
        quote: "Since implementing Luke AI our business has seen significant growth.",
        highlightedText: "significant growth",
        author: "Jack Sibire",
        title: "Lead Manager, Growio",
        rating: 5,
        avatarId: 4
      },
      {
        quote: "I recommend Luke AI to any business looking for improvement.",
        highlightedText: "recommend Luke AI",
        author: "Adele Mouse",
        title: "Product Manager, Mousio",
        rating: 5,
        avatarId: 5
      },
      {
        quote: "I can't imagine running our company without this Luke AI tool.",
        highlightedText: "can't imagine running our company without",
        author: "Ben Clock",
        title: "CTO, Clockwork",
        rating: 5,
        avatarId: 6
      }
    ]
  },
  render: ({ title, titleHighlightedText, description, testimonials }) => {
    return (
      <section className="py-24 max-w-7xl mx-auto">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-4xl leading-[80px] font-semibold text-[#030303] mb-6">
              {title} <span className="text-blue-600">{titleHighlightedText}</span>
            </h2>
            {description && <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard
                key={idx}
                quote={testimonial.quote}
                highlightedText={testimonial.highlightedText}
                author={testimonial.author}
                title={testimonial.title}
                rating={testimonial.rating}
                avatarId={testimonial.avatarId}
              />
            ))}
          </div>
        </div>
      </section>
    );
  },
}; 