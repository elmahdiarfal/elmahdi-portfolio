import { Badge } from "@/components/ui/badge"
import { Heart, Code } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">© {currentYear} El Mahdi ARFAL. All rights reserved.</p>
          </div>

          {/* Made with */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>using</span>
            <Badge variant="outline" className="px-2 py-0.5 text-xs">
              <Code className="h-3 w-3 mr-1" />
              Next.js
            </Badge>
            <Badge variant="outline" className="px-2 py-0.5 text-xs">
              TypeScript
            </Badge>
            <Badge variant="outline" className="px-2 py-0.5 text-xs">
              Tailwind CSS
            </Badge>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
            <a href="mailto:arfalelmahdi@gmail.com" className="hover:text-primary transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
