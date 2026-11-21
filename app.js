const PROJECTS = [
  {
    id: "boletim-inteligente",
    title: "Boletim Inteligente 2026",
    category: "educacao-dados",
    categoryLabel: "Educação & Dados",
    status: "Online",
    tagline:
      "Dashboard web instalável (PWA) para acompanhamento de notas e frequência escolar, com leitura automática de boletim em PDF e painel analítico.",
    description:
      "Aplicação web criada para simplificar o acompanhamento escolar. Lê diretamente no navegador o PDF oficial do Boletim Escolar ou planilhas Excel, sem expor dados a servidores externos, e oferece simulador de notas e controle de frequência.",
    highlights: [
      "Leitura automática do PDF oficial do Boletim Escolar no próprio navegador",
      "Acompanhamento de metas por disciplina e simulador do 4º bimestre",
      "Monitoramento de frequência escolar (mínimo 75% e Pé-de-Meia 80%)",
      "Integrado a modelo analítico Power BI com relatórios completos"
    ],
    liveUrl: "https://boletim-inteligente-2026.vercel.app",
    urlLabel: "Online"
  },
  {
    id: "semente-da-multiplicacao",
    title: "Semente da Multiplicação",
    category: "web-negocios",
    categoryLabel: "Web & Negócios",
    status: "Online",
    tagline:
      "Site institucional e portal comunitário completo para conectar membros, eventos, missões e locais de encontro.",
    description:
      "Plataforma web desenvolvida para a Igreja Evangélica Semente da Multiplicação, reunindo história, agenda de eventos, projetos missionários, galeria de memórias e informações de localização com atualização dinâmica via Firebase.",
    highlights: [
      "Páginas dedicadas para História, Eventos, Missões, Cantata e Locais",
      "Conteúdo dinâmico integrado ao Cloud Firestore",
      "Navegação rápida e responsiva para celulares e computadores",
      "Publicado em produção com carregamento instantâneo"
    ],
    liveUrl: "https://semente-site.vercel.app",
    urlLabel: "Online"
  },
  {
    id: "churrascaria-digital",
    title: "Churrascaria Digital — Fogo & Brasa",
    category: "web-negocios",
    categoryLabel: "Web & Negócios",
    status: "Online",
    tagline:
      "Plataforma multi-tenant completa para churrascarias: Delivery, Retirada, Salão, Rodízio, KDS da Cozinha, Caixa e Editor de Panfletos.",
    description:
      "Sistema full-stack em Next.js, TypeScript e Supabase construído em arquitetura multi-tenant com isolamento por restaurante, RBAC de 7 perfis, cálculo de pedidos no servidor, integração WhatsApp, reservas com controle de capacidade, frente de caixa, estoque, CRM (LGPD) e exportação de panfletos em PNG.",
    highlights: [
      "Cardápio digital, carrinho persistente, checkout com ViaCEP, zonas de entrega e resumo no WhatsApp",
      "Operação em tempo real com gestão de pedidos, fila da cozinha (KDS) e notificações",
      "Salão com mapa de mesas, comandas, QR Code validado no servidor, rodízio e reservas",
      "Caixa, controle de estoque, CRM com consentimento LGPD, relatórios e editor de panfletos PNG"
    ],
    liveUrl: "https://churrascaria-digital.vercel.app",
    urlLabel: "Online"
  },
  {
    id: "brasa-e-corte",
    title: "Brasa & Corte — Gastronomia na Brasa",
    category: "web-negocios",
    categoryLabel: "Web & Negócios",
    status: "Online · Vercel",
    featured: false,
    tagline:
      "Site gastronômico editorial e cardápio digital interativo com busca automática por CEP, carrinho em tempo real e painel administrativo.",
    description:
      "MVP web em Next.js, TypeScript, Tailwind CSS e Supabase com design editorial em Playfair Display, Hero cinematográfico, galeria em mosaico com lightbox, filtro por categorias via URL, autopreenchimento de endereço por CEP (ViaCEP/BrasilAPI) e painel administrativo protegido por RLS.",
    highlights: [
      "Design editorial escuro com tipografia Playfair Display e galeria interativa com lightbox",
      "Cardápio digital com filtros por categoria, busca e carrinho persistente em tempo real",
      "Busca automática de endereço por CEP integrada à ViaCEP e BrasilAPI",
      "Painel administrativo completo com Supabase Auth, RLS e fallback demonstrativo"
    ],
    liveUrl: "https://brasa-e-corte.vercel.app",
    urlLabel: "Online"
  },
  {
    id: "quadra-lab",
    title: "Quadra Lab Enterprise",
    category: "esportes",
    categoryLabel: "Esportes",
    status: "Online",
    tagline:
      "Plataforma web de análise tática, controle de rodízio e placar eletrônico em tempo real para comissões técnicas de vôlei.",
    description:
      "Sistema web completo para treinadores e analistas de voleibol, reunindo prancheta tática vetorial, validação das 6 rotações oficiais, gestão de elenco e placar eletrônico com registro rápido de estatísticas durante a partida.",
    highlights: [
      "Prancheta tática interativa com trajetórias e posições oficiais",
      "Validação automática das 6 rotações (P1–P6) conforme regras FIVB",
      "Placar eletrônico com cronômetro de tempo técnico e registro de scout",
      "Publicado em produção com alto desempenho na Vercel"
    ],
    liveUrl: "https://quadra-lab.vercel.app",
    urlLabel: "Online"
  },
  {
    id: "sua-odontologia",
    title: "Sua Odontologia — Agenda & Site Clínico",
    category: "web-negocios",
    categoryLabel: "Web & Negócios",
    status: "Online · Vercel",
    featured: false,
    tagline:
      "Site odontológico editorial e sistema de agendamento personalizável ao vivo para clínicas e dentistas.",
    description:
      "Site completo e agenda online exclusiva para clínicas odontológicas. Permite ao dentista colocar o nome da sua clínica, cor e procedimentos em tempo real, enquanto oferece aos pacientes informações sobre tratamentos, corpo clínico (CRO), estrutura 3D, FAQ, agendamento sem conflito e Painel da Sua Clínica.",
    highlights: [
      "Personalização ao vivo: o dentista testa o site com o nome e cor da própria clínica",
      "Seções clínicas reais: Referência, Tratamentos com filtro, Corpo Clínico (CRO), Estrutura 3D e FAQ",
      "Agendamento em tempo real com bloqueio de horários e comprovante no WhatsApp",
      "Painel da Sua Clínica com controle de clientes e faturamento previsto"
    ],
    liveUrl: "https://joeloliveira-odonto.vercel.app",
    urlLabel: "Online"
  },
  {
    id: "sua-barbearia",
    title: "Sua Barbearia — Agenda & Clube Mensal",
    category: "web-negocios",
    categoryLabel: "Web & Negócios",
    status: "Online · Vercel",
    featured: false,
    tagline:
      "Site e sistema de agendamento online para barbearias com clube de assinatura e personalização ao vivo.",
    description:
      "MVP exclusivo para barbearias e visagismo. Permite ao dono testar o site com o nome e cor da sua barbearia, exibindo serviços com contexto, Clube Mensal, escolha de barbeiro, reserva sem conflito e Painel da Sua Barbearia.",
    highlights: [
      "Personalização ao vivo com o nome, cor e serviços da sua barbearia",
      "Clube Mensal (planos Corte Ilimitado e Corte + Barba) e filtros por serviço",
      "Agenda com bloqueio de horários e confirmação direta no WhatsApp",
      "Painel da Sua Barbearia com controle de clientes e faturamento previsto"
    ],
    liveUrl: "https://joeloliveira-barbearia.vercel.app",
    urlLabel: "Online"
  },
  {
    id: "crm-caixa",
    title: "Sua Empresa — CRM, ROI & Fluxo de Caixa",
    category: "web-negocios",
    categoryLabel: "Web & Negócios",
    status: "Online · Vercel",
    featured: false,
    tagline:
      "Painel executivo integrado de Funil de Vendas (CRM), ROI, ranking de vendedores, perdas e Fluxo de Caixa.",
    description:
      "Sistema comercial e financeiro completo para PMEs. Mostra em tempo real quem entrou, quem vendeu, quem não fechou (com motivo da perda), ROI sobre marketing, Lucro Líquido ou Prejuízo, Ticket Médio e extrato completo com exportação para Excel (CSV).",
    highlights: [
      "Funil Kanban de 5 etapas com integração automática ao Fluxo de Caixa",
      "Ranking de quem vendeu, lista de perdas e cálculo automático de ROI",
      "Detecção automática de Lucro Líquido ou Prejuízo no período",
      "Personalização ao vivo com nome e cor da empresa + exportação CSV"
    ],
    liveUrl: "https://joeloliveira-crm.vercel.app",
    urlLabel: "Online"
  }
];

const gridEl = document.getElementById("projects-grid");
const filterButtons = document.querySelectorAll(".filter-btn");

const modal = document.getElementById("project-modal");
const modalBackdrop = document.getElementById("modal-backdrop");
const modalClose = document.getElementById("modal-close");
const modalBadges = document.getElementById("modal-badges");
const modalTitle = document.getElementById("modal-title");
const modalTagline = document.getElementById("modal-tagline");
const modalDescription = document.getElementById("modal-description");
const modalFeatures = document.getElementById("modal-features");
const modalLiveWrap = document.getElementById("modal-live-wrap");
const modalLiveLink = document.getElementById("modal-live-link");

let activeFilter = "all";

function renderProjects() {
  const filtered = PROJECTS.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  gridEl.innerHTML = "";

  filtered.forEach((project, idx) => {
    const card = document.createElement("article");
    const isFeatured = idx === 0;

    const statusClass = project.urlLabel === "Online" ? "status-dot" : "status-dot local";
    const displayHost = project.liveUrl.replace(/^https?:\/\//, "");
    const numLabel = String(idx + 1).padStart(2, "0");

    const previewHtml = isFeatured
      ? `
        <div class="card-preview" aria-hidden="true">
          <div class="mockup-phone">
            <div class="mockup-orb"></div>
            <div class="mockup-line accent"></div>
            <div class="mockup-line"></div>
            <div class="mockup-line"></div>
          </div>
          <div class="mockup-phone dark">
            <div class="mockup-orb"></div>
            <div class="mockup-line accent"></div>
            <div class="mockup-line"></div>
            <div class="mockup-line"></div>
          </div>
        </div>
      `
      : idx === 1
        ? `
        <div class="card-mini-visual ring-visual" aria-hidden="true">
          <div class="blue-ring"></div>
        </div>
      `
        : idx === 2
          ? `
        <div class="card-mini-visual chart-visual" aria-hidden="true">
          <svg viewBox="0 0 120 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 46 C22 44, 28 22, 44 26 C58 30, 66 12, 82 18 C96 24, 104 8, 114 10" stroke="#60A5FA" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M6 46 C22 44, 28 22, 44 26 C58 30, 66 12, 82 18 C96 24, 104 8, 114 10 L114 54 L6 54 Z" fill="url(#miniChartFill)"/>
            <defs>
              <linearGradient id="miniChartFill" x1="0" y1="8" x2="0" y2="54" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.35"/>
                <stop offset="100%" stop-color="#3B82F6" stop-opacity="0"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      `
          : "";

    card.className = isFeatured
      ? "project-card is-featured"
      : idx === 1 || idx === 2
        ? "project-card is-compact-split"
        : "project-card";

    card.innerHTML = idx === 1 || idx === 2
      ? `
      <div class="compact-split-body">
        ${previewHtml}
        <div class="compact-split-info">
          <div class="card-top">
            <span class="card-category">${numLabel} / ${project.categoryLabel}</span>
            <span class="${statusClass}">${project.status}</span>
          </div>
          <h3 class="card-title">${project.title}</h3>
          <p class="card-tagline">${project.tagline}</p>
        </div>
      </div>

      <div class="card-footer">
        <a
          href="${project.liveUrl}"
          target="_blank"
          rel="noopener noreferrer"
          class="card-visit-link"
        >
          ${displayHost} <span aria-hidden="true">↗</span>
        </a>
        <button type="button" class="card-details-btn">Detalhes</button>
      </div>
    `
      : `
      <div>
        ${previewHtml}
        <div class="card-top">
          <span class="card-category">${numLabel} / ${project.categoryLabel}</span>
          <span class="${statusClass}">${project.status}</span>
        </div>
        <h3 class="card-title">${project.title}</h3>
        <p class="card-tagline">${project.tagline}</p>
      </div>

      <div class="card-footer">
        <a
          href="${project.liveUrl}"
          target="_blank"
          rel="noopener noreferrer"
          class="card-visit-link"
        >
          ${displayHost} <span aria-hidden="true">↗</span>
        </a>
        <button type="button" class="card-details-btn">Detalhes</button>
      </div>
    `;

    card.querySelector(".card-visit-link").addEventListener("click", (event) => {
      event.stopPropagation();
    });

    card.querySelector(".card-details-btn").addEventListener("click", (event) => {
      event.stopPropagation();
      openModal(project);
    });

    card.addEventListener("click", () => openModal(project));

    gridEl.appendChild(card);
  });
}

function openModal(project) {
  const statusClass = project.urlLabel === "Online" ? "badge badge-live" : "badge badge-accent";
  modalBadges.innerHTML = `
    <span class="badge">${project.categoryLabel}</span>
    <span class="${statusClass}">${project.status}</span>
  `;
  modalTitle.textContent = project.title;
  modalTagline.textContent = project.tagline;
  modalDescription.textContent = project.description;
  modalFeatures.innerHTML = project.highlights.map((item) => `<li>${item}</li>`).join("");

  if (project.liveUrl) {
    modalLiveLink.href = project.liveUrl;
    modalLiveLink.textContent = `Acessar ${project.liveUrl.replace(/^https?:\/\//, "")} ↗`;
    modalLiveWrap.classList.remove("hidden");
  } else {
    modalLiveWrap.classList.add("hidden");
  }

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");
    activeFilter = btn.dataset.filter;
    renderProjects();
  });
});

modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

const GITHUB_USER = "joeloliveira123";
const GITHUB_CACHE_KEY = "jo_github_lang_metrics_v1";
const GITHUB_CACHE_TTL_MS = 60 * 60 * 1000;

const LANG_COLORS = {
  TypeScript: "#3B82F6",
  HTML: "#60A5FA",
  JavaScript: "#38BDF8",
  CSS: "#2563EB",
  Python: "#22D3EE",
  Outros: "#475569"
};

const GITHUB_LANG_FALLBACK = {
  repoCount: 11,
  languages: [
    { name: "TypeScript", percent: 43.4 },
    { name: "HTML", percent: 26.9 },
    { name: "JavaScript", percent: 13.1 },
    { name: "CSS", percent: 11.4 },
    { name: "Python", percent: 4.8 }
  ]
};

function renderGitHubMetrics(metrics) {
  const container = document.getElementById("github-metrics");
  if (!container) return;

  const barHtml = metrics.languages
    .map((lang) => {
      const color = LANG_COLORS[lang.name] || LANG_COLORS.Outros;
      return `<span class="lang-segment" style="width: ${lang.percent}%; background: ${color};" title="${lang.name}: ${lang.percent}%"></span>`;
    })
    .join("");

  const legendHtml = metrics.languages
    .map((lang) => {
      const color = LANG_COLORS[lang.name] || LANG_COLORS.Outros;
      return `
        <span class="lang-item">
          <span class="lang-swatch" style="background: ${color};"></span>
          <strong>${lang.name}</strong> ${lang.percent.toFixed(1).replace(".", ",")}%
        </span>
      `;
    })
    .join("");

  container.innerHTML = `
    <div class="gh-metrics-head">
      <span>GITHUB • ${metrics.repoCount} REPOSITÓRIOS</span>
      <a href="https://github.com/${GITHUB_USER}" target="_blank" rel="noopener noreferrer">@${GITHUB_USER} ↗</a>
    </div>
    <div class="lang-bar" role="img" aria-label="Distribuição de linguagens no GitHub">${barHtml}</div>
    <div class="lang-legend">${legendHtml}</div>
  `;
}

async function loadGitHubMetrics() {
  renderGitHubMetrics(GITHUB_LANG_FALLBACK);

  try {
    const cachedRaw = localStorage.getItem(GITHUB_CACHE_KEY);
    if (cachedRaw) {
      const cached = JSON.parse(cachedRaw);
      if (Date.now() - cached.timestamp < GITHUB_CACHE_TTL_MS && cached.data?.languages?.length) {
        renderGitHubMetrics(cached.data);
        return;
      }
    }

    const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`);
    if (!reposRes.ok) return;
    const repos = (await reposRes.json()).filter((r) => !r.fork);
    if (!repos.length) return;

    const langResponses = await Promise.all(
      repos.map((r) => fetch(r.languages_url).then((res) => (res.ok ? res.json() : {})))
    );

    const totals = {};
    langResponses.forEach((langs) => {
      Object.entries(langs).forEach(([name, bytes]) => {
        totals[name] = (totals[name] || 0) + bytes;
      });
    });

    const sum = Object.values(totals).reduce((acc, v) => acc + v, 0);
    if (!sum) return;

    const languages = Object.entries(totals)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, bytes]) => ({
        name,
        percent: Number(((bytes / sum) * 100).toFixed(1))
      }));

    const data = { repoCount: repos.length, languages };
    localStorage.setItem(GITHUB_CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data }));
    renderGitHubMetrics(data);
  } catch {
    // Mantém os dados embutidos caso a API do GitHub esteja indisponível ou com rate limit.
  }
}

renderProjects();
loadGitHubMetrics();
