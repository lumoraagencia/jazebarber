---
name: Jaze Barber
description: Sistema visual extraído da implementação atual.
colors:
  bg: "#000"
  panel: "#111"
  text: "#f3f2ef"
  muted: "#aaa9a7"
  cream: "#e9e3d9"
  red: "#d93232"
  blue: "#285eaf"
  line: "#2b2b2b"
  light: "#eee"
  white: "#fff"
  red-hover: "#bc2424"
  input-bg: "#202020"
  input-border: "#444"
  focus: "#76aafa"
  error: "#ff9999"
typography:
  display:
    fontFamily: "Barlow, 'Arial Narrow', sans-serif"
    fontSize: "clamp(86px,10.6vw,158px)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Barlow, 'Arial Narrow', sans-serif"
    fontSize: "clamp(55px,6.1vw,88px)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "21px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "15px"
    lineHeight: 1.65
  button:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 800
    lineHeight: 1.4
rounded:
  button: "3px"
  field: "5px"
  time: "6px"
  card: "12px"
  panel: "14px"
  circle: "50%"
spacing:
  gap-8: "8px"
  gap-10: "10px"
  gap-18: "18px"
  gap-24: "24px"
  panel: "28px"
  gutter: "56px"
  gutter-tablet: "36px"
  gutter-mobile: "24px"
  gutter-small: "20px"
components:
  button-red:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "15px 23px"
  button-red-hover:
    backgroundColor: "{colors.red-hover}"
  button-black:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "15px 23px"
  button-light:
    backgroundColor: "{colors.light}"
    textColor: "{colors.panel}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "15px 23px"
  field:
    backgroundColor: "{colors.input-bg}"
    textColor: "{colors.white}"
    rounded: "{rounded.field}"
    padding: "14px"
  service-card:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text}"
    rounded: "{rounded.card}"
    padding: "28px 24px 25px"
  booking-panel:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.panel}"
---

# Design System: Jaze Barber

## Overview

Registro descritivo de `app/globals.css` e `app/page.tsx`, com contexto de `PRODUCT.md` e `SURFACE.md`. O código é a fonte de verdade. Não foi criado um nome conceitual nem presumida aprovação de escolhas qualitativas.

A implementação combina fundo preto, títulos condensados, fotografias recortadas sobre creme e acentos de barbearia. A tipografia grande marca seções; textos de apoio e controles usam Manrope. A proveniência das imagens e fontes está em [ASSETS.md](ASSETS.md).

**Key Characteristics:**
- Preto como base e painéis discretamente mais claros.
- Títulos condensados e cartões de catálogo com profundidade.
- Vermelho nas ações de agendamento; azul nos detalhes de barbearia.
- Fotografia e movimento ligados ao material fornecido.

## Colors

**Primary:** `red` identifica ações de agendamento e a etapa atual. O botão preto também assume vermelho no hover.  
**Secondary:** `blue` integra a faixa decorativa dos serviços; o poste usa variações locais de vermelho e azul.  
**Neutral:** `bg`, `panel`, `text`, `muted` e `line` estruturam fundo, superfícies, texto e separadores. `cream` pertence ao catálogo; `light` a ações e seleções claras.  
**Feedback:** `focus` marca o foco visível; `error` identifica erros. O atalho WhatsApp tem verde próprio, observado no código, sem substituir a cor de agendamento.

Os valores no frontmatter são extraídos, não uma normalização de todas as cores locais. O CSS contém variações adicionais para bordas, gradientes e textos auxiliares.

## Typography

Barlow é o nome CSS da fonte local Barlow Condensed Bold. Manrope local atende corpo, navegação, campos e preços, com faixa declarada de pesos 200–800.

Display e headline correspondem aos tamanhos desktop; até 760px, o hero usa `clamp(55px,12.7vw,88px)` e os títulos gerais usam 61px. Títulos do agendamento possuem tamanho próprio. O catálogo usa nomes verticais em Barlow e números de horário/data com algarismos tabulares. Textos de apoio geralmente variam entre 10px e 14px; o corpo base não é aplicado uniformemente a todos os parágrafos. Campos de contato mantêm 16px.

## Layout

Contêiner de conteúdo de até 1280px; cabeçalho e hero de até 1600px. Os gutters correspondem à escala do frontmatter. A seção sobre usa duas colunas 1:1.1, com 100px de intervalo; agendamento usa 1:1.14 e 90px. Serviços usam quatro colunas com intervalo de 18px.

Em até 1050px: serviços passam a duas colunas e os intervalos entre colunas diminuem. Em até 760px: navegação vira menu expansível, sobre e agendamento empilham, títulos e cartões diminuem. Serviços permanecem em duas colunas, agora com intervalo de 12px. Em até 360px: gutters e controles recebem ajustes adicionais.

O catálogo tem perspectiva de 1400px e cartões centrais de 390 × 550px; até 1050px a largura é 360px; até 760px são 300 × 470px; até 360px a largura é 275px. A máquina fica em palco sticky de 100svh dentro de uma faixa de 250svh, reduzida para 220svh no mobile. Em desktop, a imagem do hero tem altura de 76%, ajuste contain e máscaras nas bordas; prevalecem os overrides finais do CSS.

## Elevation & Depth

Painéis de formulário e serviços usam contraste tonal e bordas. O catálogo combina translação, rotação, escala, luminosidade e sombras; o override final mantém opacidade 1. Sua sombra normal é `16px 26px 55px #0008`, e a central é `18px 30px 65px #000b`. O atalho WhatsApp usa `0 7px 25px #0006`; o poste tem drop-shadow próprio.

## Shapes

Botões possuem cantos discretos; campos, cartões e painéis usam raios distintos registrados no frontmatter. Controles de seta, indicadores de etapa e o atalho WhatsApp são circulares. Bordas de 1px delimitam painéis e entradas. Recortes fotográficos ficam contidos nos cartões de catálogo; nomes verticais fazem parte dessa composição.

## Components

- **Botões:** vermelho, preto e claro; altura mínima de 54px, ícone separado por 24px. Hover sobe 2px; desabilitado usa opacidade .35 e remove a transformação. Até 760px, padding de 14px 19px e texto de 12px.
- **Campos:** fundo escuro, borda de 1px, placeholder cinza e caret vermelho. Foco global de 2px com offset de 5px. Select de serviço usa tratamento mais compacto.
- **Navegação:** links desktop de 12px; hover branco. Até 760px, painel absoluto abaixo do cabeçalho de 74px, aberto por botão com estado expandido.
- **Serviços:** cartões clicáveis com preço, tesoura, seta e faixa branca/vermelha/azul. Hover clareia o fundo, altera a borda e sobe 4px.
- **Catálogo:** cartão central selecionado; navegação por setas, pontos, teclado e gesto horizontal. O botão de agendamento recebe foco apenas no cartão central.
- **Horários e calendário:** seleção clara sobre fundo escuro; indisponíveis riscados e desabilitados. Os horários têm scroll horizontal com snap; calendário usa sete colunas.
- **Agendamento:** etapas horário, data, contato e resumo; status de carregamento, erro, confirmação e link de cancelamento são apresentados no painel.

Transições comuns duram .2s; o catálogo usa .65s com `cubic-bezier(.16,1,.3,1)`. O poste anima em 2s linear. Com movimento reduzido, o CSS remove transições, rolagem suave e animação do poste; reduz a faixa da máquina para 160svh. A sequência da máquina continua vinculada ao scroll no JavaScript.

## Do's and Don'ts

- **Do** reutilizar os tokens reais e verificar os overrides responsivos ao estender componentes.
- **Do** manter foco visível, rótulos e estados selecionado, indisponível e erro.
- **Do** consultar ASSETS.md antes de substituir imagem ou fonte.
- **Don't** inventar aprovação estética, histórico, depoimentos ou proveniência.
- **Don't** tratar o movimento reduzido atual como desativação da sequência JavaScript.

