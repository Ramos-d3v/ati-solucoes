import React from 'react';
import { Button } from '../ui/Button';
import { MessageCircle, Camera, Globe, Mail, Clock } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto rounded-3xl bg-primary p-8 md:p-16 overflow-hidden relative shadow-2xl shadow-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="text-primary-foreground">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                Pronto para dar o próximo passo?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
                Não deixe sua ideia morrer no papel. Nossa equipe está pronta para 
                construir a solução que vai transformar seu negócio. 
                <strong> Resposta garantida em até 30 minutos!</strong>
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Velocidade Total</h4>
                    <p className="text-primary-foreground/70">Sua landing page no ar em tempo recorde.</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Nos Acompanhe</h4>
                    <p className="text-primary-foreground/70">@enzocondomitt_</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <a 
                href="https://wa.me/5511952811651" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button 
                  size="lg" 
                  className="w-full h-20 text-xl bg-white text-primary hover:bg-white/90 gap-4 shadow-xl"
                >
                  <MessageCircle className="w-8 h-8" /> Falar no WhatsApp
                </Button>
              </a>
              
              <a 
                href="https://www.instagram.com/enzocondomitt_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full h-16 text-lg border-white/20 bg-white/5 text-white hover:bg-white/10 gap-3"
                >
                  <Camera className="w-6 h-6" /> Ver Portfólio no Instagram
                </Button>
              </a>
              
              <p className="text-center text-primary-foreground/60 text-sm mt-4 italic">
                * Orçamento sem compromisso e personalizado para sua necessidade.
              </p>
            </div>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};
