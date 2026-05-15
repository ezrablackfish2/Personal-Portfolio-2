import { gsap, Linear } from "gsap";
import React, { MutableRefObject, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const QuoteSection = () => {
  const quoteRef: MutableRefObject<HTMLDivElement> = useRef(null);
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

  const initQuoteAnimation = (
    quoteRef: MutableRefObject<HTMLDivElement>,
    targetSection: MutableRefObject<HTMLDivElement>
  ): ScrollTrigger => {
    const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    timeline
      .from(quoteRef.current, { opacity: 0, duration: 2 })
      .to(quoteRef.current.querySelector(".text-strong"), {
        backgroundPositionX: "100%",
        duration: 1,
      });

    return ScrollTrigger.create({
      trigger: targetSection.current,
      start: "center bottom",
      end: "center center",
      scrub: 0,
      animation: timeline,
    });
  };

  useEffect(() => {
    const quoteAnimationRef = initQuoteAnimation(quoteRef, targetSection);

    return quoteAnimationRef.kill;
  }, [quoteRef, targetSection]);

  const renderQuote = (): React.ReactNode => (
    <div className="tall:py-60 py-72 section-container">
      <h1 ref={quoteRef} className="font-medium text-3xl md:text-3xl">
        ✔ Experienced in designing, testing, and developing scalable software
        <br />
        <br />
        ✔ Strong understanding of data structures and algorithms
        <br />
        <br />
        ✔ Skilled in backend architecture and API development best practices
        <br />
        <br />
        ✔ Hands-on experience troubleshooting and optimizing software systems
        <br />
        <br />
        ✔ Proven ability to write clean, maintainable, and well-documented code
      </h1>
    </div>
  );

  return (
    <section className="w-full relative select-none" ref={targetSection}>
      {renderQuote()}
    </section>
  );
};

export default QuoteSection;
