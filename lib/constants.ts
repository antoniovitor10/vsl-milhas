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
    role: "Especialista em estratégias de milhas aéreas e emissão de passagens internacionais",
    roleShort: "Especialista em milhas aéreas",
    instagram: "paullopietroski.milhas",
    instagramUrl: "https://instagram.com/paullopietroski.milhas",
    photo: "/mentors/paullo.jpg",
    initials: "PP",
  },
  isabela: {
    name: "Isabela Crozetta",
    role: "Especialista em gestão de milhas, acúmulo inteligente e viagens internacionais",
    roleShort: "Gestora de milhas e viagens",
    instagram: "isadasmilhas",
    instagramUrl: "https://instagram.com/isadasmilhas",
    photo: "/mentors/isabela.jpg",
    initials: "IC",
  },
};

// Vídeos hospedados na R2 (Cloudflare)
const R2_BASE = "https://pub-e56ffdd6bdf7488fa40810b0c7b6601a.r2.dev";

export const HERO_VIDEO_URL = `${R2_BASE}/Vsl%201.mp4`;
export const HERO_VIDEO_AUTO_UNLOCK_SECONDS = 30;
export const OFFER_UNLOCK_SECONDS = 30;

export const HERO = {
  badge: "",
  headline: "Descubra como viajar mais gastando o mesmo ou menos. Aprenda agora a transformar os",
  headlineAccent: "gastos que você já tem hoje",
  headlineSuffix: "em viagens.",
  subheadline: "O Milha na Prática apresenta o Método SIM é o seu passaporte para as viagens do sonho.",
  cta: "QUERO GARANTIR MINHA VAGA",
  logos: [],
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
      text: "Você pesquisa em vários sites, entra na 123, Decolar, Google Voos e no final compra passagem caro do mesmo jeito.",
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
  title: "Milhas na Prática, um passo a passo para",
  titleAccent: "Liberdade",
  text: `Não é um curso comum, é um mapa, um passo a passo que você vai aplicar. Paullo Pietroski e Isabela Crozetta uniram anos de experiência no mercado de milhas e criaram o MÉTODO SIM que já ajudou dezenas de mentorados a viajar o mundo gastando uma fração do valor.\n\nNão é sobre acumular milhas. É sobre construir um estilo de vida diferente.`,
  stats: [] as Array<{ number: number; prefix: string; suffix: string; label: string }>,
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
      type: "video" as const,
      videoUrl: `${R2_BASE}/Video%20Fabi%20Feedback.mp4`,
      name: "Fabi",
      localidade: "",
    },
    {
      type: "video" as const,
      videoUrl: `${R2_BASE}/Video%20Fabiane%20Em%20Orlando.mp4`,
      name: "Fabiane",
      localidade: "Orlando, EUA",
    },
    {
      type: "video" as const,
      videoUrl: `${R2_BASE}/Video%20Thiza%20Feedback.mp4`,
      name: "Thiza",
      localidade: "",
    },
    {
      type: "video" as const,
      videoUrl: `${R2_BASE}/Whatsapp%20Video%202026-03-18%20At%2011.13.39.mp4`,
      name: "Mentorado",
      localidade: "",
    },
    {
      type: "video" as const,
      videoUrl: `${R2_BASE}/Whatsapp%20Video%202026-03-20%20At%2016.30.11.mp4`,
      name: "Mentorado",
      localidade: "",
    },
    {
      type: "video" as const,
      videoUrl: `${R2_BASE}/Vid-20251115-Wa0005.mp4`,
      name: "Mentorado",
      localidade: "",
    },
    {
      type: "video" as const,
      videoUrl: `${R2_BASE}/Video%20Fabiane%20Em%20Orlando.mp4`,
      name: "Fabiane",
      localidade: "Orlando, EUA",
    },
    {
      type: "video" as const,
      videoUrl: `${R2_BASE}/Video%20Thiza%20Feedback.mp4`,
      name: "Thiza",
      localidade: "",
    },
    {
      type: "video" as const,
      videoUrl: `${R2_BASE}/Whatsapp%20Video%202026-03-18%20At%2011.13.39.mp4`,
      name: "Mentorado",
      localidade: "",
    },
    {
      type: "video" as const,
      videoUrl: `${R2_BASE}/Whatsapp%20Video%202026-03-20%20At%2016.30.11.mp4`,
      name: "Mentorado",
      localidade: "",
    },
    {
      type: "video" as const,
      videoUrl: `${R2_BASE}/Vid-20251115-Wa0005.mp4`,
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
    { icon: "BookOpen", text: "6 Módulos Completos" },
    { icon: "MessageCircle", text: "Comunidade VIP no WhatsApp" },
    { icon: "FileSpreadsheet", text: "Planilha de Gestão Premium" },
    { icon: "Sparkles", text: "Bônus: Trilhas Exclusivas" },
    { icon: "Headphones", text: "Suporte Direto com Mentores" },
    { icon: "RefreshCw", text: "Atualizações Contínuas" },
  ],
  cta: "QUERO GARANTIR MINHA VAGA",
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
