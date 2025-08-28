import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-glass-border bg-glass-bg backdrop-blur-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary shadow-neon"></div>
            <h1 className="text-2xl font-bold gradient-text">AI Pulse Daily</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary smooth-transition font-medium">
              Home
            </a>
            <a href="/archive" className="text-muted-foreground hover:text-primary smooth-transition font-medium">
              Archive
            </a>
            <a href="/about" className="text-muted-foreground hover:text-primary smooth-transition font-medium">
              About
            </a>
          </nav>

          {/* Search & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hover:bg-glass-bg hover:shadow-neon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden hover:bg-glass-bg">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;