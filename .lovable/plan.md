
# Plano: Reorganizar a LP — começar pela área externa, mover quartos para baixo, copy de especialista

## Contexto extraído do onboarding (PDF)
- Nome: **Casa de Praia Morro Branco / Casa Robelú**
- Capacidade: **23 pessoas** (não 10 — vou corrigir em todos os pontos)
- Diária R$ 2.000 / Final de semana R$ 4.000 / Mínimo 2 noites
- Estrutura externa: piscina 4×8m, deck com churrasqueira e freezer, varanda com redes, **campo de vôlei**, **capela de oração**, estacionamento privativo
- Estrutura interna: 8 quartos, cozinha equipada, internet, enxoval completo (toalhas por conta do hóspede)
- Diferenciais: localização privilegiada, pé na areia, ambiente familiar e seguro, próximo às falésias, dono com 40 anos no local
- Benefícios chave: descanso, privacidade, ideal para famílias e grupos grandes, conforto

## Fotos novas adicionadas (já convertidas para webp)
- `externa-pe-na-areia.webp` — passarela, coqueiros, mar e estátua de N. Sra.
- `externa-deck-mar.webp` — deck com piscina e vista do mar aberto
- `externa-redes.webp` — varanda com redes coloridas, vista da piscina e quadra de vôlei
- `externa-capela.webp` — capela de oração no jardim
- `interna-sala.webp` — sala de estar
- `interna-jantar.webp` — sala de jantar para 10
- `local-morrobranco.webp` — letreiro "Morro Branco" (para seção localização)
- `local-praca.webp` — Praça da Mentira (cultura local)

---

## Nova ordem da landing page

```
Hero
↓
ExternoShowcase   (NOVO — substitui QuartosShowcase: 3 fotos da área externa)
↓
Promise           (mantém — diferenciais)
↓
PeNaAreia         (NOVO — bloco grande "Pé na areia, vista 180°")
↓
Lazer             (refeito com áreas externas: piscina, deck, redes, vôlei, capela, churrasqueira)
↓
Experiencias      (mantém — Morro Branco / falésias / buggy)
↓
Galeria
↓
Eventos
↓
Servicos
↓
EspacoInterno     (NOVO — sala, jantar, cozinha equipada — apresentado de forma editorial)
↓
Quartos           (movido para baixo — 8 quartos, slideshow + texto)
↓
Depoimentos
↓
Stats             (corrige "10" → "23" pessoas)
↓
Reservas
↓
Footer
```

---

## Mudanças por arquivo

### 1. `src/components/ExternoShowcase.tsx` (NOVO — substitui `QuartosShowcase.tsx`)
3 cards verticais sobrepostos ao final do hero (margem negativa), agora mostrando: **Pé na Areia**, **Deck com Vista 180°**, **Varanda das Redes** (fotos novas). Mesmo layout/motion.

### 2. Refatorar `src/components/Casa.tsx` em **3 componentes separados** com nova ordem
Em vez de ter 3 blocos misturados (quartos / lazer / acesso), criar componentes distintos posicionados em pontos diferentes da página:

- **`src/components/PeNaAreia.tsx`** (NOVO) — bloco editorial logo após Promise, com PhotoStack das fotos externas + copy de especialista:
  - Headline: "Pé na areia. Vista 180°. *Privacidade absoluta.*"
  - Copy: "Você acorda com o som do mar e abre os olhos para o horizonte. A passarela leva direto à praia — sem ruas para atravessar, sem turistas no caminho. Aqui o dia começa onde a maioria das férias termina."
  - Imagens: `externa-pe-na-areia.webp` (back) + `externa-deck-mar.webp` (front)

- **`src/components/Lazer.tsx`** (NOVO) — área de lazer completa com lista de amenities focada nas externas:
  - Headline: "Tudo o que importa, *do deck à capela.*"
  - Copy: "Reúna até 23 pessoas em uma estrutura pensada para grupos: piscina de 4×8m com profundidade uniforme, deck com churrasqueira e freezer, varanda com redes para a sesta, quadra de vôlei na areia e até uma capela de oração no jardim. Tudo em uma só casa, sem precisar sair."
  - Foto principal: `externa-deck-mar.webp`; foto inset (polaroid): `externa-redes.webp`
  - Lista atualizada de amenities (8 itens externos)

- **`src/components/EspacoInterno.tsx`** (NOVO) — bloco editorial dos espaços internos sociais:
  - Headline: "Ambientes para *receber, conversar e descansar.*"
  - Copy: "Sala ampla com sofás para todos, mesa de jantar para 10, cozinha equipada e enxoval completo. Receber 23 pessoas aqui é simples — a casa foi feita para isso há quase 40 anos."
  - PhotoStack: `interna-sala.webp` + `interna-jantar.webp`

- **`src/components/Quartos.tsx`** (NOVO — substitui o bloco de quartos da Casa, agora posicionado mais abaixo) — com slideshow `quarto-1/2/3` à esquerda e copy especialista à direita:
  - Eyebrow: "Acomodações"
  - Headline: "8 quartos, *23 pessoas, zero concessão.*"
  - Lista detalhada dos 8 quartos (do PDF): 2 suítes c/ ar e cama casal+solteiro, 3 suítes c/ ventilador, 1 quarto casal, 1 quarto 2 solteiros, 1 quarto externo c/ 5 camas
  - Copy: "Cada quarto pensado para um perfil diferente de hóspede. Casais ganham suíte com ar-condicionado, crianças e amigos têm espaços próprios — todos com enxoval completo (forros, colchas, fronhas e lençóis incluídos)."

- **Deletar** `src/components/Casa.tsx` (o conteúdo é dividido nos componentes acima).
- **Deletar** `src/components/QuartosShowcase.tsx` (substituído por ExternoShowcase).

### 3. `src/components/Hero.tsx`
- Atualizar copy: "Refúgio exclusivo em Morro Branco para até **23 pessoas**" (mantendo elegância)
- Manter resto

### 4. `src/components/Promise.tsx`
- Atualizar pilar "Para Grupos de Até **10**" → **"Para Grupos de Até 23"** com texto "Capacidade para até 23 hóspedes — ideal para famílias grandes e confraternizações."

### 5. `src/components/Stats.tsx`
- Atualizar `{ n: "10", label: "pessoas por estadia" }` → `{ n: "23", ... }`

### 6. `src/components/Reservas.tsx`
- Atualizar "Capacidade até 10 pessoas" → "Capacidade até 23 pessoas"
- Atualizar select de hóspedes: ir de 1 a 23 (em vez de 1 a 10), e a opção "mais de 10" passa a ser "Mais de 23"
- Atualizar a lógica de `grupoGrande` para `> 23`

### 7. `src/components/Eventos.tsx`
- Atualizar copy "Reúna até 10 pessoas" → "Reúna até 23 pessoas"

### 8. `src/components/Experiencias.tsx`
- Adicionar **4º card "Capela de Oração"** ou usar a imagem `local-praca.webp` em alguma seção (Praça da Mentira é cultural, fica ótimo num bloco de "Cultura local")
- Substituir/enriquecer cards atuais com referência ao letreiro "Morro Branco" como destino

### 9. `src/pages/Index.tsx`
Reorganizar imports e ordem dos componentes conforme nova hierarquia:

```tsx
<Navbar />
<Hero />
<ExternoShowcase />
<Promise />
<PeNaAreia />
<Lazer />
<Experiencias />
<Galeria />
<Eventos />
<Servicos />
<EspacoInterno />
<Quartos />
<Depoimentos />
<Stats />
<Reservas />
<Footer />
<WhatsAppFloat />
```

### 10. `index.html`
- Atualizar meta description: "...até **23 hóspedes**, vista 180°..."

---

## Diretrizes de copy (tom de especialista)

Princípios aplicados em todos os textos novos:
- **Foco em benefício, não em feature.** "Você acorda com o som do mar" > "tem vista para o mar"
- **Frases curtas, ritmo editorial.** Pausas com pontos finais, italics em palavras-chave
- **Linguagem sensorial.** Som, brisa, pé na areia, sombra, sesta
- **Prova de exclusividade.** "sem ruas para atravessar", "sem turistas no caminho", "40 anos no local"
- **Quantificar quando ajuda.** "23 pessoas", "4×8m", "180°", "8 quartos"
- **Italic terracota** nas palavras-chave dos headlines (já é padrão da LP)

---

## Identidade visual mantida
Paleta, tipografia, motion (framer-motion), componentes auxiliares (`PhotoStack`) — tudo mantido. Apenas reorganização e novo conteúdo.

---

## Arquivos finais

**Novos:**
- `src/components/ExternoShowcase.tsx`
- `src/components/PeNaAreia.tsx`
- `src/components/Lazer.tsx`
- `src/components/EspacoInterno.tsx`
- `src/components/Quartos.tsx`

**Removidos:**
- `src/components/Casa.tsx` (conteúdo migrado)
- `src/components/QuartosShowcase.tsx` (substituído)

**Editados:**
- `src/components/Hero.tsx` (copy 23 pessoas)
- `src/components/Promise.tsx` (pilar 23)
- `src/components/Stats.tsx` (10 → 23)
- `src/components/Reservas.tsx` (capacidade 23)
- `src/components/Eventos.tsx` (copy 23)
- `src/components/Experiencias.tsx` (refinos)
- `src/pages/Index.tsx` (nova ordem)
- `index.html` (meta description)

**Assets já adicionados** (nesta sessão de planejamento):
- `externa-pe-na-areia.webp`, `externa-deck-mar.webp`, `externa-redes.webp`, `externa-capela.webp`
- `interna-sala.webp`, `interna-jantar.webp`
- `local-morrobranco.webp`, `local-praca.webp`
