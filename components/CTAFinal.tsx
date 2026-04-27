interface CTAFinalProps {
  waLink: string;
}

const beneficios = [
  "Plano alimentar 100% personalizado para você",
  "Consulta presencial em Curitiba e online para todo o Brasil",
  "Sem dietas restritivas — alimentação que funciona de verdade",
  "Acompanhamento próximo do início ao resultado",
  "Suporte pelo WhatsApp entre as consultas",
];

export default function CTAFinal({ waLink }: CTAFinalProps) {
  return (
    <section
      id="contato"
      className="relative py-16 md:py-28 px-5 md:px-8 overflow-hidden"
      style={{ backgroundColor: "#141810" }}
    >
      {/* Linha dourada decorativa topo */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, #8A7A52, transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Esquerda — headline + CTA */}
          <div>
            <p
              className="text-xs uppercase tracking-[0.22em] mb-5"
              style={{ color: "#8A7A52" }}
            >
              Próximo passo
            </p>
            <h2
              className="font-cormorant font-light text-white leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              O momento de cuidar{" "}
              <br />
              <em style={{ color: "#B4A06A", fontStyle: "italic" }}>
                de você é agora
              </em>
            </h2>

            <p
              className="font-dm font-light text-sm leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Dar o primeiro passo é simples: mande uma mensagem agora e vamos
              conversar sobre seus objetivos — sem compromisso.
            </p>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 font-dm font-medium text-sm tracking-wide text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#8A7A52" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Falar com Ana Flávia agora
            </a>
          </div>

          {/* Direita — benefícios */}
          <div>
            <p
              className="text-xs uppercase tracking-[0.22em] mb-6"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              Incluso no acompanhamento
            </p>
            <ul className="space-y-4">
              {beneficios.map((b, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div
                    style={{
                      width: "16px",
                      height: "1px",
                      backgroundColor: "#8A7A52",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    className="font-dm font-light text-sm"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <div
        className="max-w-5xl mx-auto mt-20 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <p
          className="font-dm font-light text-xs"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          © 2025 Ana Flávia — Nutricionista Esportiva &amp; Estética · Curitiba,
          PR
        </p>
        <p
          className="font-dm font-light text-xs"
          style={{ color: "rgba(255,255,255,0.15)" }}
        >
          @anamundt · (41) 98830-9656
        </p>
      </div>
    </section>
  );
}
