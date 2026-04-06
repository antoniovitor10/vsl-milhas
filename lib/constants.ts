export const PRODUCT = {
  name: "Rota das Milhas",
  // Alternativas: "Decolar", "Primeira Classe", "Milhas sem Segredo", "Passaporte Milhas"
  tagline: "O método completo para dominar o mundo das milhas",
  turma: "01",
  vagasRestantes: 30,
};

export const SITE = {
  title: `${PRODUCT.name} — Paullo Pietroski & Isabela Crozetta`,
  description:
    "Descubra como viajar o mundo gastando até 90% menos usando milhas aéreas. Método que já economizou +R$400 mil em passagens.",
  url: "https://PLACEHOLDER_DOMINIO",
};

export const PRICING = {
  valorTotal: "2.497",
  precoFinal: "497",
  parcelas: 12,
  valorParcela: "49,80",
  garantiaDias: 7,
};

export const WHATSAPP = {
  numero: "55XXXXXXXXXXX",
  mensagem: `Olá! Vim pela página do ${PRODUCT.name} e quero garantir minha vaga!`,
  get link() {
    return `https://wa.me/${this.numero}?text=${encodeURIComponent(this.mensagem)}`;
  },
};

export const MENTORS = {
  paullo: {
    name: "Paullo Pietroski",
    role: "Especialista em estratégias de milhas aéreas e emissão de passagens internacionais",
    roleShort: "Especialista em milhas aéreas",
    instagram: "paullopietroski.milhas",
    instagramUrl: "https://instagram.com/paullopietroski.milhas",
    photo: "/mentors/paullo.webp",
    initials: "PP",
  },
  isabela: {
    name: "Isabela Crozetta",
    role: "Especialista em gestão de milhas, acúmulo inteligente e viagens internacionais",
    roleShort: "Gestora de milhas e viagens",
    instagram: "isadasmilhas",
    instagramUrl: "https://instagram.com/isadasmilhas",
    photo: "/mentors/isabela.webp",
    initials: "IC",
  },
};

export const HERO = {
  badge: "🔥 AS VAGAS ESTÃO ACABANDO. TURMA 01 COM DESCONTO ESPECIAL.",
  headline: "DESCUBRA COMO VIAJAR O MUNDO GASTANDO",
  headlineAccent: "ATÉ 90% MENOS",
  headlineSuffix: "USANDO MILHAS AÉREAS",
  subheadline: `O método ${PRODUCT.name} é o seu passaporte para a primeira classe. Aprenda a transformar gastos cotidianos em experiências extraordinárias.`,
  cta: "QUERO APRENDER AGORA",
  logos: ["SMILES", "LATAM PASS", "AZUL", "TAP", "AMEX"],
  videoUrl: "", // PLACEHOLDER — trocar pelo embed real
};

export const PAIN = {
  title: "VOCÊ JÁ SE SENTIU ASSIM?",
  cards: [
    {
      icon: "Plane",
      title: "Passagens inacessíveis?",
      text: "Você pesquisa, compara e acha que viajar de avião é privilégio de quem ganha muito. Spoiler: não é.",
    },
    {
      icon: "CreditCard",
      title: "Dinheiro escorrendo pelo ralo?",
      text: "Paga anuidade, acumula pontos e no final troca por uma torradeira. Seus pontos valem MUITO mais.",
    },
    {
      icon: "MapPin",
      title: "Mundo lá fora, você aqui?",
      text: 'Vê stories de gente viajando, se pergunta "como?" e continua adiando a viagem dos sonhos.',
    },
  ],
  transition:
    "A verdade é que o que separa você dessas pessoas não é dinheiro. É informação.",
};

export const MENTORS_REVEAL = {
  title: "A MENTORIA QUE VAI",
  titleAccent: "REDEFINIR SUA LIBERDADE",
  text: `Paullo Pietroski e Isabela Crozetta uniram anos de experiência no mercado de milhas e criaram o método que já ajudou centenas de mentorados a viajar o mundo gastando uma fração do valor.\n\nNão é sobre acumular milhas. É sobre construir um estilo de vida diferente.`,
  stats: [
    { number: 5000, prefix: "+", suffix: "", label: "mentorados impactados" },
    {
      number: 90,
      prefix: "",
      suffix: "%",
      label: "de economia média em passagens",
    },
  ],
};

export const MODULES = {
  title: "O MAPA DO TESOURO",
  subtitle:
    "6 módulos que vão te levar do zero ao embarque. Cada um foi desenhado pra você aplicar na prática — sem enrolação.",
  items: [
    {
      icon: "Compass",
      title: "FUNDAMENTOS",
      text: "O jogo das milhas explicado do jeito que ninguém te contou. Programas, pontos, transferências — a base que sustenta todo o resto.",
    },
    {
      icon: "CreditCard",
      title: "CARTÕES PREMIUM",
      text: "Qual cartão pedir, como isentar anuidade, quando migrar. Estratégia certeira pro seu perfil e pro seu bolso.",
    },
    {
      icon: "Target",
      title: "EMISSÃO ESTRATÉGICA",
      text: "A arte de encontrar disponibilidade, escolher rotas inteligentes e emitir passagens que custam uma fração do preço normal.",
    },
    {
      icon: "ArrowLeftRight",
      title: "TRANSFERÊNCIAS",
      text: "O segredo dos milheiros baratos. Promoções bonificadas, timing certo, qual programa priorizar em cada momento.",
    },
    {
      icon: "Globe",
      title: "PROGRAMAS INTERNACIONAIS",
      text: "Ibéria, American Airlines, TAP, United... Destrave rotas que a maioria nem sabe que existem.",
    },
    {
      icon: "Gem",
      title: "LIFESTYLE & LOUNGES",
      text: "Salas VIP, upgrades, hotéis com pontos, experiências que transformam qualquer viagem numa memória inesquecível.",
    },
  ],
};

export const SOCIAL_PROOF = {
  counter: {
    value: 400000,
    prefix: "+R$ ",
    suffix: "",
    label: "ECONOMIZADOS PELOS NOSSOS MENTORADOS ATÉ HOJE.",
  },
  title: "Veja o que os nossos mentorados conquistaram",
  testimonials: [
    {
      stars: 5,
      text: "Em 2 meses de curso, consegui emitir minha primeira passagem internacional. Economizei quase R$4.000 numa viagem que eu achava impossível.",
      name: "PLACEHOLDER_NOME_1",
      photo: "/testimonials/1.webp",
    },
    {
      stars: 5,
      text: "O segredo do Paullo e da Isa é fazer parecer simples. Eu não sabia nada e hoje gerencio mais de 300 mil milhas em 3 programas diferentes.",
      name: "PLACEHOLDER_NOME_2",
      photo: "/testimonials/2.webp",
    },
    {
      stars: 5,
      text: "A mentoria vale 50x o que paguei. Já economizei mais de R$12 mil usando as estratégias que aprendi. E o melhor: ensinei minha família inteira.",
      name: "PLACEHOLDER_NOME_3",
      photo: "/testimonials/3.webp",
    },
  ],
};

export const OFFER = {
  badge: "✦ OFERTA ESPECIAL DE LANÇAMENTO ✦",
  title: `A JORNADA ${PRODUCT.name.toUpperCase()}`,
  items: [
    { icon: "BookOpen", text: "6 Módulos Completos" },
    { icon: "MessageCircle", text: "Comunidade VIP no WhatsApp" },
    { icon: "FileSpreadsheet", text: "Planilha de Gestão Premium" },
    { icon: "Sparkles", text: "Bônus: Trilhas Exclusivas" },
    { icon: "Headphones", text: "Suporte Direto com Mentores" },
    { icon: "RefreshCw", text: "Atualizações Contínuas" },
  ],
  cta: "QUERO MEU ACESSO AGORA",
};

export const GUARANTEE = {
  title: "GARANTIA BLINDADA DE 7 DIAS",
  text: "Você tem 7 dias para testar todo o conteúdo da mentoria. Se por qualquer motivo sentir que não é pra você, basta nos enviar uma mensagem e devolvemos 100% do seu investimento.\n\nSem perguntas. Sem burocracia. O risco é 100% nosso.",
};

export const FAQ_ITEMS = [
  {
    question: "Preciso ter muito dinheiro pra começar?",
    answer:
      "Não. As estratégias funcionam independente da sua renda atual. Muitos mentorados começaram acumulando milhas apenas com os gastos que já tinham no dia a dia — sem gastar nada a mais. O método se adapta ao seu perfil.",
  },
  {
    question: "Em quanto tempo vou conseguir minha primeira passagem?",
    answer:
      "Depende do seu perfil de gastos, mas a média dos nossos mentorados é de 60 a 90 dias para a primeira emissão. Alguns conseguiram em menos de 30 dias.",
  },
  {
    question: "Funciona pra viagens internacionais?",
    answer:
      "Sim — e é justamente nas internacionais que a economia é mais absurda. Temos módulo exclusivo sobre programas internacionais e rotas que a maioria desconhece.",
  },
  {
    question: "E se eu não entender nada de milhas?",
    answer:
      "Perfeito. A mentoria foi desenhada exatamente pra quem está começando do zero. Cada módulo constrói em cima do anterior, sem pular etapas.",
  },
  {
    question: "Tenho acesso por quanto tempo?",
    answer: "PLACEHOLDER — definir com cliente: 1 ano? Vitalício?",
  },
];

export const FINAL_CTA = {
  title: "NÃO PERCA ESSA OPORTUNIDADE",
  subtitle:
    "AS VAGAS ESTÃO ACABANDO. O PRÓXIMO VOO EM EXECUTIVA PODE SER O SEU.",
  cta: "GARANTIR MINHA VAGA AGORA",
};

export const FOOTER = {
  links: ["PAGAMENTO", "INÍCIO", "GARANTIA", "CONTATO", "FAQ"],
  copyright: `© 2026 ${PRODUCT.name}. Paullo Pietroski & Isabela Crozetta. Todos os direitos reservados.`,
  disclaimer:
    "Este produto não garante resultados. Resultados variam conforme dedicação individual.",
};
