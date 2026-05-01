
# Plano: Refatoração da LP Casa Robelú inspirada na referência

## Leitura da referência
A imagem enviada mostra uma LP de resort com estas características:
- **Hero panorâmico** com foto grande da piscina/mar, título serifado claro sobre a imagem (lado esquerdo), navbar branca no topo e pequeno botão verde de destaque
- **Faixa de mosaico de quartos** logo abaixo do hero — 3 fotos lado a lado de quartos/ambientes (galeria curta tipo "showcase")
- **Bloco "New Features"** centralizado: eyebrow + título serifado + parágrafo curto, fundo claro com ilustração arquitetônica em marca-d'água
- **Bloco intercalado** com **stack de duas fotos sobrepostas** à esquerda (efeito polaroid/colagem) + texto "Website Up to Millions" + CTA outline à direita
- **Faixa colorida (verde-água)** com texto à esquerda + foto retangular flutuando à direita, lista de bullets, fundo com folhagem decorativa
- **Linha de ícones** com cards brancos pequenos (3 ícones em destaque sobre fundo claro)
- **Outra galeria de imagens** no rodapé

Cores da referência: muito espaço branco, verde-água esmeralda como cor de marca, fotografias quentes. Vou **adaptar a estrutura e os "moldes" de seção** mas **manter a paleta da Casa Robelú** (creme #F5F0E8, terracota #A0522D, dourado #C4915A, escuro #1A1A1A) e a tipografia atual (Playfair + Quicksand + Cormorant).

---

## Mudanças por seção

### 1. Hero (refatoração)
Adotar o layout da referência: imagem panorâmica + **título alinhado à esquerda** (não mais centralizado).
- Conteúdo na coluna esquerda (max-width ~620px), padding 48px desde a borda esquerda
- Eyebrow pequeno em dourado: "MORRO BRANCO · CEARÁ"
- Headline grande em Playfair regular alinhado à esquerda
- Subtítulo em Cormorant itálico
- 2 CTAs (manter)
- Badge de localização movido para canto inferior direito
- Manter Ken Burns leve e parallax atual
- Reduzir altura mínima do hero para 88vh (referência tem hero mais "comportado", não tela cheia)

### 2. Nova faixa "Showcase de Quartos" (NOVO componente `QuartosShowcase.tsx`)
Logo após o Hero, faixa de **3 fotos de quartos lado a lado**, slightly overlapping para baixo do hero (margin-top negativa de -80px desktop) — como na referência.
- Grid de 3 colunas no desktop, scroll horizontal no mobile
- Cada card: foto + caption embaixo (nome do quarto + pequeno texto)
- Reutiliza `quarto-1/2/3.webp`
- Adiciona profundidade ao hero e cria continuidade visual

### 3. Promise (reformatada como "New Features")
Adotar o layout central limpo da referência:
- Background creme com **ilustração arquitetônica/falésia em marca d'água** (usar `gallery-cliffs.webp` em opacity 4%)
- Eyebrow centralizado com pontos: "· DIFERENCIAIS ·"
- Título grande centralizado em terracota (mantendo "Não é uma casa de praia. É um destino.")
- Parágrafo curto centralizado
- Os 3 cards de pilares passam para **abaixo** com layout mais "flat" (sem caixa branca pesada — apenas ícone grande + título + texto, separados por linhas verticais finas terracota no desktop)

### 4. Casa — Bloco Editorial com Stack de Fotos (refatorado)
O 1º bloco (8 quartos) ganha o tratamento da referência:
- **Lado esquerdo:** stack de 2 imagens sobrepostas (uma maior atrás + uma menor à frente com offset, sombra e borda branca de 8px — efeito polaroid/colagem)
- **Lado direito:** texto + CTA outline terracota
- Demais blocos (Lazer, Acesso) mantêm formato atual mas ganham o mesmo cuidado de espaçamento

Cria componente auxiliar `<PhotoStack imageBack={...} imageFront={...} />` reutilizável.

### 5. Nova faixa "Experiência Robelú" (substitui visualmente o Eventos atual)
Adotar o **bloco verde-água** da referência, mas em **terracota** (#A0522D) para Casa Robelú:
- Background terracota com folhagem/falésia em opacity 8% no canto direito
- Coluna esquerda: eyebrow claro, título serifado claro, parágrafo, lista de 4 bullets com check dourado, CTA WhatsApp
- Coluna direita: **uma foto retangular grande "flutuando"** com sombra forte (foto da varanda ou pôr do sol)
- Conteúdo: pode ser "Eventos & Confraternizações" ou "Experiência Completa" — recomendo manter como **Eventos** já que existe

Isso substitui o `Eventos.tsx` atual (CTA centralizado em foto escura) por um layout mais editorial e rico.

### 6. Faixa de ícones/serviços (NOVO componente `Servicos.tsx`)
Imediatamente após a faixa terracota, **3 cards brancos pequenos com ícones** (estilo da referência onde há os 3 ícones quadrados brancos):
- Wi-Fi · Estacionamento · Café da manhã (ou outros 3 serviços-chave)
- Cards quadrados brancos com sombra suave, ícone terracota grande, título uppercase pequeno
- Levemente sobrepostos à seção anterior (translateY -40px) para dar profundidade

### 7. Galeria (mantida, mas refinada)
- Manter grid 3 colunas
- Adicionar **eyebrow + título no estilo "Squad ed Create Mesh Design"** da referência (centralizado, serifado)
- Hover já existe — adicionar caption editorial revelado por baixo

### 8. Demais seções
- **Stats, Depoimentos, Reservas, Footer:** apenas refinos visuais (espaçamentos, dividers ornamentais entre seções)
- **Navbar:** trocar botão CTA para ter destaque verde? **Não** — manter terracota da marca (a referência usa verde por ser marca dela). Adicionar scroll progress bar dourada de 1px no topo

---

## Sistema de motion (mantido do plano anterior, simplificado)

Adicionar `framer-motion` para:
- **Reveal por palavra** no headline do hero
- **Stagger** nos cards de pilares e showcase de quartos
- **Reveal-mask** (clip-path) nas imagens grandes ao entrar na viewport
- **Ken Burns** suave em hero e foto da faixa terracota
- **Hover lift** nos cards (translateY -6px + sombra que cresce)
- **Scroll progress bar** dourada no navbar
- Respeitar `prefers-reduced-motion` em tudo

Variantes ficam em `src/lib/motion.ts`.

---

## Identidade visual mantida
- **Paleta:** creme #F5F0E8, terracota #A0522D, dourado #C4915A, escuro #1A1A1A — não mudar
- **Tipografia:** Playfair Display, Cormorant Garamond, Quicksand — não mudar
- **Logo "CASA ROBELÚ"** em Josefin Sans — manter
- O verde da referência **não** entra (apenas inspira a estrutura), exceto o WhatsApp float que segue verde de marca #25D366

---

## Arquivos

**Novos:**
- `src/components/QuartosShowcase.tsx`
- `src/components/Servicos.tsx`
- `src/components/PhotoStack.tsx` (utilitário)
- `src/lib/motion.ts`

**Editados:**
- `src/components/Hero.tsx` (alinhamento à esquerda + altura)
- `src/components/Promise.tsx` (layout "New Features" + cards mais flat)
- `src/components/Casa.tsx` (1º bloco com PhotoStack)
- `src/components/Eventos.tsx` (refatorar para faixa terracota com foto à direita)
- `src/components/Galeria.tsx` (caption hover editorial)
- `src/components/Navbar.tsx` (scroll progress bar)
- `src/pages/Index.tsx` (inserir QuartosShowcase após Hero, Servicos após Eventos)
- `src/index.css` (dividers ornamentais, easings, refinos)

**Dependência adicional:**
- `framer-motion`

---

## Princípios
- **Sutileza:** nada de animação > 1.2s perceptível
- **Performance:** apenas `transform` e `opacity` em motion
- **Mobile-first:** stack de fotos vira foto única no mobile, parallax/Ken Burns desligados em < 768px
- **Coerência de marca:** estrutura da referência + paleta/tipografia da Casa Robelú já consolidadas
