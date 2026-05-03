import React from 'react';
import { Button } from '../ui/Button';
import { MessageCircle, Camera } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold italic">
            E&M
          </div>
          <span className="text-xl font-bold text-foreground">TechSolutions</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-primary transition-colors">Serviços</a>
          <a href="#portfolio" className="hover:text-primary transition-colors">Portfólio</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Preços</a>
          <a href="#testimonials" className="hover:text-primary transition-colors">Diferenciais</a>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/enzocondomitt_/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex gap-2">
              <Camera className="w-4 h-4" /> Instagram
            </Button>
          </a>
          <a href="https://wa.me/5511952811651" target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="gap-2">
              <MessageCircle className="w-4 h-4" /> Orçamento
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};
