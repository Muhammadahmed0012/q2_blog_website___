import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Blogs_data from "./blogs_data/page";
import Footer from "@/components/Footer";
export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Blogs_data/>
   <Footer/>
     </>
  );
}
