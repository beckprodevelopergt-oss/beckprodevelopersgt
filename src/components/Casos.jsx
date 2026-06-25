import casosData from "../data/casos.json";

const iconMap = {
  register: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
    </svg>
  ),
  campaign: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    </svg>
  ),
  shop: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18" />
    </svg>
  ),
  inventory: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  ),
};

export default function Casos() {
  return (
    <section className="casos" id="casos">
      <div className="container">
        <div className="section-header reveal">
          <h2>Soluciones que podemos construir para tu negocio</h2>
          <span className="accent-line"></span>
        </div>

        <div className="casos-grid">
          {casosData.map((caso, index) => (
            <div className="caso-card reveal" key={index}>
              <div className="caso-icon">{iconMap[caso.icon]}</div>
              <h3>{caso.title}</h3>
            </div>
          ))}
        </div>

        <div className="casos-apoyo reveal">
          <p>
            &quot;Cada proyecto se adapta a la necesidad real del negocio. La
            tecnología debe simplificar, no complicar.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
