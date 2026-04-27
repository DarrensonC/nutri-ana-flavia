// TODO: Substituir pelos depoimentos reais da Ana Flávia
// Buscar no Google Meu Negócio ou pedir ao profissional

const depoimentos = [
  {
    texto:
      "Em 3 meses perdi 8kg sem passar fome e sem largar o que gosto de comer. O plano encaixou perfeitamente na minha rotina de academia e trabalho. Recomendo muito!",
    nome: "Mariana S.",
    resultado: "Perdeu 8kg em 3 meses",
    inicial: "M",
  },
  {
    texto:
      "Sempre treinei mas nunca tive resultado de verdade. Depois que comecei com a Ana Flávia, minha composição corporal mudou completamente. Mais massa, menos gordura e muito mais disposição.",
    nome: "Rafael T.",
    resultado: "Ganho de massa + definição",
    inicial: "R",
  },
  {
    texto:
      "O atendimento online é incrível. Mesma atenção e personalização de uma consulta presencial. Ela realmente conhece meu histórico e adapta o plano quando preciso.",
    nome: "Camila O.",
    resultado: "Atendimento online — São Paulo",
    inicial: "C",
  },
];

function StarSVG() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#B4A06A">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function Depoimentos() {
  return (
    <section
      id="depoimentos"
      className="py-16 md:py-28 px-5 md:px-8"
      style={{ backgroundColor: "#FAF8F5" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Cabeçalho split */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <p
              className="text-xs uppercase tracking-[0.22em] mb-4"
              style={{ color: "#8A7A52" }}
            >
              Depoimentos
            </p>
            <h2
              className="font-cormorant font-light leading-tight"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                color: "#141810",
              }}
            >
              Resultados que{" "}
              <em style={{ color: "#B4A06A", fontStyle: "italic" }}>
                falam por si
              </em>
            </h2>
          </div>

          {/* Badge Google */}
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <StarSVG key={i} />
              ))}
            </div>
            <span
              className="font-cormorant font-light"
              style={{ fontSize: "1.1rem", color: "#141810" }}
            >
              5,0
            </span>
            <span
              className="font-dm font-light text-xs"
              style={{ color: "#7A8A72" }}
            >
              · 274 avaliações no Google
            </span>
          </div>
        </div>

        {/* Grid editorial */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{
            gap: "1px",
            backgroundColor: "#E2E8DF",
          }}
        >
          {depoimentos.map((d, i) => (
            <div
              key={i}
              className="px-8 py-10"
              style={{ backgroundColor: "#FAF8F5" }}
            >
              {/* Aspas decorativas */}
              <p
                className="font-cormorant leading-none mb-4"
                style={{ fontSize: "4rem", color: "#E2E8DF", lineHeight: 1 }}
                aria-hidden
              >
                &ldquo;
              </p>

              {/* Estrelas */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, j) => (
                  <StarSVG key={j} />
                ))}
              </div>

              {/* Texto */}
              <p
                className="font-cormorant font-light italic leading-relaxed mb-8"
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.15rem)",
                  color: "#2E3D2F",
                }}
              >
                &ldquo;{d.texto}&rdquo;
              </p>

              {/* Autor */}
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 flex items-center justify-center text-white text-xs font-dm font-medium shrink-0"
                  style={{ backgroundColor: "#3D5A3E" }}
                >
                  {d.inicial}
                </div>
                <div>
                  <p
                    className="font-dm font-medium text-sm"
                    style={{ color: "#141810" }}
                  >
                    {d.nome}
                  </p>
                  <p
                    className="font-dm font-light text-xs"
                    style={{ color: "#B4A06A" }}
                  >
                    {d.resultado}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
