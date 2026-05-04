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
  valorTotal: "597",
  precoFinal: "397",
  parcelas: 12,
  valorParcela: "41,06",
  garantiaDias: 15,
};

export const WHATSAPP = {
  numero: "+5575999999999",
  mensagem: `Olá! Vim pela página do ${PRODUCT.name} e quero garantir minha vaga!`,
  get link() {
    return this.numero
      ? `https://wa.me/${this.numero}?text=${encodeURIComponent(this.mensagem)}`
      : "#oferta";
  },
};

export const MENTORS = {
  paullo: {
    name: "Paullo Pietroski",
    role: "Gestor de milhas e especialista em cartões de crédito.",
    roleShort: "Gestor de milhas e especialista em cartões de crédito.",
    instagram: "paullopietroski.milhas",
    instagramUrl: "https://instagram.com/paullopietroski.milhas",
    photo: "/mentors/paullo.jpg",
    initials: "PP",
  },
  isabela: {
    name: "Isabela Crozetta",
    role: "Especialista em acúmulo inteligente e emissões.",
    roleShort: "Especialista em acúmulo inteligente e emissões.",
    instagram: "isadasmilhas",
    instagramUrl: "https://instagram.com/isadasmilhas",
    photo: "/mentors/isabela.jpg",
    initials: "IC",
  },
};

export const HERO_VIDEO_AUTO_UNLOCK_SECONDS = 12 * 60;
export const OFFER_UNLOCK_SECONDS = 12 * 60;

export const HERO = {
  badge: "",
  headline: "Descubra como transformar os gastos do seu dia a dia em viagens usando o",
  headlineAccent: "Método S.I.M.",
  headlineSuffix: ", que já economizou mais de R$ 400.000 para nossos alunos.",
  intro: "",
  subheadline: "",
  outro:
    "O Milhas na Prática é o atalho pra você sair do zero e embarcar usando milhas nas viagens dos seus sonhos.",
  cta: "QUERO GARANTIR MINHA VAGA",
  logos: [],
};

export const PAIN = {
  title: "VOCÊ JÁ PASSOU POR ISSO?",
  cards: [
    {
      icon: "CreditCard",
      title: "Dinheiro escorrendo pelo ralo?",
      text: "Você pesquisa em vários sites, entra na CVC, Decolar, Google Voos… e sempre sente que está pagando caro, mas compra assim mesmo.",
    },
    {
      icon: "Plane",
      title: "Passagens inacessíveis?",
      text: "Você pesquisa, compara e acha que viajar de avião é privilégio de quem ganha muito. Spoiler: não é.",
    },
    {
      icon: "MapPin",
      title: "Mundo lá fora, você aqui?",
      text: "Você vê gente com a mesma renda viajando pra fora todo ano e se pergunta 'como?' e continua adiando a viagem dos seus sonhos.",
    },
  ],
  transition:
    "O que separa você dessas pessoas não é dinheiro. É o método.",
};

export const MENTORS_REVEAL = {
  title: "Milhas na Prática, um passo a passo para",
  titleAccent: "conhecer o mundo",
  text: `O Milhas na Prática traz um Método exclusivo, criado por Isabela Crozetta e Paullo Pietroski, e já proporcionou aos alunos viagens para os mais diversos destinos, nos Estados Unidos, Europa, Ásia, América do Sul e outros, somando mais de R$ 400.000 de economia em passagens. Com o método, você sabe o que fazer e em qual ordem. Cada aula termina com tarefas específicas: ações claras, aplicáveis, já pensadas pro seu próximo passo, pra você não se perder em um mar de teoria.\n\nMais do que aprender sobre milhas, você tem um passo a passo guiado pra a usar milhas de forma estratégica, até as suas viagens deixarem de ser um evento e se transformarem em rotina.`,
  stats: [] as Array<{ number: number; prefix: string; suffix: string; label: string }>,
};

export const MODULES = {
  title: "O MAPA DO TESOURO",
  subtitle:
    "6 módulos que vão te levar do zero ao embarque. Cada um foi desenhado pra você aplicar na prática — sem enrolação.",
  items: [
    {
      icon: "Compass",
      title: "CONCEITOS BÁSICOS",
      text: "Aqui é onde você vai começar a destravar no mundo das milhas e construir a sua base, pra você que está saindo do zero não ficar perdido.",
    },
    {
      icon: "Coins",
      title: "ACÚMULO INTELIGENTE",
      text: "Todas as formas práticas de acumular milhas no dia a dia, sem gastar mais do que você já gasta hoje — a base que sustenta todo o resto.",
    },
    {
      icon: "ArrowLeftRight",
      title: "TRANSFERÊNCIAS, CLUBES E PROMOÇÕES",
      text: "O segredo dos milheiros baratos. A dinâmica das transferências bonificadas e dos clubes de milhas pra adquirir milhas a baixo custo e de forma estratégica.",
    },
    {
      icon: "Calculator",
      title: "MATEMÁTICA DAS MILHAS",
      text: "Pare de adivinhar e passe a analisar, em números, quando uma emissão ou compra de milhas vale a pena, se é melhor acumular pontos ou receber cashback, e se vale a pena trocar seus pontos por produtos.",
    },
    {
      icon: "CreditCard",
      title: "CARTÕES DE CRÉDITO A SEU FAVOR",
      text: "Estratégia certeira pro seu perfil e pro seu bolso. Como escolher e usar cartões que trabalham pra você, mesmo que hoje você só tenha um cartão básico.",
    },
    {
      icon: "Plane",
      title: "EMISSÕES",
      text: "A arte de encontrar disponibilidade, escolher rotas inteligentes e emitir passagens promocionais no Brasil e no mundo, usando as ferramentas certas.",
    },
  ],
  bonus: {
    icon: "Gift",
    label: "BÔNUS EXCLUSIVO",
    title: "ALÉM DA PASSAGEM",
    text: "Aprendendo a usar ferramentas pra deixar a viagem mais barata, confortável e inteligente. Entenda seus direitos como passageiro, tenha acesso a aceleradores de cálculo e pesquisa e aprenda a economizar com hospedagens usando suas milhas.",
  },
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
      type: "video" as const,
      vturbId: "69f50601df5136d078c80f88",
      name: "Fabiane",
      localidade: "Orlando, EUA",
    },
    {
      type: "video" as const,
      vturbId: "69f50609e14d8c41e4c4ca88",
      name: "Thiza",
      localidade: "",
    },
    {
      type: "video" as const,
      vturbId: "69f5063c6b4ac768f9516230",
      name: "Mentorado",
      localidade: "",
    },
    {
      type: "video" as const,
      vturbId: "69f506186b4ac768f95161b8",
      name: "Fabiane",
      localidade: "",
    },
    {
      type: "video" as const,
      vturbId: "69f50661f47680e2e148e3fa",
      name: "Mentorado",
      localidade: "",
    },
    {
      type: "video" as const,
      vturbId: "69f506736b4ac768f951635f",
      name: "Mentorado",
      localidade: "",
    },
  ],
};

export const SOCIAL_PROOF_PRINTS = [
  { src: "/testimonials/prints/print-09.jpeg", alt: "Depoimento cliente" },
  { src: "/testimonials/prints/print-10.jpeg", alt: "Depoimento cliente" },
  { src: "/testimonials/prints/print-11.jpeg", alt: "Depoimento cliente" },
  { src: "/testimonials/prints/print-12.jpg", alt: "Feedback Instagram" },
  { src: "/testimonials/prints/print-13.jpg", alt: "Feedback Instagram" },
  { src: "/testimonials/prints/print-14.jpg", alt: "Feedback Instagram" },
  { src: "/testimonials/prints/print-15.jpeg", alt: "Depoimento cliente" },
  { src: "/testimonials/prints/print-17.png", alt: "Fabiane em Orlando" },
  { src: "/testimonials/prints/print-18.jpeg", alt: "Depoimento cliente" },
  { src: "/testimonials/prints/print-20.png", alt: "Thiza em Santiago" },
  { src: "/testimonials/prints/print-21.jpg", alt: "Foto cliente" },
  { src: "/testimonials/prints/print-22.jpg", alt: "Fabi e Rodrigo em Paris" },
  { src: "/testimonials/prints/print-24.jpg", alt: "Fabi e Rodrigo na executiva" },
  { src: "/testimonials/prints/print-25.jpg", alt: "Bia e Gi no Cristo Redentor" },
  { src: "/testimonials/prints/print-26.jpg", alt: "Rodrigo e Richard em Beverly Hills" },
  { src: "/testimonials/prints/print-27.jpg", alt: "Fabi em Londres" },
];

export const OFFER = {
  badge: "✦ OFERTA ESPECIAL DE LANÇAMENTO ✦",
  title: `A JORNADA ${PRODUCT.name.toUpperCase()}`,
  items: [
    { icon: "BookOpen", text: "6 módulos completos" },
    { icon: "MessageCircle", text: "Comunidade exclusiva no WhatsApp" },
    { icon: "FileSpreadsheet", text: "Mapa Mental de Emissões com milhas" },
    { icon: "Sparkles", text: "Bônus Exclusivos" },
    { icon: "Headphones", text: "Suporte Direto com Mentores" },
    { icon: "RefreshCw", text: "Atualizações Contínuas" },
  ],
  cta: "QUERO GARANTIR MINHA VAGA",
};

export const GUARANTEE = {
  title: "GARANTIA ESTENDIDA DE 15 DIAS",
  text: "Use o conteúdo por 15 dias, aplique o que conseguir nesse período. Se achar que o mundo das milhas não é pra você, devolvemos 100% do valor pago.\n\nSem perguntas. Sem burocracia. O risco é 100% nosso. (Mas a gente acha que milhas são pra você!)",
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
      "Sim. Dentro do curso você aprende como usar as companhias aéreas e parcerias pra diversas rotas internacionais, usando milhas de várias companhias aéreas.",
  },
  {
    question: "E se eu não entender nada de milhas?",
    answer:
      "Perfeito. A mentoria foi desenhada exatamente pra quem está começando do zero. Cada módulo constrói em cima do anterior, sem pular etapas.",
  },
];

export const FINAL_CTA = {
  title: "NÃO PERCA ESSA OPORTUNIDADE",
  subtitle:
    "AS VAGAS ESTÃO ACABANDO. O PRÓXIMO VOO EM EXECUTIVA PODE SER O SEU.",
  cta: "QUERO GARANTIR MINHA VAGA",
};

export const FOOTER = {
  links: [],
  copyright: `© 2026 ${PRODUCT.name}. Paullo Pietroski & Isabela Crozetta. Todos os direitos reservados.`,
  disclaimer:
    "Este produto não garante resultados. Resultados variam conforme dedicação individual.",
};
