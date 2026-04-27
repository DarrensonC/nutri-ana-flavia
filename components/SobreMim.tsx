"use client";

import Image from "next/image";
import { useState } from "react";

interface SobreMimProps {
  waLink: string;
}

export default function SobreMim({ waLink }: SobreMimProps) {
  const [fotoError, setFotoError] = useState(false);
  const credenciais = [
    "Formada em Nutrição pela UFPR",
    "Especialista em Nutrição Esportiva",
    "Especialista em Nutrição Estética",
    "Atendimento Presencial em Curitiba — PR",
    "Atendimento Online para todo o Brasil",
    "5,0 estrelas · 274 avaliações no Google",
  ];

  return (
    <section
      id="sobre"
      className="py-16 md:py-28 px-5 md:px-8"
      style={{ backgroundColor: "#F4F2EE" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Foto */}
          <div className="relative">
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              {/* Placeholder sempre visível por baixo */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  backgroundColor: "#E2E8DF",
                  border: "1px solid #C4D4C0",
                }}
              >
                <div className="text-center" style={{ color: "#7A8A72" }}>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="mx-auto mb-3"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                  </svg>
                  <p className="text-xs font-dm">Foto — Ana Flávia</p>
                </div>
              </div>
              {/* TODO: Adicionar foto-sobre.jpg em public/fotos/ */}
              {!fotoError && (
                <Image
                  src="/fotos/foto-sobre.webp"
                  alt="Ana Flávia — Nutricionista"
                  fill
                  className="object-cover object-top"
                  onError={() => setFotoError(true)}
                />
              )}
            </div>

            {/* Badge flutuante */}
            <div
              className="absolute bottom-4 right-4 px-4 py-3"
              style={{ backgroundColor: "#141810" }}
            >
              <p
                className="text-xs font-dm uppercase tracking-widest mb-1"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Avaliação Google
              </p>
              <div className="flex items-center gap-1">
                <span
                  className="font-cormorant font-light text-white"
                  style={{ fontSize: "1.5rem" }}
                >
                  5,0
                </span>
                <div className="flex gap-0.5 ml-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="#B4A06A"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div>
            <p
              className="text-xs uppercase tracking-[0.22em] mb-4"
              style={{ color: "#8A7A52" }}
            >
              Sobre mim
            </p>
            <h2
              className="font-cormorant font-light leading-tight mb-8"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                color: "#141810",
              }}
            >
              Quem vai cuidar{" "}
              <em style={{ color: "#B4A06A", fontStyle: "italic" }}>de você</em>
            </h2>

            <p
              className="font-dm font-light text-sm leading-relaxed mb-5"
              style={{ color: "#2E3D2F" }}
            >
              Sou Ana Flávia, nutricionista esportiva e estética formada pela
              UFPR. Minha missão é simples: te ajudar a alcançar seus objetivos
              com saúde, equilíbrio e resultado de verdade — sem dietas malucas
              e sem sofrimento.
            </p>

            <p
              className="font-dm font-light text-sm leading-relaxed mb-10"
              style={{ color: "#2E3D2F" }}
            >
              Cada plano que crio é pensado especialmente para você: sua rotina,
              seu esporte, seus objetivos e o que você ama comer. Porque
              acredito que a alimentação certa não precisa ser uma prisão — ela
              pode (e deve) fazer parte da sua vida de forma natural e
              sustentável.
            </p>

            {/* Credenciais */}
            <ul className="space-y-3 mb-10">
              {credenciais.map((item, i) => (
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
                    style={{ color: "#2E3D2F" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 font-dm font-medium text-sm tracking-wide text-white transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#141810" }}
            >
              Quero conhecer seu trabalho
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
      </div>
    </section>
  );
}
