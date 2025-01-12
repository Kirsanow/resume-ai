import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-100/50" />
        <Image
          src="/hero-bg.jpg"
          alt="Background pattern"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>

      {/* Hero content */}
      <div className="container px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left column - Text content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              The professional resume builder{" "}
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Your engaging subheadline that explains your value proposition and
              speaks directly to your target audience&apos;s needs.
            </p>
            <div className="flex gap-4 mt-8">
              <Button
                size="lg"
                className="text-lg font-semibold px-8 py-8 hover:scale-105 transition-transform"
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Right column - Feature image */}
          <div className="relative aspect-square lg:aspect-auto">
            <Image
              src="/hero-feature.png"
              alt="Product feature"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Social proof section */}
        <div className="mt-24">
          <p className="text-sm font-semibold text-center text-zinc-600">
            Trusted by leading companies worldwide
          </p>
          <div className="grid grid-cols-2 gap-8 mt-8 md:grid-cols-4 lg:grid-cols-5">
            {/* Add your company logos here */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-center">
                <Image
                  src={`/logo-${i}.svg`}
                  alt={`Company ${i}`}
                  width={120}
                  height={40}
                  className="h-8 opacity-50 grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
