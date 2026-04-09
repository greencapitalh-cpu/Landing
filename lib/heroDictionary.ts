export const heroDictionary: Record<string, any> = {
  en: {
    title: "Welcome to UDoChain",
    description:
      "Integrates blockchain infrastructure into real-world operations to ensure verifiable integrity and traceability.",
  },
  es: {
    title: "Bienvenido a UDoChain",
    description:
      "Integra infraestructura blockchain en operaciones reales para garantizar integridad y trazabilidad verificable.",
  },
  pt: {
    title: "Bem-vindo ao UDoChain",
    description:
      "Integra infraestrutura blockchain em operações do mundo real para garantir integridade e rastreabilidade verificável.",
  },
  fr: {
    title: "Bienvenue sur UDoChain",
    description:
      "Intègre une infrastructure blockchain dans des opérations réelles pour garantir une intégrité et une traçabilité vérifiables.",
  },
  it: {
    title: "Benvenuto su UDoChain",
    description:
      "Integra l'infrastruttura blockchain nelle operazioni reali per garantire integrità e tracciabilità verificabili.",
  },
  de: {
    title: "Willkommen bei UDoChain",
    description:
      "Integriert Blockchain-Infrastruktur in reale Prozesse, um überprüfbare Integrität und Rückverfolgbarkeit zu gewährleisten.",
  },
  ja: {
    title: "UDoChainへようこそ",
    description:
      "現実世界の運用にブロックチェーンインフラを統合し、検証可能な完全性とトレーサビリティを実現します。",
  },
  zh: {
    title: "欢迎使用 UDoChain",
    description:
      "将区块链基础设施集成到现实世界的操作中，以确保可验证的完整性和可追溯性。",
  },
  ar: {
    title: "مرحبًا بك في UDoChain",
    description:
      "يدمج البلوكشين في العمليات الواقعية لضمان سلامة البيانات وقابليتها للتحقق.",
  },
  ko: {
    title: "UDoChain에 오신 것을 환영합니다",
    description:
      "현실 세계의 운영에 블록체인 인프라를 통합하여 검증 가능한 무결성과 추적성을 보장합니다.",
  },
};

export const getHeroContent = (locale: string) => {
  return heroDictionary[locale] || heroDictionary["en"];
};
