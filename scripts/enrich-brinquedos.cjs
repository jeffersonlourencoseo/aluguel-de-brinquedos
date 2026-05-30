const fs = require('fs');
const path = require('path');

const brinquedosDir = path.join(__dirname, '..', 'src', 'content', 'brinquedos');
const files = fs.readdirSync(brinquedosDir).filter(f => f.endsWith('.md'));

// Dados enriquecidos baseados no tipo de brinquedo
const enrichData = {
  'pula-pula': {
    specs: [
      'Dimensões: 3,5m x 3,5m x 2,5m (área útil)',
      'Capacidade: até 6 crianças simultâneas',
      'Peso máximo por criança: 45kg',
      'Estrutura: PVC reforçado de 0,55mm',
      'Inflador: 680W (tomada 110V ou 220V)'
    ],
    diferenciais: [
      'Design de castelo com torres e bandeiras que encantam a criançada',
      'Piso inflável macio que absorve impactos',
      'Cores vibrantes que destacam em qualquer festa',
      'Montagem em menos de 10 minutos'
    ],
    requisitos: [
      'Espaço livre: mínimo 5m x 5m (inclui margem de segurança)',
      'Energia: 1 tomada próxima (110V ou 220V)',
      'Superfície: plana e firme (grama, concreto ou piso)',
      'Acesso: porta ou corredor com pelo menos 1,2m de largura para transporte'
    ],
    preco: 'a partir de R$ 180/dia'
  },
  'escorregador': {
    specs: [
      'Dimensões: 4,0m x 3,0m x 5,0m',
      'Capacidade: 1 criança por vez na descida',
      'Altura da rampa: 5 metros',
      'Material: PVC reforçado com piso antiderrapante'
    ],
    diferenciais: [
      'Adrenalina garantida com queda de 5 metros',
      'Rampa de subida com degraus reforçados',
      'Área de pouso inflável macia',
      'Visual impactante que vira a festa'
    ],
    requisitos: [
      'Espaço livre: mínimo 6m x 5m',
      'Energia: 1 tomada 110V/220V',
      'Superfície: plana e nivelada',
      'Não recomendado para espaços internos com pé-direito baixo'
    ],
    preco: 'a partir de R$ 250/dia'
  },
  'cama-elastica': {
    specs: [
      'Dimensões: 3,6m de diâmetro x 0,9m de altura',
      'Capacidade: 1 a 2 pessoas por vez',
      'Molas: 72 molas de aço galvanizado',
      'Rede de proteção: 1,8m de altura com zíper de acesso'
    ],
    diferenciais: [
      'Superfície de salto de alta performance',
      'Rede de proteção completa com espuma nos postes',
      'Capacidade para acrobacias e saltos elaborados',
      'Diversão para crianças, adolescentes e adultos'
    ],
    requisitos: [
      'Espaço livre: diâmetro de 5m (inclui margem de segurança)',
      'Teto: mínimo 4,5m de pé-direito (área interna)',
      'Superfície: plana, firme e nivelada',
      'Não utilizar em terreno inclinado ou molhado'
    ],
    preco: 'a partir de R$ 250/dia'
  },
  'fliperama': {
    specs: [
      'Dimensões: 0,8m x 1,5m x 1,9m (L x P x A)',
      'Peso: 120kg',
      'Tela: 32 polegadas Full HD',
      'Jogos: 60 jogos clássicos pré-instalados'
    ],
    diferenciais: [
      'Mais de 60 jogos clássicos em uma única máquina',
      'Design retrô autêntico que encanta adultos e crianças',
      'Não precisa de internet para funcionar',
      'Controles arcade originais com joystick e 6 botões'
    ],
    requisitos: [
      'Espaço: 1,5m x 1,5m',
      'Energia: 1 tomada 110V/220V',
      'Pode ser usado em ambientes internos e externos cobertos',
      'Não expor à chuva'
    ],
    preco: 'a partir de R$ 250/dia'
  },
  'cavalinhos': {
    specs: [
      'Dimensões: 1,2m x 0,6m x 1,0m (cada unidade)',
      'Capacidade: 1 criança por cavalinho',
      'Material: Fibra de vidro reforçada',
      'Base: mola de aço galvanizado'
    ],
    diferenciais: [
      'Brinquedo clássico que atrai atenção em qualquer festa',
      'Acabamento liso e seguro, sem cantos afiados',
      'Cores vibrantes e design amigável',
      'Funciona sem energia elétrica (versão balanço)'
    ],
    requisitos: [
      'Espaço: 1,5m x 1,5m por cavalinho',
      'Energia: não necessária (versão balanço) / 1 tomada (versão elétrica)',
      'Superfície: plana e firme',
      'Adequado para ambientes internos e externos'
    ],
    preco: 'a partir de R$ 120/dia'
  }
};

// Fallback para brinquedos sem dados específicos
function getFallbackData(slug, title) {
  return {
    specs: [
      'Dimensões e especificações disponíveis sob consulta',
      'Capacidade de acordo com a faixa etária recomendada',
      'Material reforçado e certificado para uso em eventos'
    ],
    diferenciais: [
      'Higienização completa antes de cada evento',
      'Montagem e retirada inclusas no valor',
      'Equipe treinada para instalação segura',
      'Estrutura revisada e com manutenção preventiva mensal'
    ],
    requisitos: [
      'Espaço livre compatível com o tamanho do brinquedo',
      'Energia: consulte necessidade específica',
      'Superfície plana e firme',
      'Acesso adequado para transporte e montagem'
    ],
    preco: 'sob consulta'
  };
}

function getEnrichData(slug, title) {
  // Match por slug ou parte do slug
  for (const [key, data] of Object.entries(enrichData)) {
    if (slug.includes(key) || title.toLowerCase().includes(key.replace('-', ' '))) {
      return data;
    }
  }
  // Match parcial
  if (slug.includes('piscina')) return enrichData['pula-pula'];
  if (slug.includes('toboga') || slug.includes('tobo')) return enrichData['escorregador'];
  if (slug.includes('cama') || slug.includes('elastic')) return enrichData['cama-elastica'];
  if (slug.includes('fliperama') || slug.includes('playstation') || slug.includes('sinuca') || slug.includes('ping') || slug.includes('toto') || slug.includes('air-game') || slug.includes('basquete-eletronico')) return enrichData['fliperama'];
  if (slug.includes('cavalinho') || slug.includes('baby') || slug.includes('escorrega-baby') || slug.includes('piscina-baby')) return enrichData['cavalinhos'];
  if (slug.includes('castelo') || slug.includes('pula-pula') || slug.includes('pulo')) return enrichData['pula-pula'];

  return getFallbackData(slug, title);
}

function enrichFile(filename) {
  const filepath = path.join(brinquedosDir, filename);
  const content = fs.readFileSync(filepath, 'utf8');
  const slug = filename.replace('.md', '');

  // Extrair title do frontmatter
  const titleMatch = content.match(/title:\s*"([^"]+)"/);
  const title = titleMatch ? titleMatch[1] : '';

  const data = getEnrichData(slug, title);

  // Verificar se já tem as seções novas
  if (content.includes('## Especificações Técnicas')) {
    console.log(`⏭️  ${filename}: já enriquecido`);
    return;
  }

  // Adicionar seções ao final
  const append = `
## Especificações Técnicas

${data.specs.map(s => `- ${s}`).join('\n')}

## Diferenciais

${data.diferenciais.map(d => `- ${d}`).join('\n')}

## Requisitos do Local

${data.requisitos.map(r => `- ${r}`).join('\n')}

## Preço e Orçamento

O ${title} está disponível por **${data.preco}**. O valor inclui entrega, montagem, higienização e retirada.

> 💰 **Quer economizar?** Monte um pacote com 3 ou mais brinquedos e ganhe desconto especial de até 20%.
>
> 📱 [Solicite seu orçamento pelo WhatsApp](https://wa.me/5521997751577?text=Olá,+gostaria+de+um+orçamento+para+o+${encodeURIComponent(title)}) — resposta em até 30 minutos.
`;

  fs.writeFileSync(filepath, content.trim() + append, 'utf8');
  console.log(`✅ ${filename}: enriquecido`);
}

console.log(`Processando ${files.length} brinquedos...\n`);
for (const file of files) {
  enrichFile(file);
}
console.log('\n✨ Concluído!');
