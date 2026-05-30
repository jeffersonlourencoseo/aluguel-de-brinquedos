const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  // Substituições ordenadas (mais específicas primeiro)
  content = content.replace(/na região metropolitana do RJ/g, 'na cidade do Rio de Janeiro e região metropolitana do RJ');
  content = content.replace(/na região metropolitana\./g, 'na cidade do Rio de Janeiro e região metropolitana.');
  content = content.replace(/na região metropolitana /g, 'na cidade do Rio de Janeiro e região metropolitana ');
  content = content.replace(/toda a região metropolitana/g, 'toda a cidade do Rio de Janeiro e região metropolitana');
  content = content.replace(/a região metropolitana /g, 'a cidade do Rio de Janeiro e região metropolitana ');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

// Arquivos .astro
const astroFiles = [
  'src/pages/index.astro',
  'src/pages/brinquedos.astro',
  'src/pages/blog.astro',
  'src/pages/sobre.astro',
  'src/pages/contato.astro',
  'src/pages/brinquedos/[slug].astro',
];

let astroUpdated = 0;
astroFiles.forEach(f => {
  const fp = path.join(__dirname, '..', f);
  if (fs.existsSync(fp) && fixFile(fp)) astroUpdated++;
});

// Arquivos .md de brinquedos e blog
const mdDirs = ['src/content/brinquedos', 'src/content/blog'];
let mdUpdated = 0;
mdDirs.forEach(dir => {
  const fullDir = path.join(__dirname, '..', dir);
  if (!fs.existsSync(fullDir)) return;
  const files = fs.readdirSync(fullDir).filter(f => f.endsWith('.md'));
  files.forEach(f => {
    const fp = path.join(fullDir, f);
    if (fixFile(fp)) mdUpdated++;
  });
});

console.log(`Astro atualizados: ${astroUpdated}`);
console.log(`Markdown atualizados: ${mdUpdated}`);
