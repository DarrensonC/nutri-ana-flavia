"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface HeroProps {
  waLink: string;
}

export default function Hero({ waLink }: HeroProps) {
  const [fotoError, setFotoError] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.bottom > 0) {
        setOffsetY(window.scrollY * 0.3);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: "#141810", minHeight: "100vh" }}
      className="relative overflow-hidden flex items-center"
    >
      {/* Linha dourada decorativa topo */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, #8A7A52, transparent)",
          zIndex: 4,
        }}
      />

      {/* ── FOTO DE FUNDO (mobile) ── cobre toda a seção */}
      {!fotoError && (
        <div
          className="absolute inset-0 md:hidden"
          style={{ top: "-15%", bottom: "-15%", transform: `translateY(${offsetY}px)` }}
        >
          <Image
            src="/fotos/foto-hero.jpg"
            alt="Ana Flávia"
            fill
            className="object-cover object-center"
            priority
            onError={() => setFotoError(true)}
          />
        </div>
      )}

      {/* Película mobile — multicamada para garantir leitura */}
      <div
        className="absolute inset-0 md:hidden"
        style={{ backgroundColor: "rgba(8,10,6,0.72)", zIndex: 1 }}
      />
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background: "linear-gradient(to bottom, rgba(20,24,16,0.6) 0%, rgba(20,24,16,0.85) 100%)",
          zIndex: 1,
        }}
      />

      {/* ── LAYOUT DESKTOP: split em 2 colunas ── */}
      <div className="relative w-full max-w-5xl mx-auto px-5 md:px-8 py-20 md:py-0" style={{ zIndex: 2 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-screen md:items-center gap-8 md:gap-12">

          {/* Coluna esquerda — texto */}
          <div className="max-w-xl">
            <p
              className="text-xs uppercase mb-6 tracking-[0.22em]"
              style={{ color: "#8A7A52" }}
            >
              Nutricionista Esportiva &amp; Estética · Curitiba e Online
            </p>

            <h1
              className="font-cormorant font-light text-white leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
            >
              Treina muito,{" "}
              <br />
              mas falta{" "}
              <em style={{ color: "#B4A06A", fontStyle: "italic" }}>resultado</em>
              ?
            </h1>

            <p
              className="font-dm font-light mb-10 leading-relaxed"
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "clamp(0.875rem, 1.5vw, 1.05rem)",
              }}
            >
              Alimentação estratégica para quem treina com objetivo — sem dietas
              malucas, sem passar fome. Resultados reais com equilíbrio e saúde
              de verdade.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-6 md:gap-8 mb-10">
              <div>
                <p className="font-cormorant font-light text-white" style={{ fontSize: "clamp(1.25rem, 3vw, 1.6rem)" }}>
                  5,0
                </p>
                <p className="text-xs font-dm" style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>
                  Google · 274 avaliações
                </p>
              </div>
              <div className="w-px self-stretch" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
              <div>
                <p className="font-cormorant font-light text-white" style={{ fontSize: "clamp(1.25rem, 3vw, 1.6rem)" }}>
                  UFPR
                </p>
                <p className="text-xs font-dm" style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>
                  Formação em Nutrição
                </p>
              </div>
              <div className="hidden md:block w-px self-stretch" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
              <div className="hidden md:block">
                <p className="font-cormorant font-light text-white" style={{ fontSize: "clamp(1.25rem, 3vw, 1.6rem)" }}>
                  Online
                </p>
                <p className="text-xs font-dm" style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>
                  Todo o Brasil
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 font-dm font-medium text-sm tracking-wide text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#25D366" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Agendar consulta
              </a>
              <a
                href="#sobre"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 font-dm font-light text-sm tracking-wide transition-opacity hover:opacity-70"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                Conhecer o trabalho ↓
              </a>
            </div>
          </div>

          {/* Coluna direita — foto desktop com parallax */}
          {!fotoError && (
            <div className="hidden md:block relative" style={{ height: "100vh" }}>
              {/* Película escura sobre a foto no desktop */}
              <div
                className="absolute inset-0 z-10"
                style={{
                  background: "linear-gradient(to right, #141810 0%, transparent 30%), linear-gradient(to bottom, rgba(10,12,8,0.25) 0%, rgba(10,12,8,0.45) 100%)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  transform: `translateY(${offsetY * 0.5}px)`,
                  top: "-15%",
                  bottom: "-15%",
                }}
              >
                <Image
                  src="/fotos/foto-hero.jpg"
                  alt="Ana Flávia — Nutricionista Esportiva"
                  fill
                  className="object-cover object-center"
                  priority
                  onError={() => setFotoError(true)}
                />
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Linha dourada base */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, rgba(138,122,82,0.3), transparent)",
          zIndex: 4,
        }}
      />
    </section>
  );
}
