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
  url: 'https://www.alugueldebrinquedorj.com.br',

  // NAP (Name, Address, Phone) - SEO Local
  nap: {
    name: 'Aluguel de Brinquedos',
    telephone: '+5521997751577',
    whatsapp: '5521997751577',
    whatsappDisplay: '(21) 99775-1577',
    phoneDisplay: '(21) 99775-1577',
    email: 'contato@alugueldebrinquedorj.com.br',
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
    whatsapp: 'https://wa.me/5521997751577?text=Ola%2C%20achei%20seu%20site%20no%20google%20e%20gostaria%20de%20saber%20mais%20informacoes!',
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
  themeColor: '#E8622A',
  backgroundColor: '#FFFFFF',
} as const;
