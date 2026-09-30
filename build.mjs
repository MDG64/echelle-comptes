// Construit index.html (version autonome, GitHub Pages) à partir de page.html,
// la même page que celle publiée comme artifact Claude (sans squelette HTML).
import { readFileSync, writeFileSync } from "node:fs";

const src = readFileSync(new URL("./page.html", import.meta.url), "utf8");
const cut = src.indexOf("</style>") + "</style>".length;
const head = src.slice(0, cut).trim();
const body = src.slice(cut).trim();

const html = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="Suivi quotidien de comptes de trading : courbe idéale, courbe réelle, écart et projection.">
<meta name="robots" content="noindex, nofollow">
<meta name="theme-color" content="#f1f3ee" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#111310" media="(prefers-color-scheme: dark)">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icon-192.png" type="image/png">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Échelle">
<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}img{max-width:100%}</style>
${head}
</head>
<body>
${body}
</body>
</html>
`;
writeFileSync(new URL("./index.html", import.meta.url), html);
console.log("index.html écrit (" + html.length + " octets)");
