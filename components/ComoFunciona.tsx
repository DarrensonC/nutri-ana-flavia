interface ComoFuncionaProps {
  waLink: string;
}

const passos = [
  {
    num: "I",
    title: "Fale pelo WhatsApp",
    desc: "Me mande uma mensagem — vamos conversar sobre seus objetivos e eu explico como funciona o processo.",
  },
  {
    num: "II",
    title: "Agende sua consulta",
    desc: "Escolhemos juntos o melhor horário. Atendo presencialmente em Curitiba ou online para todo o Brasil.",
  },
  {
    num: "III",
    title: "Receba seu plano",
    desc: "Após a avaliação, você recebe um plano alimentar 100% personalizado — feito para a sua rotina e seus objetivos.",
  },
  {
    num: "IV",
    title: "Acompanhamento contínuo",
    desc: "Retornos regulares para avaliar sua evolução, ajustar o plano e manter você no caminho certo.",
  },
];

export default function ComoFunciona({ waLink }: ComoFuncionaProps) {
  return (
    <section
      id="como-funciona"
      className="py-16 md:py-28 px-5 md:px-8"
      style={{ backgroundColor: "#141810" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Cabeçalho */}
        <div className="max-w-xl mb-16">
          <p
            className="text-xs uppercase tracking-[0.22em] mb-4"
            style={{ color: "#8A7A52" }}
          >
            Processo
          </p>
          <h2
            className="font-cormorant font-light leading-tight text-white"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
          >
            Começar é mais simples do{" "}
            <em style={{ color: "#B4A06A", fontStyle: "italic" }}>
              que você imagina
            </em>
          </h2>
        </div>

        {/* Passos */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 mb-16">
          {passos.map((p, i) => (
            <div key={i} className="relative flex flex-col md:pr-8">
              {/* Linha conectora desktop */}
              {i < passos.length - 1 && (
                <div
                  className="hidden md:block absolute top-4 left-8 right-0 h-px"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(138,122,82,0.4), transparent)",
                  }}
                />
              )}

              {/* Número romano */}
              <div
                className="flex items-center justify-center w-8 h-8 mb-6 shrink-0"
                style={{ border: "1px solid rgba(138,122,82,0.4)" }}
              >
                <span
                  className="font-cormorant font-light text-xs"
                  style={{ color: "#8A7A52" }}
                >
                  {p.num}
                </span>
              </div>

              <h3
                className="font-cormorant font-light text-white mb-3"
                style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
              >
                {p.title}
              </h3>
              <p
                className="font-dm font-light text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA separado por linha */}
        <div
          className="pt-10"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 font-dm font-medium text-sm tracking-wide text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#8A7A52" }}
          >
            Quero começar agora
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
