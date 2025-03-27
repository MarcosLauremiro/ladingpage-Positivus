import Image from "next/image";
import heroImage from "../../../public/heroimage.png";

export function Hero() {
  return (
    <section className="flex flex-col gap-6 p-4 lg:flex-row lg:gap-10 lg:container mx-auto">
      <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-center gap-6">
        <div className="lg:w-[500px]">
          <h1 className="font-semibold align-baseline text-3xl lg:text-5xl lg:font-normal lg:leading-snug">
            Navigating the digital ladscape for success
          </h1>
        </div>
        <div className="mx-auto lg:hidden lg:w-[500px]">
          <Image src={heroImage} alt="image" />
        </div>
        <div className="flex flex-col gap-6 lg:w-[400px] ">
          <p className="text-gray-700 text-[12px] lg:text-[14px]">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className="bg-black text-white rounded-2xl w-full lg:max-w-60 py-4">
            Book a consultation
          </button>
        </div>
      </div>
      <div className="relative hidden lg:block lg:w-1/2">
        <Image className="object-contain" fill src={heroImage} alt="image" />
      </div>
    </section>
  );
}
