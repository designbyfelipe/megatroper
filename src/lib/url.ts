// Resolução centralizada de URLs internas.
// Todo caminho local é prefixado com import.meta.env.BASE_URL ('/megatroper' —
// sem barra final quando trailingSlash: 'never', por isso a base é normalizada
// aqui). URLs externas (http, https, protocolo-relativas, data:) passam
// intactas — o que mantém o site funcionando em domínio próprio sem o prefixo.
// A função é idempotente: caminhos que já começam pela base retornam intactos,
// evitando dupla prefixação quando um valor resolvido passa por outro
// componente que também normaliza.

const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
const baseKey = base.replace(/^\/+/, '');

export function siteUrl(path: string): string {
  if (/^(https?:)?\/\//.test(path) || path.startsWith('data:')) return path;
  const clean = path.replace(/^\/+/, '');
  if (baseKey && clean.startsWith(`${baseKey}/`)) return path;
  return `${base}/${clean}`;
}