import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import pessoaPensandoImg from "@assets/generated_images/pessoa_pensando.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ResellerCTASection() {
  return (
    <section className="py-20 md:py-32 bg-[#F68D2E] relative overflow-hidden">
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 rounded-full bg-white/5 blur-3xl"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            className="text-white order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
              variants={fadeInLeft}
            >
              Mais vendas, menos complicação
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-white/90 mb-8 md:mb-10 leading-relaxed max-w-xl"
              variants={fadeInLeft}
            >
              Oferecemos mostruários, catálogo digital, atendimento exclusivo e
              treinamentos para fortalecer suas vendas e facilitar sua
              apresentação ao cliente final.
            </motion.p>
            <motion.div variants={fadeInLeft}>
              <Link href="/revendas">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    size="lg"
                    className="bg-white text-[#F68D2E] hover:bg-white/95 text-base md:text-lg px-8 md:px-10 py-6 md:py-7 font-bold uppercase tracking-wide rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                    data-testid="button-cta-reseller"
                  >
                    Quero ser revenda
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          <div className="relative flex items-center justify-center order-1 lg:order-2 py-8 lg:py-0" style={{ overflow: 'visible' }}>
            <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] flex items-center justify-center">
              <motion.div
                className="absolute inset-0 w-full h-full rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
              
              <div className="relative w-full h-full flex items-end justify-center" style={{ overflow: 'visible' }}>
                <motion.div
                  className="absolute bottom-0 left-1/2"
                  style={{
                    width: '85%',
                  }}
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div
                    className="relative"
                    style={{
                      transform: 'translateX(-50%) scale(1.2)',
                      transformOrigin: 'bottom center',
                    }}
                  >
                    <img
                      src={pessoaPensandoImg}
                      alt="Pessoa pensando em soluções para revendas"
                      className="w-full h-auto object-contain relative z-0"
                      style={{
                        filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))',
                        display: 'block',
                      }}
                    />
                    <div
                      className="absolute inset-0 z-10 pointer-events-none"
                      style={{
                        background: 'linear-gradient(to top, rgba(246, 141, 46, 0.8) 0%, rgba(246, 141, 46, 0.5) 30%, rgba(246, 141, 46, 0.2) 60%, transparent 100%)',
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}