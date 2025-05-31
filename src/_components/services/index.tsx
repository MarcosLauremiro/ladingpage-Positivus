import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import card1 from "../../../public/card1.png";
import card2 from "../../../public/card2.png";
import card3 from "../../../public/card3.png";
import card4 from "../../../public/card4.png";
import card5 from "../../../public/card5.png";
import card6 from "../../../public/card6.png";

export function Service() {
  return (
    <section className="container mx-auto p-4">
      <div className="text-center flex flex-col items-center gap-5 lg:flex-row lg:gap-10 lg:text-start">
        <h1 className="title marked-green">Services</h1>
        <p className="text-gray-600 text-[11px] lg:text-[16px]">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 mt-5 lg:grid-cols-2 lg:gap-10">
        {/* card1 */}
        <div className="card-service card-gray">
          <div>
            <h1 className="title-small marked-green">Search engine</h1>
            <h1 className="title-small marked-green">optimization</h1>
          </div>
          <div className="flex justify-between items-end">
            <div className="flex gap-2 items-center">
              <a className="rounded-full w-9 h-9 bg-black flex items-center justify-center text-[#B9FF66]">
                <MdArrowOutward className=" text-[#B9FF66] text-2xl" />
              </a>
              <p className="hidden lg:block lg:text-[12px] lg:text-black">
                Learn more
              </p>
            </div>

            <div className="">
              <Image
                className="object-contain w-full"
                src={card1}
                alt="search"
              />
            </div>
          </div>
        </div>
        {/* card2 */}
        <div className="card-service card-green">
          <div>
            <h1 className="title-small marked-withe">Pay-per-click</h1>
            <h1 className="title-small marked-withe">advertising</h1>
          </div>
          <div className="flex justify-between items-end">
            <div className="flex gap-2 items-center">
              <a className="rounded-full w-9 h-9 bg-black flex items-center justify-center">
                <MdArrowOutward className=" text-[#B9FF66] text-2xl" />
              </a>
              <p className="hidden lg:block lg:text-[12px] lg:text-black">
                Learn more
              </p>
            </div>

            <div className="">
              <Image
                className="object-contain w-full"
                src={card2}
                alt="search"
              />
            </div>
          </div>
        </div>
        {/* card3 */}
        <div className="card-service card-black">
          <div>
            <h1 className="title-small marked-withe">Social Media</h1>
            <h1 className="title-small marked-withe">Marketing</h1>
          </div>
          <div className="flex justify-between items-end">
            <div className="flex gap-2 items-center">
              <a className="rounded-full w-9 h-9 bg-[#F3F3F3] flex items-center justify-center">
                <MdArrowOutward className=" text-[#191a23] text-2xl" />
              </a>
              <p className="hidden lg:block lg:text-[12px] lg:text-black">
                Learn more
              </p>
            </div>

            <div className="">
              <Image
                className="object-contain w-full"
                src={card3}
                alt="search"
              />
            </div>
          </div>
        </div>
        {/* card4 */}
        <div className="card-service card-gray">
          <div>
            <h1 className="title-small marked-green">Email</h1>
            <h1 className="title-small marked-green">Marketing</h1>
          </div>
          <div className="flex justify-between items-end">
            <div className="flex gap-2 items-center">
              <a className="rounded-full w-9 h-9 bg-black flex items-center justify-center text-[#B9FF66]">
                <MdArrowOutward className=" text-[#B9FF66] text-2xl" />
              </a>
              <p className="hidden lg:block lg:text-[12px] lg:text-black">
                Learn more
              </p>
            </div>

            <div className="">
              <Image
                className="object-contain w-full"
                src={card4}
                alt="search"
              />
            </div>
          </div>
        </div>
        {/* card5 */}
        <div className="card-service card-green">
          <div>
            <h1 className="title-small marked-withe">Content</h1>
            <h1 className="title-small marked-withe">Creation</h1>
          </div>
          <div className="flex justify-between items-end">
            <div className="flex gap-2 items-center">
              <a className="rounded-full w-9 h-9 bg-black flex items-center justify-center">
                <MdArrowOutward className=" text-[#B9FF66] text-2xl" />
              </a>
              <p className="hidden lg:block lg:text-[12px] lg:text-black">
                Learn more
              </p>
            </div>

            <div className="">
              <Image
                className="object-contain w-full"
                src={card5}
                alt="search"
              />
            </div>
          </div>
        </div>
        {/* card6 */}
        <div className="card-service card-black">
          <div>
            <h1 className="title-small marked-green">Analytics and</h1>
            <h1 className="title-small marked-green">Tracking</h1>
          </div>
          <div className="flex justify-between items-end">
            <div className="flex gap-2 items-center">
              <a className="rounded-full w-9 h-9 bg-[#F3F3F3] flex items-center justify-center">
                <MdArrowOutward className=" text-[#191a23] text-2xl" />
              </a>
              <p className="hidden lg:block lg:text-[12px] lg:text-black">
                Learn more
              </p>
            </div>

            <div className="">
              <Image
                className="object-contain w-full"
                src={card6}
                alt="search"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 mt-5 lg:grid-cols-2 lg:gap-10"></div>
    </section>
  );
}
