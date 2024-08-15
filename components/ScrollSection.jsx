'use client'
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const data = [
  {
    image: "/flutter.svg",
    title: 'Flutter Firebase',
    subTitle: 'عمل تطبيقات مبينيه علي فلاتر مع الفاير بيز ',
  },
  {
    image: "/node-js.svg",
    title: 'Flutter Nodejs',
    subTitle: ' nodejs عمل تطبيقات مبينيه علي فلاتر مع كاستم سيرفر',
  },
  {
    image: "/androidios.png",
    title: 'Android Ios',
    subTitle: 'عمل تطبيقات اندرويد و اي او اس بواسطة دارت وفلاتر ',
  },
];

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false,   // Whether animation should happen only once - while scrolling down
    });

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner flex">
          {data.map((item, index) => (
            <div key={index} className="scroll-section container flex flex-col items-center justify-center p-8 text-center">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                data-aos="fade-up" // Add the AOS animation type here
              />
              <h1 className="text-4xl font-bold mt-4">{item.title}</h1>
              <p className="mt-4 text-lg max-w-lg">
                {item.subTitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
