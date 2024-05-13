import LoadingOverlay from "@/components/loadingOverLay/LoadingOverlay";
import Landing from "@/components/templates/Landing/Landing";
import Nav from "@/components/modules/Navbar/Nav";
import Rates from "@/components/templates/rates/Rates";
import Image from "next/image";
import MainPageTitle from "@/components/modules/MainPageTitle/MainPageTitle";
import Portfolio from "@/components/templates/Portfolio/Portfolio";
import Paragraph from "@/components/modules/Paragraph/Paragraph";
import Testimonial from "@/components/templates/Testimonial/Testimonial";
import Skills from "@/components/templates/Skills/Skills";
import InFiniteText from "@/components/templates/InfinityText/inFiniteText";
import Footer from "@/components/templates/Footer/Footer";

export default function Home() {

  const paragraph = `I am a software developer with a passion for building things that live on the internet. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I love createing things and make them better.`;
  return (
    <div className="w-full font-AntonFont">
      <LoadingOverlay/>
      <div className="container mx-auto px-20 max-md:w-full max-md:px-0">
      <Nav/>
      <Landing/>


      </div>
      <div className="infiniteText w-full h-[400px] overflow-hidden">
      <InFiniteText/>
      </div>

      <div className="container mx-auto px-20 max-md:w-full max-md:px-0">

      <Rates/>



      {/* <MainPageTitle title="Portfolio"/>
      <Portfolio/> */}
      <MainPageTitle title="Skills" id="skills"/>
      <Skills/>
      <MainPageTitle title="About me" id="about"/>
        <Paragraph value={paragraph}/>

    </div>
      <Testimonial/>
      <div className="h-[500px]"></div>
       
      <Footer/>
    </div>
  );
}
