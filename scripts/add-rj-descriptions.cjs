const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'content', 'brinquedos');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

let updated = 0;

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Procura a linha de description
  const match = content.match(/^description:\s*"([^"]*)"/m);
  if (!match) return;
  
  const currentDesc = match[1];
  
  // Se já tem Rio de Janeiro ou RJ, pula
  if (/Rio de Janeiro|RJ/i.test(currentDesc)) return;
  
  // Adiciona " no Rio de Janeiro" no final
  const newDesc = currentDesc.trim().replace(/\.$/, '') + ' no Rio de Janeiro.';
  
  // Substitui
  content = content.replace(
    /^description:\s*"[^"]*/m,
    `description: "${newDesc}`
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
  updated++;
});

console.log(`Atualizados: ${updated} brinquedos`);
