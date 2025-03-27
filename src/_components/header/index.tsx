import { Menu } from "../menu";
import logoHeader from "../../../public/Logoheader.png";
import Image from "next/image";

export function Header() {
  return (
    <header className=" relative flex justify-between items-center p-4 container mx-auto">
      <div className="flex items-center gap-2">
        <div className="relative w-6 h-6">
          <Image
            className="object-contain"
            quality={100}
            priority
            fill
            alt="logo"
            src={logoHeader}
          />
        </div>
        <h1 className="text-black text-2xl">Positivus</h1>
      </div>

      <Menu />
    </header>
  );
}
