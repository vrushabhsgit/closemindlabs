"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const phases = [
  [
    "Connect existing systems",
    "ERP, CRM, ITSM, documents, databases and internal APIs stay in place.",
  ],
  [
    "Build shared context",
    "Link the invoice, purchase order and company approval rules.",
  ],
  [
    "Human approval required",
    "The proposed invoice adjustment needs the finance owner’s approval before it can proceed.",
  ],
  [
    "Route the model request",
    "Select a model for the task. The agent’s access stays limited to the approved records and action.",
  ],
  [
    "Execute the approved workflow",
    "Update the approved invoice record. Other records and actions remain outside the agent’s permissions.",
  ],
  [
    "Evaluate and record",
    "Check the corrected totals. Record the approval, change and verification result.",
  ],
  [
    "Return the verified result",
    "Return the confirmed invoice correction through the connectors to the existing systems.",
  ],
  [
    "Workflow completed",
    "The invoice correction is complete, verified and recorded.",
  ],
];
const rows = [
  { y: 171, label: "Connectors", detail: "Scoped reads & writes", phase: 0 },
  {
    y: 216,
    label: "Enterprise Context",
    detail: "Objects · policies · identities",
    phase: 1,
  },
  {
    y: 261,
    label: "Permissions and Approvals",
    detail: "Human approval gate",
    phase: 2,
  },
  {
    y: 306,
    label: "Model Routing",
    detail: "Model-neutral inference",
    phase: 3,
  },
  {
    y: 409,
    label: "Evaluation and Observability",
    detail: "Verify · trace · record",
    phase: 5,
  },
];
const inputs = [
  { name: "ERP", x: 102, y: 45 },
  { name: "CRM", x: 270, y: 45 },
  { name: "ITSM", x: 438, y: 45 },
  { name: "Documents", x: 102, y: 90 },
  { name: "Databases", x: 270, y: 90 },
  { name: "Internal APIs", x: 438, y: 90 },
];

const inputRoute = (input: (typeof inputs)[number], index: number) =>
  `M${input.x} ${input.y + 12}v${index < 3 ? 13 : 12}h${index < 3 ? 82 : 0}V123H${240 + index * 10}V170`;

export function HeroDiagram() {
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref, { amount: 0.2 });
  const unique = useId().replace(/:/g, "");
  const [phase, setPhase] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReduced(media.matches);
    const updateVisibility = () => setTabVisible(!document.hidden);
    updateMotion();
    updateVisibility();
    media.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      media.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  const running = visible && tabVisible && !paused && !reduced;
  useEffect(() => {
    if (!running || phase === 2 || phase === 7) return;
    const timeout = window.setTimeout(
      () => setPhase((current) => Math.min(current + 1, 7)),
      2200,
    );
    return () => window.clearTimeout(timeout);
  }, [running, phase]);

  useEffect(() => {
    if (phase === 2)
      setAnnouncement(
        "Human approval required. Use Approve example to authorize the invoice correction.",
      );
    if (phase === 7)
      setAnnouncement(
        "Example completed. The invoice correction was verified and recorded.",
      );
  }, [phase]);

  const approve = () => {
    setPhase(3);
    setAnnouncement(
      "Example approved. The agent is authorized for the proposed invoice adjustment only.",
    );
  };
  const replay = () => {
    setPhase(0);
    setPaused(false);
    setAnnouncement(
      "Example restarted. It will pause for human approval before acting.",
    );
  };
  const active = (value: number) => !reduced && phase === value;

  return (
    <figure
      ref={ref}
      className="hero-diagram operating-diagram"
      data-phase={phase}
      data-running={running}
      data-reduced={reduced}
      aria-label="Private AI operating layer demonstration"
      aria-describedby={`${unique}-summary`}
    >
      <div className="diagram-meta mono">
        <span>YOUR SYSTEMS. ONE OPERATING LAYER.</span>
        <span>FIG. 01</span>
      </div>
      <svg
        className="operating-map"
        viewBox="0 0 560 487"
        role="img"
        aria-labelledby={`${unique}-title ${unique}-description`}
      >
        <title id={`${unique}-title`}>
          From existing systems to governed business workflows
        </title>
        <desc id={`${unique}-description`}>
          ERP, CRM, ITSM, documents, databases and internal APIs feed connectors
          and shared enterprise context inside a private customer-controlled AI
          operating layer. Permissions restrict agent access, and important
          actions wait for human approval. Model routing supports governed
          agents completing business workflows. Evaluation and observability
          verify and record each action. Verified results return to the existing
          business systems through connectors.
        </desc>
        <defs>
          <marker
            id={`${unique}-arrow`}
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path
              d="M0 0 5 3 0 6"
              fill="none"
              stroke="var(--blue)"
              strokeWidth="1"
            />
          </marker>
        </defs>
        <text className="op-caption" x="31" y="17">
          EXISTING BUSINESS SYSTEMS
        </text>
        {inputs.map((input, i) => (
          <g key={input.name}>
            <path className="op-input-line" d={inputRoute(input, i)} />
            <rect
              className="op-source"
              x={input.x - 66}
              y={input.y - 15}
              width="132"
              height="29"
            />
            <text
              className="op-input-label"
              x={input.x}
              y={input.y + 4}
              textAnchor="middle"
            >
              {input.name}
            </text>
          </g>
        ))}
        <path
          className="op-return-base"
          d="M495 428H539V29H509V123H479"
          markerEnd={`url(#${unique}-arrow)`}
        />
        <path
          className={`op-return ${active(6) ? "is-active" : ""} ${phase === 7 ? "is-complete" : ""}`}
          d="M495 428H539V29H509V123H479"
          pathLength="1"
          markerEnd={`url(#${unique}-arrow)`}
        />
        <text
          className="op-return-label"
          x="550"
          y="283"
          transform="rotate(-90 550 283)"
        >
          VERIFIED RESULTS → EXISTING SYSTEMS
        </text>
        <rect className="op-boundary" x="26" y="139" width="483" height="318" />
        <text className="op-caption op-boundary-title" x="42" y="156">
          PRIVATE AI OPERATING LAYER
        </text>
        <text className="op-caption" x="493" y="156" textAnchor="end">
          CUSTOMER CONTROLLED
        </text>
        <path className="op-spine" d="M49 191V430" />
        {rows.map((row) => (
          <g
            key={row.label}
            className={`op-row ${active(row.phase) ? "is-active" : ""}`}
          >
            <rect
              className="op-row-surface"
              x="61"
              y={row.y}
              width="434"
              height="38"
            />
            <path className="op-row-tick" d={`M45 ${row.y + 19}h16`} />
            <rect
              x="61"
              y={row.y}
              width="3"
              height="38"
              fill="var(--blue)"
              opacity={active(row.phase) ? 1 : 0}
            />
            <text className="op-row-title" x="75" y={row.y + 16}>
              {row.label}
            </text>
            <text className="op-row-detail" x="75" y={row.y + 30}>
              {row.phase === 2 && phase > 2 && !reduced
                ? "Approved · invoice adjustment only"
                : row.detail}
            </text>
            {row.phase === 2 && phase > 2 && !reduced ? (
              <path
                className="op-approved-check"
                d={`m456 ${row.y + 19} 6 6 12-13`}
              />
            ) : (
              row.phase === 2 && (
                <g className="op-gate">
                  <path
                    d={`M459 ${row.y + 14}v-4a5 5 0 0 1 10 0v4`}
                    fill="none"
                  />
                  <rect x="456" y={row.y + 14} width="16" height="12" rx="1" />
                  <path d={`M464 ${row.y + 18}v4`} />
                </g>
              )
            )}
            {row.phase !== 2 && (
              <circle
                className={`op-checkpoint ${!reduced && phase > row.phase ? "is-complete" : ""}`}
                cx="464"
                cy={row.y + 19}
                r="3"
              />
            )}
          </g>
        ))}
        <g className={`op-agent ${active(4) ? "is-active" : ""}`}>
          <rect x="61" y="356" width="434" height="43" />
          <path d="M49 376h12" className="op-row-tick" />
          <text className="op-agent-title" x="75" y="375">
            Governed agents
          </text>
          <text className="op-agent-detail" x="75" y="391">
            Completing business workflows
          </text>
          <path d="M452 377h20m-6-6 6 6-6 6" fill="none" />
        </g>
        <motion.circle
          className="op-position"
          cx="49"
          r="3.5"
          initial={false}
          animate={{ cy: [190, 235, 280, 325, 377, 429, 429, 429][phase] }}
          transition={{ duration: reduced ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <g className="op-input-packets" aria-hidden="true">
          {inputs.map((input, i) => (
            <path
              key={input.name}
              className="op-packet"
              d={inputRoute(input, i)}
              pathLength="1"
              style={{ animationDelay: `${i * 0.12}s` }}
            />
          ))}
        </g>
        <text className="op-caption" x="28" y="479">
          READ → UNDERSTAND → AUTHORIZE → ACT → VERIFY
        </text>
      </svg>
      <div className="op-narrative" aria-hidden="true">
        <span className="op-phase-number mono">
          {String(phase + 1).padStart(2, "0")}
        </span>
        <div>
          <strong>
            {reduced
              ? "Permission before action. Verification after."
              : phases[phase][0]}
          </strong>
          <p>
            {reduced
              ? "Connect existing records, apply company rules and require approval where needed. Check and record completed actions."
              : phases[phase][1]}
          </p>
        </div>
      </div>
      <div className="op-controls">
        <span className="mono">ILLUSTRATIVE WORKFLOW</span>
        <div>
          {phase === 2 ? (
            <button className="op-approve" onClick={approve}>
              Approve example <span aria-hidden="true">→</span>
            </button>
          ) : phase === 7 ? (
            <button onClick={replay}>
              Replay diagram <span aria-hidden="true">↺</span>
            </button>
          ) : (
            <button
              aria-pressed={paused}
              onClick={() => setPaused((value) => !value)}
            >
              {paused ? "Resume animation" : "Pause animation"}{" "}
              <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>
            </button>
          )}
          {phase === 2 && (
            <button
              aria-pressed={paused}
              onClick={() => setPaused((value) => !value)}
            >
              {paused ? "Resume animation" : "Pause animation"}
            </button>
          )}
        </div>
      </div>
      <figcaption id={`${unique}-summary`}>
        <span className="figure-number">01—</span> Example: an invoice
        correction with approval and verification.
      </figcaption>
      <span className="sr-only" role="status">
        {announcement}
      </span>
    </figure>
  );
}
