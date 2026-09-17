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
} from "./components/diagrams";

const layers = [
  {
    name: "Private AI Core",
    tag: "INTELLIGENCE, WITHOUT LOCK-IN",
    text: "The right intelligence for the work. Route between models, retrieve relevant information and observe every inference in one portable foundation.",
    items: [
      "Model routing & inference",
      "Retrieval & memory",
      "Evaluation & observability",
      "Training when it improves outcomes",
    ],
  },
  {
    name: "Connector Layer",
    tag: "WORK WITH WHAT YOU ALREADY RUN",
    text: "Connect the systems your business depends on. Read and write through scoped interfaces, with reusable mappings for business objects.",
    items: [
      "ERP, CRM & ITSM",
      "Databases & documents",
      "SaaS applications",
      "Internal APIs",
    ],
  },
  {
    name: "Enterprise Context",
    tag: "INTELLIGENCE THAT KNOWS YOUR BUSINESS",
    text: "Give agents a persistent understanding of your company: how objects relate, which policies apply and what a successful outcome looks like.",
    items: [
      "Business objects & relationships",
      "Policies & company knowledge",
      "Identity-aware context",
      "Persistent workflow memory",
    ],
  },
  {
    name: "Control & Evaluation",
    tag: "AUTHORITY WITH ACCOUNTABILITY",
    text: "Define what an agent can do before it acts. Permissions, approval gates and evaluations make every action inspectable and controlled.",
    items: [
      "Permissions & human approvals",
      "Automated tests & tracing",
      "Audit logs & rollback",
      "Cost controls",
    ],
  },
  {
    name: "Agentic Workflows",
    tag: "FROM INTELLIGENCE TO COMPLETED WORK",
    text: "Turn company context into coordinated action. Agents read, reason and execute across systems, then verify the outcome.",
    items: [
      "Cross-system execution",
      "Human-in-the-loop decisions",
      "Exception handling & retries",
      "Verified business outcomes",
    ],
  },
];
const workflowCategories = [
  [
    "Procurement & finance",
    "Resolve an invoice exception",
    "Match the invoice to a purchase order and receipt, surface the discrepancy, then route a proposed correction for approval.",
    "ERP + documents + finance",
  ],
  [
    "Supply-chain exceptions",
    "Respond to a delayed shipment",
    "Connect order, inventory and carrier information. Propose a recovery plan and route changes to the right owner.",
    "ERP + inventory + logistics",
  ],
  [
    "IT operations",
    "Resolve an access request",
    "Check identity, role and access policy. Request owner approval, provision the permitted access and verify the result.",
    "ITSM + identity + internal tools",
  ],
  [
    "Compliance evidence",
    "Assemble a traceable evidence pack",
    "Collect records across systems, map them to a control and flag missing evidence for review.",
    "Documents + policies + audit logs",
  ],
  [
    "Enterprise support",
    "Find the answer. Complete the request.",
    "Bring together internal knowledge and system context to resolve employee requests with appropriate permissions.",
    "Knowledge base + ITSM + HR systems",
  ],
  [
    "Document operations",
    "Move a document into action",
    "Extract relevant details, validate against business records and route exceptions before updating the source system.",
    "Documents + databases + business APIs",
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
    [approved, setApproved] = useState(false),
    [modal, setModal] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (modal) dialog.current?.showModal();
    else dialog.current?.close();
  }, [modal]);
  const book = () => {
    setMenu(false);
    setModal(true);
  };
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
          <button className="button nav-cta" onClick={book}>
            Book a working session <Arrow diagonal />
          </button>
        </nav>
        <button
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
              Your enterprise.
              <br />
              Your infrastructure.
              <br />
              <span className="hero-ai">
                <span className="headline-path" aria-hidden="true" />
                Your AI.
              </span>
            </h1>
            <p className="hero-description">
              Intelligence that knows your business.
              <br />
              Infrastructure that stays yours.
            </p>
            <p className="hero-detail">
              We deploy a private AI operating layer inside infrastructure you
              control, so governed agents can complete real work across your
              business.
            </p>
            <div className="hero-actions">
              <button className="button primary" onClick={book}>
                Book a working session <Arrow />
              </button>
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
          <span className="mono">WORKS WITH THE SYSTEMS YOU ALREADY RUN</span>
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
              Intelligence is available.
              <br />
              <span className="muted-heading">
                Context is the
                <br />
                missing connection.
              </span>
            </h2>
          </div>
          <div className="problem-right">
            <p className="section-intro">
              Access to intelligence is easy. Putting it to work inside a real
              company is the hard part.
            </p>
            <div className="problem-list">
              {[
                [
                  "01",
                  "Data lives everywhere.",
                  "Documents, databases and applications rarely share the same context.",
                ],
                [
                  "02",
                  "Work crosses boundaries.",
                  "Business rules live between systems—and in people’s heads.",
                ],
                [
                  "03",
                  "Actions need accountability.",
                  "Permissions, approvals, testing and audit trails must come before autonomy.",
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
                One operating layer. Five connected capabilities.
                <br />
                Built to turn context into controlled action.
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
              <span>Any model. Existing systems. One operating layer.</span>
              <span className="mono">INTELLIGENCE → CONTEXT → ACTION</span>
            </div>
          </div>
        </section>
        <section className="how section-wrap section-space">
          <Label>03 / HOW IT WORKS</Label>
          <h2>A deliberate path to autonomy.</h2>
          <div className="steps">
            {[
              ["Connect", "Bring your systems and data into reach."],
              ["Understand", "Map business context and relationships."],
              ["Govern", "Set permissions and approval gates."],
              ["Execute", "Complete work across systems."],
              ["Evaluate", "Verify actions against expected outcomes."],
              ["Improve", "Reuse what works in the next workflow."],
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
                Different starting points.
                <br />
                The same foundation.
              </h2>
            </div>
          </div>
          <div className="path-grid">
            <article>
              <span className="mono blue">FOR ESTABLISHED ENTERPRISES</span>
              <h3>
                Make the systems you
                <br />
                already own AI-operable.
              </h3>
              <p>
                Start with one high-value workflow. Connect the systems it
                needs. Build the controls, prove the outcome, then expand.
              </p>
              <a href="#workflows" className="text-link">
                Find your first workflow <Arrow />
              </a>
            </article>
            <article>
              <span className="mono blue">FOR AI-NATIVE COMPANIES</span>
              <h3>
                Your intelligence.
                <br />
                Owned from day one.
              </h3>
              <p>
                Start with a reliable AI Core for your product. Keep models
                portable, learn from your data and add workflows as your company
                grows.
              </p>
              <a href="#platform" className="text-link">
                Explore the Private AI Core <Arrow />
              </a>
            </article>
          </div>
          <SharedFoundation />
        </section>
        <section className="execution section-space">
          <div className="section-wrap execution-grid">
            <div>
              <Label>05 / CONTROL BEFORE AUTONOMY</Label>
              <h2>
                Agents that act.
                <br />
                On your terms.
              </h2>
              <p className="section-intro">
                An agent should only have as much authority as your controls can
                support.
              </p>
              <p>
                From the first read to the final write, every step is scoped,
                checked and traceable. People stay in the loop where judgment
                matters.
              </p>
              <div className="execution-note">
                <span className="blue">
                  <TechnicalIcon kind="api" />
                </span>
                <span>
                  Explicit permissions.
                  <br />
                  Visible decisions. Verified outcomes.
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
                Your environment.
                <br />
                Your boundaries.
              </h2>
            </div>
            <p>
              The software goes where your business needs it.
              <br />
              You choose the infrastructure. You keep control
              <br className="desktop-break" /> of the data, models and operating
              context.
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
            SOFTWARE, NOT HARDWARE.{" "}
            <span>
              Deployment requirements and support are scoped with your team.
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
                One workflow.
                <br />A meaningful first step.
              </h2>
            </div>
            <p>
              Start where work crosses systems, the friction
              <br />
              is visible and the outcome can be measured.
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
              <div className="workflow-systems mono">
                {workflowCategories[category][3]}
              </div>
              <button className="text-link" onClick={book}>
                Scope a workflow with us <Arrow />
              </button>
            </article>
          </div>
        </section>
        <section className="compound section-space" id="company">
          <div className="section-wrap compound-grid">
            <div>
              <Label>08 / BUILT TO COMPOUND</Label>
              <h2>
                The models can change.
                <br />
                <span>Your knowledge stays.</span>
              </h2>
              <p>
                Every workflow leaves something valuable behind: a deeper
                understanding of how your company works.
              </p>
              <p>
                Reusable connectors, evaluation tests and permission patterns
                make the next deployment more repeatable. The operating
                knowledge stays inside your environment.
              </p>
            </div>
            <ReuseMap />
          </div>
        </section>
        <section className="final-cta section-wrap">
          <Label>LET’S PUT INTELLIGENCE TO WORK</Label>
          <h2>
            Make your enterprise
            <br />
            <span>AI-operable.</span>
          </h2>
          <div className="final-bottom">
            <p>
              Bring a workflow. We’ll map the systems,
              <br />
              the controls and the path to production.
            </p>
            <button className="button primary" onClick={book}>
              Book a working session <Arrow />
            </button>
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
            <button onClick={book}>Contact</button>
          </div>
          <div>
            <h3>Legal</h3>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Closemind Labs</span>
          <span>Intelligence, under your control.</span>
          <a href="#">Back to top ↑</a>
        </div>
      </footer>
      <dialog
        ref={dialog}
        className="booking-dialog"
        aria-labelledby="booking-title"
        onCancel={() => setModal(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setModal(false);
        }}
      >
        <button
          className="dialog-close"
          aria-label="Close working session dialog"
          onClick={() => setModal(false)}
        >
          ✕
        </button>
        <Label>START WITH A WORKFLOW</Label>
        <h2 id="booking-title">
          Let’s scope
          <br />
          the first step.
        </h2>
        <p>
          A working session starts with your systems, the workflow you want to
          improve and the controls it needs.
        </p>
        <p className="booking-explanation">
          Scheduling coming soon. Online booking will be available here shortly.
        </p>
        <button className="button primary" onClick={() => setModal(false)}>
          Back to the platform <Arrow />
        </button>
      </dialog>
    </>
  );
}
