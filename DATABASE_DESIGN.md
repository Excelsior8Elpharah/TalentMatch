# Projeto de Banco de Dados: TalentMatch RH (Alpha v2)

Este documento descreve a infraestrutura de dados que suporta a evolução do sistema legado para a camada moderna com IA.

## Estratégia de Modelagem
Utilizamos uma abordagem **Híbrida**:
- **Relacional para Integridade:** Campos críticos de associação (Candidate-Job) via IDs únicos.
- **Documental para Flexibilidade:** Campos de extração de IA (JSON-like) e logs de atividade que podem variar em estrutura.

---

## Dicionário de Entidades

### 1. `users` (Recrutadores e Gestores)
| Campo | Tipo | Descrição |
| :--- | :--- | :--- |
| `id` (PK) | UUID | Identificador único. |
| `name` | String | Nome completo. |
| `role` | Enum | 'ADMIN', 'RECRUITER', 'HIRING_MANAGER'. |
| `email` | String | E-mail corporativo. |
| `legacy_id` | String | Referência ao ID no sistema antigo. |

### 2. `candidates` (Core de Talentos)
| Campo | Tipo | Descrição |
| :--- | :--- | :--- |
| `id` (PK) | UUID | Identificador único. |
| `full_name` | String | Nome completo (Obrigatório). |
| `email` | String | Único. |
| `location` | String | Cidade/UF. |
| `seniority` | Enum | Estágio a Diretoria. |
| `status` | Enum | 'DISPONIVEL', 'EM_PROCESSO', 'CONTRATADO'. |
| `metadata` | Map | Campos dinâmicos do legado. |

### 3. `resumes` (Documentos e Parsing)
*Subcoleção de Candidate ou Tabela Relacionada (1:N)*
| Campo | Tipo | Descrição |
| :--- | :--- | :--- |
| `id` (PK) | UUID | Identificador único. |
| `candidate_id` (FK) | UUID | Relaciona com `candidates`. |
| `file_url` | String | Caminho no Storage. |
| `raw_text` | Text | Conteúdo extraído bruto. |
| `ai_summary` | Text | Resumo executivo gerado pelo Gemini. |
| `skills` | List<String> | Habilidades detectadas. |
| `parsing_status` | Enum | 'PENDING', 'ANALYZED', 'FAILED'. |

### 4. `jobs` (Gestão de Vagas)
| Campo | Tipo | Descrição |
| :--- | :--- | :--- |
| `id` (PK) | UUID | Identificador único. |
| `title` | String | Título do cargo. |
| `dept_id` | String | Departamento. |
| `mandatory_skills`| List | Requisitos obrigatórios. |
| `salary_range` | Map | Min/Max. |
| `legacy_ref` | String | Código da vaga no ERP antigo. |

### 5. `applications` (Relacional N:N)
| Campo | Tipo | Descrição |
| :--- | :--- | :--- |
| `id` (PK) | UUID | Identificador único. |
| `candidate_id` (FK) | UUID | Referência ao candidato. |
| `job_id` (FK) | UUID | Referência à vaga. |
| `stage` | Enum | 'TRIAGEM', 'ENTREVISTA', 'TESTE', 'OFFER'. |
| `recruiter_id` | UUID | Dono da vaga. |

### 6. `matching_results` (Inteligência de IA)
| Campo | Tipo | Descrição |
| :--- | :--- | :--- |
| `id` (PK) | UUID | Identificador único. |
| `candidate_id` | UUID | Referência. |
| `job_id` | UUID | Referência. |
| `score` | Integer | 0 a 100. |
| `justification` | Text | Explicação interpretável da IA. |
| `gaps` | List<String> | Habilidades faltantes. |

---

## Estratégia de Índices
Para garantir a performance exigida:
1.  **Índice Composto:** `job_id` + `score` (Descendente) -> Para ranking rápido de candidatos por vaga.
2.  **Busca de Texto:** Utilizar `raw_text` no Resumes para busca indexada (ou integração com Vertex AI Search).
3.  **Filtro de Status:** `status` + `seniority` em Jobs para listagens de dashboard.

## Monitoramento Estratégico (Projeto Acadêmico)
As tabelas `stakeholders`, `kpis`, `risks` e `roadmap_items` são mantidas de forma independente para alimentar o Dashboard Executivo de Governança, garantindo que a tomada de decisão seja baseada em dados reais do sistema.
