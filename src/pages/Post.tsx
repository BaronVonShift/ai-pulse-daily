import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import { fetchPostBySlug, WPPost } from "@/lib/wp";

function formatDate(d: string) {
  try { return new Date(d).toLocaleDateString("en-GB"); } catch { return d; }
}

const Post = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useQuery<WPPost | null>({
    queryKey: ["post", slug],
    queryFn: () => fetchPostBySlug(slug || ""),
    enabled: !!slug,
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main className="matrix-bg">
        <div className="container mx-auto px-4 py-12">
          {isLoading && <div className="text-center text-muted-foreground">Loading…</div>}
          {error && <div className="text-center text-red-500">Failed to load post.</div>}
          {!isLoading && data && (
            <article className="post-wrap mx-auto max-w-3xl rounded-2xl border border-glass-border bg-black/30 p-6 shadow-xl backdrop-blur-md">
              <header className="mb-8">
                <h1 className="mb-2 text-3xl font-bold text-white">{data.title.rendered.replace(/<[^>]*>/g, "")}</h1>
                <p className="text-sm text-cyan-300/80">{formatDate(data.date)}</p>
              </header>

              <section
                className="post-content text-base leading-7"
                dangerouslySetInnerHTML={{ __html: data.content.rendered }}
              />
            </article>
          )}
        </div>
      </main>
    </div>
  );
};

export default Post;
