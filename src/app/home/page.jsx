"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

export default function Home() {

  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  const Responsive = {
    0: {
      items: 1, // 1 item visible on small screens
      margin: 5,
    },
    768: {
      items: 3, // Show 3 items
      margin: 10,
    },
    1024: {
      items: 3, // Show 3 items
      margin: 0,
    },
  };


  return (
    <>

      <div className="__waterMark ">
        <img src="/assets/img/Logo_Icon.svg" alt="Logo Icon" className="__waterMarkImg " />
      </div>

      <section className=" __mainContainer pt-[60px] pb-[80px] md:pt-[50px] md:pb-[200px] relative z-[1]">
        <div className="relative">

          <div className="flex relative flex-col md:flex-row">
            <div className="basis-[56%] lg:basis-[56%] xl:basis-[50%] flex flex-col justify-center">
              <h1 className="font-semibold text-[36px] leading-14 lg:text-[48px] lg:leading-16 xl:text-[64px] xl:leading-20 mb-4">One Place For All Your Sifarish</h1>
              <p className="text-base lg:text-lg">Introducing MySifarish – your go-to app for storing and organizing all your trusted recommendations in one place. From restaurants to movies, save and access and share everything effortlessly. Say goodbye to scattered notes and bogus review systems . Mysifarish this is a trusted way to explore things …</p>

              <div className="flex gap-5 mt-9 mb-10 lg:mt-16 lg:mb-0">
                <Link href="#"><img src="/assets/img/GooglePlayBtn.svg" className="w-[140px] lg:w-[169px]" alt="google" /></Link>
                <Link href="#"><img src="/assets/img/appleBtn.svg" className="w-[140px] lg:w-[169px]" alt="apple" /></Link>
              </div>
            </div>

            <div className="basis-[44%] lg:basis-[44%] xl:basis-[50%] items-center pl-0 md:pl-7 flex justify-center md:justify-end">
              <img src="/assets/img/iphone-15_banner.webp" alt="Iphone" className="max-w-[200px] lg:max-w-[250px] xl:max-w-[330px] w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className=" __mainContainer">

        <div className="mb-12 lg:mb-24 max-w-[1055px] lg:max-w-[980px] xl:max-w-[1055px] w-full mx-auto text-center relative">
          <h4 className="__ldHead ">Lorem Ipsum is simply dummy text of the printing</h4>
          <p className="text-base lg:text-lg">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        </div>

        <div className="flex items-center relative py-3 flex-wrap gap-6 lg:gap-0">
          <div className="__blurFilter_sec"></div>
          <div className="flex-[0_0_100%] lg:flex-[0_0_50%] xl:flex-[0_0_52%] relative flex justify-center lg:justify-start items-end">
            <img src="/assets/img/iphone-15_rtImg.webp" className="max-w-[228px] lg:max-w-[368px] xl:max-w-[428px] relative z-[1]" data-aos="fade-up" />
            <img src="/assets/img/curve-right.png" className=" absolute left-52 -bottom-8 xl:-bottom-1 hidden lg:block" />
          </div>

          <div className="flex-[0_0_100%] lg:flex-[0_0_50%] xl:flex-[0_0_48%]">
            <h4 className="__ldHead text-center lg:text-left">Providers see the current offer and try to beat it</h4>
            <p className="text-base lg:text-lg pb-5 text-center lg:text-left">No need to go after the providers. You are the one with the money, they should come to you! Just say what you need, and let them fight for your business.</p>
          </div>
        </div>

        <div className="flex items-center relative py-3 flex-wrap flex-col-reverse lg:flex-row gap-6 lg:gap-0">
          <div className="__blurFilter_sec2"></div>
          <div className="flex-[0_0_100%] lg:flex-[0_0_50%] xl:flex-[0_0_48%]">
            <h4 className="__ldHead text-center lg:text-left">Providers see the current offer and try to beat it</h4>
            <p className="text-base lg:text-lg pb-5 text-center lg:text-left">No need to go after the providers. You are the one with the money, they should come to you! Just say what you need, and let them fight for your business.</p>
          </div>

          <div className="flex-[0_0_100%] lg:flex-[0_0_50%] xl:flex-[0_0_52%] relative flex justify-end">
            <img src="/assets/img/iphone-15_rtImg2.webp" className="max-w-[228px] lg:max-w-[368px] xl:max-w-[428px] relative z-[1]" data-aos="fade-up" />
            <img src="/assets/img/curve-left.png" className=" absolute right-52 -bottom-8 xl:-bottom-1 hidden lg:block" />
          </div>
        </div>

        <div className="flex items-center relative py-3 flex-wrap gap-6 lg:gap-0">
          <div className="__blurFilter_sec"></div>
          <div className="flex-[0_0_100%] lg:flex-[0_0_50%] xl:flex-[0_0_52%] relative flex justify-center lg:justify-start items-end">
            <img src="/assets/img/iphone-15_rtImg3.webp" className="max-w-[228px] lg:max-w-[368px] xl:max-w-[428px] relative z-[1]" data-aos="fade-up" />
          </div>

          <div className="flex-[0_0_100%] lg:flex-[0_0_50%] xl:flex-[0_0_48%]">
            <h4 className="__ldHead text-center lg:text-left">Providers see the current offer and try to beat it</h4>
            <p className="text-base lg:text-lg pb-5 text-center lg:text-left">No need to go after the providers. You are the one with the money, they should come to you! Just say what you need, and let them fight for your business.</p>
          </div>
        </div>

      </section>

      <section className=" __mainContainer py-[80px] lg:py-[200px]">
        <div className="mb-12 lg:mb-24 max-w-[1055px] lg:max-w-[980px] xl:max-w-[1055px] w-full mx-auto text-center relative">
          <h4 className="__ldHead ">How It Works</h4>
          <p className="text-base lg:text-lg">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        </div>

        <div className="__myOwlCarousel" data-aos="fade-up">
          <OwlCarousel responsive={Responsive} center loop autoplay>
            <div className="item">
              <img src="/assets/img/crs_phone1.webp" />
              <h4 className="_crsText">Home</h4>
            </div>

            <div className="item">
              <img src="/assets/img/crs_phone1.webp" />
              <h4 className="_crsText">Home</h4>
            </div>

            <div className="item">
              <img src="/assets/img/crs_phone1.webp" />
              <h4 className="_crsText">Home</h4>
            </div>

            <div className="item">
              <img src="/assets/img/crs_phone1.webp" />
              <h4 className="_crsText">Home</h4>
            </div>

            <div className="item">
              <img src="/assets/img/crs_phone1.webp" />
              <h4 className="_crsText">Home</h4>
            </div>
          </OwlCarousel>

        </div>
      </section>

      <section className=" __mainContainer pb-[100px] lg:pb-[250px] relative z-[1]">

        <div className="flex items-center justify-between flex-col-reverse lg:flex-row">
          <div className=" basis-[46%] lg:basis-[40%] xl:basis-[46%]">
            <img src="/assets/img/Iphone_largeImg.webp" className="max-w-[240px] lg:max-w-[300px] xl:max-w-[380px] w-full" data-aos="fade-up" />
          </div>

          <div className="basis-[52%] lg:basis-[60%] xl:basis-[52%] w-full relative mb-18 lg:mb-0">
            <div className="mb-12 lg:mb-24 ">
              <h4 className="__ldHead text-center lg:text-left">How It Works</h4>
              <p className="text-base lg:text-lg text-center lg:text-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </div>
            <div className="flex gap-5 mt-8 lg:mt-16 px-5 lg:px-0">
              <Link href="#"><img src="/assets/img/GooglePlayBtn.svg" className="w-[169px]" /></Link>
              <Link href="#"><img src="/assets/img/appleBtn.svg" className="w-[169px]" /></Link>
            </div>
          </div>
        </div>

      </section>

    </>
  );
}
