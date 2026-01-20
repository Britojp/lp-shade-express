export default function ProductsHero() {
  return (
    <section className="pt-[110px] sm:pt-[115px] md:pt-[125px] lg:pt-[125px]">
      <div className="bg-foreground py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Linha Completa
            </p>
            <div className="flex justify-start mb-6">
              <div className="shape-accent-line" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Produtos
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Descubra nossa linha completa de cortinas e persianas
              desenvolvidas para garantir praticidade, beleza e durabilidade
              para qualquer ambiente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
