# Vercel Deployment Guide

## Problem: 404 NOT_FOUND - DEPLOYMENT_NOT_FOUND

Der Fehler "404: NOT_FOUND Code: DEPLOYMENT_NOT_FOUND" tritt auf, wenn Vercel das Deployment nicht finden kann oder es nicht richtig konfiguriert ist.

## Lösung

### 1. Vercel-Konfiguration wurde hinzugefügt

Ich habe eine `vercel.json` Datei erstellt, die folgende Probleme behebt:

- **Build Command**: Explizit auf `npm run build` gesetzt
- **Output Directory**: Auf `dist-react` gesetzt (wie in Ihrer vite.config.ts definiert)
- **Framework**: Als `vite` spezifiziert
- **Rewrites**: SPA-Routing für React Router wird unterstützt
- **Caching**: Optimierte Cache-Header für Assets

### 2. .vercelignore wurde hinzugefügt

Schließt unnötige Dateien vom Deployment aus für bessere Performance.

## Deployment-Schritte

### Option 1: Neues Deployment über Vercel CLI

```bash
# Vercel CLI installieren (falls noch nicht installiert)
npm i -g vercel

# In Ihr Projektverzeichnis wechseln
cd /Users/gylan.salih/Desktop/PetalStackBoilerplate/PetalStack

# Einloggen bei Vercel
vercel login

# Deployment starten
vercel

# Produktions-Deployment
vercel --prod
```

### Option 2: Über Vercel Dashboard

1. Gehen Sie zu [vercel.com](https://vercel.com)
2. Klicken Sie auf "New Project"
3. Importieren Sie Ihr Git Repository
4. Vercel erkennt automatisch die `vercel.json` Konfiguration
5. Klicken Sie auf "Deploy"

### Option 3: GitHub Integration (Empfohlen)

1. Pushen Sie Ihre Änderungen zu GitHub:
   ```bash
   git add .
   git commit -m "Add Vercel configuration"
   git push origin main
   ```

2. In Vercel:
   - Gehen Sie zu Ihrem Vercel Dashboard
   - Wählen Sie "Import Git Repository"
   - Verbinden Sie Ihr GitHub Repository
   - Automatische Deployments bei jedem Push

## Troubleshooting

### Falls das Problem weiterhin besteht:

1. **Überprüfen Sie die Build-Logs**:
   - Gehen Sie zu Ihrem Vercel Dashboard
   - Klicken Sie auf das fehlgeschlagene Deployment
   - Überprüfen Sie die Logs auf Fehler

2. **Lokaler Build-Test**:
   ```bash
   npm run build
   npm run preview
   ```

3. **Vercel-Projekt neu erstellen**:
   - Löschen Sie das bestehende Projekt in Vercel
   - Erstellen Sie ein neues Projekt mit der aktualisierten Konfiguration

4. **Environment Variables prüfen**:
   - Stellen Sie sicher, dass alle erforderlichen Umgebungsvariablen in Vercel gesetzt sind

## Wichtige Dateien

- `vercel.json` - Vercel-Konfiguration
- `.vercelignore` - Dateien, die vom Deployment ausgeschlossen werden
- `vite.config.ts` - Build-Konfiguration mit `outDir: 'dist-react'`

## Build-Optimierungen

Das Projekt ist bereits optimiert für Produktion mit:
- Source Maps für Debugging
- CSS Modules mit optimierten Namen
- Asset-Caching
- SPA-Routing-Unterstützung

## Support

Falls weitere Probleme auftreten, überprüfen Sie:
- [Vercel Dokumentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#vercel)
