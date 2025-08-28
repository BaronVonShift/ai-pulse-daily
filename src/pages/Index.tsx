import { useEffect, useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";

interface WPPost {
  id: number;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
}

const Index = () => {
  const [posts, setPosts] = useState<WPPost[]>([]);

  useEffect(() => {
    fetch("https://wp.reingotravel.com/wp-json/wp/v2/posts?status=publish&per_page=10&_embed")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-4">
              {/* Posts Grid */}
              <div className="lg:col-span-3">
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="text-3xl font-bold">Latest AI News</h2>
                  <div className="text-sm text-muted-foreground">
                    Updated every hour • {posts.length} articles today
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {posts.map((post) => (
                    <PostCard
  key={post.id}
  title={post.title.rendered}
  excerpt={post.excerpt.rendered}
  date={new Date(post.date).toLocaleDateString("en-GB")}
  sourceCount={0}
  category="WordPress"
  trending={false}
  link={post.link}
/>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <button className="glass-card smooth-transition hover:shadow-neon-hover px-8 py-4 font-medium">
                    Load More Articles
                  </button>
                </div>
              </div>

              <div className="lg:col-span-1">
                <Sidebar />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-glass-border bg-glass-bg py-12">
        {/* keep your footer */}
      </footer>
    </div>
  );
};

export default Index;
