import BecomeMember from "./components/BecomeMember";
import BusinessCommunitySection from "./components/BusinessCommunitySection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LatestBlogs from "./components/LatestBlog";
import Members from "./components/Members";
import Membership from "./components/Membership";
import NetworkSection from "./components/NetworkSection";
import SmbfSupportSection from "./components/SmbfSupportSection";
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
      <SmbfSupportSection />
      <BecomeMember />
      <LatestBlogs />
      <Footer />
    </>
  );
}

export default App;
