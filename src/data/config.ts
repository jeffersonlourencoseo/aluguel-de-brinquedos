/**
 * CENTRAL DE DADOS (CÉREBRO DO SITE)
 * Fonte única de verdade para NAP, contato e configurações globais.
 * Alterar aqui propaga para todo o site, Schema JSON-LD, Sitemap e Open Graph.
 */

export const SITE_CONFIG = {
  // Identidade
  name: 'Aluguel de Brinquedos',
  tagline: 'Aluguel de Brinquedos para Festas e Eventos',
  description:
    'Aluguel de brinquedos para festas infantis e eventos em toda a região metropolitana. Pula-pula, escorregadores, piscinas de bolinhas, cama elástica e muito mais. Orçamento sem compromisso!',

  // Domínio
  url: 'https://www.alugueldebrinquedos.com.br',

  // NAP (Name, Address, Phone) — SEO Local
  nap: {
    name: 'Aluguel de Brinquedos',
    telephone: '+551133333333',
    whatsapp: '5511999999999',
    whatsappDisplay: '(11) 99999-9999',
    phoneDisplay: '(11) 3333-3333',
    email: 'contato@alugueldebrinquedos.com.br',
    address: {
      street: 'Rua da Diversão',
      number: '123',
      neighborhood: 'Centro',
      city: 'São Paulo',
      state: 'SP',
      postalCode: '01000-000',
      country: 'BR',
    },
  },

  // Redes Sociais
  social: {
    whatsapp: 'https://wa.me/5511999999999',
  },

  // Horário de Funcionamento (formato Schema.org)
  openingHours: [
    'Mo-Fr 08:00-20:00',
    'Sa 09:00-18:00',
    'Su 10:00-16:00',
  ],

  // Região de Atendimento (para Schema AreaServed)
  areaServed: [
    { city: 'São Paulo', state: 'SP' },
    { city: 'Guarulhos', state: 'SP' },
    { city: 'Osasco', state: 'SP' },
    { city: 'Santo André', state: 'SP' },
    { city: 'São Bernardo do Campo', state: 'SP' },
    { city: 'São Caetano do Sul', state: 'SP' },
    { city: 'Mauá', state: 'SP' },
    { city: 'Diadema', state: 'SP' },
  ],

  // Preço/Geo (Schema)
  geo: {
    latitude: -23.55052,
    longitude: -46.633308,
  },

  // Fundação
  foundingDate: '2009-01-01',

  // Cores da marca (para Open Graph e PWA)
  themeColor: '#1E3A8A',
  backgroundColor: '#FFFFFF',
} as const;
