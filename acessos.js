/* Configuração central de acesso e ofertas da área de membros. */
window.MM_ACCESS_CONFIG = Object.freeze({
  // Mantém a Cakto intacta
  endpoint: "https://script.google.com/macros/s/AKfycbwzEjPBMiaYRzKmzgZCkTEHbj5AbWm5GxuKr0N3NBhPmsZpNLTXSKc29FXam-sPfpDSQA/exec",
  // Novo endpoint de teste da Wiapy
  wiapyEndpoint: "https://script.google.com/macros/s/AKfycbxEiLPsP--M1h0w1AkDkBMnTLf6Ux1RDZeIS8DTC4Y6lDKzsULggJ5tzinh1d0jRI9FmQ/exec",
  endpoints: [
    "https://script.google.com/macros/s/AKfycbwzEjPBMiaYRzKmzgZCkTEHbj5AbWm5GxuKr0N3NBhPmsZpNLTXSKc29FXam-sPfpDSQA/exec",
    "https://script.google.com/macros/s/AKfycbxEiLPsP--M1h0w1AkDkBMnTLf6Ux1RDZeIS8DTC4Y6lDKzsULggJ5tzinh1d0jRI9FmQ/exec"
  ],
  adminEmails: ["contato.martelinhomoney@gmail.com"],
  sessionKey: "accessSession",
  products: [
    {
      name: "Martelinho Money – Método PDR do Zero",
      id: "b3ea7878-a05e-4b5d-9d91-9b2bc5134b7a",
      aliases: ["Martelinho Money – Método PDR do Zero"],
      type: "principal",
      purchaseUrl: ""
    }
  ],
  /* Produtos exclusivos da Área VIP (upsell, downsell e order-bump) */
  offers: [
    {
      name: "Pacote de Atualizações em Português-BR",
      id: "pacote-atualizacoes-ptbr",
      aliases: ["Pacote de Atualizações em Português-BR", "Atualizações PT-BR", "Pacote Atualizações", "atualizacoes-ptbr"],
      type: "upsell",
      tag: "Mais Procurado",
      badge: "Português-BR 🇧🇷",
      desc: "Acesso prioritário e garantido a todas as novas aulas e vídeos com dublagem e adaptação em Português-BR conforme forem disponibilizados.",
      purchaseUrl: "#", // Insira o link do seu checkout de vendas aqui
      conteudo: "Seu pacote de atualizações está ativo! Assim que as novas versões com áudio em Português-BR forem finalizadas, seu acesso estará 100% liberado sem nenhum custo adicional."
    },
    {
      name: "Comunidade VIP & Acompanhamento de Casos",
      id: "comunidade-vip",
      aliases: ["Comunidade VIP & Acompanhamento de Casos", "Comunidade VIP", "Suporte VIP", "comunidade-vip"],
      type: "upsell",
      tag: "Exclusivo",
      badge: "Networking VIP 👑",
      desc: "Acesso ao grupo fechado de networking com especialistas em Martelinho de Ouro para tirar dúvidas de orçamentos e análise de peças difíceis.",
      purchaseUrl: "#",
      conteudo: "Acesso liberado! Você já é membro VIP. Toque no botão para acessar o grupo oficial de networking e suporte aos alunos."
    },
    {
      name: "Kit de Contratos e Planilhas de Orçamento",
      id: "pack-contratos",
      aliases: ["Kit de Contratos e Planilhas de Orçamento", "Pack de Contratos", "Modelos de Orçamento", "pack-contratos"],
      type: "order-bump",
      tag: "Ferramenta",
      badge: "Profissional 📄",
      desc: "Modelos editáveis de ordens de serviço, contratos de reparação automotiva e planilhas automatizadas de cálculo de lucro por peça.",
      purchaseUrl: "#",
      conteudo: "Seu kit profissional está liberado para download imediato com todos os modelos prontos para preencher e imprimir."
    }
  ]
});
