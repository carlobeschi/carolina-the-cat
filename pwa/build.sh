#!/bin/sh
# Builds the installable web app into _site/ from the same you-are-a-cat.html the artifact uses.
set -e
cd "$(dirname "$0")/.."
OUT=${1:-_site}
VERSION=${2:-$(git rev-parse --short HEAD 2>/dev/null || date +%s)}
rm -rf "$OUT" && mkdir -p "$OUT/icons"
cat pwa/head.html you-are-a-cat.html pwa/tail.html > "$OUT/index.html"
cp pwa/manifest.webmanifest "$OUT/"
cp pwa/icons/icon.svg pwa/icons/*.png "$OUT/icons/"
sed "s/__VERSION__/$VERSION/" pwa/sw.js > "$OUT/sw.js"
touch "$OUT/.nojekyll"
echo "Built $OUT (version $VERSION)"
