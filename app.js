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
    id: "parada-gaucha",
    title: "Churrascaria Parada Gaúcha",
    category: "web-negocios",
    categoryLabel: "Web & Negócios",
    status: "Demonstração Local",
    tagline:
      "Site comercial e cardápio digital com carrinho, preenchimento de endereço por CEP e pedido pronto no WhatsApp sem taxas.",
    description:
      "Sistema comercial mobile-first criado para restaurantes e churrascarias receberem pedidos diretamente pelo site sem depender de taxas de aplicativos terceiros, com painel administrativo próprio para gerenciar pratos, promoções e fotos.",
    highlights: [
      "Cardápio digital com categorias, destaques e promoções do dia",
      "Carrinho com busca automática de endereço por CEP",
      "Envio do pedido formatado direto para o WhatsApp da loja",
      "Painel administrativo protegido para atualizar produtos e preços"
    ],
    liveUrl: "http://localhost:3005",
    urlLabel: "Local"
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
    liveUrl: "https://odonto-agenda-phi.vercel.app",
    urlLabel: "Online"
  },
  {
    id: "sua-barbearia",
    title: "Sua Barbearia — Agenda & Clube Mensal",
    category: "web-negocios",
    categoryLabel: "Web & Negócios",
    status: "MVP Local",
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
    liveUrl: "http://127.0.0.1:4176",
    urlLabel: "Demo"
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

  filtered.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Ver detalhes de ${project.title}`);

    const statusClass = project.urlLabel === "Online" ? "status-dot" : "status-dot local";
    const displayHost = project.liveUrl.replace(/^https?:\/\//, "");

    card.innerHTML = `
      <div>
        <div class="card-top">
          <span class="card-category">${project.categoryLabel}</span>
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
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(project);
      }
    });

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

renderProjects();
