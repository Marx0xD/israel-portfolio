export function CreditLedgerDiagram() {
  return (
    <div className="diagram-shell" aria-label="Credit ledger backend ownership diagram">
      <svg viewBox="0 0 760 360" role="img">
        <defs>
          <marker id="credit-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4">
            <path d="M0 0 L8 4 L0 8 Z" fill="var(--ink)" />
          </marker>
        </defs>

        <rect x="1" y="1" width="758" height="358" rx="8" fill="var(--bg)" stroke="rgba(27,36,48,0.14)" />
        <circle cx="650" cy="70" r="54" fill="var(--blue)" opacity="0.45" />
        <circle cx="106" cy="292" r="62" fill="var(--pink)" opacity="0.45" />

        <rect x="52" y="104" width="142" height="82" rx="8" fill="var(--pink)" stroke="rgba(27,36,48,0.16)" />
        <text x="72" y="132" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1.2">BROWSER STATE</text>
        <text x="72" y="158" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="20" fontWeight="650">Browser state</text>
        <text x="72" y="179" fill="var(--ink-soft)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1">Cached reflection</text>

        <rect x="278" y="70" width="214" height="170" rx="8" fill="var(--blue)" stroke="rgba(27,36,48,0.18)" />
        <text x="302" y="102" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1.2">CREDIT LEDGER</text>
        <text x="302" y="132" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="26" fontWeight="700">Backend credit</text>
        <text x="302" y="160" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="26" fontWeight="700">ledger</text>
        <text x="302" y="190" fill="var(--ink-soft)" fontFamily="var(--font-technical)" fontSize="13" letterSpacing="1">Source of truth</text>
        <rect x="318" y="205" width="134" height="24" rx="6" fill="var(--bg)" stroke="rgba(27,36,48,0.12)" />
        <text x="346" y="222" fill="var(--ink)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1">POSTGRESQL</text>

        <rect x="62" y="230" width="120" height="54" rx="8" fill="var(--coral)" stroke="rgba(27,36,48,0.16)" />
        <text x="80" y="253" fill="var(--ink)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1">STRIPE</text>
        <text x="80" y="274" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="17" fontWeight="700">Checkout</text>

        <rect x="220" y="268" width="122" height="54" rx="8" fill="var(--coral)" stroke="rgba(27,36,48,0.16)" />
        <text x="240" y="291" fill="var(--ink)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1">WEBHOOKS</text>
        <text x="240" y="312" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="17" fontWeight="700">Events</text>

        <rect x="548" y="88" width="138" height="78" rx="8" fill="var(--sun)" stroke="rgba(27,36,48,0.16)" />
        <text x="568" y="116" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1">BALANCE RULES</text>
        <text x="568" y="142" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="19" fontWeight="700">Controlled</text>
        <text x="568" y="162" fill="var(--ink-soft)" fontFamily="var(--font-technical)" fontSize="11" letterSpacing="0.8">mutations</text>

        <rect x="548" y="218" width="148" height="78" rx="8" fill="var(--pink)" stroke="rgba(27,36,48,0.16)" />
        <text x="568" y="246" fill="var(--coral-deep)" fontFamily="var(--font-technical)" fontSize="12" letterSpacing="1">CONTENT OWNERSHIP</text>
        <text x="568" y="272" fill="var(--ink)" fontFamily="var(--font-sans)" fontSize="19" fontWeight="700">Access</text>
        <text x="568" y="292" fill="var(--ink-soft)" fontFamily="var(--font-technical)" fontSize="11" letterSpacing="0.8">enforced</text>

        <line x1="194" y1="145" x2="278" y2="145" stroke="var(--ink)" strokeWidth="2" strokeDasharray="8 9" markerEnd="url(#credit-arrow)" />
        <line x1="182" y1="257" x2="278" y2="205" stroke="var(--ink)" strokeWidth="2" markerEnd="url(#credit-arrow)" />
        <line x1="342" y1="292" x2="386" y2="240" stroke="var(--ink)" strokeWidth="2" markerEnd="url(#credit-arrow)" />
        <line x1="492" y1="130" x2="548" y2="130" stroke="var(--ink)" strokeWidth="2" markerEnd="url(#credit-arrow)" />
        <path d="M617 166 L617 218" fill="none" stroke="var(--ink)" strokeWidth="2" markerEnd="url(#credit-arrow)" />
      </svg>
    </div>
  );
}
