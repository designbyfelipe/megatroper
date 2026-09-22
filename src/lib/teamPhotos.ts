// Módulo único de seleção fotográfica da equipe.
// Pool provisório: quatro registros fotográficos reais, ainda sem vínculo
// institucional com pessoas específicas (placeholders até os retratos oficiais).
//
// A distribuição é feita no momento do build (determinística por build, porém
// aleatória entre builds) exatamente para garantir que, depois de a página
// carregar, nenhuma imagem mude de posição — não há reordenamento em runtime.

import { siteUrl } from './url';

interface Shot {
  src: string;
  alt: string;
  caption: string;
}

const POOL: Shot[] = [
  {
    src: siteUrl('/img/equipe (1).jfif'),
    alt: 'Registro fotográfico provisório de um integrante da equipe.',
    caption: 'REGISTRO FOTOGRÁFICO 01',
  },
  {
    src: siteUrl('/img/equipe (2).jfif'),
    alt: 'Registro fotográfico provisório de um integrante da equipe.',
    caption: 'REGISTRO FOTOGRÁFICO 02',
  },
  {
    src: siteUrl('/img/equipe (3).jfif'),
    alt: 'Registro fotográfico provisório de um integrante da equipe.',
    caption: 'REGISTRO FOTOGRÁFICO 03',
  },
  {
    src: siteUrl('/img/equipe (4).jfif'),
    alt: 'Registro fotográfico provisório de um integrante da equipe.',
    caption: 'REGISTRO FOTOGRÁFICO 04',
  },
];

// Fisher–Yates sobre uma cópia — nunca muta o pool.
function shuffled<T>(list: T[]): T[] {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Atribui uma foto distinta a cada slot. Enquanto houver imagens não
// utilizadas, nunca repete; se o número de slots exceder o pool, reutiliza
// após consumir tudo (sem repetir dentro do primeiro ciclo).
export function assignTeamPhotos(count: number): Shot[] {
  if (count <= 0) return [];
  if (count <= POOL.length) {
    return shuffled(POOL).slice(0, count);
  }
  const base = shuffled(POOL);
  const remainder = count - base.length;
  return [...base, ...shuffled(POOL).slice(0, remainder)];
}
