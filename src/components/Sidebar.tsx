import { Search, TrendingUp, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const recentPosts = [
    {
      title: "Google's Gemini 2.0 Shows Impressive Multimodal Capabilities",
      date: "Dec 27, 2024",
      category: "Product Launch"
    },
    {
      title: "Meta's AI Research Lab Publishes Groundbreaking Paper on LLM Efficiency",
      date: "Dec 26, 2024",
      category: "Research"
    },
    {
      title: "OpenAI Announces Partnership with Major Healthcare Provider",
      date: "Dec 25, 2024",
      category: "Partnerships"
    },
    {
      title: "EU AI Act Implementation Begins: What Companies Need to Know",
      date: "Dec 24, 2024",
      category: "Regulation"
    },
    {
      title: "Anthropic's Claude 3.5 Beats GPT-4 on Several Reasoning Benchmarks",
      date: "Dec 23, 2024",
      category: "Benchmarks"
    }
  ];

  const trendingTopics = [
    "Neural Architecture Search",
    "Multimodal AI",
    "AI Safety & Alignment",
    "Large Language Models",
    "Computer Vision",
    "AI Ethics"
  ];

  return (
    <aside className="space-y-6">
      {/* Search Widget */}
      <div className="glass-card p-6">
        <div className="mb-4 flex items-center space-x-2">
          <Search className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Search Articles</h3>
        </div>
        <div className="relative">
          <Input
            placeholder="Search AI news..."
            className="border-glass-border bg-muted/20 focus:ring-primary"
          />
          <Button 
            size="sm" 
            className="absolute right-1 top-1 neon-glow"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Trending Topics */}
      <div className="glass-card p-6">
        <div className="mb-4 flex items-center space-x-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Trending Topics</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {trendingTopics.map((topic) => (
            <button
              key={topic}
              className="rounded-full bg-muted/30 px-3 py-1 text-sm text-muted-foreground hover:bg-primary/20 hover:text-primary smooth-transition"
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="glass-card p-6">
        <div className="mb-4 flex items-center space-x-2">
          <Clock className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">Recent Posts</h3>
        </div>
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <h4 className="mb-1 text-sm font-medium leading-snug group-hover:text-primary smooth-transition line-clamp-2">
                {post.title}
              </h4>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{post.date}</span>
                <span className="rounded-full bg-secondary/20 px-2 py-0.5 text-secondary">
                  {post.category}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;