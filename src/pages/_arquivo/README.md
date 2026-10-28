# Páginas arquivadas

Estas páginas foram retiradas da navegação principal e não são publicadas no
build atual, mas o código foi preservado para uma possível reintrodução futura.

O diretório `_arquivo` é ignorado pelo roteamento do Astro (pastas iniciadas por
`_`), portanto nenhuma delas é publicada.

## Estrutura ativa (cinco páginas)

- PT: `/`, `/sistemas`, `/sobre`, `/lab`, `/contato`
- EN: `/en`, `/en/systems`, `/en/about`, `/en/lab`, `/en/contact`

## Conteúdo arquivado

- `trabalhos.astro` — antiga página de trabalhos.
- `cases.astro` — antiga página de cases.
- `internacional.astro` — antiga página internacional. O conteúdo essencial foi
  incorporado à página de Contato (`src/views/ContactView.astro`).
- `pessoas.astro` — antiga página de pessoas em português.
- `en-people.astro` — antiga página de pessoas em inglês.

O antigo Lab arquivado foi substituído pelo Lab ativo (`src/views/LabView.astro`,
`src/pages/lab.astro` e `src/pages/en/lab.astro`).

A view `src/views/PeopleView.astro` também foi mantida para consulta futura,
embora não esteja roteada.

## Para reintroduzir

1. Mova o arquivo de volta para `src/pages/` (ou para `src/pages/en/`, se for a
   versão em inglês).
2. Ajuste os imports de `../../` para `../` (ou `../../`, no caso de `en/`).
3. Adicione a rota em `src/i18n/routes.ts` e o item de navegação em
   `src/i18n/ui.ts`.
4. Revise o conteúdo segundo as regras editoriais do dossiê: não publicar
   capacidade, cliente ou parceria sem prova documentada.
