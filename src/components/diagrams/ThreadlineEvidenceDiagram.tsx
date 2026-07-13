export function ThreadlineEvidenceDiagram() {
  return (
    <div className="diagram-shell" aria-label="Threadline runtime evidence diagram">
      <svg viewBox="0 0 760 360" role="img">
        <defs>
          <marker id="threadline-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4">
            <path d="M0 0 L8 4 L0 8 Z" fill="var(--ink)" />
          </marker>
        </defs>

        <rect x="1" y="1" width="758" height="358" rx="8" fill="var(--bg)" stroke="rgba(27,36,48,0.14)" />
        <circle cx="620" cy="270" r="58" fill="var(--sun)" opacity="0.48" />
        <circle cx="142" cy="78" r="48" fill="var(--blue)" opacity="0.42" />

        <text x="52" y="50" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1.2">EVENT INGESTION</text>
        <rect x="52" y="78" width="156" height="56" rx="8" fill="var(--pink)" stroke="rgba(27,36,48,0.16)" />
        <text x="72" y="112" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="20" fontWeight="700">Request start</text>
        <rect x="52" y="154" width="156" height="56" rx="8" fill="var(--pink)" stroke="rgba(27,36,48,0.16)" />
        <text x="72" y="188" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="20" fontWeight="700">API operation</text>
        <text x="72" y="236" fill="var(--ink-soft)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1">FASTAPI</text>

        <text x="286" y="50" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1.2">FLOW RECONSTRUCTION</text>
        <line x1="350" y1="82" x2="350" y2="252" stroke="var(--ink)" strokeWidth="2" />
        <circle cx="350" cy="98" r="8" fill="var(--coral)" />
        <circle cx="350" cy="154" r="8" fill="var(--blue-deep)" />
        <circle cx="350" cy="210" r="8" fill="var(--sun-deep)" />
        <rect x="392" y="88" width="134" height="50" rx="8" fill="var(--blue)" stroke="rgba(27,36,48,0.16)" />
        <text x="410" y="119" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="18" fontWeight="700">DB query</text>
        <text x="410" y="135" fill="var(--ink-soft)" fontFamily="var(--font-technical)" fontSize="10" letterSpacing="0.8">DB EVIDENCE</text>
        <rect x="392" y="176" width="134" height="50" rx="8" fill="var(--sun)" stroke="rgba(27,36,48,0.16)" />
        <text x="410" y="207" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="18" fontWeight="700">Error found</text>
        <text x="410" y="223" fill="var(--ink-soft)" fontFamily="var(--font-technical)" fontSize="10" letterSpacing="0.8">SOURCE INTELLIGENCE</text>

        <text x="580" y="50" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1.2">CASE FILES</text>
        <rect x="572" y="82" width="136" height="170" rx="8" fill="var(--bg)" stroke="rgba(27,36,48,0.16)" />
        <text x="594" y="118" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="22" fontWeight="700">Case file</text>
        <line x1="596" y1="142" x2="680" y2="142" stroke="var(--ink-soft)" strokeWidth="2" opacity="0.45" />
        <line x1="596" y1="168" x2="660" y2="168" stroke="var(--ink-soft)" strokeWidth="2" opacity="0.45" />
        <line x1="596" y1="194" x2="682" y2="194" stroke="var(--ink-soft)" strokeWidth="2" opacity="0.45" />
        <text x="596" y="226" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1">TRACE READY</text>

        <line x1="208" y1="106" x2="342" y2="98" stroke="var(--ink)" strokeWidth="2" markerEnd="url(#threadline-arrow)" />
        <line x1="208" y1="182" x2="342" y2="154" stroke="var(--ink)" strokeWidth="2" markerEnd="url(#threadline-arrow)" />
        <line x1="526" y1="113" x2="572" y2="132" stroke="var(--ink)" strokeWidth="2" markerEnd="url(#threadline-arrow)" />
        <line x1="526" y1="201" x2="572" y2="190" stroke="var(--ink)" strokeWidth="2" markerEnd="url(#threadline-arrow)" />
      </svg>
    </div>
  );
}
