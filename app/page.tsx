import Image from "next/image";
import Navbar from "./ui/home/Navbar";
import HomePage from "./ui/home/home";
import HeroSection from "./ui/home/hero";
import Footer from "./ui/home/footer";

export default function Home() {
  return (
    <div className="">
    
     <Navbar />
     <HeroSection />
    <HomePage />
    <Footer />
    </div>
  );
}
