export const services = [
  {
    //Seção - Header
    title: "Imersão Potencializa",
    slug: "imersao-potencializa",
    badge: "Bem-vindo à Imersão Potencializa",
    subtitle: "A Imersão Potencializa ajuda sua empresa a sair do improviso operacional. Em aproximadamente 1 mês, analisamos processos, organizamos prioridades e treinamos sua equipe para construir uma rotina mais eficiente, previsível e menos dependente da presença constante dos líderes.",
    // A descrição não aparece também
    description:
      "A Imersão Potencializa ajuda sua empresa a sair do improviso operacional. Em aproximadamente 1 mês, analisamos processos, organizamos prioridades e treinamos sua equipe para construir uma rotina mais eficiente, previsível e menos dependente da presença constante dos líderes.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=700&fit=crop",

    messageUser: "Quero entender como a IA pode ajudar meu negócio.",
    messageBot: "Ótimo! Vamos fazer um diagnóstico completo e montar um plano sob medida para você.",

    cta: "Diagnóstico inicial gratuito",
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
      badge: "Diagnóstico Operacional",
      title: "O custo invisível da",
      titleHighlight: "ineficiência operacional.",
      intro:
        "Nem toda perda aparece no caixa. Muitas começam em tarefas manuais, retrabalho e decisões sem clareza.",
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
      prejuizoValue: "Na operação",
    },

    // Seção - Para quem é a Imersão Potencializa
    whatItDoesTitle: "Para quem é a Imersão Potencializa",
    whatItDoesIntro:
      "A Imersão é para empresas que já estão em movimento, mas sentem que a operação ainda depende demais de esforço manual, decisões centralizadas e processos pouco claros para crescer com segurança.",
    whatItDoesHighlight:
      "Nossa consultoria existe para mudar isso: antes de qualquer implementação, entendemos fundo o seu negócio e entregamos um plano que faz sentido para a sua realidade.",
    whatItDoesSteps: [
      {
        n: "1",
        title: "Para empresários presos na operação",
        desc: "Para donos e sócios que querem reduzir a dependência da sua presença na operação e construir uma rotina mais organizada, previsível e fácil de acompanhar.",
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
      badge: "Ideal para você",
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
      badge: "Resultados",
      titlePre: "Depois da imersão, o que ",
      titleHighlight: " minha empresa ganha na prática?",
      titlePost: "",
      cards: [
        { title: "Clareza operacional", desc: "Sua empresa passa a ter uma visão mais clara da própria rotina, com prioridades bem definidas, mais produtividade e entendimento sobre quais tarefas devem ser realizadas primeiro e quais devem ser automatizadas." },
        { title: "Processos mais organizados", desc: "As rotinas ficam mais estruturadas, padronizadas e fáceis de acompanhar, tornando a operação mais previsível para a equipe e para a liderança." },
        { title: "Equipe mais produtiva", desc: "Sua equipe ganha direcionamento prático para usar melhor o tempo, aplicar as tecnologias da forma correta e executar a rotina com mais consistência, focando nas atividades que realmente geram resultado para a empresa." },
        { title: "Mais liberdade para o dono", desc: "Com processos mais claros e uma equipe mais preparada, o negócio passa a funcionar com mais autonomia, reduzindo a dependência constante dos donos e gestores na operação." },
      ],
      rodape: "Diagnóstico sob medida • Plano personalizado • Treinamento incluso",
    },

    // ── Seção "CTA + FAQ" (Fechamento) ──
    fechamento: {
      badge: "A decisão depende de você",
      title: "Sua empresa está pronta para crescer com mais",
      titleHighlight: "clareza e eficiência?",
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
        a: "A Imersão é focada no diagnóstico, organização dos processos, treinamento da equipe e plano de ação. A implementação das soluções pode ser feita pelo time da sua empresa ou contratada separadamente com a Potencializa, conforme as prioridades definidas no projeto.",
      },
      {
        q: "Preciso ter tecnologia ou automações na empresa para começar?",
        a: "Não. A Imersão foi criada justamente para empresas que ainda não sabem por onde começar. Primeiro entendemos o momento atual da operação e, a partir disso, indicamos caminhos realistas de melhoria considerando a estrutura, a equipe, os processos e os objetivos do negócio.",
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
        q: "Preciso contratar novas ferramentas depois da Imersão?",
        a: "Nem sempre. Antes de recomendar qualquer ferramenta, analisamos o que sua empresa já utiliza e quais melhorias podem ser feitas com a estrutura atual. Se identificarmos a necessidade de uma nova solução, ela será indicada com base no impacto real que pode gerar para a operação.",
      },
       {
        q: "Depois da Imersão, a Potencializa continua acompanhando a empresa?",
        a: "A Imersão entrega um plano claro e materiais para a empresa continuar evoluindo com mais autonomia. Para empresas que desejam continuidade, oferecemos um acompanhamento mensal opcional, com revisão de processos, novas recomendações, melhorias contínuas e atualizações sobre tecnologia e automações.",
      },
    ],
  },
  {
    title: "Seu comercial ativo 24 horas por dia",
    slug: "automacao-comercial",
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
        "Enquanto sua equipe está ocupada, em reunião ou fora do horário comercial, novas oportunidades continuam chegando. O problema é que, se sua empresa não estiver preparada para atender os clientes no momento em que eles procuram e querem comprar, muitos leads esfriam, follow-ups são esquecidos e vendas potenciais se perdem.",
      cards: [
        { tag: "Leads esfriam rápido", title: "Seu cliente não te espera", desc: "Quando um cliente demonstra interesse, cada minuto conta. 78% dos clientes compram de quem responde primeiro. Se você demora mais de 5 minutos, sua chance de conversão cai drasticamente." },
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
      badge: "ideal para você",
      canais: [
        { title: "WhatsApp", desc: "Respostas em segundos 24 horas por dia" },
        { title: "Agente Qualificador", desc: "Seus vendedores recebem apenas quem quer comprar de você" },
        { title: "Instagram", desc: "Qualifica no momento do interesse" },
        { title: "Agente Personalizado", desc: "Treinado com os dados e costumes da sua empresa" },
      ],
      statusLabel: "Oportunidades Comerciais",
      statusTitle: "Potencializa Agente Comercial",
      statusBadge: "● 100% Online",
      latencia: "RESPOSTA: < 1 segundo",
    },

    // ── Seção exclusiva: escopo de automação ──
    escopoAutomacao: {
      badge: "Flexibilidade total",
      title: "Você escolhe até onde automatizar",
      description: "A Automação Comercial é construída conforme a realidade da sua empresa. Podemos automatizar desde o primeiro atendimento e qualificação até follow-ups, agendamentos, reativação de clientes, registros no CRM e apoio ao fechamento, sempre com possibilidade de supervisão e passagem para o time humano.",
      areas: [
        { label: "Primeiro atendimento" },
        { label: "Qualificação de leads" },
        { label: "Follow-ups" },
        { label: "Agendamentos" },
        { label: "Reativação de clientes" },
        { label: "Registros no CRM" },
        { label: "Apoio ao fechamento" },
      ],
      footer: "Supervisão humana e passagem para o time sempre disponíveis",
    },

    whatItDoesTitle: "Para quem é a Automação Comercial",
    whatItDoesIntro:
      "Para empresas que já têm demanda, mas sentem que ainda perdem oportunidades por falta de disponibilidade, personalização, acompanhamento ou capacidade comercial para atender cada cliente no momento certo.",
    whatItDoesHighlight:
      "Nossa IA não substitui sua equipe, ela potencializa seu alcance e garante que nenhuma oportunidade seja perdida.",
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

    // ── Seção "Benefícios" ──
    beneficios: {
      badge: "Ganhos comerciais",
      titlePre: "Sua empresa depois da ",
      titleHighlight: "automação comercial.",
      titlePost: "",
      cards: [
        { title: "Atendimento comercial sempre ativo", desc: "Sua empresa passa a atender, responder e direcionar oportunidades em diferentes canais, mesmo fora do horário comercial. Fazendo com que sua empresa esteja sempre de portas abertas para atender quem quer comprar de você" },
        { title: "Relacionamento constante com seus clientes", desc: "Sua empresa atende cada cliente de forma personalizada, fazendo com que cada relacionamento seja mais lucrativo e duradouro. Seus clientes passam a se sentir acolhidos e recomendam sua marca." },
        { title: "Gestão com mais clareza comercial", desc: "Informações, históricos e etapas do funil ficam mais organizados, ajudando gestores a entenderem o que está acontecendo no comercial e tomarem decisões com mais segurança." },
        { title: "Equipe focada no que gera resultado", desc: "A automação assume etapas operacionais do comercial, como triagem, registros e acompanhamentos, para que seu time tenha mais tempo para negociar, criar relacionamento e fechar oportunidades com mais qualidade." },
      ],
      rodape: "Agentes personalizados • Integração com seus canais • Dados comerciais mais claros",
    },

    // ── Seção "CTA + FAQ" (Fechamento) ──
    fechamento: {
      badge: "Vamos Conversar",
      title: "Sua empresa está pronta para responder quando",
      titleHighlight: "seu cliente quer comprar?",
      intro: "Agora é a sua vez de potencializar o seu negócio!",
      ctaPrimary: "Potencializar meu negócio",
      ctaSecondary: "Falar com Especialista",
      rodape: "Agentes personalizados • Integração com seus canais • Comercial ativo 24h",
      faqTitle: "Perguntas frequentes",
      faqSubtitle: "Tire suas dúvidas sobre atendimento com IA.",
    },

    faq: [
      {
        q: "A Automação Comercial traz mais clientes?",
        a: "Não diretamente. A Automação Comercial não substitui estratégias de marketing ou geração de demanda. O que fazemos é ajudar sua empresa a aproveitar melhor os leads, contatos e clientes que já chegam até você, reduzindo perdas por demora, falta de acompanhamento, desorganização ou ausência de resposta.",
      },
      {
        q: "A automação substitui minha equipe comercial?",
        a: "Não. O objetivo não é substituir vendedores, SDRs ou atendentes, mas potencializar o trabalho deles. A automação assume etapas repetitivas, como primeiras respostas, qualificação, registros, follow-ups e organização de dados, para que sua equipe tenha mais tempo para negociações, relacionamento e fechamento.",
      },
      {
        q: "O atendimento fica 100% automático?",
        a: "Depende do que sua empresa deseja automatizar. A automação pode conduzir o lead até o agendamento de uma reunião, até uma etapa de qualificação ou até o fechamento, quando isso fizer sentido. O nível de automação é definido junto com a empresa, sempre com possibilidade de supervisão e passagem para o time humano.",
      },
      {
        q: "A automação é personalizada para minha empresa?",
        a: "Sim. A estrutura é criada com base nas informações reais do seu negócio, incluindo produtos, serviços, tom de comunicação, forma de atendimento, funil comercial, objeções, critérios de qualificação e regras comerciais.",
      },
      {
        q: "Preciso trocar meu CRM ou contratar novas ferramentas?",
        a: "Na maioria dos casos, não. Nossa solução se adapta às ferramentas que sua empresa já utiliza. Quando falamos de CRM ou outros sistemas, a integração depende da disponibilidade técnica, como API ou recursos de conexão oferecidos pela própria plataforma.",
      },
      {
        q: "O sistema faz follow-up e agendamentos automaticamente?",
        a: "Sim. Podemos estruturar fluxos para acompanhar leads, enviar lembretes, retomar conversas, agendar reuniões e manter oportunidades em movimento. Isso ajuda a reduzir esquecimentos e torna o relacionamento comercial mais constante.",
      },
      {
        q: "Minha equipe recebe treinamento para usar a automação?",
        a: "O treinamento da equipe pode ser contratado à parte. Quando incluído no projeto, capacitamos seu time para acompanhar os fluxos, assumir conversas, interpretar informações e usar a automação no dia a dia com mais segurança.",
      },
      {
        q: "Vocês oferecem acompanhamento depois da implementação?",
        a: "Sim, mas o acompanhamento contínuo é um serviço opcional contratado à parte. Nele, revisamos fluxos, analisamos dados comerciais, aplicamos melhorias, criamos novas automações e ajustamos a operação conforme a empresa evolui.",
      },
      
    ],
  },

  {
    title: "Soluções exclusivas para potencializar sua operação",
    slug: "hiperautomacao-personalizada",
    badge: "Hiperautomação Empresarial",
    subtitle: "A Hiperautomação Empresarial automatiza processos repetitivos em áreas específicas ou em diferentes setores da sua empresa, conecta os sistemas que você já utiliza e centraliza informações para que a gestão acompanhe a operação com mais clareza, produtividade e controle.",
    description:
      "Automatize processos de diferentes áreas, conecte sistemas e centralize informações para que sua empresa opere com mais clareza, produtividade e controle.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&h=700&fit=crop&crop=face",

    messageUser: "Quero automatizar e conectar os processos da minha empresa.",
    messageBot:
      "Ótimo! Vamos mapear sua operação e construir uma hiperautomação sob medida para o seu negócio.",

    cta: "Entender como funciona",
    ctaHref: "/#contato",

    benefits: [
      "Mais produtividade no dia a dia",
      "Sistemas e áreas conectados",
      "Gestão com dados na mão",
      "Redução de custos operacionais",
    ],

    features: [
      "Automação de processos repetitivos",
      "Integração com os sistemas que você já usa",
      "Centralização de dados da operação",
      "Relatórios e indicadores para a gestão",
    ],

     // ── Seção "Diagnóstico de Perdas" ──
    problemas: {
      badge: "Diagnóstico de Perdas",
      title: "Soluções prontas e genéricas já não",
      titleHighlight: "acompanham a sua operação",
      intro:
        "Conforme sua empresa cresce, surgem processos próprios, exceções, sistemas diferentes e rotinas que não cabem em soluções comuns. É nesse momento que automatizar do jeito certo deixa de ser apenas eficiência e passa a ser uma necessidade para manter controle, produtividade e clareza.",
      cards: [
        { tag: "Operação personalizada", title: "Soluções genéricas não resolvem", desc: "Cada negócio tem processos, exceções e formas próprias de funcionar. Quando a ferramenta não acompanha essa realidade, a equipe cria atalhos, planilhas e controles paralelos para compensar." },
        { tag: "Fluxos soltos", title: "Automações pontuais não criam uma operação integrada", desc: "Automatizar uma etapa ajuda, mas nem sempre resolve o fluxo inteiro. Quando cada automação funciona isoladamente, a empresa ganha velocidade em alguns pontos, mas continua perdendo eficiência entre as etapas." },
        { tag: "Áreas desconectadas", title: "Cada área trabalha bem, mas a operação não flui como um todo", desc: "Comercial, financeiro, atendimento, operações e gestão até fazem sua parte, mas a informação nem sempre passa de uma área para outra com clareza, velocidade e contexto." },
        { tag: "Sistemas que não conversam", title: "As ferramentas existem, mas não trabalham juntas", desc: "Sua empresa já pode ter boas ferramentas, mas se elas não trocam informações no momento certo, a equipe vira a ponte entre os sistemas. Isso gera atrasos, retrabalho e inconsistências." },
        { tag: "Dados fragmentados", title: "Informação espalhada em diferentes plataformas ", desc: "Informações importantes ficam divididas entre sistemas, planilhas, relatórios e pessoas. Isso dificulta enxergar a operação completa e acompanhar indicadores com clareza." },
        { tag: "Gestão sem visão real", title: "A liderança decide sem enxergar a operação inteira", desc: "Quando os dados chegam atrasados, incompletos ou espalhados, decisões importantes acabam sendo tomadas por percepção, urgência ou tentativa e erro." },
      ],
      resumoTitle: "O diagnóstico é claro:",
      resumoText: "sua empresa não precisa se adaptar a mais uma solução genérica. Precisa de soluções construídas especificamente para o seu negócio, capazes de conectar processos, sistemas, dados e a forma como sua operação realmente funciona.",
      prejuizoLabel: "Orçamento desperdiçado",
      prejuizoValue: "Tecnologias contratadas\nque não trabalham juntas",
    },

    whatItDoesTitle: "Para quem é a Hiperautomação Empresarial",
    whatItDoesIntro:
      "Para empresas que já têm processos, sistemas e rotinas em funcionamento, mas precisam de soluções personalizadas para conectar a operação, automatizar gargalos específicos e tomar decisões com mais clareza.",
    whatItDoesHighlight:
      "Nossa solução não substitui a sua equipe, ela automatiza o que é repetitivo para que seu time tenha mais tempo para o que realmente exige análise, decisão e relacionamento.",
    whatItDoesSteps: [
      {
        n: "1",
        title: "Para empresas com rotinas, regras e exceções que não cabem em soluções prontas",
        desc: "Cada empresa tem formas próprias de operar. A Hiperautomação é indicada quando ferramentas genéricas já não acompanham os detalhes, exceções e necessidades reais do negócio.",
      },
      {
        n: "2",
        title: "Para operações que desejam que diferentes áreas e sistemas se comuniquem entre si",
        desc: "A hiperautomação é ideal para empresas que usam várias ferramentas, plataformas ou sistemas, mas querem reduzir conexões manuais e fazer as informações fluírem melhor entre setores, equipes e processos.",
      },
      {
        n: "3",
        title: "Para empresas que querem crescer com mais controle e estar à frente da nova era da automação",
        desc: "A Hiperautomação ajuda a preparar a operação para crescer com processos mais conectados, dados mais claros e soluções capazes de evoluir junto com as necessidades da empresa.",
      },
      {
        n: "4",
        title: "Para lideranças que querem ter mais assertividade e visão na tomada de decisões",
        desc: "Com processos, sistemas e dados mais conectados, a gestão ganha uma visão mais confiável da operação e consegue decidir com mais segurança, menos achismo e mais controle sobre o negócio.",
      },
    ],

    // ── Lado direito da seção "O que faz" (A Orquestração) ──
    orquestracao: {
      badge: "Ideal para você",
      canais: [
        { title: "Personalização Total", desc: "Construída sob medida para a sua operação" },
        { title: "Integração Inteligente", desc: "Áreas e sistemas conectados em um só fluxo" },
        { title: "Operação Escalável", desc: "Preparada para crescer com mais controle" },
        { title: "Visão Estratégica", desc: "Dados claros para decisões mais assertivas" },
      ],
      statusLabel: "Construída para você",
      statusTitle: "Potencializa Centro de Controle",
      statusBadge: "● 100% Personalizado",
      latencia: "ESCOPO: SOB MEDIDA",
    },

    // ── Seção exclusiva: escopo de automação ──
    escopoAutomacao: {
      badge: "Automação sob medida",
      title: "Você escolhe o que precisa evoluir dentro da sua empresa",
      description: "A Hiperautomação é construída conforme a realidade da sua empresa, pode ser criada para resolver uma dor específica, automatizar um processo crítico, conectar sistemas ou integrar fluxos entre diferentes áreas. Sempre com possibilidade de supervisão humana e ajustes ao longo do tempo.",
      areas: [
        { label: "Processos críticos" },
        { label: "Times de agentes IA" },
        { label: "Conexão entre áreas" },
        { label: "Integração entre sistemas" },
        { label: "Centralização de dados" },
        { label: "Rotinas automáticas" },
        { label: "Aprovações e validações" },
        { label: "Personalização total" },
        { label: "Relatórios para gestão" },
      ],
      footer: "",
    },

     // ── Seção "Como funciona" (Roadmap) ──
    roadmap: {
      badge: "A jornada",
      title: "Como construímos a ",
      titleHighlight: "hiperautomação empresarial",
      ctaText: "Quero automatizar minha empresa",
      ctaSubtext: "Prazo definido em contrato conforme o escopo do projeto",
    },

   timelineSteps: [
  {
    badge: "Fase 01 - Diagnóstico Inicial",
    text: "Analisamos sua operação para entender processos, sistemas, áreas envolvidas e viabilidade do projeto.",
    detail: "Antes de construir qualquer solução, entendemos a dor, os fluxos atuais, as ferramentas utilizadas e onde a empresa perde tempo, clareza ou produtividade. Assim, conseguimos desenhar uma solução viável, personalizada e alinhada aos objetivos da operação."
  },
  {
    badge: "Fase 02 - Desenho da Solução",
    text: "Criamos os fluxos que mostram como a automação deve funcionar na prática.",
    detail: "Definimos etapas, regras, exceções, responsáveis, integrações e caminhos possíveis para que a solução siga a realidade do negócio e resolva o problema da forma mais eficiente possível."
  },
  {
  badge: "Fase 03 - Aprovação com a Equipe",
  text: "Apresentamos a estrutura proposta, o escopo e o orçamento personalizado do projeto.",
  detail: "Antes do desenvolvimento, validamos expectativas, regras, prioridades, entregas e investimento necessário para garantir que a solução esteja alinhada ao que a operação precisa e ao que a empresa espera."
  },
  {
    badge: "Fase 04 - Agentes, Integrações e Implementação",
    text: "Criamos os agentes, automações e conexões com as tecnologias que sua empresa já utiliza.",
    detail: "Desenvolvemos a solução sob medida, conectando sistemas, dados e fluxos sempre que houver possibilidade técnica, sem exigir trocas desnecessárias de ferramentas."
  },
  {
    badge: "Fase 05 - Validação Operacional",
    text: "Testamos os fluxos, ajustamos cenários reais e estruturamos os dados que serão acompanhados.",
    detail: "Validamos respostas, registros, integrações, exceções e caminhos da automação para reduzir falhas, garantir mais segurança e manter a solução em conformidade com as regras da operação."
  },
  {
    badge: "Fase 06 - Operação Pronta",
    text: "Entregamos a solução pronta para uso, com orientações e estrutura para acompanhar a operação.",
    detail: "Sua empresa recebe a automação finalizada, os alinhamentos necessários, orientações de uso e, quando aplicável, dashboards para acompanhar dados importantes para a gestão."
  },
],

timelineExtra: {
  badge: "Evolução Contínua",
  text: "Se sua empresa continua evoluindo, seus sistemas também precisam acompanhar.",
  detail: "Com acompanhamento mensal, revisamos fluxos, aplicamos melhorias, criamos novas automações e ajustamos a solução conforme a operação cresce, muda ou ganha novas necessidades."
},
   
    // ── Faixa de Stats ──
    stats: [
      { value: "Sob medida", label: "para sua operação" },
      { value: "Áreas", label: "mais conectadas" },
      { value: "Dados", label: "Centralizados para gestão" },
      { value: "Sistemas", label: "integrados" },
    ],

    // ── Seção "Benefícios" ──
    beneficios: {
      badge: "Ganhos para sua empresa",
      titlePre: "Sua empresa depois da ",
      titleHighlight: "hiperautomação.",
      titlePost: "",
      cards: [
        { title: "Mais produtividade no dia a dia", desc: "Sua equipe deixa de gastar tempo com tarefas repetitivas, conferências e repasses manuais, passando a focar em atividades que realmente movimentam o negócio: análise, relacionamento, decisões e projetos estratégicos." },
        { title: "Sistemas e áreas conectados", desc: "Ferramentas, dados e setores passam a trabalhar de forma mais integrada. As informações fluem melhor entre as áreas, reduzindo retrabalho, falhas de comunicação e perda de contexto." },
        { title: "Gestão com dados na mão", desc: "A liderança ganha uma visão mais clara da operação, com informações centralizadas e mais fáceis de acompanhar. As decisões deixam de depender de planilhas defasadas, dados soltos ou percepções do dia a dia." },
        { title: "Mais eficiência com a estrutura atual", desc: "Com menos tarefas manuais, menos retrabalho e melhor aproveitamento da equipe, sua empresa aumenta a capacidade operacional sem precisar resolver todo problema que aparece apenas com novas contratações." },
      ],
      rodape: "Solução personalizada • Integração com seus sistemas • Acompanhamento opcional",
    },

    // ── Seção "CTA + FAQ" (Fechamento) ──
    fechamento: {
      badge: "Vamos conversar",
      title: "Sua empresa está pronta para conectar",
      titleHighlight: "processos, sistemas e dados?",
      // Sua empresa está pronta para liderar a nova era da automação? - Outra opção
      intro: "Agora é a sua vez de potencializar o seu negócio!",
      ctaPrimary: "Solicitar análise inicial",
      ctaSecondary: "Falar com um especialista",
      rodape: "Análise inicial sem custos • Projeto sob medida • Acompanhamento opcional",
      faqTitle: "Perguntas frequentes",
      faqSubtitle: "Tire suas dúvidas sobre a Hiperautomação Empresarial.",
    },

    faq: [
      {
        q: "Quais áreas da empresa a Hiperautomação atende?",
        a: "A Hiperautomação pode atuar em qualquer área da empresa, como financeiro, comercial, atendimento, operações, RH, administrativo, logística, estoque e gestão. A empresa escolhe quais áreas, processos ou rotinas deseja automatizar de acordo com suas necessidades e prioridades.",
      },
      {
        q: "A solução é personalizada ou são pacotes prontos?",
        a: "Temos modelos de automações recorrentes que podem servir como base, mas toda entrega é personalizada conforme a realidade da sua empresa. Cada fluxo, integração, regra e agente é construído de acordo com o processo que precisa ser resolvido.",
      },
      {
        q: "Preciso trocar os sistemas que minha empresa já usa?",
        a: "Não necessariamente. Nossa solução é construída para se conectar às ferramentas que sua empresa já utiliza, como CRMs, ERPs, planilhas, WhatsApp, e-mail e sistemas internos. A integração depende da disponibilidade técnica de cada plataforma, como APIs ou recursos de conexão.",
      },
      {
        q: "Para qual tipo de empresa esse serviço é indicado?",
        a: "A Hiperautomação é indicada para empresas que desejam automatizar processos, reduzir tarefas manuais e ganhar mais clareza sobre a operação. É ideal para negócios que querem conectar áreas, integrar sistemas, aumentar a produtividade da equipe e tomar decisões com mais controle.",
      },
      {
        q: "Existe um diagnóstico antes da implementação?",
        a: "Sim. Antes de qualquer desenvolvimento, fazemos uma análise da operação para entender o problema, identificar o que pode ser automatizado, avaliar a viabilidade do projeto e apresentar um escopo com orçamento. O desenvolvimento só começa depois de tudo aprovado e alinhado.",
      },
      {
        q: "A Hiperautomação substitui minha equipe?",
        a: "Não. O objetivo não é substituir colaboradores, mas liberar a equipe de tarefas repetitivas, manuais e operacionais para que ela tenha mais tempo para atividades que exigem análise, decisão, relacionamento e estratégia.",
      },
      {
        q: "A operação fica 100% automática?",
        a: "Não prometemos isso. Os processos podem ser automatizados ou semiautomatizados, dependendo do que faz sentido para cada fluxo. Mesmo em automações avançadas, recomendamos supervisão humana para acompanhar a operação, validar exceções e garantir mais segurança.",
      },
      {
        q: "Vocês oferecem acompanhamento depois da entrega?",
        a: "Sim. Oferecemos acompanhamento mensal opcional, contratado à parte. Nele, revisamos fluxos, aplicamos melhorias, criamos novas automações, ajustamos integrações e evoluímos a solução conforme o negócio cresce ou muda.",
      },
      {
        q: "Quanto tempo leva a implementação?",
        a: "O prazo varia conforme o escopo do projeto, o número de áreas envolvidas, a complexidade dos fluxos e as integrações necessárias. Após o diagnóstico inicial e a aprovação da proposta, definimos o prazo em contrato para que sua empresa tenha previsibilidade sobre cada fase.",
      },
      {
        q: "A Hiperautomação precisa envolver a empresa inteira?",
        a: "Não. A Hiperautomação pode ser criada para resolver uma dor específica, automatizar um processo crítico, desenvolver um agente personalizado ou conectar fluxos entre diferentes áreas. O escopo é definido conforme a necessidade da empresa.",
      },
    ],
  },
] as const;