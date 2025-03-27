import Image from "next/image";
import proposal from "../../../public/proposal.png";

export function Proposal() {
    return (
        <section className="container mx-auto text-center px-4 py-20">
            <div className="relative flex flex-col gap-4 bg-[#F3F3F3] rounded-2xl p-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="lg:w-1/2 flex flex-col items-start gap-5">
                    <h1 className="text-start text-2xl font-medium">
                        Let's make thing happen
                    </h1>
                    <p className="text-start text[12px] font-light">
                        Contact us today to learn more about how our digital marketing
                        services can help your business grow and succeed online.
                    </p>
                    <button className="bg-black text-white font-light rounded-2xl w-full max-w-80 py-4">
                        Get your free proposal
                    </button>
                </div>
                <div className="hidden lg:block absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-[-30%] lg:w-[120%] lg:h-[120%]">
                    <Image className="object-contain" fill src={proposal} alt="happ" />
                </div>
            </div>
        </section>
    );
}
