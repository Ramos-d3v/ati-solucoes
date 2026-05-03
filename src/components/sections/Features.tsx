import React from 'react';
import { Layout, Code, Rocket, Lock, Smartphone, Search } from 'lucide-react';

const features = [
  {
    title: 'Landing Pages',
    description: 'Páginas focadas em converter visitantes em vendas reais para o seu negócio.',
    icon: Layout,
  },
  {
    title: 'Sistemas Sob Medida',
    description: 'Desenvolvemos o software exato que sua empresa precisa para escalar.',
    icon: Code,
  },
  {
    title: 'Entrega Ultra-Rápida',
    description: 'Não perdemos tempo. Seu projeto no ar em tempo recorde com qualidade.',
    icon: Rocket,
  },
  {
    title: 'Segurança de Dados',
    description: 'Implementamos as camadas mais modernas de segurança e proteção.',
    icon: Lock,
  },
  {
    title: 'Mobile First',
    description: 'Aplicações que funcionam perfeitamente em qualquer smartphone.',
    icon: Smartphone,
  },
  {
    title: 'SEO Otimizado',
    description: 'Sua marca no topo das buscas orgânicas para atrair novos clientes.',
    icon: Search,
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluções que Impulsionam seu Faturamento</h2>
          <p className="text-muted-foreground text-lg">
            Combinamos tecnologia de ponta com estratégias de marketing para criar produtos digitais que vendem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
