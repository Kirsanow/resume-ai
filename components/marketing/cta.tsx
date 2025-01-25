export default function CTA() {
  return (
    <div className="relative px-6 mt-32 -z-10 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl sm:bottom-0 sm:right-[calc(50%-6rem)] sm:top-auto sm:translate-y-0 sm:transform-gpu sm:justify-end"
      >
        <div
          style={{
            clipPath:
              "polygon(73.6% 48.6%, 91.7% 88.5%, 100% 53.9%, 97.4% 18.1%, 92.5% 15.4%, 75.7% 36.3%, 55.3% 52.8%, 46.5% 50.9%, 45% 37.4%, 50.3% 13.1%, 21.3% 36.2%, 0.1% 0.1%, 5.4% 49.1%, 21.4% 36.4%, 58.9% 100%, 73.6% 48.6%)",
          }}
          className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-blue-400 to-blue-600 opacity-25"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Land Your Dream Job Faster
          <br />
          Start Building Your Future Today
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
          Join thousands of successful job seekers who've used our AI-powered
          platform to create winning resumes. Get started in minutes and
          increase your interview chances by 3x.
        </p>
        <div className="flex gap-x-6 justify-center items-center mt-10">
          <a
            href="#"
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Join the waitlist
          </a>
          {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              View Success Stories <span aria-hidden="true">→</span>
            </a> */}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="hidden overflow-hidden absolute right-0 top-full left-1/2 blur-3xl transform-gpu -translate-y-1/2 -z-10 sm:block"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-blue-400 to-blue-600 opacity-30"
        />
      </div>
    </div>
  );
}
