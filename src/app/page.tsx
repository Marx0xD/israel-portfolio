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
    title: "Backend systems",
    body: "Java, Spring Boot, Python, FastAPI, Node.js, REST APIs, authentication, authorization, business rules, and service boundaries.",
  },
  {
    title: "Data and state",
    body: "PostgreSQL, SQL, Hibernate/JPA, MySQL, MongoDB, relational modeling, transactions, ledgers, ownership records, and operational history.",
  },
  {
    title: "Payments and integrations",
    body: "Stripe, Mastercard, wallet systems, webhooks, SMS services, external APIs, biometric devices, and legacy data migration.",
  },
  {
    title: "Runtime and delivery",
    body: "Kafka, asynchronous workflows, Docker, unit tests, integration tests, code reviews, deployment support, and production debugging.",
  },
];

const projects = [
  {
    index: "01",
    name: "Credit Ledger",
    metadata: "NITESHIFT SYSTEMS · SPRING BOOT · STRIPE",
    title: "I stopped the browser from deciding how much credit a user had.",
    summary: "The old credit flow trusted frontend state. That made balance logic easy to desynchronize and hard to support.",
    full: [
      "I rebuilt it around a backend-controlled ledger. Credit calculation, mutation rules, available-balance checks, and sensitive actions moved into Spring Boot service workflows.",
      "The work went beyond moving a few checks into an API.",
      "I had to decide where credit authority lived, how purchases and subscriptions affected access, which actions could mutate a balance, and how the backend would stay consistent when Stripe events, user actions, and content ownership crossed paths.",
      "The result was a system with one owner for credit state and a much smaller class of failures.",
    ],
    details: [
      "CREDIT LEDGER",
      "STRIPE CHECKOUT",
      "WEBHOOKS",
      "BALANCE RULES",
      "CONTENT OWNERSHIP",
      "POSTGRESQL",
    ],
    outcome: "Credit-related support tickets dropped to zero after release.",
    linkText: "Talk about backend ownership",
  },
  {
    index: "02",
    name: "Threadline",
    metadata: "RUNTIME DIAGNOSTICS · FASTAPI · POSTGRESQL",
    title: "Threadline turns backend execution into evidence.",
    summary: "Threadline collects runtime events and reconstructs what a request actually did.",
    full: [
      "It orders events, detects request start and completion, builds operation trees, summarizes database activity, extracts errors, and produces a case file that can be inspected without guessing from scattered logs.",
      "I am building Threadline around a simple belief: production failures should leave enough evidence to explain themselves.",
      "The system includes SDK telemetry, ingestion, raw event storage, deterministic flow reconstruction, project authentication, and source intelligence that connects runtime behavior back to code.",
      "Threadline is also proof of how I think. I care about causality, system state, boundaries, and whether an engineer can answer “what happened?” after the fact.",
    ],
    details: [
      "EVENT INGESTION",
      "FLOW RECONSTRUCTION",
      "DB EVIDENCE",
      "SOURCE INTELLIGENCE",
      "CASE FILES",
      "FASTAPI",
    ],
    linkText: "View Threadline",
  },
  {
    index: "03",
    name: "Odoo Control Plane",
    metadata: "INFRASTRUCTURE AUTOMATION · SPRING BOOT · PYTHON",
    title: "One control plane for Odoo instances spread across remote servers.",
    summary: "I designed a system for registering hosts, provisioning Odoo instances, managing deployment actions, and tracking operational state without relying on loose scripts and terminal history.",
    full: [
      "Spring Boot owns the system state. A Python provisioning layer performs SSH and Docker operations on remote Linux hosts.",
      "The platform handles encrypted SSH credentials, Odoo and PostgreSQL services, deployment actions, configuration, and instance lifecycle commands such as start, stop, and update.",
      "This project sits where backend engineering, infrastructure, and operational safety meet.",
    ],
    details: [
      "REMOTE HOSTS",
      "ENCRYPTED SSH",
      "DOCKER",
      "DEPLOYMENT STATE",
      "SPRING BOOT",
      "PYTHON",
    ],
    linkText: "View project",
  },
  {
    index: "04",
    name: "Business Systems",
    metadata: "ETTA SOLUTIONS · PAYMENTS · OPERATIONS",
    title: "I turned manual business processes into systems with explicit rules and history.",
    summary: "At ETTA Solutions, I worked across tender management, internal transfers, Mastercard payment processing, digital wallet flows, document verification, SMS services, and legacy CNET data migration.",
    full: [
      "These systems were used in active business operations. That meant approval state, payment status, operational records, retries, data integrity, and support after release all mattered.",
      "I also delivered an ERCA-compliant document signature and verification service that used hashing-based checks to detect tampering.",
    ],
    details: [
      "MASTERCARD",
      "WALLET FLOWS",
      "APPROVALS",
      "DOCUMENT VERIFICATION",
      "SMS",
      "DATA MIGRATION",
    ],
    linkText: "View project",
  },
  {
    index: "05",
    name: "Early Engineering",
    metadata: "AHAZ SOFTWARE SOLUTIONS · HRMS · INTEGRATIONS",
    title: "I learned backend engineering inside systems people depended on every day.",
    summary: "At Ahaz, I built HRMS and payroll APIs, automated ZKTeco biometric attendance ingestion, and delivered Node.js services for employee attendance, site allocation, and field operations.",
    full: [
      "The work included data normalization, payroll logic, deployment support, and production debugging for client systems.",
      "That period gave me a practical bias I still carry: software is not finished when the endpoint returns 200. It is finished when the surrounding workflow works.",
    ],
    details: [
      "HRMS",
      "PAYROLL",
      "ATTENDANCE",
      "BIOMETRIC INGESTION",
      "NODE.JS",
      "PRODUCTION DEBUGGING",
    ],
    linkText: "Talk about systems work",
  },
];

const experience = [
  {
    company: "NiteShift Systems",
    role: "JAVA BACKEND ENGINEER",
    period: "FEB 2024 — PRESENT",
    location: "REMOTE",
    text: [
      "Owned backend work across credits, Stripe payments, subscriptions, purchases, content ownership, authentication, admin workflows, and production support.",
      "The largest change was replacing frontend-authoritative credit logic with a backend-controlled ledger and synchronization model.",
    ],
  },
  {
    company: "ETTA Solutions",
    role: "SOFTWARE ENGINEER · CONTRACT CONSULTANT",
    period: "JUN 2023 — SEP 2024",
    location: "ADDIS ABABA",
    text: [
      "Built payment, procurement, transfer, verification, and internal operations systems used by active businesses.",
      "Worked with Mastercard processing, digital wallets, SMS services, PostgreSQL workflows, and legacy data migration.",
    ],
  },
  {
    company: "Ahaz Software Solutions",
    role: "SOFTWARE ENGINEER",
    period: "FEB 2021 — DEC 2022",
    location: "ADDIS ABABA",
    text: [
      "Built HRMS, payroll, attendance, and field-operation APIs.",
      "Automated biometric device ingestion and supported client systems through deployment, debugging, and production use.",
    ],
  },
];

const valuePoints = [
  "I move authority out of fragile clients and into controlled backend workflows.",
  "I design state changes so balances, ownership, approvals, and payment status stay consistent.",
  "I work across APIs, databases, webhooks, background flows, external services, and production support.",
  "I do not treat release day as the end of the engineering work.",
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
              I build backend systems
              <br />
              that hold up when money, state,
              <br />
              and production pressure enter the room.
            </h1>
            <p className="scroll-reveal-copy">
              I’m Israel Asefa. I design APIs, payment flows, ledgers,
              integrations, and internal systems where the backend has to be the
              source of truth.
            </p>
            <p className="hero-support-copy">
              I’ve spent more than four years turning fragile workflows into
              controlled systems, fixing production failures, and building
              software that can explain what happened after something goes
              wrong.
            </p>
            <div className="hero-actions">
              <a className="primary-link" href="#work">
                View my work <ArrowUpRight size={18} />
              </a>
              <a className="secondary-link" href="#contact">
                Talk to me <ArrowUpRight size={18} />
              </a>
            </div>
            <p className="hero-status">OPEN TO REMOTE BACKEND ROLES</p>
            <p className="credibility-strip">
              4+ YEARS · SPRING BOOT · FASTAPI · NODE.JS · POSTGRESQL ·
              PAYMENTS · PRODUCTION SYSTEMS
            </p>
          </div>
        </div>
      </section>

      <section id="why" className="section viewport-panel snap-section value-section text-section">
        <div className="bubble bubble-about" />
        <div className="section-content text-section-content">
          <div className="section-heading compact">
            <span className="section-index">01</span>
            <div>
              <p className="eyebrow">WHY ISRAEL</p>
              <h2 className="pop-heading">Bring me in when the backend needs an owner.</h2>
            </div>
          </div>

          <div className="body-copy pop-copy">
            <p>Some backend work is routine. Mine usually starts after the easy part.</p>
            <p>
              A balance is wrong. A payment completed but access was never
              granted. Two systems disagree about the same user. A manual
              process has become too expensive to keep running. Production
              failed, and the logs do not explain why.
            </p>
            <p>That is the work I am built for.</p>
            <p>
              I trace the real source of truth, move important rules to the
              right boundary, model the state properly, and leave the system
              easier to reason about than I found it.
            </p>
            <ul className="value-list">
              {valuePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="work" className="section viewport-panel snap-section work-section">
        <div className="bubble bubble-work" />
        <div className="section-content">
          <div className="section-heading">
            <span className="section-index">02</span>
            <div>
              <p className="eyebrow">PROOF</p>
              <h2 className="pop-heading">The work behind the claim.</h2>
              <p className="section-intro pop-copy">
                These are not demo projects built to fill a grid. They come
                from payment systems, business operations, infrastructure
                automation, and a debugging product I started because guessing
                about production behavior was not good enough.
              </p>
            </div>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <ShatterPanel name={project.name} />
                <div className="project-content pop-copy">
                  <span className="project-index">{project.index}</span>
                  <p className="project-meta">{project.metadata}</p>
                  <h3>{project.title}</h3>
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
            <span className="section-index">03</span>
            <div>
              <p className="eyebrow">ABOUT ISRAEL</p>
              <h2 className="pop-heading">I care about where truth lives in a system.</h2>
            </div>
          </div>

          <div className="body-copy pop-copy">
            <p>I’m a backend engineer based in Addis Ababa, Ethiopia.</p>
            <p>
              My work tends to cluster around payments, ledgers, operational
              workflows, integrations, runtime behavior, and the awkward
              failures that appear after software meets real users.
            </p>
            <p>
              I like systems with clear authority. Credit belongs to the
              backend. Payment state has to survive retries. Sensitive actions
              need validation at the boundary that controls them. Production
              failures should leave evidence.
            </p>
            <p>
              That way of thinking runs through my client work and the products
              I build for myself.
            </p>
            <p>
              I can work across the stack, but my strongest contribution is
              beneath the interface: business rules, APIs, data models,
              integrations, and the operational behavior holding the product
              together.
            </p>
            <p className="meta-line">BSC COMPUTER SCIENCE · HILCOE · 2022</p>
          </div>
        </div>
      </section>

      <section id="working-style" className="section viewport-panel snap-section style-section text-section">
        <div className="bubble bubble-style" />
        <div className="section-content text-section-content">
          <div className="section-heading compact">
            <span className="section-index">04</span>
            <div>
              <p className="eyebrow">HOW I WORK</p>
              <h2 className="pop-heading">Clear ownership. Explicit state. Evidence when things fail.</h2>
            </div>
          </div>

          <div className="body-copy pop-copy">
            <p>I start by finding the real authority in the system.</p>
            <p>
              Who owns the balance? Which service decides access? What happens
              when a webhook arrives twice? Can a partial failure leave two
              databases telling different stories? Will someone understand this
              incident six months from now?
            </p>
            <p>Those questions shape the design.</p>
            <p>
              I prefer small, explicit boundaries over hidden behavior. I test
              failure paths, not only happy paths. I stay close to production
              because the real system is the one users are touching, not the one
              imagined in a ticket.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section viewport-panel snap-section">
        <div className="experience-inner section-content">
          <div className="section-heading compact">
            <span className="section-index">05</span>
            <div>
              <p className="eyebrow">EXPERIENCE</p>
              <h2 className="pop-heading">Four years of backend work under real business constraints.</h2>
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
            <span className="section-index">06</span>
            <div>
              <p className="eyebrow">WHAT YOU GET</p>
              <h2 className="pop-heading">Backend range without vague ownership.</h2>
              <p className="section-intro pop-copy">
                I am most useful when the job crosses more than one layer and
                still needs one person to understand the whole flow.
              </p>
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
            Frameworks change. The harder work is deciding who owns the state,
            what can fail, and how the system recovers.
          </p>
        </div>
      </section>

      <section id="contact" className="section viewport-panel snap-section contact-section">
        <div className="bubble bubble-contact" />
        <div className="section-content">
          <p className="eyebrow">WORK WITH ISRAEL</p>
          <h2 className="pop-heading">Need someone who can take ownership of the backend, not just close tickets?</h2>
          <p className="contact-copy pop-copy">
            I’m open to remote backend roles and selected contract work.
          </p>
          <p className="contact-copy pop-copy">
            The best fit is a product dealing with payments, internal
            operations, integrations, developer tooling, infrastructure, or
            production reliability. Give me a system with real state and real
            consequences. That is where I do my best work.
          </p>
          <p className="availability">AVAILABLE FOR REMOTE BACKEND WORK</p>
          <div className="contact-actions">
            <a className="primary-link" href="mailto:israel.asefawm.mi1055@gmail.com">
              <Mail size={18} /> Email Israel
            </a>
            <a
              className="secondary-link"
              href="https://www.linkedin.com/in/israel-asefa"
              target="_blank"
            >
              View LinkedIn <ArrowUpRight size={18} />
            </a>
          </div>
          <p className="email-line">israel.asefawm.mi1055@gmail.com</p>
        </div>
      </section>

      <footer className="site-footer snap-section">
        <div>
          <strong>Israel Asefa</strong>
          <span>BACKEND ENGINEER · ADDIS ABABA</span>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="https://www.linkedin.com/in/israel-asefa" target="_blank">LinkedIn</a>
          <a href="mailto:israel.asefawm.mi1055@gmail.com">Email</a>
        </nav>
        <p>Built around real work, not portfolio filler.</p>
      </footer>
    </main>
  );
}
