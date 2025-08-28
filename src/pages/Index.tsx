import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        {/* Landing page intentionally empty for now */}
      </main>
    </div>
  );
};

export default Index;
