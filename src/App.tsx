import AutoPlaySlider from "./components/AutoPlayerSlider";
import BusinessCommunitySection from "./components/BusinessCommunitySection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Members from "./components/Members";
import Membership from "./components/Membership";
import NetworkSection from "./components/NetworkSection";
import VisionHighlight from "./components/VisionHighlight";

function App() {
  return (
    <>
      <Header />
      <NetworkSection />
      <VisionHighlight />
      <BusinessCommunitySection />
      <Membership />
      <Members />
      <Footer />
    </>
  );
}

export default App;
