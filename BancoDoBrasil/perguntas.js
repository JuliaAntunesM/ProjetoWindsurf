const perguntas = [
  {pergunta: "A operação que transfere um bem móvel ou imóvel do devedor ao credor como garantia em compra a crédito é:", opcoes: ["Hipoteca", "Fiança bancária", "Alienação fiduciária", "Penhor", "Aval bancário"], correta: 2},
  {pergunta: "O acesso bancário realizado via terminais de computador, caixas eletrônicos e bancos 24h é chamado de:", opcoes: ["Banco de Dados", "Débito Automático", "Home Office Banking", "Internet Banking", "Remote Banking"], correta: 3},
  {pergunta: "O tipo de 'dinheiro de plástico' mais comum no comércio de rua é o:", opcoes: ["cartão cidadão", "cartão de crédito", "cartão de senhas", "talão de cheques", "internet banking"], correta: 1},
  {pergunta: "Nesse regime, com alta mobilidade de capitais, ocorre que:", opcoes: ["diferenças de inflação não alteram câmbio real", "políticas expansionistas nos EUA causam recessão no Brasil", "políticas monetárias seriam sempre contracionistas", "câmbio com a moeda europeia seria fixo", "as taxas de juros entre Brasil e EUA se aproximariam"], correta: 4},
  {pergunta: "Uma redução da taxa de juros dos EUA em relação ao Brasil tenderia a:", opcoes: ["valorizar o Real em relação ao Dólar", "estimular exportações", "reduzir reservas cambiais", "aumentar fluxo de capitais ao exterior", "desestimular importações dos EUA"], correta: 0},
  {pergunta: "Se os preços no Brasil e nos EUA estiverem cotados em mesma moeda e houver desvalorização real do Real, as exportações brasileiras:", opcoes: ["desestimulam", "tornam viagens ao exterior mais baratas", "ficam mais caras", "ficam mais baratas"], correta: 3},
  {pergunta: "A política de segurança cibernética exige controles para rastreabilidade da informação e proteção de quais dados?", opcoes: ["relações empresariais", "situações sigilosas", "bases financeiras", "questões litigiosas", "informações sensíveis"], correta: 4},
  {pergunta: "Se pode haver discriminação religiosa na instituição, o Código de Ética do Banco do Brasil protege principalmente as diferenças de:", opcoes: ["pessoais", "religiosas", "cambiais", "preventivas", "alteradas"], correta: 1},
  {pergunta: "Segundo a Carta Circular 4.001/2020, quando há indícios de aportes financeiros incompatíveis com a capacidade do cliente, a medida adequada é:", opcoes: ["monitoramento", "bloqueio", "interdição", "exclusão", "análise"], correta: 0},
  {pergunta: "O Conselho Monetário Nacional tem a competência de:", opcoes: ["regular compensação de cheques", "autorizar emissão de papel-moeda", "determinar a taxa Selic", "autorizar funcionamento de instituições", "emitir títulos do CMN"], correta: 1},
  {pergunta: "Nesse regime, a taxa de câmbio é determinada por:", opcoes: ["variação das reservas internacionais", "política monetária do Banco Central", "interação entre oferta e demanda com intervenções esporádicas do BC"], correta: 2},
  {pergunta: "O modelo de negócios das fintechs/bancos digitais é baseado principalmente em:", opcoes: ["atendimento presencial", "uso de recursos tecnológicos avançados"], correta: 1},
  {pergunta: "Não configura arranjo de pagamento bancário:", opcoes: ["compra com cartão de crédito", "cartão de débito", "cartão pré‑pago", "compra com dinheiro vivo entre amigos"], correta: 3},
  {pergunta: "Quando empresários usam o Real para calcular custos de mercadorias, a moeda cumpre a função de:", opcoes: ["reserva de valor", "meio de troca", "unidade de medida de valor"], correta: 2},
  {pergunta: "O mercado primário de títulos públicos existe para mobilizar recursos para:", opcoes: ["combate à inflação", "financiamento das empresas", "financiamento dos déficits do governo"], correta: 2},
  {pergunta: "O crédito rural destinado ao financiamento das despesas normais do ciclo produtivo é denominado:", opcoes: ["investimento", "industrialização", "custeio"], correta: 2},
  {pergunta: "Se em 22/12/2022 o dólar foi cotado a R$ 5,1865 e em 23/12/2022 a R$ 5,1439, nesse dia o Real:", opcoes: ["apreciou", "depreciou", "subvalorizou"], correta: 0},
  {pergunta: "Desde 1999, com o regime de metas de inflação, a principal variável operacional usada pelo Banco Central para controlar a inflação é a:", opcoes: ["taxa de câmbio", "compulsório", "taxa Selic"], correta: 2},
  {pergunta: "Nos sistemas de informações bancários, o agente comercial encontra análises apuradas sobre o comportamento dos clientes, as quais devem ser utilizadas para:", opcoes: ["monitorar o alcance da distribuição dos serviços ofertados", "incorporar as melhores ofertas da concorrência", "personalizar o atendimento e as ofertas aos clientes"], correta: 2},
  {pergunta: "Se empresários usam o Real para calcular os custos de mercadorias, a moeda atua como:", opcoes: ["reserva de valor", "meio de troca", "unidade de medida de valor", "meio de financiamento", "meio de compensação bancária"], correta: 2},
  {
    pergunta: "No contexto de segurança da informação, o que é autenticação multifator (MFA)?",
    opcoes: [
      "Requer apenas um nome de usuário e senha",
      "Técnica que protege contra malwares em redes corporativas",
      "Processo que combina dois ou mais fatores (senha e biometria, por exemplo)",
      "Solução que monitora redes para acessos não autorizados",
      "Recurso que automatiza backup de dados sensíveis"
    ],
    correta: 2
  },
  {
    pergunta: "O que significa a sigla DNS no contexto da internet?",
    opcoes: [
      "Domain Name System",
      "Data Network System",
      "Digital Network Server",
      "Direct Name Service",
      "Dynamic Network Setup"
    ],
    correta: 0
  },
  {
    pergunta: "No Microsoft Word, o atalho Ctrl + Enter é usado para qual finalidade?",
    opcoes: [
      "Inserir uma quebra de página",
      "Criar uma nova seção no documento",
      "Salvar o documento atual",
      "Duplicar o texto selecionado",
      "Abrir a caixa de diálogo \"Imprimir\""
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função do \"Gerenciador de Dispositivos\" no Windows?",
    opcoes: [
      "Atualizar automaticamente os drivers instalados",
      "Configurar permissões para usuários do sistema",
      "Monitorar o desempenho dos dispositivos de hardware",
      "Gerenciar e diagnosticar problemas de hardware",
      "Realizar backups de dispositivos móveis"
    ],
    correta: 3
  },
  {
    pergunta: "Assinale a alternativa que NÃO corresponde a um protocolo de e‑mail:",
    opcoes: [
      "SMTP",
      "FTP",
      "POP3",
      "IMAP",
      "HTTP"
    ],
    correta: 1
  },
  {
    pergunta: "Os certificados digitais são usados para assegurar:",
    opcoes: [
      "criptografia de discos rígidos",
      "segurança no uso de redes Wi‑Fi públicas",
      "identidade e assinatura digital segura",
      "proteção contra vírus e malwares",
      "autenticação biométrica"
    ],
    correta: 2
  },
  {
    pergunta: "Ferramentas antivírus de novas gerações utilizam principalmente:",
    opcoes: [
      "algoritmos genéticos e heurística genérica",
      "análise comportamental, controle de integridade e detecção multinível",
      "apenas assinaturas digitais",
      "aprendizado genético e rollback automático",
      "varredura simples por listas negras"
    ],
    correta: 1
  },
  {
    pergunta: "Qual protocolo é essencial para transferência segura de páginas Web?",
    opcoes: [
      "FTP",
      "SMTP",
      "SSH",
      "HTTPS",
      "Telnet"
    ],
    correta: 3
  },
  {
    pergunta: "Um cliente aplicou R$ 10.000,00 a uma taxa de juros compostos de 10% ao ano, por 3 anos, para comprar um produto de R$ 3.500,00. Qual o valor aproximado necessário para investir hoje?",
    opcoes: [
      "R$ 2.625,90",
      "R$ 2.700,00",
      "R$ 2.800,00",
      "R$ 2.850,00",
      "R$ 2.625,90"
    ],
    correta: 0
  },
  {
    pergunta: "Sobre o novo regime de juros do BNDES, os contratos desde 2018 são corrigidos pela:",
    opcoes: [
      "TJLP",
      "SELIC",
      "TLP (Taxa de Longo Prazo)",
      "CDI",
      "IPCA"
    ],
    correta: 2
  },
  {
    pergunta: "Assinale a alternativa que não corresponde a um protocolo de e‑mail:",
    opcoes: [
      "SMTP",
      "FTP",
      "POP3",
      "IMAP",
      "HTTP"
    ],
    correta: 1
  },
  {
    pergunta: "Certificados digitais são usados para garantir:",
    opcoes: [
      "criptografia de discos rígidos",
      "segurança em redes Wi‑Fi públicas",
      "identidade e assinatura digital segura",
      "proteção contra malwares",
      "autenticação biométrica"
    ],
    correta: 2
  },
  {
    pergunta: "Ferramentas antivírus modernas utilizam:",
    opcoes: [
      "algoritmos genéticos e heurística genérica",
      "análise comportamental, controle de integridade e detecção multinível",
      "apenas assinaturas digitais",
      "aprendizado genético com rollback automático",
      "varredura por listas negras"
    ],
    correta: 1
  },
  {
    pergunta: "No contexto de internet, DNS significa:",
    opcoes: [
      "Domain Name System",
      "Data Network Service",
      "Direct Name Server",
      "Digital Network System",
      "Distributed Name Service"
    ],
    correta: 0
  },
  {
    pergunta: "Um capital de R$ 5.000,00 foi aplicado a juros simples de 1,5% ao mês durante 8 meses. Qual o valor total acumulado ao final desse período?",
    opcoes: [
      "R$ 5.400,00",
      "R$ 5.600,00",
      "R$ 5.600,00",
      "R$ 6.000,00",
      "R$ 6.200,00"
    ],
    correta: 2
  },
  {
    pergunta: "Analise a frase: \"Os funcionários entregaram os relatórios que estavam atrasados.\" Assinale a alternativa correta sobre o termo \"que estavam atrasados\".",
    opcoes: [
      "Adjunto adverbial de tempo",
      "Oração subordinada adjetiva restritiva",
      "Predicativo do sujeito",
      "Complemento verbal",
      "Predicado nominal"
    ],
    correta: 1
  },
  {
    pergunta: "Qual das alternativas apresenta um instrumento de política monetária usado pelo Banco Central para controlar a inflação?",
    opcoes: [
      "Conta garantida",
      "Caderneta de poupança",
      "Taxa Selic",
      "Crédito consignado",
      "Cheque especial"
    ],
    correta: 2
  },
  {
    pergunta: "No Windows 10, para abrir rapidamente o Gerenciador de Tarefas, deve-se pressionar:",
    opcoes: [
      "Ctrl + Alt + Delete",
      "Ctrl + Shift + Esc",
      "Alt + F4",
      "Ctrl + Shift + Esc",
      "Win + T"
    ],
    correta: 1
  },
  {
    pergunta: "Se João é mais alto que Carlos e Carlos é mais alto que Pedro, qual a alternativa correta?",
    opcoes: [
      "Pedro é mais alto que João",
      "João é mais baixo que Pedro",
      "João é mais alto que Pedro",
      "Carlos é mais baixo que Pedro",
      "Pedro é mais alto que Carlos"
    ],
    correta: 2
  },
  {
    pergunta: "Um empréstimo de R$ 12.000,00 será pago em 4 parcelas mensais e iguais, com taxa de juros simples de 2% ao mês. Qual o valor aproximado de cada parcela?",
    opcoes: [
      "R$ 3.060,00",
      "R$ 3.120,00",
      "R$ 3.180,00",
      "R$ 3.240,00",
      "R$ 3.300,00"
    ],
    correta: 3
  },
  {
    pergunta: "Em “Embora estivesse cansado, ele continuou trabalhando”, a oração subordinada é:",
    opcoes: [
      "Subordinada adjetiva explicativa",
      "Subordinada substantiva objetiva",
      "Subordinada adverbial concessiva",
      "Subordinada adverbial causal",
      "Subordinada adverbial condicional"
    ],
    correta: 2
  },
  {
    pergunta: "O que é o Sistema Financeiro Nacional (SFN)?",
    opcoes: [
      "Conjunto de órgãos e instituições que regulam a economia brasileira",
      "Estrutura formada por órgãos normativos, operadores e instituições financeiras",
      "Banco Central do Brasil apenas",
      "Sistema exclusivo de bancos públicos",
      "Rede de agências bancárias"
    ],
    correta: 1
  },
  {
    pergunta: "Qual o sistema de arquivos mais indicado para compatibilidade entre Windows e Linux em dispositivos USB?",
    opcoes: [
      "NTFS",
      "FAT32",
      "EXT4",
      "HFS+",
      "exFAT"
    ],
    correta: 1
  },
  {
    pergunta: "Se todos os carros são veículos e alguns veículos são elétricos, então:",
    opcoes: [
      "Todos os carros são elétricos",
      "Nenhum carro é elétrico",
      "Alguns carros são elétricos",
      "Alguns veículos são elétricos",
      "Nenhuma das alternativas anteriores"
    ],
    correta: 3
  },
  {
    pergunta: "Uma pessoa aplica R$ 8.000,00 a uma taxa de juros compostos de 1% ao mês. Qual será o montante após 6 meses?",
    opcoes: [
      "R$ 8.480,00",
      "R$ 8.500,00",
      "R$ 8.491,58",
      "R$ 8.600,00",
      "R$ 8.700,00"
    ],
    correta: 2
  },
  {
    pergunta: "Na frase “Ele disse que viria amanhã”, o termo “que viria amanhã” é:",
    opcoes: [
      "Oração subordinada adjetiva",
      "Oração subordinada adverbial",
      "Oração subordinada substantiva objetiva direta",
      "Oração coordenada",
      "Oração subordinada causal"
    ],
    correta: 2
  },
  {
    pergunta: "Sobre o cheque especial, qual afirmativa é correta?",
    opcoes: [
      "É uma linha de crédito sem juros",
      "Pode ser usado apenas por correntistas com conta salário",
      "É uma modalidade de crédito pré-aprovado para correntistas, sujeita a juros",
      "Tem limite fixo para todas as contas, independente do perfil",
      "É um tipo de cartão de crédito"
    ],
    correta: 2
  },
  {
    pergunta: "Qual comando do Windows é utilizado para verificar as configurações de rede?",
    opcoes: [
      "ping",
      "ipconfig",
      "netstat",
      "tracert",
      "nslookup"
    ],
    correta: 1
  },
  {
    pergunta: "Em uma sala, todos os homens usam chapéu azul, e algumas mulheres usam chapéu azul. Então:",
    opcoes: [
      "Todos usam chapéu azul",
      "Nenhuma mulher usa chapéu azul",
      "Algumas pessoas usam chapéu azul",
      "Nenhum homem usa chapéu azul",
      "Nenhuma das anteriores"
    ],
    correta: 2
  },
  {
    pergunta: "Um capital de R$ 6.000,00 foi aplicado a juros simples de 2% ao mês durante 5 meses. Qual o valor dos juros ao final desse período?",
    opcoes: [
      "R$ 600,00",
      "R$ 500,00",
      "R$ 600,00",
      "R$ 700,00",
      "R$ 800,00"
    ],
    correta: 2
  },
  {
    pergunta: "Assinale a frase em que há erro de concordância verbal:",
    opcoes: [
      "Os alunos fizeram a prova com dedicação.",
      "A equipe está preparada para o desafio.",
      "Houveram problemas durante a apresentação.",
      "Ele e seus amigos viajaram ontem.",
      "As flores desabrocharam cedo."
    ],
    correta: 2
  },
  {
    pergunta: "Sobre o Fundo Garantidor de Créditos (FGC), assinale a alternativa correta:",
    opcoes: [
      "Garante depósitos ilimitados em instituições financeiras.",
      "É um órgão do Banco Central.",
      "Garante até R$ 250 mil por CPF e por instituição financeira.",
      "Só cobre aplicações em poupança.",
      "Não garante depósitos de pessoas jurídicas."
    ],
    correta: 2
  },
  {
    pergunta: "No Microsoft Word, qual a função do atalho Ctrl + B?",
    opcoes: [
      "Abrir documento",
      "Salvar documento",
      "Aplicar ou remover negrito no texto selecionado",
      "Colar conteúdo",
      "Copiar conteúdo"
    ],
    correta: 2
  },
  {
    pergunta: "Se todo A é B, e nenhum B é C, então:",
    opcoes: [
      "Todo A é C",
      "Alguns A são C",
      "Nenhum A é C",
      "Alguns C são A",
      "Todo C é A"
    ],
    correta: 2
  },
  {
    pergunta: "Um empréstimo de R$ 5.000,00 foi feito a juros simples de 2% ao mês. Qual será o valor total pago após 6 meses?",
    opcoes: [
      "R$ 5.600,00",
      "R$ 6.000,00",
      "R$ 5.600,00",
      "R$ 6.200,00",
      "R$ 6.400,00"
    ],
    correta: 2
  },
  {
    pergunta: "O Banco Central do Brasil tem como principal objetivo:",
    opcoes: [
      "Garantir a estabilidade do sistema financeiro e o poder de compra da moeda.",
      "Controlar exclusivamente a política fiscal do país.",
      "Emitir ações para instituições financeiras.",
      "Garantir a estabilidade da moeda e o funcionamento do sistema financeiro.",
      "Administrar fundos de pensão dos bancos públicos."
    ],
    correta: 3
  },
  {
    pergunta: "Analise a frase: \"Os documentos, que foram entregues ontem, estão na mesa.\" Assinale a alternativa correta:",
    opcoes: [
      "O trecho “que foram entregues ontem” é uma oração subordinada adjetiva restritiva.",
      "O trecho “que foram entregues ontem” é uma oração subordinada adjetiva explicativa.",
      "O trecho “que foram entregues ontem” é uma oração subordinada adjetiva explicativa.",
      "O trecho “que foram entregues ontem” é uma oração subordinada substantiva.",
      "O trecho “que foram entregues ontem” é uma oração coordenada sindética."
    ],
    correta: 2
  },
  {
    pergunta: "No sistema operacional Windows, qual o comando que exibe as configurações de IP do computador?",
    opcoes: [
      "ping",
      "tracert",
      "ipconfig",
      "netstat",
      "nslookup"
    ],
    correta: 2
  },
  {
    pergunta: "Se João é mais alto que Carlos e Carlos é mais alto que Pedro, qual das alternativas é verdadeira?",
    opcoes: [
      "João é mais baixo que Pedro.",
      "Pedro é mais alto que João.",
      "João é mais alto que Pedro.",
      "Carlos é mais baixo que Pedro.",
      "Nenhuma das anteriores."
    ],
    correta: 2
  },
  {
    pergunta: "Uma aplicação de R$ 3.000,00 foi feita a juros compostos de 1,2% ao mês. Qual será o montante após 5 meses?",
    opcoes: [
      "R$ 3.180,00",
      "R$ 3.200,00",
      "R$ 3.185,36",
      "R$ 3.250,00",
      "R$ 3.300,00"
    ],
    correta: 2
  },
  {
    pergunta: "Qual a função da Taxa Selic?",
    opcoes: [
      "Controlar o crescimento da produção agrícola",
      "Estimular o investimento estrangeiro",
      "Servir como taxa básica de juros para economia brasileira",
      "Controlar a emissão de moedas estrangeiras",
      "Definir o câmbio oficial do Real"
    ],
    correta: 2
  },
  {
    pergunta: "Na frase: “Se ele tivesse estudado, teria passado no concurso”, qual o tipo de oração “Se ele tivesse estudado”?",
    opcoes: [
      "Subordinada adverbial causal",
      "Subordinada adverbial concessiva",
      "Subordinada adverbial condicional",
      "Subordinada adjetiva restritiva",
      "Coordenada"
    ],
    correta: 2
  },
  {
    pergunta: "O que significa o atalho Ctrl + C no Windows?",
    opcoes: [
      "Colar",
      "Recortar",
      "Copiar",
      "Salvar",
      "Abrir"
    ],
    correta: 2
  },
  {
    pergunta: "Em uma sequência, cada número é o dobro do anterior. Se o primeiro número é 3, qual é o quinto número?",
    opcoes: [
      "12",
      "24",
      "48",
      "96",
      "192"
    ],
    correta: 2
  }
]; 