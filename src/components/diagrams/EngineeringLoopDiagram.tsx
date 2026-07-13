export function EngineeringLoopDiagram() {
  return (
    <div className="diagram-shell" aria-label="Engineering ownership loop diagram">
      <svg viewBox="0 0 760 360" role="img">
        <defs>
          <marker id="loop-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4">
            <path d="M0 0 L8 4 L0 8 Z" fill="var(--ink)" />
          </marker>
        </defs>

        <rect x="1" y="1" width="758" height="358" rx="8" fill="var(--bg)" stroke="rgba(27,36,48,0.14)" />
        <circle cx="380" cy="180" r="94" fill="var(--blue)" opacity="0.28" />
        <circle cx="380" cy="180" r="48" fill="var(--sun)" opacity="0.52" />

        <path d="M380 74 C494 74 586 116 586 180 C586 244 494 286 380 286 C266 286 174 244 174 180 C174 116 266 74 380 74" fill="none" stroke="var(--ink)" strokeWidth="2" markerEnd="url(#loop-arrow)" />

        <rect x="300" y="46" width="160" height="66" rx="8" fill="var(--pink)" stroke="rgba(27,36,48,0.16)" />
        <text x="332" y="75" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1.2">AUTHORITY</text>
        <text x="332" y="96" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="19" fontWeight="700">Who decides?</text>

        <rect x="530" y="146" width="150" height="66" rx="8" fill="var(--blue)" stroke="rgba(27,36,48,0.16)" />
        <text x="570" y="175" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1.2">STATE</text>
        <text x="570" y="196" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="19" fontWeight="700">What is true?</text>

        <rect x="286" y="248" width="188" height="66" rx="8" fill="var(--sun)" stroke="rgba(27,36,48,0.16)" />
        <text x="314" y="277" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1.2">FAILURE PATH</text>
        <text x="314" y="298" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="19" fontWeight="700">What can go wrong?</text>

        <rect x="72" y="146" width="166" height="66" rx="8" fill="var(--pink)" stroke="rgba(27,36,48,0.16)" />
        <text x="108" y="175" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1.2">EVIDENCE</text>
        <text x="108" y="196" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="19" fontWeight="700">How do we know?</text>

        <text x="308" y="174" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="24" fontWeight="700">Design the</text>
        <text x="310" y="202" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="24" fontWeight="700">real system</text>
      </svg>
    </div>
  );
}
