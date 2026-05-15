export type Locale = "en" | "es" | "pt";
export type CampaignSlug = "validate" | "smart-contracts" | "digital-assets";

export const supportedLocales: Locale[] = ["en", "es", "pt"];

export const ui = {
  en: {
    start: "Start with UDoChain",
    login: "Login",
    explore: "Explore modules",
    google: "Continue with Google",
    facebook: "Continue with Facebook",
    demo: "Request demo",
    workspace: "Start workspace",
  },
  es: {
    start: "Empezar con UDoChain",
    login: "Ingresar",
    explore: "Ver modulos",
    google: "Continuar con Google",
    facebook: "Continuar con Facebook",
    demo: "Solicitar demo",
    workspace: "Crear espacio",
  },
  pt: {
    start: "Comecar com UDoChain",
    login: "Entrar",
    explore: "Ver modulos",
    google: "Continuar com Google",
    facebook: "Continuar com Facebook",
    demo: "Solicitar demo",
    workspace: "Criar workspace",
  },
} satisfies Record<Locale, Record<string, string>>;

export const homeContent = {
  en: {
    eyebrow: "Legaltech infrastructure for real-world trust",
    title: "Verifiable evidence, contracts and digital assets for serious operations.",
    description:
      "UDoChain helps teams validate evidence, automate agreements and represent real-world assets with cryptographic proof, public verification and traceable digital records.",
    modulesTitle: "Built around three core modules",
    casesTitle: "Applicable where real-world proof matters",
    finalTitle: "Start with verifiable trust, then expand into automation and assets.",
    finalText:
      "UDoChain grows from a first evidence validation into trust infrastructure for companies, legal teams and asset projects.",
  },
  es: {
    eyebrow: "Infraestructura legaltech para confianza real",
    title: "Evidencias, contratos y activos digitales verificables para operaciones serias.",
    description:
      "UDoChain ayuda a validar evidencia, automatizar acuerdos y representar activos reales con prueba criptografica, verificacion publica y registros trazables.",
    modulesTitle: "Construido sobre tres modulos principales",
    casesTitle: "Aplicable donde la prueba real importa",
    finalTitle: "Empieza con confianza verificable y expande hacia automatizacion y activos.",
    finalText:
      "UDoChain crece desde una primera validacion hasta una infraestructura de confianza para empresas, equipos legales y proyectos de activos.",
  },
  pt: {
    eyebrow: "Infraestrutura legaltech para confianca real",
    title: "Evidencias, contratos e ativos digitais verificaveis para operacoes serias.",
    description:
      "UDoChain ajuda equipes a validar evidencias, automatizar acordos e representar ativos reais com prova criptografica, verificacao publica e registros rastreaveis.",
    modulesTitle: "Construido em tres modulos principais",
    casesTitle: "Aplicavel onde a prova real importa",
    finalTitle: "Comece com confianca verificavel e avance para automacao e ativos.",
    finalText:
      "UDoChain evolui de uma primeira validacao para infraestrutura de confianca para empresas, equipes juridicas e projetos de ativos.",
  },
} satisfies Record<Locale, Record<string, string>>;

export const cases = {
  en: [
    "Legal evidence for courts, claims and investigations",
    "Industrial traceability for production, QA and audits",
    "Agriculture and livestock origin certification",
    "Carbon credit evidence and lifecycle records",
    "Real estate certificates and asset-backed documents",
    "Administrative workflows with verifiable approvals",
  ],
  es: [
    "Evidencia legal para juzgados, reclamos e investigaciones",
    "Trazabilidad industrial para produccion, calidad y auditorias",
    "Certificacion de origen agricola y ganadera",
    "Evidencia y ciclo de vida para bonos de carbono",
    "Certificados inmobiliarios y documentos respaldados por activos",
    "Flujos administrativos con aprobaciones verificables",
  ],
  pt: [
    "Evidencia legal para tribunais, disputas e investigacoes",
    "Rastreabilidade industrial para producao, qualidade e auditorias",
    "Certificacao de origem agricola e pecuaria",
    "Evidencia e ciclo de vida para creditos de carbono",
    "Certificados imobiliarios e documentos lastreados em ativos",
    "Fluxos administrativos com aprovacoes verificaveis",
  ],
} satisfies Record<Locale, string[]>;

export const modules = {
  en: [
    {
      slug: "validate",
      title: "Validate",
      kicker: "Evidence and metadata proof",
      text: "Register digital evidence, preserve metadata, anchor hashes and share public verification pages.",
      cta: "Validate evidence",
    },
    {
      slug: "smart-contracts",
      title: "Smart Contracts",
      kicker: "Administrative agility",
      text: "Automate milestones, approvals, commitments and operational agreements with traceable execution.",
      cta: "Automate contracts",
    },
    {
      slug: "digital-assets",
      title: "Digital Assets / NFT",
      kicker: "Real-world certificates",
      text: "Represent carbon credits, real estate, production certificates and asset rights as verifiable digital certificates.",
      cta: "Tokenize assets",
    },
  ],
  es: [
    {
      slug: "validate",
      title: "Validate",
      kicker: "Prueba de evidencia y metadata",
      text: "Registra evidencia digital, preserva metadata, ancla hashes y comparte paginas publicas de verificacion.",
      cta: "Validar evidencia",
    },
    {
      slug: "smart-contracts",
      title: "Smart Contracts",
      kicker: "Agilidad administrativa",
      text: "Automatiza hitos, aprobaciones, compromisos y acuerdos operativos con ejecucion trazable.",
      cta: "Automatizar contratos",
    },
    {
      slug: "digital-assets",
      title: "Digital Assets / NFT",
      kicker: "Certificados de activos reales",
      text: "Representa bonos de carbono, inmuebles, certificados productivos y derechos sobre activos como certificados digitales verificables.",
      cta: "Tokenizar activos",
    },
  ],
  pt: [
    {
      slug: "validate",
      title: "Validate",
      kicker: "Prova de evidencia e metadados",
      text: "Registre evidencias digitais, preserve metadados, ancore hashes e compartilhe paginas publicas de verificacao.",
      cta: "Validar evidencia",
    },
    {
      slug: "smart-contracts",
      title: "Smart Contracts",
      kicker: "Agilidade administrativa",
      text: "Automatize marcos, aprovacoes, compromissos e acordos operacionais com execucao rastreavel.",
      cta: "Automatizar contratos",
    },
    {
      slug: "digital-assets",
      title: "Digital Assets / NFT",
      kicker: "Certificados de ativos reais",
      text: "Represente creditos de carbono, imoveis, certificados produtivos e direitos de ativos como certificados digitais verificaveis.",
      cta: "Tokenizar ativos",
    },
  ],
} satisfies Record<Locale, Array<{ slug: CampaignSlug; title: string; kicker: string; text: string; cta: string }>>;

export function normalizeLocale(locale: string): Locale {
  return supportedLocales.includes(locale as Locale) ? (locale as Locale) : "en";
}

export function authUrl(provider: "google" | "facebook", locale: Locale, campaign: CampaignSlug) {
  const params = new URLSearchParams({
    trial: "campaign50",
    source: "ads",
    lang: locale,
    campaign,
  });

  return `https://api.udochain.com/api/auth/${provider}?${params.toString()}`;
}
