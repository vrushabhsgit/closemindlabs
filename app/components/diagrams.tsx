"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function TechnicalIcon({ kind = "system" }: { kind?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
    >
      {kind === "database" ? (
        <>
          <ellipse cx="16" cy="7" rx="10" ry="4" />
          <path d="M6 7v18c0 5.3 20 5.3 20 0V7M6 16c0 5.3 20 5.3 20 0" />
        </>
      ) : kind === "document" ? (
        <>
          <path d="M8 3h11l6 6v20H8zM19 3v7h6M12 16h9M12 21h9" />
        </>
      ) : kind === "api" ? (
        <>
          <path d="m10 10-6 6 6 6m12-12 6 6-6 6M18 6l-4 20" />
        </>
      ) : (
        <>
          <rect x="4" y="5" width="24" height="22" rx="1" />
          <path d="M4 12h24M10 12v15M8 9h1m3 0h1" />
        </>
      )}
    </svg>
  );
}
function Trace({ d, delay = 0 }: { d: string; delay?: number }) {
  return (
    <>
      <path d={d} fill="none" stroke="#bacbea" strokeWidth="1" />
      <path
        className="trace"
        d={d}
        pathLength="1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        style={{ animationDelay: `${delay}s` }}
      />
    </>
  );
}
export { HeroDiagram } from "./hero-diagram";

export function ConvergenceBridge() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 65%"],
  });
  const drawn = useTransform(scrollYProgress, [0, 1], [0.05, 1]);
  const paths = [
    "M50 35H200V80H530V145",
    "M265 20V62H544V145",
    "M460 40V95H558V145",
    "M655 25V76H572V145",
    "M860 46V100H586V145",
    "M1080 20H1010V62H600V145",
  ];
  return (
    <div ref={ref} className="convergence-bridge" aria-hidden="true">
      <svg viewBox="0 0 1130 165" fill="none">
        {paths.map((d, i) => (
          <g key={d}>
            <path d={d} stroke="#d8dee8" />
            <motion.path
              d={d}
              stroke="var(--blue)"
              strokeWidth="1.3"
              className="scroll-trace"
              style={{ pathLength: drawn }}
            />
            <text
              className="bridge-labels"
              x={[50, 265, 460, 655, 860, 1080][i]}
              y={[25, 10, 30, 15, 36, 10][i]}
              fill="#65728a"
              fontFamily="var(--mono)"
              fontSize="8"
              textAnchor={i === 0 ? "start" : i === 5 ? "end" : "middle"}
            >
              {
                [
                  "DATA",
                  "APPLICATIONS",
                  "BUSINESS RULES",
                  "DOCUMENTS",
                  "IDENTITIES",
                  "MODELS",
                ][i]
              }
            </text>
            <circle
              cx={[50, 265, 460, 655, 860, 1080][i]}
              cy={[35, 20, 40, 25, 46, 20][i]}
              r="3"
              fill="var(--paper)"
              stroke="var(--blue)"
            />
          </g>
        ))}
        <rect x="518" y="143" width="95" height="4" fill="var(--blue)" />
      </svg>
      <span className="mono">ONE SHARED OPERATING CONTEXT</span>
    </div>
  );
}
const mapContent = [
  {
    inputs: ["MODEL A", "MODEL B", "YOUR DATA"],
    center: "Private AI Core",
    output: "ROUTE · RETRIEVE · EVALUATE",
  },
  {
    inputs: ["ERP / CRM", "DOCUMENTS", "INTERNAL APIs"],
    center: "Connector Layer",
    output: "SCOPED READS & WRITES",
  },
  {
    inputs: ["BUSINESS OBJECTS", "POLICIES", "IDENTITIES"],
    center: "Enterprise Context",
    output: "PERSISTENT COMPANY KNOWLEDGE",
  },
  {
    inputs: ["PROPOSED ACTION", "PERMISSIONS", "EVALUATIONS"],
    center: "Control & Evaluation",
    output: "APPROVAL → AUTHORIZED ACTION",
  },
  {
    inputs: ["SYSTEM CONTEXT", "TASK", "ACTION POLICY"],
    center: "Agentic Workflows",
    output: "EXECUTE → VERIFY → RECORD",
  },
];
export function LayerMap({ layer }: { layer: number }) {
  const content = mapContent[layer];
  return (
    <svg
      className="layer-map"
      viewBox="0 0 500 225"
      role="img"
      aria-label={`${content.inputs.join(", ")} feed ${content.center}, producing ${content.output.toLowerCase()}.`}
    >
      {[68, 250, 432].map((x, i) => (
        <g key={`${layer}-${i}`}>
          <text className="map-label" x={x} y="26" textAnchor="middle">
            {content.inputs[i]}
          </text>
          <circle
            cx={x}
            cy="42"
            r="3"
            fill="var(--paper)"
            stroke="var(--blue)"
          />
          <g className="blue">
            <Trace d={`M${x} 46V75H${230 + i * 20}V109`} delay={i * 0.08} />
          </g>
        </g>
      ))}
      <rect
        x="60"
        y="109"
        width="380"
        height="53"
        fill="var(--paper)"
        stroke="#a9b8d3"
      />
      <path d="M60 109v53" stroke="var(--blue)" strokeWidth="4" />
      <text x="250" y="141" textAnchor="middle" className="layer-map-title">
        {content.center}
      </text>
      <path d="M250 162v24" stroke="var(--blue)" />
      <rect x="247" y="183" width="6" height="6" fill="var(--blue)" />
      <text className="map-label" x="250" y="215" textAnchor="middle">
        {content.output}
      </text>
    </svg>
  );
}
export function SharedFoundation() {
  return (
    <div
      className="shared-foundation"
      role="img"
      aria-label="Enterprise workflows and AI-native products converge on the same private AI layer"
    >
      <svg
        viewBox="0 0 1000 125"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <g className="blue">
          <Trace d="M230 5V42H490V82" />
          <Trace d="M780 5V42H510V82" delay={0.2} />
        </g>
        <rect x="497" y="79" width="6" height="6" fill="var(--blue)" />
      </svg>
      <span className="mono">THE SAME CORE, CONNECTORS AND CONTROLS.</span>
    </div>
  );
}
export function DeploymentMap() {
  return (
    <figure className="deployment-map">
      <div className="mono">YOUR INFRASTRUCTURE / YOUR CONTROL</div>
      <svg
        viewBox="0 0 500 270"
        role="img"
        aria-label="Your data, operating layer, models and audit record remain within a customer-controlled infrastructure boundary."
      >
        <rect
          x="1"
          y="1"
          width="498"
          height="268"
          fill="none"
          stroke="#91a1bd"
          strokeDasharray="4 5"
        />
        <g className="map-label">
          <text x="25" y="30">
            CUSTOMER BOUNDARY
          </text>
          <text x="32" y="93">
            YOUR DATA
          </text>
          <text x="350" y="93">
            YOUR MODELS
          </text>
        </g>
        <g className="blue">
          <Trace d="M80 104v31h120v26" />
          <Trace d="M397 104v31H300v26" delay={0.2} />
        </g>
        <rect
          x="30"
          y="162"
          width="440"
          height="59"
          fill="var(--paper)"
          stroke="#a9b8d3"
        />
        <path d="M30 162v59" stroke="var(--blue)" strokeWidth="4" />
        <text x="51" y="197" className="layer-map-title">
          Your AI operating layer
        </text>
        <text x="472" y="248" className="map-label" textAnchor="end">
          CONTEXT · EXECUTION · AUDIT
        </text>
      </svg>
      <figcaption>Same operating layer. Your choice of environment.</figcaption>
    </figure>
  );
}
export function WorkflowMap({ systems }: { systems: string }) {
  const sources = systems.split(" + ");
  return (
    <div className="workflow-route">
      <div className="route-sources">
        {sources.map((s, i) => (
          <span key={s}>
            <TechnicalIcon
              kind={i === 0 ? "database" : i === 1 ? "document" : "api"}
            />
            {s}
          </span>
        ))}
      </div>
      <svg
        viewBox="0 0 420 70"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <g className="blue">
          {[70, 210, 350].map((x, i) => (
            <Trace
              key={systems + i}
              d={`M${x} 0V${25 + i * 8}H${195 + i * 15}V65`}
              delay={i * 0.1}
            />
          ))}
        </g>
      </svg>
      <span className="route-target mono">
        GOVERNED EXECUTION <span>→</span> VERIFIED OUTCOME
      </span>
    </div>
  );
}
export function ReuseMap() {
  const labels = [
    "Connector mappings",
    "Evaluation tests",
    "Permission patterns",
    "Exception handling",
    "Reusable workflow steps",
    "Business context",
  ];
  return (
    <figure className="reuse-map">
      <div className="reuse-head mono">
        <span>WORKFLOW 01</span>
        <span>REUSABLE SOFTWARE + COMPANY CONTEXT</span>
      </div>
      <div className="reuse-lanes">
        {labels.map((label, i) => (
          <div key={label}>
            <span className="mono">0{i + 1}</span>
            <span className="reuse-lane" />
            <strong>{label}</strong>
            <span className="reuse-lane" />
            <span className="reuse-node" />
          </div>
        ))}
      </div>
      <div className="reuse-output">
        <span className="mono">REUSED IN</span>
        <strong>
          Workflow 02 <span>→</span> Workflow 03 <span>→</span>
        </strong>
      </div>
      <figcaption>Reuse these components in the next workflow.</figcaption>
    </figure>
  );
}
