export function EarlyEngineeringDiagram() {
  return (
    <div className="diagram-shell" aria-label="Early engineering biometric ingestion diagram">
      <svg viewBox="0 0 760 360" role="img">
        <defs>
          <marker id="early-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4">
            <path d="M0 0 L8 4 L0 8 Z" fill="var(--ink)" />
          </marker>
        </defs>

        <rect x="1" y="1" width="758" height="358" rx="8" fill="var(--bg)" stroke="rgba(27,36,48,0.14)" />
        <circle cx="112" cy="278" r="52" fill="var(--blue)" opacity="0.44" />
        <circle cx="642" cy="78" r="52" fill="var(--pink)" opacity="0.44" />

        <rect x="64" y="134" width="134" height="82" rx="8" fill="var(--pink)" stroke="rgba(27,36,48,0.16)" />
        <text x="88" y="164" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1.2">DEVICE</text>
        <text x="88" y="192" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="22" fontWeight="700">ZKTeco</text>

        <rect x="252" y="118" width="154" height="114" rx="8" fill="var(--blue)" stroke="rgba(27,36,48,0.16)" />
        <text x="278" y="150" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1.2">INGESTION</text>
        <text x="278" y="180" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="23" fontWeight="700">Normalize</text>
        <text x="278" y="207" fill="var(--ink-soft)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1">attendance data</text>

        <rect x="462" y="86" width="156" height="82" rx="8" fill="var(--sun)" stroke="rgba(27,36,48,0.16)" />
        <text x="486" y="116" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1.2">HRMS</text>
        <text x="486" y="144" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="22" fontWeight="700">Payroll API</text>

        <rect x="462" y="204" width="156" height="82" rx="8" fill="var(--blue)" stroke="rgba(27,36,48,0.16)" />
        <text x="486" y="234" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1.2">OPS</text>
        <text x="486" y="262" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="22" fontWeight="700">Client use</text>

        <line x1="198" y1="175" x2="252" y2="175" stroke="var(--ink)" strokeWidth="2" markerEnd="url(#early-arrow)" />
        <line x1="406" y1="155" x2="462" y2="126" stroke="var(--ink)" strokeWidth="2" markerEnd="url(#early-arrow)" />
        <line x1="406" y1="198" x2="462" y2="244" stroke="var(--ink)" strokeWidth="2" markerEnd="url(#early-arrow)" />

        <rect x="90" y="262" width="78" height="28" rx="8" fill="var(--bg)" stroke="rgba(27,36,48,0.14)" />
        <text x="107" y="281" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="11">DEBUG</text>
        <rect x="188" y="262" width="80" height="28" rx="8" fill="var(--bg)" stroke="rgba(27,36,48,0.14)" />
        <text x="205" y="281" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="11">DEPLOY</text>
        <rect x="288" y="262" width="112" height="28" rx="8" fill="var(--bg)" stroke="rgba(27,36,48,0.14)" />
        <text x="305" y="281" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="11">FIELD OPS</text>
      </svg>
    </div>
  );
}
