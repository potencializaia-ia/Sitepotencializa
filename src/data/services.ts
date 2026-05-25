export const services = [
  {
    //Seção - Header
    title: "Imersão Potencializa",
    slug: "consultoria-ia",
    badge: "Bem-Vindo a Imersão Potencializa",
    subtitle: "A Imersão Potencializa ajuda sua empresa a sair do improviso operacional. Em aproximadamente 1 mês, analisamos processos, organizamos prioridades e treinamos sua equipe para construir uma rotina mais eficiente, previsível e menos dependente da presença constante dos líderes.",
    // A descrição não aparece também
    description:
      "A Imersão Potencializa ajuda sua empresa a sair do improviso operacional. Em aproximadamente 1 mês, analisamos processos, organizamos prioridades e treinamos sua equipe para construir uma rotina mais eficiente, previsível e menos dependente da presença constante dos líderes.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=700&fit=crop",

    messageUser: "Quero entender como a IA pode ajudar meu negócio.",
    messageBot: "Ótimo! Vamos fazer um diagnóstico completo e montar um plano sob medida para você.",

    cta: "Diagnóstico inicial gratuíto",
    ctaHref: "/#contato",
    // Essa parte não existe no site
    benefits: [
      "Diagnóstico real do seu negócio",
      "Priorização dos pontos de maior impacto",
      "Plano de implementação personalizado",
      "Decisões baseadas em dados, não em achismo",
    ],
    // Essa parte também não existe no site
    features: [
      "Mapeamento de processos e gargalos",
      "Análise de canais e fluxos de atendimento",
      "Identificação de oportunidades de automação",
      "Entrega de roadmap com próximos passos",
    ],

     // ── Seção "Diagnóstico de Perdas" ──
    problemas: {
      badge: "Porque seu faturmento não cresce",
      title: "O custo invisível da",
      titleHighlight: "infeniciência operacional.",
      intro:
        "Você já se pergunto aonde sua empresa perde todos os dias e você não percebeu?",
      cards: [
        { tag: "Tecnologia Desconectada", title: "Tecnologia sem estratégia", desc: "Ferramentas novas entram na empresa, mas não se conectam com a rotina real do time. Em vez de simplificar o trabalho, viram mais uma camada de complexidade." },
        { tag: "Rotina sem Fluxo", title: "Falta de processos", desc: "Atividades importantes acontecem de forma solta, sem fluxo definido, registro claro ou sequência bem estabelecida. Isso torna a rotina mais lenta, confusa e difícil de acompanhar." },
        { tag: "Talento Desperdiçado", title: "Equipe sem direcionamento", desc: "Colaboradores competentes acabam gastando energia no lugar errado. Sem orientação prática, o time se ocupa com demandas operacionais enquanto oportunidades mais estratégicas ficam em segundo plano." },
        { tag: "Falta de Clareza", title: "Decisões no achismo", desc: "A liderança sabe que precisa melhorar a operação, mas não tem clareza sobre onde agir primeiro. Sem uma visão organizada, decisões importantes acabam sendo tomadas por urgência, impressão ou tentativa e erro." },
        { tag: "Inconsistência Operacional", title: "Falta de padronização", desc: "A mesma tarefa muda de pessoa para pessoa. O resultado é uma operação inconsistente, difícil de treinar, difícil de delegar e dependente demais de quem já conhece o jeito certo de fazer." },
        { tag: "Capacidade Travada", title: "Capacidade operacional desperdiçada", desc: "A empresa tem potencial para produzir mais com a estrutura atual, mas parte da capacidade fica travada em rotinas manuais, tarefas mal distribuídas e atividades que poderiam ser simplificadas." },
      ],
      resumoTitle: "O que parece apenas rotina pode estar custando tempo, produtividade e crescimento.",
      resumoText: "A Imersão Potencializa revela esses pontos invisíveis e mostra como transformar esforço perdido em uma operação mais clara, eficiente e preparada para crescer.",
      prejuizoLabel: "Potencial Desperdiçado",
      prejuizoValue: "Até 40% ao ano",
    },

    // Seção - Para quem é a Imersão Potencializa
    whatItDoesTitle: "Para quem é a imersão Potencializa",
    whatItDoesIntro:
      "A Imersão é para empresas que já estão em movimento, mas sentem que a operação ainda depende demais de esforço manual, decisões centralizadas e processos pouco claros para crescer com segurança.",
    whatItDoesHighlight:
      "Nossa consultoria existe para mudar isso: antes de qualquer implementação, entendemos fundo o seu negócio e entregamos um plano que faz sentido para a sua realidade.",
    whatItDoesSteps: [
      {
        n: "1",
        title: "Para empresários presos na operação",
        desc: "Para donos e sócios que querem ter mais liberdade para viver fora da empresa, sem passar o tempo todo no celular resolvendo problemas, apagando incêndios e acompanhando cada detalhe da rotina.",
      },
      {
        n: "2",
        title: "Para empresas sem processos padronizados",
        desc: "Para empresas que perdem horas com retrabalho, dúvidas repetidas e tarefas refeitas porque cada colaborador executa os processos de uma forma diferente.",
      },
      {
        n: "3",
        title: "Para empresas que querem crescer com mais eficiência e previsibilidade",
        desc: "Para negócios que querem aumentar a capacidade operacional sem depender apenas de novas contratações, preparando a equipe para trabalhar melhor com tecnologia, automações e métodos mais inteligentes.",
      },
      {
        n: "4",
        title: "Para operações sobrecarregadas",
        desc: "Para empresas que sentem a equipe sobrecarregada por tarefas repetitivas, controles manuais e demandas operacionais que poderiam ser simplificadas, automatizadas ou melhor distribuídas.",
      },
    ],

    // ── Lado direito da seção "O que faz" (A Imersão) ──
    orquestracao: {
      badge: "Descubra se a Imersão Potencializa é para a sua empresa",
      canais: [
        { title: "Diagnóstico", desc: "Análise profunda da operação" },
        { title: "Mapeamento", desc: "Processos e fluxos de trabalho" },
        { title: "Treinamento", desc: "Capacitação prática da equipe" },
        { title: "Plano de Ação", desc: "Prioridades e próximos passos" },
      ],
      statusLabel: "Resultado esperado",
      statusTitle: "Potencializa Strategic Map",
      statusBadge: "● 100% Personalizado",
      latencia: "PRAZO: ~1 MÊS",
    },
    // Seção - Jornada
    timelineSteps: [
      { badge: "Fase 01 - Diagnóstico Inicial", text: "Entendemos o negócio, os objetivos, os desafios atuais e a rotina da equipe.", detail: "No primeiro momento, buscamos entender como sua empresa funciona: a jornada do cliente, a jornada das informações, as atividades dos colaboradores e os pontos onde a operação perde produtividade, capacidade e dinheiro." },
      { badge: "Fase 02 - Mapeamento da operação", text: "Mapeamos processos, ferramentas, canais, controles e atividades da rotina.", detail: "Após a análise inicial, organizamos as informações da operação para mostrar como cada fluxo acontece na prática e onde estão as principais perdas do dia a dia." },
      { badge: "Fase 03 - Identificação de oportunidades", text: "Identificamos perdas de tempo, retrabalho e oportunidades de melhoria operacional.", detail: "A partir do mapeamento, apontamos o que pode ser simplificado, padronizado, automatizado, semiautomatizado ou melhor distribuído para tornar a rotina mais clara e eficiente." },
      { badge: "Fase 04 - Plano de atuação", text: "Criamos um plano com prioridades, sequência de ação e recomendações práticas.", detail: "Transformamos o diagnóstico em um caminho claro, mostrando o que deve ser feito, quais melhorias geram mais impacto e como a empresa pode evoluir usando melhor a equipe que já tem hoje." },
      { badge: "Fase 05 - Treinamento da equipe", text: "Capacitamos seu time com aplicações práticas para cada área da sua empresa.", detail: "O treinamento é construído com base nos problemas reais da equipe, mostrando como aplicar novas estratégias, ferramentas e automações em situações do próprio dia a dia." },
      { badge: "Fase 06 - Documentação e entrega final", text: "Entregamos materiais, orientações para manter a evolução mesmo após a Imersão.", detail: "Ao final, sua empresa recebe materiais, documentos, vídeos de treinamento e próximos passos para continuar evoluindo com mais clareza, autonomia e organização." },
    ],

    timelineExtra: {
      badge: "Acompanhamento Contínuo",
      text: "A evolução da sua empresa não precisa parar na Imersão",
      detail: "A evolução pode continuar após a Imersão com acompanhamento mensal, melhorias contínuas e atualizações práticas para manter sua empresa preparada para novas oportunidades.",
    },

    // ── Seção "Como funciona" (Roadmap) ──
    roadmap: {
      badge: "Metodologia Ágil",
      title: "A jornada para a sua",
      titleHighlight: "autonomia estratégica.",
      ctaText: "Quero meu diagnóstico",
      ctaSubtext: "Projeto completo entregue em 1 mês",
    },

    // ── Faixa de Stats ──
    stats: [
      { value: "100%", label: "Processos Mapeados" },
      { value: "+25%", label: "eficiência" },
      { value: "+10%", label: "economia operacional" },
      { value: "+1h/dia", label: "por colaborador" },
    ],

    // ── Seção "Benefícios" ──
    beneficios: {
      badge: "O que sua empresa ganha ",
      titlePre: "Depois da imersão, o que ",
      titleHighlight: " minha empresa ganha na prática?",
      titlePost: "",
      cards: [
        { title: "Clareza operacional", desc: "Sua empresa passa a ter uma visão mais clara da própria rotina, com prioridades bem definidas, mais produtividade e entendimento sobre quais tarefas devem ser realizadas por primeiro o quais devem ser automatizadas." },
        { title: "Processos mais organizados", desc: "As rotinas ficam mais estruturadas, padronizadas e fáceis de acompanhar, tornando a operação mais previsível para a equipe e para a liderança." },
        { title: "Equipe mais produtiva", desc: "Seu time ganha direcionamento prático para usar melhor o tempo, executar tarefas com mais consistência e concentrar energia nas atividades que realmente movem o negócio e colocam dinheiro no seu bolso." },
        { title: "Mais liberdade para o dono", desc: "Com processos mais claros e uma equipe mais preparada, o negócio passa a funcionar com mais autonomia, reduzindo a dependência da sua presença constante na operação." },
      ],
      rodape: "Diagnóstico sob medida • Plano personalizado • Treinamento incluso",
    },

    // ── Seção "CTA + FAQ" (Fechamento) ──
    fechamento: {
      badge: "A decisão depende de você",
      title: "Sua empresa está pronta para crescer sem depender tanto",
      titleHighlight: "de você?",
      intro: "Agora é a sua vez de potencializar o seu negócio",
      ctaPrimary: "Solicitar Diagnóstico Gratuito",
      ctaSecondary: "Falar com um Especialista",
      rodape: "Primeiro diagnóstico sem custos",
      faqTitle: "Perguntas frequentes",
      faqSubtitle: "Tire suas dúvidas sobre a consultoria e o diagnóstico.",

    },
     faq: [
      {
        q: "A consultoria já inclui a implementação?",
        a: "A consultoria é focada no diagnóstico e plano. A implementação pode ser contratada separadamente ou feita pelo seu time com base no roadmap.",
      },
      {
        q: "Minha empresa precisa já usar tecnologia ou automações para contratar a Imersão?",
        a: "Não. A Imersão é justamente para empresas que querem entender por onde começar. Avaliamos o nível atual da sua operação e indicamos caminhos realistas, considerando a estrutura, a equipe, os processos e os objetivos do negócio.",
      },
      {
        q: "Para quais tipos de empresa a Imersão é indicada?",
        a: "A Imersão é indicada para empresas que já possuem rotina operacional, equipe, clientes e processos acontecendo, mas sentem que ainda perdem tempo com tarefas repetitivas, falta de padronização, controles manuais ou dependência excessiva dos donos e líderes.",
      },
      {
        q: "Quanto tempo dura a Imersão?",
        a: "A duração média é de aproximadamente 1 mês. Esse período pode variar conforme o tamanho da empresa, a quantidade de áreas envolvidas e a complexidade dos processos analisados.",
      },
      {
        q: "O que minha empresa recebe ao final da Imersão?",
        a: "Sua empresa recebe um diagnóstico da operação, mapeamento dos principais processos, identificação de oportunidades de melhoria, plano de atuação com prioridades, treinamento prático da equipe e materiais de apoio para continuar evoluindo depois da Imersão.",
      },
       {
        q: "A Imersão inclui treinamento da equipe?",
        a: "Sim. Um dos pontos centrais da Imersão é capacitar a equipe com aplicações práticas voltadas para a rotina da empresa. O objetivo é que o time entenda como trabalhar com mais organização, clareza e eficiência no dia a dia.",
      },
       {
        q: "Preciso contratar novas ferramentas depois da Imersão?",
        a: "Nem sempre. Antes de recomendar qualquer ferramenta, analisamos o que sua empresa já utiliza e quais melhorias podem ser feitas com a estrutura atual. Quando uma nova ferramenta fizer sentido, ela será indicada com base em necessidade real, não por moda ou excesso de tecnologia.",
      },
       {
        q: "Depois da Imersão, a Potencializa continua acompanhando a empresa?",
        a: "A Imersão entrega um plano claro e materiais para a empresa continuar evoluindo com mais autonomia. Para empresas que desejam continuidade, oferecemos um acompanhamento mensal opcional, com revisão de processos, novas recomendações, melhorias contínuas e atualizações sobre tecnologia e automações.",
      },
    ],
  },
  {
    title: "Seu comercial ativo 24 horas por dia",
    slug: "atendimento-inteligente",
    badge: "Comercial Inteligente 24 horas",
    subtitle: "A Automação Comercial da Potencializa estrutura agentes personalizados para atender leads, qualificar oportunidades, fazer follow-ups, organizar informações no CRM e manter sua empresa disponível em todos os canais, mesmo fora do horário comercial.",
    description:
      "Automatize seu atendimento com IA treinada para responder com contexto, reduzir filas e manter o padrão da sua marca.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=700&fit=crop&crop=face",

    messageUser: "Quero automatizar meu atendimento no WhatsApp.",
    messageBot: "Entendi! Vamos automatizar seu atendimento no WhatsApp com IA.",

    cta: "Quero automatizar meu atendimento",
    ctaHref: "/#contato",

    benefits: [
      "Respostas instantâneas 24/7",
      "Padronização do atendimento",
      "Redução de custos operacionais",
      "Escalonamento para humano quando necessário",
    ],

    features: [
      "Treinamento com base da empresa (FAQ, site, docs)",
      "Integração com WhatsApp/Instagram",
      "Coleta de dados e motivos de contato",
      "Relatórios e insights",
    ],

    // ── Seção "Diagnóstico de Perdas" ──
    problemas: {
      badge: "Diagnóstico de Perdas",
      title: "Seus clientes não esperam ",
      titleHighlight: "sua equipe estar disponível.",
      intro:
        "Enquanto sua equipe está ocupada, em reunião ou fora do horário comercial, novas oportunidades continuam chegando. O problema é que, se sua empresa não estiver preparada para atender seus clientes quando eles te procuram e querem comprar de você muitos leads esfriam, follow-ups são esquecidos e vendas potenciais se perdem.",
      cards: [
        { tag: "Leads esfriam rápido", title: "Seu cliente não te espera", desc: "Quando um cliente demonstra interesse, cada minuto conta. 78% dos clientes compram de quem responde primeiro, se você demora mais de 5 minutos sua chance de conversão cai drasticamente" },
        { tag: "Horário limitado", title: "Oportunidades chegam a todo momento", desc: "Mais de 60% das compras, agendamentos e contatos acontecem fora do horário comercial. Quando sua empresa não responde nesse momento, seu concorrente já sai na frente." },
        { tag: "Falha no acompanhamento", title: "Oportunidades ficam paradas", desc: "Muitas vendas não acontecem no primeiro contato. Sem uma rotina clara de follow-up e agendamento, leads interessados deixam de ser acompanhados e acabam esquecidos no funil." },
        { tag: "Dados comerciais dispersos", title: "Seu CRM não mostra tudo que acontece no comercial", desc: "Conversas, históricos e informações importantes ficam perdidos entre canais, planilhas e anotações manuais. Com isso, o funil deixa de refletir a realidade da operação." },
        { tag: "Gestão sem visão", title: "Decisões comerciais viram tentativa e erro", desc: "Quando a liderança não enxerga os dados do comercial com clareza, fica difícil saber onde estão os gargalos, quais canais performam melhor e quais ações realmente merecem prioridade." },
        { tag: "Relacionamento genérico", title: "Todos os seus clientes são únicos", desc: "Cada cliente chega com uma necessidade, um momento e uma intenção diferente. Quando a abordagem é personalizada, a conversa fica mais relevante, o relacionamento ganha força e as chances de avanço aumentam." },
      ],
      resumoTitle: "O diagnóstico é claro:",
      resumoText: "Sua empresa pode estar perdendo oportunidades não por falta de demanda, mas por falta de velocidade, constância e clareza no processo comercial.",
      prejuizoLabel: "Prejuízo Estimado",
      prejuizoValue: "Oportunidades perdidas todos os dias",
    },

    // ── Lado direito da seção "O que faz" (A Orquestração) ──
    orquestracao: {
      badge: "A Orquestração",
      canais: [
        { title: "WhatsApp", desc: "Fluxo Oficial" },
        { title: "Web Widget", desc: "Inteligência On-site" },
        { title: "Instagram", desc: "Direct Sales" },
        { title: "Voice Agent", desc: "Atendimento por Voz" },
      ],
      statusLabel: "Status Global",
      statusTitle: "Potencializa Agentic Mesh",
      statusBadge: "● 100% Online",
      latencia: "LATENCY: 0.2ms",
    },

    whatItDoesTitle: "Para quem é a Automação Comercial",
    whatItDoesIntro:
      "Para empresas que já têm demanda, mas sentem que ainda perdem oportunidades por falta de disponibilidade, personalização, acompanhamento ou capacidade comercial para atender cada cliente no momento certo.",
    whatItDoesHighlight:
      "Nossa IA não substitui sua equipe — potencializa seu alcance e garante que nenhuma oportunidade seja perdida.",
    whatItDoesSteps: [
      {
        n: "1",
        title: "Para empresas que não querem perder oportunidades por não estarem disponíveis",
        desc: "Se sua empresa quer estar sempre disponível para atender o cliente no momento em que ele procura, essa solução ajuda a manter o comercial ativo, rápido e preparado para transformar interesse em oportunidade.",
      },
      {
        n: "2",
        title: "Para empresas que poderiam vender mais com a equipe que já têm",
        desc: "Quando o time precisa responder dúvidas repetidas, lembrar follow-ups e organizar dados manualmente, sobra menos tempo para negociações estratégicas, relacionamento e planos de fechamento realmente conectados à dor do cliente.",
      },
      {
        n: "3",
        title: "Para empresas que já têm oportunidades entrando",
        desc: "Receber leads é importante, mas não basta. Sem velocidade, organização e acompanhamento, parte da demanda gerada pelo marketing ou pelos canais comerciais pode se perder no caminho.",
      },
      {
        n: "4",
        title: "Para empresas que sabem que cada cliente é especial",
        desc: "Cada cliente chega com uma necessidade, uma urgência e um momento diferente. Quanto mais personalizada for a abordagem, mais relevante a conversa se torna e maiores são as chances de avanço comercial.",
      },
    ],

    // ── Seção "Como funciona" (Roadmap) ──
    roadmap: {
      badge: "A jornada",
      title: "A jornada para a sua",
      titleHighlight: "autonomia tecnológica.",
      ctaText: "Iniciar meu setup agora",
      ctaSubtext: "Garantia de implementação em contrato",
    },

    timelineSteps: [
      { badge: "Fase 01 - Diagnóstico comercial", text: "Analisamos todo o comercial da sua empresa e entendemos como ele funciona", detail: "Entendemos seus canais de venda, funil comercial, rotina da equipe, CRM, formas de atendimento e principais pontos onde oportunidades estão sendo perdidas. " },
      { badge: "Fase 02 - Criação dos Fluxos", text: "Mapeamos a jornada do cliente e definimos como cada etapa deve funcionar.", detail: "Desenhamos os caminhos de atendimento, qualificação, agendamento, follow-up, reativação e passagem para o time humano, sempre com base na operação real da empresa." },
      { badge: "Fase 03 - Validação", text: "Apresentamos o plano e alinhamos os detalhes junto com você.", detail: "Validamos fluxos, regras comerciais, tom de comunicação, critérios de qualificação e pontos de contato antes da implementação, garantindo mais segurança na entrega." },
      { badge: "Fase 04 - Criação dos agentes", text: "Construímos agentes comerciais personalizados para a sua empresa.", detail: "Cada agente é criado com uma função específica e treinado com dados reais do negócio, como serviços, produtos, objeções, linguagem, regras e etapas do funil." },
      { badge: "Fase 05 - Integração", text: "Conectamos os agentes aos canais e sistemas que sua empresa já utiliza no dia a dia.", detail: "Nossa solução se adapta às ferramentas que sua empresa já utiliza, como WhatsApp, Instagram, site, e-mail, CRM e outros sistemas integráveis, sem exigir troca de tecnologia ou novas contratações desnecessárias." },
      { badge: "Fase 06 - Testes e entrega", text: "Testamos, ajustamos e entregamos a estrutura pronta para operar.", detail: "Validamos respostas, registros, encaminhamentos e integrações antes da entrega final, garantindo que a automação entre em operação com mais controle e clareza." },
    ],

    timelineExtra: {
      badge: "Evolução Contínua",
      text: "Depois da entrega sua automação pode continuar evoluindo",
      detail: "Sua empresa pode contar com acompanhamento mensal para revisar fluxos, aplicar melhorias, analisar dados comerciais e criar novas automações conforme a operação evolui.",
    },
    
    // ── Faixa de Stats ──
    stats: [
      { value: "98%", label: "Satisfação" },
      { value: "3x", label: "Conversões" },
      { value: "100%", label: "de tempo ativo" },
      { value: "- 1s", label: "Resposta" },
    ],

    faq: [
      {
        q: "Preciso trocar meus sistemas atuais?",
        a: "Não. Integramos com o que você já usa sempre que houver API disponível.",
      },
      {
        q: "E quando o cliente precisa de um humano?",
        a: "A IA transfere com todo o contexto para sua equipe.",
      },
      {
        q: "Funciona fora do horário comercial?",
        a: "Sim. A operação é 24/7.",
      },
    ],

    // ── Seção "Benefícios" ──
    beneficios: {
      badge: "Ganhos comerciais",
      titlePre: "O que sua empresa ",
      titleHighlight: "ganha da prática.",
      titlePost: "",
      cards: [
        { title: "Redução de Custos", desc: "Substitua processos manuais lentos por automações que rodam com custo fixo e escalabilidade infinita." },
        { title: "Conversão 24/7", desc: "Sua empresa nunca dorme. Capture leads e feche agendamentos enquanto sua equipe descansa." },
        { title: "Padronização Total", desc: "Elimine o erro humano e garanta que cada cliente receba o atendimento perfeito, todas as vezes." },
        { title: "Foco Estratégico", desc: "Liberte seus talentos de tarefas repetitivas para que eles foquem no que realmente traz faturamento." },
      ],
      rodape: "Tecnologia proprietária • Integração Nativa • Segurança LGPD",
    },

    // ── Seção "CTA + FAQ" (Fechamento) ──
    fechamento: {
      badge: "Vamos Conversar",
      title: "Sua operação está pronta para a",
      titleHighlight: "escala da IA?",
      intro: "Não deixe sua empresa no passado. Implemente hoje os agentes que vão trabalhar por você 24/7.",
      ctaPrimary: "Solicitar Diagnóstico Gratuito",
      ctaSecondary: "Falar com Engenheiro",
      rodape: "Setup em tempo recorde • Sem fidelidade",
      faqTitle: "Perguntas frequentes",
      faqSubtitle: "Tire suas dúvidas sobre atendimento com IA.",
    },
  },

  {
    title: "Suporte Turbo",
    slug: "suporte-turbo",
    badge: "suporte",
    subtitle: "Resolva chamados com respostas guiadas e base viva",
    description:
      "Agilize o suporte técnico com IA treinada e fluxos passo a passo, diminuindo tickets e aumentando satisfação.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&h=700&fit=crop&crop=face",

    messageUser: "Quero otimizar meu suporte técnico com IA.",
    messageBot:
      "Ótimo! Vamos criar um suporte turbo para resolver chamados com eficiência.",

    cta: "Quero otimizar meu suporte",
    ctaHref: "/#contato",

    benefits: [
      "Resolução mais rápida",
      "Menos tickets repetidos",
      "Base de conhecimento organizada",
      "Melhor experiência do cliente",
    ],

    features: [
      "Tutoriais e troubleshooting guiado",
      "Integração com helpdesk (se usar)",
      "Registro de dúvidas recorrentes",
      "Relatórios de causas e recorrência",
    ],

    whatItDoesTitle: "O que faz",
    whatItDoesIntro:
      "Quando o suporte depende sempre do time humano para questões repetidas, a operação fica lenta, cara e desgastante.",
    whatItDoesHighlight:
      "Nossa IA ajuda a resolver dúvidas recorrentes, orienta o cliente passo a passo e reduz o volume de chamados desnecessários.",
    whatItDoesSteps: [
      {
        n: "1",
        title: "Responde dúvidas recorrentes",
        desc: "Atua sobre perguntas repetidas e problemas comuns com agilidade.",
      },
      {
        n: "2",
        title: "Guia a resolução passo a passo",
        desc: "Entrega instruções claras para o cliente resolver o problema com autonomia.",
      },
      {
        n: "3",
        title: "Identifica quando escalar",
        desc: "Encaminha o caso para o time técnico quando realmente precisa de intervenção humana.",
      },
      {
        n: "4",
        title: "Transforma suporte em inteligência",
        desc: "Registra padrões, causas e dúvidas frequentes para melhorar sua operação.",
      },
    ],

    timelineSteps: [
      { badge: "Fase 01", text: "Cliente abre contato com uma dúvida ou problema", detail: "O cliente inicia o contato com uma dúvida ou problema pelo canal de preferência — WhatsApp, Web Widget, Instagram ou Voz. Nenhum chamado fica sem registro." },
      { badge: "Fase 02", text: "IA identifica o tipo de chamado e busca a melhor resposta", detail: "A IA analisa a mensagem, identifica a intenção e busca na base de conhecimento a resposta mais adequada para aquele tipo específico de chamado." },
      { badge: "Fase 03", text: "Orienta a resolução com passos simples e claros", detail: "O cliente recebe instruções claras, passo a passo, que permitem resolver o problema com autonomia — reduzindo a necessidade de intervenção humana em chamados de nível 1." },
      { badge: "Fase 04", text: "Escala para o time técnico quando necessário", detail: "Quando o chamado exige análise técnica especializada ou ação manual, a IA encaminha para o time com todo o contexto da conversa já registrado, evitando repetição de informações." },
      { badge: "Fase 05", text: "Registra padrões para evoluir a base de conhecimento", detail: "Cada interação alimenta a base de conhecimento: dúvidas recorrentes, causas raízes e padrões identificados são registrados para melhorar continuamente a eficiência do suporte." },
    ],

    timelineExtra: {
      badge: "Base Viva",
      text: "Sua base de conhecimento evolui com o uso",
      detail: "Com o tempo, a IA aprende com os chamados reais da sua empresa, amplia as respostas disponíveis e reduz progressivamente o volume de tickets que chegam ao time técnico.",
    },

    faq: [
      {
        q: "A IA aprende com meus artigos e documentos?",
        a: "Sim. Podemos treinar com sua base (FAQ, docs, helpdesk, site) e manter tudo atualizado.",
      },
      {
        q: "Ela reduz tickets repetidos?",
        a: "Sim. Respostas guiadas e triagem diminuem volume e aumentam resolução no primeiro contato.",
      },
      {
        q: "Pode abrir chamado quando necessário?",
        a: "Sim. Quando não resolver, registra e encaminha com o contexto completo.",
      },
    ],

    // ── Seção "Diagnóstico de Perdas" ──
    problemas: {
      badge: "Diagnóstico de Perdas",
      title: "O custo invisível de um",
      titleHighlight: "suporte sobrecarregado.",
      intro:
        "Quando todo chamado depende de uma pessoa, a fila cresce, o cliente espera e o custo dispara. Suporte lento é cliente insatisfeito.",
      cards: [
        { tag: "Resolução Lenta", title: "Tempo de Espera", desc: "Cada minuto na fila aumenta a frustração. Quanto mais demora a primeira resposta, maior a chance de o cliente desistir." },
        { tag: "Fila Crescente", title: "Demanda que Acumula", desc: "Quando o volume de chamados sobe, o time não dá conta — e os tickets se acumulam mais rápido do que são resolvidos." },
        { tag: "Risco de Branding", title: "Respostas Inconsistentes", desc: "Atendentes diferentes resolvem o mesmo problema de formas diferentes, gerando confusão e perda de confiança." },
        { tag: "Falta de Inteligência", title: "Causas Invisíveis", desc: "Sem registrar padrões, você apaga incêndios sem nunca enxergar — nem corrigir — o que mais gera chamados." },
        { tag: "Cliente sem Autonomia", title: "Tudo Vira Ticket", desc: "Dúvidas simples e repetidas poderiam ser resolvidas na hora, mas acabam ocupando o time técnico." },
        { tag: "Dreno Financeiro", title: "Custo do Nível 1", desc: "Grande parte do orçamento de suporte é gasto com perguntas básicas que uma IA treinada resolveria sozinha." },
      ],
      resumoTitle: "O diagnóstico é claro:",
      resumoText: "Seu time técnico está preso em tarefas repetitivas que poderiam ser resolvidas automaticamente.",
      prejuizoLabel: "Prejuízo Estimado",
      prejuizoValue: "Até 40% ao ano",
    },

    // ── Lado direito da seção "O que faz" (A Orquestração) ──
    orquestracao: {
      badge: "A Orquestração",
      canais: [
        { title: "WhatsApp", desc: "Suporte Oficial" },
        { title: "Web Widget", desc: "Central de Ajuda" },
        { title: "Instagram", desc: "Atendimento Social" },
        { title: "Voice Agent", desc: "Suporte por Voz" },
      ],
      statusLabel: "Status Global",
      statusTitle: "Potencializa Support Mesh",
      statusBadge: "● 100% Online",
      latencia: "SLA: < 1min",
    },

    // ── Seção "Como funciona" (Roadmap) ──
    roadmap: {
      badge: "Metodologia Ágil",
      title: "A jornada para um",
      titleHighlight: "suporte que escala.",
      ctaText: "Iniciar meu setup agora",
      ctaSubtext: "Garantia de implementação em contrato",
    },

    // ── Faixa de Stats ──
    stats: [
      { value: "-60%", label: "Tickets Repetidos" },
      { value: "< 1min", label: "1ª Resposta" },
      { value: "24/7", label: "Disponível" },
      { value: "+35%", label: "Satisfação" },
    ],

    // ── Seção "Benefícios" ──
    beneficios: {
      badge: "Vantagem Competitiva",
      titlePre: "O que a IA ",
      titleHighlight: "resolve",
      titlePost: " no seu suporte.",
      cards: [
        { title: "Menos Custo por Ticket", desc: "Reduza o volume de chamados de nível 1 e diminua o custo operacional do seu suporte." },
        { title: "Atendimento 24/7", desc: "Seus clientes recebem resposta a qualquer hora, sem depender do horário do time técnico." },
        { title: "Respostas Padronizadas", desc: "Toda dúvida recebe a mesma resposta correta e atualizada, com base no seu conhecimento." },
        { title: "Time Focado no Complexo", desc: "A IA resolve o repetitivo e libera seus especialistas para os casos que realmente exigem gente." },
      ],
      rodape: "Base de conhecimento viva • Integração com helpdesk • Segurança LGPD",
    },

    // ── Seção "CTA + FAQ" (Fechamento) ──
    fechamento: {
      badge: "Vamos Conversar",
      title: "Seu suporte está pronto para",
      titleHighlight: "resolver na hora?",
      intro: "Reduza tickets repetidos e acelere a resolução com uma IA treinada na sua base de conhecimento.",
      ctaPrimary: "Solicitar Diagnóstico Gratuito",
      ctaSecondary: "Falar com Engenheiro",
      rodape: "Setup em tempo recorde • Sem fidelidade",
      faqTitle: "Perguntas frequentes",
      faqSubtitle: "Tire suas dúvidas sobre suporte com IA.",
    },
  },
] as const;