export function OdooControlPlaneDiagram() {
  return (
    <div className="diagram-shell" aria-label="Odoo control plane infrastructure diagram">
      <svg viewBox="0 0 760 360" role="img">
        <defs>
          <marker id="odoo-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4">
            <path d="M0 0 L8 4 L0 8 Z" fill="var(--ink)" />
          </marker>
        </defs>

        <rect x="1" y="1" width="758" height="358" rx="8" fill="var(--bg)" stroke="rgba(27,36,48,0.14)" />
        <circle cx="148" cy="288" r="62" fill="var(--sun)" opacity="0.46" />
        <circle cx="650" cy="80" r="54" fill="var(--blue)" opacity="0.42" />

        <rect x="48" y="104" width="184" height="136" rx="8" fill="var(--blue)" stroke="rgba(27,36,48,0.18)" />
        <text x="72" y="136" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1.2">SPRING BOOT</text>
        <text x="72" y="168" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="25" fontWeight="700">Control plane</text>
        <text x="72" y="198" fill="var(--ink-soft)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1">DEPLOYMENT STATE</text>
        <rect x="72" y="212" width="104" height="22" rx="6" fill="var(--bg)" stroke="rgba(27,36,48,0.12)" />
        <text x="93" y="228" fill="var(--ink)" fontFamily="var(--font-technical)" fontSize="11" letterSpacing="1">OWNER</text>

        <rect x="292" y="126" width="128" height="74" rx="8" fill="var(--coral)" stroke="rgba(27,36,48,0.16)" />
        <text x="314" y="154" fill="var(--ink)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1.2">ENCRYPTED SSH</text>
        <text x="314" y="180" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="20" fontWeight="700">Python layer</text>

        <rect x="492" y="56" width="182" height="72" rx="8" fill="var(--pink)" stroke="rgba(27,36,48,0.16)" />
        <text x="514" y="83" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1">REMOTE HOSTS</text>
        <text x="514" y="110" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="21" fontWeight="700">Linux host 01</text>

        <rect x="492" y="150" width="182" height="72" rx="8" fill="var(--pink)" stroke="rgba(27,36,48,0.16)" />
        <text x="514" y="177" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1">REMOTE HOSTS</text>
        <text x="514" y="204" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="21" fontWeight="700">Linux host 02</text>

        <rect x="492" y="244" width="182" height="72" rx="8" fill="var(--pink)" stroke="rgba(27,36,48,0.16)" />
        <text x="514" y="271" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1">REMOTE HOSTS</text>
        <text x="514" y="298" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="21" fontWeight="700">Linux host 03</text>

        <g>
          <rect x="594" y="76" width="58" height="22" rx="6" fill="var(--bg)" stroke="rgba(27,36,48,0.12)" />
          <text x="607" y="91" fill="var(--ink)" fontFamily="var(--font-technical)" fontSize="10">DOCKER</text>
          <rect x="594" y="170" width="58" height="22" rx="6" fill="var(--bg)" stroke="rgba(27,36,48,0.12)" />
          <text x="607" y="185" fill="var(--ink)" fontFamily="var(--font-technical)" fontSize="10">ODOO</text>
          <rect x="594" y="264" width="58" height="22" rx="6" fill="var(--bg)" stroke="rgba(27,36,48,0.12)" />
          <text x="604" y="279" fill="var(--ink)" fontFamily="var(--font-technical)" fontSize="10">POSTGRES</text>
        </g>

        <line x1="232" y1="172" x2="292" y2="163" stroke="var(--ink)" strokeWidth="2" markerEnd="url(#odoo-arrow)" />
        <line x1="420" y1="163" x2="492" y2="92" stroke="var(--ink)" strokeWidth="2" markerEnd="url(#odoo-arrow)" />
        <line x1="420" y1="163" x2="492" y2="186" stroke="var(--ink)" strokeWidth="2" markerEnd="url(#odoo-arrow)" />
        <line x1="420" y1="163" x2="492" y2="280" stroke="var(--ink)" strokeWidth="2" markerEnd="url(#odoo-arrow)" />
      </svg>
    </div>
  );
}
