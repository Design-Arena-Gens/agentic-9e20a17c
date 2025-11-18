# ESP32-CAM · Reconnaissance faciale hors ligne → Relais

Projet complet: site Next.js (déployable Vercel) + firmware Arduino pour ESP32-CAM.

- Firmware: `public/firmware/esp32cam_relay_face/esp32cam_relay_face.ino`
- Guide PDF: `public/firmware/README.pdf`
- Site: App Router Next.js 14

## Matériel
- ESP32-CAM (AI Thinker)
- Relais 5V (optocouplé recommandé)
- Alim 5V/2A
- USB–TTL pour le flash
- (Option) bouton sur `GPIO 13`

## Câblage
- IN relais → `GPIO 14`
- VCC relais → 5V
- GND relais → GND
- LED flash intégrée → `GPIO 4`

## Fonctionnement
- Bouton maintenu ~2s → mode enrôlement, capturez 5–7 échantillons
- En mode normal, si visage reconnu (score ≥ 0.60), relais ON 3s

## Compilation (Arduino IDE)
- Carte: ESP32 Arduino core
- Module: "AI Thinker ESP32-CAM"
- Sélectionner le bon port série (USB–TTL)
- Installer dépendances ESP-WHO si nécessaire (reconnaissance faciale)

