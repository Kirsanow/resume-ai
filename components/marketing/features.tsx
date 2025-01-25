import {
  SparklesIcon,
  ChartBarIcon,
  DocumentCheckIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "AI Writing Assistant",
    description:
      "Transform your experience into powerful achievements. Our AI helps you craft professional bullet points and summaries that highlight your true potential.",
    icon: SparklesIcon,
  },
  {
    name: "Salary Insights",
    description:
      "Know your worth with real-time salary data. Compare offers, negotiate confidently, and ensure you're getting paid what you deserve in your industry.",
    icon: ChartBarIcon,
  },
  {
    name: "Recruiter-Approved Templates",
    description:
      "Stand out with modern, ATS-optimized templates tested by hiring managers. Each template is crafted to maximize your chances of landing interviews.",
    icon: DocumentCheckIcon,
  },
  {
    name: "Career Growth Tools",
    description:
      "Get personalized job recommendations, track your applications, and prepare for interviews with AI-powered mock interviews tailored to your industry.",
    icon: BriefcaseIcon,
  },
];

export default function Features() {
  return (
    <div className="px-6 mx-auto max-w-7xl lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-blue-600">
          Maximize Your Potential
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Everything you need to land your dream job
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          More than just a resume builder. Get the tools, insights, and guidance
          you need to advance your career and stand out in today's competitive
          job market.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 max-w-xl lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="flex absolute top-0 left-0 justify-center items-center w-10 h-10 bg-blue-600 rounded-lg">
                  <feature.icon
                    aria-hidden="true"
                    className="w-6 h-6 text-white"
                  />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
