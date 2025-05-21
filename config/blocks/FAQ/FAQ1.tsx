import Image from "next/image";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";


import { ComponentConfig } from "@measured/puck";

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQProps1 = {
  title: string;
  faqs: FAQItem[];
};

export const FAQ1: ComponentConfig<FAQProps1> = {
  fields: {
    title: { type: "text", label: "Section Title" },
    faqs: {
      type: "array",
      label: "FAQs",
      arrayFields: {
        question: { type: "text", label: "Question" },
        answer: { type: "textarea", label: "Answer" }
      },
      defaultItemProps: {
        question: "New question?",
        answer: "New answer."
      }
    }
  },
  defaultProps: {
    title: "FAQ",
    faqs: [
      {
        question: "How does this work?",
        answer:
          "Our platform leverages modern AI and cloud infrastructure to deliver the features you see. Simply sign up, add your data, and start getting insights right away.",
      },
      {
        question: "What are the benefits?",
        answer:
          "You get faster time‑to‑value, reduced operational overhead, and insights that help you grow your business without extra hassle.",
      },
      {
        question: "Is it difficult to use?",
        answer:
          "Nope. The interface is designed to be intuitive, and setup takes less than five minutes—no coding skills required.",
      },
      {
        question: "Can I have custom pricing?",
        answer:
          "Absolutely! Contact our sales team and we'll tailor a plan that fits your exact needs and scale.",
      },
      {
        question: "Is there trial version available?",
        answer:
          "Yes — sign up for a 14‑day free trial. No credit card required, cancel anytime.",
      },
      {
        question: "Where do I sign up?",
        answer:
          "Click the “Get Started” button at the top‑right of the page or visit our pricing section to choose a plan.",
      }
    ]
  },
  render: ({ title, faqs }) => {
    return (
      <section className="mx-auto max-w-5xl px-4 py-12 md:py-24 text-center">
          {/* Hero icon */}
          <div className="flex justify-center">
            <Image
              src="/images/template-blocks-placeholders/faq-img.png"
              alt=""
              width={200}
              height={200}
              priority
            />
          </div>
    
          {/* Heading */}
          <h2 className="mt-8 text-3xl font-semibold leading-tight sm:text-5xl font-poppins">
            {title}
          </h2>
    
          {/* FAQ accordion */}
          <Accordion.Root
            type="single"
            collapsible
            className="mt-12 w-full border-y border-gray-200 text-left"
          >
            {faqs.map((item, idx) => (
              <Accordion.Item
                key={idx}
                value={`item-${idx}`}
                className="border-b border-gray-200 last:border-b-0"
              >
                <Accordion.Header asChild>
                  <Accordion.Trigger
                    className="group flex w-full items-center justify-between py-5 text-base font-medium focus:outline-none cursor-pointer"
                  >
                    {item.question}
                    <ChevronDown
                      className="h-5 w-5 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180"
                      aria-hidden
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-0 pb-5 pr-7 text-sm text-gray-600">
                  {item.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </section>
    );
  },
}; 

