/**
 * CENTRAL DE DADOS (CEREBRO DO SITE)
 * Fonte unica de verdade para NAP, contato e configuracoes globais.
 * Alterar aqui propaga para todo o site, Schema JSON-LD, Sitemap e Open Graph.
 */

export const SITE_CONFIG = {
  // Identidade
  name: 'Aluguel de Brinquedos',
  tagline: 'Aluguel de Brinquedos para Festas e Eventos',
  description:
    'Aluguel de brinquedos para festas infantis e eventos em toda a regiao metropolitana. Pula-pula, escorregadores, piscinas de bolinhas, cama elastica e muito mais. Orcamento sem compromisso!',

  // Dominio
  url: 'https://www.alugueldebrinquedos.com.br',

  // NAP (Name, Address, Phone) - SEO Local
  nap: {
    name: 'Aluguel de Brinquedos',
    telephone: '+5521997751577',
    whatsapp: '5521997751577',
    whatsappDisplay: '(21) 99775-1577',
    phoneDisplay: '(21) 99775-1577',
    email: 'contato@alugueldebrinquedos.com.br',
    address: {
      street: 'Av. Brasil',
      number: '11201',
      neighborhood: 'Penha Circular',
      city: 'Rio de Janeiro',
      state: 'RJ',
      postalCode: '21012-351',
      country: 'BR',
    },
  },

  // Redes Sociais
  social: {
    whatsapp: 'https://wa.me/5521997751577',
  },

  // Horario de Funcionamento (formato Schema.org)
  openingHours: [
    'Mo-Fr 08:00-20:00',
    'Sa 09:00-18:00',
    'Su 10:00-16:00',
  ],

  // Regiao de Atendimento (para Schema AreaServed)
  areaServed: [
    { city: 'Rio de Janeiro', state: 'RJ' },
    { city: 'Niteroi', state: 'RJ' },
    { city: 'Sao Goncalo', state: 'RJ' },
    { city: 'Duque de Caxias', state: 'RJ' },
    { city: 'Nova Iguacu', state: 'RJ' },
    { city: 'Belford Roxo', state: 'RJ' },
    { city: 'Sao Joao de Meriti', state: 'RJ' },
    { city: 'Nilopolis', state: 'RJ' },
  ],

  // Preco/Geo (Schema)
  geo: {
    latitude: -22.838,
    longitude: -43.282,
  },

  // Fundacao
  foundingDate: '2009-01-01',

  // Cores da marca (para Open Graph e PWA)
  themeColor: '#1E3A8A',
  backgroundColor: '#FFFFFF',
} as const;
