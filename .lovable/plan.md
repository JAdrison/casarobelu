
# Reestrutura da landing — referência Vila Flor

Objetivo: replicar a hierarquia, o ritmo visual e a harmonia tipográfica da Vila Flor, adaptando ao conteúdo real da Casa Robelú (casa inteira, até 23 hóspedes, Morro Branco/CE). Onde ainda não houver foto, deixo um placeholder elegante com a descrição exata do que você precisa enviar.

## Nova ordem das seções (do topo para o rodapé)

```
1.  Navbar (logo Robelú)
2.  Hero                       — "Bem-vindo à Casa Robelú"
3.  Apresentação               — Texto + 3 fotos da casa (substitui ExternoShowcase)
4.  Conceito "Casa Inteira"    — O que é alugar a Robelú (substitui Promise)
5.  Pé na Areia / Localização  — manter (PeNaAreia)
6.  Lazer & Estrutura          — manter (Lazer + EspacoInterno fundidos)
7.  Quartos / Acomodações      — manter (Quartos)
8.  Gastronomia                — bloco textual + 4 fotos (sem tabela de preços)
9.  Passeios & Experiências    — NOVA seção forte (buggy, parapente, falésias…)
10. A Região (Morro Branco)    — manter (Regiao)
11. Galeria                    — manter
12. Eventos                    — manter
13. Hospitalidade / Equipe     — NOVA (placeholder de foto + texto)
14. Depoimentos                — manter
15. Stats                      — manter
16. Reservas / Orçamento       — manter (Reservas)
17. Footer
```

Removidos do fluxo principal: `Servicos` (vai virar bullets dentro de "Conceito Casa Inteira" e "Hospitalidade").

---

## Mudanças por seção

### 3. Apresentação (nova — substitui o atual `ExternoShowcase` como primeira dobra após o hero)
- Layout: texto à esquerda + 2-3 fotos à direita (estilo Vila Flor "Vila Flor Casa de Praia e Studios").
- Eyebrow: "SOBRE A CASA"
- Título: "Casa Robelú · Refúgio nas falésias de Morro Branco"
- Texto base (3 parágrafos curtos) sobre: pé na areia, vista 180°, casa inteira para grupos.
- Fotos: reaproveita `gramado-mar`, `virgem-mar`, `piscina-pergolado` (já existem).

### 4. Conceito "Casa Inteira" (substitui o atual `Promise`)
- Layout: 1 foto grande à esquerda + texto + lista de inclusos à direita (espelha o card "Casa Principal" da Vila Flor, mas como bloco único).
- Eyebrow: "O CONCEITO"
- Título: "A casa é toda sua."
- Bullets de inclusos (vindos do atual `Servicos`):
  - Até 23 pessoas · 8 quartos
  - Piscina 4×8m com pergolado
  - Quadra de vôlei e capela
  - Deck com churrasqueira
  - Pé na areia · vista 180°
  - Enxoval completo incluso
  - Wi-Fi, ar-condicionado nas suítes
  - Estacionamento privativo
- CTA: "Solicitar orçamento"

### 8. Gastronomia (NOVA)
- Layout: texto à esquerda + grid 2×2 de fotos à direita (espelha Vila Flor sem a tabela de preços).
- Eyebrow: "GASTRONOMIA"
- Título: "Sabores do Nordeste à mesa"
- Texto: frutos do mar frescos, culinária local, churrasco no deck, drinks ao pôr do sol.
- Sem tabela de preços (conforme decidido).
- **Placeholders necessários (você me envia):**
  1. Foto de prato com frutos do mar
  2. Foto da mesa posta / café da manhã
  3. Foto do churrasco no deck
  4. Foto de drink / coco ao pôr do sol

### 9. Passeios & Experiências (NOVA — substitui a tabela de planos)
- Esta é a seção que você pediu para destacar.
- Layout: header centralizado + grid 2×3 (6 cards) com foto de fundo + label + título + descrição curta + duração/distância.
- Eyebrow: "O QUE FAZER NA REGIÃO"
- Título: "Aventura, natureza e cultura à porta da casa"
- Cards previstos:
  1. **Falésias de Morro Branco** — trilha pelas formações coloridas (foto: já existe `exp-falesias.jpg`)
  2. **Passeio de Buggy** — dunas, lagoas e praias desertas (foto: já existe `exp-buggy.jpg`)
  3. **Voo de Parapente** — decolagem em Canoa Quebrada (foto: já existe `parapente.webp`)
  4. **Expedição nas Falésias** — caminhada guiada com banho nas piscinas naturais — *placeholder de foto*
  5. **Praia de Canoa Quebrada** — vida noturna, broadway, kitesurf — *placeholder de foto*
  6. **Lagoa do Uruaú / Praia das Fontes** — passeio de catamarã e tirolesa — *placeholder de foto*
- **Placeholders necessários:** 3 fotos (expedição falésias, Canoa Quebrada, Lagoa do Uruaú).

### 13. Hospitalidade / Nossa Equipe (NOVA)
- Layout: foto à esquerda (placeholder) + texto à direita (espelha Vila Flor "Hospitalidade com rosto, voz e história").
- Eyebrow: "NOSSA EQUIPE"
- Título: "Hospitalidade com rosto, voz e história."
- Texto: equipe local de Morro Branco — caseiro, cozinheira, camareiras — que cuidam da casa e dos hóspedes; o luxo no calor humano.
- **Placeholder necessário:** 1 foto da equipe (ou da cozinheira servindo / caseiro recebendo).

### Refinamentos transversais (harmonia visual Vila Flor)
- Espaçamento vertical entre seções padronizado em `py-24 md:py-36`.
- Alternância rigorosa de fundos: `off-white` → `champagne` → `off-white` → `dark-text` (gastronomia/experiências em fundo escuro para criar peso).
- Eyebrows sempre com ornamento `<span class="ornament" />` para coesão.
- Divisor de 56px dourado centralizado abaixo de cada eyebrow nas seções centradas.
- Títulos limitados a 2 linhas em desktop, segunda linha em itálico cor terracota — padrão já estabelecido.

---

## Componente de placeholder de foto

Para todas as fotos pendentes, criar um componente reutilizável `PhotoPlaceholder` que renderiza:
- Caixa com `aspect-ratio` correto, fundo `champagne` com textura sutil.
- Ícone de câmera centralizado.
- Texto pequeno: "Foto pendente — [descrição]".
- Borda tracejada terracota leve.

Assim a página fica visualmente completa enquanto você me envia as fotos. Quando enviar, eu só substituo a importação.

---

## Detalhes técnicos

- **Novos arquivos:**
  - `src/components/Apresentacao.tsx`
  - `src/components/CasaInteira.tsx` (substitui visualmente `Promise`)
  - `src/components/Gastronomia.tsx`
  - `src/components/Passeios.tsx`
  - `src/components/Hospitalidade.tsx`
  - `src/components/PhotoPlaceholder.tsx`
- **Editados:**
  - `src/pages/Index.tsx` — nova ordem de imports e composição
  - `src/components/Promise.tsx` — descontinuado (removido do Index)
  - `src/components/ExternoShowcase.tsx` — descontinuado (substituído por `Apresentacao`)
  - `src/components/Servicos.tsx` — descontinuado (conteúdo migra para `CasaInteira`)
- **Reaproveitamento de assets:** todos os assets já existentes em `src/assets/` são mantidos.
- **Sem mudanças em:** Navbar, Hero, PeNaAreia, Lazer, Quartos, Regiao, Galeria, Eventos, Depoimentos, Stats, Reservas, Footer, WhatsAppFloat, tema/cores no `index.css` e `tailwind.config.ts`.

---

## Lista do que você precisa me enviar (resumo)

1. **Gastronomia (4 fotos):** prato de frutos do mar · café da manhã / mesa posta · churrasco no deck · drink ao pôr do sol
2. **Passeios (3 fotos):** expedição/trilha nas falésias · Canoa Quebrada · Lagoa do Uruaú ou Praia das Fontes
3. **Equipe (1 foto):** equipe local da casa (pode ser cozinheira servindo, caseiro recebendo, etc.)

Pode me mandar conforme tiver — eu vou substituindo os placeholders um a um.
