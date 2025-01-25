import { CheckIcon } from "@heroicons/react/20/solid";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Basic",
    id: "tier-basic",
    href: "#",
    priceMonthly: "$9",
    description: "Perfect for job seekers ready to take the first step.",
    features: [
      "1 professional resume",
      "AI-powered content suggestions",
      "Basic ATS-friendly templates",
      "Export to PDF and Word",
      "Email support",
    ],
    mostPopular: false,
  },
  {
    name: "Pro",
    id: "tier-pro",
    href: "#",
    priceMonthly: "$19",
    description: "Everything you need for a successful job search.",
    features: [
      "3 tailored resumes",
      "Advanced AI writing assistant",
      "All premium templates",
      "Cover letter builder",
      "Interview preparation tools",
      "Priority email support",
    ],
    mostPopular: true,
  },
  {
    name: "Career",
    id: "tier-career",
    href: "#",
    priceMonthly: "$29",
    description: "For professionals serious about career growth.",
    features: [
      "Unlimited resumes",
      "Advanced AI with custom training",
      "Exclusive executive templates",
      "Salary insights and negotiation tips",
      "1-on-1 resume review",
      "Priority 24/7 support",
    ],
    mostPopular: false,
  },
];

export default function Pricing() {
  return (
    <div className="py-24 sm:pt-48">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Simple Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the perfect plan for your career goals
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-center text-gray-600">
          Start free and upgrade anytime. All plans include a 14-day money-back
          guarantee to ensure you're completely satisfied with your investment
          in your career.
        </p>
        <div className="grid isolate grid-cols-1 gap-y-8 mx-auto mt-16 max-w-md sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={cn(
                tier.mostPopular ? "lg:z-10 lg:rounded-b-none" : "lg:mt-8",
                tierIdx === 0 ? "lg:rounded-r-none" : "",
                tierIdx === tiers.length - 1 ? "lg:rounded-l-none" : "",
                "flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
              )}
            >
              <div>
                <div className="flex gap-x-4 justify-between items-center">
                  <h3
                    id={tier.id}
                    className={cn(
                      tier.mostPopular ? "text-blue-600" : "text-gray-900",
                      "text-lg font-semibold leading-8"
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-blue-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-600">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {tier.description}
                </p>
                <p className="flex gap-x-1 items-baseline mt-6">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {tier.priceMonthly}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    /month
                  </span>
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        aria-hidden="true"
                        className="flex-none w-5 h-6 text-blue-600"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={cn(
                  tier.mostPopular
                    ? "bg-blue-600 text-white shadow-sm hover:bg-blue-500"
                    : "text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300",
                  "mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                )}
              >
                Buy plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
