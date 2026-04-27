export default function DorSection() {
  const dores = [
    "Treina há meses mas o corpo não muda como você quer?",
    "Não sabe o que comer antes e depois do treino para ter mais resultado?",
    "Já tentou várias dietas e voltou a engordar tudo?",
    "Sente falta de energia e disposição durante os exercícios?",
    "Quer ganhar massa muscular mas tem medo de engordar?",
    "Emagrece mas perde músculo junto e o corpo fica flácido?",
  ];

  return (
    <section
      id="dores"
      className="py-16 md:py-28 px-5 md:px-8"
      style={{ backgroundColor: "#FAF8F5" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Cabeçalho */}
        <div className="max-w-xl mb-16">
          <p
            className="text-xs uppercase tracking-[0.22em] mb-4"
            style={{ color: "#8A7A52" }}
          >
            Identificação
          </p>
          <h2
            className="font-cormorant font-light leading-tight"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              color: "#141810",
            }}
          >
            Você se identifica com{" "}
            <em style={{ color: "#B4A06A", fontStyle: "italic" }}>
              alguma dessas situações
            </em>
            ?
          </h2>
        </div>

        {/* Grid editorial */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 mb-16"
          style={{
            gap: "1px",
            backgroundColor: "#E2E8DF",
          }}
        >
          {dores.map((dor, i) => (
            <div
              key={i}
              className="flex items-start gap-5 px-8 py-8"
              style={{ backgroundColor: "#FAF8F5" }}
            >
              <div
                className="mt-2 shrink-0"
                style={{
                  width: "24px",
                  height: "1px",
                  backgroundColor: "#8A7A52",
                }}
              />
              <p
                className="font-dm font-light text-sm leading-relaxed"
                style={{ color: "#2E3D2F" }}
              >
                {dor}
              </p>
            </div>
          ))}
        </div>

        {/* Blockquote de transição */}
        <blockquote
          className="pl-6 max-w-2xl"
          style={{ borderLeft: "2px solid #8A7A52" }}
        >
          <p
            className="font-cormorant font-light italic leading-relaxed mb-3"
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              color: "#141810",
            }}
          >
            &ldquo;Se você respondeu sim para pelo menos uma dessas perguntas,
            você está no lugar certo. A alimentação certa muda tudo — e eu
            posso te ajudar a chegar lá.&rdquo;
          </p>
          <p className="text-xs font-dm" style={{ color: "#7A8A72" }}>
            — Ana Flávia, Nutricionista Esportiva &amp; Estética
          </p>
        </blockquote>
      </div>
    </section>
  );
}
