import Header from "@/components/Header";
import Services from "@/components/Services";
import CaseStudy from "@/components/CaseStudy";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <Services />
      <CaseStudy />
      <Footer />
    </div>
  );
};

export default Index;
