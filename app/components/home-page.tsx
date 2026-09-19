"use client";
import { useState, useRef, useEffect } from "react";
import {
  HeroDiagram,
  ConvergenceBridge,
  LayerMap,
  SharedFoundation,
  DeploymentMap,
  WorkflowMap,
  ReuseMap,
  TechnicalIcon,
} from "./diagrams";

const layers = [
  {
    name: "Private AI Core",
    tag: "MODELS CAN CHANGE. THE PLATFORM STAYS.",
    text: "Choose models for each task, retrieve company data and track quality and cost. Use training only when tests show a measurable improvement.",
    items: [
      "Model routing & inference",
      "Retrieval & memory",
      "Evaluation & observability",
      "Training for measured improvements",
    ],
  },
  {
    name: "Connector Layer",
    tag: "WORK WITH WHAT YOU ALREADY RUN",
    text: "Read and update permitted records through reusable connectors for enterprise software, databases and APIs.",
    items: [
      "ERP, CRM & ITSM",
      "Databases & documents",
      "SaaS applications",
      "Internal APIs",
    ],
  },
  {
    name: "Enterprise Context",
    tag: "RECORDS, POLICIES AND RELATIONSHIPS",
    text: "Give agents the records, policies and relationships they need to understand a request. Keep that context available for the next workflow.",
    items: [
      "Business objects & relationships",
      "Policies & company knowledge",
      "Context filtered by access rights",
      "Persistent workflow memory",
    ],
  },
  {
    name: "Control & Evaluation",
    tag: "DEFINED AUTHORITY. TRACEABLE ACTIONS.",
    text: "Set permitted actions, require approvals and test outcomes before expanding agent access. Keep a record of each decision and change.",
    items: [
      "Permissions & human approvals",
      "Automated tests & tracing",
      "Audit logs & recovery controls",
      "Cost controls",
    ],
  },
  {
    name: "Agentic Workflows",
    tag: "COMPLETE TASKS ACROSS SYSTEMS",
    text: "Carry a task across systems: retrieve records, apply business rules, request approval and make permitted changes. Verify the result before marking the task complete.",
    items: [
      "Cross-system execution",
      "Human review and approval",
      "Exception handling & retries",
      "Verified business outcomes",
    ],
  },
];
const workflowCategories = [
  [
    "Procurement & finance",
    "Resolve an invoice exception",
    "Match an invoice to the purchase order and receipt. Request approval for a correction, update the ERP and verify the record.",
    "ERP + documents + finance",
    "Exception resolution time · manual corrections",
  ],
  [
    "Supply-chain exceptions",
    "Respond to a delayed shipment",
    "Compare order, inventory and carrier records. Propose a response to a delay and route schedule changes for approval.",
    "ERP + inventory + logistics",
    "Exception response time · unresolved delays",
  ],
  [
    "IT operations",
    "Resolve an access request",
    "Check identity, role and access policy. Request owner approval, provision the permitted access and verify the result.",
    "ITSM + identity + internal tools",
    "Fulfilment time · manual handoffs",
  ],
  [
    "Compliance evidence",
    "Collect compliance evidence",
    "Collect records from multiple systems, link each source to a control and flag missing evidence for review.",
    "Documents + policies + audit logs",
    "Evidence collection time · missing records",
  ],
  [
    "Enterprise support",
    "Resolve an employee request",
    "Check the relevant policy and employee records. Route the required approval, update the service ticket and confirm the outcome.",
    "Knowledge base + ITSM + HR systems",
    "Resolution time · reopened requests",
  ],
  [
    "Document operations",
    "Process a document exception",
    "Extract document details, compare them with business records and send discrepancies for review before updating the source system.",
    "Documents + databases + business APIs",
    "Processing time · correction rate",
  ],
];
function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}
function Mark() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
      <path
        d="M20 5H6v22h14M13 10h13v12H13"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
      />
    </svg>
  );
}
function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow">
      <span className="blue-square" />
      {children}
    </div>
  );
}
export default function Home() {
  const [menu, setMenu] = useState(false),
    [layer, setLayer] = useState(2),
    [category, setCategory] = useState(0),
    [approved, setApproved] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!menu) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenu(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menu]);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a href="#" className="brand" aria-label="Closemind Labs home">
          <Mark />
          <span>
            closemind<span className="brand-light">labs</span>
            <span className="brand-period">.</span>
          </span>
        </a>
        <nav
          id="main-navigation"
          className={menu ? "navigation open" : "navigation"}
          aria-label="Main navigation"
        >
          {[
            ["Product", "product"],
            ["Platform", "platform"],
            ["Workflows", "workflows"],
            ["Deployment", "deployment"],
            ["Company", "company"],
          ].map(([name, id]) => (
            <a key={id} href={"#" + id} onClick={() => setMenu(false)}>
              {name}
            </a>
          ))}
          <a
            className="button nav-cta"
            href="#workflows"
            onClick={() => setMenu(false)}
          >
            Explore workflows <Arrow diagonal />
          </a>
        </nav>
        <button
          ref={menuButton}
          aria-controls="main-navigation"
          className="menu-button"
          aria-expanded={menu}
          aria-label={menu ? "Close navigation" : "Open navigation"}
          onClick={() => setMenu(!menu)}
        >
          {menu ? "✕" : "☰"}
        </button>
      </header>
      <main id="main">
        <section className="hero section-wrap" id="product">
          <div className="hero-copy">
            <Label>THE PRIVATE AI OPERATING LAYER</Label>
            <h1>
              Complete work.
              <br />
              Across systems.
              <br />
              <span className="hero-ai">
                <span className="headline-path" aria-hidden="true" />
                Keep control.
              </span>
            </h1>
            <p className="hero-description">
              Resolve exceptions. Update records.
              <br />
              Verify the result.
            </p>
            <p className="hero-detail">
              We deploy a customer-owned AI operating layer that connects
              models, data and business systems, then runs governed agents that
              complete work across them.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#workflows">
                Explore workflows <Arrow />
              </a>
              <a className="text-link" href="#platform">
                Explore the platform <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-footnote mono">
              <span>Customer-owned</span>
              <span>Model-neutral</span>
              <span>Governed by design</span>
            </div>
          </div>
          <div className="hero-visual">
            <HeroDiagram />
          </div>
        </section>
        <div className="systems-strip section-wrap">
          <span className="mono">CONNECT THE SYSTEMS YOU ALREADY RUN</span>
          <div className="system-names">
            <span className="sap">SAP</span>
            <span className="oracle">ORACLE</span>
            <span className="salesforce">salesforce</span>
            <span className="servicenow">
              servicenow<span>●</span>
            </span>
            <span className="microsoft">
              <span aria-hidden="true">▦</span> Microsoft
            </span>
            <span className="and-more">+ your internal systems</span>
          </div>
        </div>
        <section className="problem section-wrap section-space">
          <div>
            <Label>01 / THE MISSING LAYER</Label>
            <h2>
              Work crosses systems.
              <br />
              <span className="muted-heading">
                Agents need context
                <br />
                and permission.
              </span>
            </h2>
          </div>
          <div className="problem-right">
            <p className="section-intro">
              An invoice exception can span an ERP, a document and an approval.
              A model alone cannot complete that process.
            </p>
            <div className="problem-list">
              {[
                [
                  "01",
                  "Records are fragmented.",
                  "The purchase order, invoice and delivery receipt may sit in different systems.",
                ],
                [
                  "02",
                  "Rules are hard to find.",
                  "Policies and unwritten approval rules determine what happens next.",
                ],
                [
                  "03",
                  "Changes need checks.",
                  "Agents need defined access, approval requirements and tests for the result.",
                ],
              ].map(([n, title, text]) => (
                <div className="problem-row" key={n}>
                  <span className="mono">{n}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ConvergenceBridge />
        </section>
        <section id="platform" className="platform section-space">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <Label>02 / ONE CONNECTED PLATFORM</Label>
                <h2>
                  Your systems.
                  <br />
                  One operating layer.
                </h2>
              </div>
              <p>
                Connect models, company knowledge and business systems. Give
                agents the context and permissions to complete a task.
              </p>
            </div>
            <div className="architecture">
              <div className="architecture-stack">
                <div className="stack-meta mono">
                  <span>THE OPERATING LAYER</span>
                  <span>↓ EXPLORE THE STACK</span>
                </div>
                <div
                  role="tablist"
                  aria-label="Platform layers"
                  className="layer-list"
                  aria-orientation="vertical"
                >
                  {layers.map((l, i) => (
                    <button
                      role="tab"
                      id={"tab-" + i}
                      aria-controls="layer-panel"
                      aria-selected={layer === i}
                      tabIndex={layer === i ? 0 : -1}
                      key={l.name}
                      className={"layer " + (layer === i ? "active" : "")}
                      onClick={() => setLayer(i)}
                      onKeyDown={(e) => {
                        if (
                          ["ArrowDown", "ArrowUp", "Home", "End"].includes(
                            e.key,
                          )
                        ) {
                          e.preventDefault();
                          const next =
                            e.key === "Home"
                              ? 0
                              : e.key === "End"
                                ? 4
                                : (i + (e.key === "ArrowDown" ? 1 : 4)) % 5;
                          setLayer(next);
                          document.getElementById("tab-" + next)?.focus();
                        }
                      }}
                    >
                      <span className="mono">0{i + 1}</span>
                      <span>{l.name}</span>
                      <span aria-hidden="true">{layer === i ? "↗" : "+"}</span>
                    </button>
                  ))}
                </div>
                <div className="stack-base mono">
                  YOUR INFRASTRUCTURE <span>VPC / PRIVATE CLOUD / ON-PREM</span>
                </div>
              </div>
              <div
                className="layer-detail"
                role="tabpanel"
                id="layer-panel"
                aria-labelledby={"tab-" + layer}
                tabIndex={0}
              >
                <LayerMap layer={layer} />
                <div className="mono blue">{layers[layer].tag}</div>
                <h3>{layers[layer].name}</h3>
                <p>{layers[layer].text}</p>
                <div className="capabilities">
                  {layers[layer].items.map((x) => (
                    <span key={x}>
                      <span className="blue">↳</span> {x}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="platform-footer">
              <span>
                Model choice, business context and execution in one platform.
              </span>
              <span className="mono">RECORDS → CONTEXT → ACTION</span>
            </div>
          </div>
        </section>
        <section className="how section-wrap section-space">
          <Label>03 / HOW IT WORKS</Label>
          <h2>From connected records to completed work.</h2>
          <div className="steps">
            {[
              ["Connect", "Connect the records and APIs the task needs."],
              ["Understand", "Link records to company policies and rules."],
              ["Govern", "Define permitted actions and required approvals."],
              ["Execute", "Make approved changes across systems."],
              ["Evaluate", "Check the result and record what happened."],
              ["Improve", "Use feedback to improve tests and workflow steps."],
            ].map(([title, text], i) => (
              <div className="step" key={title}>
                <div className="step-top">
                  <span className="mono">0{i + 1}</span>
                  <span aria-hidden="true">→</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="paths section-wrap section-space">
          <div className="section-heading">
            <div>
              <Label>04 / TWO WAYS IN</Label>
              <h2>
                Two starting points.
                <br />
                One product.
              </h2>
            </div>
          </div>
          <div className="path-grid">
            <article>
              <span className="mono blue">FOR ESTABLISHED ENTERPRISES</span>
              <h3>
                Start with one
                <br />
                measurable workflow.
              </h3>
              <p>
                Connect the systems for one operation. Compare processing time,
                errors and manual steps before adding the next workflow.
              </p>
              <a href="#workflows" className="text-link">
                Find your first workflow <Arrow />
              </a>
            </article>
            <article>
              <span className="mono blue">FOR AI-NATIVE COMPANIES</span>
              <h3>
                Start with the Core.
                <br />
                Add workflows as you grow.
              </h3>
              <p>
                Use the same platform’s AI Core for model routing, retrieval and
                evaluation. Add enterprise connectors and governed workflows as
                your business needs them.
              </p>
              <a href="#platform" className="text-link">
                Explore the Private AI Core <Arrow />
              </a>
            </article>
          </div>
          <SharedFoundation />
        </section>
        <section id="execution" className="execution section-space">
          <div className="section-wrap execution-grid">
            <div>
              <Label>05 / PERMISSION BEFORE ACTION</Label>
              <h2>
                Approve the change.
                <br />
                Check the result.
              </h2>
              <p className="section-intro">
                Set which records an agent can access, which changes it can make
                and when a person must approve.
              </p>
              <p>
                In this example, the agent proposes an invoice correction. It
                waits for the finance owner’s approval before updating the ERP,
                then checks the totals and saves an audit record.
              </p>
              <div className="execution-note">
                <span className="blue">
                  <TechnicalIcon kind="api" />
                </span>
                <span>
                  Limit access to the task.
                  <br />
                  Route exceptions to a person.
                </span>
              </div>
            </div>
            <div className="workflow-console">
              <div className="console-header">
                <span className="mono">WORKFLOW / INVOICE EXCEPTION</span>
                <span className="demo-badge">INTERACTIVE EXAMPLE</span>
              </div>
              <div className="console-title">
                <h3>Resolve invoice discrepancy</h3>
                <span
                  className={"status-label " + (approved ? "complete" : "")}
                >
                  {approved ? "Completed" : "Awaiting approval"}
                </span>
              </div>
              <ol className="execution-steps">
                {[
                  [
                    "Read",
                    "Invoice, purchase order and goods receipt retrieved.",
                  ],
                  [
                    "Reason",
                    "Quantity mismatch identified. Correction proposed.",
                  ],
                  ["Approve", "Finance owner reviews the proposed adjustment."],
                  ["Act", "Update the invoice record in the ERP."],
                  [
                    "Verify",
                    "Recheck totals and confirm the corrected record.",
                  ],
                  [
                    "Record",
                    "Save the decision, action and outcome to the audit log.",
                  ],
                ].map(([title, text], i) => (
                  <li
                    key={title}
                    className={
                      i < 2 || approved
                        ? "done"
                        : i === 2
                          ? "current"
                          : "pending"
                    }
                  >
                    <span className="execution-index">
                      {i < 2 || approved ? "✓" : i + 1}
                    </span>
                    <div>
                      <strong>{title}</strong>
                      <p>{text}</p>
                      {i === 2 && !approved && (
                        <button
                          className="approve-button"
                          onClick={() => setApproved(true)}
                        >
                          Approve example action <Arrow />
                        </button>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
              <div className="console-footer" aria-live="polite">
                <span>
                  {approved
                    ? "✓ Example complete. Every action recorded."
                    : "No changes are made before approval."}
                </span>
                {approved && (
                  <button onClick={() => setApproved(false)}>Replay ↺</button>
                )}
              </div>
            </div>
          </div>
        </section>
        <section
          id="deployment"
          className="deployment section-wrap section-space"
        >
          <div className="section-heading">
            <div>
              <Label>06 / CUSTOMER-CONTROLLED DEPLOYMENT</Label>
              <h2>
                Run the platform
                <br />
                where you control it.
              </h2>
            </div>
            <p>
              Deploy in your cloud account or your own infrastructure. Set the
              data access, model choices and operating policies.
            </p>
          </div>
          <div className="deployment-body">
            <DeploymentMap />
            <div className="deployment-options">
              {[
                ["01", "Customer VPC", "Within your existing cloud account."],
                ["02", "Private cloud", "Dedicated to your organization."],
                ["03", "On-premises", "Inside your own infrastructure."],
                ["04", "Air-gapped", "For workloads requiring isolation."],
              ].map(([icon, title, text]) => (
                <div key={title}>
                  <span className="deployment-icon" aria-hidden="true">
                    {icon}
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="deployment-note mono">
            DEPLOYMENT OPTIONS{" "}
            <span>
              We supply the software. Your team chooses the infrastructure;
              deployment and support are agreed before rollout.
            </span>
          </p>
        </section>
        <section
          id="workflows"
          className="workflows section-wrap section-space"
        >
          <div className="section-heading">
            <div>
              <Label>07 / START WITH REAL WORK</Label>
              <h2>
                Choose the work.
                <br />
                Measure the result.
              </h2>
            </div>
            <p>
              Choose a repeated task that crosses systems. Set a baseline for
              time, errors or manual work before deployment.
            </p>
          </div>
          <div className="workflow-browser">
            <div className="category-list" aria-label="Workflow categories">
              {workflowCategories.map(([title], i) => (
                <button
                  key={title}
                  aria-pressed={category === i}
                  className={category === i ? "selected" : ""}
                  onClick={() => setCategory(i)}
                >
                  <span className="mono">0{i + 1}</span>
                  {title}
                  <Arrow />
                </button>
              ))}
            </div>
            <article className="category-detail" aria-live="polite">
              <span className="mono blue">ILLUSTRATIVE WORKFLOW</span>
              <WorkflowMap systems={workflowCategories[category][3]} />
              <h3>{workflowCategories[category][1]}</h3>
              <p>{workflowCategories[category][2]}</p>
              <p className="workflow-measure">
                <span>Measure</span>
                {workflowCategories[category][4]}
              </p>
              <a className="text-link" href="#execution">
                See an approval example <Arrow />
              </a>
            </article>
          </div>
        </section>
        <section className="compound section-space" id="company">
          <div className="section-wrap compound-grid">
            <div>
              <Label>08 / REUSABLE SOFTWARE</Label>
              <h2>
                Reuse the software.
                <br />
                <span>Retain the context.</span>
              </h2>
              <p>
                Reuse connector mappings, evaluation tests and approval rules
                across workflows.
              </p>
              <p>
                Keep business context and workflow history in your environment.
                Build on that foundation as your systems and models change.
              </p>
            </div>
            <ReuseMap />
          </div>
        </section>
        <section className="final-cta section-wrap">
          <Label>START WITH A MEASURABLE WORKFLOW</Label>
          <h2>
            Put the platform
            <br />
            <span>to work.</span>
          </h2>
          <div className="final-bottom">
            <p>
              Choose a workflow to run on the platform.
              <br />
              Define its systems, approvals and success measure.
            </p>
            <a className="button primary" href="#workflows">
              Explore workflows <Arrow />
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer section-wrap">
        <div className="footer-top">
          <div>
            <a href="#" className="brand">
              <Mark />
              <span>
                closemind<span className="brand-light">labs</span>.
              </span>
            </a>
            <p>
              The private AI operating layer
              <br />
              for the enterprise.
            </p>
            <span className="mono">INDIA-FIRST. GLOBALLY DEPLOYABLE.</span>
          </div>
          <div>
            <h3>Platform</h3>
            <a href="#platform">Architecture</a>
            <a href="#workflows">Workflows</a>
            <a href="#deployment">Deployment</a>
          </div>
          <div>
            <h3>Company</h3>
            <a href="#company">Our approach</a>
            <a href="#deployment">Deployment options</a>
          </div>
          <div>
            <h3>Legal</h3>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Closemind Labs</span>
          <span>Governed work across existing systems.</span>
          <a href="#">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
