"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import BentoGrid from "@/components/marketing/bento-grid";
import Features from "@/components/marketing/features";
import TestimonialLarge from "@/components/marketing/testimonial-large";
import Pricing from "@/components/marketing/pricing";
import FAQ from "@/components/marketing/faq";
import CTA from "@/components/marketing/cta";
import Footer from "@/components/marketing/footer";
import HeroWithImageOnRight from "@/components/marketing/hero-with-image-on-right";

const navigation = [
  { name: "Features", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Contact", href: "#" },
];

export default function WithLargeScreenshot() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex justify-between items-center p-6 lg:px-8"
        >
          <div className="flex lg:flex-1"></div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="w-6 h-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover  :bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Join Waitlist <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="overflow-y-auto fixed inset-y-0 right-0 z-50 px-6 py-6 w-full bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex justify-between items-center">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Resumix</span>
                <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="w-auto h-8"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="w-6 h-6" />
              </button>
            </div>
            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6 space-y-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover  :bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Join Waitlist <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main className="isolate">
        {/* Hero section */}
        <HeroWithImageOnRight />

        {/* Logo cloud */}
        {/* <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid grid-cols-4 gap-x-8 gap-y-12 items-center mx-auto max-w-lg sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              alt="Transistor"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
              width={158}
              height={48}
              className="object-contain col-span-2 w-full max-h-12 lg:col-span-1"
            />
            <img
              alt="Reform"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
              width={158}
              height={48}
              className="object-contain col-span-2 w-full max-h-12 lg:col-span-1"
            />
            <img
              alt="Tuple"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
              width={158}
              height={48}
              className="object-contain col-span-2 w-full max-h-12 lg:col-span-1"
            />
            <img
              alt="SavvyCal"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
              width={158}
              height={48}
              className="object-contain col-span-2 w-full max-h-12 sm:col-start-2 lg:col-span-1"
            />
            <img
              alt="Statamic"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
              width={158}
              height={48}
              className="object-contain col-span-2 col-start-2 w-full max-h-12 sm:col-start-auto lg:col-span-1"
            />
          </div>
          <div className="flex justify-center mt-16">
            <p className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20">
              <span className="hidden md:inline">
                Transistor saves up to $40,000 per year, per employee by working
                with us.
              </span>
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" /> Read
                our case study <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div> */}

        {/* BenoGrid */}

        <BentoGrid />
        {/* Feature section */}
        <Features />

        {/* Testimonial section */}
        <TestimonialLarge />
        {/* Pricing section */}
        <Pricing />
        {/* FAQs */}
        <FAQ />

        {/* CTA section */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
