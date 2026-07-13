"use client";

import { useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import {
  ArrowUpRight,
  Mail,
  Sparkles,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const navItems = [
  ["Work", "#work"],
  ["Experience", "#experience"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

const skillGroups = [
  {
    title: "BACKEND",
    body: "Java · Spring Boot · Python · FastAPI · Node.js · REST APIs",
  },
  {
    title: "DATA",
    body: "PostgreSQL · SQL · Hibernate/JPA · MySQL · MongoDB · Transaction modeling",
  },
  {
    title: "PAYMENTS & INTEGRATIONS",
    body: "Stripe · Mastercard · Wallet systems · Webhooks · SMS · External APIs · Biometric devices",
  },
  {
    title: "SYSTEMS",
    body: "Kafka · Async workflows · API contracts · Authentication · Authorization · Runtime telemetry",
  },
  {
    title: "DELIVERY",
    body: "Docker · Unit tests · Integration tests · Git · Production support · Code review",
  },
];

const projects = [
  {
    index: "01",
    name: "Threadline",
    metadata: "RUNTIME DIAGNOSTICS · FASTAPI · POSTGRESQL",
    summary: "A debugging system built around runtime evidence instead of guesses.",
    full: [
      "Threadline collects events from running applications and reconstructs what a backend request actually did: where it started, which operations ran, what the database did, where it failed, and what evidence exists around the failure.",
      "I built the ingestion pipeline, raw evidence storage, deterministic flow reconstruction, project authentication, and source-intelligence work that connects runtime behavior back to code.",
    ],
    details: [
      "EVENT INGESTION",
      "FLOW RECONSTRUCTION",
      "SOURCE INTELLIGENCE",
      "DATABASE EVIDENCE",
    ],
    linkText: "View Threadline",
  },
  {
    index: "02",
    name: "Odoo Infrastructure Control Plane",
    metadata: "INFRASTRUCTURE AUTOMATION · SPRING BOOT · PYTHON",
    summary: "One place to provision, configure, and operate Odoo instances across remote servers.",
    full: [
      "A control plane for managing self-hosted Odoo deployments across remote Linux machines. Spring Boot owns hosts, instances, deployment actions, and operational state. A Python provisioning layer carries out SSH and Docker operations.",
      "Credentials are encrypted at rest, deployment actions are tracked, and the backend remains the source of truth instead of leaving server state scattered across scripts and terminals.",
    ],
    details: [
      "REMOTE HOSTS",
      "ENCRYPTED SSH",
      "DOCKER OPERATIONS",
      "DEPLOYMENT STATE",
    ],
    linkText: "View project",
  },
  {
    index: "03",
    name: "Backend-Controlled Credit Ledger",
    metadata: "PAYMENTS · SPRING BOOT · STRIPE",
    summary: "A credit system that stopped trusting the browser.",
    full: [
      "I replaced a frontend-authoritative credit flow with a backend-controlled ledger and synchronization model. Credit calculation, balance checks, mutation rules, and sensitive actions moved into Spring Boot service workflows.",
      "The release removed the class of inconsistencies that had been generating credit-related support tickets. Those tickets stopped after the new system went live.",
    ],
    details: [
      "CREDIT LEDGER",
      "STRIPE WEBHOOKS",
      "BALANCE RULES",
      "CONTENT OWNERSHIP",
    ],
    outcome: "CREDIT SUPPORT TICKETS: 0 POST-RELEASE",
    linkText: "View project",
  },
  {
    index: "04",
    name: "Business Operations Systems",
    metadata: "WORKFLOWS · PAYMENTS · POSTGRESQL",
    summary: "Manual business processes turned into systems with explicit state, rules, and history.",
    full: [
      "At ETTA Solutions, I worked on tender approvals, internal transfers, Mastercard payment processing, wallet transactions, document verification, SMS notifications, and legacy CNET data migration.",
      "The systems handled active business operations, so the backend had to account for approvals, payment state, operational records, failure cases, and production support after release.",
    ],
    details: [
      "MASTERCARD",
      "WALLET FLOWS",
      "DOCUMENT VERIFICATION",
      "APPROVAL WORKFLOWS",
    ],
    linkText: "View project",
  },
];

const experience = [
  {
    company: "NiteShift Systems",
    role: "JAVA BACKEND ENGINEER",
    period: "FEB 2024 — PRESENT",
    location: "REMOTE",
    text: [
      "Backend ownership across credits, Stripe payments, subscriptions, content ownership, authentication, admin workflows, and production support.",
      "My largest change was moving credit authority out of the frontend and into a backend ledger with controlled mutation rules and balance checks.",
    ],
  },
  {
    company: "ETTA Solutions",
    role: "SOFTWARE ENGINEER · CONTRACT CONSULTANT",
    period: "JUN 2023 — SEP 2024",
    location: "ADDIS ABABA",
    text: [
      "Built business workflow and payment systems used in active operations, including tender management, internal transfers, Mastercard processing, wallet transactions, document verification, SMS services, and legacy data migration.",
    ],
  },
  {
    company: "Ahaz Software Solutions",
    role: "SOFTWARE ENGINEER",
    period: "FEB 2021 — DEC 2022",
    location: "ADDIS ABABA",
    text: [
      "Built HRMS and payroll APIs, automated ZKTeco biometric attendance ingestion, delivered Node.js services for field operations, and supported client systems through deployment and production debugging.",
    ],
  },
];

const tileOffsets = [
  [-44, 34, -9],
  [28, -38, 7],
  [52, 18, 12],
  [-30, -24, -6],
  [18, 42, 8],
  [-54, -12, -13],
  [38, 28, 10],
  [-22, 46, -8],
  [44, -30, 12],
  [-38, 20, -11],
  [20, -44, 6],
  [-48, -28, -7],
];

function ShatterPanel({ name }: { name: string }) {
  const tiles = useMemo(() => Array.from({ length: 12 }), []);

  return (
    <div className="shatter-panel" aria-hidden="true">
      {tiles.map((_, tile) => {
        const col = tile % 4;
        const row = Math.floor(tile / 4);
        const [x, y, rotation] = tileOffsets[tile];

        return (
          <span
            className="shatter-tile"
            key={`${name}-${tile}`}
            data-x={x}
            data-y={y}
            data-rotation={rotation}
            style={{
              backgroundImage: "linear-gradient(135deg, var(--card-from), var(--card-to))",
              backgroundSize: "400% 300%",
              backgroundPosition: `calc(${col * 33.333}% + var(--card-shift, 0%)) ${row * 50}%`,
            }}
          />
        );
      })}
      <span className="shatter-label">{name}</span>
    </div>
  );
}

export default function Home() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(".shatter-tile", {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
        });
        gsap.set(".hero-title, .hero-illustration, .system-layer, .system-code, .timeline-item", {
          opacity: 1,
          y: 0,
          scale: 1,
        });
        gsap.set(".viewport-panel, .section-content", {
          opacity: 1,
          y: 0,
          scale: 1,
        });
        gsap.set(".site-nav", { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        ".site-nav",
        {
          autoAlpha: 0,
          y: -22,
          scale: 0.98,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          ease: "power3.out",
          delay: 0.12,
        },
      );

      gsap.to(".site-nav", {
        "--nav-fill": "rgba(255, 254, 251, 0.9)",
        "--nav-border": "rgba(27, 36, 48, 0.18)",
        boxShadow: "0 18px 70px rgba(27, 36, 48, 0.13)",
        scrollTrigger: {
          trigger: ".portfolio-page",
          start: "clamp(80px top)",
          end: "clamp(bottom bottom)",
          toggleActions: "play none none reverse",
        },
      });

      navItems.forEach(([, href]) => {
        const section = document.querySelector(href);
        const link = document.querySelector(`[data-nav-target="${href}"]`);

        if (!section || !link) {
          return;
        }

        ScrollTrigger.create({
          trigger: section,
          start: "clamp(top 48%)",
          end: "clamp(bottom 48%)",
          onEnter: () => {
            document
              .querySelectorAll(".nav-link.is-active")
              .forEach((activeLink) => activeLink.classList.remove("is-active"));
            link.classList.add("is-active");
          },
          onEnterBack: () => {
            document
              .querySelectorAll(".nav-link.is-active")
              .forEach((activeLink) => activeLink.classList.remove("is-active"));
            link.classList.add("is-active");
          },
        });
      });

      gsap.to(document.documentElement, {
        "--page-wash": "#fff1f6",
        ease: "none",
        scrollTrigger: {
          trigger: ".portfolio-page",
          start: "clamp(top top)",
          end: "clamp(20% top)",
          scrub: true,
        },
      });

      gsap.to(document.documentElement, {
        "--page-wash": "#eaf7ff",
        ease: "none",
        scrollTrigger: {
          trigger: "#work",
          start: "clamp(top 72%)",
          end: "clamp(bottom 28%)",
          scrub: true,
        },
      });

      gsap.to(document.documentElement, {
        "--page-wash": "#fff4cf",
        ease: "none",
        scrollTrigger: {
          trigger: "#about",
          start: "clamp(top 72%)",
          end: "clamp(bottom 28%)",
          scrub: true,
        },
      });

      gsap.to(document.documentElement, {
        "--page-wash": "#fff0f6",
        ease: "none",
        scrollTrigger: {
          trigger: "#experience",
          start: "clamp(top 72%)",
          end: "clamp(bottom 28%)",
          scrub: true,
        },
      });

      gsap.to(document.documentElement, {
        "--page-wash": "#f5ecff",
        ease: "none",
        scrollTrigger: {
          trigger: "#skills",
          start: "clamp(top 72%)",
          end: "clamp(bottom 28%)",
          scrub: true,
        },
      });

      gsap.to(document.documentElement, {
        "--page-wash": "#edf8ff",
        ease: "none",
        scrollTrigger: {
          trigger: "#contact",
          start: "clamp(top 76%)",
          end: "clamp(bottom bottom)",
          scrub: true,
        },
      });

      gsap.to(".experience-section", {
        "--experience-wash": "#fff1f6",
        ease: "none",
        scrollTrigger: {
          trigger: "#experience",
          start: "clamp(top 75%)",
          end: "clamp(bottom 25%)",
          scrub: true,
        },
      });

      [
        {
          selector: ".project-card",
          from: "#FFE29E",
          to: "#FFC7DA",
          orb: "#7FC7EE",
        },
        {
          selector: ".capability-card",
          from: "#FFC7DA",
          to: "#AEDDF7",
          orb: "#FFCB5C",
        },
        {
          selector: ".timeline-content",
          from: "#AEDDF7",
          to: "#FFE29E",
          orb: "#FF9DC0",
        },
      ].forEach(({ selector, from, to, orb }) => {
        gsap.utils.toArray<HTMLElement>(selector).forEach((card) => {
          gsap.to(card, {
            "--card-from": from,
            "--card-to": to,
            "--card-orb": orb,
            "--card-wash": "#fff8df",
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "clamp(top 86%)",
              end: "clamp(bottom 24%)",
              scrub: 1,
            },
          });
        });
      });

      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
        gsap.to(card, {
          "--card-shift": "100%",
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "clamp(top 86%)",
            end: "clamp(bottom 24%)",
            scrub: 1,
          },
        });
      });

      const pointerCleanups: Array<() => void> = [];
      const heroPanel = root.current?.querySelector<HTMLElement>(".hero-panel");
      const heroDepthLayers = heroPanel
        ? Array.from(heroPanel.querySelectorAll<HTMLElement>(".hero-depth-layer"))
        : [];

      if (
        heroPanel &&
        heroDepthLayers.length > 0 &&
        window.matchMedia("(hover: hover) and (pointer: fine)").matches
      ) {
        gsap.set(heroDepthLayers, { x: 0, y: 0 });

        const depthSetters = heroDepthLayers.map((layer) => {
          const depthX = Number(layer.dataset.depthX ?? 8);
          const depthY = Number(layer.dataset.depthY ?? 8);

          return {
            depthX,
            depthY,
            xTo: gsap.quickTo(layer, "x", {
              duration: 0.85,
              ease: "power3.out",
            }),
            yTo: gsap.quickTo(layer, "y", {
              duration: 0.85,
              ease: "power3.out",
            }),
          };
        });

        const moveHeroLayers = (event: PointerEvent) => {
          const rect = heroPanel.getBoundingClientRect();
          const normalizedX = gsap.utils.clamp(
            -1,
            1,
            ((event.clientX - rect.left) / rect.width - 0.5) * 2,
          );
          const normalizedY = gsap.utils.clamp(
            -1,
            1,
            ((event.clientY - rect.top) / rect.height - 0.5) * 2,
          );

          depthSetters.forEach(({ depthX, depthY, xTo, yTo }) => {
            xTo(normalizedX * depthX);
            yTo(normalizedY * depthY);
          });
        };

        const resetHeroLayers = () => {
          depthSetters.forEach(({ xTo, yTo }) => {
            xTo(0);
            yTo(0);
          });
        };

        heroPanel.addEventListener("pointermove", moveHeroLayers);
        heroPanel.addEventListener("pointerleave", resetHeroLayers);

        pointerCleanups.push(() => {
          heroPanel.removeEventListener("pointermove", moveHeroLayers);
          heroPanel.removeEventListener("pointerleave", resetHeroLayers);
          resetHeroLayers();
          gsap.killTweensOf(heroDepthLayers);
        });
      }

      const split = new SplitText(".scroll-reveal-copy", {
        type: "words",
        wordsClass: "reveal-word",
      });

      gsap.set(split.words, { opacity: 0.18, y: 14 });
      gsap.set(".hero-title", {
        autoAlpha: 0,
        y: 28,
        scale: 0.985,
        transformOrigin: "0% 50%",
      });
      gsap.set(".hero-illustration", { autoAlpha: 0, y: -16, scale: 0.985 });
      gsap.set(".system-layer, .system-code", { autoAlpha: 0, y: 18, scale: 0.97 });
      gsap.set(".hero-actions a", { autoAlpha: 0, y: 14, scale: 0.98 });
      gsap
        .timeline({
          defaults: { ease: "power3.out" },
        })
        .to(
          ".hero-title",
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
          },
          0,
        )
        .to(split.words, {
          opacity: 1,
          y: 0,
          stagger: 0.035,
          duration: 0.65,
        }, 0.08)
        .to(
          ".hero-actions a",
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            stagger: 0.08,
            ease: "back.out(1.6)",
          },
          0.28,
        )
        .to(
          ".hero-illustration",
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            ease: "back.out(1.35)",
          },
          0.18,
        )
        .to(
          ".system-layer, .system-code",
          { autoAlpha: 1, y: 0, scale: 1, stagger: 0.08, ease: "power2.out" },
          0.34,
        );

      const headingSplits = gsap.utils
        .toArray<HTMLElement>(".pop-heading")
        .map((heading) => {
          const split = new SplitText(heading, {
            type: "words",
            wordsClass: "pop-word",
          });

          gsap.set(split.words, {
            autoAlpha: 0,
            yPercent: 105,
            scale: 0.94,
            rotateX: -16,
            transformOrigin: "50% 100%",
          });

          gsap.to(split.words, {
            autoAlpha: 1,
            yPercent: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.72,
            ease: "back.out(1.8)",
            stagger: { each: 0.045, from: "start" },
            scrollTrigger: {
              trigger: heading,
              start: "clamp(top 82%)",
              once: true,
            },
          });

          return split;
        });

      gsap.utils.toArray<HTMLElement>(".pop-copy").forEach((item) => {
        gsap.fromTo(
          item,
          {
            autoAlpha: 0,
            y: 28,
            scale: 0.97,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.58,
            ease: "back.out(1.45)",
            scrollTrigger: {
              trigger: item,
              start: "clamp(top 86%)",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".viewport-panel").forEach((panel) => {
        const panelContent = panel.querySelector(".section-content");

        if (panelContent) {
          gsap.fromTo(
            panelContent,
            {
              y: 48,
              scale: 0.985,
              autoAlpha: 0,
            },
            {
              y: 0,
              scale: 1,
              autoAlpha: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: panel,
                start: "clamp(top 72%)",
                end: "clamp(top 35%)",
                toggleActions: "play none none reverse",
              },
            },
          );
        }
      });

      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
        const tiles = card.querySelectorAll(".shatter-tile");

        gsap.set(tiles, {
          opacity: 0,
          x: (_, tile) => Number((tile as HTMLElement).dataset.x),
          y: (_, tile) => Number((tile as HTMLElement).dataset.y),
          rotate: (_, tile) => Number((tile as HTMLElement).dataset.rotation),
        });

        gsap.to(tiles, {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: { each: 0.035, from: "random" },
          scrollTrigger: {
            trigger: card,
            start: "clamp(top 72%)",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((item) => {
        gsap.fromTo(
          item,
          {
            autoAlpha: 0,
            y: 42,
            scale: 0.98,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "clamp(top 82%)",
              once: true,
            },
          },
        );
      });

      let isActive = true;
      const refresh = () => {
        if (isActive) {
          ScrollTrigger.refresh();
        }
      };
      window.addEventListener("load", refresh, { once: true });
      document.fonts?.ready.then(refresh);

      return () => {
        isActive = false;
        window.removeEventListener("load", refresh);
        pointerCleanups.forEach((cleanup) => cleanup());
        split.revert();
        headingSplits.forEach((headingSplit) => headingSplit.revert());
      };
    },
    { scope: root },
  );

  return (
    <main ref={root} className="portfolio-page">
      <section id="top" className="hero snap-section">
        <div className="hero-panel">
          <nav className="site-nav" aria-label="Primary navigation">
            <a className="brand" href="#top" aria-label="Israel Asefa home">
              <span>IA</span>
              <strong>
                Israel Asefa
                <small>Backend systems</small>
              </strong>
            </a>

            <div className="nav-links">
              {navItems.map(([label, href]) => (
                <a
                  className={`nav-link${href === "#top" ? " is-active" : ""}`}
                  data-nav-target={href}
                  key={label}
                  href={href}
                >
                  {label}
                </a>
              ))}
            </div>

            <a className="nav-action" href="#contact">
              Let’s talk <ArrowUpRight size={15} />
            </a>
          </nav>

          <div className="hero-illustration" aria-hidden="true">
            <div
              className="system-grid hero-depth-layer"
              data-depth-x="3"
              data-depth-y="2"
            />

            <svg
              className="trace-lines hero-depth-layer"
              data-depth-x="-5"
              data-depth-y="-3"
              viewBox="0 0 720 430"
              role="presentation"
            >
              <path d="M188 218 C270 150 365 152 420 112 C472 74 508 72 570 88" />
              <path d="M188 218 C312 284 424 284 548 270 C594 264 628 250 658 230" />
              <path d="M398 82 C446 132 510 164 558 216 C596 256 608 288 610 326" />
            </svg>

            <div
              className="system-layer layer-api hero-depth-layer"
              data-depth-x="8"
              data-depth-y="7"
            >
              <span>API</span>
              <strong>Request boundary</strong>
              <small>184 MS</small>
            </div>

            <div
              className="system-layer layer-events hero-depth-layer"
              data-depth-x="-9"
              data-depth-y="5"
            >
              <span>EVENTS</span>
              <strong>Runtime stream</strong>
              <small>HEALTHY</small>
            </div>

            <div
              className="system-layer layer-case hero-depth-layer"
              data-depth-x="14"
              data-depth-y="-10"
            >
              <span>CASE FILE</span>
              <strong>Flow reconstruction</strong>
              <small>TRACE</small>
            </div>

            <div
              className="system-layer layer-db hero-depth-layer"
              data-depth-x="-6"
              data-depth-y="10"
            >
              <span>DB</span>
              <strong>Evidence store</strong>
            </div>

            <div
              className="system-code hero-depth-layer"
              data-depth-x="18"
              data-depth-y="12"
            >
              <span>SOURCE</span>
              <code>INGESTION</code>
              <code>TRACE</code>
            </div>

            <div
              className="hero-bubble-parallax hero-depth-layer bubble-hero-one"
              data-depth-x="22"
              data-depth-y="14"
            >
              <div className="bubble hero-bubble-surface" />
            </div>
            <div
              className="hero-bubble-parallax hero-depth-layer bubble-hero-two"
              data-depth-x="-12"
              data-depth-y="-9"
            >
              <div className="bubble hero-bubble-surface" />
            </div>
            <div
              className="hero-bubble-parallax hero-depth-layer bubble-hero-three"
              data-depth-x="10"
              data-depth-y="-16"
            >
              <div className="bubble hero-bubble-surface" />
            </div>
          </div>

          <div className="hero-copy">
            <p className="eyebrow">BACKEND ENGINEER · ADDIS ABABA</p>
            <h1 className="hero-title">
              I build backend
              <br />
              systems for the parts
              <br />
              that can’t be hand-waved.
            </h1>
            <p className="scroll-reveal-copy">
              Payments, ledgers, APIs, integrations, and runtime diagnostics.
              My work usually starts where state, failure, permissions, or
              money enter the picture.
            </p>
            <div className="hero-actions">
              <a className="primary-link" href="#work">
                View my work <ArrowUpRight size={18} />
              </a>
              <a className="secondary-link" href="#about">
                About me <ArrowUpRight size={18} />
              </a>
            </div>
            <p className="hero-status">OPEN TO REMOTE BACKEND ROLES</p>
          </div>
        </div>
      </section>

      <section id="work" className="section viewport-panel snap-section work-section">
        <div className="bubble bubble-work" />
        <div className="section-content">
          <div className="section-heading">
            <span className="section-index">01</span>
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2 className="pop-heading">Systems I’ve built and owned.</h2>
              <p className="section-intro pop-copy">
                Product backends, operational software, infrastructure tooling,
                and one debugging system born out of being tired of guessing
                what happened in production.
              </p>
            </div>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <ShatterPanel name={project.name} />
                <div className="project-content pop-copy">
                  <span className="project-index">{project.index}</span>
                  <h3>{project.name}</h3>
                  <p className="project-meta">{project.metadata}</p>
                  <p>{project.summary}</p>
                  <div className="project-full">
                    {project.full.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <ul className="project-detail-labels">
                    {project.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  {project.outcome ? (
                    <p className="project-outcome">{project.outcome}</p>
                  ) : null}
                  <a className="project-link" href="#contact">
                    {project.linkText} <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section viewport-panel snap-section about-section text-section">
        <div className="bubble bubble-about" />
        <div className="section-content text-section-content">
          <div className="section-heading compact">
            <span className="section-index">02</span>
            <div>
              <p className="eyebrow">ABOUT</p>
              <h2 className="pop-heading">Most of my work lives behind the interface.</h2>
            </div>
          </div>

          <div className="body-copy pop-copy">
            <p>
              I’m Israel Asefa, a backend engineer based in Addis Ababa. I’ve
              spent more than four years building payment flows, credit systems,
              internal tools, data models, enterprise integrations, and
              production APIs.
            </p>
            <p>
              I do my best work when the problem has state, failure modes,
              permissions, or money attached to it. That usually means deciding
              where authority belongs, how changes are recorded, what happens
              when an external service retries, and whether the system leaves
              enough evidence to explain a failure later.
            </p>
            <p>
              I care about where truth lives in software. Credit balances should
              belong to the backend. Payment state should survive retries.
              Production failures should leave evidence. That way of thinking
              runs through my client work and through Threadline, the debugging
              system I’m building.
            </p>
            <p className="meta-line">BSC COMPUTER SCIENCE · HILCOE · 2022</p>
          </div>
        </div>
      </section>

      <section id="working-style" className="section viewport-panel snap-section style-section text-section">
        <div className="bubble bubble-style" />
        <div className="section-content text-section-content">
          <div className="section-heading compact">
            <span className="section-index">03</span>
            <div>
              <p className="eyebrow">HOW I WORK</p>
              <h2 className="pop-heading">I like systems with a clear owner.</h2>
            </div>
          </div>

          <div className="body-copy pop-copy">
            <p>
              Business rules belong somewhere deliberate. State changes need a
              record. Sensitive actions need validation at the boundary that
              controls them. When those decisions are vague, the bugs usually
              show up later as support tickets, mismatched balances, missing
              access, or production behavior nobody can explain.
            </p>
            <p>
              I don’t treat debugging as cleanup after the real engineering is
              done. Production behavior is part of the system. So are retries,
              partial failures, stale state, bad input, and the awkward edge
              cases that only appear after release.
            </p>
            <p>
              I prefer backend work, though I can cross the stack when the
              product needs it. My strongest contribution is usually the part
              beneath the screen: the rules, data, integrations, APIs, and
              operational behavior holding everything together.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section viewport-panel snap-section">
        <div className="experience-inner section-content">
          <div className="section-heading compact">
            <span className="section-index">04</span>
            <div>
              <p className="eyebrow">EXPERIENCE</p>
              <h2 className="pop-heading">Where I’ve worked.</h2>
            </div>
          </div>

          <div className="experience-list">
            {experience.map((item, index) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-marker">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="timeline-content">
                  <div className="timeline-topline">
                    <span className="experience-date">{item.period}</span>
                    <strong>{item.location}</strong>
                  </div>
                  <h3>{item.company}</h3>
                  <p className="timeline-role">{item.role}</p>
                  {item.text.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section viewport-panel snap-section skills-section">
        <div className="bubble bubble-skills" />
        <div className="section-content">
          <div className="section-heading compact">
            <span className="section-index">05</span>
            <div>
              <p className="eyebrow">TOOLS I WORK WITH</p>
              <h2 className="pop-heading">Backend first. Close to the system.</h2>
            </div>
          </div>

          <div className="capability-grid">
            {skillGroups.map((capability) => (
              <article className="capability-card pop-copy" key={capability.title}>
                <Sparkles size={20} />
                <h3>{capability.title}</h3>
                <p>{capability.body}</p>
              </article>
            ))}
          </div>
          <p className="skill-note pop-copy">
            I choose tools based on the system in front of me. The harder
            questions usually concern ownership, state, failure, and recovery
            rather than framework preference.
          </p>
        </div>
      </section>

      <section id="contact" className="section viewport-panel snap-section contact-section">
        <div className="bubble bubble-contact" />
        <div className="section-content">
          <p className="eyebrow">CONTACT</p>
          <h2 className="pop-heading">Have a backend problem that needs an owner?</h2>
          <p className="contact-copy pop-copy">
            I’m open to remote backend roles and contract work involving APIs,
            payments, integrations, internal systems, developer tooling, or
            production reliability.
          </p>
          <p className="availability">AVAILABLE FOR REMOTE WORK</p>
          <div className="contact-actions">
            <a className="primary-link" href="mailto:israel.asefawm.mi1055@gmail.com">
              <Mail size={18} /> Email me
            </a>
            <a
              className="secondary-link"
              href="https://www.linkedin.com/in/israel-asefa"
              target="_blank"
            >
              LinkedIn <ArrowUpRight size={18} />
            </a>
          </div>
          <p className="email-line">israel.asefawm.mi1055@gmail.com</p>
        </div>
      </section>

      <footer className="site-footer snap-section">
        <div>
          <strong>Israel Asefa</strong>
          <span>Backend Engineer · Addis Ababa</span>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#work">Work</a>
          <a href="https://www.linkedin.com/in/israel-asefa" target="_blank">LinkedIn</a>
          <a href="mailto:israel.asefawm.mi1055@gmail.com">Email</a>
        </nav>
        <p>BUILT WITH CARE, TESTED AGAINST REAL CONTENT.</p>
      </footer>
    </main>
  );
}
