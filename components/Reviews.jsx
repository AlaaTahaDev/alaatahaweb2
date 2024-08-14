"use client";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/logoss.png",
    job: "Mobile Devoloper",
    name: "driver app",
    review: "Soon",
  },
  {
    avatar: "/logoss.png",
    job: "Mobile Devoloper",
    name: "driver app",
    review: "Soon",
  },
  {
    avatar: "/logoss.png",
    job: "Mobile Devoloper",
    name: "driver app",
    review: "Soon",
  },
  {
    avatar: "/logoss.png",
    job: "Mobile Devoloper",
    name: "driver app",
    review: "Soon",
  },
  {
    avatar: "/logoss.png",
    job: "Mobile Devoloper",
    name: "driver app",
    review: "Soon",
  },
  {
    avatar: "/logoss.png",
    job: "Mobile Devoloper",
    name: "driver app",
    review: "Soon",
  },
  {
    avatar: "/logoss.png",
    job: "Mobile Devoloper",
    name: "driver app",
    review: "Soon",
  },
];
const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto"></div>
      <h2 className="section-title mb-12 text-center mx-auto">Review</h2>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1400: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className="h-[350px]"
      >
        {reviewsData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Card className="bg-teriary dark:bg-secondary/40 p-8 min-h-[300px]">
                <CardHeader className="p-0 mb-10">
                  <div className="flex items-center gap-x-4">
                    <Image
                      src={item.avatar}
                      width={70}
                      height={70}
                      alt=""
                      priority
                    />
                    <div className="flex flex-col">
                    <CardTitle>{item.name}</CardTitle> 
                    <p>{item.job}</p>   
                    </div>
                  </div>
                </CardHeader>
                <CardDescription className="text-lg text-muted-foreground">
                  {item.review}
                </CardDescription>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Reviews;
