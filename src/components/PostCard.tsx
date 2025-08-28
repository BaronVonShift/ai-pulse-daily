import { Calendar, Users, TrendingUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PostCardProps {
  title: string;
  excerptHTML: string;
  date: string;
  category: string;
  link: string; // now always a frontend route like /post/:slug
  img?: { src: string; alt?: string };
  trending?: boolean;
  sourceCount?: number;
}

const PostCard = ({
  title,
  excerptHTML,
  date,
  category,
  link,
  img,
  trending,
  sourceCount = 0,
}: PostCardProps) => {
  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-glass-border bg-glass-bg/70 backdrop-blur-md transition-shadow duration-200 hover:shadow-neon-hover">
      {/* Featured Image */}
      {img?.src && (
        <Link to={link} className="block">
          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              src={img.src}
              alt={img.alt || title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-70" />
          </div>
        </Link>
      )}

      <div className="p-6">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>{date}</time>
          </div>
          {trending && (
            <div className="flex items-center gap-1 rounded-full bg-primary/15 px-2 py-1 text-xs text-primary">
              <TrendingUp className="h-3 w-3" />
              <span>Trending</span>
            </div>
          )}
        </div>

        {/* Category */}
        <div className="mb-3">
          <span className="rounded-full bg-secondary/20 px-3 py-1 text-xs font-medium text-secondary">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold leading-tight transition-colors duration-200 group-hover:text-primary">
          {title}
        </h3>

        {/* Excerpt */}
        <div
          className="wp-excerpt mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-3"
          dangerouslySetInnerHTML={{ __html: excerptHTML }}
        />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{sourceCount} sources</span>
          </div>

          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-primary hover:bg-primary/10"
          >
            <Link to={link}>
              Read More
              <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
