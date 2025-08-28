import { Calendar, ExternalLink, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PostCardProps {
  title: string;
  excerpt: string;   // WP gives HTML here
  date: string;
  sourceCount: number;
  category: string;
  trending?: boolean;
  link: string;      // new: link to full post
}

const PostCard = ({ title, excerpt, date, sourceCount, category, trending, link }: PostCardProps) => {
  return (
    <article className="glass-card group h-full overflow-hidden smooth-transition hover:shadow-neon-hover">
      <div className="p-6">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          {trending && (
            <div className="flex items-center space-x-1 rounded-full bg-primary/20 px-2 py-1 text-xs text-primary">
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
        <h3 className="mb-3 text-xl font-bold leading-tight group-hover:text-primary smooth-transition">
          {title}
        </h3>

        {/* Excerpt */}
        <div
          className="mb-4 text-muted-foreground leading-relaxed line-clamp-3"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{sourceCount} sources</span>
          </div>

          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-primary hover:bg-primary/10 smooth-transition"
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              Read More
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
