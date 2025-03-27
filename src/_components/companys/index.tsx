import Image from "next/image";
import amazon from "../../../public/amazon.png";
import dribbble from "../../../public/dribbble.png";
import hubspot from "../../../public/Hubspot.png";
import netflex from "../../../public/netflix.png";
import zoom from "../../../public/zoom.png";
import notion from "../../../public/notion.png";

export function Company() {
  const companies = [amazon, dribbble, hubspot, netflex, zoom, notion];
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="relative overflow-hidden py-5">
      <div className="flex w-[200%] items-center [animation:marquee_20s_linear_infinite] hover:[animation-play-state:paused] grayscale">
        {duplicatedCompanies.map((company, index) => (
          <div
            key={index}
            className="relative w-32 h-8 lg:w-40 lg:h-10 flex-shrink-0 mx-2 lg:mx-4"
          >
            <Image
              src={company}
              alt={
                company.src.split("/").pop()?.split(".")[0] || "company-logo"
              }
              fill
              className="object-contain object-center"
              sizes="(max-width: 768px) 128px, 160px"
              quality={85}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f3f3f3] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f3f3f3] to-transparent pointer-events-none" />
    </section>
  );
}
