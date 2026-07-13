export function BusinessWorkflowDiagram() {
  return (
    <div className="diagram-shell" aria-label="Business workflow state diagram">
      <svg viewBox="0 0 760 360" role="img">
        <defs>
          <marker id="workflow-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4">
            <path d="M0 0 L8 4 L0 8 Z" fill="var(--ink)" />
          </marker>
        </defs>

        <rect x="1" y="1" width="758" height="358" rx="8" fill="var(--bg)" stroke="rgba(27,36,48,0.14)" />
        <circle cx="88" cy="84" r="48" fill="var(--pink)" opacity="0.44" />
        <circle cx="666" cy="284" r="54" fill="var(--sun)" opacity="0.46" />

        <text x="52" y="56" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1.2">APPROVALS</text>

        <g>
          <rect x="52" y="132" width="116" height="70" rx="8" fill="var(--pink)" stroke="rgba(27,36,48,0.16)" />
          <text x="74" y="162" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="19" fontWeight="700">Submitted</text>
          <text x="74" y="184" fill="var(--ink-soft)" fontFamily="var(--font-technical)" fontSize="11">REQUEST</text>

          <rect x="196" y="132" width="116" height="70" rx="8" fill="var(--blue)" stroke="rgba(27,36,48,0.16)" />
          <text x="218" y="162" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="19" fontWeight="700">Reviewed</text>
          <text x="218" y="184" fill="var(--ink-soft)" fontFamily="var(--font-technical)" fontSize="11">CHECK</text>

          <rect x="340" y="132" width="116" height="70" rx="8" fill="var(--sun)" stroke="rgba(27,36,48,0.16)" />
          <text x="362" y="162" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="19" fontWeight="700">Approved</text>
          <text x="362" y="184" fill="var(--ink-soft)" fontFamily="var(--font-technical)" fontSize="11">RULE</text>

          <rect x="484" y="132" width="118" height="70" rx="8" fill="var(--coral)" stroke="rgba(27,36,48,0.16)" />
          <text x="504" y="162" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="18" fontWeight="700">Payment</text>
          <text x="504" y="184" fill="var(--ink)" fontFamily="var(--font-technical)" fontSize="11">PROCESSED</text>

          <rect x="630" y="132" width="92" height="70" rx="8" fill="var(--blue)" stroke="rgba(27,36,48,0.16)" />
          <text x="650" y="162" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="18" fontWeight="700">History</text>
          <text x="650" y="184" fill="var(--ink-soft)" fontFamily="var(--font-technical)" fontSize="11">RECORDED</text>
        </g>

        <line x1="168" y1="167" x2="196" y2="167" stroke="var(--ink)" strokeWidth="2" markerEnd="url(#workflow-arrow)" />
        <line x1="312" y1="167" x2="340" y2="167" stroke="var(--ink)" strokeWidth="2" markerEnd="url(#workflow-arrow)" />
        <line x1="456" y1="167" x2="484" y2="167" stroke="var(--ink)" strokeWidth="2" markerEnd="url(#workflow-arrow)" />
        <line x1="602" y1="167" x2="630" y2="167" stroke="var(--ink)" strokeWidth="2" markerEnd="url(#workflow-arrow)" />

        <g>
          <rect x="72" y="248" width="96" height="28" rx="8" fill="var(--bg)" stroke="rgba(27,36,48,0.14)" />
          <text x="88" y="267" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="11">MASTERCARD</text>
          <rect x="190" y="248" width="104" height="28" rx="8" fill="var(--bg)" stroke="rgba(27,36,48,0.14)" />
          <text x="207" y="267" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="11">WALLET FLOWS</text>
          <rect x="316" y="248" width="146" height="28" rx="8" fill="var(--bg)" stroke="rgba(27,36,48,0.14)" />
          <text x="333" y="267" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="11">DOCUMENT VERIFICATION</text>
          <rect x="484" y="248" width="54" height="28" rx="8" fill="var(--bg)" stroke="rgba(27,36,48,0.14)" />
          <text x="502" y="267" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="11">SMS</text>
          <rect x="560" y="248" width="120" height="28" rx="8" fill="var(--bg)" stroke="rgba(27,36,48,0.14)" />
          <text x="577" y="267" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="11">DATA MIGRATION</text>
        </g>
      </svg>
    </div>
  );
}
