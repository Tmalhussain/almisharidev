const cv = {
  name: "Mishari Mohammed AlMishari Alhussain",
  shortName: "Mishari Mohammed AlMishari Alhussain",
  initials: "MA",
  location: "Riyadh, Saudi Arabia",
  primaryEmail: "malhussa@usc.edu",
  secondaryEmail: "",
  phone: "",
  linkedin: "",
  pdf: "assets/resume.pdf",
  eyebrow: "COMPUTER SCIENCE STUDENT \u00b7 RIYADH, SAUDI ARABIA",
  headline: "Mishari Mohammed AlMishari Alhussain",
  summary:
    "Applied machine learning, optimization, and algorithms. Incoming computer science student at USC's Viterbi School of Engineering, starting January 2027. I compete in AI and informatics at the national level, placing top 10 nationally in AI and top 16 nationally in informatics in Saudi Arabia, with top 30 of 260,000 at ATHKA and an ACPC Teens honorable mention where I placed first among the Gulf teams.",
  contactCopy: "malhussa@usc.edu \u00b7 Riyadh, Saudi Arabia",
  honors: [
    {
      result: "Top 30 of 260,000",
      title: "ATHKA \u2014 National Olympiad for Programming and AI (SDAIA)",
      detail: "Saudi Arabia's national olympiad for programming and AI."
    },
    {
      result: "Top 10 nationally in AI",
      title: "Mawhiba National Olympiad Training (IOAI)",
      detail: "Country-level placement in Saudi Arabia's artificial intelligence olympiad training track."
    },
    {
      result: "Top 16 nationally in Informatics",
      title: "Mawhiba National Olympiad Training (IOI)",
      detail: "Country-level placement in Saudi Arabia's informatics olympiad training track."
    },
    {
      result: "Honorable Mention; 1st among Gulf teams",
      title: "Arab Collegiate Programming Contest (ACPC), Teens Division",
      detail: "A single ACPC Teens result: honorable mention overall, with the top placement among Gulf teams in that contest."
    },
    {
      result: "National team member",
      title: "International Informatics Olympiad in Teams (IIOT)",
      detail: "Represented Saudi Arabia at the international team informatics olympiad."
    }
  ],
  experience: [
    {
      organization: "Saudi Olympiad in Informatics (SOI)",
      role: "Founder & Director",
      meta: "Riyadh, Saudi Arabia \u00b7 2024\u2013Present \u00b7 National competitive programming olympiad",
      bullets: [
        "Founded Saudi Arabia's national informatics olympiad and scaled it to hundreds of participants in partnership with Tuwaiq Academy.",
        "Direct a twelve-person team across problem design and national selection rounds."
      ]
    },
    {
      organization: "Mawhiba National Olympiad Training (IOI / IOAI)",
      role: "National Trainee & Competitor",
      meta: "Riyadh, Saudi Arabia \u00b7 2023\u20132025 \u00b7 Competitive AI and algorithms",
      bullets: [
        "Top 10 nationally on the IOAI artificial intelligence track; trained and fine-tuned machine learning models on real NLP and computer vision datasets.",
        "Top 16 nationally on the IOI informatics track; competed at the Asia-Pacific Informatics Olympiad (APIO)."
      ]
    },
    {
      organization: "Innovation Valley",
      role: "Cybersecurity Intern",
      meta: "Riyadh, Saudi Arabia \u00b7 2025 \u00b7 Healthcare network security",
      bullets: ["Configured network systems and firewalls for hospital infrastructure."]
    }
  ],
  projects: [
    {
      name: "Chess Engine",
      tag: "Search and evaluation",
      summary: "Built a chess engine rated ~1300 Elo using minimax search with a handcrafted evaluation function.",
      url: ""
    },
    {
      name: "XOR Linked List Graph Traversal",
      tag: "CS Extended Essay, 2026",
      summary: "Benchmarked XOR linked-list traversal against adjacency-list depth-first search and measured a 5\u201314x speedup.",
      url: ""
    },
    {
      name: "Autonomous Blended Wing-Body UAV",
      tag: "Solo design, ongoing",
      summary: "Designing and assembling a blended wing-body airframe with a full parametric Fusion 360 model and an onboard perception stack.",
      url: ""
    }
  ],
  education: [
    {
      school: "University of Southern California \u2014 Viterbi School of Engineering",
      detail: "B.S. Computer Science \u00b7 Los Angeles, CA \u00b7 Starting January 2027"
    },
    {
      school: "King Faisal School",
      detail: "IB Diploma, HL: Computer Science, Mathematics, Physics \u00b7 Riyadh, Saudi Arabia \u00b7 2026"
    }
  ],
  skills: [
    { label: "Languages", items: ["Python", "C++"] },
    {
      label: "ML / Data",
      items: [
        "PyTorch",
        "scikit-learn",
        "pandas",
        "NumPy",
        "Matplotlib",
        "neural networks from scratch in NumPy",
        "gradient boosting",
        "feature engineering"
      ]
    },
    {
      label: "Algorithms",
      items: ["data structures", "dynamic programming", "graph algorithms", "combinatorial optimization"]
    },
    { label: "Formal methods", items: ["Lean 4", "Z3/SMT"] },
    { label: "Tools", items: ["Git", "LaTeX", "Fusion 360"] }
  ]
};

const $ = (selector) => document.querySelector(selector);

function linkButton({ href, label, variant = "" }) {
  if (!href) return "";
  return `<a class="button ${variant}" href="${href}" ${href.startsWith("mailto:") ? "" : 'target="_blank" rel="noreferrer"'}>${label}</a>`;
}

function downloadButton({ href, label }) {
  if (!href) return "";
  return `<a class="button quiet" href="${href}" download>${label}</a>`;
}

function renderHero() {
  document.title = `${cv.name} - CV`;
  $("#brand-name").textContent = cv.shortName;
  $("#hero-eyebrow").textContent = cv.eyebrow;
  $("#hero-title").textContent = cv.headline;
  $("#hero-summary").textContent = cv.summary;
  $("#hero-actions").innerHTML = [
    linkButton({ href: `mailto:${cv.primaryEmail}`, label: cv.primaryEmail, variant: "primary" }),
    linkButton({ href: cv.pdf, label: "Open PDF CV", variant: "quiet" }),
    downloadButton({ href: cv.pdf, label: "Download PDF" }),
    linkButton({ href: cv.linkedin, label: "LinkedIn", variant: "quiet" })
  ].join("");
}

function renderHonors() {
  $("#honors-list").innerHTML = cv.honors
    .map(
      (honor) => `
        <article class="honor-card">
          <span class="honor-result">${honor.result}</span>
          <h3>${honor.title}</h3>
          <p>${honor.detail}</p>
        </article>
      `
    )
    .join("");
}

function renderExperience() {
  $("#experience-list").innerHTML = cv.experience
    .map(
      (item) => `
        <article class="entry">
          <h3>${item.organization} <span>${item.role}</span></h3>
          <p class="entry-meta">${item.meta}</p>
          <ul>
            ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderProjects() {
  $("#projects-list").innerHTML = cv.projects
    .map(
      (project) => `
        <article class="project-card">
          <p class="project-tag">${project.tag}</p>
          <h3>${project.name}</h3>
          <p>${project.summary}</p>
          ${project.url ? `<a href="${project.url}" target="_blank" rel="noreferrer">View project</a>` : ""}
        </article>
      `
    )
    .join("");
}

function renderEducation() {
  $("#education-list").innerHTML = cv.education
    .map(
      (item) => `
        <article class="entry compact-entry">
          <h3>${item.school}</h3>
          <p class="entry-meta">${item.detail}</p>
        </article>
      `
    )
    .join("");
}

function renderSkills() {
  $("#skills-list").innerHTML = cv.skills
    .map(
      (group) => `
        <div class="skill-row">
          <h3>${group.label}</h3>
          <div class="skill-chips">
            ${group.items.map((item) => `<span>${item}</span>`).join("")}
          </div>
        </div>
      `
    )
    .join("");
}

function renderContact() {
  $("#contact-copy").textContent = cv.contactCopy;
  $("#contact-actions").innerHTML = [
    linkButton({ href: `mailto:${cv.primaryEmail}`, label: cv.primaryEmail, variant: "primary" }),
    linkButton({ href: cv.linkedin, label: "LinkedIn", variant: "quiet" })
  ].join("");
}

function renderPaperCv() {
  $("#paper-actions").innerHTML = [
    linkButton({ href: cv.pdf, label: "Open PDF CV", variant: "primary" }),
    downloadButton({ href: cv.pdf, label: "Download PDF" })
  ].join("");
}

renderHero();
renderHonors();
renderExperience();
renderProjects();
renderEducation();
renderSkills();
renderContact();
renderPaperCv();
