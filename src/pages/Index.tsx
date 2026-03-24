import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BestSellers from "@/components/BestSellers";
import ShopByCategory from "@/components/ShopByCategory";
import FeatureBanner from "@/components/FeatureBanner";
import ShopByFragrance from "@/components/ShopByFragrance";
import OurStory from "@/components/OurStory";
import TrustFeatures from "@/components/TrustFeatures";
import CustomerReviews from "@/components/CustomerReviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BestSellers />
      <ShopByCategory />
      <FeatureBanner />
      <ShopByFragrance />
      <OurStory />
      <TrustFeatures />
      <CustomerReviews />
      <Footer />
    </div>
  );
};

export default Index;
