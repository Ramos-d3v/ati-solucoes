import React from 'react';
import { Button } from '../ui/Button';
import { Check, MessageCircle } from 'lucide-react';

const tiers = [
  {
    name: 'Landing Page',
    price: 'Sob Consulta',
    description: 'A porta de entrada para suas vendas online.',
    features: [
      'Design Exclusivo e Moderno',
      'Foco Total em Conversão',
      'Otimização para Celular',
      'Integração com WhatsApp',
      'Hospedagem de Alta Velocidade',
      'Entrega em até 7 dias'
    ],
    buttonText: 'Quero Minha Landing Page',
    popular: false,
  },
  {
    name: 'Sistema Web',
    price: 'Personalizado',
    description: 'Automatize e escale seus processos internos.',
    features: [
      'Painel Administrativo Completo',
      'Banco de Dados Seguro',
      'Gestão de Usuários/Clientes',
      'Relatórios em Tempo Real',
      'Suporte Técnico Dedicado',
      'Segurança de Nível Bancário'
    ],
    buttonText: 'Solicitar Projeto',
    popular: true,
  },
  {
    name: 'Suporte & Evolução',
    price: 'Mensal',
    description: 'Manutenção para quem não quer parar de crescer.',
    features: [
      'Atualizações Mensais',
      'Backup Diário Garantido',
      'Otimização Contínua de SEO',
      'Novas Funcionalidades',
      'Suporte Prioritário 24/7',
      'Segurança Monitorada'
    ],
    buttonText: 'Saber Mais',
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Investimento Inteligente</h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos o melhor custo-benefício para transformar sua presença digital. 
            Preços justos que cabem no seu planejamento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-2xl border ${tier.popular ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-border bg-card'} flex flex-col hover:scale-105 transition-transform duration-300`}
            >
              {tier.popular && (
                <div className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold w-fit mb-4">
                  RECOMENDADO
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-primary">{tier.price}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-8">{tier.description}</p>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a href="https://wa.me/5511952811651" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant={tier.popular ? 'primary' : 'outline'} 
                  className="w-full gap-2"
                >
                  <MessageCircle className="w-4 h-4" /> {tier.buttonText}
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
