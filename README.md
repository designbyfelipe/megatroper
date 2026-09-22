# Megatroper — site institucional

Site institucional da Megatroper em **Astro** — sem cases, estudos, clientes ou
especificações inventadas. Linguagem visual de cinema, máquina e arquivo:
preto/branco/cinza + amarelo institucional, Fraunces + Archivo + IBM Plex Mono.

## Estrutura

```
src/
  config.ts               # dados institucionais centralizados (URLs, base, desde)
  layouts/
    Layout.astro          # <head>, SEO/OG, fontes, header/footer, transição de página
  components/
    Logo.astro             # usa public/logo.png automaticamente; fallback wordmark
    Header.astro           # navegação primária + menu mobile (acessível, View Transitions)
    Footer.astro
    Panel.astro            # slot de mídia neutro (sem gradiente), pronto para /fotos/...
    EditorialRow.astro     # linha índice de sistemas (número + nome + texto técnico)
    Person.astro           # retrato tipográfico (monograma), sem fotografia falsa
    Construction.astro     # módulo "em construção" (Cases, Lab)
    DataItem.astro         # item da grade de dados (Home)
    BriefForm.astro        # formulário de contato (client-side, sem backend)
  styles/
    global.css             # design system completo (tokens, grid 12, tipografia)
  pages/
    index.astro            # Home
    sistemas.astro
    trabalhos.astro
    cases.astro
    pessoas.astro
    lab.astro
    internacional.astro
    contato.astro
```

## Rodando localmente

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # gera build estático em dist/
```

## Pendências marcadas no código

- **Logo real**: `public/logo.png` (lockup 1000×149) já está em uso no header e no
  footer. Enquanto o arquivo existir, `Logo.astro` renderiza a imagem — o fallback
  (quadrado amarelo + wordmark) só aparece se o arquivo for removido.
- **Fotografia real**: `Panel.astro` é um quadro vazio com marcas de registro —
  sem gradiente falso. Quando houver fotos/vídeos, passe
  `<Panel variant="wide" src="/fotos/operacao-01.jpg" />` em cada página.
- **URL do Instagram**: configurada em `src/config.ts` (`SITE.instagram`).
- **Cases / Lab / História**: mantidos como "em construção" — não preencher com
  conteúdo fictício.
- **Formulário de contato**: hoje é só front-end (confirmação local). Para
  receber briefings de fato, ligue o `submit` de `BriefForm.astro` a um endpoint.
