import React from 'react';
import { Button } from '../ui/Button';
import { MessageCircle, ArrowRight, Star, ShieldCheck, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-6">
            <Zap className="w-3 h-3 fill-current" />
            Desenvolvimento Ágil e Entrega Express
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8">
            Transformamos sua ideia em um <span className="text-primary">Sistema Lucrativo</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Sistemas robustos, Landing Pages de alta conversão e soluções digitais sob medida. 
            <strong> Segurança total, entrega rápida e o melhor custo-benefício do mercado.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="https://wa.me/5511952811651" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="gap-2 w-full">
                <MessageCircle className="w-5 h-5" /> Solicitar Orçamento Grátis
              </Button>
            </a>
            <a href="#features" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full">
                Conhecer Nossos Serviços
              </Button>
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto border-t border-border pt-10">
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">Segurança Blindada</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Zap className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">Entrega em Recorde</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-1 text-accent">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="text-sm font-medium">Preço que cabe no bolso</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl opacity-50" />
    </section>
  );
};
