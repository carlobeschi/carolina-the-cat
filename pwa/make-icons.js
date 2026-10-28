// Draws the app icons from the game's own cat: node pwa/make-icons.js you-are-a-cat.html pwa/icons
const {chromium}=require('playwright');const fs=require('fs');
(async()=>{
const b=await chromium.launch();const p=await b.newPage();
const game=fs.readFileSync(process.argv[2],'utf8');
await p.route('**/fonts.googleapis.com/**',r=>r.abort());
await p.setContent('<!doctype html><meta charset=utf-8>'+game);
const cat=await p.evaluate(()=>catSVG('happy'));
const BODY=await p.evaluate(()=>BODY);
let dots='';for(let i=0;i<36;i++){const a=i/36*Math.PI*2;dots+=`<circle cx="${(256+190*Math.cos(a)).toFixed(1)}" cy="${(256+190*Math.sin(a)).toFixed(1)}" r="9" fill="#7cc6f0"/>`}
const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512"><defs><clipPath id="catClip"><path d="${BODY}"/></clipPath></defs>
<rect width="512" height="512" fill="#d7ecfa"/>
<circle cx="256" cy="256" r="172" fill="#fffaf6" stroke="#2c8fd6" stroke-width="10" stroke-dasharray="2 18" stroke-linecap="round"/>${dots}
<g transform="translate(256,404) scale(2)">${cat}</g></svg>`;
fs.writeFileSync(process.argv[3]+'/icon.svg',svg);
for(const s of [512,192,180]){const q=await b.newPage({viewport:{width:s,height:s}});
await q.setContent(`<style>html,body{margin:0}</style>`+svg.replace('width="512" height="512"',`width="${s}" height="${s}"`));
await q.screenshot({path:`${process.argv[3]}/icon-${s}.png`});}
await b.close();})();
