interface ServicosProps {
  waLink: string;
}

const servicos = [
  {
    num: "01",
    title: "Nutrição Esportiva",
    desc: "Alimentação estratégica para potencializar seu treino, ganhar massa muscular, melhorar a performance e acelerar a recuperação. Para atletas amadores e profissionais.",
  },
  {
    num: "02",
    title: "Emagrecimento com Saúde",
    desc: "Perda de gordura corporal sustentável com preservação de massa magra. Sem dietas restritivas — um plano que cabe na sua rotina e que você consegue manter.",
  },
  {
    num: "03",
    title: "Nutrição Estética",
    desc: "Alimentação focada em composição corporal, saúde da pele, cabelo e bem-estar. Para quem quer se sentir bem no próprio corpo com mais autoestima.",
  },
  {
    num: "04",
    title: "Reeducação Alimentar",
    desc: "Construção de uma relação saudável com a comida. Sem listas de proibidos, sem culpa — aprender a comer bem de verdade para o resto da vida.",
  },
  {
    num: "05",
    title: "Qualidade de Vida",
    desc: "Mais disposição, energia e equilíbrio no dia a dia. Para quem busca saúde global e bem-estar duradouro, independente de um objetivo estético específico.",
  },
  {
    num: "06",
    title: "Consulta Online",
    desc: "Atendimento remoto com a mesma qualidade e personalização da consulta presencial. Para todo o Brasil — sem sair de casa.",
  },
];

export default function Servicos({ waLink }: ServicosProps) {
  return (
    <section
      id="servicos"
      className="py-16 md:py-28 px-5 md:px-8"
      style={{ backgroundColor: "#FAF8F5" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Cabeçalho split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div>
            <p
              className="text-xs uppercase tracking-[0.22em] mb-4"
              style={{ color: "#8A7A52" }}
            >
              Serviços
            </p>
            <h2
              className="font-cormorant font-light leading-tight"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                color: "#141810",
              }}
            >
              Como posso{" "}
              <em style={{ color: "#B4A06A", fontStyle: "italic" }}>
                te ajudar
              </em>
            </h2>
          </div>
          <div className="flex items-end">
            <p
              className="font-dm font-light text-sm leading-relaxed"
              style={{ color: "#7A8A72" }}
            >
              Cada atendimento é único. Analiso seu histórico, rotina,
              objetivos e preferências para montar um plano que funcione
              especificamente para você.
            </p>
          </div>
        </div>

        {/* Lista editorial */}
        <div style={{ borderTop: "1px solid #E2E8DF" }}>
          {servicos.map((s, i) => (
            <div
              key={i}
              className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-7 transition-all duration-200 hover:pl-2"
              style={{ borderBottom: "1px solid #E2E8DF" }}
            >
              <span
                className="font-dm text-xs shrink-0"
                style={{ color: "#8A7A52", letterSpacing: "0.1em" }}
              >
                {s.num}
              </span>
              <div className="flex-1">
                <h3
                  className="font-cormorant font-light mb-2"
                  style={{
                    fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                    color: "#141810",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  className="font-dm font-light text-sm leading-relaxed"
                  style={{ color: "#7A8A72" }}
                >
                  {s.desc}
                </p>
              </div>
              <div className="hidden md:flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8A7A52"
                  strokeWidth="1.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
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
            Quero saber mais sobre os atendimentos
          </a>
        </div>
      </div>
    </section>
  );
}
