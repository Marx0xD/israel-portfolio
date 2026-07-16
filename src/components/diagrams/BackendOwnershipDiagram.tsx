export function BackendOwnershipDiagram() {
  return (
    <div className="diagram-shell" aria-label="Backend flow across system boundaries">
      <svg viewBox="0 0 760 360" role="img">
        <defs>
          <marker id="ownership-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4">
            <path d="M0 0 L8 4 L0 8 Z" fill="var(--ink)" />
          </marker>
        </defs>

        <rect x="1" y="1" width="758" height="358" rx="8" fill="var(--bg)" stroke="rgba(27,36,48,0.14)" />
        <circle cx="382" cy="178" r="90" fill="var(--sun)" opacity="0.44" />
        <circle cx="98" cy="294" r="54" fill="var(--pink)" opacity="0.45" />
        <circle cx="662" cy="70" r="54" fill="var(--blue)" opacity="0.45" />

        <text x="68" y="56" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1.2">CROSSING BOUNDARIES</text>
        <rect x="58" y="86" width="154" height="38" rx="8" fill="var(--pink)" stroke="rgba(27,36,48,0.16)" />
        <text x="78" y="110" fill="var(--ink)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1">API + RULES</text>
        <rect x="58" y="136" width="154" height="38" rx="8" fill="var(--pink)" stroke="rgba(27,36,48,0.16)" />
        <text x="78" y="160" fill="var(--ink)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1">DATA + WORKFLOW</text>
        <rect x="58" y="186" width="154" height="38" rx="8" fill="var(--pink)" stroke="rgba(27,36,48,0.16)" />
        <text x="78" y="210" fill="var(--ink)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1">EXTERNAL SYSTEMS</text>
        <rect x="58" y="236" width="154" height="38" rx="8" fill="var(--pink)" stroke="rgba(27,36,48,0.16)" />
        <text x="78" y="260" fill="var(--ink)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1">RUNTIME BEHAVIOR</text>

        <rect x="286" y="114" width="188" height="130" rx="8" fill="var(--blue)" stroke="rgba(27,36,48,0.18)" />
        <text x="314" y="152" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1.2">ISRAEL OWNS</text>
        <text x="314" y="184" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="27" fontWeight="700">the whole flow</text>
        <text x="314" y="214" fill="var(--ink-soft)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1">DEV → PRODUCTION</text>

        <text x="546" y="56" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1.2">COHERENT BACKEND</text>
        <rect x="544" y="86" width="154" height="38" rx="8" fill="var(--sun)" stroke="rgba(27,36,48,0.16)" />
        <text x="564" y="110" fill="var(--ink)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1">CLEAR AUTHORITY</text>
        <rect x="544" y="136" width="154" height="38" rx="8" fill="var(--sun)" stroke="rgba(27,36,48,0.16)" />
        <text x="564" y="160" fill="var(--ink)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1">LEGAL TRANSITIONS</text>
        <rect x="544" y="186" width="154" height="38" rx="8" fill="var(--sun)" stroke="rgba(27,36,48,0.16)" />
        <text x="564" y="210" fill="var(--ink)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1">INTEGRATION CONTROL</text>
        <rect x="544" y="236" width="154" height="38" rx="8" fill="var(--sun)" stroke="rgba(27,36,48,0.16)" />
        <text x="564" y="260" fill="var(--ink)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1">FAILURE CONTEXT</text>

        <line x1="212" y1="180" x2="286" y2="180" stroke="var(--ink)" strokeWidth="2" markerEnd="url(#ownership-arrow)" />
        <line x1="474" y1="180" x2="544" y2="180" stroke="var(--ink)" strokeWidth="2" markerEnd="url(#ownership-arrow)" />
      </svg>
    </div>
  );
}
