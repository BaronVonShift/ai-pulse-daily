import { useEffect, useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PostCard from "@/components/PostCard";
import Sidebar from "@/components/Sidebar";
import Pagination from "@/components/Pagination";
import SkeletonCard from "@/components/SkeletonCard";
import { fetchPosts, WPPost } from "@/lib/wp";

function formatDate(d: string) {
  try {
    return new Date(d).toLocaleDateString("en-GB");
  } catch {
    return d;
  }
}
function getFeatured(post: WPPost) {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  return media?.source_url ? { src: media.source_url, alt: media.alt_text } : undefined;
}

const PER_PAGE = 10;

const Index = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching } = useQuery<{
    posts: WPPost[];
    totalPages: number;
  }>({
    queryKey: ["posts", page, PER_PAGE],
    queryFn: () => fetchPosts(page, PER_PAGE),
    staleTime: 60000,
    placeholderData: keepPreviousData,
  });

  const posts = data?.posts ?? [];
  const totalPages = data?.totalPages ?? 1;

  // Smooth scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-4">
              {/* Posts list */}
              <div className="lg:col-span-3">
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="text-3xl font-bold">Latest AI News</h2>
                  <div className="text-sm text-muted-foreground">
                    Updated hourly • {isLoading ? 0 : posts.length} articles
                  </div>
                </div>

                <section
                  aria-label="Articles"
                  className="grid gap-6 md:grid-cols-2"
                >
                  {isLoading &&
                    Array.from({ length: 6 }).map((_, i) => (
                      <SkeletonCard key={i} />
                    ))}

                  {!isLoading &&
                    posts.map((post) => (
                      <PostCard
                        key={post.id}
                        title={post.title.rendered.replace(/<[^>]*>/g, "")}
                        excerptHTML={post.excerpt.rendered}
                        date={formatDate(post.date)}
                        category="WordPress"
                        link={`/post/${post.slug}`}   // ← goes to styled matrix page
                        img={getFeatured(post)}
                      />
                    ))}
                </section>

                <Pagination
                  page={page}
                  totalPages={totalPages}
                  onChange={setPage}
                  disabled={isFetching}
                />
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <Sidebar />
              </aside>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
