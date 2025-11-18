import Link from 'next/link';

export default function Page() {
  return (
    <main style={{
      maxWidth: 900,
      margin: '0 auto',
      padding: '2rem',
      lineHeight: 1.6,
      fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif'
    }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>ESP32-CAM ? Reconnaissance faciale hors ligne ? Relais</h1>
      <p>
        Ce projet fait fonctionner l?ESP32-CAM enti?rement hors ligne. Lorsqu?un visage enregistr? est reconnu, un relais s?active; sinon il reste inactif.
      </p>

      <h2 style={{ fontSize: '1.25rem', marginTop: '2rem' }}>T?l?charger le firmware</h2>
      <ul>
        <li>
          <a href="/firmware/esp32cam_relay_face/esp32cam_relay_face.ino" download>
            Firmware Arduino (.ino)
          </a>
        </li>
        <li>
          <a href="/firmware/README.pdf" target="_blank" rel="noreferrer">
            Guide PDF (c?blage + flash)
          </a>
        </li>
      </ul>

      <h2 style={{ fontSize: '1.25rem', marginTop: '2rem' }}>Mat?riel</h2>
      <ul>
        <li>ESP32-CAM (AI Thinker)</li>
        <li>Module relais 5V (optocoupl? recommand?)</li>
        <li>Alimentation 5V 2A</li>
        <li>Convertisseur USB?TTL pour le flash</li>
        <li>Bouton poussoir (optionnel pour l?enr?lement)</li>
      </ul>

      <h2 style={{ fontSize: '1.25rem', marginTop: '2rem' }}>C?blage (AI Thinker)</h2>
      <ul>
        <li>Relais IN ? GPIO 14</li>
        <li>Relais VCC ? 5V, GND commun</li>
        <li>Option: bouton d?enr?lement ? GPIO 13 (pull-up interne)</li>
      </ul>

      <h2 style={{ fontSize: '1.25rem', marginTop: '2rem' }}>Fonctionnement</h2>
      <ol>
        <li>Au d?marrage, la cam?ra s?initialise et la reconnaissance est pr?te.</li>
        <li>Maintenir le bouton pendant 2s pour passer en mode enr?lement; capturer quelques visages (LED flash clignote).</li>
        <li>En mode normal, si un visage reconnu d?passe le seuil de confiance, le relais s?active pendant une dur?e configurable.</li>
      </ol>

      <p style={{ marginTop: '2rem' }}>
        Voir le code et les instructions compl?tes dans le d?p?t.
      </p>

      <p style={{ marginTop: '1rem' }}>
        <Link href="https://github.com/" target="_blank" rel="noreferrer">Code source</Link>
      </p>
    </main>
  );
}
