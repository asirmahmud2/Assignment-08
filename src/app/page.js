import ExtraSection from "@/Components/Shared/Extra";
import Hero from "@/Components/Shared/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-20">
      <Hero></Hero>
      <ExtraSection></ExtraSection>
    </div>
  );
}
