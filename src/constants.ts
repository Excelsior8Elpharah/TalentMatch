import { 
  Candidate, 
  Job, 
  Stakeholder, 
  Risk, 
  RoadmapItem, 
  KPI, 
  MatchResult, 
  Application,
  StrategicDecision,
  TechnicalDebt,
  StrategicComparison,
  ExecutiveRecommendation
} from './types';

export const CANDIDATES: Candidate[] = [
  {
    id: 'c1',
    name: 'Ana Silva',
    email: 'ana.silva@email.com',
    phone: '(11) 98888-7777',
    location: 'São Paulo, SP',
    seniority: 'Sênior',
    currentRole: 'Software Engineer',
    skills: ['React', 'Node.js', 'Typescript', 'AWS', 'Docker'],
    experienceYears: 8,
    education: 'Ciência da Computação - USP',
    status: 'Entrevista',
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-04-20T14:30:00Z'
  },
  {
    id: 'c2',
    name: 'Bruno Oliveira',
    email: 'bruno.o@email.com',
    phone: '(21) 97777-6666',
    location: 'Rio de Janeiro, RJ',
    seniority: 'Pleno',
    currentRole: 'Full Stack Developer',
    skills: ['Java', 'Spring Boot', 'PostgreSQL', 'React'],
    experienceYears: 4,
    education: 'Sistemas de Informação - UFRJ',
    status: 'Análise',
    createdAt: '2026-02-10T09:00:00Z',
    updatedAt: '2026-04-28T16:00:00Z'
  },
  {
    id: 'c3',
    name: 'Carla Santos',
    email: 'carla.santos@email.com',
    phone: '(31) 96666-5555',
    location: 'Belo Horizonte, MG',
    seniority: 'Júnior',
    currentRole: 'Backend Developer Intern',
    skills: ['Python', 'Django', 'SQL', 'Git'],
    experienceYears: 1,
    education: 'Engenharia de Software - PUC Minas',
    status: 'Novo',
    createdAt: '2026-04-01T15:00:00Z',
    updatedAt: '2026-04-01T15:00:00Z'
  },
  {
    id: 'c4',
    name: 'David Costa',
    email: 'david.c@email.com',
    phone: '(11) 95555-4444',
    location: 'Campinas, SP',
    seniority: 'Especialista',
    currentRole: 'DevOps Architect',
    skills: ['Kubernetes', 'Terraform', 'CI/CD', 'Go', 'Azure'],
    experienceYears: 12,
    education: 'MBA em Cloud Architecture - FIAP',
    status: 'Entrevista',
    createdAt: '2026-03-20T11:30:00Z',
    updatedAt: '2026-04-25T10:00:00Z'
  },
  {
    id: 'c5',
    name: 'Elena Martins',
    email: 'elena.m@email.com',
    phone: '(41) 94444-3333',
    location: 'Curitiba, PR',
    seniority: 'Sênior',
    currentRole: 'Product Designer',
    skills: ['Figma', 'UX Research', 'Design Systems', 'Prototyping'],
    experienceYears: 7,
    education: 'Design - UTFPR',
    status: 'Teste Técnico',
    createdAt: '2026-02-28T08:45:00Z',
    updatedAt: '2026-04-22T09:20:00Z'
  },
  {
    id: 'c6',
    name: 'Felipe Rocha',
    email: 'felipe.r@email.com',
    phone: '(11) 93333-2222',
    location: 'São Bernardo do Campo, SP',
    seniority: 'Pleno',
    currentRole: 'Mobile Developer',
    skills: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
    experienceYears: 3,
    education: 'Análise e Desenv. de Sistemas - FATEC',
    status: 'Análise',
    createdAt: '2026-04-10T14:00:00Z',
    updatedAt: '2026-04-15T11:10:00Z'
  },
  {
    id: 'c7',
    name: 'Gabriela Lima',
    email: 'gabi.lima@email.com',
    phone: '(27) 92222-1111',
    location: 'Vitória, ES',
    seniority: 'Sênior',
    currentRole: 'Data Scientist',
    skills: ['Python', 'Scikit-Learn', 'PyTorch', 'SQL', 'BigQuery'],
    experienceYears: 6,
    education: 'Mestrado em Data Science - UFES',
    status: 'Aprovado',
    createdAt: '2026-01-05T09:00:00Z',
    updatedAt: '2026-04-29T17:00:00Z'
  },
  {
    id: 'c8',
    name: 'Hugo Mendes',
    email: 'hugo.m@email.com',
    phone: '(11) 91111-0000',
    location: 'São Paulo, SP',
    seniority: 'Júnior',
    currentRole: 'Frontend Developer',
    skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
    experienceYears: 2,
    education: 'Digital House - Web Fullstack',
    status: 'Reprovado',
    createdAt: '2026-03-01T10:00:00Z',
    updatedAt: '2026-04-10T15:30:00Z'
  },
  {
    id: 'c9',
    name: 'Isabela Ferreira',
    email: 'isabela.f@email.com',
    phone: '(11) 99999-8888',
    location: 'São Paulo, SP',
    seniority: 'Pleno',
    currentRole: 'QA Engineer',
    skills: ['Selenium', 'Cypress', 'Java', 'JUnit'],
    experienceYears: 5,
    education: 'Sistemas de Informação - Mackenzie',
    status: 'Análise',
    createdAt: '2026-04-15T16:00:00Z',
    updatedAt: '2026-04-15T16:00:00Z'
  },
  {
    id: 'c10',
    name: 'João Pedro',
    email: 'jp@email.com',
    phone: '(11) 98765-4321',
    location: 'Barueri, SP',
    seniority: 'Estágio',
    currentRole: 'Intern',
    skills: ['JavaScript', 'HTML', 'Logic'],
    experienceYears: 0,
    education: 'Cursando Sistemas - UNIP',
    status: 'Novo',
    createdAt: '2026-04-20T10:00:00Z',
    updatedAt: '2026-04-20T10:00:00Z'
  },
  {
    id: 'c11',
    name: 'Katia Regina',
    email: 'katia.r@email.com',
    phone: '(31) 91234-5678',
    location: 'Belo Horizonte, MG',
    seniority: 'Diretoria',
    currentRole: 'CTO / Engineering Director',
    skills: ['Leadership', 'System Design', 'Strategic Planning', 'Agile'],
    experienceYears: 18,
    education: 'Doutorado em Ciência da Computação - UFMG',
    status: 'Entrevista',
    createdAt: '2026-01-20T08:00:00Z',
    updatedAt: '2026-04-15T09:00:00Z'
  },
  {
    id: 'c12',
    name: 'Lucas Martins',
    email: 'lucas.m@email.com',
    phone: '(11) 92345-6789',
    location: 'São Paulo, SP',
    seniority: 'Pleno',
    currentRole: 'Backend Developer',
    skills: ['PHP', 'Laravel', 'MySQL', 'Redis'],
    experienceYears: 4,
    education: 'ADS - Impacta',
    status: 'Teste Técnico',
    createdAt: '2026-03-10T11:00:00Z',
    updatedAt: '2026-04-29T10:00:00Z'
  }
];

export const JOBS: Job[] = [
  {
    id: 'j1',
    title: 'Senior Frontend Engineer (React)',
    department: 'Engenharia de Produto',
    location: 'São Paulo, SP',
    seniority: 'Sênior',
    workModel: 'Híbrido',
    salary: { min: 14000, max: 19000 },
    description: 'Liderança técnica no desenvolvimento da interface do TalentMatch.',
    requirements: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    desirable: ['Testing Library', 'Framer Motion', 'Experience with Design Systems'],
    responsibilities: 'Responsável pela evolução da plataforma TalentMatch Alpha, liderando decisões de arquitetura frontend e mentoria técnica.',
    status: 'Aberta',
    recruiterOwner: 'u1',
    createdAt: '2026-03-01T08:00:00Z',
    updatedAt: '2026-04-20T10:00:00Z'
  },
  {
    id: 'j2',
    title: 'Backend Developer (Node.js)',
    department: 'Core Infrastructure',
    location: 'Remoto',
    seniority: 'Pleno',
    workModel: 'Remoto',
    salary: { min: 10000, max: 14000 },
    description: 'Responsável pela arquitetura de APIs e integrações robustas.',
    requirements: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    desirable: ['Microservices', 'Kubernetes', 'Clean Architecture'],
    responsibilities: 'Desenvolver as APIs de integração com sistemas legados e motor de busca semântica.',
    status: 'Aberta',
    recruiterOwner: 'u1',
    createdAt: '2026-04-01T09:00:00Z',
    updatedAt: '2026-04-01T09:00:00Z'
  },
  {
    id: 'j3',
    title: 'Data Scientist (GenAI)',
    department: 'Inteligência Artificial',
    location: 'São Paulo, SP',
    seniority: 'Sênior',
    workModel: 'Híbrido',
    salary: { min: 16000, max: 22000 },
    description: 'Desenvolvimento de algoritmos de matching e processamento de linguagem natural.',
    requirements: ['Python', 'Machine Learning', 'NLP', 'Vector Databases'],
    desirable: ['Experience with Gemini API', 'PyTorch', 'LangChain'],
    responsibilities: 'Melhorar o motor de matching semântico e implementar soluções de parsing de documentos complexos.',
    status: 'Aberta',
    recruiterOwner: 'u2',
    createdAt: '2026-04-15T15:00:00Z',
    updatedAt: '2026-04-15T15:00:00Z'
  },
  {
    id: 'j4',
    title: 'Product Designer (UX/UI)',
    department: 'Design',
    location: 'Rio de Janeiro, RJ',
    seniority: 'Pleno',
    workModel: 'Híbrido',
    salary: { min: 9000, max: 13000 },
    description: 'Foco na usabilidade e experiência do recrutador e candidatos.',
    requirements: ['Figma', 'UX Research', 'Interactivity Design'],
    desirable: ['Design Systems', 'A/B Testing', 'Basic Frontend knowledge'],
    responsibilities: 'Criar interfaces intuitivas para o dashboard executivo e fluxo de análise de candidatos.',
    status: 'Aberta',
    recruiterOwner: 'u2',
    createdAt: '2026-03-15T10:00:00Z',
    updatedAt: '2026-04-25T14:00:00Z'
  },
  {
    id: 'j5',
    title: 'DevOps Specialist',
    department: 'Infrastructure',
    location: 'Remoto',
    seniority: 'Especialista',
    workModel: 'Remoto',
    salary: { min: 18000, max: 25000 },
    description: 'Arquiteto de infraestrutura cloud e automação de deploys.',
    requirements: ['Terraform', 'Kubernetes', 'AWS', 'Security'],
    desirable: ['Golang', 'SRE Principles', 'Cost Management'],
    responsibilities: 'Garantir a disponibilidade global da plataforma e segurança da ponte com o sistema legado.',
    status: 'Aberta',
    recruiterOwner: 'u1',
    createdAt: '2026-02-01T09:00:00Z',
    updatedAt: '2026-04-10T11:00:00Z'
  },
  {
    id: 'j6',
    title: 'Engineering Manager',
    department: 'Liderança Técnica',
    location: 'São Paulo, SP',
    seniority: 'Diretoria',
    workModel: 'Híbrido',
    salary: { min: 25000, max: 35000 },
    description: 'Gestão estratégica de pessoas e tecnologia em larga escala.',
    requirements: ['Engineering Management', 'Strategy', 'Scalability'],
    desirable: ['MBA', 'Past engineering experience', 'Conflict Resolution'],
    responsibilities: 'Gestão de múltiplos times de engenharia e alinhamento do roadmap técnico com o negócio.',
    status: 'Aberta',
    recruiterOwner: 'u1',
    createdAt: '2026-01-10T08:00:00Z',
    updatedAt: '2026-03-15T10:00:00Z'
  },
  {
    id: 'j7',
    title: 'QA Automation Engineer',
    department: 'Engenharia de Qualidade',
    location: 'São Paulo, SP',
    seniority: 'Pleno',
    workModel: 'Híbrido',
    salary: { min: 8000, max: 12000 },
    description: 'Garantia da qualidade através de automação de testes E2E.',
    requirements: ['Cypress', 'Playwright', 'JavaScript'],
    desirable: ['CI Integration', 'Mobile Testing', 'Load Testing'],
    responsibilities: 'Responsável pela automação de testes funcionais e de integração da nova camada de IA.',
    status: 'Aberta',
    recruiterOwner: 'u2',
    createdAt: '2026-04-20T09:00:00Z',
    updatedAt: '2026-04-20T09:00:00Z'
  },
  {
    id: 'j8',
    title: 'Java Developer (Legacy Bridge)',
    department: 'Arquitetura de Integração',
    location: 'Belo Horizonte, MG',
    seniority: 'Sênior',
    workModel: 'Presencial',
    salary: { min: 13000, max: 17000 },
    description: 'Sincronização e modernização de dados legados corporativos.',
    requirements: ['Java 8/11', 'Oracle DB', 'Mainframe Connectivity'],
    desirable: ['Spring Boot', 'Kafka', 'Legacy Modernization'],
    responsibilities: 'Manutenção e evolução da ponte de dados entre o Mainframe e a nova infraestrutura em nuvem.',
    status: 'Aberta',
    recruiterOwner: 'u3',
    createdAt: '2026-04-05T10:00:00Z',
    updatedAt: '2026-04-05T10:00:00Z'
  }
];

export const APPLICATIONS: Application[] = [
  { id: 'a1', candidateId: 'c1', jobId: 'j1', stage: 'Entrevista', source: 'LinkedIn', recruiterOwner: 'u1', applicationDate: '2026-03-05T10:00:00Z' },
  { id: 'a2', candidateId: 'c2', jobId: 'j2', stage: 'Análise', source: 'Indicação', recruiterOwner: 'u1', applicationDate: '2026-04-02T11:00:00Z' },
  { id: 'a3', candidateId: 'c4', jobId: 'j5', stage: 'Entrevista', source: 'LinkedIn', recruiterOwner: 'u1', applicationDate: '2026-03-25T09:00:00Z' },
  { id: 'a4', candidateId: 'c5', jobId: 'j4', stage: 'Teste Técnico', source: 'Gupy', recruiterOwner: 'u2', applicationDate: '2026-03-10T14:00:00Z' },
  { id: 'a5', candidateId: 'c7', jobId: 'j3', stage: 'Aprovado', source: 'LinkedIn', recruiterOwner: 'u2', applicationDate: '2026-02-01T10:00:00Z' },
  { id: 'a6', candidateId: 'c11', jobId: 'j6', stage: 'Entrevista', source: 'Headhunter', recruiterOwner: 'u1', applicationDate: '2026-02-05T08:00:00Z' },
  { id: 'a7', candidateId: 'c12', jobId: 'j8', stage: 'Teste Técnico', source: 'Site Próprio', recruiterOwner: 'u3', applicationDate: '2026-04-10T11:00:00Z' },
  { id: 'a8', candidateId: 'c9', jobId: 'j7', stage: 'Análise', source: 'LinkedIn', recruiterOwner: 'u2', applicationDate: '2026-04-21T09:00:00Z' },
  { id: 'a9', candidateId: 'c1', jobId: 'j2', stage: 'Reprovado', source: 'LinkedIn', recruiterOwner: 'u1', applicationDate: '2026-03-05T10:30:00Z' },
  { id: 'a10', candidateId: 'c2', jobId: 'j1', stage: 'Análise', source: 'Indicação', recruiterOwner: 'u1', applicationDate: '2026-04-02T11:30:00Z' },
  // ... more mappings to reach close to 20
  { id: 'a11', candidateId: 'c12', jobId: 'j2', stage: 'Análise', source: 'Site Próprio', recruiterOwner: 'u1', applicationDate: '2026-04-15T10:00:00Z' },
  { id: 'a12', candidateId: 'c6', jobId: 'j1', stage: 'Análise', source: 'Gupy', recruiterOwner: 'u1', applicationDate: '2026-04-12T14:00:00Z' },
  { id: 'a13', candidateId: 'c9', jobId: 'j1', stage: 'Reprovado', source: 'LinkedIn', recruiterOwner: 'u1', applicationDate: '2026-04-20T10:00:00Z' },
  { id: 'a14', candidateId: 'c3', jobId: 'j2', stage: 'Novo', source: 'Gupy', recruiterOwner: 'u1', applicationDate: '2026-04-01T15:00:00Z' },
  { id: 'a15', candidateId: 'c10', jobId: 'j7', stage: 'Novo', source: 'Site Próprio', recruiterOwner: 'u2', applicationDate: '2026-04-20T11:00:00Z' },
  { id: 'a16', candidateId: 'c4', jobId: 'j8', stage: 'Análise', source: 'LinkedIn', recruiterOwner: 'u3', applicationDate: '2026-04-05T12:00:00Z' },
  { id: 'a17', candidateId: 'c2', jobId: 'j2', stage: 'Análise', source: 'Indicação', recruiterOwner: 'u1', applicationDate: '2026-04-22T09:00:00Z' },
  { id: 'a18', candidateId: 'c1', jobId: 'j1', stage: 'Novo', source: 'LinkedIn', recruiterOwner: 'u1', applicationDate: '2026-04-25T14:00:00Z' },
  { id: 'a19', candidateId: 'c5', jobId: 'j1', stage: 'Reprovado', source: 'Gupy', recruiterOwner: 'u1', applicationDate: '2026-04-10T10:00:00Z' },
  { id: 'a20', candidateId: 'c7', jobId: 'j2', stage: 'Análise', source: 'Headhunter', recruiterOwner: 'u1', applicationDate: '2026-04-28T11:00:00Z' }
];

export const MATCH_RESULTS: MatchResult[] = [
  {
    id: 'm1',
    candidateId: 'c1',
    jobId: 'j1',
    resumeId: 'r1',
    compatibilityScore: 92,
    matchingSkills: ['React', 'TypeScript', 'Tailwind CSS'],
    missingSkills: ['Next.js (Entry level found)'],
    strengths: ['Long experience with React', 'Strong Architecture skills', 'Mentorship history'],
    gaps: ['Limited Next.js specific projects'],
    aiExplanation: 'Candidata extremamente qualificada para o cargo sênior. O score de 92 reflete o match perfeito com as tecnologias base e o perfil de liderança.',
    recommendations: 'Prosseguir com proposta; candidata pronta para liderar a evolução web.',
    recommendationLevel: 'Ideal',
    generatedAt: '2026-04-29T10:00:00Z'
  },
  {
    id: 'm2',
    candidateId: 'c7',
    jobId: 'j3',
    resumeId: 'r7',
    compatibilityScore: 95,
    matchingSkills: ['Python', 'Machine Learning', 'SQL', 'NLP'],
    missingSkills: ['Vector Databases'],
    strengths: ['Masters degree in DS', 'Proven NLP history', 'Seniority level matches'],
    gaps: ['Few experience with Vector DBs like Pinecone'],
    aiExplanation: 'Gabriela possui a base acadêmica e técnica ideal para a vaga de GenAI. Seu mestrado focado em dados é um diferencial crítico.',
    recommendations: 'Contratar; perfil raro com base acadêmica sólida em IA.',
    recommendationLevel: 'Ideal',
    generatedAt: '2026-04-29T11:00:00Z'
  },
  {
    id: 'm3',
    candidateId: 'c4',
    jobId: 'j5',
    resumeId: 'r4',
    compatibilityScore: 88,
    matchingSkills: ['Terraform', 'Kubernetes', 'AWS'],
    missingSkills: ['Security certifications'],
    strengths: ['12 years of Infra experience', 'Cloud Architect background', 'Expert level K8s'],
    gaps: ['Requires deeper security audit knowledge'],
    aiExplanation: 'David é um dos melhores matches técnicos para a vaga. O score reflete sua expertise em orquestração e escala.',
    recommendations: 'Focar em certificações de segurança e compliance cloud.',
    recommendationLevel: 'Alto',
    generatedAt: '2026-04-29T12:00:00Z'
  },
  // Adding more entries to reach close to 20...
  ...Array.from({ length: 17 }).map((_, i) => ({
    id: `m${i+4}`,
    candidateId: CANDIDATES[i % 12].id,
    jobId: JOBS[i % 8].id,
    resumeId: `r${i%12}`,
    compatibilityScore: 40 + Math.floor(Math.random() * 50),
    matchingSkills: ['JavaScript', 'Git'],
    missingSkills: ['Specific Frameworks'],
    strengths: ['General soft skills'],
    gaps: ['Technical stack mismatch'],
    aiExplanation: 'Match parcial baseado em competências genéricas de desenvolvimento.',
    recommendations: 'Incentivar o aprendizado de frameworks modernos solicitados na vaga.',
    recommendationLevel: (i % 2 === 0 ? 'Médio' : 'Baixo') as any,
    generatedAt: '2026-04-29T13:00:00Z'
  }))
];

export const STAKEHOLDERS: Stakeholder[] = [
  {
    id: 's1',
    name: 'Carolina Mendes',
    role: 'CEO / Business Owner',
    interest: 'Alto',
    influence: 'Alto',
    impact: 'Crescimento de market share e ROI tecnológico.',
    strategy: 'Manter engajada com reports de ROI e eficiência operacional.',
    communication: 'Dashboards Mensais e Reuniões de Steering.'
  },
  {
    id: 's2',
    name: 'Ricardo Souza',
    role: 'Gestor de TI',
    interest: 'Alto',
    influence: 'Alto',
    impact: 'Estabilidade do sistema e redução de incidentes.',
    strategy: 'Envolver na definição da ponte de integração moderna.',
    communication: 'Sprint Reviews e Relatórios de Performance.'
  },
  {
    id: 's3',
    name: 'Paula Lima',
    role: 'Recrutadores (Staff)',
    interest: 'Alto',
    influence: 'Médio',
    impact: 'Facilidade de uso e produtividade na triagem.',
    strategy: 'User Acceptance Testing e treinamentos constantes.',
    communication: 'Slack e Daily Syncs de Operação.'
  },
  {
    id: 's4',
    name: 'Equipe Técnica',
    role: 'Engenheiros de Software',
    interest: 'Médio',
    influence: 'Médio',
    impact: 'Manutenabilidade e aprendizado em novas tecnologias.',
    strategy: 'Modernização incremental sem interrupção de serviço.',
    communication: 'Documentação Técnica e Code Reviews.'
  },
  {
    id: 's5',
    name: 'Clientes Corporativos',
    role: 'Gestores de Vagas',
    interest: 'Alto',
    influence: 'Médio',
    impact: 'Qualidade dos candidatos e SLA de entrega.',
    strategy: 'Apresentar resultados de matching de IA como diferencial.',
    communication: 'Portal do Cliente e Monthly Business Review.'
  },
  {
    id: 's6',
    name: 'Candidatos',
    role: 'Talentos Externos',
    interest: 'Médio',
    influence: 'Médio',
    impact: 'Experiência de aplicação e agilidade no feedback.',
    strategy: 'Interface moderna e feedback automatizado via IA.',
    communication: 'Notificações via e-mail e Status Page.'
  }
];

export const STRATEGIC_DECISION: StrategicDecision = {
  problemContext: 'A TalentMatch opera com um sistema central de 10 anos que, embora estável, atingiu o limite de escalabilidade técnica e UX.',
  organizationalScenario: 'Empresa de médio porte em fase de expansão acelerada, enfrentando gargalos na triagem de currículos e integração com canais digitais modernos.',
  currentSystemChallenges: [
    'Performance degradada em picos de acesso (latência > 3s)',
    'Ausência de motor de busca semântica (dependência de termos exatos)',
    'Interface não responsiva e workflow de recrutador fragmentado',
    'Custo crescente de manutenção corretiva (40% do orçamento de TI)'
  ],
  impactOnBusiness: 'Perda de talentos qualificados por demora no processo e aumento do custo por contratação em 15% no último ano.',
  decisionLogic: [
    { criteria: 'Continuidade Operacional', weight: 40, description: 'Risco zero de interrupção em processos críticos de folha e base legada.' },
    { criteria: 'Eficiência de Custo', weight: 30, description: 'Investimento 70% menor que o rebuild completo imediato.' },
    { criteria: 'Time-to-Market', weight: 20, description: 'Novas funcionalidades em produção em ciclos de 30 dias.' },
    { criteria: 'Adoção Tecnológica', weight: 10, description: 'Equipe interna já domina o core do legado.' }
  ]
};

export const TECHNICAL_DEBT: TechnicalDebt[] = [
  { 
    metric: 'Code Complexity (Cyclomatic)', 
    value: '42 (High)', 
    impactLabel: 'Manutenabilidade', 
    impactDescription: 'Dificulta a implementação de novas regras de negócio sem riscos colaterais.',
    rationalResponse: 'Encapsulamento de lógica complexa em micro-serviços externos modernos.'
  },
  { 
    metric: 'Database Latency', 
    value: '850ms', 
    impactLabel: 'Performance', 
    impactDescription: 'Gargalo em queries de busca complexas e relatórios gerenciais.',
    rationalResponse: 'Implementação de camada de busca elástica (Vector DB) sincronizada.'
  },
  { 
    metric: 'External Integration', 
    value: 'Legacy SOAP', 
    impactLabel: 'Evolução', 
    impactDescription: 'Incompatibilidade com parceiros modernos e APIs de redes sociais.',
    rationalResponse: 'Gateway de fachada (API Gateway) traduzindo legados para REST/JSON.'
  }
];

export const STRATEGIC_COMPARISONS: StrategicComparison[] = [
  { 
    feature: 'Custo de Implementação', 
    legacyImproved: 'Baixo (Incremental)', 
    totalModernization: 'Muito Alto (CapEx pesado)', 
    winner: 'legacy',
    tradeOff: 'Menor custo imediato v.s. manutenção residual do legado.'
  },
  { 
    feature: 'Risco de Migração', 
    legacyImproved: 'Quase Inexistente', 
    totalModernization: 'Crítico (Big Bang)', 
    winner: 'legacy',
    tradeOff: 'Estabilidade operacional garantida.'
  },
  { 
    feature: 'Experiência do Usuário', 
    legacyImproved: 'Alta (Frontend desacoplado)', 
    totalModernization: 'Máxima', 
    winner: 'modernization',
    tradeOff: 'Vite/React provê UX moderna mesmo com core legado.'
  },
  { 
    feature: 'Velocidade de Entrega', 
    legacyImproved: 'Rápida (Agile)', 
    totalModernization: 'Lenta (Long Waterfall)', 
    winner: 'legacy',
    tradeOff: 'Ganhos rápidos de IA enquanto o core permanece estável.'
  }
];

export const EXECUTIVE_RECOMMENDATION: ExecutiveRecommendation = {
  shortTerm: [
    'Implementar ponte de API segura para ingestão de daddos.',
    'Lançar dashboard Alpha para recrutadores com IA.',
    'Otimizar base de dados legada via indexação moderna.'
  ],
  mediumTerm: [
    'Integrar matching preditivo via Google Gemini em todas as vagas.',
    'Automatizar 100% da triagem inicial de candidatos.'
  ],
  longTerm: [
    'Migração gradual de módulos core para nuvem (Cloud Native).',
    'Desativação de servidores on-premise conforme ROI se estabiliza.'
  ],
  expectedBenefits: [
    'Redução de 50% no Time-to-Fill.',
    'Aumento de 20% na retenção de contratados.',
    'Redução de 30% nos custos fixos de manutenção de TI.'
  ],
  finalJustification: 'A estratégia de Modernização Incremental (Strangler Fig Pattern) mitiga os riscos de falha sistêmica, preserva o conhecimento de domínio acumulado em 10 anos e permite usufruir de ferramentas de IA de ponta com investimento otimizado.'
};

export const RISKS: Risk[] = [
  {
    id: 'r1',
    title: 'Indisponibilidade API Legada',
    category: 'Técnica / Infra',
    probability: 'Média',
    impact: 'Alta',
    mitigation: 'Implementar camada de cache (Redis) e retry exponencial.',
    owner: 'Arquiteto de Soluções',
    status: 'Em Monitoramento'
  },
  {
    id: 'r2',
    title: 'Baixa Aderência de Recrutadores',
    category: 'Organizacional',
    probability: 'Baixa',
    impact: 'Média',
    mitigation: 'Programa intensivo de treinamento e gamificação no uso da IA.',
    owner: 'Líder de RH',
    status: 'Controlado'
  },
  {
    id: 'r3',
    title: 'Custos de Token (AI)',
    category: 'Financeiro',
    probability: 'Alta',
    impact: 'Baixa',
    mitigation: 'Uso de modelos otimizados como Gemini Flash para triagem inicial.',
    owner: 'Gestor Financeiro',
    status: 'Ativo'
  }
];

export const ROADMAP_ITEMS: RoadmapItem[] = [
  {
    id: 'rd1',
    phase: 'MVP Alpha',
    title: 'Motor de Matching Semântico',
    description: 'Lançamento da integração principal com Gemini para análise de currículos.',
    priority: 'Alta',
    status: 'Concluído',
    quarter: 'Q2 2026'
  },
  {
    id: 'rd2',
    phase: 'Beta Expansion',
    title: 'Módulo de Entrevistas Assistidas',
    description: 'IA gera perguntas personalizadas baseadas nos gaps do candidato.',
    priority: 'Média',
    status: 'Em Andamento',
    quarter: 'Q3 2026'
  },
  {
    id: 'rd3',
    phase: 'Scale',
    title: 'Previsão de Turn-over IA',
    description: 'Modelos preditivos para identificar riscos de saída precoce.',
    priority: 'Baixa',
    status: 'Planejado',
    quarter: 'Q4 2026'
  }
];

export const KPIS: KPI[] = [
  {
    id: 'k1',
    label: 'Time-to-Hire',
    value: '22 dias',
    baseline: '45 dias (Legado)',
    target: '20 dias',
    trend: 'up',
    status: 'success',
    description: 'Tempo médio entre abertura da vaga e aceite da proposta.'
  },
  {
    id: 'k2',
    label: 'Qualidade do Match',
    value: '91%',
    baseline: '72%',
    target: '95%',
    trend: 'up',
    status: 'success',
    description: 'Aderência média do candidato contratado versus requisitos da vaga.'
  },
  {
    id: 'k3',
    label: 'Uso da Ponte Legada',
    value: '98%',
    target: '100%',
    trend: 'neutral',
    status: 'warning',
    description: 'Porcentagem de sincronia bem-sucedida de dados com o Mainframe.'
  }
];

export const SWOT_DATA = {
  strengths: [
    'Base de dados legada de 10 anos',
    'Domínio de processos internos',
    'Ponte de integração funcional'
  ],
  opportunities: [
    'Processamento de linguagem natural',
    'Matching semântico em escala',
    'Automação de triagem'
  ],
  weaknesses: [
    'Interface legada pouco intuitiva',
    'Dívida técnica acumulada',
    'Processos manuais'
  ],
  threats: [
    'Concorrência de ATS modernos',
    'Mudanças na LGPD',
    'Custos de APIs de IA'
  ]
};

export const PESTEL_DATA = {
  political: [
    'Políticas de Estímulo à Inovação (Marco Legal das Startups)',
    'Fomento à Digitalização do Setor de RH',
    'Relações Governamentais e Compliance Trabalhista'
  ],
  economic: [
    'Custo de Aquisição de Talentos (ROI Tecnológico)',
    'Flutuação do Dólar (Impacto em APIs de IA)',
    'Investimento em P&D para Modernização'
  ],
  social: [
    'Mudança de Pensamento no Recrutamento Digital',
    'Busca por Experiência do Candidato Superior',
    'Diversidade e Inclusão (Viés de Algoritmo)'
  ],
  technological: [
    'Avanço de LLMs (Gemini, GPT-4)',
    'ElasticSearch e Vetorização de Dados',
    'Segurança Cibernética em Nuvem'
  ],
  environmental: [
    'Redução de Papel via Digitalização Total',
    'Eficiência Energética de Servidores em Nuvem',
    'Impacto ESG na Marca Empregadora'
  ],
  legal: [
    'Lei Geral de Proteção de Dados (LGPD)',
    'Contratos Digitais e Assinaturas Eletrônicas',
    'Direitos de Propriedade Intelectual em IA'
  ]
};
