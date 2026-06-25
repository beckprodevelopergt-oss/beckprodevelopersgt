import planesData from "../data/planes.json";

export default function Planes() {
  return (
    <section className="planes" id="planes">
      <div className="container">
        <div className="section-header reveal">
          <h2>Soluciones para cada etapa de tu negocio</h2>
          <span className="accent-line"></span>
        </div>

        <div className="planes-grid">
          {planesData.map((plan, index) => (
            <div
              className={`plan-card ${plan.destacado ? "destacado" : ""} reveal`}
              key={index}
            >
              <span className="plan-tag">{plan.tag}</span>
              <h3>{plan.title}</h3>
              <p className="plan-subtitle">{plan.subtitle}</p>
              <ul className="plan-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <a
                href={plan.buttonLink}
                className={`btn ${
                  plan.buttonStyle === "outline" ? "btn-outline" : ""
                }`}
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
