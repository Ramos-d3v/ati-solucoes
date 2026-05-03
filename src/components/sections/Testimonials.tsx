import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: 'Este template mudou completamente o jogo para o meu negócio. Em apenas uma semana, vi minha taxa de conversão dobrar.',
    author: 'Ricardo Santos',
    role: 'CEO na TechFuture',
    avatar: 'https://i.pravatar.cc/100?img=11',
  },
  {
    content: 'A velocidade de carregamento é impressionante. Meus clientes sempre elogiam como a página é rápida e fácil de usar.',
    author: 'Maria Oliveira',
    role: 'Fundadora da EcoStyle',
    avatar: 'https://i.pravatar.cc/100?img=25',
  },
  {
    content: 'Facilidade incrível para customizar. Consegui adaptar para a identidade visual da minha marca em poucos minutos.',
    author: 'Carlos Lima',
    role: 'Marketing Manager na GrowUp',
    avatar: 'https://i.pravatar.cc/100?img=33',
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">O que nossos clientes dizem</h2>
          <p className="text-muted-foreground">
            Milhares de empreendedores já confiam em nossa plataforma para escalar seus resultados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-1 text-accent mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-foreground italic mb-8">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
