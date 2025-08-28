import { Calendar, ExternalLink, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ai-neural.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="glass-card overflow-hidden">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              {/* Content */}
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="mb-4 flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Today, Dec 28, 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>12 sources</span>
                  </div>
                </div>

                <h2 className="mb-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                  <span className="gradient-text">
                    AI Breakthrough: New Neural Architecture Achieves 97% Efficiency
                  </span>
                </h2>

                <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
                  Researchers at Stanford and MIT have unveiled a revolutionary neural network architecture 
                  that dramatically reduces computational requirements while improving accuracy across 
                  multiple AI benchmarks. This development could reshape how we deploy AI systems...
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button className="neon-glow smooth-transition">
                    Read Full Analysis
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-glass-border hover:bg-glass-bg smooth-transition">
                    View Sources
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <img
                  src={heroImage}
                  alt="AI Neural Network Visualization"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card-glass/80 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;