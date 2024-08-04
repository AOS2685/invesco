import Features from "./Features";
import Header from "./Header";
import Slideshow from "./Slideshow";
import Ipo from "./Ipo";
import Faq from "./Faq";
import About from "./About";
import Disclaimer from "./Disclaimer";

function Home() {
  return (
    <home>
      <Header />
      <Features />
      <Slideshow />
      {/* <Ipo /> */}
      <Faq />
      <About />
      <Disclaimer />
    </home>
  );
}

export default Home;
