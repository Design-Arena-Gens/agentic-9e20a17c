import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ESP32-CAM ? Reconnaissance faciale hors ligne',
  description: 'Active un relais si le visage est reconnu (hors ligne).',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
