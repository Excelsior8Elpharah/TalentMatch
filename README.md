# TalentMatch RH - AI Recruitment Ecosystem

## 🚀 Visão Geral
O **TalentMatch RH** é uma plataforma moderna de recrutamento e seleção (ATS/CRM) projetada para atuar como uma **camada de inteligência evolutiva** sobre sistemas legados. Ao invés de substituir o core business existente, o TalentMatch estende suas capacidades com IA, UX moderna e governança estratégica.

## 🏗️ Arquitetura do Sistema
A aplicação segue uma arquitetura de **Camada de Adaptação (Adapter Layer)**:
1.  **Frontend (React/Vite):** Interface de alta fidelidade focada em produtividade.
2.  **Service Layer (AI Bridge):** Integração com o Google Gemini API para processamento semântico.
3.  **Legacy Bridge:** Gateway que simula (neste protótipo) a sincronização de dados com sistemas corporativos legados (Mainframe/Oracle).

## 📊 Estrutura de Dados (Entidades)
-   **Candidates:** Perfil rico incluindo skills extraídas por IA.
-   **Jobs:** Vagas com requisitos técnicos e comportamentais detalhados.
-   **Matches:** Resultados de compatibilidade gerados pelo motor de IA.
-   **Resumes:** Central de documentos com status de processamento.
-   **Project Governance:** Módulos de Stakeholders, KPIs, Riscos e Roadmap para gestão do produto.

## 🤖 Mecanismo de Matching IA
O matching não é apenas uma busca por palavras-chave. Ele utiliza o modelo **Gemini 1.5 Flash** para:
1.  **Análise Semântica:** Entender o contexto das experiências do candidato.
2.  **Gap Analysis:** Identificar exatamente o que falta para o fit perfeito.
3.  **Recomendação Explicável:** Gerar justificativas em linguagem natural para cada score.

## 🛠️ Evolução do Legado
A solução resolve as principais dores do sistema antigo:
-   **Performance:** Interface reativa que não trava em grandes volumes de dados.
-   **Inteligência:** O legado apenas armazena, o TalentMatch analisa.
-   **UX:** Design intuitivo que reduz o tempo de treinamento de novos recrutadores.
-   **Decisão Executiva:** Dashboards em tempo real para C-Levels que antes dependiam de relatórios manuais.
