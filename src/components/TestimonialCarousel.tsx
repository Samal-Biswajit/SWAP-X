"use client";

import { useState, useEffect, useCallback } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { BsStarFill } from "react-icons/bs";

const testimonials = [
  {
    name: "Raju Sahoo",
    area: "Nayapalli, Bhubaneswar",
    quote:
      "I used to lose 5-6 hours daily charging my battery. Now I swap in 5 minutes and take 8 more trips! SwapX changed my life.",
    rating: 5,
    earnings: "+₹400/day",
  },
  {
    name: "Manoj Behera",
    area: "Patia, Bhubaneswar",
    quote:
      "The subscription is worth every rupee. No more electricity bills for charging, no more waiting. I just swap and go.",
    rating: 5,
    earnings: "+₹350/day",
  },
  {
    name: "Bikash Nayak",
    area: "Rasulgarh, Bhubaneswar",
    quote:
      "My family is happier now. I earn more and come home earlier. Battery swapping is the future for e-rickshaw drivers.",
    rating: 5,
    earnings: "+₹500/day",
  },
  {
    name: "Prashant Das",
    area: "Mancheswar, Bhubaneswar",
    quote:
      "SwapX staff is very helpful. The battery quality is excellent — I get full range every time. Highly recommended!",
    rating: 5,
    earnings: "+₹300/day",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="card text-center relative overflow-hidden">
        {/* Quote mark background */}
        <div className="absolute top-4 left-8 text-8xl font-black text-accent/5">&ldquo;</div>

        {/* Stars */}
        <div className="flex items-center justify-center gap-1 mb-6">
          {Array.from({ length: t.rating }).map((_, i) => (
            <BsStarFill key={i} className="text-amber text-sm" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-lg md:text-xl text-secondary leading-relaxed mb-8 relative z-10 italic">
          &ldquo;{t.quote}&rdquo;
        </p>

        {/* Author */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-lg">
            {t.name.charAt(0)}
          </div>
          <div>
            <p className="font-bold">{t.name}</p>
            <p className="text-xs text-muted">{t.area}</p>
          </div>
          <div className="badge badge-green mt-1">
            {t.earnings} extra income
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-secondary hover:text-accent hover:border-accent transition-colors"
            aria-label="Previous testimonial"
          >
            <HiChevronLeft />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-accent w-6" : "bg-muted"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-secondary hover:text-accent hover:border-accent transition-colors"
            aria-label="Next testimonial"
          >
            <HiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
