import type { CampaignSlug, Locale } from "./landingContent";

export const campaignContent = {
  validate: {
    image: "/images/udochain-visual-system.png",
    en: {
      eyebrow: "Evidence validation campaign",
      title: "Validate your first digital evidence in minutes.",
      description:
        "Start with 50 free credits, register metadata for 1 credit, and use Aereware binary custody only when the case needs stronger file preservation.",
      primary: "Start with 50 free credits",
      secondary: "See how validation works",
      bullets: ["Metadata-only validation costs 1 credit", "Blockchain hash anchoring", "Public verification page"],
    },
    es: {
      eyebrow: "Campana de validacion de evidencia",
      title: "Valida tu primera evidencia digital en minutos.",
      description:
        "Empieza con 50 creditos gratis, registra metadata por 1 credito y usa custodia binaria Aereware solo cuando el caso requiera preservar archivos.",
      primary: "Activar 50 creditos gratis",
      secondary: "Ver como funciona",
      bullets: ["Validacion metadata-only por 1 credito", "Anclaje de hash en blockchain", "Pagina publica de verificacion"],
    },
    pt: {
      eyebrow: "Campanha de validacao de evidencia",
      title: "Valide sua primeira evidencia digital em minutos.",
      description:
        "Comece com 50 creditos gratis, registre metadados por 1 credito e use custodia binaria Aereware apenas quando o caso exigir preservacao de arquivos.",
      primary: "Ativar 50 creditos gratis",
      secondary: "Ver como funciona",
      bullets: ["Validacao metadata-only por 1 credito", "Ancoragem de hash em blockchain", "Pagina publica de verificacao"],
    },
  },
  "smart-contracts": {
    image: "/images/udochain-mockup-board.png",
    en: {
      eyebrow: "Smart contracts campaign",
      title: "Make agreements and approvals move faster with verifiable execution.",
      description:
        "Coordinate milestones, obligations, approvals and administrative workflows with a cleaner audit trail.",
      primary: "Start smart contract workspace",
      secondary: "Request demo",
      bullets: ["Milestone-based agreements", "Traceable approvals", "Administrative automation"],
    },
    es: {
      eyebrow: "Campana de smart contracts",
      title: "Agiliza acuerdos y aprobaciones con ejecucion verificable.",
      description:
        "Coordina hitos, obligaciones, aprobaciones y procesos administrativos con una auditoria mas clara.",
      primary: "Crear espacio de smart contracts",
      secondary: "Solicitar demo",
      bullets: ["Acuerdos por hitos", "Aprobaciones trazables", "Automatizacion administrativa"],
    },
    pt: {
      eyebrow: "Campanha de smart contracts",
      title: "Acelere acordos e aprovacoes com execucao verificavel.",
      description:
        "Coordene marcos, obrigacoes, aprovacoes e processos administrativos com uma trilha de auditoria mais clara.",
      primary: "Criar workspace de smart contracts",
      secondary: "Solicitar demo",
      bullets: ["Acordos por marcos", "Aprovacoes rastreaveis", "Automacao administrativa"],
    },
  },
  "digital-assets": {
    image: "/images/udochain-asset-kit.png",
    en: {
      eyebrow: "Digital assets campaign",
      title: "Turn real-world assets into verifiable digital certificates.",
      description:
        "Use NFT-style certificates for carbon credits, real estate, agriculture, livestock and industrial assets with evidence-backed traceability.",
      primary: "Request digital asset demo",
      secondary: "Start workspace",
      bullets: ["Carbon credit certificates", "Real estate asset records", "Agro-industrial traceability"],
    },
    es: {
      eyebrow: "Campana de activos digitales",
      title: "Convierte activos reales en certificados digitales verificables.",
      description:
        "Usa certificados tipo NFT para bonos de carbono, inmuebles, agro, ganaderia e industria con trazabilidad respaldada por evidencia.",
      primary: "Solicitar demo de activos",
      secondary: "Crear espacio",
      bullets: ["Certificados de bonos de carbono", "Registros de activos inmobiliarios", "Trazabilidad agroindustrial"],
    },
    pt: {
      eyebrow: "Campanha de ativos digitais",
      title: "Transforme ativos reais em certificados digitais verificaveis.",
      description:
        "Use certificados tipo NFT para creditos de carbono, imoveis, agro, pecuaria e industria com rastreabilidade baseada em evidencias.",
      primary: "Solicitar demo de ativos",
      secondary: "Criar workspace",
      bullets: ["Certificados de creditos de carbono", "Registros de ativos imobiliarios", "Rastreabilidade agroindustrial"],
    },
  },
} satisfies Record<
  CampaignSlug,
  { image: string } & Record<
    Locale,
    { eyebrow: string; title: string; description: string; primary: string; secondary: string; bullets: string[] }
  >
>;
