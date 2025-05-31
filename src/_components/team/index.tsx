import Image from "next/image";
import { TitleSection } from "../titleSection";
import { TiSocialLinkedin } from "react-icons/ti";
import john from "../../../public/john.svg";
import jane from "../../../public/jane.svg";
import michael from "../../../public/michael.svg";

export const Team: React.FC = () => {
  return (
    <section className="container mx-auto p-4">
      <TitleSection
        title="Team"
        sub="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />
      <div className="flex flex-col lg:flex lg:flex-row justify-around">
        <div className="border-1 border-b-6 border-x-slate-950 rounded-[45px] p-8 max-w-[400px] min-h-[300px] flex flex-col justify-between">
          <div className="flex relative gap-4">
            <Image src={john} alt="" />
            <div className="flex flex-col justify-end">
              <h1 className="font-semibold text-[18px] lg:text-[20px]">
                John Smith
              </h1>
              <span className="lg:text-[18px]">Ceo and Founder</span>
            </div>
            <button className="bg-black absolute right-0 rounded-full">
              <TiSocialLinkedin color="#b9ff66" size={30} />
            </button>
          </div>
          <div className="border-t border-gray-800 "></div>
          <div>
            10+ years of experience in digital marketing. Expertise in SEO, PPC,
            and content strategy
          </div>
        </div>
        <div className="border-1 border-b-6 border-x-slate-950 rounded-[45px] p-8 max-w-[400px] min-h-[300px] flex flex-col justify-between">
          <div className="flex relative gap-4">
            <Image src={jane} alt="" />
            <div className="flex flex-col justify-end">
              <h1 className="font-semibold text-[18px] lg:text-[20px]">
                John Smith
              </h1>
              <span className="lg:text-[18px]">Ceo and Founder</span>
            </div>
            <button className="bg-black absolute right-0 rounded-full">
              <TiSocialLinkedin color="#b9ff66" size={30} />
            </button>
          </div>
          <div className="border-t border-gray-800 "></div>
          <div>
            10+ years of experience in digital marketing. Expertise in SEO, PPC,
            and content strategy
          </div>
        </div>
        <div className="border-1 border-b-6 border-x-slate-950 rounded-[45px] p-8 max-w-[400px] min-h-[300px] flex flex-col justify-between">
          <div className="flex relative gap-4">
            <Image src={michael} alt="" />
            <div className="flex flex-col justify-end">
              <h1 className="font-semibold text-[18px] lg:text-[20px]">
                John Smith
              </h1>
              <span className="lg:text-[18px]">Ceo and Founder</span>
            </div>
            <button className="bg-black absolute right-0 rounded-full">
              <TiSocialLinkedin color="#b9ff66" size={30} />
            </button>
          </div>
          <div className="border-t border-gray-800 "></div>
          <div>
            10+ years of experience in digital marketing. Expertise in SEO, PPC,
            and content strategy
          </div>
        </div>
      </div>
    </section>
  );
};
