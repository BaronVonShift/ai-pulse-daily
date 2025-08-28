// src/lib/wp.ts
export interface WPFeaturedMedia { source_url: string; alt_text?: string; }
export interface WPPost {
  id: number;
  slug: string;
  link: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: { ["wp:featuredmedia"]?: WPFeaturedMedia[] };
}

const WP_BASE = "https://wp.reingotravel.com/wp-json/wp/v2";

export async function fetchPosts(page = 1, perPage = 10) {
  const res = await fetch(`${WP_BASE}/posts?status=publish&_embed&per_page=${perPage}&page=${page}`);
  if (!res.ok) throw new Error(`WP fetch failed: ${res.status}`);
  const posts: WPPost[] = await res.json();
  const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);
  return { posts, totalPages };
}

export async function fetchPostBySlug(slug: string): Promise<WPPost | null> {
  const res = await fetch(`${WP_BASE}/posts?slug=${encodeURIComponent(slug)}&_embed`);
  if (!res.ok) throw new Error(`WP fetch failed: ${res.status}`);
  const arr: WPPost[] = await res.json();
  return arr[0] ?? null;
}
