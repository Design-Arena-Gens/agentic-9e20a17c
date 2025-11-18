export default function Wiring() {
  return (
    <section style={{ marginTop: '2rem' }}>
      <h2 style={{ fontSize: '1.25rem' }}>Sch?ma de c?blage</h2>
      <ul>
        <li>Relais IN ? GPIO 14</li>
        <li>Relais VCC ? 5V, GND commun</li>
        <li>Bouton (option) ? GPIO 13 (INPUT_PULLUP, actif ? LOW)</li>
      </ul>
      <p>
        ?vitez les broches d?amor?age (GPIO 12/15). Utilisez un relais optocoupl? si la charge est inductive.
      </p>
    </section>
  );
}
