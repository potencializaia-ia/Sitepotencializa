import { motion } from 'framer-motion';

export function Marquee() {
  // Transformamos a string em um array para manipular cada frase individualmente
  const phrases = [
    'Sua empresa no automático',
    'Escala sem esforço',
    'Inteligência que gera lucro'
  ];

  return (
    <section className="py-16 bg-white overflow-hidden border-y border-gray-100">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 30, // Aumentei um pouco o tempo para uma leitura mais fluida
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex whitespace-nowrap items-center"
      >
        {/* Repetimos o set de frases algumas vezes para garantir o loop infinito sem buracos */}
        {[...Array(4)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center">
            {phrases.map((phrase, phraseIndex) => {
              // Lógica para alternar: usamos o índice global para manter a alternância contínua
              const isOutline = (setIndex * phrases.length + phraseIndex) % 2 !== 0;

              return (
                <div key={phraseIndex} className="flex items-center">
                  <span
                    className={`text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter mx-8 ${
                      isOutline 
                        ? 'opacity-50' 
                        : 'text-[#2D2D4A]'
                    }`}
                    style={isOutline ? { WebkitTextStroke: '1px #2D2D4A', color: 'transparent' } : {}}
                  >
                    {phrase}
                    {!isOutline && <span className="text-[#ff851b]">.</span>}
                  </span>
                  
                  {/* Separador (Bolinha ou ponto médio) */}
                  <span className="text-3xl opacity-80 text-[#71d7ff]">•</span>
                </div>
              );
            })}
          </div>
        ))}
      </motion.div>
    </section>
  );
}