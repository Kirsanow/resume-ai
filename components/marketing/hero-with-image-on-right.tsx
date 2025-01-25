export default function HeroWithImageOnRight() {
  return (
    <div className="bg-white">
      <div className="isolate overflow-hidden relative bg-gradient-to-b from-blue-100/20">
        <div className="pt-10 pb-24 mx-auto max-w-7xl sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <img
                  className="h-11"
                  src="/resumix-logo.svg"
                  alt="Resumix Logo"
                />
                {/* <div className="mt-24 sm:mt-32 lg:mt-16">
                  <a href="#" className="inline-flex space-x-6">
                    <span className="px-3 py-1 text-sm font-semibold leading-6 text-blue-600 rounded-full ring-1 ring-inset bg-blue-600/10 ring-blue-600/10">
                      What's new
                    </span>
                    <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                      <span>Just shipped v0.1.0</span>
                      <ChevronRightIcon
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </div> */}
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Your AI Career Coach Is Here
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Join successful job seekers who used Resumix to create winning
                  resumes and nail their interviews. Powered by AI, perfected by
                  you.
                </p>
                <div className="flex gap-x-6 items-center mt-10">
                  <a
                    href="#"
                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover  :bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Join Waitlist
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Learn More <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0">
            <div className="overflow-hidden relative bg-blue-500 shadow-xl md:rounded-3xl">
              <div
                className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-blue-100 opacity-20 ring-1 ring-inset ring-white"
                aria-hidden="true"
              />
              <img
                src="/resume-hero-small.png"
                alt="Resume Builder Preview"
                className="relative w-full h-auto rounded-xl ring-1 shadow-2xl ring-white/10"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white -z-10 sm:h-32" />
      </div>
    </div>
  );
}
