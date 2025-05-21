import { ComponentConfig } from "@measured/puck";

export type CTAAvatar = {
  avatarId: number;
};

export type CTAProps1 = {
  heading: string;
  description: string;
  button: {
    text: string;
    link: string;
    show: boolean;
  };
  foundersCount: number;
  avatars: CTAAvatar[];
};

export const CTA1: ComponentConfig<CTAProps1> = {
  fields: {
    heading: { type: "text", label: "Main Heading" },
    description: { type: "textarea", label: "Description" },
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
    },
    foundersCount: { type: "number", label: "Founders Count" },
    avatars: {
      type: "array",
      label: "Avatars (pravatar.cc ID)",
      arrayFields: {
        avatarId: { type: "number", label: "Avatar ID (for pravatar.cc)" }
      },
      defaultItemProps: {
        avatarId: 1
      }
    }
  },
  defaultProps: {
    heading: "Turn ideas into reality",
    description: "Turn your ideas into reality with our AI-powered platform.",
    button: {
      text: "Start a 14‑day free trial",
      link: "#start-trial",
      show: true
    },
    foundersCount: 3582,
    avatars: [
      { avatarId: 32 },
      { avatarId: 44 },
      { avatarId: 65 },
      { avatarId: 75 },
      { avatarId: 12 },
      { avatarId: 68 }
    ]
  },
  render: ({ heading, description, button, foundersCount, avatars }) => {
    return (
      <section className="flex items-center justify-center py-16 md:py-24 px-4">
        <div className="w-full max-w-3xl rounded-2xl border border-gray-200 bg-white shadow-lg p-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            {heading}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {description}
          </p>

          <div className="mt-10">
            {button?.show && (
              <a
                href={button.link}
                className="inline-flex items-center justify-center rounded-md bg-blue-500 px-8 py-4 text-base font-semibold text-white shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition transform hover:-translate-y-0.5 duration-200 cursor-pointer"
              >
                {button.text}
              </a>
            )}
          </div>

          <div className="mt-10 flex flex-col items-center">
            <p className="text-sm text-gray-500">
              Join <span className="font-semibold text-gray-900">{foundersCount.toLocaleString()}</span> startup founders
            </p>
            <div className="mt-4 flex -space-x-3">
              {avatars.map((a, idx) => (
                <img
                  key={idx}
                  src={`https://i.pravatar.cc/50?img=${a.avatarId}`}
                  alt="Founder headshot"
                  className="h-10 w-10 rounded-full border-2 border-white ring-1 ring-gray-200"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  },
}; 