## Diagnóstico

Encontrei vários focos de **baixa legibilidade**:

1. **Eyebrows** (`text-xs` = 12px) com `tracking-[0.3em]` — letras minúsculas e muito espaçadas; viram ruído.
2. **Body copy** em `text-dark-text/75` ou `#6B5E52` — contraste fraco em fundo bege; cansa os olhos.
3. **Botões** em `text-[12px]` com `tracking-[0.2em]` — quase ilegíveis no mobile.
4. **Captions de cards** (`text-[10px]`, `text-[11px]`) na Galeria, ExternoShowcase, Hero badge, Servicos, Footer — pequenas demais.
5. **Reservas** (seção escura): labels `text-[11px]` e infos em `text-sm` ficam apertadas.
6. **Footer**: `text-[10px]` — não dá pra ler.
7. **Promise pillars**: título `0.78rem` (≈12.5px) com tracking 0.18em — muito pequeno.
8. **Lazer amenities**: `text-[15px]` ok, mas `text-dark-text/80` fraco.
9. **`body { font-weight: 300 }`** — Quicksand 300 em 14-16px fica fino e cinza.

## Princípios da reestrutura

- **Mínimo legível**: nunca abaixo de **13px**, e só em microelementos (créditos no Footer, badges).
- **Body padrão**: **17px** desktop / 16px mobile, peso **400** (em vez de 300).
- **Eyebrows**: subir de 12px → **13px**, tracking 0.3em → **0.22em**, peso **600**.
- **Contraste**: trocar `text-dark-text/75` por `/85`, e `#6B5E52` por **`#3D2F24`** (mais escuro, ainda quente).
- **Botões**: subir para **14px** (sm:15px), tracking **0.14em**, peso **600**.
- **Hierarquia tipográfica clara** — definir escala única e aplicar:
  ```
  display-xl  : clamp(2.8rem, 6vw, 5rem)     — Hero h1
  display-lg  : clamp(2.4rem, 4.5vw, 3.6rem) — h2 das seções
  display-md  : clamp(1.8rem, 3vw, 2.4rem)   — h3 grandes
  body-lg     : 18px / 1.75 — parágrafos hero/promise
  body        : 17px / 1.7  — parágrafos padrão  
  body-sm     : 15px / 1.6  — listas, captions grandes
  micro       : 13px / tracking 0.2em — eyebrows, créditos
  ```

## Mudanças (escopo enxuto)

### 1) `src/index.css` — sistema de tipografia
- `body`: `font-weight: 400` (era 300), `font-size: 17px`, `line-height: 1.65`, `letter-spacing: 0.005em`.
- Mobile: `@media (max-width: 640px) { body { font-size: 16px } }`.
- `.eyebrow`: `font-size: 13px`, `tracking: 0.22em`, `font-weight: 600`, cor `hsl(var(--terracota))`.
- Adicionar utilitários: `.text-body-lg` (18px/1.75), `.text-body` (17px/1.7), `.text-body-sm` (15px/1.6), `.text-micro` (13px/tracking 0.2em uppercase).
- `.btn-hero`, `.btn-ghost-light`: `text-sm sm:text-[15px]`, `tracking-[0.14em]`, `font-weight: 600`.
- `--muted-foreground`: escurecer de `24 10% 35%` → **`24 15% 22%`** (melhor contraste em bege).

### 2) `src/components/Hero.tsx`
- Eyebrow "Morro Branco · Ceará": 10/11px → **13px**, tracking 0.32em → **0.22em**, peso 600.
- Subtítulo: `text-base sm:text-lg md:text-xl` → **`text-lg sm:text-xl md:text-2xl`**, opacidade 0.85 → **0.95**.
- Botões: 12px → **14px sm:15px**, tracking 0.18em → **0.14em**, peso 600, padding maior.
- Badge "Desde 1986": 10/12px → **12/14px**.

### 3) `src/components/Promise.tsx`
- Parágrafo principal: 1.05rem → **1.15rem**, cor `#6B5E52` → **`#3D2F24`**, line-height 1.85 → **1.7**.
- Pillars title: 0.78rem → **0.95rem**, tracking 0.18em → **0.14em**.
- Pillars text: 1rem → **1.05rem**, cor `#6B5E52` → **`#3D2F24`**.
- Linha "Estadia mínima…": 11/12px → **13px**, peso 500.

### 4) `src/components/PeNaAreia.tsx`, `Lazer.tsx`, `EspacoInterno.tsx`
- H2: já bom (clamp); manter.
- Parágrafos: `text-[17px]` `leading-[1.9]` → **`text-[17px] sm:text-[18px]`** `leading-[1.7]`, opacidade 0.75 → **0.9**.
- Lazer amenities: 15px → **16px**, opacidade 0.8 → **0.92**.
- "Ver Galeria" link: 12px → **13px**, tracking 0.2em → **0.16em**.

### 5) `src/components/ExternoShowcase.tsx`
- Label do card: 10/11px → **12/13px**, tracking 0.28em → **0.2em**, peso 600.
- Descrição: `text-sm sm:text-base` → **`text-base sm:text-lg`**, opacidade 0.9 → **1**.

### 6) `src/components/Galeria.tsx`
- Numeração: 10px → **12px**, tracking 0.28em → **0.2em**.
- Label: `text-base` → **`text-lg`**.

### 7) `src/components/Servicos.tsx`
- Título item: 11/12px → **13/14px**, peso 600.
- Descrição: 13/14px → **15/16px**, opacidade subir.

### 8) `src/components/Eventos.tsx`, `Experiencias.tsx`
- Botões/links: 12px → **14px**, tracking 0.2em → **0.14em**.
- Card text Experiencias: já `text-base sm:text-lg`, manter; eyebrow `text-[11px]` → **13px**.

### 9) `src/components/Reservas.tsx`
- Labels `text-[11px]` → **13px**, tracking 0.25em → **0.2em**.
- Infos `text-sm` → **`text-[15px]`**, opacidade subir (off-white/60 → /85).
- Hint `text-xs` → **13px**.

### 10) `src/components/Depoimentos.tsx`
- Quote: `text-base sm:text-lg md:text-xl` → **`text-lg sm:text-xl md:text-2xl`**, leading subir.
- Nome: 13px → **14px**, tracking 0.2em → **0.16em**.
- "via Google" 11px → **12px**.

### 11) `src/components/Footer.tsx`
- Créditos: 10/12px → **12/13px**, tracking 0.18em → **0.14em**.
- `text-sm` → **`text-[15px]`**, opacidade subir.

### 12) `src/components/Stats.tsx`
- Label: 12px → **13px**, opacidade 0.8 → **0.95**.

## O que NÃO muda

- Paleta de cores semântica (terracota, gold, off-white, champagne) — apenas um ajuste em `--muted-foreground`.
- Famílias de fonte (Playfair Display, Cormorant Garamond, Quicksand) — combinação já funciona.
- Estrutura de seções, animações, layout, imagens.
- Tamanhos dos H1/H2 grandes — já estão na escala certa via `clamp()`.

## Resultado esperado

Tudo continua com a mesma identidade premium, mas com **textos legíveis sem precisar aproximar o rosto da tela**. Body 17px, contraste alto, eyebrows respiráveis, botões com presença real, e nenhum texto abaixo de 13px (exceto microcopy de copyright).
