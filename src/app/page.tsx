"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import dynamic from "next/dynamic";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import {
  ArrowUpRight,
  Mail,
  Sparkles,
} from "lucide-react";
import { BackendOwnershipDiagram } from "../components/diagrams/BackendOwnershipDiagram";
import { BusinessWorkflowDiagram } from "../components/diagrams/BusinessWorkflowDiagram";
import { CreditLedgerDiagram } from "../components/diagrams/CreditLedgerDiagram";
import { EarlyEngineeringDiagram } from "../components/diagrams/EarlyEngineeringDiagram";
import { EngineeringLoopDiagram } from "../components/diagrams/EngineeringLoopDiagram";
import { OdooControlPlaneDiagram } from "../components/diagrams/OdooControlPlaneDiagram";
import { ThreadlineEvidenceDiagram } from "../components/diagrams/ThreadlineEvidenceDiagram";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const HeroSystemVisual = dynamic(
  () => import("../components/hero/HeroSystemVisual"),
  {
    ssr: false,
    loading: () => (
      <div className="hero-system-visual">
        <div className="hero-system-fallback" aria-hidden="true">
          <div className="fallback-route" />
          <div className="fallback-node fallback-node-api">
            <span>API Boundary</span>
            <small>requests enter</small>
          </div>
          <div className="fallback-node fallback-node-ingestion">
            <span>Ingestion</span>
            <small>events normalized</small>
          </div>
          <div className="fallback-node fallback-node-events">
            <span>Runtime Events</span>
            <small>behavior recorded</small>
          </div>
          <div className="fallback-node fallback-node-store">
            <span>Evidence Store</span>
            <small>state preserved</small>
          </div>
          <div className="fallback-node fallback-node-flow">
            <span>Flow Reconstruction</span>
            <small>case file rebuilt</small>
          </div>
        </div>
      </div>
    ),
  },
);

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
    diagram: "credit",
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
    diagram: "threadline",
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
    diagram: "odoo",
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
    diagram: "business",
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
    diagram: "early",
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

type ProjectDiagramKind = "credit" | "threadline" | "odoo" | "business" | "early";

function ProjectVisual({ kind }: { kind: ProjectDiagramKind }) {
  switch (kind) {
    case "credit":
      return <CreditLedgerDiagram />;
    case "threadline":
      return <ThreadlineEvidenceDiagram />;
    case "odoo":
      return <OdooControlPlaneDiagram />;
    case "business":
      return <BusinessWorkflowDiagram />;
    case "early":
      return <EarlyEngineeringDiagram />;
  }
}

export default function Home() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(".hero-title, .hero-illustration, .system-layer, .system-code, .timeline-item", {
          opacity: 1,
          y: 0,
          scale: 1,
        });
        gsap.set(".project-card, .project-visual-frame, .project-content, .project-detail-labels li, .proof-project-scene, .proof-visual-frame, .proof-project-content, .proof-detail-labels li, .proof-map, .proof-marker, .proof-summary", {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
        });
        gsap.set(".viewport-panel, .section-content", {
          opacity: 1,
          y: 0,
          scale: 1,
        });
        gsap.set(".site-nav", { opacity: 1, y: 0 });
        return;
      }

      const proofMatchMedia = gsap.matchMedia();

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

      const proofSection = root.current?.querySelector<HTMLElement>(".proof-journey-section");

      if (proofSection) {
        const proofStage = proofSection.querySelector<HTMLElement>(".proof-stage");
        const proofHeading = proofSection.querySelector<HTMLElement>(".proof-heading");
        const proofMap = proofSection.querySelector<HTMLElement>(".proof-map");
        const proofSummary = proofSection.querySelector<HTMLElement>(".proof-summary");
        const proofScenes = Array.from(
          proofSection.querySelectorAll<HTMLElement>(".proof-project-scene"),
        );
        const proofMarkers = Array.from(
          proofSection.querySelectorAll<HTMLElement>(".proof-marker"),
        );

        const sceneColors = [
          { from: "#FFC7DA", to: "#AEDDF7", orb: "#FFE29E" },
          { from: "#AEDDF7", to: "#FFE29E", orb: "#FFC7DA" },
          { from: "#FFE29E", to: "#FFC7DA", orb: "#AEDDF7" },
          { from: "#FFC7DA", to: "#FFE29E", orb: "#AEDDF7" },
          { from: "#AEDDF7", to: "#FFC7DA", orb: "#FFE29E" },
        ];

        proofMatchMedia.add("(min-width: 900px)", () => {
          if (!proofStage || !proofHeading || !proofMap || !proofSummary) {
            return;
          }

          gsap.set(proofSection, {
            "--section-from": "#FFC7DA",
            "--section-to": "#AEDDF7",
            "--section-orb": "#FFE29E",
          });
          gsap.set(proofHeading, { autoAlpha: 1, y: 0, scale: 1 });
          gsap.set(proofMap, { autoAlpha: 0, y: 36, scale: 0.96 });
          gsap.set(proofMarkers, { autoAlpha: 0, y: 24, scale: 0.86 });
          gsap.set(proofScenes, { autoAlpha: 0, y: 86, scale: 0.9 });
          gsap.set(proofSummary, { autoAlpha: 0, y: 72, scale: 0.95 });

          proofScenes.forEach((scene) => {
            gsap.set(scene.querySelector(".proof-visual-frame"), {
              autoAlpha: 0,
              y: 28,
              scale: 0.9,
            });
            gsap.set(scene.querySelector(".proof-project-content"), {
              autoAlpha: 0,
              y: 24,
              scale: 0.97,
            });
            gsap.set(scene.querySelectorAll(".proof-detail-labels li"), {
              autoAlpha: 0,
              y: 16,
              scale: 0.9,
            });
          });

          const sceneStartTime = 1.6;
          const sceneStep = 1.45;
          const scrollScreens = proofScenes.length * 1.65 + 2.25;

          const proofTimeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              id: "proof-journey",
              trigger: proofSection,
              start: "top top",
              end: () => `+=${window.innerHeight * scrollScreens}`,
              pin: true,
              pinSpacing: true,
              scrub: 1.35,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          proofTimeline
            .to(
              proofHeading,
              { autoAlpha: 1, y: 0, scale: 1, duration: 0.25, ease: "power2.out" },
              0,
            )
            .to(
              proofHeading,
              {
                y: -40,
                scale: 0.74,
                transformOrigin: "0% 0%",
                duration: 0.72,
                ease: "power1.inOut",
              },
              0.72,
            )
            .to(
              proofMap,
              { autoAlpha: 1, y: 0, scale: 1, duration: 0.58, ease: "power2.out" },
              0.58,
            )
            .to(
              proofMarkers,
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.48,
                stagger: 0.07,
                ease: "back.out(1.4)",
              },
              0.78,
            );

          proofScenes.forEach((scene, index) => {
            const sceneStart = sceneStartTime + index * sceneStep;
            const visual = scene.querySelector<HTMLElement>(".proof-visual-frame");
            const content = scene.querySelector<HTMLElement>(".proof-project-content");
            const labels = scene.querySelectorAll<HTMLElement>(".proof-detail-labels li");
            const marker = proofMarkers[index];
            const previousScene = proofScenes[index - 1];
            const color = sceneColors[index % sceneColors.length];
            const diagram = scene.querySelector<HTMLElement>(".diagram-shell");
            const isEven = index % 2 === 1;

            if (previousScene) {
              proofTimeline.to(
                previousScene,
                {
                  autoAlpha: 0,
                  y: -76,
                  scale: 0.9,
                  duration: 0.46,
                  ease: "power1.in",
                },
                sceneStart - 0.22,
              );
            }

            proofTimeline
              .to(
                proofSection,
                {
                  "--section-from": color.from,
                  "--section-to": color.to,
                  "--section-orb": color.orb,
                  duration: 0.78,
                },
                sceneStart - 0.18,
              )
              .to(
                proofMarkers,
                { autoAlpha: 0.42, scale: 0.92, duration: 0.34, ease: "power1.out" },
                sceneStart - 0.12,
              )
              .to(
                marker,
                { autoAlpha: 1, scale: 1.12, duration: 0.34, ease: "back.out(1.5)" },
                sceneStart - 0.12,
              )
              .to(
                scene,
                { autoAlpha: 1, y: 0, scale: 1, duration: 0.58, ease: "power2.out" },
                sceneStart,
              );

            if (visual) {
              proofTimeline.fromTo(
                visual,
                {
                  autoAlpha: 0,
                  x: isEven ? 90 : -90,
                  y: 34,
                  scale: 0.88,
                  rotate: isEven ? 3 : -3,
                },
                {
                  autoAlpha: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                  duration: 0.66,
                  ease: "power2.out",
                },
                sceneStart + 0.05,
              );
            }

            if (content) {
              proofTimeline.fromTo(
                content,
                { autoAlpha: 0, x: isEven ? -68 : 68, y: 22, scale: 0.97 },
                {
                  autoAlpha: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  duration: 0.58,
                  ease: "power2.out",
                },
                sceneStart + 0.12,
              );
            }

            if (labels.length > 0) {
              proofTimeline.to(
                labels,
                {
                  autoAlpha: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.32,
                  stagger: 0.025,
                  ease: "back.out(1.6)",
                },
                sceneStart + 0.3,
              );
            }

            if (diagram) {
              proofTimeline.to(
                diagram,
                {
                  yPercent: isEven ? -3.5 : 3.5,
                  scale: 1.025,
                  duration: 0.74,
                },
                sceneStart + 0.38,
              );
            }
          });

          const summaryStart = sceneStartTime + proofScenes.length * sceneStep;
          const finalColor = sceneColors[0];

          proofTimeline
            .to(
              proofScenes[proofScenes.length - 1],
              { autoAlpha: 0, y: -72, scale: 0.9, duration: 0.5, ease: "power1.in" },
              summaryStart - 0.2,
            )
            .to(
              proofSection,
              {
                "--section-from": finalColor.from,
                "--section-to": finalColor.to,
                "--section-orb": finalColor.orb,
                duration: 0.7,
              },
              summaryStart - 0.1,
            )
            .to(
              proofMarkers,
              {
                autoAlpha: 0,
                y: -18,
                scale: 0.94,
                duration: 0.4,
                stagger: 0.025,
                ease: "power1.in",
              },
              summaryStart - 0.58,
            )
            .to(
              proofMap,
              { autoAlpha: 0, y: -24, scale: 1.02, duration: 0.38, ease: "power1.in" },
              summaryStart - 0.46,
            )
            .to(
              proofHeading,
              { autoAlpha: 0, y: -82, scale: 0.62, duration: 0.38, ease: "power1.in" },
              summaryStart - 0.46,
            )
            .to(
              proofSummary,
              { autoAlpha: 1, y: 0, scale: 1, duration: 0.66, ease: "power2.out" },
              summaryStart + 0.08,
            )
            .to(
              proofSummary,
              { y: -18, scale: 0.985, duration: 0.55, ease: "power1.inOut" },
              summaryStart + 0.82,
            );
        });

        proofMatchMedia.add("(max-width: 899px)", () => {
          gsap.set([proofMap, proofSummary, ...proofScenes, ...proofMarkers], {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
          });

          proofScenes.forEach((scene) => {
            gsap.fromTo(
              scene,
              { autoAlpha: 0, y: 34, scale: 0.98 },
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.58,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: scene,
                  start: "clamp(top 84%)",
                  end: "clamp(top 54%)",
                  toggleActions: "play none none reverse",
                },
              },
            );
          });
        });
      }

      // Create downstream reveal triggers after the pinned proof journey. The
      // pin adds several viewport-heights of spacing, so triggers created
      // before it can cache positions that are too early.
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
        gsap.from(item, {
          autoAlpha: 0,
          y: 28,
          scale: 0.97,
          duration: 0.58,
          ease: "back.out(1.45)",
          immediateRender: false,
          scrollTrigger: {
            trigger: item,
            start: "clamp(top 86%)",
            once: true,
          },
        });
      });

      gsap.utils
        .toArray<HTMLElement>(".timeline-content, .capability-card")
        .forEach((card) => {
          const isTimeline = card.classList.contains("timeline-content");

          gsap.to(card, {
            "--card-from": isTimeline ? "#AEDDF7" : "#FFC7DA",
            "--card-to": isTimeline ? "#FFE29E" : "#AEDDF7",
            "--card-orb": isTimeline ? "#FF9DC0" : "#FFCB5C",
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

      gsap.utils.toArray<HTMLElement>(".viewport-panel").forEach((panel) => {
        if (panel.classList.contains("proof-journey-section")) {
          return;
        }

        const panelContent = panel.querySelector(".section-content");

        if (panelContent) {
          gsap.from(
            panelContent,
            {
              y: 48,
              scale: 0.985,
              autoAlpha: 0,
              duration: 0.8,
              ease: "power3.out",
              immediateRender: false,
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
      const refreshFrame = window.requestAnimationFrame(refresh);

      return () => {
        isActive = false;
        window.cancelAnimationFrame(refreshFrame);
        window.removeEventListener("load", refresh);
        proofMatchMedia.revert();
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

          <div className="hero-illustration">
            <HeroSystemVisual />
          </div>

          <div className="hero-copy">
            <p className="eyebrow">BACKEND ENGINEER · ADDIS ABABA</p>
            <h1 className="hero-title">
              I build backend systems that stay reliable.
            </h1>
            <p className="scroll-reveal-copy">
              APIs, payments, ledgers, and integrations with clear ownership
              and controlled state.
            </p>
            <div className="hero-actions">
              <a className="primary-link" href="#work">
                View my work <ArrowUpRight size={18} />
              </a>
              <a className="secondary-link" href="#contact">
                Talk to me <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="section viewport-panel snap-section value-section text-section">
        <div className="bubble bubble-about" />
        <div className="section-content why-showcase">
          <div className="section-heading compact why-heading">
            <span className="section-index">01</span>
            <div>
              <p className="eyebrow">WHY ISRAEL</p>
              <h2 className="pop-heading">Backend ownership when state gets expensive.</h2>
            </div>
          </div>

          <div className="why-board pop-copy">
            <div className="diagram-feature why-diagram">
              <BackendOwnershipDiagram />
            </div>
            <aside className="compact-copy-panel why-copy-panel">
              <span className="panel-label">WHAT I FIX</span>
              <p>
                I am useful when the backend has to become the source of truth.
              </p>
              <ul className="value-list compact-value-list">
                <li>Balances, payments, permissions, and retries.</li>
                <li>Rules moved to the boundary that controls them.</li>
                <li>Evidence left behind when production gets messy.</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section id="work" className="section viewport-panel snap-section work-section proof-journey-section">
        <div className="bubble bubble-work" />
        <div className="section-content proof-journey">
          <div className="proof-stage">
            <div className="proof-orbit" aria-hidden="true" />
            <div className="proof-grid" aria-hidden="true" />

            <div className="section-heading proof-heading">
              <span className="section-index">02</span>
              <div>
                <p className="eyebrow">PROOF</p>
                <h2>Systems that had to hold up after release.</h2>
                <p className="section-intro">
                  Payment ledgers, runtime diagnostics, infrastructure control,
                  business workflows, and production systems people depended on.
                </p>
              </div>
            </div>

            <div className="proof-map" aria-hidden="true">
              <div className="proof-route" />
              {projects.map((project, projectIndex) => (
                <div
                  className="proof-marker"
                  data-proof-marker={projectIndex}
                  key={project.name}
                >
                  <span>{project.index}</span>
                  <strong>{project.name}</strong>
                </div>
              ))}
            </div>

            <div className="proof-scenes">
              {projects.map((project, projectIndex) => (
                <article
                  className="proof-project-scene"
                  data-proof-scene={projectIndex}
                  key={project.name}
                >
                  <div className="proof-visual-frame">
                    <ProjectVisual kind={project.diagram as ProjectDiagramKind} />
                  </div>
                  <div className="proof-project-content">
                    <span className="project-index">{project.index}</span>
                    <div className="proof-copy-main">
                      <p className="project-meta">{project.metadata}</p>
                      <h3>{project.title}</h3>
                      <p>{project.summary}</p>
                    </div>
                    <ul className="proof-detail-labels">
                      {project.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                    {project.outcome ? (
                      <p className="project-outcome meta-line">{project.outcome}</p>
                    ) : null}
                    <a className="proof-project-link" href="#contact">
                      {project.linkText} <ArrowUpRight size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="proof-summary">
              <div className="proof-summary-copy">
                <span className="section-index">02</span>
                <p className="eyebrow">PROOF</p>
                <h3>Systems that had to hold up after release.</h3>
                <p>
                  Payment ledgers, runtime diagnostics, infrastructure control,
                  business workflows, and production systems people depended on.
                </p>
              </div>
              <div className="proof-summary-grid">
                {projects.map((project) => (
                  <article className="proof-summary-card" key={project.name}>
                    <span>{project.index}</span>
                    <strong>{project.name}</strong>
                    <p>{project.metadata}</p>
                    <div>
                      {project.details.slice(0, 3).map((detail) => (
                        <small key={detail}>{detail}</small>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
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

          <div className="body-copy diagram-led-copy pop-copy">
            <div className="diagram-feature">
              <EngineeringLoopDiagram />
            </div>
            <div className="compact-copy-panel">
              <p>
                I start by deciding who owns the truth, what state changes are
                allowed, and how the system explains itself when something goes
                wrong.
              </p>
              <p>
                The goal is simple: small boundaries, explicit rules, and
                production behavior that can be understood after release.
              </p>
            </div>
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
