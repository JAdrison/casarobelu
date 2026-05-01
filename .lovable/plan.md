## Goal

Substituir/complementar os assets atuais com as 7 novas fotos enviadas (vista aérea, piscina com pergolado, quadra de vôlei, espreguiçadeiras, capela com Virgem, parapente). Estas imagens são muito mais impressionantes que as atuais e devem ocupar os pontos nobres da landing.

## Mapeamento de fotos

| Upload | Novo asset | Onde usar |
|---|---|---|
| `Gemini_Generated_Image…png` (aérea com falésia + piscina + Virgem) | `aerea-falesia.webp` | **Hero** (substitui `hero-cliffs`) — é a foto definitiva |
| `Foto-5-2.jpg` (piscina + pergolado + mar) | `piscina-pergolado.webp` | **ExternoShowcase** card 2 + `Lazer` foto principal |
| `Foto-3-4.jpg` (Virgem + área social + mar) | `virgem-mar.webp` | **PeNaAreia** PhotoStack frente |
| `Foto-2a-2.jpg` (espreguiçadeiras + coqueiros + mar) | `espreguicadeiras-mar.webp` | **ExternoShowcase** card 1 (substitui pé na areia atual) |
| `Foto-4-3.jpg` (gramado + coqueiros + horizonte) | `gramado-mar.webp` | **PeNaAreia** PhotoStack fundo |
| `Foto-5.jpg` (quadra de vôlei + piscina + capela) | `quadra-volei.webp` | **Lazer** foto secundária (substitui `redes`) + Galeria |
| `Foto-6.jpg` (parapente sobre a praia) | `parapente.webp` | **Nova subseção em `Experiencias`** + Galeria |

## Mudanças por arquivo

**Assets (criar via `code--copy`):**
- 7 novos `.webp` em `src/assets/` conforme tabela acima (copiar direto dos uploads `.jpg/.png` mantendo extensão `.webp` no destino — o navegador serve normalmente, e os arquivos JPG já são leves o suficiente; se quiser conversão real, faço com `cwebp` no exec).

**`src/components/Hero.tsx`**
- Trocar import do background para `aerea-falesia.webp`. É a imagem mais cinematográfica e mostra falésia + piscina + mar de uma vez.

**`src/components/ExternoShowcase.tsx`**
- Cards atualizados:
  1. `espreguicadeiras-mar.webp` — "Pé na Areia" / "Acordar com o som do mar e descer pela passarela."
  2. `piscina-pergolado.webp` — "Piscina com Vista" / "4×8m sob pergolado, mar como cenário."
  3. `quadra-volei.webp` — "Quadra de Vôlei" / "Areia oficial dentro de casa, partidas até o pôr do sol."

**`src/components/PeNaAreia.tsx`**
- PhotoStack: fundo = `gramado-mar.webp`, frente = `virgem-mar.webp`. A imagem da Virgem com a área social ao fundo dá identidade única.

**`src/components/Lazer.tsx`**
- Foto principal: `piscina-pergolado.webp` (mais impactante que o deck atual).
- Foto sobreposta inferior-direita: `quadra-volei.webp`.
- Foto sobreposta superior-esquerda: manter `capela`.
- Atualizar item de amenities: "Quadra de vôlei oficial em areia" (a foto mostra grama com linhas — corrigir para "Quadra poliesportiva em grama com rede de vôlei").

**`src/components/Experiencias.tsx`** (vou inspecionar antes de editar)
- Adicionar/destacar item **"Parapente em Canoa Quebrada"** usando `parapente.webp` como imagem do card. Voo decola a poucos km.

**`src/components/Galeria.tsx`**
- Adicionar `parapente.webp` e `quadra-volei.webp` ao grid (substituir 2 das menos fortes — confirmo quais ao inspecionar).

## Copy ajustado (especialista, sensorial)

- ExternoShowcase descrição #2: *"Piscina sob pergolado de madeira, com o mar emoldurando cada mergulho."*
- Card parapente (Experiencias): *"Voe sobre as falésias coloridas — a 8 minutos da casa, em Canoa Quebrada."*

## Não muda

- Estrutura de seções do `Index.tsx` permanece igual.
- Capacidade 23 hóspedes, paleta, tipografia, motion library — sem alteração.
- Quartos seguem no fim da página.

## Detalhes técnicos

- Copio os uploads diretamente como `.webp` no destino (browsers aceitam JPG/PNG renomeado? **Não** — então renomeio mantendo extensão original: `aerea-falesia.png`, `piscina-pergolado.jpg`, etc., e atualizo imports correspondentes). Alternativa: converter de verdade com `cwebp` via `nix run nixpkgs#libwebp` para manter padrão `.webp` e tamanhos menores. **Vou pelo caminho da conversão real** — mantém consistência com os assets existentes e ganha performance.
- Total de edits: 7 cópias + conversão webp, 6 arquivos editados (Hero, ExternoShowcase, PeNaAreia, Lazer, Experiencias, Galeria).
