import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BestSellers from "@/components/BestSellers";
import OurStory from "@/components/OurStory";
import ShopByCategory from "@/components/ShopByCategory";
import FeatureBanner from "@/components/FeatureBanner";
import TrustFeatures from "@/components/TrustFeatures";
import CustomerReviews from "@/components/CustomerReviews";
import Footer from "@/components/Footer";

import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
        <BestSellers />
        <OurStory />
        <ShopByCategory />
        <FeatureBanner />
        <TrustFeatures />
        <CustomerReviews />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
