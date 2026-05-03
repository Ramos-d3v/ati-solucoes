'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Tamura - Espaço de Saúde',
    category: 'Landing Page Profissional',
    url: 'https://tamura.esp.br/',
    // Tenta usar Microlink que é mais rápido, mas deixa o caminho local pronto
    image: 'https://api.microlink.io?url=https%3A%2F%2Ftamura.esp.br%2F&screenshot=true&embed=screenshot.url',
    localImage: '/portfolio/tamura.png' 
  },
  {
    title: 'AP Joias - E-commerce',
    category: 'Loja Virtual de Luxo',
    url: 'https://ap-joias.vercel.app/',
    image: 'https://api.microlink.io?url=https%3A%2F%2Fap-joias.vercel.app%2F&screenshot=true&embed=screenshot.url',
    localImage: '/portfolio/apjoias.png'
  },
  {
    title: 'Transforma Excel - Consultoria',
    category: 'Sistema de Automação',
    url: 'https://transformaexcel.vercel.app/',
    image: 'https://api.microlink.io?url=https%3A%2F%2Ftransformaexcel.vercel.app%2F&screenshot=true&embed=screenshot.url',
    localImage: '/portfolio/transforma.png'
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Casos de Sucesso</h2>
          <p className="text-muted-foreground text-lg">
            Confira alguns dos projetos que já entregamos e veja a qualidade que 
            podemos levar para o seu negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group">
              {/* Browser Mockup */}
              <div className="relative rounded-xl overflow-hidden border border-border bg-card shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                {/* Browser Header */}
                <div className="bg-muted px-4 py-2 border-b border-border flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-grow mx-4 h-6 bg-background rounded-md border border-border flex items-center px-3 text-[10px] text-muted-foreground truncate">
                    {project.url}
                  </div>
                </div>
                
                {/* Site Preview */}
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-[5s] group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/1200x800/0ea5e9/ffffff?text=${project.title}`;
                    }}
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-primary px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform"
                    >
                      Ver Site ao Vivo <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
          
          {/* CTA Card for more projects */}
          <div className="p-8 rounded-2xl border-2 border-dashed border-primary/20 flex flex-col items-center justify-center text-center bg-primary/5 hover:bg-primary/10 transition-colors">
            <h3 className="text-2xl font-bold mb-4">Seu Projeto Aqui</h3>
            <p className="text-muted-foreground mb-8 max-w-xs">
              Estamos prontos para criar o próximo grande caso de sucesso com você. 
              Vamos começar?
            </p>
            <a 
              href="https://wa.me/5511952811651" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
            >
              Iniciar Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
