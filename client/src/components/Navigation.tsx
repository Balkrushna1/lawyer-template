import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Scale, Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Practice Areas", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg group-hover:bg-primary/90 transition-colors">
            <Scale className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className={`font-serif font-bold text-xl leading-none ${isScrolled ? 'text-primary' : 'text-slate-900 lg:text-white lg:shadow-black/20 lg:[text-shadow:0_1px_2px_rgba(0,0,0,0.1)]'}`}>
              JUSTICE
            </span>
            <span className={`text-xs uppercase tracking-widest font-medium ${isScrolled ? 'text-slate-600' : 'text-slate-800 lg:text-slate-200'}`}>
              Legal Partners
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-sm font-medium hover:text-accent transition-colors ${
                isScrolled ? "text-slate-700" : "text-white/90"
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button 
            variant={isScrolled ? "default" : "secondary"}
            className={!isScrolled ? "bg-white text-primary hover:bg-white/90" : ""}
            onClick={(e) => scrollToSection(e as any, "#contact")}
          >
            <Phone className="mr-2 h-4 w-4" />
            Free Consultation
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={isScrolled ? "text-slate-900" : "text-slate-900 lg:text-white"}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-lg font-medium text-slate-800 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <Button 
                  className="w-full mt-4" 
                  onClick={(e) => scrollToSection(e as any, "#contact")}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Free Consultation
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
