interface EntregaveisProps {
  waLink: string;
}

const entregaveis = [
  {
    title: "Protocolo Alimentar Personalizado",
    desc: "Plano montado especificamente para você, considerando sua rotina, preferências alimentares e objetivos.",
  },
  {
    title: "Orientações de Treino",
    desc: "Diretrizes nutricionais alinhadas com seu treino — pré, intra e pós-treino para maximizar seus resultados.",
  },
  {
    title: "Análise da Composição Corporal",
    desc: "Avaliação completa para entender seu ponto de partida e traçar a evolução de forma precisa.",
  },
  {
    title: "Sugestão de Suplementação",
    desc: "Indicação dos suplementos que realmente fazem sentido para o seu caso — sem desperdício de dinheiro.",
  },
  {
    title: "Suporte por WhatsApp",
    desc: "Tira-dúvidas rápido entre as consultas para você nunca ficar perdido no processo.",
  },
  {
    title: "Retornos e Ajustes Regulares",
    desc: "Consultas de acompanhamento para avaliar sua evolução e fazer os ajustes necessários no plano.",
  },
];

export default function Entregaveis({ waLink }: EntregaveisProps) {
  return (
    <section
      id="entregaveis"
      className="py-16 md:py-28 px-5 md:px-8"
      style={{ backgroundColor: "#F4F2EE" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Cabeçalho */}
        <div className="max-w-xl mb-16">
          <p
            className="text-xs uppercase tracking-[0.22em] mb-4"
            style={{ color: "#8A7A52" }}
          >
            O que você recebe
          </p>
          <h2
            className="font-cormorant font-light leading-tight"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#141810",
            }}
          >
            Tudo que você precisa para{" "}
            <em style={{ color: "#B4A06A", fontStyle: "italic" }}>
              chegar lá
            </em>
          </h2>
        </div>

        {/* Grid editorial */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 mb-16"
          style={{
            gap: "1px",
            backgroundColor: "#E2E8DF",
          }}
        >
          {entregaveis.map((e, i) => (
            <div
              key={i}
              className="px-8 py-10"
              style={{ backgroundColor: "#F4F2EE" }}
            >
              <div
                className="mb-6"
                style={{
                  width: "24px",
                  height: "1px",
                  backgroundColor: "#8A7A52",
                }}
              />
              <h3
                className="font-cormorant font-light mb-3"
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.2rem)",
                  color: "#141810",
                }}
              >
                {e.title}
              </h3>
              <p
                className="font-dm font-light text-sm leading-relaxed"
                style={{ color: "#7A8A72" }}
              >
                {e.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Blockquote */}
        <blockquote
          className="pl-6 max-w-2xl mb-10"
          style={{ borderLeft: "2px solid #8A7A52" }}
        >
          <p
            className="font-cormorant font-light italic leading-relaxed mb-3"
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
              color: "#141810",
            }}
          >
            &ldquo;Não atendo plano de saúde — apenas particular. Porque acredito que
            um atendimento de verdade exige tempo, dedicação e personalização
            que vão muito além do que o sistema permite.&rdquo;
          </p>
          <p className="text-xs font-dm" style={{ color: "#7A8A72" }}>
            — Ana Flávia
          </p>
        </blockquote>

        {/* CTA */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 font-dm font-medium text-sm tracking-wide text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#25D366" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Quero começar meu plano personalizado
        </a>
      </div>
    </section>
  );
}
