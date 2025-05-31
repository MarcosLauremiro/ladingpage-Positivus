import { MdArrowOutward } from "react-icons/md";

export const CaseSection: React.FC = () => {
  return (
    <section className="container mx-auto p-4">
      <div className="text-center flex flex-col items-center gap-5 lg:flex-row lg:gap-10 lg:text-start pb-8">
        <h1 className="title marked-green">Case Studies</h1>
        <p className="text-gray-600 text-[11px] lg:text-[16px]">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        <div className="bg-black rounded-[45px] w-[80%] min-w-[300px] p-10 flex flex-col gap-6 justify-between lg:min-h-[300px]">
          <p className="text-white text-[14px]">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <a className="text-[#B9FF66] flex gap-2" href="">
            Learn more <MdArrowOutward className=" text-[#B9FF66] text-2xl" />
          </a>
        </div>
        <div className="bg-black rounded-[45px] w-[80%] min-w-[300px] p-10 flex flex-col gap-6 justify-between lg:min-h-[300px]">
          <p className="text-white  text-[14px]">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <a className="text-[#B9FF66] flex gap-2" href="">
            Learn more <MdArrowOutward className=" text-[#B9FF66] text-2xl" />
          </a>
        </div>
        <div className="bg-black rounded-[45px] w-[80%] min-w-[300px] p-10 flex flex-col gap-6 justify-between lg:min-h-[300px]">
          <p className="text-white  text-[14px]">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <a className="flex gap-2 text-[#B9FF66]" href="">
            Learn more <MdArrowOutward className=" text-[#B9FF66] text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
};
