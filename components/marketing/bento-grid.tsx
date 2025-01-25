export default function BentoGrid() {
  return (
    <div className="pb-24 sm:pb-32">
      <div className="px-6 mx-auto max-w-2xl lg:max-w-7xl lg:px-8">
        <h2 className="font-semibold text-center text-blue-600 text-base/7">
          Build Your Career
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-4xl font-semibold tracking-tight text-center text-balance text-gray-950 sm:text-5xl">
          Create a resume that opens doors
        </p>
        <div className="grid gap-4 mt-10 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  AI-Powered Resume Builder
                </p>
                <p className="mt-2 max-w-lg text-gray-600 text-sm/6 max-lg:text-center">
                  Transform your experience into a professional resume in
                  minutes. Our AI assistant helps you write compelling bullet
                  points and highlights your achievements effectively.
                </p>
              </div>
              <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="">
                  <img
                    className="object-cover object-top size-full"
                    src="/bento-feature-1.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Pass Any ATS System
                </p>
                <p className="mt-2 max-w-lg text-gray-600 text-sm/6 max-lg:text-center">
                  Our templates are optimized for Applicant Tracking Systems,
                  ensuring your resume gets past automated screenings and into
                  human hands.
                </p>
              </div>
              <div className="flex flex-1 justify-center items-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  className="w-full max-lg:max-w-xs"
                  src="/bento-feature-2.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px bg-white rounded-lg"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Expert-Crafted Content
                </p>
                <p className="mt-2 max-w-lg text-gray-600 text-sm/6 max-lg:text-center">
                  Access industry-specific phrases and power words that make
                  your resume stand out. Let our AI suggest the perfect way to
                  describe your experience.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  className="h-[min(152px,40cqw)] object-cover"
                  src="/bento-feature-3.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="absolute inset-px rounded-lg ring-1 shadow-sm pointer-events-none ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Interview Success Coach
                </p>
                <p className="mt-2 max-w-lg text-gray-600 text-sm/6 max-lg:text-center">
                  Practice with our AI interview coach that generates custom
                  questions based on your resume. Get real-time feedback and
                  improve your interview skills.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="">
                    <img
                      className="object-cover object-top size-full"
                      src="/bento-feature-4.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
