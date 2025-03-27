import { Company } from "@/_components/companys";
import { Header } from "@/_components/header";
import { Hero } from "@/_components/hero";
import { Proposal } from "@/_components/proposal";
import { Service } from "@/_components/services";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Company />
      <Service />
      <Proposal />
    </main>
  );
}
