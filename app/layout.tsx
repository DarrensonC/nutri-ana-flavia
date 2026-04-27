import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ana Flávia | Nutricionista Esportiva & Estética em Curitiba",
  description:
    "Planos alimentares personalizados para emagrecimento, hipertrofia e desempenho esportivo. Atendimento presencial em Curitiba e online para todo o Brasil. Agende sua consulta pelo WhatsApp.",
  openGraph: {
    title: "Ana Flávia | Nutricionista Esportiva & Estética",
    description:
      "Nutrição esportiva e estética com resultados reais. Consulta presencial em Curitiba e online.",
    images: ["/fotos/foto-hero.jpg"],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
