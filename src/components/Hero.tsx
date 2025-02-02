
import Image from "next/image";
import Image_1 from "../../public/images/blog_img_1.svg";

import Container_img2 from "../../public/images/imag2.svg";
import HeroSection from "./animation";
export default function Hero() {
  return (
    <div className="overflow-hidden">
      <div className="lg:flex lg:flex-row md:flex  md:flex-row lg:justify-around md:justify-around flex flex-col justify-center items-center bg-[#7C4EE4] text-white lg:h-[600px] md:h-[600px] h-[900px] lg:mt-5 md:mt-5 mt-3">
        <div className="space-y-4  ml-3 ">
          <span className="text-sm font-semibold">Featured Post</span>
          {/* <h2 className="text-6xl font-semibold ">HoᏔ AI Ꮤill </h2>
          <h2 className="text-6xl font-semibold ">Change the Future</h2> */}
         , <HeroSection/>
          <p className="text-lg font-extralight sm:w-96 w-76]">
            The future of AI will see home robots having enhanced intelligence,
            increased capabilities, and becoming more personal and possibly
            cute. For example, home robots will overcome navigation, direction
          </p>
          <button className="font-semibold text-sm bg-white text-black h-11 w-32 rounded-md transition-all duration-300 ease-in-out hover:text-[#7c4ee4] hover:font-medium hover:scale-105 cursor-pointer">
            Read more
          </button>
        </div>
        <div>
          <Image
            src={Image_1}
            alt="img_1"
            height={396}
            width={507}
            className="lg:h-[396px] lg:w-[507px] md:h-[396px] md:w-[507px] sm:h-[396px] sm:w-[507px] h-[396px] w-[337px]  pt-5 "
          />
        </div>
      </div>
      <div className="sm:mt-14  mt-8 bg-[#ffffff]  flex flex-row justify-center items-center ">
        <div className="flex flex-col justify-center items-center border-black border-opacity-10 rounded-xl border-2 lg:h-[53rem] lg:w-[70rem] md:h-[50rem] md:w-[48rem] sm:h-[43rem] sm:w-[42rem] h-[35rem] w-[22rem]">
          <div className="flex">
            <Image
              src={Container_img2}
              alt="container_img"
              className="lg:h-[30rem] lg:w-[110rem] md:h-[25rem] md:w-[45rem]  sm:h-[20rem] sm:w-[40rem] h-[17rem] w-[20rem] "
            />
          </div>

          <div className="space-y-3 sm:mt-5 lg:mr-60 md:ml-3 sm:ml-3 sm:relative sm:top-0 relative bottom-12">
            <span className="sm:text-lg sm:font-semibold text-[12px] font-semibold">
              DEVELOPMENT
              <span className="sm:text-sm font-extralight text-[10px] opacity-80">
                16 March 2023
              </span>
            </span>
            <h2 className="sm:text-4xl  text-2xl font-semibold  md:w-[45rem] sm:w-[40rem] w-[18rem]">
              How to make a Game look more attractive with New VR & AI
              Technology
            </h2>
            <p className="sm:text-lg text-[14px] font-extralight opacity-90   md:w-[48rem] sm:w-[40rem] w-[20rem]">
              Google has been investing in AI for many years and bringing its
              benefits to individuals, businesses and communities. Whether it’s
              publishing state-of-the-art research, building helpful products or
              developing tools and resources that enable others, we’re committed
              to making AI accessible to everyone.
            </p>
            <button 
  className="sm:text-lg font-extralight h-10 w-24 border-2 border-[#7C4EE4] rounded-md text-[#7C4EE4] text-[16px] transition-all duration-300 ease-in-out hover:bg-[#7C4EE4] hover:text-white hover:shadow-md hover:scale-105"
>
  Read More
</button>

          </div>
        </div>
      </div>
      <div className="mt-16">
        <div className="md:flex md:justify-around  hidden">
          <h2 className="md:text-[24px] md:font-semibold md:block hidden">
            Our Recent Post
          </h2>
          <button 
  className="md:text-[14px] md:font-semibold md:w-24 md:h-9 md:bg-[#7C4EE4] md:text-white md:rounded-lg transition-all duration-300 ease-in-out hover:bg-[#5C2FBF] hover:shadow-lg hover:scale-105"
>
  View All
</button>

        </div>
        <div className="md:flex md:justify-around md:items-center md:space-y-3 md:mt-5 hidden">
          <div>
            <Image
              src={Container_img2}
              alt="container_img"
              height={396}
              width={507}
              className="lg:h-[356px] lg:w-[612px] md:w-[450px] hidden md:block"
            />
          </div>
          <div>
            <span className="md:text-[14px] md:font-semibold hidden md:block">
              DEVELOPMENT
              <span className="md:text-[12px] md:font-extralight  md:opacity-80">
                16 March 2023
              </span>
            </span>
            <h2 className="md:text-2xl md:font-semibold md:w-[20rem] ">
              How to make a Game look more attractive with New VR & AI
              Technology
            </h2>
            <p className="md:text-[14px] md:font-extralight lg:w-[25rem] md:w-[18rem]">
              Google has been investing in AI for many years and bringing its
              benefits to individuals, businesses and communities. Whether it’s
              publishing state-of-the-art research, building helpful products or
              developing tools and resources that enable others, we’re committed
              to making AI accessible to everyone.
            </p>
            <button 
  className="md:text-[16px] md:font-extralight md:h-9 md:w-[92px] border-2 border-[#7C4EE4] rounded-md text-[#7C4EE4] text-[16px] transition-all duration-300 ease-in-out hover:bg-[#7C4EE4] hover:text-white hover:shadow-lg hover:scale-105"
>
  Read More
</button>

          </div>
        </div>
      </div>
    </div>
  );
}
