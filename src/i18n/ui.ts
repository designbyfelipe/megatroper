// Textos de interface compartilhados por header, footer e layout.
// Conteúdo de página fica nos respectivos views (PT/EN lado a lado),
// para que a paridade entre os idiomas seja visível na revisão.

import type { Lang, RouteKey } from './routes';

export interface NavItem {
  key: RouteKey;
  label: string;
}

export interface UiStrings {
  nav: NavItem[];
  mainNav: string;
  mobileNav: string;
  openMenu: string;
  closeMenu: string;
  langLabel: string;
  ptName: string;
  enName: string;
  skip: string;
  since: string;
  location: string;
  tagline: string;
  footerMap: string;
  footerContact: string;
  footerNav: string;
  contactCta: string;
  defaultDescription: string;
}

const pt: UiStrings = {
  nav: [
    { key: 'home', label: 'INÍCIO' },
    { key: 'systems', label: 'SISTEMAS' },
    { key: 'about', label: 'SOBRE NÓS' },
    { key: 'lab', label: 'LAB' },
    { key: 'contact', label: 'CONTATO' },
  ],
  mainNav: 'Navegação principal',
  mobileNav: 'Menu móvel',
  openMenu: 'Abrir menu',
  closeMenu: 'Fechar menu',
  langLabel: 'Idioma',
  ptName: 'Português (PT)',
  enName: 'English (EN)',
  skip: 'Pular para o conteúdo',
  since: 'Desde',
  location: 'GUARULHOS · SÃO PAULO · BRASIL',
  tagline: 'Movimento de câmera.',
  footerMap: 'Mapa',
  footerContact: 'Contato',
  footerNav: 'Navegação',
  contactCta: 'Fale conosco',
  defaultDescription:
    'Sistemas, operação e soluções técnicas de movimento de câmera para produções audiovisuais. Guarulhos, São Paulo.',
};

const en: UiStrings = {
  nav: [
    { key: 'home', label: 'HOME' },
    { key: 'systems', label: 'SYSTEMS' },
    { key: 'about', label: 'ABOUT US' },
    { key: 'lab', label: 'LAB' },
    { key: 'contact', label: 'CONTACT' },
  ],
  mainNav: 'Main navigation',
  mobileNav: 'Mobile menu',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  langLabel: 'Language',
  ptName: 'Português (PT)',
  enName: 'English (EN)',
  skip: 'Skip to content',
  since: 'Since',
  location: 'GUARULHOS · SÃO PAULO · BRAZIL',
  tagline: 'Camera movement.',
  footerMap: 'Map',
  footerContact: 'Contact',
  footerNav: 'Navigation',
  contactCta: 'Talk to us',
  defaultDescription:
    'Camera movement systems, operations and technical solutions for audiovisual productions. Guarulhos, São Paulo.',
};

export const ui: Record<Lang, UiStrings> = { pt, en };
