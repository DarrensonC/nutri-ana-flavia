import Hero from "@/components/Hero";
import DorSection from "@/components/DorSection";
import SobreMim from "@/components/SobreMim";
import Servicos from "@/components/Servicos";
import ComoFunciona from "@/components/ComoFunciona";
import Entregaveis from "@/components/Entregaveis";
import Depoimentos from "@/components/Depoimentos";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const WA_NUMBER = "5541988309656";
const WA_MESSAGE = "Olá, vim pelo site e gostaria de agendar uma consulta";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

export default function Home() {
  return (
    <main>
      <Hero waLink={WA_LINK} />
      <DorSection />
      <SobreMim waLink={WA_LINK} />
      <Servicos waLink={WA_LINK} />
      <ComoFunciona waLink={WA_LINK} />
      <Entregaveis waLink={WA_LINK} />
      <Depoimentos />
      <FAQ />
      <CTAFinal waLink={WA_LINK} />
      <WhatsAppFloat waLink={WA_LINK} />
    </main>
  );
}
