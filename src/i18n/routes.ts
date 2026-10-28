// Rotas localizadas — fonte única de verdade para PT e EN.
//
// URLs estáveis (cinco páginas):
//   PT: /, /sistemas, /sobre, /lab, /contato
//   EN: /en, /en/systems, /en/about, /en/lab, /en/contact
//
// O base do GitHub Pages ('/megatroper') é removido antes da comparação,
// para que a detecção funcione tanto em produção quanto em domínio próprio.

export type Lang = 'pt' | 'en';
export type RouteKey = 'home' | 'systems' | 'about' | 'lab' | 'contact';

export const routes: Record<RouteKey, Record<Lang, string>> = {
  home: { pt: '/', en: '/en' },
  systems: { pt: '/sistemas', en: '/en/systems' },
  about: { pt: '/sobre', en: '/en/about' },
  lab: { pt: '/lab', en: '/en/lab' },
  contact: { pt: '/contato', en: '/en/contact' },
};

const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** Remove o base do projeto e normaliza a barra final. */
export function stripBase(pathname: string): string {
  const clean = pathname.split('?')[0].split('#')[0] || '/';
  if (base && (clean === base || clean.startsWith(`${base}/`))) {
    const rest = clean.slice(base.length) || '/';
    return rest.startsWith('/') ? rest : `/${rest}`;
  }
  return clean.startsWith('/') ? clean : `/${clean}`;
}

function normalize(path: string): string {
  const p = path.replace(/\/+$/, '');
  return p === '' ? '/' : p;
}

const pathToRoute: Record<string, RouteKey> = {
  '/': 'home',
  '/sistemas': 'systems',
  '/sobre': 'about',
  '/lab': 'lab',
  '/contato': 'contact',
  '/en': 'home',
  '/en/systems': 'systems',
  '/en/about': 'about',
  '/en/lab': 'lab',
  '/en/contact': 'contact',
  // Rotas antigas de Pessoas: o equivalente atual é Sobre nós / About Us.
  '/pessoas': 'about',
  '/en/people': 'about',
};

export function routeFromPath(pathname: string): RouteKey {
  return pathToRoute[normalize(stripBase(pathname))] ?? 'home';
}

export function langFromPath(pathname: string): Lang {
  const p = normalize(stripBase(pathname));
  return (p === '/en' || p.startsWith('/en/')) ? 'en' : 'pt';
}

export function htmlLang(lang: Lang): 'pt-BR' | 'en' {
  return lang === 'en' ? 'en' : 'pt-BR';
}

export function pathFor(route: RouteKey, lang: Lang): string {
  return routes[route][lang];
}

/** Caminho equivalente na outra língua, preservando a página atual. */
export function switchPath(pathname: string, target: Lang): string {
  return routes[routeFromPath(pathname)][target];
}
