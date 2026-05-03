import React from 'react';
import { Camera, MessageCircle, Globe } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold italic">
                E&M
              </div>
              <span className="text-xl font-bold text-foreground">TechSolutions</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Especialistas em transformar ideias em produtos digitais lucrativos. 
              Segurança, velocidade e entrega garantida.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Nossos Serviços</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-colors">Landing Pages</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfólio</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Sistemas Web</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Consultoria Tech</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Links Úteis</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#pricing" className="hover:text-primary transition-colors">Tabela de Preços</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Diferenciais</a></li>
              <li><a href="https://wa.me/5511952811651" className="hover:text-primary transition-colors">Solicitar Orçamento</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Contato Direto</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/enzocondomitt_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Camera className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/5511952811651" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              São Paulo, SP - Atendemos todo o Brasil.
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 E&M TechSolutions. Todos os direitos reservados.</p>
          <p>Desenvolvido por <span className="text-primary font-medium">Enzo & Amigo</span></p>
        </div>
      </div>
    </footer>
  );
};
