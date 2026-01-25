import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
import {
  Repairs,
  Hero,
  TradeIn,
  Macbook,
  Showcase,
  HeroAlt,
} from "@/components/sections";

gsap.registerPlugin();

export default function Home() {
  return (
    <main>
      <HeroAlt />

      <Repairs />
      {/*<Macbook/>*/}
      <Showcase />
      {/*<TradeIn/>*/}
    </main>
  );
}
