"use client";

import { useState } from "react";

const faqs = [
  {
    pergunta: "Em quanto tempo vou ver resultados?",
    resposta:
      "Os primeiros resultados aparecem geralmente nas 2 a 4 primeiras semanas — mais energia, menos inchaço e maior disposição nos treinos. A composição corporal muda de forma mais visível a partir do primeiro mês. O importante é a consistência, e eu estarei ao seu lado em cada etapa.",
  },
  {
    pergunta: "As consultas são presenciais ou online?",
    resposta:
      "Atendo de forma presencial em Curitiba — PR (R. São José dos Pinhais, 1336 — Sítio Cercado) e também online para todo o Brasil. O atendimento online tem a mesma qualidade e personalização da consulta presencial.",
  },
  {
    pergunta: "Vou ter que cortar tudo que gosto de comer?",
    resposta:
      "Não. Minha abordagem é justamente o contrário disso. Trabalho com alimentação flexível e sustentável — você aprende a encaixar seus alimentos preferidos de forma inteligente dentro do plano. Dieta boa é aquela que você consegue manter.",
  },
  {
    pergunta: "Você atende por plano de saúde?",
    resposta:
      "Não atendo por plano de saúde — apenas particular. Isso porque acredito que um atendimento de verdade exige tempo, dedicação e personalização que vão muito além do que o sistema conveniado permite.",
  },
  {
    pergunta: "Como funciona o acompanhamento entre as consultas?",
    resposta:
      "Você tem suporte pelo WhatsApp para tirar dúvidas rápidas sobre o plano. Nas consultas de retorno, avaliamos sua evolução, conversamos sobre as dificuldades e ajustamos o que for necessário para manter os resultados.",
  },
  {
    pergunta: "Qual o primeiro passo para começar?",
    resposta:
      "É simples: me mande uma mensagem no WhatsApp. Vamos conversar sobre seus objetivos, eu explico como funciona o atendimento e agendamos sua consulta. Sem compromisso.",
  },
];

export default function FAQ() {
  const [aberto, setAberto] = useState<number | null>(null);

  return (
    <section
      id="faq"
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
            Dúvidas frequentes
          </p>
          <h2
            className="font-cormorant font-light leading-tight"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#141810",
            }}
          >
            Perguntas que eu mais{" "}
            <em style={{ color: "#B4A06A", fontStyle: "italic" }}>recebo</em>
          </h2>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl" style={{ borderTop: "1px solid #E2E8DF" }}>
          {faqs.map((item, i) => (
            <div key={i} style={{ borderBottom: "1px solid #E2E8DF" }}>
              <button
                className="w-full flex items-center justify-between gap-4 py-6 text-left"
                onClick={() => setAberto(aberto === i ? null : i)}
              >
                <span
                  className="font-dm font-light text-sm leading-relaxed pr-4"
                  style={{ color: "#141810" }}
                >
                  {item.pergunta}
                </span>
                <span
                  className="shrink-0 transition-transform duration-300"
                  style={{
                    transform: aberto === i ? "rotate(45deg)" : "rotate(0deg)",
                    color: "#8A7A52",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>

              {aberto === i && (
                <div className="pb-6">
                  <p
                    className="font-dm font-light text-sm leading-relaxed"
                    style={{ color: "#7A6555" }}
                  >
                    {item.resposta}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
