import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

export default function Header() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl px-6 py-3 shadow-xl">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link 
              to="/" 
              className="text-lg font-semibold text-white/90 hover:text-white transition-colors"
            >
              Yodl Beer
            </Link>
            
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="gap-6">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      to="/" 
                      className={cn(
                        "text-sm text-white/70 hover:text-white transition-colors",
                        "px-3 py-2 rounded-md hover:bg-white/10"
                      )}
                    >
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      to="/about" 
                      className={cn(
                        "text-sm text-white/70 hover:text-white transition-colors",
                        "px-3 py-2 rounded-md hover:bg-white/10"
                      )}
                    >
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      to="/contact" 
                      className={cn(
                        "text-sm text-white/70 hover:text-white transition-colors",
                        "px-3 py-2 rounded-md hover:bg-white/10"
                      )}
                    >
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-white/80 hover:text-white hover:bg-white/10 border-0"
            >
              Sign In
            </Button>
            <Button 
              size="sm"
              className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/20"
            >
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
