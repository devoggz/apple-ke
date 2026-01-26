import gsap from "gsap";

import {
  Repairs,
  Showcase,
  HeroMin,
  CategorySection,
} from "@/components/sections";

gsap.registerPlugin();

export default function Home() {
  return (
    <main>
      <HeroMin />
      <Repairs />
      <Showcase />
      <CategorySection />
    </main>
  );
}
