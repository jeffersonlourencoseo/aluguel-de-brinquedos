const fs = require('fs');
const path = require('path');

const brinquedosDir = path.join(__dirname, '..', 'src', 'content', 'brinquedos');
const files = fs.readdirSync(brinquedosDir).filter(f => f.endsWith('.md'));

// Descriptions otimizadas por tipo de brinquedo
const descMap = {
  'pula-pula': 'Aluguel de {title} no Rio de Janeiro. Castelo inflável seguro, higienizado, com entrega e montagem inclusas. Orçamento grátis pelo WhatsApp!',
  'castelo': 'Aluguel de {title} no Rio de Janeiro. Inflável seguro e colorido, higienizado após cada evento. Entrega e montagem inclusas. Solicite orçamento!',
  'escorregador': 'Aluguel de {title} no Rio de Janeiro. Tobogã inflável de alta qualidade com entrega e montagem inclusas. Festa infantil garantida!',
  'toboga': 'Aluguel de {title} no Rio de Janeiro. Tobogã inflável seguro, higienizado, com entrega e montagem inclusas. Orçamento grátis!',
  'toboagua': 'Aluguel de {title} no Rio de Janeiro. Diversão com água garantida! Entrega, montagem e higienização inclusas. Solicite orçamento!',
  'cama-elastica': 'Aluguel de {title} no Rio de Janeiro. Cama elástica segura, higienizada, com entrega e montagem inclusas. Orçamento pelo WhatsApp!',
  'piscina': 'Aluguel de {title} no Rio de Janeiro. Piscina de bolinhas/bolinhas coloridas, higienizada. Entrega e montagem inclusas. Peça orçamento!',
  'futebol-sabao': 'Aluguel de {title} no Rio de Janeiro. Futebol de sabão para todas as idades! Entrega, montagem e higienização inclusas. Orçamento grátis!',
  'fliperama': 'Aluguel de {title} no Rio de Janeiro. Máquina de arcade com 60+ jogos clássicos. Entrega e instalação inclusas. Peça seu orçamento!',
  'playstation': 'Aluguel de {title} no Rio de Janeiro. Console com jogos selecionados. Entrega e instalação inclusas. Festa infantil garantida!',
  'sinuca': 'Aluguel de {title} no Rio de Janeiro. Mesa de bilhar profissional para eventos. Entrega e montagem inclusas. Solicite orçamento!',
  'ping-pong': 'Aluguel de {title} no Rio de Janeiro. Mesa de tênis de mesa profissional. Entrega e montagem inclusas. Peça orçamento grátis!',
  'touro-mecanico': 'Aluguel de {title} no Rio de Janeiro. Atração mecânica emocionante para festas! Entrega, montagem e operação inclusas.',
  'giroscopio': 'Aluguel de {title} no Rio de Janeiro. Brinquedo mecânico de 360° para festas e eventos. Entrega e operação inclusas. Orçamento!',
  'trenzinho': 'Aluguel de {title} no Rio de Janeiro. Passeio de trenzinho elétrico para festas e condomínios. Entrega e operação inclusas.',
  'cavalinho': 'Aluguel de {title} no Rio de Janeiro. Brinquedo clássico para festas de 1 e 2 anos. Entrega e montagem inclusas. Orçamento grátis!',
  'baby': 'Aluguel de {title} no Rio de Janeiro. Brinquedo seguro para bebês e crianças pequenas. Entrega e montagem inclusas. Peça orçamento!',
  'basquete-eletronico': 'Aluguel de {title} no Rio de Janeiro. Máquina de basquete eletrônica para eventos. Entrega e instalação inclusas. Orçamento!',
  'toto': 'Aluguel de {title} no Rio de Janeiro. Mesa de totó profissional para festas e eventos. Entrega e montagem inclusas. Peça orçamento!',
  'air-game': 'Aluguel de {title} no Rio de Janeiro. Mesa de air game profissional para eventos. Entrega e montagem inclusas. Orçamento grátis!',
  'futmesa': 'Aluguel de {title} no Rio de Janeiro. Mesa de futmesa profissional para festas. Entrega e montagem inclusas. Solicite orçamento!',
  'tamancoball': 'Aluguel de {title} no Rio de Janeiro. Jogo de tamancoball para festas e eventos. Entrega e montagem inclusas. Peça orçamento!',
  'canhao-espuma': 'Aluguel de {title} no Rio de Janeiro. Canhão de espuma para festas espumantes! Entrega, montagem e operação inclusas.',
  'bolha-aquatica': 'Aluguel de {title} no Rio de Janeiro. Water ball para festas com piscina. Entrega e operação inclusas. Orçamento grátis!',
  'boliche-humano': 'Aluguel de {title} no Rio de Janeiro. Boliche humano inflável para festas. Entrega, montagem e higienização inclusas.',
  'chute-a-gol': 'Aluguel de {title} no Rio de Janeiro. Brinquedo inflável de futebol para festas. Entrega e montagem inclusas. Peça orçamento!',
  'tiro-ao-alvo': 'Aluguel de {title} no Rio de Janeiro. Jogo de tiro ao alvo para festas. Entrega e montagem inclusas. Orçamento grátis!',
  'corrida-maluca': 'Aluguel de {title} no Rio de Janeiro. Corrida maluca inflável para festas. Entrega, montagem e higienização inclusas.',
  'giro-radical': 'Aluguel de {title} no Rio de Janeiro. Giro radical inflável para festas e eventos. Entrega e montagem inclusas. Orçamento!',
  'tombo-legal': 'Aluguel de {title} no Rio de Janeiro. Tombo legal inflável para festas. Entrega, montagem e higienização inclusas. Peça orçamento!',
  'centopeia': 'Aluguel de {title} no Rio de Janeiro. Centopeia inflável para festas infantis. Entrega, montagem e higienização inclusas.',
  'escalada-inflavel': 'Aluguel de {title} no Rio de Janeiro. Parede de escalada inflável para festas. Entrega e montagem inclusas. Orçamento grátis!',
  'plataforma-360': 'Aluguel de {title} no Rio de Janeiro. Plataforma giratória 360° para festas. Entrega e operação inclusas. Solicite orçamento!',
  'guerra-cotonetes': 'Aluguel de {title} no Rio de Janeiro. Guerra de cotonetes para festas. Entrega e montagem inclusas. Peça orçamento!',
  'kiddie-play': 'Aluguel de {title} no Rio de Janeiro. Estrutura baby multifuncional para festas. Entrega e montagem inclusas. Orçamento!',
  'aventura-tropical': 'Aluguel de {title} no Rio de Janeiro. Playground baby temático tropical. Entrega e montagem inclusas. Peça orçamento!',
  'playground-tematico': 'Aluguel de {title} no Rio de Janeiro. Playground baby 3 em 1 para festas. Entrega e montagem inclusas. Orçamento grátis!',
  'castelo-obstaculos': 'Aluguel de {title} no Rio de Janeiro. Castelo inflável com obstáculos para festas. Entrega e montagem inclusas.',
  'multi-atividades': 'Aluguel de {title} no Rio de Janeiro. Brinquedo baby multi-atividades para festas. Entrega e montagem inclusas.',
  'gangorra': 'Aluguel de {title} no Rio de Janeiro. Gangorra temática para festas infantis. Entrega e montagem inclusas. Peça orçamento!',
  'espaco-baby': 'Aluguel de {title} no Rio de Janeiro. Estrutura baby segura para bebês. Entrega e montagem inclusas. Orçamento grátis!',
  'piscina-inflavel': 'Aluguel de {title} no Rio de Janeiro. Piscina inflável para festas infantis. Entrega e montagem inclusas. Peça orçamento!',
};

function getOptimizedDesc(slug, title) {
  // Match exato
  if (descMap[slug]) return descMap[slug].replace('{title}', title);

  // Match parcial
  for (const [key, template] of Object.entries(descMap)) {
    if (slug.includes(key) || title.toLowerCase().includes(key.replace('-', ' '))) {
      return template.replace('{title}', title);
    }
  }

  // Fallback genérico
  return `Aluguel de ${title} no Rio de Janeiro. Brinquedo seguro, higienizado, com entrega e montagem inclusas. Orçamento grátis pelo WhatsApp!`;
}

let updated = 0;
let skipped = 0;

for (const file of files) {
  const filepath = path.join(brinquedosDir, file);
  let content = fs.readFileSync(filepath, 'utf8');
  const slug = file.replace('.md', '');

  // Extrair title
  const titleMatch = content.match(/title:\s*"([^"]+)"/);
  const title = titleMatch ? titleMatch[1] : '';

  // Extrair description atual
  const descMatch = content.match(/description:\s*"([^"]+)"/);
  const currentDesc = descMatch ? descMatch[1] : '';

  // Se já tem "Rio de Janeiro" e está entre 140-170 chars, pular
  if (currentDesc.includes('Rio de Janeiro') && currentDesc.length >= 140 && currentDesc.length <= 170) {
    skipped++;
    continue;
  }

  const newDesc = getOptimizedDesc(slug, title);

  // Substituir no frontmatter
  content = content.replace(
    new RegExp(`description:\s*"[^"]*"`, 'g'),
    `description: "${newDesc}"`
  );

  fs.writeFileSync(filepath, content, 'utf8');
  updated++;
  console.log(`✅ ${file}: ${newDesc.length} chars`);
}

console.log(`\n✨ Atualizados: ${updated} | Pulados (já otimizados): ${skipped}`);
