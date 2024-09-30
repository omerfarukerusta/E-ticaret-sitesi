import Footer from "@/components/Footer";
import HeaderMain from "@/components/HeaderMain";
import HeaderTop from "@/components/HeaderTop";
import Hero from "@/components/Hero";
import MobNavbar from "@/components/MobNavbar";
import Navbar from "@/components/Navbar";
import NewProducts from "@/components/NewProducts";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <HeaderTop />
      <HeaderMain />
      <Navbar />
      <MobNavbar />
      <Hero />
      <NewProducts />
      <Testimonials />
      <Footer />
    </main>
  );
}
