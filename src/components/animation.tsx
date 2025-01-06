'use client'

import { TypeAnimation } from "react-type-animation"

export default function HeroSection() {
  return (
    <section className="relative  overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 text-center sm:text-left relative">
          <h1 className="mb-4 text-5xl sm:text-5xl lg:text-6xl font-semibold text-white">
            <div className="overflow-hidden">
              <TypeAnimation
                sequence={[
                  "HoᏔ AI Ꮤill  ",
                  1000,
                  "Change the Future",
                  1000,
                ]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
                className="inline-block animate-slide"
              />
            </div>
          </h1>
        </div>
      </div>

      {/* Add this CSS for the sliding effect */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-slide {
          animation: slide 5s linear infinite;
        }
      `}</style>
    </section>
  )
}

