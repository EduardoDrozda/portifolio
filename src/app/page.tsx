import {
  About,
  Contact,
  Home as HomeSection,
  Stacks,
} from "@shared/shared/components";
import { Footer } from "@shared/shared/components/Footer";

export default function Home() {
  return (
    <>
      <HomeSection />
      <About />
      <Stacks />
      <Contact />
      <Footer />
    </>
  );
}
